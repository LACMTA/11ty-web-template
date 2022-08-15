# 11ty-web-template

Use this template for quick prototypes and simple websites.  This template uses the [Eleventy (11ty) static site generator](https://www.11ty.dev/).

## Quickstart

Use `node --version` to verify you're running Node 12 or newer.

Download this repository.

Run this command to build serve the site:

``` bash
npm run start
```

❗❗❗ If this is your first time, the `@11ty/eleventy` package will be installed. Type `y` when prompted to proceed.

Open `http://localhost:8080/` to view the site.

### Config

Update the following files for each new project:

- `.eleventy.js` - update `pathPrefix`
- `src/_includes/default.liquid` - update `siteTitle`

## Publish Using GitHub Pages

### 11ty Config

The `.eleventy.js` config file needs the following two settings for GitHub Pages publishing:

1. Change the output directory from the default `_site/` to the directory used by GitHub Pages: `docs/`.
2. Add a path prefix with the repository name because 11ty builds links using the root as the default, but GitHub Pages without a custom domain follow the format `account.github.io/repository-name/`.

Example:

``` js
module.exports = function(eleventyConfig) {
    return {
        pathPrefix: "/11ty-website-example/",
        dir: {
            output: "docs"
        }
    }
}
```

### 11ty Ignored Files

The `.eleventyignore` works like other ignore files.  The `README.md` file is added here so that 11ty does not try to build the README into a page.

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
