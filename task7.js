var itemList = document.querySelector('#items');

//ParentElement//
// console.log(itemList.parentElement);
// itemList.parentElement.style.color='orange';

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

//LastChild
console.log(itemList.lastChild);

//firstElementChild
console.log(itemList.firstElementChild);

//firstchild
console.log(itemList.firstChild);
itemList.firstChild.textContent = "Hello Word";

//nextSibling
console.log(itemList.nextSibling);

//nextElementsibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="red";

//creatElement
var newDiv = document.createElement("div");
newDiv.className = "Cool";//add className
newDiv.setAttribute('title','hello');//Add attribut
var newDivText = document.createTextNode('Hello World');//creatTextNode
newDiv.appendChild(newDivText);//Add text to newDiv

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
console.log(newDiv);




//






