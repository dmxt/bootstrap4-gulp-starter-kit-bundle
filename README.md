# Front-end developer's best friend

### Bootstrap 4 starter kit with gulp SCSS compiler and browser sync
### Quick guide
Locate gulpfile.js in /gulp/ and run `npm install --save-dev` then `gulp`. 

```
Update December 14th, 2018:
* Updated Bootstrap base to v4.1.3
* Rewritten script for Gulp v4 compatibility
* More polished script and useful features
```

This kit contains the latest version of Bootstrap and gulpfile.js with SCSS compiler, PostCSS support, auto-reloading browser, auto-prefix for cross-platform and device compatibility, and combining CSS files to a singular minified CSS file. 

This repo is for front-end developers, the base kit for them to build on, and use it so they can start a new project right away without setting up the same thing all over again and save valuable time.

#### Kit descriptions
* index.html minimal boilerplate
* Bootstrap framework
* Gulp scripts, configured in `/gulp/gulpfile.js`

_Note: It is not required to use gulp, but I recommend you to. [Learn how to run gulp for this kit within 5 minutes](https://github.com/dmxt/bootstrap-gulp-scss-kit/wiki/How-to-run-gulp-for-this-kit) or learn more in more detailed [Gulp tutorial fot Windows user](https://github.com/dmxt/beginner-gulp-tutorial-on-windows)._

_I also made a tutorial for a [development workflow on Windows](https://uxdesign.cc/designers-workflow-on-windows-57393856ae59), useful for anybody who want to discover more development software on Windows._

#### Detailed gulpfile.js script content
* **BrowserSync** — a live view for your site under development, refreshes automatically on a file change.
  * Starts a local server, put the site live and provide a working URL for any devices on the local network to open.
  * Automatically refresh a site as soon as a watched file got modified on save for an instant live view on all devices.
* **SASS/SCSS compiler** — automatically compiles SCSS to CSS on \*.scss file save.
* **PostCSS** — PostCSS support.
* **Concat** — combining multiple CSS files to single CSS file.
* **Minifier** — minifies CSS file to .min.css.
* **Plumber** — prevents gulp crash on SCSS error and various other reasons.
* **Notify** — tray notification when you get an error from SCSS compiler.
* **Autoprefixer** — generates new CSS for support for the cross-platform browser, and device supports.
* **CSS Sourcemaps** — generates source maps for CSS debugging

_Note: This kit uses SCSS, but the included gulp scripts like SASS/SCSS compiler work just as well for SASS files. However, it may require a minor modification in gulpfile.js since I haven't tested it._

#### Summary
I use this repo personally, so I'll be maintaining this repo.

Feel free to fork and make your starter kit; if you want, let me know what you created!

Contributing this repo is encouraged. You also can modify this README for contribution purposes, and your efforts will get recognized and highly appreciated your effort.

_To request a new version and feature or report a bug, please open an issue._

---

### Unnecessary files:
When you clone this repository, you may remove these files since they're unnecessary in the working stage.
* `LICENSE`
* `README.md`

---

### This kit contains:

#### Files
* `gulp/gulpfile.js`
* `gulp/package.json`
* `assets/css/bootstrap.min.css`
* `assets/js/vendors/jquery-3.3.1.slim.min.js`
* `assets/js/vendors/bootstrap.bundle.min.js` (the bundle is a bootstrap.js with popper.js inbuilt and majority of Bootstrap JS effects require popper.js (for modal, dropdown, popover, etc)
* `index.html`

**Non-existing git folder due to empty content and the guideline:**
* `assets/scss/main.scss` will generate the minified CSS `assets/css/main.min.css` on \*.scss modifications and file saves, as per to gulpfile.js rules.

* Images belong to `assets/img/**/*` (or `images` if you prefer)
   * Inner subdirectories for images, i.e. `assets/img/icons/*,` apply your preferences for organizing images.
* Fonts belong to `assets/fonts/**/*`.
* Custom JS belong to `assets/js/*`
* `vendors` folder is for libraries and other JS/CSS files that are not your own.
* Any other materials, that doesn't belong in other folder go in `assets/**/*,` name them by your preferences.
