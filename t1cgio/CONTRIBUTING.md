# Contributing

The goal of this document is to give a quick overview of coding guidelines and other standards being used in this project.

## Feedback

If there is anything in this document or elsewhere in the project that you disagree with or thing could be improved, please it bring up to the team. Any comments and feedback are welcome.

## Coding Guidelines

These coding guidelines will only focus one areas that are not covered by the linters.

### Git

We will be using commit messages to automatically generate a changelog for the project. In order for this to work, we need to follow some commit message guidelines.

Commit messages should be in the following format

```bash
type(scope): commit message

body - optional

footer - optional
```

#### Type

`Type` can be any of the following:

- feat - a new feature
- fix - a bug fix
- docs - a change only to docs
- style - style changes
- refactor - refactoring
- test - updates to testing
- revert - undoing a previous commit
- chore - a task that must be done

#### Scope

`Scope` is optional. It is used to give context to your commit to let people know what area of the project is affected by your commit. If included, `scope` should be one of the following:

- home - changes to the home page
- blog - changes to the blog page(s)
- cloud - changes to the cloud solutions page
- comp - changes to the components library
- build - changes to the build config
- release - version changes

#### Message

`Message` is the main part of your commit. Please keep in concise. The commit message should complete the sentence: `When applied, this commit will...`

Message examples:

- `add title component to the library`
- `fix nav display on mobile screens`

Please keep commit messages imperative. For example don't say:

- `added new configuration options`

say:

- `add new configuration options`

> Imperative messages will not be enforced with the commit linter, but it is important for consistency, so please try to keep it in mind.

#### Body

`Body` should contain any additional information that is needed along with the commit message. A body is not required but can be useful for including additional information

#### Footer

`Footer` should be used to include a Jira Ticket number. Footer is optional, but should be included whenever the commit closes a ticket.

## TypeScript

### Exporting

Do not export types or functions unless you need to share it across multiple components

### Variable Naming

Please use concise, meaningful, non-verbose variable names. Variable naming is probably one of the most difficult aspects of programming and it is often overlooked. Some people say that you should make your variable names verbose so that anybody can understand what they contain. But, verbose is the wrong word. Verbose means that something is explained in "more words than are needed". We want our variable names to be concise: "brief but comprehensive".

```javascript
let n; // Bad: Meaningless
let nas; // Bad: Also meaningless
let numberOfCurrentlyActiveStatuses; // Bad: Verbose
let numActiveStatuses; // Good: Concise
//  ^^^ acceptable (commonly known) abbreviation
```

## CSS Modules / Sass

This project is set up to use css modules and sass. CSS Modules allow us to put our styles in context by their file placement, so we don't have to worry about complex style names like in traditional css with BEM conventions. Styles should be placed as close to their related component as possible, likely, in the same directory.

Because we are also using Sass, we can also benefit from things like style nesting.

If you haven't used CSS Modules before, you can learn more on their [github page](https://github.com/css-modules/css-modules)

## File Path Aliases

This project has several pre-configured file path aliases that should be used wherever possible. In general, if you are importing or referencing a file that is more than one directory above your current file, you should use an alias. The currently available aliases are:

| Alias         | Actual file path from root             |
| ------------- | -------------------------------------- |
| `@routes`     | [./src/routes](./src/routes)           |
| `@components` | [./src/components](./src/components)   |
| `@styles`     | [./src/global/sass](./src/global/sass) |
| `@assets`     | [./src/assets](./src/assets)           |

Example usage:

```
import Button from '@components/Button'
```

**This is a living document. Please edit accordingly.**
