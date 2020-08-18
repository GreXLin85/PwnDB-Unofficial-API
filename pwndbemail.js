const fetch = require("node-fetch")
/**
 * @param {String} emailname "example"
 * @param {String} emaildomain "gmail.com"
 * @returns {Array} Array
 */
module.exports = (emailname,emaildomain) => {
    return new Promise(function (resolve, reject) {
        fetch("https://tor.weboproxy.com/index.php?q=mtrW05xoZaCwpMWSaJilmdWtm6_VnZaS1KPKpJ4", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://tor.weboproxy.com/index.php?q=mtrW05xoZaCwpMWSaJilmdWtm6_VnZaS1KPKpJ4",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "luser="+emailname+"&domain="+emaildomain+"&luseropr=0&domainopr=0&submitform=em",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(response => response.text())
            .then(data => {
                let asd = data
                let rows = asd.match(/(.*?) rows\./g)[0]
                rows = rows.substr(0, rows.length - 5)

                asd = asd.match(/(?<=<pre>)[\S\s]*(?=<\/pre>)/g)[0].split("\n")
                email = (i) => { return asd[6 + (i * 9)].substr(15, asd[6 + (i * 9)].length) + "@" + asd[7 + (i * 9)].substr(16, asd[7 + (i * 9)].length) }
                parola = (i) => { return asd[8 + (i * 9)].substr(18, asd[8 + (i * 9)].length) }
                let asdf = []
                for (let i = 1; i < rows; i++) {
                    asdf.push({
                        email: email(i),
                        password: parola(i)
                    })
                }
                resolve(asdf)
            }).catch((reason) => reject(reason))
    })
}