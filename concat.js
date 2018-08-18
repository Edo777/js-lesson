var arr = [1,2,3,4,5,6];
var arr2 = ["bhbj", "jbjhb"];

//1.concat
var arr4 = arr.concat(arr2);
//2.
var arr5 = [...arr, ...arr2];

//3.
var arr6
for (const iterator of arr2) {
    arr.push(iterator);
}
arr6 = arr;
