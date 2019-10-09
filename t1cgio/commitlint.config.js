module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', ['home', 'blog', 'cloud', 'comp', 'build', 'release']],
    'type-enum': [
      2,
      'always',
      ['build', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'chore'],
    ],
  },
};
