function Species() {}

Species.prototype.getSpecies = function(species_name) {
    $.get('http://api.gbif.org/v1/species?name=' + species_name).then(function(resp) {
        // console.log(resp.results[0].scientificName);
        // console.log(resp.results[0].vernacularName);
        // console.log(resp);
        $('.Scientificname').html('<h3> Scientific Name: ' + resp.results[0].scientificName + '</h3>');
        $('.Englishname').html('<h3> English Name: ' + resp.results[0].vernacularName + '</h3>');

    }).fail(function(error){
        $('.error').html('<h3>No results for ' + '<i>'+species_name +'</i>'+ '</h3>');
    });
    $.get('http://eol.org/api/search/1.0.json?q='+species_name + '&page=1&exact=false').then(function(resp){
        console.log(resp);
        $('.link').html('<h3>More info: ' +'<a target="_blank" href='+ resp.results[0].link +'><i>Learn more</i></a>'+'</h3>');

    }).fail(function(error){
        $('.error').html('<h3>No results for ' + '<i>'+species_name +'</i>'+ '</h3>');
    });
};


exports.speciesModule = Species;
