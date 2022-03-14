# 11ty-web-template

Use this template for quick prototypes and simple websites.  This template uses the [Eleventy (11ty) static site generator](https://www.11ty.dev/).

## Quickstart

Use `node --version` to verify you're running Node 12 or newer.

Download this repository.

Run this command to build the site:

``` bash
npx @11ty/eleventy
```

Run this command to start the web server:

``` bash
npx @11ty/eleventy --serve
```

Open `http://localhost:8080/` to see the site.

## Publish Using GitHub Pages

### 11ty Config File

The `.eleventy.js` config file needs the following two settings for basic GitHub Pages publishing:

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

## Notes

### NPM Setup

11ty does not automatically clean the output folder before building so any deleted source files will need to be deleted from the output folder.  One easy way to take care of this is to just delete the entire output folder before building. This can be done using a shortcut script built into the `package.json` file.

Here are some shortcut scripts that have already been added in this repo:

``` js
"build": "npx @11ty/eleventy",
"serve": "npx @11ty/eleventy --serve"
```

Scripts can be chained together like this:

``` js
"clean": "rm -rf docs",
"build": "npx @11ty/eleventy",
"clean:build": "npm run clean && npm run build"
```

Use the following commands to run these scripts:

``` bash
npm run clean:build
npm run serve
```

### Liquid Templates

#### Using Includes

To use includes without quotes, they need to be enabled via `dynamicPartials: false` in the Liquid options. Front matter in the include file will not be evaluated. By default, includes must be formatted this way: `{% include 'user' %}`, which looks for `_includes/user.liquid`.
