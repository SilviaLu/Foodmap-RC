$(document).ready(function() {
  setTimeout(function() {
    window.location.href = 'views/home.html';
  }, 4000);
	
  // Accediendo a mis variables
  var $locales = data['LIMA']['Comidas']['locales'];
  showRestaurant($locales);
  
  
// 'option' al select, según los tipos de restaurantes . 
function addOptionSelect(indexRest) {
  $('select').append("<option class='op'>" + $locales[indexRest]['type'] + "</option>");
  var $options = $('option.op');
  $options.eq(indexRest).attr('value', $restaurant[indexRest]['type']);
}

});