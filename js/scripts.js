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
};