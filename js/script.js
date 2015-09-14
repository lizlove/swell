// $(document).ready(function() {

	// Get images from mock API and append to image carousel
	// var swellAPI = 'http://builds.tryswell.com/mock/items.json';
	// $.getJSON(swellAPI, function(result){
	// 	result.items.forEach(function(shoe){
	// 		var id_number = "<h3>Tip " + shoe.id + "<h3/>";
	// 		var url = shoe.images[0]['url'];
	// 		var image = "<img src='" + url + "' class='item' height='200' width='200'/>";
	// 		var title = shoe.heading;
	// 		var copy = "<p>" + shoe.description + "</p>";
	// 		console.log(id_number, image, copy);
	// 		$('.slick-track').append(id_number, image, copy);
	// 	});
	// }); 
// });
	 
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
  	items : 4, 
    jsonPath : 'http://builds.tryswell.com/mock/items.json',
    jsonSuccess : customDataSuccess
  });
 
  function customDataSuccess(data){
    var content = "";
    for(var i in data["items"]){
       
       var img = data["items"][i]["images"][0]['url'];
       var alt = data["items"][i].heading;
       var tip_id = data["items"][i].id;
       var copy = data["items"][i].description;
 
       content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
    }
    $("#owl-demo").html(content);
  }
 
});


