function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search products by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search products"
    />
  )
}

export default SearchBar
