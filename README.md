
  

# _Pizza Parlor_

  

#### By _**Jeremy Martin**_

  

#### _A webpage that where you can make a custom pizza with size and toppings options_

  

## Technologies Used

  

* HTML

* CSS

* Bootstrap

* JavaScript

* JQuery

  

## Description

This webpage has an input field for your address. Once submitting the pizza customization field comes up where you can customize your pizza based on size and toppings. Pizza price is calculated based on size and the number of toppings with a 7% sales tax. Pizza info is displayed on the right once submitting your custom pizza

  

## Setup/Installation Requirements

  

* Clone repo from GitHub using this link (https://github.com/JeremyM45/pizza-parlor)

  

* Navigate to the pizza-parlor folder

(Users/Username/Desktop/pizza-parlor)

  

* Open index.html file in your browser

(Users/Username/Desktop/pizza-parlor/index.html)

  

* Enter your address in the input field.

  

* Select desired size from the dropdown menu and toppings from the checkboxes

  

* Click the "Pizza Goin' Out" button to submit and the information will populate on the right

  

## Known Bugs

*  _No known bugs_



## License

[MIT](https://opensource.org/licenses/MIT)



Copyright (c) _04/08/2022_  _Jeremy Martin_



## Specs/Tests

``````````````````````````````````````````````````````````````````  
Describe: Pizza(size, toppings)


Test: "It should create a new pizza object with size and toppings.

code: const newPizza = new Pizza("medium", ["olives", "pepperoni"])

expected output: newPizza("medium", ["olives", "pepperoni"])

-------------------------------------------------------- 
``````````````````````````````````````````````````````````````````  
``````````````````````````````````````````````````````````````````  
Describe Pizza.prototype.cost()


Test: "It should return a cost to the pizza based on its size"

code: const newPizza = new Pizza("medium", ["olives", "pepperoni"])

      newPizza.cost()

expected output: 12.99

-------------------------------------------------------- 

Test: "It should apply the cost for a topping"

code: const newPizza = new Pizza("medium", ["olives"])

      newPizza.cost()

expected output: 14.49

--------------------------------------------------------   

Test: "It should apply the cost for multiple toppings"

code: const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])

      newPizza.cost()

expected output: 17.49

--------------------------------------------------------
Test: "It should calculate a sales tax"

code: const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])

      newPizza.cost()

expected output: 18.71

-------------------------------------------------------- 

  ``````````````````````````````````````````````````````````````````  
   `````````````````````````````````````````````````````````````````` 

Describe: PizzaIndex()
  

Test: "It should create an object that contains an index of Pizza objects"

code: let newIndex = new PizzaIndex()

expected output: newIndex([])

  --------------------------------------------------------
 `````````````````````````````````````````````````````````````````` 
  `````````````````````````````````````````````````````````````````` 
Describe: PizzaIndex.prototype.addPizza(pizza)


Test: "It should add a pizza object to a PizzaIndex object's pizzas array."

code: let newIndex = new PizzaIndex()

      const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])

      newIndex.addPizza(newPizza)

expected output: newIndex(0: newPizza (size: "medium", toppings: ["olives", "pepperoni", "green onions"]))

-------------------------------------------------------- 

Test: "It should add to Pizza Index based off of pizza id"

code: let newIndex = new PizzaIndex()

      const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])

      newIndex.addPizza(newPizza)

expected output newIndex[1: newPizza (size: "medium",toppings: ["olives", "pepperoni", "green onions"],id: 1)

-------------------------------------------------------- 
  ``````````````````````````````````````````````````````````````````  
  
 `````````````````````````````````````````````````````````````````` 
Describe PizzaIndex.prototype.pizzaId()


This: "it should assign an ID to a pizza object"

code: newIndex.pizzas[0].pizzaId()

expected output: newIndex[0: newPizza (size: "medium",toppings: ["olives", "pepperoni", "green onions"],id: 1)

-------------------------------------------------------- 
 `````````````````````````````````````````````````````````````````` 