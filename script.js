
let productos = [
    { id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
    { id: 2, nombre: "Escalativa Catalana Vegana", precio: 900 },
    { id: 3, nombre: "Vegetales Asados", precio: 1500 },
    { id: 4, nombre: "Sushi Vegano", precio: 1200 },
    { id: 5, nombre: "Hamburgueza de Lentejas", precio: 950 },
    { id: 6, nombre: "Sandwich de milanesa de Seitán", precio: 920 }
];

let carrito = [];

for (const producto of productos) {
    
    $("#app").append(`<div>
                        
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btn btn-primary ${producto.id}">Comprar</button>
                        </div>`);
    //Asociamos el evento a botón recién creado.
    $(".btn").on('click', function() {
        console.log(`Compraste ${producto.nombre}`);
        carrito.push(productos[producto.id - 1]);
        console.log(carrito);
    });
}
$(".btn").click((e) => {
    let hijos= $(e.target).parent().children();
    console.log(hijos[0].value);
    $(e.target).parent().slideUp("slow");
})


$("#botonBorrar").on('click', () => {
    while(carrito.length > 0)
  carrito.pop() })

let visibilidad = true;
$("#botonBorrar").on('click', () => {
    
    visibilidad ? $("#borrar").css({ display: "none" }) : $("#borrar").css({ display: "inline-block" });
    visibilidad = !visibilidad;
    
});

$("#botonBorrar").on('click', () => {
    
    $('body').prepend('<h2 >Hola Juan</h2>')
    
});

$("#muestraParrafo").on('click', () => {
    
    $("#parrafo").show();

    
});
$("#ocultaParrafo").on('click', () => {
    
    $("#parrafo").hide();

    
});


$("#slideImagenUp").click(() => {
    
    $("#ensalada").slideUp("fast");

    
});
$("#slideImagenUp").click(() => {
    
    $("#sushi").slideUp("fast");

    
});

$("#muestraOculta").click(() => {
    
    $("#ensalada").toggle("fast");

    
});
$("#muestraOculta").click(() => {
    
    $("#sushi").toggle("fast");

    
});

$("h1").css({"background-color":"red",
"border":"5px solid"}) .slideUp(2000) .slideDown(2000);

$('body').append('<h2 id="compraya">Compra ya!!</h2>')
$("#compraya").css("background-color","yellow")
.slideUp(2000)
.slideDown(2000);