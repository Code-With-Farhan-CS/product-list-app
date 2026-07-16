let nextId = 7

export function getNextId() {
  return nextId++
}

export const initialProducts = [
  { id: 1, name: 'Wireless Mouse', price: 19.99, category: 'Electronics' },
  { id: 2, name: 'Mechanical Keyboard', price: 59.5, category: 'Electronics' },
  { id: 3, name: 'Ceramic Mug', price: 12.0, category: 'Home' },
  { id: 4, name: 'Yoga Mat', price: 24.99, category: 'Sports' },
  { id: 5, name: 'Notebook Set', price: 8.75, category: 'Office' },
  { id: 6, name: 'Desk Lamp', price: 32.4, category: 'Home' },
]
