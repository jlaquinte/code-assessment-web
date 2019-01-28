import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <section className="products-section">
    <div>{children}</div>
  </section>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
