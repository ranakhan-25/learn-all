// const rev = "atikul";
// const n = rev.split("").reverse().join("");
// console.log(n)
// ==================================================
// function fun(n) {
//   const a = n.split("").reverse().join("");
//   if (n === a) {
//     return true
//   }
//   return false
// }
// console.log(fun("madam"))
// =====================================================
// const v = "JavaScript"
// function fun (c) {
//   const d = "AEIOUaeiou";
//   let count = 0;
//   for (let i = 0; i < c.length; i++){
//     if (d.includes(c[i])) {
//       count++
//     }
//   }
//   return count
// }
// console.log(fun(v))
// ===================================================
// function fun(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i]))
//     {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// console.log(fun([1, 2, 2, 3, 4, 4, 5]))
// ====================================================
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const result = {};
// for (const fruit of fruits) {
//   if (result[fruit]) {
//     result[fruit]++;
//   } else {
//     result[fruit] = 1;
//   }
// }
// console.log(result);
// ====================================================
// function fun(a, b)
// {
//   for (let i = 0; i < a.length; i++){
//     for (let j = i+ 1; j < a.length; j++){
//       if (a[i] + a[j] === b)
//       {
//         console.log([i,j])
//       }
//     }
//   }
// }
// fun([2, 7, 11, 15],26)
// ==================================================
// const str = "javascript";
// const n = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(n)
// ============================================
// const num = "hello my name is rana"
// const newNum = num.toLocaleLowerCase().split(" ").map(str=>str.charAt(0).toUpperCase() + str.slice(1)).join(" ")
// console.log(newNum)
// ===========================================
// const count = "hello";
// let result = {}
// for (let char of count){
//   if (result[char]) {
//     result[char]++
//   }
//   else {
//     result[char] = 1
//   }
// }
// console.log(result)
// ==================================================
// const tr = [0, 1, false, 2, "", 3, null, undefined];
// let n = []
// for (let i = 0; i < tr.length; i++){
//   if (tr[i]) {
//     n.push(tr[i])
//   }
// }
// console.log(n)
// =================================================

// function fun(n) {
//   return n * 2
// }
// console.log(fun(5))

// ===================================================

// const pizzaSlices = ['Bread', 'Cheese', 'Veggie', 'BBQ', 'Meet'];
// const n = pizzaSlices.slice(1,4)
// console.log(n)
// =============================================
const akhonFriends = ["Abul", "Babul", "Kuddus"];
const addHoise = ["Mokhles", "Kashem"];
// akhonFriends.push(addHoise)
// console.log(akhonFriends)

const n = [...akhonFriends, ...addHoise]
console.log(n)