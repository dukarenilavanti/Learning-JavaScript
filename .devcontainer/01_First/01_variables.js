const accountId = 144345
let accountEmail = "nilu@gmail.com"
var accountPassword = "jaipur"
accountCity = "jaipur"
let accountState 

/*prefer not to use var because of issue in block and functional scope */

//accountId = 2  //not allowed
accountEmail = "hc@hc.com"
accountPassword ="24566"
accountcity = "hyd"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])