import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import { initialProducts, getNextId } from './data/products'
import './App.css'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState('')

  function handleAddProduct(product) {
    setProducts((prev) => [{ id: getNextId(), ...product }, ...prev])
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="app">
      <h1>Product List</h1>

      <ProductForm onAdd={handleAddProduct} />

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
