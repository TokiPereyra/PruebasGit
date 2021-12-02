var canva = document.getElementById("canva");
var lienzo = canva.getContext("2d");
document.addEventListener("keydown", dibujar);

hacerLinea("red", 149, 149, 151, 151, lienzo);
var x = 150;
var y = 150;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

function dibujar(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            hacerLinea("red", x, y, x, y - 10, lienzo);
            y -= 10;
            break;
        case teclas.DOWN:
            hacerLinea("red", x, y, x, y + 10, lienzo);
            y += 10;
            break;
        case teclas.LEFT:
            hacerLinea("red", x, y, x - 10, y, lienzo);
            x -= 10;
            break;
        case teclas.RIGHT:
            hacerLinea("red", x, y, x + 10, y, lienzo);
            x += 10;
            break;
    }
}

function hacerLinea(color, xi, yi, xf, yf, lienzo) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}