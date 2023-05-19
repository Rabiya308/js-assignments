////////// Chapter No 1.ALERT /////////////

// task no 1 greeting //
// alert("HELLO WORLD!");

// task no 2 error message
// alert("Error! please enter a valid password");

// task no 3 display message
// alert("Welcome to JS Land... \n Happy Coding!");

//task no 4 display message in sequence
// alert("Welcome to JS Land... ");
// alert("Happy Coding!");

// task no 5 message//
// alert("Hello....! i can run js through my browser's console");

// chapter no 2:variables

// task no 1
// let userName="ali";
// console.log(userName);

// task no 2
// let myName="Rabiya Imtiaz";
// console.log(myName);

// task no 3
// let masseage="Hello world";
// alert(message);

// task no 4
// let studentName="john Doe";
// alert( studentName);
// let studentAge="15 years old";
// alert( studentAge);
// let studentCourse ="Certified Mobile Application Development";
// alert( studentCourse);

// task no 5
// let word="PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(word);

// task no 6
// let email1="My Email Address is \n" ;
// let email2="rabiyaimt786@gmail.com";
// alert(email1 + email2);

// task no 7

// let book= "I am learn from the Book A smarter way to learn JavaScript";
// alert(book);

// task no 8
// let content="Yah! I can write HTML document through JavaScript ";
// document.write(content);

// task no 9
// let pattern="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(pattern);

///////////// chapter no#3 VARIABLES FOR NUMBER //////////////

// let myAge= 20;
// alert("I am" + "" + myAge  + ""  + "years old" );

// let userVISIT= 10;
// alert("you have visited this site" +  userVISIT  + "times");

// let birthYear= 1992;
// document.write("My birth year is " + birthYear)
// document.write("<br>")
// document.write("Data type of my declared variable is number")

// let visitorsName= "John Doe";
// let productTitle= " T-shirts";
// let quantity= 5;
// document.write("<b>"+ visitorsName + "</b>" + "ordered" + "<b>" + quantity + " "+ productTitle + "</b>(s)"  +"on x,y,z Clothing store");

/////////////////// chapter no 4 ////////////////
// question 1 //
// let my_Name="rabiya" my_Age="30" my_Number="12345678";


// question 2 ///
// userName;
// num1;
// $my_Age;
// client_name;
// favNum;
// 5 legal variable names

// 2num;
// firstnum;
// #age;
// NAME2;
// eyecolor;
// 5 illegal variable names

// document.write("<b> Rules for naming JS variables </b>");
// document.write("<br>");
// document.write("variable names only contain, numbers, $and _ .for example:$my_1stVariable");
// document.write("<br>");
// document.write("variable must begin with a letter, $ or_ . For example:$name,_name or name");
// document.write("<br>");
// document.write("variable names are case sensitive");
// document.write("<br>");
// document.write("variable names should not be JS key word");

//////////// chapter no 5 /////////////
// question 1///
// let num1=5;
// num2=2;
// newNum=num1 +num2;
// console.log(newNum);
// document.write("sum of 5 and 2 is 7")

// let num1=5;
// num2=2;
// newNum=num1 -num2;
// console.log(newNum);
// document.write("subtraction of 5 and 2 is 3")

// let num1=5;
// num2=2;
// newNum=num1 * num2;
// console.log(newNum);
// document.write("multiplication of 5 and 2 is 10")

// 
// let num1=5;
// num2=2;
// newNum=num1 / num2;
// console.log(newNum);
// document.write("division of 5 and 2 is 2.5")

// let num1=5;
// num2=2;
// newNum=num1 % num2;
// console.log(newNum);
// document.write("modulus of 5 and 2 is 1")

// question 2
// let favNum= 
// console.log(favNum);
// document.write("value after variable declaration is undefined")


// let favNum=8;
// console.log(favNum);
// document.write("initial value is 8");



// let favNum=8;
// console.log(++favNum);
// document.write("value after increment is 9");


// let favNum=8;
// console.log(favNum + 7);
// document.write("value after addition is 15");


// let favNum=13;
// console.log(favNum++);
// document.write("value after decrement is 12");


// let favNum=12;
// console.log(favNum %3);
// document.write("the remainder is 0");

// question 3 ///
// let price=+prompt("what is the price of one ticket?");
// total= price * 5;
// console.log(total);
// document.write("Total cost of 5 tickets is 3000pkr")


// question 4 //

