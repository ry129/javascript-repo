const accountId=144553
let accountEmail="riya@gmail.com"
var accountPassword="12345"
accountCity="Bhopal"

//accountId=2// not allowed

accountEmail="hc@hc.com"
accountPassword="123456"
accountCity="jaipur"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])