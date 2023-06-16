const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
exports.sighnup = async (req, res) => {

    const { email, password } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ error: "Email already exist" });
    }
    const hash = bcrypt.hashSync(password,10);
    const user = new User({
        email:email, hash_password:hash
    });

    await user.save()
        .then(savedUser => { res.status(201).json({ savedUser }) })
        .catch(error => {
            res.status(500).json({ error })
            console.log(error);
        })



}

exports.signin = (req,res)=>{
    console.log(req.body)
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (error) return res.status(400).json({ error })
        if (user) {
            if (user.authenticate(req.body.password)) {

                const token = jwt.sign({ _id: user._id},"THIS IS SECRET!!")
                
                
                res.status(200).json({
                    data: token,
                    user
                })

            } else {

                return res.status(200).json({
                    message: "Invalid Password"
                })
            }
        }
        else {
            return res.status(400).json({ message: "Something went wrong " })
        }
    });

}