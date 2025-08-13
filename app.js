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
    "@apostrophecms/i18n": {
      options: {
        defaultLocale: "de",
        redirectToFirstLocale: true,
        locales: {
          de: {
            label: 'Deutsch',
            prefix: '/de'
          },
          en: {
            label: 'English',
            prefix: '/en'
          },
          fr: {
            label: 'Français',
            prefix: '/fr'
          },
          it: {
            label: 'Italiano',
            prefix: '/it'
          }
        }
      },
    },
    'global-scripts': {
      options: {
        scripts: [
          {
            name: 'site',
            when: 'always'
          }
        ]
      }
    },
    // Custom widgets
    "button-widget": {},
    "projects-widget": {},
    "two-column-widget": {},
    "file-widget": {},
    "section-widget": {},
    "impressum-widget": {},

    "localization": {},
    // The project's custom piece type.
    'project': {},
    // `asset` supports the project's build for client-side assets.
    asset: {},
    // use vite for asset bundling and hot module reloading
    "@apostrophecms/vite": {},
    // The project's first custom page type.
    "default-page": {},
  },
});
