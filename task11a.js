// // for global scope 

// this.table = "global table"

// // console.log(window.table)
// let cleanTable=function(){
//     console.log (`cleaning ${this.table}`)
//         }
//   cleanTable.call(this)

// this.garage={
// table : "garage table",
// cleanTable(){
//     console.log(`cleaning ${this.table}`)
//         }
// }
// // console.log(this.garage.table)

// let johnsRoom={
//     table : "johns table",
//     cleanTable(){
// console.log(`cleaning ${this.table}`)
//     }
// }
// // console.log(johnsRoom.table)
// johnsRoom.cleanTable()
// this.garage.cleanTable()

// for global scope 

// this.table = "global table"

// let cleanTable=function(soap){
//     const innerFunction= (_soap)=>{
//         //let a = this 

// console.log(`cleaning ${this.table} using ${_soap}`)
//     }
//     innerFunction(soap)
//         }


// this.garage={
// table : "garage table",
// }

// let johnsRoom={
//     table : "johns table",
// }

// cleanTable.call(this)
// cleanTable.call(this.garage)
// cleanTable.call(johnsRoom)

// class students {
//     constructor(name , age , phoneNumber, boardMarks){
//         this.name=name,
//         this.age=age ,
//         this.phoneNumber=phoneNumber,
//         this.boardMarks=boardMarks
//     }
//     eligible(){
//         if(this.boardMarks>=40){
//             console.log("this students is eligible")
//         }
//         else console.log("this students is not eligible")
//     }
// }

// let student1 =new students("dev",15,4665,55)
// let student2 =new students("ram",16,5466,35)
// let student3 =new students("savan",17,565656,85)
// let student4 =new students("jay",18,65656656,95)
// let student5 =new students("yash",19,646666,40)
// student1.eligible()

//                   ARROW FUNCTON

class students {
    constructor(name , age , phoneNumber, boardMarks){
        this.name=name,
        this.age=age ,
        this.phoneNumber=phoneNumber,
        this.boardMarks=boardMarks
    }
    eligibleAge(miniAge){
         return (miniMarks) => {
            if(this.age>miniAge && this.boardMarks>miniMarks){
                console.log(this.name +" is eligible for placement")
            }
            else {
                console.log(this.name +" is not eligible for placement")
            }
         }
} 

}
let student1 =new students("dev",15,4665,55)
let student2 =new students("ram",16,5466,35)
let student3 =new students("savan",17,565656,85)
let student4 =new students("jay",18,65656656,95)
let student5 =new students("yash",19,646666,40)
student3.eligibleAge(18)(40)