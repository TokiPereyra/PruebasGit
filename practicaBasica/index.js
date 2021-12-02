var caja = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_texto");
caja.addEventListener("click", quitarTexto);
boton.addEventListener("click", dibujoPorClick);



var canva = document.getElementById("dibujo");
var lienzo = canva.getContext("2d");
var lineas = 30;
var linea = 0;
var yi, xi;

function dibujarImagen()
{
    linea = 0;
    while(linea < lineas) 
    {
        yi = (300 / lineas) * (linea + 1);
        xi = (300 / lineas) * linea;
        hacerLinea("black", 0, yi, xi, 300);
        linea++;
    }

    var linea1 = 0;

    while(linea1 < lineas) 
    {
        yi = (300 / lineas) * (linea1 + 1);
        xi = (300 / lineas) * linea1;
        hacerLinea("black", 300, yi, xi, 0);
        linea1++;
    }

    var linea2 = 0;

    while(linea2 < lineas) 
    {
        yi = 300 - (300 / lineas) * (linea2 + 1);
        xi = (300 / lineas) * linea2;
        hacerLinea("black", xi, 300, 300, yi);
        linea2++;
    }

    var linea3 = 0;

    while(linea3 < lineas) 
    {
        yi = 300 - (300 / lineas) * (linea3 + 1);
        xi = (300 / lineas) * linea3;
        hacerLinea("black", xi, 0, 0, yi);
        linea3++;
    }
}

function hacerLinea(color, xi, yi, xf, yf) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() 
{
    lineas = parseInt(caja.value);
    dibujarImagen();
}

function quitarTexto() 
{
    caja.value = "";
}