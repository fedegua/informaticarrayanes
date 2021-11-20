var tipo = [document.getElementById("tipo1"), document.getElementById("tipo2") , document.getElementById("tipo3") ];
var posicion = 0 ;

function cambiarTipo() {
    for (i=0; i<tipo.length; i++) {
        if (i==posicion) {
            tipo[i].style.display="inline-block";
        } else {
            tipo[i].style.display="none";
        }
    }
}

function atras() {
    if (posicion==0) {
        posicion=2;
        cambiarTipo();
    } else {
        posicion--;
        cambiarTipo();
    }
}

function siguiente() {
    if (posicion==2) {
        posicion=0;
        cambiarTipo();
    } else {
        posicion++;
        cambiarTipo();
    }
}

let auxActual = document.getElementById(1);

function selectLugar(lugar) {
            auxActual.style.display="none";
            document.getElementById(lugar).style.display="block";
            auxActual = document.getElementById(lugar);
			document.getElementById(lugar).scrollIntoView();
}