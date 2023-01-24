// alert('welciment');
// console.dir(document);
// exmin the documnet objectes

// console.log(document.domain);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);

// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='hello world';

// console.log(document.froms);
// console.log(document.images);
// console.log(document.links);

// getelement
// console.log(document.getElementsById('header-title'));
// console.log(headerTitle);


// headertitle.style.borderBoottom='solid 53px #000';
// get elment by class name//
var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello2';
items[1].style.fontweight ='bold';
item[1].style.backgroundColor = 'yellow';
item[1].style.backgroundColor='yellow';
for (var i=0; i<item.length; i++){
    item[i].style.backgroundColor='block';
}
var titles = document.querySelectorAll('.titles');
titles[0].textContent ="heloo";
var odd= document.querySelectorAll('.li:nth-child(odd)');
var even= document.querySelectorAll('.li:nth-child(even)');

for (var i=0; i<titles.length; i++){
    odd[i].style.backgroundcolor ='#f4f4f4';
    even[i].style.backgroundcolor ='#cccccc';
}










