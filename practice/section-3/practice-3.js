'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var c = new Array();
  var table = new Array();
  for(var i = 0; i < collectionA.length; i++){
    var index = table.indexOf(collectionA[i]);
    if(index > -1){
      c[index].count++;
    }else {
      table.push(collectionA[i]);
      var tmp = new Object();
      tmp.key = collectionA[i];
      tmp.count = 1;
      c.push(tmp);
    }
  }
  var oc = objectB.value.toString();
  for(var i = 0; i < c.length; i++) {
    if(oc.indexOf(c[i].key.toString())>-1)
      if(c[i].count >= 3){
        c[i].count -= Math.floor(c[i].count/3);
      }
    }
  
  return c;
}
