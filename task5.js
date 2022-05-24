
//By using GETELEMENTSBYCLASSNAME

// var item = document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor = 'Green';
// for(let i=0;i<item.length;i++){
//     item[i].style.fontWeight ='bold';
// }
// console.log(item);



//By using GETELEMENTSBYTAGNAME

var li = document.getElementsByTagName('li');
li[0].style.backgroundColor = 'orange';
li[1].style.backgroundColor = 'milk';
li[2].style.backgroundColor = 'Green';

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight ='bold';
}
console.log(li);