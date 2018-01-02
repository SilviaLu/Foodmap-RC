$(document).ready(function() {
  // Accediendo a la menu.
  var $locales = data['LIMA']['Comidas']['locales'];
  showRestaurant($locales);
	var $comidas = $('title');
	

	

  function addOptionSelect(menu) {
    $('select').append('<option class='foods'>' + $$comidas') + '</option>');
    var $options = $('option.op');
    $options.eq(indexRest).attr('value', $locales[indexRest]['type']);
  }
});

function addOptionSelect(indexRest) {
  $('select').append("<option class='op'>" + $restaurant[indexRest]['type'] + "</option>");
  var $options = $('option.op');
  $options.eq(indexRest).attr('value', $restaurant[indexRest]['type']);
}
