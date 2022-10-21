import inquirer from "inquirer";

let menu = {
    coffee: 3,
    tea: 2.5,
    brownie: 4,
    water: 1
}

class coffeeShop {
    constructor(name) {
        this.name = name
        this.order = []
        this.total = 0
    }
    calculateTotal(){
        this.total = 0
        for (i=0; i < this.order.length; i++) {
            this.total += menu[this.order[i]]
        }
        return this.total
    }

    set updateOrder(newItem) {
        this.order.push(newItem)
    }
}

const response = await inquirer.prompt([{
    type: 'input',
    name: 'getName',
    message: "What is your name?"
}])

let customer = new coffeeShop(response.getName)

const checkOut = () => {
    console.log(
    You ordered:
    customer.order.map((item) => ${item} -£${menu[item]}`).join(',')
    Total:

    `)
}

console.log(customer)

console.log(Object.keys(menu))

const askForOrder = async() => {
    const order = await inquirer.prompt([{
        type: 'list',
        name: 'getOrder',
        message: "What would you like?",
        choices: [...Object.keys(menu), "- Go to checkout -"]
    }])

    if(order.getOrder === "- Go to checkout -"){
    checkOut()
    return;
    } 
    customer.updateOrder = order.getOrder
    askForOrder()
}
askForOrder()