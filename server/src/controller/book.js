const Books = require('../model/books')

exports.setBook = (req, res) => {
    const { name, author, description, price } = req.body;
    const book = new Books({
        name,
        description,
        author,
        price
    })


    book.save((err, book) => {
        if (err) {
            return res.status(400).json({ err })
        }
        if (!err && book) {
            return res.status(201).json({ "message":"Created" })
        } else {
            res.status(400).json({ message: "something went wrong!!" })
        }
    })
}

exports.getBook = (req, res) => {
    Books.find({}).exec((err, book) => {
        if (err) {
            res.status(400).json({
                err
            })
        }
        if (book) {

            res.status(201).json({ book })
        }

    })

}
exports.getBookByID = (req, res) => {
    Books.findById(req.params.id,(err, book) => {
      if(err) {
        console.log(err);
      }else{
        res.status(200).json({
          book
        })
      }
    });
}

exports.update = async (req, res) => {
    try {
        await Books.findByIdAndUpdate(req.params.id, {
            $set: {
                name:req.body.name,
                description: req.body.description,
                author:req.body.author,
                price:req.body.price
            },

        }).exec((err, book) => {
            if (err) {
                return res.status(401).json({ err })
            }
            if (!err && book) {
                res.status(201).json({ "message":"Updated" })
            }
            else {
                res.status(401).json({ "Message": "Something Went Wrong!!" })
            }
        })
       
    } catch (error) {
        console.log(error)
    }

}
exports.remove = async (req, res) => {
    try {
        await Books.findByIdAndDelete(req.params.id).exec((err, book) => {
            if (err) {
                return res.status(401).json({ err })
            }
            if (!err && book) {
                res.status(201).json({ "message":"Deleted" })
            }
            else {
                res.status(401).json({ "Message": "Something Went Wrong!!" })
            }
        })
    } catch (error) {
        console.log(error)
    }
}

