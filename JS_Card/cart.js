var $noti_card = document.getElementById('noti-card');
var cart = {};
var products = [];
var jsonText;
var count = JSON.parse(localStorage.getItem('productList')).length;
var i = 0;
var len;

function initCart() {
  document.getElementById("reset-cart-btn-cart-page").disabled = true;
  if (localStorage.getItem('productList') !== null) {
    products = JSON.parse(localStorage.getItem('productList'));
  } else {
    products = [];
  }
  $noti_card.innerHTML = parseInt(products.length);
  len = products.length;
}

function initShoppingCart() {
  for (let i = 0 ; i < len; i++) {
  var tr_tag = document.createElement("tr");
  var id_prod = document.createElement("td");
  var detail_prod = document.createElement("td");
  var img = document.createElement("img");
  var div_content = document.createElement("div");
  var element_title = document.createElement("p");
  var element_price = document.createElement("span");
  var quantity_prod = document.createElement("td");
  var del_prod = document.createElement("td");
  var btn_del = document.createElement("button");

  tr_tag.setAttribute("id", "row" +products[i].id);
  id_prod.setAttribute("id", "id-prod");
  detail_prod.setAttribute("id", "detail-prod");
  detail_prod.setAttribute("class", "detail-prod");
  img.setAttribute("class", "img-prod");
  img.setAttribute("src", products[i].url);
  div_content.setAttribute("class", "short-info-prod");
  element_title.setAttribute("class", "title-prod");
  element_price.setAttribute("class", "price-prod");
  quantity_prod.setAttribute("id", "quantity-prod");
  del_prod.setAttribute("id", "btn-del");
  btn_del.setAttribute("class", "btn-del js-btn-delete");
  btn_del.setAttribute("id", (products[i].id));
  btn_del.setAttribute('onclick','deleteCart('+(products[i].id)+')');

  id_prod.innerHTML = products[i].id;

  var title = document.createTextNode(products[i].title);
  var price = document.createTextNode(products[i].price);
  element_title.appendChild(title);
  element_price.appendChild(price);
  div_content.appendChild(element_title);
  div_content.appendChild(element_price);
  detail_prod.appendChild(img);
  detail_prod.appendChild(div_content);

  var quantity = products[i].quantity;
  quantity_prod.innerHTML = quantity;

  btn_del.innerHTML = "delete"
  del_prod.appendChild(btn_del);

  tr_tag.appendChild(id_prod);
  document.getElementById("tbody-table").appendChild(tr_tag);
  tr_tag.appendChild(detail_prod);
  document.getElementById("tbody-table").appendChild(tr_tag);
  tr_tag.appendChild(quantity_prod);
  document.getElementById("tbody-table").appendChild(tr_tag);
  tr_tag.appendChild(del_prod);
  document.getElementById("tbody-table").appendChild(tr_tag);
  }
}

function deleteCart(id) {
  if (confirm ('you want to delete') ) {
    let ul = document.getElementById("tbody-table");
    for (let i = 0; i < len; i++) {
      if (products[i].id === id) {
      let msg = 'success';
      let child = document.getElementById("row"+id);
      ul.removeChild(child)
      products.splice(i, 1);
      $noti_card.innerHTML = products.length;
      jsonText = JSON.stringify(products, "\t");
      localStorage.setItem('productList',jsonText);
      }
    }
  alert(msg);
  }
}

initCart();
initShoppingCart();

