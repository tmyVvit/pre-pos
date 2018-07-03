'use strict';

function countSameElements(collection) {
  var ans = new Array();
  var table = new Array();
  var ch, count;
  for(var i = 0; i < collection.length; i++){
    if(collection[i].length > 1){
      ch = collection[i][0];
      if(collection[i].length > 4){
        count = collection[i][2]*10 + collection[i][3]*1;
      }
      else count = collection[i][2]; 
    } else {
      ch = collection[i];
      count = 1;
    }
    var index = table.indexOf(ch);
    if(index > -1){
      ans[index].summary += count*1;
    }else {
      table.push(ch);
      var tmp = new Object();
      tmp.name = ch;
      tmp.summary = count*1;
      ans.push(tmp);
    }
  }
  return ans;
}
