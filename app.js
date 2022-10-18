const rightpanel = document.getElementById('right');
const leftpanel = document.getElementById('left');
const nameinput = document.getElementById('name');



class customer {
 constructor(name, order){
    this.name = name;
    this.order= order;
 }
 createcustomer() {
    const newCustomer = document.createElement('div')
    newCustomer.textContent = `${this.name} \n ${this.order}`
    newCustomer.classList.add('customer');
    newCustomer.addEventListener('click', function(event){
        console.log(event.target.textContent)
    })
    leftpanel.appendChild(newCustomer);
 }
 updatecustomer(){
    document.getElementsByClassName('newCustomer')[0].textContent = customer1.name
 }
 
};
class items{
    constructor(name, price){
        this.name = name;
        this.price= price;
     }
createitem() {
    const newItem = document.createElement('div')
    newItem.textContent = `${this.name} \n ${this.price}`
    newItem.classList.add('items');
    newItem.addEventListener('click', function(event){
        console.log(event.target.textContent)
    })
    rightpanel.appendChild(newItem);
}

};
const customer1 = new customer('dave', 'tea');
const item1 = new items('item1', 1.20);
const coffee = new items('coffee', 4.20);
// // console.log(nameinput)
customer1.createcustomer();
item1.createitem()
coffee.createitem()
nameinput.addEventListener('change', function () {
    console.log(customer1)
    customer1.name = nameinput.value
    console.log(customer1)
    document.getElementsByClassName('customer')[0].textContent = `${nameinput.value} \n ${customer1.order}`
   })