// document.write("<b> Table of 4 </b>")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// let number=+prompt("choose a number for table.");
// document.write("table of" , number, "<br>")
// for(let i =1; i<=10 ;i++)
// document.write(number+ "x" + i+ "="+ +number*i+ "<br>")



// question 5 ///
// let celcius=+prompt("enter temperature in celcius")
// let fahrenhite=+prompt("enter temperature in fahrenhite")
// document.write("temperature", celcius, "in F is",((celcius*(9/5))+32),"<sup>o</sup>F <br>")
// document.write("temperature", fahrenhite, "in C is",((fahrenhite-32*(5/9))),"<sup>o</sup>C <br>")



// question 6 ///
// document.write("<b> shopping Cart </b>")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")

// let price_Item1=+prompt("what is the price of first item?")
// document.write("price of item 1 is"+ price_Item1)
// let quantity=+prompt("how many items do u want?")
// document.write("<br>")
// document.write("quantity of item 1 is"+ quantity * price_Item1)
// document.write("<br>")
// let price_Item2=+prompt("what is the price of second item?")
// document.write("price of item 2 is"+ price_Item2)
// let number=+prompt("how many items do u want?")
// document.write("<br>")
// document.write("quantity of item 2 is"+ number * price_Item2)
// document.write("<br>")
// let charges=100
// document.write("shipping charges"+ 100)
// document.write("<br>")
// let total=price_Item1*quantity+price_Item2*number+charges
// document.write("<br>")
// document.write("total cost of your order is"+ total)

// question 7 ///
// document.write("<b> Marks Sheet </b>")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// let totalMarks=+prompt("enter total marks")
// document.write("total marks" + totalMarks)
// document.write("<br>")
// let marksObtained=+prompt("enter your marks")
// document.write("Marks obtained" + marksObtained)
// document.write("<br>")
// let percentage=marksObtained*100/totalMarks
// document.write("percentage"+percentage)


 
// question 8 ///
// document.write("<b> Currency in PKR </b>")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")

// let dollar=+prompt("enter your amount")
// let calculate1=dollar*104.80
// let riyal=+prompt("enter your amount")
// let calculate2=riyal*28
// let total=calculate1 +calculate2
// document.write("Total Currency in PKR:"+ total)

// question 9 ///
// let numbers= (6 + 5 * 10 / 2)
// console.log(numbers);


// question 10 ///
// document.write("<b> Age Calculator </b>")
// // document.write("<br>")
// // document.write("<br>")
// // document.write("<br>")
// let currentYear=+prompt("enter current year")
// document.write("Current Year:" + currentYear)
// document.write("<br>")
// let birthYear=+prompt("enter your birth year")
// document.write("Birth Year:" + birthYear)
// let age=currentYear - birthYear
// document.write("Age is:" + age)

// question 11 ////
// document.write("<b>The Geometrizer </b>")
// // document.write("<br>")
// // document.write("<br>")
// // // document.write("<br>")
// let radius=20
// document.write("The radius of a circle  is"+radius)
// document.write("<br>")
// let circumference=Math.PI*2*radius
// document.write("The circumference  is"+circumference)
// document.write("<br>")
// let area=Math.PI*radius*radius
// document.write("The area  is"+area)

// question 12 ////
// document.write("<b>The Life Time Supply Calculator </b>")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// let favSnacks=+prompt("enter your favourite snack")
// let currentAge=+prompt("enter your current age")
// let maximumAge=+prompt("enter maximum age")

// let snack_Amount=+prompt("amount of snack per day")
// let calculate=(maximumAge - currentAge) * snack_Amount
// document.write("You will need "+""+ calculate + ""+ "chocolate-chip"+""  + "to last you until the ripe old age of 65")

//////////// chapter 6-9 ////////////////

// question 1 ////
// let a= 10;
// console.log(a);
// document.write("The value of a is:10")

// let a= 10;
// let b= ++a
// console.log(b);
// document.write("The value of a is:11")
// document.write("<br>")
// document.write("Noe the value of a is:11")


// let a= 11;
// let b= a++
// console.log(b);
// document.write("The value of a is:11")
// document.write("<br>")
// document.write("Now the value of a is:12")

// let a= 12;
// let b= --a
// console.log(b);
// document.write("The value of a is:11")
// document.write("<br>")
// document.write("Now the value of a is:11")

// let a= 11;
// let b= a--
// console.log(b);
// document.write("The value of a is:11")
// document.write("<br>")
// document.write("Now the value of a is:10")

// question 2 ////
// let a=2,b=1
// let c= --a
// console.log(c);
// document.write("the value of a is decrement by 1")

