# simple-jsdom
[![Travis build status](http://img.shields.io/travis/jmeas/simple-jsdom.svg?style=flat)](https://travis-ci.org/jmeas/simple-jsdom)

A simple JSDom configuration that I use when testing many of my libraries.

### Motivation

JSDom has a lot of features, but I use a very small subset of its API. Most of the time,
I simply want my tests for client-side JavaScript to not explode when I run them in the
Node environment.

Require this configuration and your tests should Just Work©.

### Versioning

This library intentionally depends on an old version of JSDom, v3.0, as this is the last version
of JSDom to support Node. Newer versions are for io.js only. Most developers use Node,
so it doesn't make sense to upgrade.

### Features

The following global variables are created:

- `document`
- `window`
- `navigator`

These objects should have the methods and properties expected for most basic client-side
operations.
