 $(document).ready(function(){
    $(".video-container").fitVids();
  });

$("#icons-wrapper button").click(function(){
    $("#plan-info").toggleClass('hidden');
    $(this).addClass("active");
});