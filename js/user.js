function Species() {}

Species.prototype.getSpecies = function(species_name) {
    $.get('http://api.gbif.org/v1/species?name=' + species_name).then(function(resp) {
        console.log(resp);

    });
};


exports.speciesModule = Species;