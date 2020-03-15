
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

const appPath = __dirname + "/dist";
console.log(appPath);
app.use("/", serveStatic(appPath));

const  port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))