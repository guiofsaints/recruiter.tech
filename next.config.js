/* eslint-disable @typescript-eslint/no-var-requires */
const { createSecureHeaders } = require("next-secure-headers");

const isProd = process.env.ENVIRONMENT === "production";

if (isProd) {
  module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: createSecureHeaders({
            contentSecurityPolicy: {
              directives: {
                defaultSrc: "'self'",
                styleSrc: [
                  "'self'",
                  "https://fonts.googleapis.com",
                  "'unsafe-inline'"
                ],
                fontSrc: ["'self'", "https://fonts.gstatic.com"]
              }
            },
            forceHTTPSRedirect: [
              true,
              { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }
            ],
            referrerPolicy: "same-origin"
          })
        }
      ];
    }
  };
}
