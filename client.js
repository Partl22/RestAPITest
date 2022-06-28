const http = require('http');
const args = process.argv; 

const options = {
    hostname: '192.168.8.111',
    port: '8080',
    path: '/name?vname='+ args[2]+ '&nname='+ args[3],
    method: 'POST'
};
    
// Sending the request
const req = http.request(options, (res) => {
    let data = ""
     
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    // Ending the response 
    res.on('end', () => {
        let jeyson = JSON.parse(data);



        console.log("Vorname " + jeyson.vname + " Nachname " + jeyson.nname);
    });
       
}).on("error", (err) => {
    console.log("Error: ", err)
}).end()

//Dein Vorname ist "" und dein Nachname ist ""