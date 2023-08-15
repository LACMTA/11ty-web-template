# 11ty-web-template

Use this template for quick prototypes and simple websites.  This template uses the [Eleventy (11ty) static site generator](https://www.11ty.dev/).

## Quickstart

1. Use `node --version` to verify you're running Node 16 or newer.

2. Fork or use this template repository to create a new project.

3. Set up the configuration for your project:

    - `.eleventy.js` - update `pathPrefix` to your project's folder/repository name
    - `src/index.html` - update the `title` for your project in the yml headmatter
    - `package.json` - update the URLs for the new repository

4. Install `uswds`:

    ``` bash
    npm install @uswds/uswds --save-dev
    ```

5. Install `uswds-compiler`:

    ``` bash
    npm install @uswds/compile --save-dev
    ```

6. Start the gulp process and have it watch for changes to recompile the styles:

    ``` bash
    npx gulp watch
    ```

7. Build and serve the site (will automatically reload when files change):

    ``` bash
    npm run start
    ```

    ❗❗❗ If this is your first time using 11ty, the `@11ty/eleventy` package will be installed. Type `y` when prompted to proceed.

8. Open `http://localhost:8080/` to view the site.

9. Turn on GitHub Pages by selecting to deploy from the `main` branch `/docs` folder.

## Configuration

### Publish to GitHub Pages

This web template has already been set up to publish on GitHub Pages with these following settings:

- `/.eleventy.js`
  - Output directory changed from the default `_site/` to the directory used by GitHub Pages: `docs/`.
  - Path prefix added using the repository name.  11ty builds links using the root as the default but GitHub Pages with no custom domain will follow this URL format: `https://{account}.github.io/{repository-name}/`.

### Relative Paths

Use the `url` filter when creating relative links so that 11ty builds paths with the pathPrefix.

### 11ty Ignored Files

The `.eleventyignore` works like other ignore files.  The `README.md` file is added here so that 11ty does not try to build the README into a page.

### Styles

The `_theme/_uswds-theme-custom-styles.scss` file is set up to import the `assets/css/styles.scss` file. If site styling becomes more complicated, you may want to expand the structure.

## Design System

This template uses the [USWDS](https://designsystem.digital.gov/).

Install the USWDS source code package:

``` bash
npm install uswds --save-dev
```

Install USWDS compiler:

``` bash
npm install @uswds/compile --save-dev
```

Create `gulpfile.js` and add the compile settings:

``` js
const uswds = require('@uswds/compile');

uswds.paths.dist.theme = './_theme';
  
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
```

Initialize the USWDS installation with gulp, copying the asset files out of the `node_modules` directory, combining them with your theme files, and then exporting them to the project directories specified in the gulpfile.

``` bash
npx gulp init
```

After the script runs, you should have new USWDS assets in an ./assets/uswds directory, theme files in a ./_theme directory, and compiled CSS in the ./assets/uswds/css directory.

Create a `styles.scss` file in the `assets/css/` directory and import that file into `_theme/_uswds-theme-custom-styles.scss`:

``` scss
@import "../assets/css/styles.scss";
```

Use this file for customizations to the USWDS.  The gulpfile needs to point to it to watch for changes:

``` js
uswds.paths.src.projectSass = './assets/css';
```

To recompile the CSS every time there are changes to the project Sass, run:

``` bash
npx gulp watch
```

## Notes

### NPM Setup

This repository's `package.json` file was initialized using `npm init -y`.

11ty does not automatically clean the output folder before building so any deleted source files will need to be deleted from the output folder.  One easy way to take care of this is to just delete the entire output folder before building. This can be done using a shortcut script built into the `package.json` file.

Here are some shortcut scripts that have already been added in this repo:

``` js
"build": "npx @11ty/eleventy",
"serve": "npx @11ty/eleventy --serve"
```

Scripts can be chained together like this:

``` js
"clean": "npx rimraf docs",
"build": "npx @11ty/eleventy",
"clean:build": "npm run clean && npm run build",
"start": "npm run clean && npm run build && npm run serve"
```

Use the following command to get started:

``` bash
npm run start
```

### Liquid Templates

#### Using Includes

To use includes without quotes, they need to be enabled via `dynamicPartials: false` in the Liquid options. Front matter in the include file will not be evaluated. By default, includes must be formatted this way: `{% include 'user' %}`, which looks for `_includes/user.liquid`.
