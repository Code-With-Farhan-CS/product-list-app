import { useState } from 'react'

const emptyForm = { name: '', price: '', category: '' }

function ProductForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const name = form.name.trim()
    const price = Number(form.price)

    if (!name) {
      setError('Product name is required.')
      return
    }
    if (!form.price || Number.isNaN(price) || price <= 0) {
      setError('Price must be a positive number.')
      return
    }

    onAdd({ name, price, category: form.category.trim() || 'Uncategorized' })
    setForm(emptyForm)
    setError('')
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          aria-label="Product name"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={form.price}
          onChange={(e) => handleChange('price', e.target.value)}
          aria-label="Product price"
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => handleChange('category', e.target.value)}
          aria-label="Product category"
        />
        <button type="submit">Add Product</button>
      </div>
      {error && <p className="form-error">{error}</p>}
    </form>
  )
}

export default ProductForm
