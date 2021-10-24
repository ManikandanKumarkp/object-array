// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let sar=[{fname:'mani',age:25, gender:'male'},{fname:'savi',age:25, gender:'male'}]

for(let k in sar){
console.log(k,sar[k].age)
}
