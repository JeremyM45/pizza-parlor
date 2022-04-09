Describe: Pizza(size, toppings)

Test: "It should create a new pizza object with size and toppings.
code: const newPizza = new Pizza("medium", ["olives", "pepperoni"])
expected output: newPizza("medium", ["olives", "pepperoni"])

Describe Pizza.prototype.cost()

Test: "It should return a cost to the pizza based on its size"
code: const newPizza = new Pizza("medium", ["olives", "pepperoni"])
      newPizza.cost()
expected output: 12.99

Test: "It should apply the cost for a topping"
code: const newPizza = new Pizza("medium", ["olives"])
      newPizza.cost()
expected output: 14.49

Test: "It should apply the cost for multiple toppings"
code: const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])
      newPizza.cost()
expected output: 17.49

Test: "It should calculate a sales tax"
code: const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])
      newPizza.cost()
expected output: 18.71

Describe: PizzaIndex()

Test: "It should create an object that contains an index of Pizza objects"
code: let newIndex = new PizzaIndex()
expected output: newIndex([])

Describe: PizzaIndex.prototype.addPizza(pizza)

Test: "It should add a pizza object to a PizzaIndex object's pizzas array."
code: let newIndex = new PizzaIndex()
      const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])
      newIndex.addPizza(newPizza)
expected output: newIndex(0: newPizza (size: "medium", toppings: ["olives", "pepperoni", "green onions"]))

Test: "It should add to Pizza Index based off of pizza id"
code: let newIndex = new PizzaIndex()
      const newPizza = new Pizza("medium", ["olives", "pepperoni", "green onions"])
      newIndex.addPizza(newPizza)
expected output newIndex[1: newPizza (size: "medium",toppings: ["olives", "pepperoni", "green onions"],id: 1)

Describe PizzaIndex.prototype.pizzaId()

This: "it should assign an ID to a pizza object"
code: newIndex.pizzas[0].pizzaId()
expected output: newIndex[0: newPizza (size: "medium",toppings: ["olives", "pepperoni", "green onions"],id: 1) 