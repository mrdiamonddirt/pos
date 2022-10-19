const rightpanel = document.getElementById('right');
const leftpanel = document.getElementById('left');
const nameinput = document.getElementById('name');



class customer {
 constructor(name, total){
    this.name = name;
    this.total= total;
 }
 createcustomer() {
    const newCustomer = document.createElement('div')
    newCustomer.textContent = this.name
    newCustomer.classList.add('customer');
    const customerTotal = document.createElement('div')
    customerTotal.textContent = this.total
    customerTotal.classList.add('customer');
    customerTotal.addEventListener('click', function(event){
        console.log(event.target.textContent)
    })
    leftpanel.appendChild(newCustomer);
    leftpanel.appendChild(customerTotal);
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
    newItem.innerHTML = `<p class='itemname'>${this.name}</p> <p class='itemprice'>${this.price}</p>`
    newItem.classList.add('items');
    newItem.addEventListener('click', function(event){
        const addItem = document.createElement('div')
        addItem.innerHTML = event.target.innerHTML
        addItem.classList.add('items');
        leftpanel.appendChild(addItem);
        console.log(event.target.innerHTML)
        console.log(customer1.total)
        customer1.total + newItem.getElementsByClassName('itemprice')[0].innerHTML
        console.log(customer1.total)
        document.getElementsByClassName('customerTotal')[0].textContent = document.getElementsByClassName('customerTotal')[0].textContent
    })
    rightpanel.appendChild(newItem);
}

};
const customer1 = new customer('dave', 0);
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
    document.getElementsByClassName('customer')[0].textContent = `${nameinput.value} \n ${customer1.total}`
   })