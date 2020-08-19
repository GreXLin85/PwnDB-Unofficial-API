
# PwnDB-Unofficial-API
API for PwnDB<br>
[!] Legal disclaimer: Usage of PwnDB-Unofficial-API for attacking targets without
prior mutual consent is illegal. It is the end user's responsibility
to obey all applicable local, state and federal laws. Developers assume
no liability and are not responsible for any misuse or damage caused.
# Usage

 1. install package with this command `npm i pwndb-unofficial-api`

		const  pwndb =  require("pwndb-unofficial-api")
    
	    pwndb.email("example","gmail.com").then(data => {
		    //code or console.log(data)
    	})
	    pwndb.passw("password").then(data => {
		    //code or console.log(data)
    	})
