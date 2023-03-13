const SelectHV=document.querySelector("#HV")
const HojaVida=document.querySelector(".HojaVida")

const Inicio=document.querySelector(".Inicio")

SelectHV.addEventListener("click",HV)

function HV(){
    const InicioClosed=Inicio.classList.contains("inactive")
    if(!InicioClosed){
        Inicio.classList.add("inactive")
    }

    HojaVida.classList.toggle("inactive")
}