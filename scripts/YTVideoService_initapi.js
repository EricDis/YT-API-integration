// The API-Key is obtained from the Google Cloud Console
// at {{ https://cloud.google.com/console }}.
var API_KEY = 'YOUR_API_KEY';

//	Initialise YT API connection
// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function init() {
	gapi.client.init(API_KEY);
	gapi.client.load('youtube', 'v3', function() {
     handleAPILoaded();
  });
}