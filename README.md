# About this kit
#### Kit descriptions
* index.html minimal boilerplate
* Bootstrap framework
* Gulp scripts, configured in `/gulp/gulpfile.js` with BrowserSync, compiles SASS/SCSS, minifies compiled CSS and notifies you on SCSS compile error with a toast notifier. There's more details about this gulp script further below on this readme.

#### Summary
This kit contains latest version of Bootstrap and gulpfile.js with SCSS compiler and BrowserSync. This repo is for front-end developers, the base kit for them to either use or build on, and use it so they can start a new project right away without setting up the same thing all over again.

I use this repo personally, so this repo will be always maintained continuously.

Basic knowledge in gulp will be helpful, however I have a tutorial for gulp and Windows terminal beginners, as mentioned below.

Feel free to fork and make your own starter kit. If you think you can contribute, just pull `gulpfile.js` and script in any method that you think that would contribute to this starter kit. You also can modify this README for contribution purposes, I would recognize your effort and highly appreciate it. If appropriate, I'll grant the push request.

_To request a new version and feature or report a bug, please open an issue._

_This repo is also part of [my gulp tutorial for Windows users](https://github.com/dmxt/beginner-gulp-tutorial-on-windows)'s material for beginners to start using gulp. I also made tutorial for any development workflow on Windows OS on [Medium article](https://uxdesign.cc/designers-workflow-on-windows-57393856ae59)._

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

---

### Detailed gulpfile.js script content:
* **BrowserSync** — a live view for your site under development, refreshes automatically on a file change.
  * Starts a local server, put the site live and provide a working URL for any devices on the local network to open.
  * Automatically refresh a site when a watched file is modified for an instant live view on all devices.
* **SASS/SCSS compiler** — automatically compiles SCSS to CSS on \*.scss file save.
* **Minifier** — minifies .css files
* **Renamer** — renames minified .css files to .min.css
* **Notify** — tray notification when you get a SCSS compile error.
* **Plumber** — prevents gulp crash on SCSS error and various other reasons.

_Note: SCSS is used in this kit, therefore SASS wasn't mentioned, but this SASS/SCSS compiler and other scripts work for SASS/*.sass files, it may require a minor modification in gulpfile.js since I haven't tested it. All scripts are written to run in the fashion as described above._

---

### How to run gulp in this kit
_Note: If this is your first time, please refer to 'For gulp beginners' section below._

For these commands to be functional, you need to install nodeJS and install npm as a nodeJS package.

##### 1. CD to a folder 'gulp' containing `gulpfile.js`
##### 2. Install dependencies
```
npm install --save-dev
```

##### 3. Start compiling, serving, and watching files
```
gulp
```
*I wrote the watch feature as default in `gulpfile.js` so just the command `gulp` will serve **and watch***.

---

### (For beginners) How to run gulp
For Windows users who never had any experience with gulp, please try out [my tutorial](https://github.com/dmxt/beginner-gulp-tutorial-on-windows) for developers like you. For non-Windows users, it's technically easier to run commands like `npm`/`gulp` on UNIX/LINUX system.

#### **0. Terminal. Do this first if you're Windows user.**
_Skip this if you're on macOS or Linux, you have a terminal preinstalled on your operating system._ Terminal is available out of the box on Linux and OS X. You need a terminal to run npm and gulp. Windows have terminals out of the box as well but default cmd and PowerShell is not sustainable for development work.

I recommend you to install [cmder](http://cmder.net/) as a replacement for Windows terminal, personally I use their custom cmd.exe (`cmd /k "%ConEmuDir%\..\init.bat"` because it includes many UNIX libraries and you can run wget and other UNIX commands. Howver, if you prefer, you can run PowerShell, cygwin, **Babun**, mitty, MinGW and more under cmder. Very nifty and powerful tool. I want to note Babun, the powerful and cygwin based for Windows and runs ZSH on default.

If you have runtime error when starting cmder, you'll probably need to install VS 2015, see [the issue here](https://github.com/cmderdev/cmder/issues/501).

*Notice: If you still have trouble installing terminal from above, I wrote a more detailed guide here in [beginning gulp tutorial for Windows users](https://github.com/dmxt/beginner-gulp-tutorial-on-windows#step-1---terminal-windows).*

#### **1. npm**
_npm, the gulp.js dependent package_

Install [npm](https://nodejs.org/en/download/). This is available for all operating system.

For Windows, during the installation, be sure 'add to PATH' is included ([image](http://i.imgur.com/lHiNR7p.png)). When installed, restart cmder and enter `npm` in terminal to see if it's working properly, as in it should tell you the usage information. If it does, proceed to the next step.

#### **2. gulp**
1. Install gulp globally with this terminal command: `npm install --global gulp`. Windows users can run this script as long npm is properly installed.

Finally, as described in above Gulp condensed commands section:

1. `cd` to a folder where gulpfile.js is at (ex. `cd gulp`, `cd bootstrap-scss-gulp-kit/gulp/`, or check your current file list via `ls` and `ls -la` to help you to find the gulp folder)
2. Run `npm install --save-dev` and allow it install all modules this gulpfile.js required to run.
3. When the installation is completed, run `gulp`. Default browser should open the index.html, on localhost with unique port, as per BrowserSync script, and will refresh on (watched) file change/save during the development.

If you still have difficulties following this instruction, if not on Windows, please open an issue, and if on Windows, please go to [my tutorial here](https://github.com/dmxt/beginner-gulp-tutorial-on-windows#step-1---terminal-windows). If it still doesn't work out, please open an issue on the linked tutorial repo and mention what you tried to troubleshoot.
