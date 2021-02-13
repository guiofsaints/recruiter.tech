# Contributing

You want to contribute to the project? Awesome!

## Project Setup

We're really happy you want to contribute to the project! The following steps will get you up and running:

1. Fork and clone the repo;
2. Install the required dependencies

   ```bash
    npm install
   ```

3. Start up the dev server:

   ```bash
   npm run dev
   ```

Open http://localhost:3000 with your browser to see the result.

### Directories

You need to follow a simple structure pattern:

- Every new component need to have it's specific folder, this folder need to be
  named as the component name;
- The component folder need the component file itself and an `index.js` file
  that export that component;
- You need to import and export that component on `index.js` that are on
  components folder;
- When you finish your work, you'll need to commit with messages following
  [conventional commit](https://www.conventionalcommits.org/) pattern.
  The easiest way to do this is running

  ```bash
  npm run commit
  ```

  from within the root of this repository;

Open your PR!
