(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Species() {}

Species.prototype.getSpecies = function(species_name) {
    $.get('http://api.gbif.org/v1/species?name=' + species_name).then(function(resp) {
        console.log(resp);

    });
};


exports.speciesModule = Species;
},{}],2:[function(require,module,exports){
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
},{"./../js/user.js":1}]},{},[2]);
