const express = require('express');
const app = express();
// we need to require a library to use to do API request
const https = require("https");




app.get("/", (request, response) => {
    // this is Controller
    https.get('https://insult.mattbas.org/api/insult', resp => {
        resp.on('data', chunk => {
            response.send(`
                <http>
                    <head><title>Oh Snap</title></head>

                    <body>
                        <h1>Oh Snap!</h1>
                        <p style = "font-size: 24px; color: blue;">
                            ${chunk.toString()}!
                        </p>
                </http>
            `)
        });
    })
});

app.listen(process.env.PORT || 3000);


