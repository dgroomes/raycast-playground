# bookmark-opener

This is a "hello world"-style Raycast extension that opens a bookmark in your web browser.


## Overview

I want to explore the basics of developing a Raycast extension and understand the promise of "what is possible" in
Raycast. I scaffolded this project from [Raycast's example extensions](https://github.com/raycast/extensions). A "bookmark
opener" extension is not actually useful for a Raycast user, because you would use the Raycast's native [Quicklinks extension](https://www.raycast.com/extensions/quicklinks),
but I made this for the sake of learning.

It's interesting that the Raycast CLI tool `ray` actually requires you to use ESLint and Prettier. That's perfectly
fine, and I'll use them even though I typically only use the core "tech of interest" in an exploratory project.


## Instructions

Follow these instructions to build and run this extension in Raycast.

1. Pre-requisite: Node.js
   * I used Node 20.17.0
2. Install dependencies
   * ```shell
     npm install
     ```
3. Lint the extension using Raycast's linter
   * ```shell
     npx ray lint
     ```
   * This is an important step to make sure an extension is compatible with Raycast. For this project, the linter will
     complain about "Invalid author ..." because we are omitting an "author" field in the `package.json`. We don't need
     this because we're only building and using the extension locally. Even when I include it, `raycast` does some remote
     validation and complains that the author is not found, and so I don't know how to resolve this issue. 
   * If issues are found, and you have vetted them, then run the same command with the `--fix` option to automatically
     fix them.
   * ```shell
     npx ray lint --fix
     ```
4. Continuously build and run the extension in Raycast
   * ```shell
     npx ray develop
     ```
   * Now, use the Raycast launcher to interact with the commands of this extension. Use the "Open Bookmark" extension to
     open 


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Deal with the icon.
