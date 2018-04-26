var $noti = document.getElementById('noti');
var cart = {};
var products = []
var count = 0;
var jsonText;
const len =productList.length;

function initProductList() {
  for (let i = 0; i < len; i++) {
    let id = i + 1;
    var Li = document.createElement("li");
    var divOfLi = document.createElement("div");
    Li.setAttribute("id", "prod-item-" +id);
    divOfLi.setAttribute("class", "box-item");
    divOfLi.setAttribute("id", "box-item-" +id);
    document.getElementById("list-prod").appendChild(Li);
    document.getElementById("prod-item-" +id).appendChild(divOfLi);
  }
  for (let i = 0; i < len; i++) {
    let id = i + 1;
    item_list =  document.getElementById("box-item-" +id);
    var img = document.createElement("img");
    var div_content = document.createElement("div");
    var element_title = document.createElement("p");
    var element_button = document.createElement("button");
       
    img.setAttribute("class", "img-item");
    img.setAttribute("src", productList[i].url);
    item_list.appendChild(img);

    div_content.setAttribute("class", "content-prod");

    element_title.setAttribute("class", "title-prod");
    var title = document.createTextNode(productList[i].title);
    element_title.appendChild(title);
    div_content.appendChild(element_title);

    element_button.setAttribute("class", "js-btn-buy");
    element_button.setAttribute("id",+id);
    var text_button = document.createTextNode("Add to cart");
    element_button.appendChild(text_button);
    div_content.appendChild(element_button);

    item_list.appendChild(div_content);

  }
  let productLength = products.length;
  for (let i = 0; i < productLength; i++) {
    let id = products[i].id
    document.getElementById(id).disabled = true;
  }
}

function initAddListener() {
  for (let i = 0; i < len; i++) {
    let id = i + 1;
    document.getElementById(id).addEventListener("click", function() {
    document.getElementById(id).disabled = true;
    cart = productList[i];
    products.push(cart);
    $noti.innerHTML = products.length;
    jsonText = JSON.stringify(products, cart, "\t");
    localStorage.setItem('productList',jsonText);
    });
  }
}

document.getElementById("reset-cart-btn").addEventListener("click", resetCart);

function resetCart() {
  count = 0 ;
  $noti.innerHTML = count;
  products = [];
  jsonText = JSON.stringify(products, cart, "\t");
  localStorage.setItem('productList',jsonText);
  for (let i = 0; i < len; i++) {
    document.getElementById(i+1).disabled = false;
  }
}

function initCart() {
  if (localStorage.getItem('productList') !== null) {
    products = JSON.parse(localStorage.getItem('productList'));
  } else {
    products = [];
  }
  $noti.innerHTML = products.length;
}

function moveToCardPage() {
  location.href = "file:///home/trangphung/Documents/FE_Basic/JS_Card/cart.html";
}

initCart();
initProductList();
initAddListener();

