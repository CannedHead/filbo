$(document).ready(function(){
    $(".video-container").fitVids();
});

$("#icons-wrapper button").click(function(){
    $("#plan-info").toggleClass('hidden');
    $(this).addClass("active");
});

var content = [
	{
		"title":"",
		"text":"",
		"icon":"",
		"count":"",
		"video-url":"",
		"facebook-url":"",
		"twitter-url":"",
		"google-plus-url":""
	}
];