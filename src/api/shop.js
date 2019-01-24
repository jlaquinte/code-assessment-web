/**
 * Mocking client-server processing
 */
import axios from 'axios'

const TIMEOUT = 100
const requestURL = 'http://tech.work.co/shopping-cart/products.json'

/***
Use axios for HTTP Request from API
***/

const getProductsFromEndpoint = (cb) =>{
	axios.get(requestURL)
	.then(response => {
		console.log(response.data)
		cb(response.data)
	})
	.catch(error => {console.log(`*** API ERROR *** ${error}`)})
}


export default {
  getProducts: getProductsFromEndpoint,
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}

