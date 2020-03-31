exports.register = function(req, res) {
    if (req.method === 'POST'){
        const post = req.body
        const name = post.username
        const email = post.email
        const contact = post.contact
        const message = post.message

        var sql = "INSERT INTO `user_detail`(`username`, `email`, `contact`, `message`) VALUES ('" + name + "','" + email + "','" + contact + "','" + message + "')";
    
        db.query(sql, function(err, result){
            messages = "Succesfully saved your detail.";
            res.render('register', {
                messages:messages
            } )
        })
    }
    else{res.render('register')}
}

exports.login = function(req, res){
    const post = req.body

    var sql="SELECT * FROM `login_detail` WHERE `username`='"+post.username+"' and password = '"+post.password+"'"; 
    
    db.query(sql, function(err, result){
       
        wrongCredential = "Credential are Invalid.";
        if (result.length === 0){
             
            res.render('index', {
                wrongCredential: wrongCredential
            })
        }else{
            req.session.username = ""
            req.session.username  = result[0].username;
            res.redirect('profile')
        }
    });
}

exports.profile = function(req, res){
    const sql = `SELECT * FROM user_detail`;

    db.query(sql, function(err, result){
        res.render('profile', {
            userdata: result
        })
    });
}

exports.logout=function(req,res){
    req.session.destroy(function(err) {
       res.redirect("/");
    });
 };


