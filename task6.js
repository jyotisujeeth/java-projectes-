var titles = document.querySelectorAll ('.title');
console.log (titles);
titles[0].textContent = 'hello world';

var odd = document.querySelectorAll ('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundcolor ="green"; 
    even[i].style.backgroundcolor ="red";   
}
 
