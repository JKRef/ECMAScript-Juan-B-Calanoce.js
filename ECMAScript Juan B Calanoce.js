class ProductManager {
    productsList = []
  
    constructor() {
      this.idProduct = 0
    }
  
    getProducts() {
      return this.productsList
    }
    getProductById(id){
      let existsProduct= false
      let j=0
      if(this.productsList.length >= id){
        while(j < this.productsList.length){
          if(this.productsList[j].idProduct == id){
            existsProduct = true
            break;
          }
          j++
        }
      }
      if(existsProduct){
        console.log(`El producto con el id: ${id} se encontro y tiene un stock de ${this.productsList[j].stock}`)
      }else{
        console.log(`No se encontro el producto con el id: ${id}`)
      }
    }
  
    addProduct(title, description, price, thumbnail, code, stock ) {

      this.idProduct++
      let idProduct = this.idProduct
      const product = {
        idProduct,      
        title,
        description,
        price,
        thumbnail,
        code,
        stock   
      }
      
      if(this.productsList.length > 0){
        let existCode=false
        for(let i=0; i<this.productsList.length; ++i){
          if(product.code == this.productsList[i].code){
            existCode = true
          }else{
            existCode = false
          }
          //existCode = this.productsList.find(productCode => product.numeroCode === this.productsList[i].numeroCode)
          if (!existCode) { 
            this.productsList.push(product)
            return `El producto ${title} se agrego con el codigo: ${product.code}`
          } else { 
            return `El producto con el codigo ${code} ya esta agegado`
          }
        }
      }else{
        this.productsList.push(product)
        return `El producto ${title} se agrego con el codigo: ${product.code}`
      }
    }
  
  }
  
  const manejadorDeProductos = new ProductManager()

  console.log(manejadorDeProductos.addProduct('mouse', 'mouse', 30, 'image.png','abc123',22))
  console.log(manejadorDeProductos.addProduct('teclados', 'teclados',30, 'image.png', 'abc124',22 ))
  console.log(manejadorDeProductos.addProduct('parlantes', 'parlantes', 50,'image.png', 'abc125',22 ))
  console.log(manejadorDeProductos.addProduct('parlantes', 'parlantes', 50,'image.png', 'abc123',22 ))
  
  //Listado de productos
  console.log(manejadorDeProductos.getProducts());

  //Existe el producto
  manejadorDeProductos.getProductById(1)
  //Un producto que no existe
  manejadorDeProductos.getProductById(5)