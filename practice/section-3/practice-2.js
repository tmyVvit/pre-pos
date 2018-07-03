'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var c = objectB.value.toString();
  for(var i = 0; i < collectionA.length; i++) {
    if(c.indexOf(collectionA[i].key.toString())>-1)
      if(collectionA[i].count >= 3){
        collectionA[i].count -= Math.floor(collectionA[i].count/3);
      }
    }
  
  return collectionA;
}
