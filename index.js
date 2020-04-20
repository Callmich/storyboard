const server = require('./server.js');

const PORT = process.env.PORT || 5959;

server.listen(PORT, ()=>{
    console.log(`\n **** Listening on port ${PORT}****\n`)
});