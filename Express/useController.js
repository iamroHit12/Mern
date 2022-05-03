const userRegister = (req,res) =>{
    const userName = req.body.name
    const userEmail = req.body.email
    const userPass = req.body.pass

    res.json({
        success:true,
        name : userName,
        email : userEmail,
        pass : userPass,
    })
}

module.exports = userRegister;