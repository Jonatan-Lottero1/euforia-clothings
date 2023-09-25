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
