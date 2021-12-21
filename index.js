console.log('Memulai...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts = require('cfonts')
CFonts.say('Maceng Bot', {
  colors: ['#f2aa4c'],
  font: 'block',
  align: 'center',
})
CFonts.say(`'${package.name}' Oleh @${package.author.name || package.author}`, {
  colors: ['#f2aa4c'],
  font: 'console',
  align: 'center',
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    colors: ['#f2aa4c'],
    font: 'console',
    align: 'center',
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')
