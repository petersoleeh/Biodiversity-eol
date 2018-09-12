var Species = require('./../js/user.js').speciesModule;

$(document).ready(function (){
    var currentSearchObject = new Species();
    $('#search-species').click(function (event) {
        event.preventDefault();
        var species_name = $("#species-name").val();
        $("#species-name").val("");
        currentSearchObject.getSpecies(species_name);

        console.log(species_name);
    });
});