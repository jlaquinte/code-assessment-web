# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To start a development server:

```
npm start
```

## Tasks

Please publish your work to a fork of this repo. You're welcome (but not required) to add any libraries you think would be helpful.

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your fork's git history.

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

## Thoughts on the project

This was definitely an interesting challenge. I wanted to lean on react/redux as much as possible without the help of many outside libraries for this project. The only dependancies I've added to this project are **axios** and **node-sass**. I decided to approach this project by implementing the API request first, then working on the redux funtionality, then styling. I did my best to adhere to ES6+ standards when manipulating the data in objects and functions, while making best use of array functions like map, filter, and reduce.

### Challenges

The biggest challenge for me was building a more complex application on top of something that was already built. At times I wanted to tear down what was already built and start certain parts from scratch but I realized that wouldn't be best in the interest of time. If I were to appraoch this application again with unlimited time I would probably change the current 

Since I didn't want to waste time I put all the css into one file. If I were to do this project from scratch, I would take more time to plan out the component structure and have the css mimic the structure of the javascript components.

### Improvements

The mobile css on the cart page needs some work. I was running out of time and didn't have enough time to tweak it as much as needed. Cart.js could be cleaned up considerably and I would have liked to taken a shot at rebuilding the whole CartConatiner, Cart, and CartItem file structure.