# Pre-requisites
Using the [Geo Tracker app on an Android](https://play.google.com/store/apps/details?id=com.ilyabogdanovich.geotracker&hl=en_US&pli=1) which keeps track of the latitude and longitude coordinates.
Coordinates and path are marked on a map using Google Maps.

I have my profile set to the General settings which includes recording every 1 second.
When you go to the application, find your list of recorded walks/hikes. Each trip will have the Share icon.
You can choose between GPX, KML, and KMZ formats. I chose KML
You will be sent an email with an attachment you chose.

1. After downloading the attachment, drop it into the convert folder
2. Scroll down. You will see the `<gx:coord>` open and close tags. These hold the coordinates you will need to show on your Google Maps.
3. In your terminal, run `npm run geo` which is located in the `package.json` file. This runs the functions on the `converter.js`. You will have to manually remove the single quotes around the lat/long coordinates.

For now, just have 1 `kml` file in the `convert` directory at a time.

If you walked and recorded separate routes in opposite directions, during multiple trips, the paths will look like they are trying to loop over each other. On the `converter.js` file, just comment out the `return results` and un-comment `return results.reverse()`. Paste in your coordinates, and it should work from there.