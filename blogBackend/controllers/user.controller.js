const mongoose = require('mongoose');
const { send } = require('process');
const User = mongoose.model('User');
var env = process.env.NODE_ENV || 'development'

module.exports.registers = async (req, res, next) => {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");
    var user = new User({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    })
    try {
        await user.save((err, doc) => {
            if (!err) {
                return res.send({ user: user._id });
            }
            else {
                return res.send(err)
            }
        });
    }
    catch (err) {
        res.send(err);
    }
};

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email is not found");
    if (req.body.password != user.password) return res.status(404).send("Password does not match")
    return res.send(user)
}

module.exports.reset = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email is not found");
    console.log(user);
    if (user != null) {
        await User.updateOne({email: req.body.email},{$set:{password:req.body.newPassword}});
        res.send(user)
    }
}