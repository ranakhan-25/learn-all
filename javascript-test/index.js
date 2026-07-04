// const array = [1,6,7,null,5,2,4,"","test"];

// let len = 0


// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] === "number"){
//        array[len] = array[i];
//        len++;
//     }
// }

// for (let i = 0; i < len - 1 ; i++)  {
//     for (let j = 0; j < len - i -1; j++) {
//         if(array[j] > array[j+1]) {
//             let temp = array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp;
//         }
//     }
// }

// array.length = len

// possible output : [1,2,4,5,6,7]

// console.log(array);

// const twoSum = (arr,value) => {
//     let len = [];
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i; j < arr.length; j++){
//             let a = arr[i] + arr[j];
//             if (a === value) {
//                len = [i, j]
//             }
//         }
//     }
//     return len;
// }

// console.log(twoSum([2, 7, 11, 15], 18))


const all = ["eat", "tea", "tan", "ate", "nat", "bat"]
const groupAnagrams = (arr) => {

}
// output
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

flatten([1, [2, [3, 4], 5], 6]);
// output [1, 2, 3, 4, 5, 6]