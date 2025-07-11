import apostrophe from "apostrophe";

apostrophe({
  root: import.meta,
  shortName: "swissgeol-landingpage-config",
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    "@apostrophecms/rich-text-widget": {
      options: {
        className: "bp-rich-text",
      },
    },
    "@apostrophecms/image-widget": {
      options: {
        className: "bp-image-widget",
      },
    },
    "@apostrophecms/video-widget": {
      options: {
        className: "bp-video-widget",
      },
    },
    // `asset` supports the project's build for client-side assets.
    asset: {},
    // use vite for asset bundling and hot module reloading
    "@apostrophecms/vite": {},
    // The project's first custom page type.
    "default-page": {},
  },
});
