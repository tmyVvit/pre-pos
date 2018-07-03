'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var c = new Array();
  var table = new Array();
  for(var i = 0; i < collectionA.length; i++){
    var index = table.indexOf(collectionA[i]);
    var count = 1;
    var ch = collectionA[i];
    if(collectionA[i].length>1){
      count = collectionA[i][2];
      ch = collectionA[i][0]
    }
    if(index > -1){
      c[index].count += count;
    }else {
      table.push(ch);
      var tmp = new Object();
      tmp.key = ch;
      tmp.count = count;
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
