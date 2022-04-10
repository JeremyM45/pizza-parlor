function PizzaIndex() {
  this.pizzas = {}
  this.id = 0
}
PizzaIndex.prototype.addPizza = function(pizza)  {
  pizza.id = this.pizzaId();
  this.pizzas[pizza.id] = pizza;
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
  console.log(this.size)
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
  const displayAddress = $("#display-address");
  const customizePizzaForm1 = $("form#one-pizza");
  const addressForm = $("form#addressForm")
  let pizzaIndex = new PizzaIndex();
  $(addressForm).submit(function(e)  {
    e.preventDefault();
    const address = $("#address").val();
    console.log(address)
    addressForm.hide();
    customizePizzaForm1.show();
    $(customizePizzaForm1).submit(function(e)  {
      e.preventDefault();
      let size = $("#size").val();
      let toppings = [];
      $("input:checked").each(function() {
        toppings.push($(this).val());
      })
      let newPizza = new Pizza(size, toppings);
      newPizza.cost();
      pizzaIndex.addPizza(newPizza)
      displaySize.text(newPizza.size + " Pizza");
      displayToppings.text("Toppings: " + newPizza.toppings);
      displayPrice.text("Price: $" + newPizza.price);
      displayAddress.text("Deliver to: " + address)
      $("#panucci").show();
      $("#ComeON").get(0).play();
    })
  })
})
