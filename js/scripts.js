function Pizza(size, toppings)  {
  this.size = size
  this.toppings = toppings
  this.price = 0
}
Pizza.prototype.cost  = function()  {
  if (this.size === "small")  {
    this.price += 9.99
  } else if (this.size === "medium")  {
    this.price += 12.99
  } else if (this.size === "large")  {
    this.price += 15.99
  } else if (this.size === "X-large") {
    this.price += 18.99
  }
  for (i = 0; i < this.toppings.length; i++)  {
    this.price += 1.50
  }
  this.price *= 1.07
  this.price = this.price.toFixed(2)
  return this.price
};

$(document).ready(function()  {
  $("form#pizza").submit(function(e)  {
    e.preventDefault()
    let size = $("#size").val();
    let toppings = []
    $("input:checked").each(function() {
      toppings.push($(this).val());
    })
    const newPizza = new Pizza(size, toppings)
    newPizza.cost()
    $("#display").text(newPizza.size + " Pizza with " + newPizza.toppings + " price: $" + newPizza.price)
  })
})