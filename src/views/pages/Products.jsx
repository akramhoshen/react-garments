function Product(props){
    let products = props.data;
    const ProductItems=products.map((product) =>
    <div key={product.id} className='product-item'>
      <div className='p-head'>
        <img src={'/img/'+product.photo} alt={product.name}/>
        {/* <img src={product.photo} alt={product.name}/> */}
      </div>
      <div className='p-body'>
        <p className='catgory'>{product.category}</p>
        <h2 className='title'>{product.name}</h2>
        <p className='price'>{product.price}</p>
      </div>
    </div>
    );
  
    return(
      <div className='product-wraper'>
        {ProductItems}
      </div>
    );
  }

  const ProductRows=()=>{
    let products=[
        {"id":1,"name":"Assorted Coffee","category": "Beverages","price":40,"photo":"coffee.jpg"},
        {"id":2,"name":"Handpicked Red Chillies","category": "Spices","price":15,"photo":"red-chillies.jpg"},
        {"id":3,"name":"Natural Extracted Edible Oil","category": "Cooking Oil","price":150,"photo":"edible-oil.jpg"},
        {"id":4,"name":"Hand Sanitizer","category": "Groceries","price":15,"photo":"sanitizer.jpg"}
        // {"id":1,"name":"Assorted Coffee","category": "Beverages","price":40,"photo":"https://picsum.photos/200"},
        // {"id":2,"name":"Handpicked Red Chillies","category": "Spices","price":15,"photo":"https://picsum.photos/200"},
        // {"id":3,"name":"Natural Extracted Edible Oil","category": "Cooking Oil","price":150,"photo":"https://picsum.photos/200"},
        // {"id":4,"name":"Hand Sanitizer","category": "Groceries","price":15,"photo":"https://picsum.photos/200"}
      ];

      return(
            <div className='row'>
                <div className="col-12">
                    <Product data={products}/>
                </div>
            </div>
      );
  };

  export default ProductRows;