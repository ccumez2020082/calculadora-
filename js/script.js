var todosBotones = document.getElementById('todos-botones');
var pantalla = document.getElementById('pantalla');
pantalla.value = "0";

var calculadoraObj = { clickedButtonValue: "", result: "" };

function operacionCalculadora(buttonValue) {

    switch (buttonValue) {

        case '=':
            var operacionString = calculadoraObj.result + calculadoraObj.clickedButtonValue; //8+7 = 15
            calculadoraObj.result = eval(operacionString); //number
            //alert(calculadoraObj.result);
            calculadoraObj.clickedButtonValue = "";
            pantalla.value = (calculadoraObj.result).toFixed(2);
            calculadoraObj.result = String(calculadoraObj.result); // 13 -> '13'

            break;

        case 'AC':
            calculadoraObj.clickedButtonValue = "";
            calculadoraObj.result = "";
            //alert(calculadoraObj.clickedButtonValue);
            pantalla.value = "0";
            break;


        default:

            calculadoraObj.clickedButtonValue = calculadoraObj.clickedButtonValue + buttonValue;
            //alert(calculadoraObj.clickedButtonValue);
            pantalla.value = calculadoraObj.clickedButtonValue;




    }



}




todosBotones.addEventListener('click', (event) => {

    const isButton = event.target.nodeName === "BUTTON";

    if (!isButton) {

        return;
    }




    var buttonValue = event.target.value;

    operacionCalculadora(buttonValue);



});


window.onload = function abrir() {

    document.getElementById("mostrar").style.display = "block";


};

function cerrar() {

    document.getElementById("mostrar").style.display = "none";
}