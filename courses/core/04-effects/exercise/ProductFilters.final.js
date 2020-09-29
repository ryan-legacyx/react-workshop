import React, { useState, useEffect } from 'react'
import ProductFilterList from 'YesterTech/ProductFilterList'
import { getCategories } from './utils'

function App() {
  const [categories, setCategories] = useState(null)
  return <ProductFilters categories={categories} setCategories={setCategories} />
}

function ProductFilters({ categories, setCategories }) {
  useEffect(() => {
    let isCurrent = true
    getCategories().then(categories => {
      if (!isCurrent) return
      setCategories(categories)
    })
    return () => (isCurrent = false)
  }, [setCategories])

  if (!categories) return <div>Loading Filters...</div>

  return (
    <div className="spacing">
      <ProductFilterList list={categories} urlKey="categories" label="Categories" />
    </div>
  )
}

export default ProductFilters
