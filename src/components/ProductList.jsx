function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="empty-state">No products found.</p>
  }

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-card">
          <div className="product-card-header">
            <h3>{product.name}</h3>
            <span className="product-price">${product.price.toFixed(2)}</span>
          </div>
          <span className="product-category">{product.category}</span>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
