/**
 * Created by matt on 11/21/15.
 */
var seeds = require('./allseeds.json');
var http = require('http');

var options = {
    host: 'scores.grimm-bros.com',
    port: 3000,
    path: '/api/seed',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

for (var i in seeds) {
    var seed = seeds[i];
    console.log("Posting seed " + seed.seed);
    var post_req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log(chunk);
        });
    });

    post_req.write(JSON.stringify(seed));
    post_req.end();
}