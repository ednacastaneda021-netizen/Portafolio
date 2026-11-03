const fs = require('fs')
let c = fs.readFileSync('src/App.tsx', 'utf8')
c = c.replace('href="https://mail.google.com/mail/u/0/#inbox?compose=new"', 'href="https://mail.google.com/mail/u/0/#inbox"')
fs.writeFileSync('src/App.tsx', c)
