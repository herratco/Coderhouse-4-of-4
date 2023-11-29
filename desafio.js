// Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {

  // Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  // Cada producto que gestione debe contar con las propiedades: title, description, price, thumbnail, code, stock.
  addProduct(title, description, price, thumbnail, code, stock) {

    // Validar que todos los campos esten rellenados.
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("All fields are required.");
      return;
    }

    // Validar que no se repita el campo "code".
    const codeExists = this.products.some(product => product.code === code);
    if (codeExists) {
      console.log("A product with this code already exists.");
      return;
    }

    // Agregar el producto al arreglo.
    const newProduct = {
      id: this.productIdCounter++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(newProduct);
    console.log("Product added.");
  }
 
  // Método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
  getProducts() {
    return this.products;
  }


  // Método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id.
  getProductById(id) {
    const product = this.products.find(product => product.id === id);

    if (product) {
      return product;
    } else {
      // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
      console.log("Not found.");
    }
  }
}


// Ejemplo de Javascript listo para ejecutarse desde node.
const productManager = new ProductManager();

productManager.addProduct("Product 1", "Description 1", 19.99, "image1.jpg", "P001", 10);
productManager.addProduct("Product 2", "Description 2", 29.99, "image2.jpg", "P002", 15);

const allProducts = productManager.getProducts();
console.log("All products:", allProducts);

const productIdToSearch = 1;
const foundProduct = productManager.getProductById(productIdToSearch);
console.log(`Product with ID ${productIdToSearch}:`, foundProduct);
