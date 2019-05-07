[![Netlify Status](https://api.netlify.com/api/v1/badges/2bf49847-06ef-4c5c-91f6-277743f03abd/deploy-status)](https://app.netlify.com/sites/isstracker/deploys)

# **ISS**TRACKER
This application uses the `wheretheiss.at` API to fetch and display the latest as well as historical positions of the ISS.
Google Maps API has been used to show markers on a map. 

The application is built with Vue.js, Vuex (for the data store) and bundled with webpack.

Tests are written in Jest.

[ISSTracker has been deployed with Netifly](https://isstracker.netlify.com/)

![isstracker](/screenshots/screen.jpg)

## Project setup
```
yarn install
```

## Setup API keys
Create an `.env` with your Google Map API key:
```
VUE_APP_GM_API_KEY=...
```

### Compile (with hot reload in development mode)
```
yarn run serve
```

### Compile and minify for production
```
yarn run build
```

### Lint and fix files
```
yarn run lint
```

### Run unit tests
```
yarn run test:unit
```
