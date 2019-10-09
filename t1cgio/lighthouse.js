const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

var http = require('http');
var fs = require('fs');
var path = require('path');

// Spin up a local server
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework
http
  .createServer(function(request, response) {
    var filePath = './dist' + request.url;
    const ext = path.extname(filePath);
    if (ext === '') {
      filePath = './dist/index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.mp4': 'video/mp4',
      '.otf': 'application/font-otf',
      '.svg': 'application/image/svg+xml',
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
      if (error) {
        if (error.code == 'ENOENT') {
          fs.readFile('./404.html', function(error, content) {
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
          });
        } else {
          response.writeHead(500);
          response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
          response.end();
        }
      } else {
        response.writeHead(200, {'Content-Type': contentType});
        response.end(content, 'utf-8');
      }
    });
  })
  .listen(4001);
console.log('Server running at http://127.0.0.1:4001/');

// Lighthouse Code

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr);
    });
  });
}

const opts = {
  onlyCategories: ['performance', 'seo', 'best-practices', 'accessibility'],
  emulatedFormFactor: 'desktop',
  throttlingMethod: 'simulate',
  // Throttling settings based on the chrome devtools defaults
  // https://github.com/GoogleChrome/lighthouse/blob/8f500e00243e07ef0a80b39334bedcc8ddc8d3d0/lighthouse-core/config/constants.js#L19-L26
  throttling: {
    rttMs: 150,
    throughputKbps: 1.6 * 1024,
    requestLatencyMs: 150,
    downloadThroughputKbps: 1.6 * 1024,
    uploadThroughputKbps: 750,
    cpuSlowdownMultiplier: 4,
  },
  skipAudits: ['uses-http2', 'is-on-https'],
  chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'],
};

function Result(score, baseline) {
  this.Score = score;
  this.Baseline = baseline;
}

const pages = ['/', '/services', '/technology', '/about', '/contact'];
const testUrl = 'http://localhost:4001';
const liveUrl = 'https://t1cg.io';

async function runTest(page) {
  try {
    // These objects will hold the table data to compare the current stats
    // against the stats of the live site
    let thisCommit = {};
    let currentLive = {};

    // Test the page on the current branch
    const resultsCurrent = await launchChromeAndRunLighthouse(`${testUrl}${page}`, opts);
    for (const cat in resultsCurrent.categories) {
      thisCommit[cat] = resultsCurrent.categories[cat].score;
    }

    // Test the page on the live site
    const resultsLive = await launchChromeAndRunLighthouse(`${liveUrl}${page}`, opts);
    for (const cat in resultsLive.categories) {
      currentLive[cat] = resultsLive.categories[cat].score;
    }

    let failed = false;
    let results = {};

    // Compare the results
    for (const cat in thisCommit) {
      // Currently, this checks if the current commit has lower scores than
      // the live site. These numbers do fluctuate, so there may be a need to
      // add some sort of buffer to the comparison at some point
      if (thisCommit[cat] < currentLive[cat]) {
        failed = true;
      }

      // Using the Result class to improve the console.table display
      results[cat] = new Result(thisCommit[cat], currentLive[cat]);
    }

    console.table(results);

    if (failed) {
      console.log('\x1b[31m\u2715 Page %s has failed\x1b[0m', page);
      return false;
    } else {
      console.log('\x1b[32m\u2714 Page %s has passed\x1b[0m', page);
      return true;
    }
  } catch (err) {
    console.log('Something went wrong, are you sure the site is being served locally?');
    console.log(err);
    process.exit(1);
  }
}

async function testRunner() {
  const failedPages = [];
  let allPassed = true;

  for (const page of pages) {
    console.log('\nRunning on: %s', page);
    const pass = await runTest(page);
    if (!pass) {
      allPassed = false;
      failedPages.push(page);
    }
  }

  if (!allPassed) {
    console.log('\x1b[31m%s\x1b[0m', 'FAIL: Current branch has lower scores than the deployed version');
    process.exit(1);
  } else {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'PASS: Current branch has equal or better scores than the deployed version'
    );
    process.exit(0);
  }
}

testRunner();
