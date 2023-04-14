module.exports = {
    "globDirectory": "build/",
    "globPatterns": [
      "**/*.{json,ico,html,js,css}"
    ],
    "swDest": "build\\sw.js",
    "swSrc": "src/sw.js",
    "runtimeCaching": [{
      "urlPattern": new RegExp('^https://my-app.com/'),
      "handler": 'NetworkFirst',
      "options": {
        "cacheName": 'my-app-cache',
        "expiration": {
          "maxEntries": 10,
          "maxAgeSeconds": 300
        }
      }
    }]
  };
  