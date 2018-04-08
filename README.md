# ForYouSee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Requirements

- Node v9.0.0+ (check https://nodejs.org)
- Yarn v1.5.0+ (check https://yarnpkg.com/en/docs/install)
- Angular CLI (use `yarn global add angular-cli`)
- NW Builder (use `yarn global add nw-builder`)

## How to use

To use this project simple clone this repository in your local machine and run in a console the following commands, in order, on the root folder:

- yarn install
- ng build --prod
- yarn run nw-build

The current nw.js use is set to a win64 environment only, this can be modified on main `package.json` file to include other environments like `linux32,linux64,osx64`.
The executable .exe (Windows case) should be under `./build/4yousee/[env]`, you can just run the `4yousee.exe` file.
