const axios = require("axios")

function ghostbin(text, title, password) {
return new Promise ((resolve, reject) => {
axios({
method: "post",
url: "https://ghostbin.com/paste/new",
data: `text=${text}&title=${title}&password=${password}`})
.then(res=>resolve('https://ghostbin.com'+ res.request.path))
})
};

module.exports = ghostbin;