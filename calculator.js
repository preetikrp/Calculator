console.log("Calculator");

var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var output = document.getElementById("output");





btn.addEventListener("click",add);
btn1.addEventListener("click",substract);
btn2.addEventListener("click", multiply);
btn3.addEventListener("click", divide);


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */




function add(){
var addtotal = Number(input1.value) + Number(input2.value);
console.log(addtotal);
//document.getElementById("addtotal").innerHTML = addtotal;

document.getElementById("output").innerHTML = addtotal;
}

/*
  Create a function that subtracts two numbersaddtotal
  passed in as arguments. Return the difference.
 */







function substract(){

var subtotal = Number(input1.value) - Number(input2.value);
console.log(subtotal);

document.getElementById("output").innerHTML = subtotal;

}





//Create a function that multiplies two numbers
 // passed in as arguments. Return the product.




function multiply(){
	var multiplication = Number(input1.value) * Number(input2.value);
//console.log(multiplication);

     document.getElementById("output").innerHTML = multiplication;
}



/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



function divide(){
	var division = Number(input1.value) / Number(input2.value);
	//console.log(division);
	document.getElementById("output").innerHTML = division;
}






















