'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var c = objectB.value.toString();
  for(var i = 0; i < collectionA.length; i++) {
    if(c.indexOf(collectionA[i].key.toString())>-1){
      collectionA[i].count -= 1;
    }
  }
  return collectionA;
}
