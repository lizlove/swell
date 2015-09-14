// $(document).ready(function() {
// 	// Get images from mock API and append to image carousel
// 	var swellAPI = 'http://builds.tryswell.com/mock/items.json';
// 	$.getJSON(swellAPI, function(result){
// 		result.items.forEach(function(shoe){
// 			var id_number = "<h3>Tip " + shoe.id + "<h3/>";
// 			var url = shoe.images[0]['url'];
// 			var image = "<img src='" + url + "' class="item" height="200" width="200"/>";
// 			var title = shoe.heading;
// 			var copy = "<p>" + shoe.description + "</p>";
// 			var caption = image + id_number + copy 
// 			$('.slide').clone().replaceWith(caption).insertAfter(this);
// 		});
// 	}); 
// }); 

$(document).ready(function() {
	// Build image carousel with responsive structure
		$('.slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}); 
});
	 



