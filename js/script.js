$(document).ready(function() {
 
  $("#owl-container").owlCarousel({
  	items : 4,
  	navigation: true,
  	navigationText: [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
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
 
       content += "<div class='item'><img src=\"" +img+ "\" alt=\"" +alt+ "\"><h3>Tip " + tip_id + "</h3><p>" + copy + "</p></div>"
    }
    $("#owl-container").html(content);
    console.log(content);
  }

 
});


