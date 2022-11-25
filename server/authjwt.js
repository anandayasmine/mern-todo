
const jwt = require("jsonwebtoken");
const config = require("./config/auth.config.js");

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.replace("Bearer ", "");

//     const decoded = jwt.verify(token, "secret");
//     req.userData = decoded;

//     next();
//   } catch (err) {
//     return res.status(401).json({
//       message: "Authentification Failed"
//     });
//   }
// };

exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};
// const path = require('path');
// const jwt = require('jsonwebtoken');
// var publicKEY = fs.readFileSync(path.join(__dirname + 'https://soshace-12d3e.kxcdn.com/public.key'), 'utf8');
// var privateKEY = fs.readFileSync(path.join(__dirname + 'https://soshace-12d3e.kxcdn.com/private.key'), 'utf8');


// var i = 'Krissio';     // Issuer (Software organization who issues the token)
// var s = 'admin@kriss.io'; // Subject (intended user of the token)
// var a = 'https://kriss.io'; // Audience (Domain within which this token will live and function)

// module.exports = {
//     sign : (payload)=>{
//          // Token signing options
//          var signOptions = {
//             issuer: 	i,
//             subject: 	s,
//             audience: 	a,
//             expiresIn: "30d",    // 30 days validity
//             algorithm: "RS256"
//         };
//         return jwt.sign(payload, privateKEY, signOptions);
//     },
// }
