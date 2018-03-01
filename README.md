# Tanara

Tanara is a starter theme made with [Laravel](https://laravel.com), [Vue.js](https://vuejs.org) and [Bootstrap](https://getbootstrap.com).

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/bantenprov/tanara/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/bantenprov/tanara/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/bantenprov/tanara/badges/build.png?b=master)](https://scrutinizer-ci.com/g/bantenprov/tanara/build-status/master)
[![Latest Stable Version](https://poser.pugx.org/bantenprov/tanara/v/stable)](https://packagist.org/packages/bantenprov/tanara)
[![Total Downloads](https://poser.pugx.org/bantenprov/tanara/downloads)](https://packagist.org/packages/bantenprov/tanara)
[![Latest Unstable Version](https://poser.pugx.org/bantenprov/tanara/v/unstable)](https://packagist.org/packages/bantenprov/tanara)
[![License](https://poser.pugx.org/bantenprov/tanara/license)](https://packagist.org/packages/bantenprov/tanara)
[![Monthly Downloads](https://poser.pugx.org/bantenprov/tanara/d/monthly)](https://packagist.org/packages/bantenprov/tanara)
[![Daily Downloads](https://poser.pugx.org/bantenprov/tanara/d/daily)](https://packagist.org/packages/bantenprov/tanara)

## What's included

- [Laravel 5.4](https://laravel.com/docs/5.4)
- [Vue 2](https://vuejs.org)
- [Vue Router 3](https://router.vuejs.org)
- [Vuex 3](https://vuex.vuejs.org)
- [Bootstrap 4](https://getbootstrap.com)
- [axios](https://github.com/axios/axios)
- [vue-chartjs](http://vue-chartjs.org)
- [vue-echarts-v3](https://github.com/xlsdg/vue-echarts-v3)
- [vue-form](https://github.com/fergaldoyle/vue-form)
- [vue-select](https://github.com/sagalbot/vue-select)
- [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker)
- [vue-tables-2](https://github.com/matfish2/vue-tables-2)
- [vuetable-2](https://github.com/ratiw/vuetable-2)
- [mini-toastr](https://github.com/se-panfilov/mini-toastr)
- [vue-sweetalert2](https://github.com/avil13/vue-sweetalert2)
- [vue-fullscreen](https://github.com/mirari/vue-fullscreen)
- and many more helpers

## Installation

1. Download, choose one of the following options:
   - Clone the repo: `git clone https://github.com/bantenprov/tanara.git`.
   - Composer: `composer create-project bantenprov/tanara:dev-dev`.
2. From the root `/tanara` directory, run `composer install` in the command line.
3. Copy `.env.example` to `.env`.
4. Configure the `.env` file. Run `php artisan key:generate`.

### Running project locally

1. Run `php artisan serve`.
2. Open http://localhost:8000 in your browser, and voilà.

### Tooling setup

1. Run `npm install` to install our dependencies listed in `package.json`.
2. When completed, you’ll be able to run the various commands provided from the command line.

Our `package.json` includes the following commands and tasks:

- `npm run dev`: Development.
- `npm run prod`: Production.
- `npm run watch-poll`: This is a convenience method for watching files and automatically building them whenever you save.

## Contributing

Looking to contribute something to Tanara? **Here's how you can help.**

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.

### Using the issue tracker

The [issue tracker](https://github.com/bantenprov/tanara/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests).

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/bantenprov/tanara/issues/new).

### Issues and labels

Our bug tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use them:

- `bug` - Issues that have been confirmed with a reduced test case and identify a bug in Tanara.
- `css` - Issues stemming from our compiled CSS or source Sass files.
- `feature` - Issues asking for a new feature to be added, or an existing one to be extended or modified. New features require a minor version bump (e.g., `v3.0.0` to `v3.1.0`).
- `help wanted` - Issues we need or would love help from the community to resolve.
- `vue` - Issues stemming from our compiled or source Vue files.
- `laravel` - Issues stemming from our source Laravel files.
- `meta` - Issues with the project itself or our GitHub repository.

For a complete look at our labels, see the [project labels page](https://github.com/bantenprov/tanara/labels).

### Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

### Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

### Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the [coding guidelines](#code-guidelines) used throughout the
project (indentation, accurate comments, etc.)

### Code guidelines

All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

#### HTML

[Adhere to the Code Guide.](http://codeguide.co/#html)

#### CSS

[Adhere to the Code Guide.](http://codeguide.co/#css)

#### JS

- 2 spaces (no tabs)
- "Attractive"

#### EditorConfig

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Changelog

Details changes for each release are documented in the [release notes](https://github.com/bantenprov/tanara/releases).

## License

Licensed under [MIT](LICENSE).
