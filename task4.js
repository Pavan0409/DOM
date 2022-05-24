var item = document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor = 'Green';
for(let i=0;i<item.length;i++){
    item[i].style.fontWeight ='bold';
}
console.log(item);