var cart = [];

function AddtoCart(i)
{
  console.log("Your cart has " + cart.push(products[i]) + " items");

  for (i = 0; i < cart.length; ++i)
  {
    console.log(cart[i]);
  }

  $(document).ready(function(){
          $("#cartcount").text(cart.length);
      });
  return false;
}

function RemovefromCart(x)
{
  for (var i = 0; i < cart.length; i++)
  {
    if (cart[i].name === products[x].name)
    {
      console.log(cart[i].name + " has been removed from the cart");
      cart.splice(i, 1);
      console.log("Your cart has " + cart.length + " items");
      break;
    }
  }

  for (i = 0; i < cart.length; ++i)
  {
    console.log(cart[i]);
  }

  $(document).ready(function(){
        if(cart.length != 0){
          $("#cartcount").text(cart.length);
        }
        else {
            $("#cartcount").text("");
        }
  });

  return false;
}
