$(function () {
  try{
    parentscreen=$("body").data("parentscreen");
    parent.urlFromChild(window.location.href,parentscreen);
  }catch(error){

  }
});