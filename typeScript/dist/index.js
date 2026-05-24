"use strict";
// let firstNum: string = "hello ";
// let userId: number = 12;
// let isActive: boolean = true;
Object.defineProperty(exports, "__esModule", { value: true });
// let arr: Array<string>;
// arr = ["hello", "kalo", "big"]
// console.log(arr.sort()[0].toUpperCase())
// let All: (string | number)[];
// All = ["kk",12,];
// let arr2: number[];
// arr2 = [1, 3, 5, 66, 6]
// console.log(arr2.sort((a, b) => b - a))
// tuple type
// let arr3: [string, number,boolean];
// arr3 = ["userId", 120, false]
// arr3.push(500,12,true)
// console.log(arr3)
// enum type
// enum numeric {
//   getData = 3,
//   readData = 8,
//   deleteData,
// }
// console.log(numeric)
// enum stringType {
//   getData = "lal",
//   readData="kala",
//   deleteData="sada",
// }
// console.log(stringType)
// enum heterganide {
//   getData = "lal",
//   readData="kala",
//   deleteData = "sada",
//   userId = 123
// }
// console.log(heterganide)
// any type
// let userName: any;
// ((userName = "rana"), (userName = 123), (userName = true));
// let user1 : object[]
// user1 = [
//   {
//   firstName: "hello",
//   userId : 123
//   },
//   {
//   firstName: "world",
//   userId : 1234
//   },
// ]
// console.log(user1)
// let user2: {
//   name: string, id?: number
// }
// user2 = { name: "hello" }
// console.log(user1)
// user1.push(user2)
// console.log(user1)
// type userType = { name: string, userId: number }
// let user: userType[];
// user = []
// let user1: userType
// user1 = {name:"rana",userId:12}
// let user2: userType
// user2 = {name:"rana",userId:12}
// let user3: userType
// user3 = {name:"rana",userId:12}
// user.push(user1,user2,user3)
// console.log(user)
// type requestType = "GET" | "POST"
// let getReq: requestType;
// getReq = "GET";
// function reqHandaler(reqType: requestType) {
//   console.log(reqType)
// }
// reqHandaler("GET")
// class User {
//   userName: string;
//   userId: number;
//   constructor(userName: string, userId: number) {
//     this.userName = userName;
//     this.userId = userId;
//   }
//   fun(userName: string, userId: number) {
//     console.log(userId, userName);
//   }
// }
// let user = new User("khan", 102);
// user.fun("rana",101);
// console.log(user)
// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   display() {
//     console.log(this.name,this.age)
//   }
// }
// // let newUser = new User("Rana Khan",21)
// // newUser.display()
// //====inheritance=======
// class Student extends User{
//   id: number;
//   isRunning: boolean;
//   constructor(name:string, age:number, id: number, isRunning: boolean) {
//     super(name,age)
//     this.id = id;
//     this.isRunning = isRunning;
//   }
//   display(): void {
//     console.log(this.name,this.age,this.id,this.isRunning)
//   }
// }
// // let Student1 = new Student("Rana Khan", 21,101, true)
// // Student1.display()
// // === abstract ====
// abstract class User2{
//   name: string;
//   age: number;
//   constructor(name:string, age:number) {
//     this.name = name;
//     this.age = age;
//   }
//   abstract display(): void;
// }
// class Student2 extends User2{
//   id: number;
//   isRunning: boolean;
//   constructor(name:string, age:number, id: number, isRunning: boolean) {
//     super(name,age)
//     this.id = id;
//     this.isRunning = isRunning;
//   }
//   display(): void {
//     console.log(this.name,this.age,this.id,this.isRunning)
//   }
// }
// let result = new Student2("hello", 21, 1013746, true)
// result.display()
// class User {
//   public name: string;
//   privet age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   display() {
//     console.log(this.name,this.age)
//   }
// }
// class Student2 extends User{
//   id: number;
//   p isRunning: boolean;
//   constructor(name:string, age:number, id: number, isRunning: boolean) {
//     super(name,age)
//     this.id = id;
//     this.isRunning = isRunning;
//   }
//   display(): void {
//     console.log(this.name,this.age,this.id,this.isRunning)
//   }
//   setStudentName(studentName: string):void {
//     this.name = studentName;
//   }
// }
// Student2
// let newUser = new Student2 ("Rana Khan", 21,103846,true)
// newUser.name = "atikul haq"
// newUser.display()
