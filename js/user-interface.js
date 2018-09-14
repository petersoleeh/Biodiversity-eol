var Species = require('./../js/user.js').speciesModule;

$(document).ready(function (){
    var currentSearchObject = new Species();
    $('#search-species').click(function (event) {
        event.preventDefault();
        var species_name = $("#species-name").val();
        $("#species-name").val("");
        $('.Scientificname').empty("");
        $('.Englishname').empty("");
        $('.error').empty("");
        $('.link').empty("");
        $('.username').empty("");
        $('.title').empty("");
        $('.desc').empty("");
        currentSearchObject.getSpecies(species_name);

        console.log(species_name);
    });
});