function PizzaIndex() {
  this.pizzas = []
  this.id = 0
}
PizzaIndex.prototype.addPizza = function(pizza)  {
  this.pizzas.push(pizza);
};
PizzaIndex.prototype.pizzaId = function() {
  this.id += 1
  return this.id
}; 
function Pizza(size, toppings)  {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}
Pizza.prototype.cost  = function()  {
  if (this.size === 'Small 10"')  {
    this.price += 9.99;
  } else if (this.size === 'Medium 12"')  {
    this.price += 12.99;
  } else if (this.size === 'Large 14"')  {
    this.price += 15.99;
  } else if (this.size === 'X-Large 16"') {
    this.price += 18.99;
  }
  for (i = 0; i < this.toppings.length; i++)  {
    this.price += 1.50;
  }
  this.price *= 1.07;
  this.price = this.price.toFixed(2);
  return this.price;
};

$(document).ready(function()  {
  const displaySize = $("#display-size");
  const displayToppings = $("#display-toppings");
  const displayPrice = $("#display-price");
  const pizzaNumForm = $("form#number-of-Pizzas")
  const customizePizzaForm = $("#pizza")
  $("form#number-of-Pizzas").submit(function(e)  {
    e.preventDefault();
    pizzaNum = $("#pizza-num").val();
    pizzaNumForm.hide();
    customizePizzaForm.show();
    $("form#pizza").submit(function(e)  {
      e.preventDefault();
      let size = $("#size").val();
      let toppings = [];
      $("input:checked").each(function() {
        toppings.push($(this).val());
      })
      const newPizza = new Pizza(size, toppings);
      newPizza.cost();
      displaySize.text(newPizza.size + " Pizza");
      displayToppings.text("Toppings: " + newPizza.toppings);
      displayPrice.text("Price: $" + newPizza.price);
      $("#panucci").show();
      $("#ComeON").get(0).play();
    })
  })
})