// let a=2,b=1
// let c= --b
// console.log(c);
// document.write("the value of b is decrement by 0")


// let a=2,b=1
// let c= ++b
// console.log(c);
// document.write("the value of b is increment by 1")

// let a=2,b=1
// let c= b--
// console.log(c);
// document.write("the value of b is update by 1")

// let a=2,b=1
// let c= --a - --b + ++b + b--
// console.log(c);
// document.write("the result is 3")


// // question 3 ////
// let userName=prompt("enter your name")
// alert("welcome"+" "+ userName )

// question 4 ////
// let number=+prompt("what is your favourite number?")
// if (!number){
// for (let i =1; i<=10;i++)

// document.write(5 ,"x" , i, "=" , 5*i , "<br>")
// }
// else{
//  number= +number;
// for(let i=1; i<=10;i++){
//  document.write(number, "x" , i, "=", number*i, "<br>")
// }
// }
// question 5 ////
// let subject1 = prompt("Enter the name of subject 1:");
// let subject2 = prompt("Enter the name of subject 2:");
// let subject3 = prompt("Enter the name of subject 3:");


// let marks1 = parseFloat(prompt("Enter the marks obtained in " + subject1 + ":"));
// let marks2 = parseFloat(prompt("Enter the marks obtained in " + subject2 + ":"));
// let marks3 = parseFloat(prompt("Enter the marks obtained in " + subject3 + ":"));


// let totalMarks = 100;
// let percentage1 = (marks1 / totalMarks) * 100;
// let percentage2 = (marks2 / totalMarks) * 100;
// let percentage3 = (marks3 / totalMarks) * 100;


// let table = document.createElement("table");


// let row1 = table.insertRow();
// let cell1_1 = row1.insertCell();
// let cell1_2 = row1.insertCell();
// let cell1_3 = row1.insertCell();
// let cell1_4 = row1.insertCell();


// cell1_1.innerHTML = "Subject";
// cell1_2.innerHTML="Total Marks"
// cell1_3.innerHTML = "Obtained Marks";
// cell1_4.innerHTML = "Percentage";

// let row2 = table.insertRow();
// let cell2_1 = row2.insertCell();
// let cell2_2 = row2.insertCell();
// let cell2_3 = row2.insertCell();
// let cell2_4 = row2.insertCell();


// cell2_1.innerHTML = subject1;
// cell2_2.innerHTML = totalMarks;
// cell2_3.innerHTML = marks1;
// cell2_4.innerHTML = percentage1.toFixed(2) + "%";

// let row3 = table.insertRow();
// let cell3_1 = row3.insertCell();
// let cell3_2 = row3.insertCell();
// let cell3_3 = row3.insertCell();
// let cell3_4 = row3.insertCell();

// cell3_1.innerHTML = subject2;
// cell3_2.innerHTML = totalMarks;
// cell3_3.innerHTML = marks2;
// cell3_4.innerHTML = percentage2.toFixed(2) + "%";

// let row4 = table.insertRow();
// let cell4_1 = row4.insertCell();
// let cell4_2 = row4.insertCell();
// let cell4_3 = row4.insertCell();
// let cell4_4 = row4.insertCell();


// cell4_1.innerHTML = subject3;
// cell4_2.innerHTML = totalMarks;
// cell4_3.innerHTML = marks3;
// cell4_4.innerHTML = percentage3.toFixed(2) + "%";

// let row5 = table.insertRow();
// let cell5_1=  row5.insertCell();
// let cell5_2 = row5.insertCell();
// let cell5_3 = row5.insertCell();
// let cell5_4 = row5.insertCell();

// cell5_2.innerHTML = "<b>"+300+"</b>";
// cell5_3.innerHTML = "<b>"+156+"</b>";
// cell5_4.innerHTML = "<b>"+ 156*100/300+ "%"+"</b>";


// document.body.appendChild(table);


/////// chapter 9 till 11 ////////////

// question 1 ////
// let cityName = prompt("Where do you live?");
// if (cityName === "karachi") {
//  alert("Welcome to city of lights!")
// }

// question 2 ////
// let gender=prompt("who are you?");
// if(gender=== "male"){
//   alert("Good Morning Sir")
// }
// else(gender==="female")
//   alert("Good Morning Ma'am")

// question 3 /////
// let signalColor=prompt("select a color")
// if(signalColor==="red"){
//   alert("Must Stop")
// }
// else if(signalColor==="yellow"){
//   alert("Ready to move")
// }
// else(signalColor==="green")
//    alert("Move now")


