// Asynchronous Flickr Search
// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//
// Allow users to click the images to see a larger version with more information.

    // Place your code here, inside the document ready handler.

$(document).on('ready', function(){
  var searchImages = function(tags){
      var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    console.log(tags);
    $('#images').innerHTML = '<li class="search-throbber">Searching...</li>'; 
 // Flickr reveal  a searchable JSON Feed you can access via jQuery's $.getJSON()
    $.getJSON(flickrAPI, {
      tags: tags,
      tagmode: "any", 
   // image search results
      format: "json"
    }).done(function( data ) {
      $('#images').empty();
      // empties image container
     // $('h1.search-title').first()[0].innerHTML = "Search for: " + tags;
      $.each( data.items, function( i, item ) {
        var newListItem = $("<li>"); 
     // image information
        var newTitle = $('<p class="image-title">').html(item.title).appendTo(newListItem);
        var newDate = $('<p class="image-date">').text(item.date_taken).appendTo(newListItem);
        var newDescription = $('<p class="image-description">').html(item.description).appendTo(newListItem);
        var newLink = $('<a>').attr('href', item.link).text('View on Flickr.').appendTo(newListItem)
        
  var newButton = $("<button class='btn btn-sm btn-primary'>details</button>").attr({
          'data-title': item.title,
          'data-toggle': "modal",
          'data-target': "#infoModal",
          'data-imgsrc': item.media.m,
          'data-description': item.description,
          'type': "button"
        }).appendTo(newListItem);
        newListItem.appendTo( "#images" );
        if ( i === 15 ) {
          return false;
        }
      });
    });
  };
   // Search Button 
  $('#Search').on('click', function(event){

    // Prevent the default event execution so the browser doesn't
    event.preventDefault();
    // Get the value of the 'input[name="searchText"]' and use that as the `tags` value you send to `searchImages()`.
    var searchTextInput  = $("#Input").val();//$(event.target.parentElement).find('input[name="searchText"]')[0];
    // Print search text value to console
    console.log(searchTextInput);
    //Execute the `searchImages()` function to fetch images for the user.
    searchImages(searchTextInput);   alert(searchTextInput); 
  });
    
 
 //});
// });
//};
 });
 

