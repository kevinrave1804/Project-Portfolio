const SelectHV=document.querySelector("#HV")
const HojaVida=document.querySelector(".HojaVida")

const Portafolio=document.querySelector("#Portafolio")

const Inicio=document.querySelector(".Inicio")

SelectHV.addEventListener("click",HV)
Portafolio.addEventListener("click",IniPortafolio)

function HV(){
    const InicioClosed=Inicio.classList.contains("inactive")

    if(!InicioClosed){
        Inicio.classList.add("inactive")
    }    

    HojaVida.classList.toggle("inactive")
}

function IniPortafolio(){
    const HojaVidaClosed=HojaVida.classList.contains("inactive")

    if(!HojaVidaClosed){
        HojaVida.classList.add("inactive")
    }

    Inicio.classList.toggle("inactive")
}