# simple-jsdom
[![Travis build status](http://img.shields.io/travis/jmeas/simple-jsdom.svg?style=flat)](https://travis-ci.org/jmeas/simple-jsdom)

A simple JSDom configuration for testing libraries.

### Installation

The easiest way to get simple-jsdom is through npm.

`npm i simple-jsdom`

### Getting Started

To modify the global namespace, run:

`require('simple-jsdom').install();`

### Motivation

Most of the time that I use JSDom, I only want to make it so that my client side tests
work in a Node environment without blowing up. I'm less interested in thinking
about how JSDom works.

I found myself copying and pasting the same code between projects, so I abstracted into
this bare bones JSDom configuration. Require this in and your tests should Just Work©.

You should, for instance, be able to use most (all?) of the jQuery API after you've included this.

### Versioning

This library intentionally depends on an old version of JSDom, v3.0, as this is the last version
of JSDom to support Node. Newer versions are for io.js only. Most developers use Node,
so it doesn't make sense to upgrade.

### API

This module returns two things: a `globals` object, which returns the globals created by JSDom,
and an `install` method, which attaches those to the global namespace.

The four objects are:

- `document`
- `window`
- `navigator`
- [`jsdom`](https://github.com/tmpvar/jsdom#for-the-hardcore-jsdomjsdom)
