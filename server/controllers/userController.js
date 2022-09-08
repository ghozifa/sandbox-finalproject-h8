const { User } = require("../models");
const mail = require("../helpers/nodemailer");

class UserController {

    static async findAllUser (req, res) {
        try {
            const user = await User.findAll({
                attributes: ["id", "username", "email"]
            });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message: "internal server error"})
        }
    } 

    static async registerUser (req, res) {
        try {
            const { username, email, password } = req.body;
            const register = await User.create({username, email, password});
            mail({
                username: register.username,
                email: register.email
            })
            res.status(201).json({
                message: "Success Register",
                id: register.id,
                email: register.email
            })
        } catch (error) {
            res.status(500).json({message: "internal server error"});
        }
    }

}

module.exports = UserController