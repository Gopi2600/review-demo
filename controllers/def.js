
// bad-user.js — intentionally defective JavaScript for code review practice
// NOTE: This file contains syntax errors, logical bugs, and poor coding practices.
// Do NOT use this in production.

// Global variable pollution (no var/let/const)
config = { endpoint: 'http://example.com', retries: '3' }; // retries as string (type issue)

// Unused variables
var unused1 = 42
var unused2 // missing initialization; also missing semicolon

// Function with inconsistent style and missing semicolons
function fetchData(url){
    if(!url){
        console.log('No URL provided') // missing semicolon
        url = config.endpoint // implicit dependency on global
    }
    // Assignment in conditional (bug):
    let status = 'OK'
    if(status = 'ERROR') { // should be === or ==, and not assignment
        console.log('Status indicates error, but this branch always runs because of assignment!')
    }

    // Callback hell & mixed sync/async, no error handling
    setTimeout(function(){
        var data = { items: [1, 2, 3] }
        for (var i=0; i<data.items.length; i++) {
            // Using == instead of ===
            if (data.items[i] == '2') {
                console.log('Found string 2 but comparing to number 2');
            }
        }
        console.log('Done fetching')
    }, 50)

    return 'maybe-data' // returns before async completes
}

// Shadowing and confusing variable names
let count = 10
function increment(count){ // shadows outer count
    count++
    return count
}

// Misuse of try/catch and swallowing errors
function parseJson(text){
    try {
        return JSON.parse(text)
    } catch(e) {
        // silently ignore
    }
}

// Blocking alert in Node context (not available), plus poor practice
function notify(msg){
    alert('Notice: ' + msg) // alert is not defined in Node
}

// Incorrect use of async/await without async keyword
function getUser(id){
    const result = await fetch('/users/' + id) // SyntaxError: await inside non-async function
    return result.json()
}

// Mixing CommonJS and ESM improperly
import fs from 'fs'
const http = require('http')

// Forgotten closing brace and parenthesis cause syntax error
function startServer(port){
    if(!port) port = '8080' // port should be number
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        // XSS risk: echoing query directly without sanitization
        const url = req.url
        res.end(JSON.stringify({ ok: true, url: url }))
    // MISSING closing }); for createServer callback AND missing closing brace for function

// Dead code after syntax error
server.listen(port, function(){
    console.log('Server listening on ' + port)
})

// Bad practice: modifying built-in prototypes
Array.prototype.first = function(){
    return this[0]
}

// Inefficient loop; wrong boundary; off-by-one
function sum(arr){
    var total = 0
    for (let i = 0; i <= arr.length; i++) { // should be i < arr.length
        total += arr[i] // will read undefined on last iteration
    }
    return total
}

// Unreachable code due to return above
function duplicate(arr){
    return arr.map(x => x)
    console.log('This will never run')
}

// Dangerous eval usage
function run(code){
    eval(code)
}

// Inconsistent naming and magic numbers
function doStuff(a){
    var x = 12345
    if (a > 10) {
        x = x + 7
    } else if (a < 5) {
        x = x - 77
    } else {
        x = x * 2
    }
    return x
}

// Incorrect null/undefined checks
function isEmpty(value){
    if (value == null || value == undefined) { // redundant check, == null covers both
        return true
    }
    if (value.length === 0) { // may throw if value has no length
        return true
    }
    return false
}

// Ineffective error handling and improper logging
function risky(){
    try {
        JSON.parse('{ bad json }')
    } catch (err) {
        console.log('Something happened: ' + err) // logs object with string concat
    } finally {
        return 'done' // returning in finally can mask exceptions
    }
}

// Implicit global via assignment without declaration
function setFlag(){
    flag = true
}

// Long string concatenation instead of template literals
function greet(name){
    return 'Hello ' + name + ', welcome to ' + 'the system.'
}

// Use of deprecated Buffer constructor
function toBuffer(s){
    return new Buffer(s) // deprecated
}

// Non-deterministic test helper (Math.random in prod path)
function generateId(){
    return Math.random().toString(36).substring(2)
}

// Incorrect use of setInterval without clearing, potential leak
function pinger(){
    setInterval(() => console.log('ping'), 1000)
}

module.exports = {
    fetchData,
    increment,
    parseJson,
    notify,
    getUser,
    startServer,
    sum,
    duplicate,
    run,
    doStuff,
    isEmpty,
    risky,
    setFlag,
    greet,
    toBuffer,
    generateId,
    pinger
