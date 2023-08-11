/*
Diferencias entre Arrow Functions y functions

La sintaxis de las arrow functions es mucho mas limpia no necesitamos usar la palabra function y si la escribimos en una
sola linea tampoco necesitamos agregar la palabra return por lo que se suele usar mucho en los metodos map, filter, reduce

Nos facilitan el uso de THIS toma como contexto el objeto donde fue ejecutada la funcion en cambio con las arrow functions
el this toma como contexto el objeto donde fue declarada la funcion

Miramos una arrow function, vemos el objeto padre o el objeto anterior y si no es otra arrow function el this va a ser el objeto
padre nos permiten no perder de referencia el this
* */