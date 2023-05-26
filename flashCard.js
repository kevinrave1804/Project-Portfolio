const ia=document.getElementById("IA")
const diseño=document.getElementById("Diseño")
const etiqueta=document.getElementById("Etiquetas")
const js=document.getElementById("JS")

ia.addEventListener("click",IA)
diseño.addEventListener("click",Diseño)
etiqueta.addEventListener("click",Etiqueta)
js.addEventListener("click",JavaS)

function IA(){
    ia.classList.toggle("active")
    if(ia.classList.contains("active")==true){
        ia.innerHTML=`
        <h2>Inteligencia Artificial</h2>
        <div class="frontal">
            <h3>
                ¿IA, que es eso?
            </h3>
            <img src="./assets/asombro.png"> 
        </div>
        `
    }else{
        ia.innerHTML=`
        <h2>Inteligencia Artificial</h2>
        <div class="frontal active">
            <p>
            La IA busca simular y replicar habilidades cognitivas como el razonamiento, el aprendizaje, la percepción, el reconocimiento de voz, la toma de decisiones y la resolución de problemas.

            Tiene diferentes campos el aprendizaje automatico(Machine Learning) y el  aprendizaje profundo(Deep Learning)
            </p>
            <img src="./assets/IA.jpeg">
        </div>`
    }
}

function Diseño(){
    diseño.classList.toggle("active")
    if(diseño.classList.contains("active")==true){
        diseño.innerHTML=`
        <h2>Diseño Responsive</h2>
        <div class="frontal">
            <h3>
                ¿Que usos tiene el diseño responsive?
            </h3>
            <img src="./assets/asombro.png">              
        </div>
        `
    }else{
        diseño.innerHTML=`
        <h2>Diseño Responsive</h2>
        <div class="frontal">
            <p>
            Que los sitios web que se adapten y respondan a diferentes tamaños de pantalla y dispositivos4

            Esto permite una mejor experiencia de usuario, accesibilidad, alcance más amplio, mejor posicionamiento en los motores de búsqueda
            </p>
            <img src="./assets/Disenoresponsive.jpg">
        </div>`
    }
}

function Etiqueta(){
    etiqueta.classList.toggle("active")
    if(etiqueta.classList.contains("active")==true){
        etiqueta.innerHTML=`
        <h2>Etiquetas HTML</h2>
        <div class="frontal">
            <h3>
                ¿Para que sirven las etiquetas HTML?
            </h3>
            <img src="./assets/asombro.png">               
        </div>
        `
    }else{
        etiqueta.innerHTML=`
        <h2>Etiquetas HTML</h2>
        <div class="frontal">
            <p>
            Se utilizados para estructurar y dar formato al contenido de una página web. Estas etiquetas son interpretadas por los navegadores web para renderizar el contenido de manera adecuada
            </p>
            <img src="./assets/etiquetasHtml.png">
        </div>`
    }
}

function JavaS(){
    js.classList.toggle("active")
    if(js.classList.contains("active")==true){
        js.innerHTML=`
        <h2>JavaScript</h2>
        <div class="frontal">
            <h3>
                ¿Para que usar JavaScript?
            </h3>
            <img src="./assets/asombro.png">               
        </div>
        `
    }else{
        js.innerHTML=`
        <h2>JavaScript</h2>
        <div class="frontal">
            <p>
            Para agregar interactividad y dinamismo a las páginas web.
            Y se puede utilizar para manipulación del DOM, eventos interactivos, validación de formularios, interacción con APIs, creación de juegos y aplicaciones web
            </p>
            <img src="./assets/JavaScript.jpg">
        </div>`
    }
}