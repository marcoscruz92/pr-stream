$(document).ready(function(){
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var location = "Puerto Rico";
    var flickrOptions = {
      tags: location,
      format: "json"
    };
    function displayPhotos(data){
      var photoHTML = '<div class="row photo-grid">';
      $.each(data.items, function(i, photo){
        if(i !== 0 && i % 5 !== 0 ){
          photoHTML += '<div class="col-sm-4 col-md-3 photo-container">';
          photoHTML += '<div class="hovereffect">';
          photoHTML += '<img src=" '+photo.media.m + '" class="img-responsive"> ';
          photoHTML += '<div class="overlay">';
          photoHTML += '<h6><i class="fa fa-camera"></i>' +photo.author.slice(17) + '</h6>';
          photoHTML += '<a href="' + photo.link + '" class="info" target="_blank">Download</a>';
          photoHTML += '</div>';
          photoHTML += '</div>';
          photoHTML += '</div>';
        } else {
          photoHTML += '</div>';
          photoHTML += '<div class="row photo-grid">';
        }

      });
      $("#test").html(photoHTML);
      console.log("hello?");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
});
