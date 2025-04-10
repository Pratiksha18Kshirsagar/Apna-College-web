const mongoose = require("mongoose");
const schema = mongoose.Schema;

//mongoose setup
main().then(() => console.log("connection successful")).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


//model creation for orders
const orderSchema = new schema({
    item: String,
    price: Number,
});


//model creation for customers
const customerSchema = new schema({
    name: String,
    orders: [{
        type: schema.Types.ObjectId,
        ref: "Order"
    }]

})

//post delete middleware
customerSchema.post("findOneAndDelete" , async(customer)=>{
    if(customer.orders.length){
      let result=  await Order.deleteMany({_id:{$in: customer.orders}});
      console.log(result);
      console.log("deleted")
    }
})

//collection
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer" , customerSchema);


//function to add customer details in DB!
const addCustomer = async()=>{
    let cus1 = new Customer({name:"Pratiksha"});
    let order1 = await Order.findOne({item:"KFC chicken"});
    let order2 = await Order.findOne({item:"Milkshake"});

    cus1.orders.push(order1);
    cus1.orders.push(order2);

    let res = await cus1.save();
    console.log(res);

}

// 
// addCustomer();

//populate 
const findcustomer = async()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result);
}
// findcustomer();

//function to add order data in DB!!
const addorder = async () => {
    let res = await Order.insertMany([
        { item: "Pizza", price: 250 },
        { item: "KFC chicken", price: 450 },
        { item: "Milkshake", price: 200 },
        { item: "cheese cake", price: 150 },]
    )
    console.log(res);
}

// addorder();


//delete function
const Delete = async()=>{
let res = await Customer.findByIdAndDelete('67f74d03348960c9ed182ae2');
console.log(res);
}
Delete();