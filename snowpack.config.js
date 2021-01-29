/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  alias: {
    "react": "preact/compat",
    "react-dom": "preact/compat",
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    //'@prefresh/snowpack',
    ['@snowpack/plugin-webpack', {}],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
    output: 'stream',
  },
  buildOptions: {
    /* ... */
    "baseUrl": "/demo-explorer"
  },
};
