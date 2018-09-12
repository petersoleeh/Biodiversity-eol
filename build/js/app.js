(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        $('.link').html('<h5>' +'<a target="_blank" href='+ resp.results[0].link +'><i>Learn more</i></a>'+'</h5>');

    }).fail(function(error){
        $('.error').html('<h3>No results for ' + '<i>'+species_name +'</i>'+ '</h3>');
    });
};


exports.speciesModule = Species;
//  http://eol.org/api/data_objects/1.0/30073527.json?taxonomy=true&cache_ttl=&language=en

},{}],2:[function(require,module,exports){
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
        currentSearchObject.getSpecies(species_name);

        console.log(species_name);
    });
});
},{"./../js/user.js":1}]},{},[2]);
