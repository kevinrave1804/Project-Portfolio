const p1=document.getElementById("1")
const p2=document.getElementById("2")
const p3=document.getElementById("3")
const p4=document.getElementById("4")
const p5=document.getElementById("5")
const p6=document.getElementById("6")
const p7=document.getElementById("7")
const p8=document.getElementById("8")
const p9=document.getElementById("9")
const p10=document.getElementById("10")

const Respuesta=document.querySelector(".Respuesta")


p1.addEventListener("click",funQ1)
p2.addEventListener("click",funQ2)
p3.addEventListener("click",funQ3)
p4.addEventListener("click",funQ4)
p5.addEventListener("click",funQ5)
p6.addEventListener("click",funQ6)
p7.addEventListener("click",funQ7)
p8.addEventListener("click",funQ8)
p9.addEventListener("click",funQ9)
p10.addEventListener("click",funQ10)

function funQ1(){
// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
// Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
    let name=prompt("Ingrese su nombre")
    let age=prompt("Ingrese su edad")
    let Nextage=(parseInt(age)+1)

    return Respuesta.innerHTML=`
        <p>
            Hola ${name}, tienes ${age} años y el año que viene tendras ${Nextage}
        </p>`
}

function funQ2(){
//     2-Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//     triángulo = b * h/2
//     rectángulo = b * h
//     círculo = π * r2 (pi * radio al cuadrado) 
    let b
    let h   
    let figura=prompt("Ingrese la figura de la cual desea hallar el area en minuscula")
    switch(figura){
        case "triangulo":
                b=prompt("Ingrese el valor de la base")
                h=prompt("Ingrese el valor de la altura")
                return Respuesta.innerHTML=`
                    <p>
                        La base del ${figura} es: ${b*(h/2)} 
                    </p>`
            break;
        case "rectangulo":
                b=prompt("Ingrese el valor de la base")
                h=prompt("Ingrese el valor de la altura")
                return Respuesta.innerHTML=`
                    <p>
                        La base del ${figura} es: ${b*(h)} 
                    </p>`
            break;
        case "circulo":
                b=prompt("Ingrese el valor del radio")
                return Respuesta.innerHTML=`
                    <p>
                        La base del ${figura} es: ${Math.PI*(b**2)} 
                    </p>` 
            break;
        default:
            return Respuesta.innerHTML=`
                <p>
                    No podemos realizar la operacion para la figura solicitada,
                    Favor verificar minusculas
                </p>`
            break;
    }
}

function funQ3(){
    // 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    // si el número es 5 el resultado será:
    //     1 - es impar
    //     2 - es par
    //     3 - es impar
    //     4 - es par
    //     5 - es impar
    let list=[]
    let numero=parseInt(prompt("Ingrese un numero"))
    console.log(`Si el numero es ${numero} el resultado sera`);
    for (let i = 1; i <numero+1; i++) {
        if((i%2)==0){
                    list.push(`${i}-->par`)
        } else{
            list.push(`${i}-->impar`)
        }       
    }
    return  Respuesta.innerHTML+=`
        <p>
            ${list}
        </p>`
}

function funQ4(){
    // 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    // Un número primo es aquel que solo es divisible por sí mismo y la unidad
    let numero=parseInt(prompt("Ingrese un numero entero mayor a 1"))

    if (numero == 0 || numero == 1 || numero == 4) 
    return Respuesta.innerHTML=`
        <p>
            El numero ${numero} no es primo
        </p>`;
	for (let i = 2; i < numero / 2; i++) {
		if (numero % i == 0) 
        return Respuesta.innerHTML=`
            <p>
                El numero ${numero} no es primo
            </p>`;
	}
	return Respuesta.innerHTML=`
    <p>
        El numero ${numero} es primo
    </p>`;
}

function funQ5(){
    // 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    // El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
    // !5 = 5*4*3*2*1 = 120  
    let numero=parseInt(prompt("Ingrese un numero")) 
    let total=1
    for (let i = 1; i <numero; i++) {
        total*=i
    }
    return Respuesta.innerHTML=`
                <p>
                    El resultado del factorial de ${numero} es: ${total}
                </p>`;
}

function funQ6(){
    // 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
    let numero,acum=0,cont
    let serie=parseInt(prompt("Cuantos numeros desea ingresar"))
    for (let i = 1; i<serie+1; i++) {
        numero=parseInt(prompt("Ingrese un numero"))
        acum+=numero
        cont=i
    }
    return Respuesta.innerHTML=`
                <p>
                    El total acumulado es ${acum} y el total de numeros introducidos fueron ${cont}
                </p>`
}

function funQ7(){
    // 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    // -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    // -el array de pares e impares
    Respuesta.innerHTML=null
    let numeros=[7,5,6,12,4]
    let pares=[]
    let impares=[]
    let num
    let total
    for (let i = 0; i <numeros.length; i++) {
        num=Math.floor(Math.random() * (10 - 1) + 1)
        total=num*numeros[i]
        if((total%2)==0){
            pares.push(total)
            Respuesta.innerHTML+=`
                <p>
                    La multiplicacion que se produce es: ${num} x ${numeros[i]} = ${total}
                </p>`
        }else{
            impares.push(total)
            Respuesta.innerHTML+=`
            <p>
                La multiplicacion que se produce es: ${num} x ${numeros[i]} = ${total}
            </p>`
            console.log(`La multiplicacion que se produce es: ${num} x ${numeros[i]} = ${total}`);
        }
    }
    Respuesta.innerHTML+=`
        <p>
            La lista de numeros pares es: ${pares};
            y la lista de impares es: ${impares}
        </p>`;
    return Respuesta;

}

function funQ8(){
    //     8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos.La posición de la letra es el resultado del módulo del número introducido entre 23
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    // let DNI=parseInt(prompt("Ingrese un DNI de 8 digitos"))
    let DNI=prompt("Ingrese un DNI de 8 digitos")
    let nuevo,acum=0,total
    nuevo=DNI.split("")
    if(nuevo.length<=8){
        for (let i = 0; i < nuevo.length; i++) {
            acum+=parseInt(nuevo[i])
        }  
        total=Math.round(acum/23)
        return Respuesta.innerHTML=`
            <p>
                ${`La letra correspondiente a la suma del DNI es ${letras[total]}`}
            </p>`;
    }else{
        return Respuesta.innerHTML=`
            <p>
                El DNI tiene mas de 8 digitos
            </p>`
    }
    
}

function funQ9(){
    // 9-Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
    let palabra=prompt("Ingrese una palabra")
    let palabras,conV=0,conC=0
    palabras=palabra.toLowerCase().split("")
    for (let i = 0; i < palabras.length; i++) {
        if(palabras[i]=="a" || palabras[i]=="e" || palabras[i]=="i" ||
        palabras[i]=="o" || palabras[i]=="u"){
            conV++
        }
        else{
            conC++
        }
    }

    return Respuesta.innerHTML=`
        <p>
            El numero de consonantes es ${conV}, el numero de vocales es ${conC} y la longitud de la palabra es ${palabras.length}
        </p>`    
}

function funQ10(){
    // 10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
    let array=["azul", "amarillo", "rojo", "verde", "rosa"]
    let color=prompt("Ingrese el color a buscar")
    let minus=color.toLowerCase()
    let bandera=false
    for (let i = 0; i < array.length; i++) {
        if(array[i]==minus){
            bandera=true
        }
    }
    if(bandera){
        return Respuesta.innerHTML=`
        <p>
            El color si existe en el arreglo
        </p>`
    }else{
        return Respuesta.innerHTML=`
        <p>
            El color no existe en el arreglo
        </p>`
    }
}

