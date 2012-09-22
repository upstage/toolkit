[Toolkit](http://sellside.github.com/toolkit)
==========

A front-end library of LESS/CSS Components and JavaScript Plugins for rapidly building web applications and websites. Toolkit is a great companion to Twitter Bootstrap, but it can also stand on its own. 

If you have any experience working with Twitter Bootstrap, then you know how awesome it is. IMHO, One of the primary reasons that Bootstrap remains so successful and powerful is that the project's owners, have remained committed to keeping the project lean and tidy. If you experience with programming or web design, then you know how difficult that is to achieve. 

This repo was created [@sellside](http://twitter.com/sellside) by [Jon Schlinkert](http://twitter.com/jonschlinkert) and [Brian Woodward](http://twitter.com/doowb), and we created it for a few reasons: 

* Improve workflow and communication between designers and developers. 
* To be better at what we do: This project will help us all get better at building (at least the front-end part of) modular, scalable websites and web apps. For example, one thing this project demonstrates is how to take vanilla Twitter Bootstrap, extend it with Sellside Toolkit components, customize it for your own project, while keeping it highly maintainable.
* Component library: To give the rest of us a place to vet out new components, themes and plugins which attempt to adhere to Bootstrap's coding standards, but may or may not belong in the core project. 

Ideally, this project will turn into a comprehensive library of reusable components that can be selectively used in all of your projects. You can expect the comprehensiveness of the components in this project to vary. Some will be very small, and some will be thorough and comprehensive. Here are some examples:

* A LESS component that extends Bootstrap's Carousel to provide multiple color and size options for carousel captions 
* A JavaScript extension for bootstrap-popover.js that enables a "hovercard" effect
* A JavaScript extension for bootstrap-popover.js that provides semantic color options for popovers, following the same conventions as buttons and alerts 
* Themes for Bootstrap using only a modified variables.less 
* Themes for Bootstrap which incorporate a number of additional components from the project.
* Code snippets for accomplishing simple tasks with Bootstrap code

Today, Sellside has more than 150 components that we expect to include in [Toolkit](http://sellside.github.com/toolkit). 

Philosophies
------------

* We will have no opinions about your project structure or your folder and file naming conventions. Toolkit leaves those decisions to you, just customize your __________.json files to tell Toolkit how to navigate your project and find your files.
* tbc


Project Structure
-----------------
    |-- components (in Toolkit, components are highly specialized code "objects", similar to partials, each designed to serve a dedicated task and constructed with the express purpose of allowing it to be re-used generically "as-is" or with customizations many times throughout a project or projects. Example components are "buttons.less", "navbar.less", "banners.less", "modals.less", or "tooltips.less". Inside this folder you will find that components have been organized by "pattern", type, or use-case.)

          |-- assets (common assets shared by all components. e.g. utilities.less, mixins.less, etc. For ease of maintenance, here we try to keep the same structure as assets in the docs folder)
              |-- bootstrap (the most up to date wip version of Bootstrap, so we can take advantage of their best practices and fantasic library of js and less components as starting point for our components)
              |-- css (stylesheets compiled from LESS files)
              |-- ico (common icons for Toolkit's documentation)
              |-- img (common images for Toolkit's documentation)
              |-- js (common javascripts used by all components)
              |-- less (common LESS files used by all components)

          |-- buttons
              |-- assets (Any assets required for the component's documentation to build properly. Usually css, img, and js or other assets intended specifically for this component.)
                  |-- img (any images or icons required by the component for the purposes of documentation or examples.)
                  |-- js (any JavaScripts, libraries or plugins required by the component for the purposes of documentation or examples.)
                  |-- less (any specialized LESS files used by the component. Components that are unusually complex or comprehensive may be organized into multiple LESS files. )
              |-- modifiers (this folder containers modifiers or specialized extensions to the base object, which in this example is btn.less.)
                  |-- btn-chalk.less
                  |-- btn-round.less
                  |-- btn-square.less
                  |-- btn-satin.less
              |-- btn.less (this is the base object for this component, buttons)
              |-- btn.mustache (component template for compiling static html documentation)
              |-- component.json (similar to grunt's package.json, this file contains metadata for the component and describes any dependencies, requirements, paths, data.json files, versioning or other information necessary for a successful build.)
              |-- data.json (content for the component, which in this example might be button text. At minimum, when a data.json file exists it must inlude the default content used by a component, but it may also include additional options for dynamic content or to provide examples to developers)
              |-- gruntfile.js (build file for this component)

          |-- modals
              |-- assets
              |-- modifiers
                  |-- modal-carousels.less
                  |-- modal-forms.less
                  |-- modal-tables.less
                  |-- modal-wizards.less
              |-- component.json
              |-- data.json
              |-- gruntfile.js 
              |-- modals.less 
              |-- modals.mustache

    |-- docs 
          pages.json
          |-- assets
              |-- bootstrap (the most up to date wip version of Bootstrap, so we can take advantage of their fantasic library of js and less components as our base)
              |-- css (stylesheets for Toolkit's documentation)
              |-- ico (icons for Toolkit's documentation)
              |-- img (images for Toolkit's documentation)
              |-- js (javascripts for Toolkit's documentation)
              |-- less (LESS customizations specifically for Toolkit's documentation)
              |-- snippets (tiny little one-hit wonders)
          |-- layouts (various *.mustache files, each consisting of a pre-assembed page layout using Bootstrap's grid as a base)
          |-- pages
          |-- skins (complete projects that - in addition to core bootstrap - include one or more custom themes, components, layouts, plugins and templates)
          |-- themes (mini-projects that consist only of a modified variables.less file to change the look and feel of default Twitter Bootstrap. It's amazing how much changing this one file can make a huge difference!)
          |-- templates (if a layout is an example of how to use the grid, a template is an example of how to fill a layout with components)

    |-- plugins (this folder contains JavaScript plugins, primarily designed to be used with components, but in all cases should serve a dedicated task, such as "animate.js" or "hovercard.js")

    |-- node_modules (npm modules used in the project. normally, this folder would be .gitignored, but we want you to know how we're using node and npm in the project so we can all benefit from sharing best practices)

    README.md
    gruntfile.js
    package.json
    toolkit.json (this file tells toolkit about your project, metadata, file and folder tree and naming etc.)
    LICENSE


Project Standards
-----------------

* When submitting pull requests, please attempt to follow the same standards as expected with the core Bootstrap project
* Please use the folder structures described [here](http://sellside.github.com/toolkit) (todo: fix link address) for all code contributed to the project
* In all cases with new components, plugins or extensions of any kind (as opposed to bug fixes or minor enhancements to existing extensions in this repo), it is highly recommended that you create a jsfiddle to demo your code before submitting a pull request
* Do not submit incomplete code in your pull requests. Whether you are contributing components, themes, plugins or tiny little code snippets this project will be more effective if we start with working code. If you have a component that you are struggling to complete and you'd like some help, either create an issue and label it as a feature request or reach out to [Jon Schlinkert](http://twitter.com/jonschlinkert) or [Brian Woodward](http://twitter.com/doowb) on twitter.
* Please lint and test all JavaScripts before submitting pull requests
* Please test and lint all LESS components and compile into CSS before submitting pull requests
* Submit pull requests for implementations, ideas, concepts,  that are not 


Quick start
-----------

Clone the repo, `git clone git://github.com/twitter/bootstrap.git`, or [download the latest release](https://github.com/sellside/toolkit/zipball/master).



Versioning
----------

(taken directly from Twitter Bootstrap, but still applicable for this project. We'll need your help on this for sure! since neither Brian nor myself are experienced with this style of versioning).

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Bootstrap Extensions will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org/.



Bug tracker
-----------

Have a bug? Please create an issue here on GitHub that conforms with [necolas's guidelines](https://github.com/necolas/issue-guidelines).

https://github.com/twitter/toolkit/issues



Toolkit Twitter account
-----------------------

Keep up to date on announcements and more by following toolkit on Twitter, [@sellsideDev](http://twitter.com/sellsidedev).



Blog
----

Read more detailed announcements, discussions, and more on [The Official Sellside Blog](http://sellside.com/blog).



Developers
----------

We have included a makefile with convenience methods for working with the Toolkit library.

+ **dependencies**
Our makefile depends on you having recess, connect, uglify.js, and jshint installed. To install, just run the following command in npm:

```
$ npm install recess connect uglify-js jshint -g
```

+ **build** - `make`
Runs the recess compiler to rebuild the `/less` files and compiles the docs pages. Requires recess and uglify-js. <a href="http://twitter.github.com/toolkit">Read more in our docs &raquo;</a>

+ **test** - `make test`
Runs jshint and qunit tests headlessly in [phatomjs] (http://code.google.com/p/phantomjs/) (used for ci). Depends on having phantomjs installed.

+ **watch** - `make watch`
This is a convenience method for watching just Less files and automatically building them whenever you save. Requires the Watchr gem.



Contributing
------------

Please submit all pull requests against *-wip branches. If your unit test contains javascript patches or features, you must include relevant unit tests. Thanks!



Authors
-------

**Jon Schlinkert**

+ http://twitter.com/jonschlinkert
+ http://github.com/jonschlinkert

**Brian Woodward**

+ http://twitter.com/doowb
+ http://github.com/doowb



Copyright and license
---------------------

Copyright 2012 Sellside, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.



