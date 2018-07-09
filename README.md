# Flipy - Collapse and expand content

[![Build Status](https://img.shields.io/travis/wbotelhos/flipy/master.svg)](https://travis-ci.org/wbotelhos/flipy)
[![NPM Version](https://badge.fury.io/js/flipy.svg)](https://badge.fury.io/js/flipy)
[![Dependency](https://david-dm.org/wbotelhos/flipy.svg)](https://david-dm.org/wbotelhos/flipy)
[![Dev Dependency](https://david-dm.org/wbotelhos/flipy/dev-status.svg)](https://david-dm.org/wbotelhos/flipy#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/wbotelhos/flipy.png)](https://codeclimate.com/github/wbotelhos/flipy)
[![Support](https://img.shields.io/badge/donate-%3C3-brightgreen.svg)](https://liberapay.com/wbotelhos)

Flipy is an tiny flipy editor to enable a quick ajax update with no need to create a form.

## Options

```js
openedClass: 'flipy__trigger--opened' // class used to indicate that the content is opened
speed:       200                      // speed of collapse and expand effect
```

## Usage

You declare an element with optional data atributes:

```html
<div class="flipy" data-opened-class='opened' data-speed="300">
  <div class="flipy__trigger"></div>
  <div class="flipy__content">Hello World!</div>
</div>
```

On JS you can declare attributes too, but data attributes has priority:

```js
$('.flipy').flipy({ speed: 100 });
```
