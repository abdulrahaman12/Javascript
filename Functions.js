//Function
function sum(){
    total = a + b;
    document.write(total);   
}
sum()

//Function Parameter vs Function Argument 
function sum(a, b){
    total = a + b;
    document.write(total);   
}
sum(10, 20)

//Function Expression 

var funExp = function(a,b){
    return total = a + b;
}

var sum = funExp(10, 5);

document.write("The sum of two num is "+ sum);