// question 4 /////
// let fuel=+prompt("enter fuel in a car in litres")
// if(fuel <= "0.25"){
//   alert("please refill the fuel in a car")
// }


// question 5////
// let a=4;
// if(++a ===5)
//  console.log(a);{
//   alert("given condition for variable is true")
// }

// let b=82;
// if(b++ === 83);
//   console.log(b);{
//   alert("given condition for variable is true")
// }

// let c=12;

// if(c++ === 13);
//   console.log(c);{
//   alert(" condition 1 is true")
// }
// if(c === 13){
//   alert("condition 2 is true")
// }
// if(++c < 14){
//   alert("condition 3 is true")
// }
// if(c === 14){
//   alert("condition 4 is true")
// }

// condition 3 is not true because pre increment value doesn't match the condition/////

// let materialCost=20000;
// let laborCost=2000;
// let totalCost=materialCost+laborCost;
// if(totalCost === laborCost + materialCost){
//   alert("The cost equals")
// }


// if(true){
//   alert("True")
// }
// if(false){
//   alert("False")
// }
// if("car" < "cat"){
//   alert("car is smaller than cat")
// }

// in first conditions  is true java script can't display another one


// question no 6 ///
// document.write("<b> Mraks Sheet </b>")
// document.write("<br>")
// document.write("<br>")
// let subject1 = prompt("Enter the name of subject 1:");
// let subject2 = prompt("Enter the name of subject 2:");
// let subject3 = prompt("Enter the name of subject 3:");
// let totalMarks = 300;
// document.write("Total marks :"+ totalMarks)
// document.write("<br>")

// let marks1 = parseFloat(prompt("Enter the marks obtained in " + subject1 + ":"));
// let marks2 = parseFloat(prompt("Enter the marks obtained in " + subject2 + ":"));
// let marks3 = parseFloat(prompt("Enter the marks obtained in " + subject3 + ":"));
// let calcMarks= marks1+ marks2 + marks3
// document.write("Marks obtained :"+calcMarks)
// document.write("<br>")

// let calcPercentage= calcMarks*100/totalMarks
// document.write("percentage :"+ calcPercentage.toFixed(2) +"%")
// document.write("<br>")
// if(calcPercentage >= 80){
//   document.write("grade : A-one")
//   document.write("<br>")
//   document.write("remarks : Excellent");
// }
// else if(calcPercentage >= 70){
//   document.write("grade : A")
//   document.write("<br>")
//   document.write("remarks : Good");
// }
// else if(calcPercentage >= 60){
//   document.write("grade : B")
//   document.write("<br>")
//   document.write("remarks : You need to improve");
// }
// else{
//   document.write("Fail")
//   document.write("<br>")
//   document.write("remarks : sorry");
// }


// question no 7 ///
// let number=+prompt("guess a number");
// let secretNum= 6;
// if(number > secretNum ){
//   alert("You guess a large number")
// }
// else if ( number < secretNum){
//   alert("Close enough to the correct answer")
// }
// else if ( number == secretNum){
//   alert("Bingo! correct answer")
// }


// question no 8 ////
// let num= +prompt("select number")
// if (num % 3 == 0){
//   document.write(num, "is divisible by 3")
// }
// else{
//   document.write("not divisible")
// }


// question 9 ////
// let num= +prompt("enter number")
// if (num % 2 == 0){
//   document.write("even number")
// }
// else{
//   document.write("odd number")
// }

// question no 10////
// let temp= +prompt("enter temperature")
// if(temp > 40){
//   document.write("It is too hot outside")
// }
// else if(temp > 30){
//   document.write("The weather today is Normal")
// }
// else if(temp > 20){
//   document.write("Today's weather is cool")
// }
// else{
//   document.write("OMG! Today's weather is cool")
// }

// question 11 ///
let first_num= +prompt("enter a number")
let second_num= +prompt("enter a number")
document.write("<h1> Addition </h1" ,first_num, " +" ,second_num ,"= ",first_num + second_num,"<br>")
document.write("<h1> Subtraction </h1" ,first_num, " +" ,second_num ,"= ",first_num - second_num,"<br>")
document.write("<h1> Multiplication </h1" ,first_num, " +" ,second_num ,"= ",first_num * second_num,"<br>")
document.write("<h1> Division </h1" ,first_num, " +" ,second_num ,"= ",first_num / second_num,"<br>")
document.write("<h1> Modulus </h1" ,first_num, " +" ,second_num ,"= ",first_num % second_num,"<br>")

























