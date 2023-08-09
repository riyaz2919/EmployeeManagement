const db=require('../model/claim');
const jwt=require("jsonwebtoken");


exports.createClaim=(req,res)=>{
    const claim=req.body;
    res.setHeader('Content-Type', 'application/json');
    
    db.createClaim(claim,(err)=>{
        if(err) {
            console.log(err)
            res.status(500).send('error, check if duplicate id present');
        
        }
        else{
            const obj={
                "message":"Claim created sucessfully",
                "Claim":claim
            }
           // console.log('well done');
            res.status(201).json(obj);
        } 
    });
}

exports.getClaims=(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    db.getAllClaims((err,claims)=>{
        if(err) res.status(500).send('Error getting the Claims');
        else  res.send(claims);
    })
};

exports.updateClaim=(req,res)=>{
    const claimId=req.params.id;
    res.setHeader('Content-Type', 'application/json');
    console.log(claimId);
    const updated=req.body;
    db.updateClaim(claimId,updated,(err,result)=>{
        if(err) res.status(500).send("error, ensure if id's are matching")
        else if(result.affectedRows===0) res.status(401).send("User not found");
        else {
            const obj={
                "message":"updated sucesfully",
                'updatedClaim':updated
            }
            res.status(200).json(obj);
        };
    })
}

exports.getClaimById=(req,res)=>{
    const claimId=req.params.id;
    res.setHeader('Content-Type', 'application/json');
    db.getClaimById(claimId,(err,result)=>{
        if(err){
            res.status(500).send('Error getting claim');
            return;
        }
        else if(result.length===0){
            res.status(404).send('claim not found');
            return;
        }
        else{
            res.status(200).send(result[0]);
        }
    })
}

exports.deleteClaim=(req,res)=>{
    const id=req.params.id;
    res.setHeader('Content-Type', 'application/json');
    db.deleteClaim(id,(err,result)=>{
        if(err)res.status(500).send("Error");
        else if(result.affectedRows===0)res.status(404).send("claim not found");

        else res.status(200).send(`Sucessfully deleted claim with id ${id}`);
    })
};

exports.loginUser=(req,res)=>{
    db.loginUser(req.body,(err,result)=>{
        console.log(result);
        if(err){
            res.status(500).send("internal error");
        }
        else if(result.length>0){
            const token = jwt.sign({role: "admin"}, "jwt-secret-key", {expiresIn: '1d'});
            res.cookie('token', token);
            //console.log(token);
            
            res.status(200).send("sucess");
        }
        else{
            res.status(500).send("incorrect");
        }
    })
};
exports.verifyUser = (req, res, next) => {
    const token = req.cookies.token;
   // console.log(token);
    if(!token) {
        return res.json({Error: "You are no Authenticated"});
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) return res.json({Error: "Token wrong"});
            req.id = decoded.id;
            next();
        } )
    }
};

exports.dash=(req, res) => {
    return res.json({Status: "Success", id: req.id})
}


exports.logOut=(req,res)=>{
        res.clearCookie('token');
        return res.json({Status: "Success"});
    
}

exports.registerUser=(req,res)=>{
    const data=req.body;
    res.setHeader('Content-Type', 'application/json');
    
    db.registerUser(data,(err)=>{
        if(err) {
            console.log(err)
            res.status(500).send('error, check if duplicate id present');
        
        }
        else{
            const obj={
                "message":"admin created sucessfully",
                "data":data
            }
           // console.log('well done');
            res.status(201).json(obj);
        } 
    });
}