const accountId = 12345;
let accountEmail = "ratnesh@google.com"
var accountPassword = "456464"
accountCity = "Jaipur"
let accountState;

accountEmail = "rm@gmail.com"
accountPassword = "121212"
accountCity = "Bengaluru"

/*
Prefer not to use var bcz
of scope in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
