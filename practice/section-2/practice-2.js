'use strict';

function countSameElements(collection) {
  var ans = new Array();
  var table = new Array();
  var ch, count;
  for(var i = 0; i < collection.length; i++){
    if(collection[i].length > 1){
      ch = collection[i][0];
      count = collection[i][2]; 
    } else {
      ch = collection[i];
      count = 1;
    }
    var index = table.indexOf(ch);
    if(index > -1){
      ans[index].count++;
    }else {
      table.push(ch);
      var tmp = new Object();
      tmp.key = ch;
      tmp.count = count*1;
      ans.push(tmp);
    }
  }
  return ans;
}
