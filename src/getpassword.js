const bcrypt = require('bcrypt');
let password = bcrypt.hashSync('12345', 8);
console.log(password)