$(function(){
  // Open sidebar when closed
  $('.js-sidebar-toggle-open').click(function(){
    $('body').removeClass('sidebar-collapsed').addClass('sidebar-expanded');
  });

  // Close sidebar when opened
  $('.js-sidebar-toggle-closed').click(function(){
    $('body').removeClass('sidebar-expanded').addClass('sidebar-closed');
  });
});
