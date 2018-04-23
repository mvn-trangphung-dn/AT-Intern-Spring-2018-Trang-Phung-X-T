var productList = [
{
  id: 1,
  url: './images/cream1.jpeg',
  title: 'Kem dau',
  price: 100,
  quantity: 0,
  total: 0
},
{
  id: 2,
  url: './images/cream2.jpeg',
  title: 'Kem xoai',
  price: 100,
  quantity: 0,
  total: 0
},
{
  id: 3,
  url: './images/cream3.jpeg',
  title: 'Kem cherry',
  price: 100,
  quantity: 0,
  total: 0
},
{
  id: 4,
  url: './images/cream4.jpeg',
  title: 'Kem tra xanh',
  price: 100,
  quantity: 0,
  total: 0
},
{
  id: 5,
  url: './images/cream5.jpeg',
  title: 'Kem dua',
  price: 100,
  quantity: 0,
  total: 0
},
{
  id: 6,
  url: './images/cream6.jpeg',
  title: 'Kem khoai mon',
  price: 100,
  quantity: 0,
  total: 0
},
{
  id: 7,
  url: './images/cream7.jpeg',
  title: 'Kem nho',
  price: 100,
  quantity: 0,
  total: 0
},
{
  id: 8,
  url: './images/cream8.jpeg',
  title: 'Kem kiwi' ,       
  price: 100,
  quantity: 0,
  total: 0
},
]

let count = 0;
let $noti = document.getElementById('noti');
var id = 0;
var i = 0;
var id = 1;
const len =productList.length;

function initProductList() {

  for (let i = 0; i < len; i++) {
    var Li = document.createElement("li");
    Li.setAttribute("id", "prod-item-" +(i+1));
    var divOfLi = document.createElement("div");
    divOfLi.setAttribute("class", "box-item");
    divOfLi.setAttribute("id", "box-item-" +(i+1));
    document.getElementById("list-prod").appendChild(Li);
    document.getElementById("prod-item-" +(i+1)).appendChild(divOfLi);
  }
  for (let i = 0; i < len; i++) {
    item_list =  document.getElementById("box-item-" +(i+1));
    var img = document.createElement("img");
    img.setAttribute("class", "img-item");
    img.setAttribute("src", productList[i].url);
    item_list.appendChild(img);

    var div_content = document.createElement("div");
    div_content.setAttribute("class", "content-prod");
    var element_title = document.createElement("p");
    element_title.setAttribute("class", "title-prod");
    var title = document.createTextNode(productList[i].title);

    var element_button = document.createElement("button");
    element_button.setAttribute("class", "btn-secondary js-btn-buy");
    element_button.setAttribute("id", "btn-" +(i+1));
    var text_button = document.createTextNode("Add to card");

    element_title.appendChild(title);
    item_list.appendChild(div_content);
    div_content.appendChild(element_title);

    element_button.appendChild(text_button);
    div_content.appendChild(element_button);
  }
}

function initEventListener() {
  for (let i = 0; i < len; i++) {
    document.getElementById("btn-"+(i+1)).addEventListener("click", function() {
      $noti.innerHTML = ++count;
      productList[i].quantity++;  
      initCellShoppingCard(i);  
      console.log(i);
    });
  }
}

document.getElementById("reset-card-btn").addEventListener("click", resetCard);
function resetCard(){
  count = 0 ;
  $noti.innerHTML = count;
  for(let i = 0; i < len; i++) {
    productList[i].quantity = 0;
  }
}

initProductList();
initEventListener();

