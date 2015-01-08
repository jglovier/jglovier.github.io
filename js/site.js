$(function(){

  // Homepage | section.writing | article nav behavior
  // NOTE: this code is mad ghetto and in no wise to be held up as a standard of JavaScript brilliance; so sorry bout that; but It Works™
  $("#articlesAllTrigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $("div.articles").addClass("show");
  });

  $("#articles2015Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $("div.articles").removeClass("show");
    $("#articles2015").addClass("show");
  });

  $("#articles2014Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $("div.articles").removeClass("show");
    $("#articles2014").addClass("show");
  });

  $("#articles2013Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $("div.articles").removeClass("show");
    $("#articles2013").addClass("show");
  });

  $("#articles2012Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $("div.articles").removeClass("show");
    $("#articles2012").addClass("show");
  });

  $("#articles2011Trigger").on("click", function(event){
    event.preventDefault();
    $(".article-nav .year").removeClass("showing");
    $(this).addClass("showing");
    $("div.articles").removeClass("show");
    $("#articles2011").addClass("show");
  });

});
