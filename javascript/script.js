        
        // javascript basics, variables, loops, conditionals, functions , operators,DOM Manipulation

        // let a = 10;
        // let b = 5;
        // console.log(a+b)
        // console.log(a-b)
        // console.log(a*b)
        // console.log(a/b)
        // console.log(a%b)

        // const age = 17;

        // if(age >= 18){
        //     console.log("Adult")
        // } else {
        //     console.log("Minor")
        // }

        // for(let i = 1; i<=5; i++){
        //     console.log("hello")
        // }

        // function changeText(){
        //     document.getElementById("title").innerText = "Button Clicked"
        // }

        // function input(){
        //     let name = prompt("Enter your name")
        //     document.getElementById("title").innerText = name;
        // }


        //Arrays, Objects
        // let fruits = ["apple", "banana", "mango", "peach", "orange"]

        // console.log(fruits[2]) //mango

        // fruits[2] = "grapes";
        // console.log(fruits)

        // console.log(fruits.length)

        // for(let i = 0; i<fruits.length; i++){
        //     console.log(fruits[i])
        // }

        // fruits.push("mango")
        // console.log(fruits)

        // fruits.pop()
        // console.log(fruits)

        // fruits.shift()
        // console.log(fruits)

        // fruits.unshift("apple")
        // console.log(fruits)

        // fruits.splice(2,2)
        // console.log(fruits)

        // fruits.splice(3,0,"apple", "pear")
        // console.log(fruits)

        // const numbers = [1,2,3,4,5,6,7,8,9,10]

        // const evenNumbers = numbers.filter(num => num % 2 === 0)
        // console.log(evenNumbers)

        // function greet(name){
        //     return "hello " + name
        // }
        // console.log(greet("aryaman"))

    //     const matrix = [
    //         [1,2,3],
    //         [4,5,6],
    //         [7,8,9]
    //     ]

    //     console.log(matrix)
    //     console.log(matrix[2][2])

    //     const arr3d = [
    //     [
    //         [1,2],
    //         [3,4]
    //     ],
    //     [
    //         [5,6],
    //         [7,8]
    //     ]
    // ]

    // console.log(arr3d)

    // let student = {
    //     name: "Aryaman",
    //     age: 24,
    //     course: "Web Dev",
    //     city: "Noida",
    //     skills: ["HTML", "Css", "JS"],
    //     greet: function(message){
    //         console.log("hello Students : " + message)
    //     }
    // }

    // console.log(student)

    // console.log(student.city)
    // // console.log(student["age"])

    // student.age = 25;
    // console.log(student)

    // student.email = "heyaryaman@gmail.com"
    // console.log(student)

    // delete student.age
    // console.log(student)

    // let students = [
    //     {
    //         name: "Aryaman",
    //         age: 24
    //     },
    //     {
    //         name: "rahul",
    //         age: 20
    //     },
    //     {
    //         name: "Mohit",
    //         age: 21
    //     }
    // ]

    // console.log(students[0].name)

    // // for(let key in student){
    // //     console.log(key, student[key])
    // // }

    // student.greet("how are you all?")

    // const fruits = ["apple", "banana", "mango"]
    // // for(let i in fruits){
    // //     console.log(fruits[i])
    // // }

    // for(let f of fruits){ // for every value inside fruits, put that value into the variable f
    //     console.log(f)
    // }

    // let name = "Aryaman"

    // console.log("Hello " + name)
    // console.log(`Hello ${name}`)

    // function g1(){
    //     console.log("hello") // traditional way
    // }

    // const g2 = () => {
    //     console.log("Hello") //arrow function
    // }


    // let student = {
    //     name: "Aryaman",
    //     age: 24
    // }
    //old way
    // let name = student.name;
    // let age = student.age;

    //modern way
    // const {name, age} = student

    // const arr1 = [1,2,3];
    // const arr2 = [...arr1]

    // arr2.push(4)

    // console.log(arr2)

    // const frontend = ["HTML", "CSS"]
    // const backend = ["NODE", "MONGODB"]

    // const stack = [...frontend, ...backend]

    // console.log(stack)

    //Hoisting
    // console.log(greet("Summer School"))
    // function greet(name){
    //     return "hello, " + name;
    // }

    // function createUser (name, role = "student"){
    //     return {name, role}
    // }

    // console.log(createUser("Aryaman", "manager"))

    // function sumAll(...numbers){
    //     return numbers.reduce((total, n) => total + n, 0);
    // }
    // console.log(sumAll(1,2,3,4,5)) //15


    // var globalVar = "I am global"

    // function testScope () {
    //     var funcVar = "I am function scoped"
    //     let blockLet = "I am block scoped"


    //     if(true){
    //         var insideIf = "var leaks out of if!"
    //         let blockOnly = "let stays inside if"
    //         console.log(blockOnly);
    //     }

    //     console.log(insideIf);
    //     let blockOnly = "now im outside"
    //     console.log(blockOnly);
    // }

    // testScope();

    // console.log("Start")

    // setTimeout(() => {
    //     console.log("Timer")
    // }, 0)

    // console.log("End")

    // function one(){
    //     two();
    // }

    // function two(){
    //     console.log("Hello")
    // }

    // one();

    // let checkEven = new Promise((resolve, reject) => {
    //     let number = 5;
    //     if(number % 2 === 0) resolve("The number is even");
    //     else reject("The number is odd")
    // })

    // checkEven.then((message) => console.log(message)) // on success
    // .catch((error) => console.error(error)); // on failure

    try{
        const result = null;
        console.log(result.length);
    }catch (error){
        console.log("Error Caught: ", error.message);
        console.log("Error Type: ", error.name);
    } finally {
        console.log("This always runs - cleanup here")
    }


    





      


        
