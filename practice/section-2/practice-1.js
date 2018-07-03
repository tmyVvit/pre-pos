'use strict';

function countSameElements(collection) {
  var ans = new Array();
  var table = new Array();
  for(var i = 0; i < collection.length; i++){
    var index = table.indexOf(collection[i]);
    if(index > -1){
      ans[index].count++;
    }else {
      table.push(collection[i]);
      var tmp = new Object();
      tmp.key = collection[i];
      tmp.count = 1;
      ans.push(tmp);
    }
  }
  return ans;
}
