const express = require('express')
const router = express.Router()
const ClothesSchema = require('../models/Clothes.js')
const CustomerSchema = require('../models/Customer.js')
const CreditSchema = require('../models/Credit.js')

router.get('/api/v1/get', (req, res) => {
    ClothesSchema.find({
    })
    //'then' happens if find is succesful
    .then(items => {
      console.log("succesfully got entire db!")
      console.log(items)
      res.json(items)
    })
    //if theres an error, 'catch' happens instead
    .catch(err => {
      console.error(err)
    })
})

//Read/get by id
router.get('/api/v1/filterGet', (req, res) => {
  console.log(req.query)
    ClothesSchema.find(req.query)
    .then(clothing => {
      console.log("succesfully got one!")
      console.log(clothing)
      res.json(clothing)
    })
    .catch(err => {
      console.error(err)
    })
})


//we will be using the '/add' to do a POST request
router.post('/api/v1/add', (req, res) => {
    ClothesSchema.create(req.body)
    .then(items => {
      console.log("Model made!")
      console.log(items)
      res.send(items)
    })
    .catch(err => {
      console.error(err)
    })
  })

//TODO: change '/' below to be by id
router.put('/api/v1/clothes/:id', (req, res) => {
  ClothesSchema.findByIdAndUpdate(req.params.id, req.body)
  .then(updated =>{
    res.send(updated)
  })
  .catch(err =>{
    res.json(err)
  })
})
//TODO: change '/' below to be by id

router.delete('/api/v1/del', (req, res) => {
  ClothesSchema.deleteMany(req.query)
    .then(() => {
      console.log('successfully deleted all')
      res.status(204).send()
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err)
    })
})


/*Customer*/




router.get('/api/v1/filterGetCustomer', (req, res) => {
  console.log(req.query)
    CustomerSchema.find(req.query)
    .then(customer => {
      console.log("succesfully got one!")
      console.log(customer)
      res.json(customer)
    })
    .catch(err => {
      console.error(err)
    })
})

router.get('/api/v1/getCustomer', (req, res) => {
  CustomerSchema.find({
  })
  //'then' happens if find is succesful
  .then(customer => {
    console.log("succesfully got entire db!")
    console.log(customer)
    res.json(customer)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err)
  })
})
router.post('/addcustomer', (req, res) => {
  CustomerSchema.create(req.body)
  .then(customer => {
    console.log("Model made!")
    console.log(customer)
    res.send(customer)
  })
  .catch(err => {
    console.error(err)
  })
})
router.put('/api/v1/customer/:id', (req, res) => {
  CustomerSchema.findByIdAndUpdate(req.params.id, req.body)
  .then(updated =>{
    res.send(updated)
  })
  .catch(err =>{
    res.json(err)
  })
})
//TODO: change '/' below to be by id
router.get('/api/v1/getcard/:id', (req, res) => {
  CreditSchema.findById(req.params.id)
    .then(card => {
      console.log("successfully got one!")
      console.log(card)
      res.json(card)
    })
    .catch(err => {
      console.error(err)
      res.status(404).send("Credit card not found")
    })
})
router.delete('/api/v1/delcustomer', (req, res) => {
  CustomerSchema.deleteMany(req.query)
    .then(() => {
      console.log('successfully deleted all')
      res.status(204).send()
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err)
    })
})

/*Credit Card Stuff*/
router.get('/api/v1/getcard', (req, res) => {
  CreditSchema.find({
  })
  //'then' happens if find is succesful
  .then(card => {
    console.log("succesfully got entire db!")
    console.log(card)
    res.json(card)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err)
  })
})
router.get('/api/v1/getcard/:id', (req, res) => {
  CreditSchema.findById(req.params.id)
    .then(card => {
      console.log("successfully got one!")
      console.log(card)
      res.json(card)
    })
    .catch(err => {
      console.error(err)
      res.status(404).send("Credit card not found")
    })
})
router.post('/api/v1/addcard', (req, res) => {
  CreditSchema.create(req.body)
  .then(card => {
    console.log("Model made!")
    console.log(card)
    res.send(card)
  })
  .catch(err => {
    console.error(err)
  })
})
router.put('/api/v1/card/:id', (req, res) => {
  CardSchema.findByIdAndUpdate(req.params.id, req.body)
  .then(updated =>{
    res.send(updated)
  })
  .catch(err =>{
    res.json(err)
  })
})
//TODO: change '/' below to be by id

router.delete('/api/v1/delcard', (req, res) => {
  CardSchema.deleteMany(req.query)
    .then(() => {
      console.log('successfully deleted all')
      res.status(204).send()
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err)
    })
})
module.exports = router
