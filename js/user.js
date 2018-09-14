function Species() {}

Species.prototype.getSpecies = function(species_name) {

    // Get scientific name and convert to english name
    $.get('http://api.gbif.org/v1/species?name=' + species_name).then(function(resp) {
        // console.log(resp.results[0].scientificName);
        // console.log(resp.results[0].vernacularName);
        console.log(resp);
        $('.Scientificname').html('<h3> Scientific Name: ' + resp.results[0].scientificName + '</h3>');
        $('.Englishname').html('<h3> English Name: ' + resp.results[0].vernacularName + '</h3>');

    }).fail(function(error){
        $('.error').html('<h3>No results for ' + '<i>'+species_name +'</i>'+ '</h3>');
    });
    // EOL LINKS TO MORE INFORMATION
    $.get('http://eol.org/api/search/1.0.json?q='+species_name + '&page=1&exact=false').then(function(resp){
        console.log(resp);
        $('.link').html('<h5>' +'<a target="_blank" href='+ resp.results[0].link +'><i>Learn more</i></a>'+'</h5>');

    }).fail(function(error){
        $('.error').html('<h3>No results for ' + '<i>'+species_name +'</i>'+ '</h3>');
    });
    $.get('http://api.gbif.org/v1/occurrence/search?q=' + species_name + '&mediaType=Stillimage').then(function(response){
        console.log(response);
        console.log(response.results[0].media[0].identifier);
        
        $('.username').html('<img class="img-responsive" style="width:100%" src=' + '"' +response.results[0].media[0].identifier+ '" '+'>');
        $('.title').html('<h5>'+response.results[0].media[0].title +'</h5>');
        $('.desc').html('<p>'+response.results[0].media[0].description +'<p>');
    });
};


exports.speciesModule = Species;
//  http://eol.org/api/data_objects/1.0/30073527.json?taxonomy=true&cache_ttl=&language=en
// http://api.gbif.org/v1/occurrence/search?q=puma&mediaType=Stillimage