//Examine Document Object//

console.dir(document);
console.log(document.domain);
console.log(document.url);
console.log(document.doctype);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = 'Namaste';
console.log(document.form);
console.log(document.link);
console.log(document.image);

//GetElementById

 console.log(document.getElementById('header-title'));
 var headerTitle = document.getElementById('header-title');
 console.log(headerTitle);
 headerTitle.textContent = 'hello';
 headerTitle.innertext = 'Good bye';
 console.log(headerTitle.innertext);
 headerTitle.innerhtml= '<h3> Hello </h3>';
 headerTitle.style.borderBottom='solid 3px #000';

//GETELEMENTBYCLASSNAME//

var additem= document.getElementsByClassName("title");
console.log(additem[0].style.fontWeight="bold");
console.log(additem[0].style.color="green"); 
