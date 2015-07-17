'use strict';

function Garden(plants, people) {

  this.plantRows = plants.split('\n')
  this.people = people.sort();
  var garden = this;

  function convertNames(letterArray) {
    var plantArray = [];
    letterArray.forEach(function(letter) {
      switch(letter) {
        case "R":
          plantArray.push('radishes');
          break;
        case "C":
          plantArray.push("clover");
          break;
        case "V":
          plantArray.push("violets");
          break;
        case "G": 
          plantArray.push("grass")
          break;
      }
    })
    return plantArray;
  }

  people.forEach(function(person, index) {
    var patch = [];

    garden.plantRows.forEach(function(row) {
      patch.push(row[2*index]);
      patch.push(row[2*index+1]);

    })

    // make a method for each person
    garden[person.toLowerCase()] = convertNames(patch);

  })
    

}
