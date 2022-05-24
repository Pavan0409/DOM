//using querySelector

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// console.log(secondItem);

// var firstitem =  document.querySelector('.list-group-item:nth-child(1)');
// firstitem.style.visibility ='hidden';
// console.log(firstitem);


//using querySelectorall

var li = document.querySelectorAll('.list-group-item');
li[2].style.Color='green';
console.log(li);

var odd= document.querySelectorAll('.li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    li[i].style.backgroundColor = 'green';
}
console.log(odd);
