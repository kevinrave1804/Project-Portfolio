const cargar = (document.querySelector("body").onload = function() {
    const p1 = producto();
});
const productos=document.getElementById("catalogoPro")

function producto(){
    fetch("./catalogo.json")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data.catalogo.forEach(element => {
            productos.innerHTML+=`
            <li>
                <img src="${element.producto.fotos}" alt="${element.producto.nombre}">
                <h3>
                    ${element.producto.nombre}  (Referencia:${element.producto.referencia})
                </h3>
                <p>
                    Colores:${element.producto.colores}  
                </p>
                <p>
                    Tallas: ${element.producto.tallas}
                </p>
                <p>
                    ${element.producto.descripcion}
                </p>
                <div>
                    <b>${element.producto.precio}</b>
                    <button>Compra</button>
                </div>
            </li>
            `
        });
    })
}