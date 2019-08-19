// After the API loads, call a function to enable the search box.
$(document).ready(function () {

function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string. Input source: YTVideoService.html
// Set api request options for search results
document.getElementById("search-button").addEventListener("click", search)
function search() {
  var q = $('#query').val();
  var url  = "https://www.googleapis.com/youtube/v3/search";
  var API_KEY = "API_KEY";
  var options = {
  	part: "snippet",
	key:  API_KEY,
	  maxResults: 5,
	  q: q
  }

  loadVideo();

  function loadVideo(){
  	$.getJSON(url, options, function (data) {
		console.log(data);
		displayResult(data);
	})
  }

  function displayResult(data) {
  	$.each(data.items, function (i, item) {

		var thumb = item.snippet.thumbnails.medium.url;
		var title = item.snippet.title;
		var description = item.snippet.description.substring(0, 75);

		$("main").append(`
	  		<article>
                <img src="${thumb}" alt="" class="thumb">
                <h5>${title}</h5>
                <p>${description}"[...]"</p>>
            </article>
	  `);
	});
  }

	$("main").on("click", function(){
		alert ("test")
	});


  //for the use of search.list instead
  //var request = gapi.client.youtube.search.list({
   // q: q,
    //part: 'snippet',
	//maxResults: 2,
	//order: 'relevance',
	//type: 'video'
  //});

  //logs activities into console for testing during development
	//for(var i in request.items) {
		//var item = request.items[i];
		//console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
	//}

	// Executes the request and puts response into search container
	request.execute(function(response) {
		var str = JSON.stringify(response.result);
		$('#search-container').html('<p>' + str + '</p>');
	});
}
});
