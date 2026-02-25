# [ai-data.academy](http://ai-data.academy) Grav Theme

Grav theme for the for the AI &amp; Data Academy (ADA) project website

## Installation

The theme is not available through Gravs package manager (`gpm`) and has to be installed manually.
In order to install, simply copy the `ada-theme` folder to your Grav instances `user/themes` folder
and activate it as usual (either via Admin gui or via configuration file).

## Usage

Use either the default or the modular page when creating content.
For the modular page, see a list of available modules and their features below.

There are some page features that can be enabled on a per page basis, usually of a
decorative nature. See [Page Features](#page-features).

### Navigation

This theme only supports a single level of navigation in its menu.
You may create subpages, however they will not show up in the navigation bar
at the top of the page.
All top-level pages that are marked as `visible` in Grav, will be shown in the navigation bar.

The links to the special pages `ki-days` and `ki-festival` are hardcoded and the corresponding pages
should be set to **not visible** in your Grav page.

### Page Features

- Decorative liquid shape in the top right
  - Adds a shape to the pages background in the top right
  - Activate by enabling the "Add a liquid shape in the background in the top right" option in the content section of a page or module or by setting the `header.liquid_top_right`
- Decorative liquid shape in the bottom right
  - Adds a shape to the pages background in the bottom right
  - Activate by enabling the "Add a liquid shape in the background in the bottom right" option in the content section of a page or module or by setting the `header.liquid_bottom_right`

### Modules

- ada
  - A module showing a quote and a picture of Ada Lovelace with optional content below
  - Is shown in the footer of the page
- callout
  - A card like, centered container to host some text with a background in the primary purple color and white text
- contact-form
  - A two column layout with a styled background to host contact information
  - Columns are split by the `<!-- column -->` separator in the modules content: Everything before will be shown in the first column, everything after in the second one.
- footer
  - A footer module to show arbitrary content next to a liquid shape decorative element
- hero
  - The pages hero module showing a robotic version of Ada Lovelace and links to the main `ki-days` and `ki-festival` pages
- just-text
  - A module to simply show text as a section supporting a couple of options
    - When the "Indent text" option in the content section is enabled (or the `indent_text` header is true), the second `<h1>` aka the second line in the content beginning with `#` is indented to create a visually interesting effect.
    - Columns are supported using the `<!-- column -->` separator (see contact-form), a maximum of two columns will be shown side by side and there may be an arbitrary number of columns
- partner
  - A module to show an image next to a pill-shaped box for the modules content
  - The first image added to the modules media section is being used
  - Set the "Text on the left hand side" in the modules content section to "Enabled" (or the `text_left` header to true) to have the image on the right hand side of the pill shaped box. Disabling the option switches the order.
- fancy-img-left
  - A section whose content is placed next to a fixed image with a clip path
  - If given, uses the first image uploaded to the modules media (will use fallback otherwise)
    - Make sure the image you're using is has an aspect ration of 2 by 3 to prevent squishing

## Development

Prerequisites:

- Docker
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Use the [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers)
provided in this repository.
Open the repository in VSCode and when prompted by the extension, reopen it in the container.
If you are not prompted try `Ctrl + Shift + P` and look for `Dev Containers: Reopen in Dev Container` (or similar).
More details [below](#dev-container-details).

Alternatively you can setup a development instance of Grav and install/ modify/ test the theme there.

### Modules

Due to the nature of the theme, the pages are heavily relying on modules and Gravs [modular pages](https://learn.getgrav.org/17/content/modular).
To make things easier, the [modular page template](ada-theme/templates/modular.html.twig) uses conventions to load any additional
assets related to a module.
For a new module under `ada-theme/templates/modular/my-module.html.twig`, use the following conventions.
None of these are mandatory:

- CSS -> `ada-theme/css/modular/my-module.css`
- JavaScript -> `ada-theme/js/modular/my-module.js`
- [Blueprints](https://learn.getgrav.org/17/forms/blueprints) -> `ada-theme/blueprints/modular/my-module.yaml`

### Dev Container Details

The container spins up an instance of grav, mounts the corresponding local files and
runs the pre-packaged webserver to get you up and running as fast as possible.
It also sets up Gravs development tools and some VSCode extensions for you.

However it does not run the admin gui for you. Configuration is done soley via files, see [below](#changing-the-configuration).

Local files are mounted inside the container under `/workspace`.
The Grav installation sits at `/var/www/html`.

The webserver is started at `http://127.0.0.1:8000/`.
Occasionally a hard refresh is required (`Ctrl + Shift + R`) after startup of the container.

#### Running Grav CLI commands

In a terminal inside the container:

```sh
www-data@12345678:/worksapce$ cd /var/www/html
www-data@12345678:~/html$ bin/grav <your command> # e.g. yamllinter
```

#### Changing the configuration

Since the local files are mounted to the container, simply edit the [`system.yaml`](./system.yaml) file.
Changes should be applied instantly, reloading of the page is required.

#### Adding sample pages

This repository also contains example pages with dummy text to showcase and test the modules with.
The [pages](./pages/) folder is mounted in the dev container to the `user/pages` folder in Gravs root.
Pages can simply be added or modified using VSCode and should appear on the page after a reload in the browser.
