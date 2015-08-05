# simple-jsdom

A simple JSDom configuration that I use when testing most of my libraries.

### Motivation

JSDom is incredibly powerful and full of features, but I use a very small subset of
its API. Most of the time, I simply want my tests for client-side JavaScript to not
explode when I run them in the Node environment.

Require this configuration, and your tests should Just Work©.

### Features

The following global variables are created:

- `document`
- `window`
- `navigator`
