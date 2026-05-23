// let firstNum: string = "hello ";
// let userId: number = 12;
// let isActive: boolean = true;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    function User(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    User.prototype.fun = function (userName, userId) {
        console.log(userId, userName);
    };
    return User;
}());
var user = new User("khan", 102);
// user.fun("rana",101);
// console.log(user)
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, userId, roll) {
        var _this = _super.call(this) || this;
        _this.userName = userName;
        _this.roll = roll;
        _this.userId = userId;
        return _this;
    }
    Student.prototype.fun = function (userName, userId, roll) {
        console.log(userId, userName, roll);
    };
    return Student;
}(User));
