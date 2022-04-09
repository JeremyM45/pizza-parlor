function Pizza(size, toppings)  {
  this.size = size
  this.toppings = toppings
  this.price = 0
}
Pizza.prototype.cost  = function()  {
  if (this.size === "Small")  {
    this.price += 9.99
  } else if (this.size === "Medium")  {
    this.price += 12.99
  } else if (this.size === "Large")  {
    this.price += 15.99
  } else if (this.size === "X-Large") {
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
  let displaySize = $("#display-size")
  let displayToppings = $("#display-toppings")
  let displayPrice = $("#display-price")
  $("form#pizza").submit(function(e)  {
    e.preventDefault()
    let size = $("#size").val();
    let toppings = []
    $("input:checked").each(function() {
      toppings.push($(this).val());
    })
    const newPizza = new Pizza(size, toppings)
    newPizza.cost()
    displaySize.text(newPizza.size + " Pizza")
    displayToppings.text("Toppings: " + newPizza.toppings)
    displayPrice.text("Price: $" + newPizza.price)
    $("#ComeON").get(0).play();
  })
})