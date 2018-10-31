# BrainStash

Brainstash is a simple, Javascript-based time tracker that allows you to
track the time of your tasks while working on them. At the moment, it is
completely static and using the browser's local storage to persist the
data.

Public deployment: https://brainstash.urlaubsgimpel.de/

## How to Build

Having Node.js installed, clone the repository and execute the following:

```sh
npm install
npm run build
```

This will create a `build` folder with the transpiled JS and CSS. You may
then serve `index.html`, `sw.js`, `img/` and `build/` using a web server.

To run the webpack dev server, execute:

```sh
npm install
npm start
```

## Planned Improvements

I want to improve BrainStash in the following ways, if I will ever find
the time. Contributions are welcome as well!

* Add a new, responsive design
* Implement a backend service to optionally(!) allow users to authenticate
  and sync tasks across devices
* Convert logo to SVG
* Improve the entire CSS and font situation
