function convert(){
    var celsius = parseFloat(document.getElementById("celsius").value);
    var Fahrenheit = (celsius*9/5)+32;
    document.getElementById("result").innerHTML=celsius+"C is equal to"+Fahrenheit.toFixed(2)+"F";
}