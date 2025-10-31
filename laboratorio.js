//  Ejercicio 1: Libro (Objeto básico + if)
function Libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function() { 
        if (!this.prestado) { this.prestado = true; 
            return `"${this.titulo}" ha sido prestado.`; 
        }else { return `Error: "${this.titulo}" ya está prestado.`; 
        } 
    };
}; 
const libro1 = new Libro("Cien años de soledad", "Gabriel Garcia Marquez");
console.log(libro1.prestar());
console.log(libro1.prestar());

//  Ejercicio 2: Lista de Compras (Array + for)
function ListaCompras (){
    this.productos = []
    this.agregar = function(producto){
        this.productos.push(producto);
    };
    this.mostrar = function() {
        console.log("Lista de compras");
        for (let i = 0; i < this.productos.length; i++){
            console.log(`${i + 1}. ${this.productos[i]}`);
        }
    };
};
const miLista = new ListaCompras();
miLista.agregar ("Manzana");
miLista.agregar ("Pan");
miLista.agregar ("Leche");
miLista.mostrar();

//  Ejercicio 3: Reproductor de Música
function Reproductor() {
    this.estado = "detenido"; 
    this.play = function() {
    if (this.estado === "detenido" || this.estado === "pausado") {
        this.estado = "reproduciendo";
        console.log("Reproduciendo música...");
    } else {
        console.log("Ya se está reproduciendo música.");
    }
};
    this.pausar = function() {
    if (this.estado === "reproduciendo") {
        this.estado = "pausado";
        console.log("Música pausada.");
    } else {
        console.log("No hay música reproduciéndose.");
    }
    };
    this.detener = function() {
    this.estado = "detenido";
    console.log("Música detenida.");
    };
}
const miReproductor = new Reproductor();
miReproductor.play();     
miReproductor.play();    
miReproductor.pausar();   
miReproductor.detener();

//  Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto usando métodos y condicionales (if/else)).
function Carrito() {
    this.productos = [];
    this.total = 0;
    this.agregarProducto = function(nombre, precio) {
    this.productos.push({ nombre, precio });
    this.total += precio;
    console.log(`Producto agregado: ${nombre} ($${precio})`);
    };
    this.calcularDescuento = function() {
    if (this.total > 100) {
        const descuento = this.total * 0.10;
        const totalConDescuento = this.total - descuento;
        console.log(`Total: $${this.total} Descuento 10% aplicado. Total final: $${totalConDescuento.toFixed(2)}`);
    } else if (this.total > 50 && this.total <= 100) {
        const descuento = this.total * 0.05;
        const totalConDescuento = this.total - descuento;
        console.log(`Total: $${this.total} Descuento 5% aplicado. Total final: $${totalConDescuento.toFixed(2)}`);
    } else {
        console.log(`Total sin descuento: $${this.total}`);
    }
    };
}
const miCarrito = new Carrito();
miCarrito.agregarProducto("Camiseta", 40);
miCarrito.agregarProducto("Pantalón", 70);
miCarrito.agregarProducto("Zapatos", 50);
miCarrito.calcularDescuento();






