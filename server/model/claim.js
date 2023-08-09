const sql=require('mysql2');
const config=require('../config')
const db=sql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database 
});

db.connect((err)=>{
    if(err){
        console.error("Database connection failed");
        return;
    }
    else console.log("Database connection established");
});
const claim={
    id:1,
    name:'done',
    dept:'one',
    bill:100
};

exports.createClaim=(claim,callback)=>{
    db.query( `INSERT INTO claim (id, name, dept, bill) VALUES (${claim.id}, '${claim.name}', '${claim.dept}',${claim.bill})`,callback);
}

exports.getAllClaims = (callback) => {
    db.query('SELECT * FROM claim', callback);
  };

  
  exports.getClaimById = (claimId, callback) => {
    db.query('SELECT * FROM claim WHERE id = ?', claimId,callback);
  };
  
  exports.updateClaim = (claimId, updatedClaim, callback) => {
    
    db.query('UPDATE claim SET ? WHERE id = ?', [updatedClaim, claimId], callback);
  };
  
  exports.deleteClaim = (claimId, callback) => {
    db.query('DELETE FROM claim WHERE id = ?', claimId, callback);
  };
  
  exports.loginUser=(data,callback)=>{
    db.query('SELECT * FROM admin WHERE username= ? AND password= ?',
    [data.username,data.password],callback);
  }

  exports.registerUser=(data,callback)=>{
    db.query( `INSERT INTO admin (name, username, password) VALUES ('${data.name}', '${data.username}', '${data.password}')`,callback);
  }

