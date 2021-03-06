function PizzaIndex() {
  this.pizzas = {};
  this.id = 0;
}
PizzaIndex.prototype.addPizza = function(pizza)  {
  pizza.id = this.pizzaId();
  this.pizzas[pizza.id] = pizza;
};
PizzaIndex.prototype.pizzaId = function() {
  this.id += 1;
  return this.id;
};
PizzaIndex.prototype.totalCost = function() {
  let total = 0;
  let price = 0;
  for (let i = 1; i <= this.id; i++) {
    price = parseFloat(this.pizzas[i].price);
    total += price;
  }
  return total.toFixed(2);
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
  for (let i = 0; i < this.toppings.length; i++)  {
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
  const displayNumOfPizzas = $("#display-num-of-pizzas");
  const displayTotalCost = $("#display-total-cost");
  const displayAddress = $("#display-address");
  const addressForm = $("form#addressForm");
  const addressInput = $("#address");
  const customizePizzaForm1 = $("form#one-pizza");
  const pizzaSize = $("#size");
  const audio = $("#ComeON");
  const panucci = $("#panucci");
  let pizzaIndex = new PizzaIndex();
  $(addressForm).submit(function(e)  {
    e.preventDefault();
    const address = addressInput.val();
    addressForm.hide();
    customizePizzaForm1.show();
    $(customizePizzaForm1).submit(function(e)  {
      e.preventDefault();
      let size = pizzaSize.val();
      let toppings = [];
      $("input:checked").each(function() {
        toppings.push($(this).val());
      });
      let newPizza = new Pizza(size, toppings);
      newPizza.cost();
      pizzaIndex.addPizza(newPizza);
      pizzaIndex.totalCost();
      displaySize.text(newPizza.size + " Pizza");
      displayToppings.text("Toppings: " + newPizza.toppings);
      displayPrice.text("Price: $" + newPizza.price);
      displayNumOfPizzas.text("Number of Pizzas: " + pizzaIndex.id);
      displayTotalCost.text("Total: $" + pizzaIndex.totalCost());
      displayAddress.text("Deliver to: " + address);
      panucci.show();
      audio.get(0).play();
    });
  });
});
