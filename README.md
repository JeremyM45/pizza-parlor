Describe: Pizza()

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