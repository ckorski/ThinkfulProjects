$(document).ready(function(){

function getResults(query) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyCOqZGr_qBk77yuiQqZyY2nyk_zkB163-I",
				"q": query 
			},
			function (data) {
				if (data.pageInfo.totalResults == 0) {
					alert("No videos found!");
				}
				// If there are no results it will just empty the list
				displaySearchResults(data.items);
			}

		);
	}

	function displaySearchResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			// append li to ul
			console.log(video.snippet.thumbnails.medium.url);
			html = html + "<li><p>" + video.snippet.title +
				"</p><img src='" +  video.snippet.thumbnails.high.url + "'/></li>" ;

		});
		$("#results ul").html(html);
	}

	$("#search-term").submit(function (event) {
		event.preventDefault();
		getResults($("#query").val());
	});
  });