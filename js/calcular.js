window.addEventListener('load',function(){
const forma=this.document.getElementById('form');
var numero1=forma['numero1'];
var numero2= forma['numero2'];

var sumarbtn=document.querySelector('#sumar');
var restarbtn=document.querySelector('#restar');
var multiplicarbtn=document.querySelector('#multiplicar');
var dividirbtn=document.querySelector('#dividir');
function sumar(){
   var resultado = parseInt(numero1.value)+parseInt(numero2.value);
   document.getElementById('resultado').innerHTML=resultado;
    
}
function restar(){
    var resultado = parseInt(numero1.value)-parseInt(numero2.value);
    document.getElementById('resultado').innerHTML=resultado;
     
 }
 function multiplicar(){
    var resultado = parseInt(numero1.value)*parseInt(numero2.value);
    document.getElementById('resultado').innerHTML=resultado;
     
 }
 function dividir(){
    var resultado = parseInt(numero1.value)/parseInt(numero2.value);
    document.getElementById('resultado').innerHTML=resultado;
     
 }
sumarbtn.addEventListener('click',function(){
sumar();

});
restarbtn.addEventListener('click',function(){
    restar();
    });
multiplicarbtn.addEventListener('click',function(){
 multiplicar();
});
dividirbtn.addEventListener('click',function(){
 dividir();
  });
});