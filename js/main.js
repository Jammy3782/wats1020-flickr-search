// Asynchronous Flickr Search


// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//
// Allow users to click the images to see a larger version with more information.

    // Place your code here, inside the document ready handler.
});
$(document).on('ready', function(){
  var searchImages = function(tags) {
      var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    console.log(tags);
    $('#images').innerHTML = '<li class="search-throbber">Searching...</li>';  // Flickr reveal  a searchable JSON Feed you can access via jQuery's $.getJSON()
    $.getJSON(flickrAPI, {
      tags: tags,
      tagmode: "any"
   // image search results
      format: "json"
    }).done(function( data ) {
      $('#images').empty();
      // empties image container
      $('h1.search-title').first()[0].innerHTML = "Search for: " + tags;
      $.each( data.items, function( i, item ) {
        var newListItem = $("<li>")
     // image information
        var newTitle = $('<p class="image-title">').html(item.title).appendTo(newListItem);
        var newDate = $('<p class="image-date">').text(item.date_taken).appendTo(newListItem);
        var newDescription = $('<p class="image-description">').html(item.description).appendTo(newListItem);
        var newLink = $('<a>').attr('href', item.link).text('View on Flickr.').appendTo(newListItem);

   
  });

});
