const Books = require('../model/books')

exports.setBook = (req, res) => {
    const { user,name, author, description, price } = req.body;
    const book = new Books({
        user,
        name,
        description,
        author,
        price,
    })


    book.save((err, book) => {
        if (err) {
            // return res.status(501).json({ "err":err })
            console.log(err);
        }
        if (!err && book) {
            return res.status(201).json({ message:"Created",book:book })
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
exports.getBookByID = async(req, res) => {
    const id = req.params.id;
    try {
      const books = await Books.find({user:id});
      res.json({books});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
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

