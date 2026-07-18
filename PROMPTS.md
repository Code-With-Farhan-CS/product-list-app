# Prompts used with Claude Code

## Prompt 1 — Initial product list feature

"Build a product list feature in this React + Vite app. Requirements: A ProductList component that displays an array of products (each with id, name, price, category) as cards showing name and price. A search input above the list that filters products by name as the user types (case-insensitive). An Add Product form (name, price, category fields) that adds a new product to the top of the list on submit, with basic validation (name required, price must be a positive number). Use React state (useState) to manage the product array and search term, no external state library. Store initial sample data (5-6 products) as a local array in the component or a separate data file. Keep styling simple with plain CSS (App.css), no CSS framework."

How AI helped: Generated all components (ProductList, SearchBar, ProductForm), sample data, state management logic, and CSS styling in one pass. Verified its own work using headless browser testing before reporting completion, and confirmed a clean production build.

## Manual correction

Found by manually testing the form: after triggering a validation error
(e.g. empty name or invalid price), the error message stayed on screen
even after the user started fixing the input — it only cleared on a
successful resubmit. This was because handleChange updated form state
but never touched the error state.

Fix: added `if (error) setError('')` inside handleChange, so the error
clears as soon as the user edits any field. Verified in the browser:
triggered the error, typed a letter, confirmed the message disappeared
immediately.

