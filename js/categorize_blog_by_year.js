$(function(){

  // Homepage | section.writing | article nav behavior
  // NOTE: this code is mad ghetto and in no wise to be held up as a standard of JavaScript brilliance; so sorry bout that; but It Works™

  // first, hide everything except 2015 posts be default
  $(".article-item:not(.article-2016)").removeClass("show");

  // if visitor clicks on All, show all posts
  $("#articlesAllTrigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").addClass("show");
  });

  // if visitor clicks on 2015, show 2015 posts
  $("#articles2016Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").removeClass("show");
    $(".article-item.article-2016").addClass("show");
  });

  // if visitor clicks on 2015, show 2015 posts
  $("#articles2015Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").removeClass("show");
    $(".article-item.article-2015").addClass("show");
  });

  // if visitor clicks on 2014, show 2014 posts
  $("#articles2014Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").removeClass("show");
    $(".article-item.article-2014").addClass("show");
  });

  // if visitor clicks on 2013, show 2013 posts
  $("#articles2013Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").removeClass("show");
    $(".article-item.article-2013").addClass("show");
  });

  // if visitor clicks on 2012, show 2012 posts
  $("#articles2012Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").removeClass("show");
    $(".article-item.article-2012").addClass("show");
  });

  // if visitor clicks on 2011, show 2011 posts
  $("#articles2011Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $(".article-item").removeClass("show");
    $(".article-item.article-2011").addClass("show");
  });

});
