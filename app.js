const rightpanel = document.getElementById('right');
const leftpanel = document.getElementById('left');
const nameinput = document.getElementById('name');



class customer {
 constructor(name, order){
    this.name = name;
    this.order= order;
 }
 getcustomer() {
    leftpanel.innerHTML = leftpanel.innerHTML + `<p>${this.name}</p>`
    leftpanel.innerHTML = leftpanel.innerHTML + `<p>${this.order}</p>`
    console.log(`${this.name} + ${this.order}` )
 }
};
class items{
    constructor(name, price){
        this.name = name;
        this.price= price;
     }
createitem() {
    const newItem = document.createElement('div')
    newItem.textContent = this.name
    newItem.classList.add('items');
    newItem.addEventListener('click', function(event){
        console.log(event.target.textContent)
    })
    rightpanel.appendChild(newItem);
}

};
// nameinput.addEventListener('change', function () {
//  console.log('change')
//  leftpanel.innerHTML = leftpanel.innerHTML + `<p>${nameinput.value}</p>`;
// })
const dave = new customer('dave', 'tea');
const tea = new items('tea', 1.20);
const coffee = new items('coffee', 4.20);
// // console.log(nameinput)
// dave.getcustomer();
tea.createitem()
coffee.createitem()