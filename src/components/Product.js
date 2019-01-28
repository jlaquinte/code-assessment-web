import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, inventory, title, children }) => {

	const imgPath = require(`../assets/images/${title.toLowerCase()}.png`)

	return(
		<div className="product-detail">
			<img className="product-img" src={imgPath} alt={title}/>
			<div className="product-detail-contents">
				<h3 className="product-title">{title}</h3>
				<p className="inventory-amount">{inventory ? ` ${inventory} Remaining` : 'Out of Stock'}</p>
				<p className="product-price">&#36;{price}</p>
				{children}
			</div>
		</div>
	)
}


Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  inCart: PropTypes.bool,
}

export default Product
