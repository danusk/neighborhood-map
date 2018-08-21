# fend-map

## Project Overview

A single-page application using React featuring a map of my neighborhood with map markers to identify popular coffee shops, a search function for these locations, and a list view to support simple browsing of all locations. This application also implements the Foursquare API to provide additional information about each of these locations.

### Installing and Launching the App Locally

* Download or clone this repository to your local machine
* Install all project dependencies with npm install
* Start the development server and view app in development mode with npm start
* Navigate to localhost:3000

### Notes on Enabling a Service Worker
* This project was bootstrapped with create-react-app, which does not register a service worker in development mode: see [here](https://github.com/facebook/create-react-app/issues/2396)
* When built for production, [a service worker is added to the app by default](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app)
* To create a production build, use npm run build


### Launching the App in the Browser

* Visit https://danusk.github.io/neighborhood-map/


### Built With:

* react
* react-dom
* react-scripts
* [leaflet](https://leafletjs.com/)
* [leaflet-gesture-handling](https://github.com/elmarquis/Leaflet.GestureHandling)
* [leaflet-bounce-maker](https://github.com/maximeh/leaflet.bouncemarker)
* [open street map](https://www.openstreetmap.org)
* [gh-pages](https://github.com/tschaub/gh-pages)
* [fontawesome](https://fontawesome.com/)
* [foursquare](https://developer.foursquare.com/)



