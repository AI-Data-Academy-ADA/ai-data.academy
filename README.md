# ai-data.academy

Grav theme for the for the AI &amp; Data Academy (ADA) project website

## Installation

The theme is not available through Gravs package manager (`gpm`) and has to be installed manually.
In order to install, simply copy the `ada-theme` folder to your Grav instances `user/themes` folder
and activate it as usual (either via Admin gui or via configuration file).

## Usage

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

## Todo Documentation

- [ ] Overview of modular pages + features
- [ ] Navigation
  - [ ] hard links of ki-day and ki-festival
