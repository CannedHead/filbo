var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
   var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
   var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
   var is_safari = navigator.userAgent.indexOf("Safari") > -1;
   var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
   if ((is_chrome)&&(is_safari)) {is_safari=false;}
   if ((is_chrome)&&(is_opera)) {is_chrome=false;}

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	$( "body , html" ).addClass( "safari-back" );
}

var defaults = {
    value: 0, inc: 1, pace: 500, auto: true, hasta: 1000
};

var defaults2 = {
    value: 1, inc: 1, pace: 500, auto: true, hasta: 1000
};

var counter1 = new flipCounter('counter', defaults);
var counter2 = new flipCounter('counter2', defaults2);

var socket = io();
socket.on('update', function(data){
    console.log(data);
    var id = data.option.id;
    var countval = data.option.count;
    $('#button'+id).attr("data-count",countval);
});


var content = [
	{
		"title":"Vuelve la vivienda a Bogotá",
		"text":"187 mil nuevas viviendas + Ciudad Norte, una ciudad única en el mundo",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/1.svg",
		"count":"123",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON1",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"videourl":'<iframe src="https://player.vimeo.com/video/163272172?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Yo%20tuve%20%23ContactoConBogota%20y%20conozco%20como%20regresa%20la%20vivienda%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Dvivienda%20%23FILBo2016%20pic.twitter.com%2FDCtAFPE0Mk",
		"googleplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"Gran Circuito Verde",
		"text":"Un circuito que le dará un carácter sin igual a la ciudad: conformado por 1) El parque de San Rafael – 2) El sendero ecológico y cortafuegos de los Cerros Orientales – 3) El parque lineal Tunjuelo – 4) El gran malecón del Río Bogotá.",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/2.svg",
		"count":"12345",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON2",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"video-url":'<iframe src="https://player.vimeo.com/video/163180113?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Yo%20tuve%20%23ContactoConBogota%20y%20su%20nuevo%20circuito%20verde%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Dcircuitoverde%20%23FILBo2016%20pic.twitter.com%2FioK1WtuSgp%0A",
		"googlplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"La salud de los bogotanos será prioridad",
		"text":"6 nuevos hospitales + 40 nuevos Centros de Atención Prioritaria en Salud",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/3.svg",
		"count":"12345",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON3",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"video-url":'<iframe src="https://player.vimeo.com/video/163262186?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Yo%20tuve%20%23ContactoConBogota%20y%20s%C3%A9%20como%20la%20salud%20ser%C3%A1%20prioridad%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Dsalud%20%23FILBo2016%20pic.twitter.com%2FkOQKi5icFm",
		"googleplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"Vías para movernos mejor",
		"text":"207 kilómetros de nuevas troncales de Transmilenio (hoy hay 120 kilómetros) + ampliación de la Autopista Norte + ampliación de la 7ª",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/4.svg",
		"count":"12345",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON4",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"video-url":'<iframe src="https://player.vimeo.com/video/163168624?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Yo%20tuve%20%23ContactoConBogota%20y%20conozco%20las%20v%C3%ADas%20que%20tendr%C3%A1%20mi%20ciudad%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Dvias%20%23FILBo2016%20pic.twitter.com%2FCowTKB5bd4",
		"googleplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"Una Bogotá de parques y canchas deportivas",
		"text":"45 parques de barrio + 5 parques zonales",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/5.svg",
		"count":"12345",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON5",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"videourl":'<iframe src="https://player.vimeo.com/video/163187653?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Tuve%20%23ContactoConBogota%20y%20conozco%20sus%20nuevos%20parques%20y%20canchas%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Dparques%20%23FILBo2016%20pic.twitter.com%2F6APazHPK71",
		"googleplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"Metro de Bogotá",
		"text":"Más allá de una solución a la movilidad, el metro es un motor de renovación urbanística.",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/6.svg",
		"count":"12345",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON6",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"videourl":'<iframe src="https://player.vimeo.com/video/163272173?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Tuve%20%23ContactoConBogota%20y%20conozco%20el%20nuevo%20metro%20de%20mi%20ciudad%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Dmetro%20%23FILBo2016%20%20pic.twitter.com%2F8llPIVdFES",
		"googleplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"Ciudad educadora",
		"text":"30 nuevos colegios + 4 nuevas sedes del Sena + nuevas bibliotecas",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/7.svg",
		"count":"12345",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON7",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"videourl":'<iframe src="https://player.vimeo.com/video/163176061?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Yo%20tuve%20%23ContactoConBogota%20y%20s%C3%A9%20que%20ser%C3%A1%20una%20ciudad%20educadora%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Deducacion%20%23FILBo2016%20pic.twitter.com%2FLghURSMWrf",
		"googleplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
	{
		"title":"Por el derecho a vivir sin miedo",
		"text":"Nuevo Centro de Comando y Control + cámaras en toda la ciudad.",
		"icon":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/8.svg",
		"count":"12345",
		"animation":"http://d1q7w1k8zlumh6.cloudfront.net/filbo/BOTON8",
		"poster":"https://s3-sa-east-1.amazonaws.com/cannedhead.canned/filbo/poster.png",
		"videourl":'<iframe src="https://player.vimeo.com/video/163176953?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
		"facebookurl":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT",
		"twitterurl":"https://twitter.com/intent/tweet?text=Yo%20tuve%20%23ContactoConBogota%20y%20ya%20no%20tendr%C3%A9%20miedo%20en%20mi%20ciudad%20%C2%BFy%20t%C3%BA%3F%20bogotamejorparatodos.gov.co%3Fm%3Dsinmiedo%20%23FILBo2016%20pic.twitter.com%2FQCRJHaOrws",
		"googleplus-url":"http://www.facebook.com/sharer.php?s=100&p[title]=Aca titulo&p[summary]=aca descripcion&p[url]=http://filbo.herokuapp.com&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
	},
];

var activeButton = '';
var currentVideo = 0;

$(document).ready(function(){
    $(".video-container").fitVids();
});


$("#icons-wrapper button").click(function(){
	
	var buttonid = $(this).data('id');
	var hasta = $(this).data('count');

	//Si no hay ningun boton activo
	if(activeButton === ''){
		updateInformation(buttonid, hasta);
		$("#plan-info").removeClass('hidden');
		$("#icons-wrapper").addClass("selected");
		$(this).addClass("active");	
		activeButton = buttonid;	
		fadeVideos(currentVideo , buttonid);
		playVideo(buttonid);
	}
	//Si el click es sobre el boton activo
	else if(buttonid === activeButton){

		//hide info
		if($(this).hasClass("active")){
			$("#plan-info").addClass('hidden');
			$("#icons-wrapper").removeClass("selected");
			$("#icons-wrapper .active").removeClass("active");
			activeButton='';
			fadeVideos(currentVideo , buttonid);
			restartVideo(buttonid);
		//show info
		} else {
			updateInformation(buttonid, hasta);
			$("#plan-info").removeClass('hidden');
			$("#icons-wrapper").addClass("selected");
			$("#icons-wrapper .active").addClass("active");
			activeButton = buttonid;
			fadeVideos(currentVideo , buttonid);
			playVideo(buttonid);
			restartVideo(buttonid);
		}

	//Si existe un boton activo
	} else {
		updateInformation(buttonid, hasta);
		$("#icons-wrapper .active").removeClass("active");
		$(this).addClass("active");
		activeButton = buttonid;
		fadeVideos(currentVideo , buttonid);
		playVideo(buttonid);
	}

});

$('#myModal').on('hidden.bs.modal', function (event) {
	$("#plan-info").addClass('hidden');
	$("#icons-wrapper").removeClass("selected");
	$("#icons-wrapper .active").removeClass("active");
	activeButton='';
	restartVideo(currentVideo);
});

/*
 * Update content information
 */
function updateInformation(buttonid, limit){
	//Title update
	$("#tituloplan").text(content[buttonid].title);
	
	//Modal update
	var modal =$('#myModal');
	$('.modal-icon').attr("src",content[buttonid].icon);
	modal.find('.modal-title').text(content[buttonid].title);
	modal.find('.modal-hero').text(content[buttonid].text);
	modal.find('.video-container').html(content[buttonid].videourl);
	$(".video-container").fitVids();
	$('#twittershare').attr("href",content[buttonid].twitterurl);

	var count = parseInt(content[buttonid].count);
    
    counter1.stop();
    counter2.stop();
    counter1.setValue(0);
    counter2.setValue(0);
	counter1.setHasta(limit);
	counter2.setHasta(limit);
	counter1.start();
	counter2.start();
} 

/**
  * Add all videos to given.
  */
function loadVideos(videos){
	for(var i=0;i<videos.length;i++){
		loadVideoHTML('video-container',videos[i].animation,i,videos[i].poster);
	}
	$("#video0").css("display","block");
}

/**
  * Creates video HTML tag and adds video to the given container.
  */
function loadVideoHTML(container, video, videoid, imgposter){
	$("#"+container).prepend('<video id="video'+videoid+'" class="img-responsive" preload="metadata" poster="'+imgposter+'" style="display:none;"></video>');
	$("#video"+videoid).append('<source src="'+video+'.mp4">');
	$("#video"+videoid).append('<source src="'+video+'.ogg">');
	$("#video"+videoid).append('<source src="'+video+'.webm">');
}

/*
 * Fades between two videos
 */
function fadeVideos(from , to){
	
	if(from !== to){ 

		var vid = document.getElementById("video"+to);
		vid.pause();
		vid.currentTime = 0.1;

		$("#video"+from).css("display","none");
		$("#video"+to).css("display","block");
		currentVideo=to;
	}
}

function playVideo(id){
	if ( navigator.userAgent.match(/iPad/i) ) {
		var vid = document.getElementById("video"+id);
		vid.src = content[id].animation+".mp4";
		vid.load();		
		vid.play();
	} else {
		var vid = document.getElementById("video"+id);
		vid.play();
	}
}

function restartVideo(id){
	var vid = document.getElementById("video"+id);
		vid.pause();
		vid.currentTime = 0;
}

loadVideos(content);

