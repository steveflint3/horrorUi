 <img alt="T1CG Logo" src="./src/assets/svg/t1cgLogo.svg" style="display: block" width="100">

TIER 1 CONSULTING GROUP

# Buggy T1CG.io

A fork of T1CG website with hidden bugs inside.

## Get Started

To clone copy and run the project:

```bash
# Clone this repository
git clone https://github.com/t1cg/training-ui.git
# Copy buggy t1cgIo into your repo
cp -R training-ui/t1cgio your-repo-directory/t1cgio-fix
# Install required npm packages
cd your-repo-directory/t1cgio-fix
npm i
# Launch the development server
npm start
```

## VS Code

This repo includes a .vscode directory that has some basic settings, extension suggestions, and a stylesheet for custom markdown preview styling. If you do not use VSCode, you can ignore this directory.

## Husky / Commitlint

This project uses Husky and commitlint for to validate commit messages and for running pre-commit checks. Please make sure to only use valid commit messages. These commit messages will be used to automatically generate a changelog. You can view committing guidelines in the contribution.md.

## Linting

This project uses tslint, stylelint and prettier to keep our code clean and consistent. You can run the linters/formatter manually using the scripts described below, but they will automatically be run each time you start a commit and must pass before you can do so.

## TypeScript

This entire project (minus the configuration files and a couple others) is written in TypeScript. Your code must successfully compile before you can commit any code. The compiler is run automatically when you start a commit

## Available NPM Scripts

To run any of the following scripts:

```
npm run <command>
```

| Command          | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `start`          | starts the development server locally on port 8080                 |
| `build`          | (not yet complete) generates files for the production server       |
| `lint`           | checks the project for tslint errors                               |
| `lint-fix`       | checks for and fixes (if possible) tslint errors                   |
| `prettier`       | checks for prettier formatting errors                              |
| `prettier-fix`   | check for and fixes (if possible) prettier formatting errors       |
| `lint-style`     | checks for scss style issues                                       |
| `lint-style-fix` | checks for and fixes (if possible) scss style issues               |
| `type`           | compiles the typescript source to check for typescript errors      |
| `version`        | used to generate the changelog when the npm version is incremented |

