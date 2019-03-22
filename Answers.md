# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

Question 1.1
* ReactDOM.render renders the Cart component in the root div, which is in our index.html accessible by id "root".

Question 1.2
* Semantic UI makes it really easy to make and integrate uniform UI components into your React project. By understanding what kinds of classes to incorporate, this allows us to save a lot of time in creating simple but meaningful components. However, the class names may be difficult to understand, and when we want to add our own custom classes, this may decrease the readability of our code and may even also interfere with the functionality of the Semantic UI classes.

Question 1.3
* We need to wrap addToCart in another function because methods have their own environments, and we want to bind the method to the current prop, or "this," that we're looking at. In this case, addToCart is wrapped in an anonymous arrow function and specifically applies to the current component we're working with.

Question 1.4
* (1.4a) I used a map over the list of products in ProductData, which means the Product component is rendered once for each item in the list. This allows us to abstract from the contents of the list rather than explicitly creating one new Product component per item in index.js.

* (1.4b) By pulling the data from an object, we know where the contents of all the data are, and this makes it much easier for us to incorporate more data. For example, rather than creating an entirely new Product component manually each time we add an item, we just append a new item to a list in ProductData.

