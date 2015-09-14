$(document).ready(function(){
    var swellAPI = 'http://builds.tryswell.com/mock/items.json';

    $.getJSON(swellAPI, function(result){
          console.log(result);

            // .photos.photo.forEach(function(obj){
            //     var farmid = obj.farm;
            //     var serverid = obj.server;
            //     var id = obj.id;
            //     var secret = obj.secret;
            //     var image = '<img src="http://farm' + farmid + '.staticflickr.com/' + serverid + '/' + id + '_' + secret + '.jpg">'
            // $('#feed').append(image)
            // }); //forEach
        }); // getJSON

}); //docready
   

// $(document).ready(function(){
//   $('.slider').slick({
//     dots: true,
//     arrows: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
// });


