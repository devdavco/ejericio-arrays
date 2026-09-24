const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // ¡Escribe tu código debajo de esta línea!

  arr[2].push(30)// Agrego al final
  arr[2].unshift(20) //agrego primero
  arr[2].splice(0,0,20) //agrego primero usando, igual que unshift

console.log(arr[2])  

console.log("Inserto nueva fila")
arr.push([30,31,32,33,34,35,36,37,38,39])

console.log(arr)  

console.log(arr[2][arr[2].length-1], "el que voy a eliminar")

arr[2].pop() // elimina el último
console.log(arr[2])
arr[2].splice(0,2) //elimino los dos repetidos
console.log(arr[2])

arr[2].reverse()
console.log(arr[2])

console.log(arr)

  
  // ¡Escribe tu código encima de esta línea!