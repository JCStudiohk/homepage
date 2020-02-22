# Development Guide

- **Never change on `master` branch.**
- **Always use `git branch` to check which branch you are currently in**
- All components should be `functional component` instead of `class`
- Layout class/ code like `.row` `.col-md-6` in bootstrap etc. should be separated from the UI component
- Never change codes that is not related to the feature you are doing, instead you should go to github and create issue base on the bug you found.

### Do this every time when you start working

1. use command `git fetch`
   to get the latest changes on the remote repository
2. go to branch **master** by using `git checkout master`
3. every time you fetch the latest changes on the remote repo,
   it **does not** mean you get the changes from remote to local pc,
   run `git pull` to get the actual changes to your current branch --`master`

### File Structure

These directories/ files you should be caring about.
All of our components will not go out the `src/` directory

```
.
+-- _src
|   +-- _components
|   |   +-- _layout
|   |   |   +-- // buttons, navbar, title, subtitle component should
|   |   |   +-- // be here
|   |   +-- layout.js // Since every page is a single file, we need a
|   |   +-- // layout component to save our development time.
|   |   +-- seo.js // Handling Site title and stuff
|   |   +-- // We will create folders here to place components for
|   |   +-- // page
|   |   +-- // e.g. _home, _about, _contact, etc.
|   +-- _images
|   |   +-- // All website assets should place here, including fonts
|   +-- _pages
|   |   +-- index.js <- homepage
|   |   +-- // <filename>.js, system will use filename as the url
|   |   +-- // e.g. about-us.js will be https://domain.com/about-us
+-- gatsby-config.js
+-- package.json
```

### Javascript ES6 export/ import

There is a keyword `default` for javascript

Case 1:

```
const HelloWorld = () => {
  return (
    <h1>Hello World</h1>
  );
};

export default HelloWorld

in above case, We need to import this component like this
import HelloWorld from 'path/to/component/';
```

Case 2:

```
export const HelloWorld = () => {
  return (
    <h1>Hello World</h1>
  );
};

in above case, We need to import this component like this
import { HelloWorld } from 'path/to/component/';
```

- **We Prefer Using Case 1 for Component**
- **And Prefer Using Case 2 for functions**

### When doing new feature/ bug fix...

even a simple navbar feature

1. create a new branch from `master`,
   `git checkout master`
   `git pull`
   `git checkout -b <feature_name>`
2. start
3. run `git add .` to track all your changes on that branch
4. run `git commit -m '<commit_description>'` to commit changes

### When the feature/ bug fix is done

1. check if the work tree is clean (Everything is committed)
   `git status`
2. if there are changes that is not commit, please follow step
   3 and 4 from `When doing new feature`
3. if everything is done, run `git push -u origin <exact same name as your branch>`

> eg. my feature is to create navbar and my branch is `create_new_navbar`
> then I should run `git push -u origin create_new_navbar`

4. go to [here](https://github.com/JCStudiohk/homepage), you should see a message that guides you to create pull request, follow it.
5. You will see a tab that is about `assignee`, please assign it to `Jamyth`

### VS Code plugins that might be useful

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- **[One VS Code setting that will change your life](https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c)**
