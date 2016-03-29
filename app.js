$("#loading").show();
$(document).ready(function(){
    //add endpoint to variable
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //add specific location retrive photos from
    var location = "Puerto Rico";
    //Query parameters
    var flickrOptions = {
      tags: location,
      format: "json"
    };
    //Callback function to build html and inserts data from Flickr
    function displayPhotos(data){
      //photoHTML variable holds the whole photo-grid HTML
      var photoHTML = '<div class="row photo-grid">';
      //loops through each item from json array
      $.each(data.items, function(i, photo){
        //Case statement to break insert new row after 3 elements in place
        if(i !== 0 && i % 4 !== 0 ){
          //replace default thumbnail size to a bigger one
          var photoUrl = photo.media.m.replace(/m.jpg/i,'c.jpg');
          photoHTML += '<div class="col-sm-6 col-md-4 photo-container">';
          photoHTML += '<div class="hovereffect">';
          photoHTML += '<img src=" '+photoUrl+ '" class="img-responsive"> ';
          photoHTML += '<div class="overlay">';
          photoHTML += '<h2><i class="fa fa-camera"></i>' +photo.author.slice(17) + '</h2>';
          photoHTML += '<a href="' + photo.link + '" class="info" target="_blank">Download</a>';
          photoHTML += '</div>';
          photoHTML += '</div>';
          photoHTML += '<div class="photo-details hidden-lg center-block">';
          photoHTML += '<span id="author-name"><i class="fa fa-camera fa-lg"></i>' +photo.author.slice(17) + '</span>';
          photoHTML += '<span id="mobile-download" class="pull-right text-center"><a href="'+ photo.link +'" target="_blank"><i class="fa fa-download fa-lg"></i></a></span>';
          photoHTML += '</div>';
          photoHTML += '</div>';
        } else {
          photoHTML += '</div>';
          photoHTML += '<div class="row photo-grid">';
        }
      });
      //Injects HTML to website
      $("#loading").hide();
      $("#test").html(photoHTML);
    }

    //Callback function to build html and inserts data from Flickr
    function displayPhotosGrid(data){
      //photoHTML variable holds the whole photo-grid HTML
      var photoHTML = '<div class="row photo-grid">';
      //loops through each item from json array
      $.each(data.items, function(i, photo){
        //Case statement to break insert new row after 3 elements in place
        if(i !== 0 && i % 4 !== 0 ){
          //replace default thumbnail size to a bigger one
          var photoUrl = photo.media.m.replace(/m.jpg/i,'b.jpg');
          photoHTML += '<div class="col-sm-6 col-md-12 photo-container">';
          photoHTML += '<div class="hovereffect">';
          photoHTML += '<img src=" '+photoUrl+ '" class="img-responsive center-block"> ';
          photoHTML += '<div class="overlay">';
          photoHTML += '<h2><i class="fa fa-camera"></i>' +photo.author.slice(17) + '</h2>';
          photoHTML += '<a href="' + photo.link + '" class="info" target="_blank">Download</a>';
          photoHTML += '</div>';
          photoHTML += '</div>';
          photoHTML += '<div class="photo-details hidden-lg center-block">';
          photoHTML += '<span id="author-name"><i class="fa fa-camera fa-lg"></i>' +photo.author.slice(17) + '</span>';
          photoHTML += '<span id="mobile-download" class="pull-right text-center"><a href="'+ photo.link +'" target="_blank"><i class="fa fa-download fa-lg"></i></a></span>';
          photoHTML += '</div>';
          photoHTML += '</div>';
        } else {
          photoHTML += '</div>';
          photoHTML += '<div class="row photo-grid">';
        }
      });
      //Injects HTML to website
      $("#test").html(photoHTML);
    }
    //getJson callback function
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    // When one-grid is click images take a whole row
    $("#one-grid").click(function(){
      $("span").removeClass('active');
      $(this).addClass('active');
      $("#loading").show();
      $.getJSON(flickerAPI, flickrOptions, displayPhotosGrid);

    });
    // When two-grid is click images take a whole row
    $("#column-grid").click(function(){
      $("span").removeClass('active');
      $(this).addClass('active');
      $("#loading").show();
      $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    });
});
