$(document).ready(function(){
    $(".video-container").fitVids();
});

$("#icons-wrapper button").click(function(){
    $("#plan-info").toggleClass('hidden');
    $(this).addClass("active");
});

var content = [
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/1.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/2.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/3.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/4.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/5.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/6.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/7.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"dv",
		"text":"recds",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/8.svg",
		"count":"12345",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebook-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitter-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"google-plus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
];