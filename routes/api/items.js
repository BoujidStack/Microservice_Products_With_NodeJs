const express = require('express');
const Item = require('../../models/Item') ;
const router = express.Router();
const multer = require('multer'); // import multer

router.get("/items",(req, res)=>{
    Item.find()
    .sort({date : -1})
    .then(items => res.json(items))
})



// set up multer storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  // set up multer upload
  const upload = multer({ storage: storage });



  router.post('/items', upload.single('imageProduct'), (req, res) => {
    const newItem = new Item({
      titleProduct: req.body.titleProduct,
      imageProduct: req.file.path,
      material: req.body.material,
      dimensions: req.body.dimensions,
      FournitureFinish: req.body.FournitureFinish,
      weight: req.body.weight,
      oldPrice: req.body.oldPrice,
      NewPrice: req.body.NewPrice,
    });
  
    newItem
      .save()
      .then(item => res.json(item))
      .catch(err => console.log(err));
  });


router.delete('/items/:id', (req, res)=>{
    Item.findById(req.params.id)
    .then(item=> item.remove().then(()=>res.json({success:true})))
    .catch(err=> res.status(404). json({success:false}))
});


router.put('/items/:id', upload.single('imageProduct'), (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      // Update the item object with the new data
      item.titleProduct = req.body.titleProduct;
      if(req.file) {
        item.imageProduct = req.file.path;
      }
      item.material = req.body.material;
      item.dimensions = req.body.dimensions;
      item.FournitureFinish = req.body.FournitureFinish;
      item.weight = req.body.weight;
      item.oldPrice = req.body.oldPrice;
      item.NewPrice = req.body.NewPrice;

      // Save the updated item object to the database
      item.save()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500).json({ success: false, message: err.message }));
    })
    .catch(err => res.status(404).json({ success: false, message: 'Item not found' }));
});






module.exports = router;