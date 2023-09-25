let nombreUsuario = "";

const pedirNombre = () => {
    do {
        nombreUsuario = prompt("Ingrese su nombre").trim();
        if (nombreUsuario === "") {
            alert("Debes ingresar tu nombre para poder continuar");
        }
    } while (nombreUsuario === "");
}

pedirNombre();

alert("¡Bienvenido " + nombreUsuario + " a EuphoriaClothings!");

const productos = {
    remeras: {
        precio: 10000,
        stock: 50,
    },
    pantalones: {
        precio: 7000,
        stock: 30,
    },
    calzados: {
        precio: 25000,
        stock: 20,
    },
    outfits: {
        precio: 7000,
        stock: 30,
    },
};

const carrito = [];

const ordenarProductos = (productos, orden) => {
    return orden(productos);
}

const comprarProductos = () => {
    let totalCompra = 0;
    let seguirComprando = true;

    do {
        const producto = prompt("¿Qué es lo que buscas? : Remeras, Pantalones, Calzados, Outfits").toLowerCase().trim();
        const cantidad = Number(prompt("¿Qué cantidad buscas?"));

        if (productos.hasOwnProperty(producto) && cantidad <= productos[producto].stock) {
            const precio = productos[producto].precio;
            const subtotal = precio * cantidad;
            totalCompra += subtotal;

            carrito.push({
                nombre: producto,
                cantidad: cantidad,
                precioUnitario: precio,
                subtotal: subtotal,
            });

            productos[producto].stock -= cantidad;
        } else {
            alert("¡Ups! Lo sentimos, el producto no está en stock o la cantidad es demasiado alta");
        }

        seguirComprando = confirm("¿Quieres seguir comprando?");

    } while (seguirComprando);

    alert("Total de la compra: $" + totalCompra);

    console.log("Total de la compra: $" + totalCompra);
    console.log("Productos en el carrito:");
    console.log(carrito);
}

comprarProductos();


// let nombreUsuario = "";

// const pedirNombre = () => {
//     do {
//         nombreUsuario = prompt("Ingrese su nombre").trim();
//         if (nombreUsuario === "") {
//             alert("Debes ingresar tu nombre para poder continuar");
//         }
//     } while (nombreUsuario === "");
// }

// pedirNombre();

// alert("¡Bienvenido " + nombreUsuario + " a EuphoriaClothings!");

// const productos = {
//     remeras: {
//         precio: 10000,
//         stock: 50,
//     },
//     pantalones: {
//         precio: 7000,
//         stock: 30,
//     },
//     calzados: {
//         precio: 25000,
//         stock: 20,
//     },
//     outfits: {
//         precio: 7000,
//         stock: 30,
//     },
// };

// const carrito = [];

// const ordenarProductos = (productos, orden) => {
//     return orden(productos);
// }

// const comprarProductos = () => {
//     let totalCompra = 0;
//     let seguirComprando = true;

//     do {
//         const producto = prompt("¿Qué es lo que buscas? : Remeras, Pantalones, Calzados, Outfits").toLowerCase().trim();
//         const cantidad = Number(prompt("¿Qué cantidad buscas?"));

//         if (productos.hasOwnProperty(producto) && cantidad <= productos[producto].stock) {
//             const precio = productos[producto].precio;
//             const subtotal = precio * cantidad;
//             totalCompra += subtotal;

//             carrito.push({
//                 nombre: producto,
//                 cantidad: cantidad,
//                 precioUnitario: precio,
//                 subtotal: subtotal,
//             });

//             productos[producto].stock -= cantidad;
//         } else {
//             alert("¡Ups! Lo sentimos, el producto no está en stock o la cantidad es demasiado alta");
//         }

//         seguirComprando = confirm("¿Quieres seguir comprando?");

//     } while (seguirComprando);

//     alert("Total de la compra: $" + totalCompra);

//     console.log("Total de la compra: $" + totalCompra);
//     console.log("Productos en el carrito:");
//     console.log(carrito);
// }

// comprarProductos();



// let nombreUsuario = "";

// const pedirNombre = () => {
//     do{
//         nombreUsuario = prompt("Ingrese su nombre").trim();
//         if(nombreUsuario === "") {
//             alert("Debes ingresar tu nombre para poder continuar");
//         }
//     }while(nombreUsuario === "");
// }

// pedirNombre();

// alert("¡Bienvenido " + nombreUsuario + " a EuphoriaClothings!")

// const productos = {
//     remeras: {
//         precio: 10000,
//         stock: 50,
//     },
//     pantalones: {
//         precio: 7000,
//         stock:30,
//     },
//     calzados: {
//         precio: 25000,
//         stock:20,
//     },
//     outfits: {
//         precio: 7000,
//         stock:30,
//     },
// };

// const carrito = [];

// const ordenarProductos = (productos, orden) => {
//     return orden(productos);
// }

// const comprarProductos = () => {
//     let seguirComprando = true;
//     let totalCompra = 0;
// }

// do {
//     const producto = prompt("¿Qué es lo que buscas? : Remeras, Pantalones, Calzados, Outfits").toLowerCase().trim();
//     const cantidad = Number(prompt("¿Qué cantidad buscas?"));

//     if (productos.hasOwnProperty(producto) && cantidad <= productos[producto].stock) {
//         const precio = productos[producto].precio;
//         const subtotal = precio * cantidad;
//         totalCompra += subtotal;

//         carrito.push({
//             nombre: producto,
//             cantidad: cantidad,
//             precioUnitario: precio,
//             subtotal: subtotal,
//         });

//         productos[producto].stock -= cantidad;
//     } else {
//         alert("¡Ups! Lo sentimos, el producto no está en stock o la cantidad es demasiado alta");
//     }

//     seguirComprando = confirm("¿Quieres seguir comprando?");

//     } while (seguirComprando);


//     alert("Total de la compra: $" + totalCompra);
    
//     console.log("Total de la compra: $" + totalCompra);
//     console.log("Productos en el carrito:");
//     console.log(carrito);


// comprarProductos();

// const comprarProductos = () => {
//     let producto = "";
//     let cantidad = 0;
//     let precio = 0;
//     let subtotal = 0;
//     let seguirComprando = true;
//     let totalCompra = 0;

//     do {
//         producto = prompt("¿Qué es lo que buscas? : Remeras,Pantalones,Calzados,Outfits").toLowerCase().trim();
//         cantidad = Number(prompt("¿Qué cantidad buscas?"));

//         console.log(producto);
//         console.log(cantidad);

//         switch (producto) {
//             case "remeras":
//                 precio = 10000;
//                 break;
//             case "pantalones":
//                 precio = 7000;
//                 break;
//             case "calzados":
//                 precio = 25000;
//                 break;
//             case "outfits":
//                 precio = 75000;
//                 break;
//             default: 
//                 alert("¡Ups! Lo sentimos, lo que buscas no se encuentra en stock");
//                 precio = 0;
//                 cantidad = 0;
//         }
//         subtotal = precio * cantidad;
//         totalCompra += subtotal;

//         console.log(precio);

//         seguirComprando = confirm("¿Quieres seguir comprando?");

//     } while(seguirComprando);
//     alert("Total de la compra: $" + totalCompra);
    
//     console.log("Total de la compra: $" + totalCompra);
// }

// comprarProductos();