 const express = require ('express');  
 const router = express.Router();   
 const { v4: uuidv4 } = require('uuid');
const product = [
    {
        id:'1',
        name: 'Website',
        price: 1000,
        currency: 'RP'
    }
]
// create
router.get('/', (req,res) => {
    res.json({message: 'product list endpoin',data: product})
    })

router.post('/', (req,res) => {
    const bodyReq = req.body;
    const productId = uuidv4();
    const payload = {
        ...bodyReq,
        id: productId,
    }
    product.push(payload)
res.json({message: 'create product endpoin'})
})

//searche
router
.route('/:productID')
.get((req,res) => {
    const {productID} = req.params;
    const detailProduct = product.find((item) => item.id === productID)
    res.json({message: ` detail product endpoin for ID= ${productID}`,
    data: detailProduct,

})
})

//update
.put((req,res) => {
    const {productID} = req.params;
    const{name,price,currency} = req.body; 

    product = product.map ((item) => {
     if(item.id === productID) {
return{
    ...item,
    ...(name && {name}),
    ...(price && {price}),
    ...(currency && {currency}),
}
     }  
     return product 
    })
    res.json({message: ` update product endpoin for ID= ${productID}`,
    data : product
})

})


//delete
.delete((req,res) => {
    const {productID} = req.params;

    product = product.filter ((item) => item.id !== productID);
    res.json({message: ` delete product endpoin for ID= ${productID}`,
data:product
})
})



 module.exports = router;   