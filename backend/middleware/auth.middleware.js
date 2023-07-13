const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token= req.headers.authorization.split(" ")[1]
  if (token){
    try {
      const decoded = jwt.verify(token, "mock");
      if (decoded) {
        req.body.userId = decoded.userId;
        next();
      } else {
        res.json({ msg: "invalid token" });
      }
    } catch (err) {
      res.json({ msg: "hello" });
    }
  }else{
    res.json({msg:"login again"})
  }
};


module.exports={auth}