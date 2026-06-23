export default {
  // the default headers of the package. change at will.
  options: {
    // 1 year. Do not include subdomains as they could be unrelated sites
    "Strict-Transport-Security": "max-age=31536000",
    // You may also set to DENY, however future Apostrophe modules may use
    // iframes to present previews etc.
    "X-Frame-Options": "SAMEORIGIN",
    // If you have issues with broken images etc., make sure content type
    // configuration is correct for your production server
    "X-Content-Type-Options": "nosniff",
    // Very new. Used to entirely disable browser features like geolocation per host.
    // Since we don't know what your site may need, we don't try to set this
    // header by default (false means "don't send the header")
    "Permissions-Policy": false,
    // Don't send a "Referer" (sp) header unless the new URL shares the same
    // origin. You can set this to `false` if you prefer cross-origin "Referer"
    // headers be sent. Apostrophe does not rely on them
    "Referrer-Policy": "same-origin",
    // `true` means it should be computed according to the rules below.
    // You may also pass your own string, or `false` to not send this header.
    // The `policies` option and all of its sub-options are ignored unless
    // `Content-Security-Policy` is `true`.
    "Content-Security-Policy": true,
  },
};
