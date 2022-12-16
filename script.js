showstring
document.getElementById('showstring').onclick=function(){
 alert('HELLO👋! I am Ahmed')
 let statement ="alert('HELLO! I am Ahmed')"
 document.getElementById('statement').innerHTML= statement;
 }
//  clear button statement
 document.getElementById('blank').onclick=function(){
   document.getElementById('statement').innerHTML="";
}
// showalertnumber
document.getElementById('shownumber').onclick=function(){
   alert('1-9')
   let number= "alert('1-9')"
   document.getElementById('statement').innerHTML=number
}

// clear button output
document.getElementById('clearoutput').onclick=function(){
   document.getElementById('output').innerHTML="";
}
// showvariablename
document.getElementById('variable').onclick=function(){
   let listvariable='<ul><li> A variable name cannot start with a <code>number</code></li><li>A variable name can only contain alpha-numeric characters and underscores<code> (A-z, 0-9, and _ )</code></li><li>A valid variable name begins with a letter and contains not more than<code> namelengthmax</code> characters. Valid variable names can include letters, digits, and underscores. <code>MATLAB keywords </code>are not valid variable names.</li><ul/>'
   document.getElementById('output').innerHTML=listvariable
}
// showcamelcase
document.getElementById('camelCase').onclick=function(){
   let casecamel='<h3>EXAMPLES</h3><code><ul><li>userResponse</li><li>userResponseDate</li><li>userResponseDateAndTime</li><li>userId</li></code></ul>'
   document.getElementById('output').innerHTML=casecamel
}
// sum 2 number
document.getElementById('sumnumber').onclick=function(){
   let num1=10
   let num2=15
   let sum=num1+num2
   document.getElementById('statement').innerHTML='let num1=10; </br>let num2=15; </br>let sum=num1+num2;'
   document.getElementById('output').innerHTML="<p class='text-center'>" +sum+ "</p>"
   }
//  subtract 2 numbers
document.getElementById('Subtractnumber').onclick=function(){
   let num1=15
   let num2=15
   let subtract=num1-num2
   document.getElementById('statement').innerHTML='let num1=15; </br>let num2=15; </br>let subtract=num1-num2;'
   document.getElementById('output').innerHTML="<p class='text-center'>" +subtract+ "</p>"
}  
// multiply 2 numbers
document.getElementById('multiplynumber').onclick=function(){
   let num1=15
   let num2=15
   let multiply=num1*num2
   document.getElementById('statement').innerHTML='let num1=15; </br>let num2=15; </br>let multiply=num1 * num2;'
   document.getElementById('output').innerHTML="<p class='text-center'>" +multiply+ "</p>"
}
// divide 2 numbers
document.getElementById('dividenumber').onclick=function(){
   let num1=150
   let num2=15
   let divide =num1 / num2
   document.getElementById('statement').innerHTML='let num1=150; </br>let num2=15; </br>let Divide=num1 / num2;'
   document.getElementById('output').innerHTML="<p class='text-center'>" +divide+ "</p>"
}

// calculatesum number
document.getElementById('somecalculation').onclick=function(){

   let calculation =  9 * 3 / 4 + 7**2 - (3+6);

   document.getElementById('statement').innerHTML='let calculation =  9 * 3 / 4 + 7**2 - (3+6);'
   document.getElementById('output').innerHTML="<p class='text-center'>" +calculation+ "</p>"
}


alert('heloo')
// number
 var num1=10;
 var num2=20;
 var sum=num1+num2;
 console.log(sum);
//  string
var firstName='Muhammad'
var lastName='Ahmed'
// concatinate karna     🔽 or concatination
var fullName= firstName+ " " +lastName
console.log(fullName)
// boolean
var Isjavascripteasy= true
console.log(Isjavascripteasy)
// to check tha Data type
var abc= true
console.log(typeof abc)
// object group off user data
var user= {
   name:'M.Ahmed',
   age: 12,
   dob:'ah/a2',
   adress:"ahahaha",

   }
   console.log(user.name)
   // Array for many data in one type
   var countries=['pakistan','india','afghanistan']
 console.log(countries)
//  Null
var nulldata = null;
console.log(typeof nulldata)



// chapter 7 to--
// Data tyoes
// string
// number
// boolean
// object 
// Array
// undefined
// null
// function



// tarika function banany ka 
// function handleSubmit(){}
// var handleSubmit = function handleSubmit(){}
// let handleSubmit = function handleSubmit(){}
// // mostly use
// const handleSubmit = function handleSubmit(){}
// // for calling
// handleSubmit()

// console.log(2+2);
// // Arithmatic operators
// // +
// // -
// // *
// // /
// // % Remainder
// // **  for power
// // ++   increiment
// // --    decriment

// let num = 1
// // num = num + 1
// console.log(num++)
// console.log(num)







