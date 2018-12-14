# Front-end developer's best friend

**Quick guide:** Locate gulpfile.js in /gulp/ and run `npm install --save-dev` then `gulp`. 

```
Update December 14th, 2018:
* Updated Bootstrap base to v4.1.3
* Rewritten script for Gulp v4 compatibility
* More polished script and useful features
```

This kit contains latest version of Bootstrap and gulpfile.js with SCSS compiler, PostCSS support, auto-reloading browser, auto-prefixer for cross-platform and device compatibility, and combining CSS files to singular minified CSS file. 

This repo is for front-end developers, the base kit for them to either use or build on, and use it so they can start a new project right away without setting up the same thing all over again and save them times.

#### Kit descriptions
* index.html minimal boilerplate
* Bootstrap framework
* Gulp scripts, configured in `/gulp/gulpfile.js`

_Note: It is not required to use gulp, but recommended. If you want to learn how to run the gulp script, please refer to the wiki [how to run gulp for this kit](https://github.com/dmxt/bootstrap-gulp-scss-kit/wiki/How-to-run-gulp-for-this-kit), shorter 5 minutes guides, or learn with me in more detailed [Gulp tutorial for Windows users](https://github.com/dmxt/beginner-gulp-tutorial-on-windows)'s material for beginners to start using gulp. I also made tutorial for any development workflow on Windows OS on [Medium article](https://uxdesign.cc/designers-workflow-on-windows-57393856ae59)._

#### Detailed gulpfile.js script content
* **BrowserSync** — a live view for your site under development, refreshes automatically on a file change.
  * Starts a local server, put the site live and provide a working URL for any devices on the local network to open.
  * Automatically refresh a site when a watched file is modified for an instant live view on all devices.
* **SASS/SCSS compiler** — automatically compiles SCSS to CSS on \*.scss file save.
* **PostCSS** — PostCSS support.
* **Concat** — combining multiple CSS files to singular css file.
* **Minifier** — minifies CSS file to .min.css.
* **Plumber** — prevents gulp crash on SCSS error and various other reasons.
* **Notify** — tray notification when you get a SCSS compile error.
* **Autoprefixer** — generates extra CSS for support for cross-platforms, browsers and devices.
* **CSS Sourcemaps** — generates sourcemaps for CSS debugging

_Note: SCSS is used in this kit, therefore SASS wasn't mentioned, but this SASS/SCSS compiler and other scripts work for SASS/*.sass files, it may require a minor modification in gulpfile.js since I haven't tested it. All scripts are written to run in the fashion as described above._

#### Summary
I use this repo personally, so this repo will be always maintained continuously.

Feel free to fork and make your own starter kit. If you think you can contribute, just pull `gulpfile.js` and script in any method that you think that would contribute to this starter kit. You also can modify this README for contribution purposes, I would recognize your effort and highly appreciate it. If appropriate, I'll grant the push request.

_To request a new version and feature or report a bug, please open an issue._

---

### Unnecessary files:
When you clone this repository, you may remove these files since they're deemed as unnecesary in working stage.
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
   * Inner subdirectories for images, i.e `assets/img/icons/*`, apply your own preferences for organizing images.
* Fonts belong to `assets/fonts/**/*`.
* Custom JS belong to `assets/js/*`
* `vendors` folder is for libraries and other JS/CSS files that are not your own.
* Any other materials, that doesn't belong in other folder go in `assets/**/*`, name them by your own preferences.
