const fs = require('fs')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')

const DONT_OVERWRITE = true

function createDir(path){
    mkdirp.sync(path)
}

function removeDir(path){
    rimraf.sync(path)
}

function readFile(path, def){
    try{
        let content = fs.readFileSync(path).toString()        
        return content
    }catch(err){
        return def
    }
}

function writeFile(path, content, dontOverWrite){
    if(dontOverWrite && fs.existsSync(path)) return
    fs.writeFileSync(path, content)
}

function readJson(path, def){
    try{
        let content = fs.readFileSync(path).toString()        
        let obj = JSON.parse(content)
        return obj
    }catch(err){        
        return def
    }
}

function writeJson(path, obj){
    try{
        let json = JSON.stringify(obj, null, 2)
        fs.writeFileSync(path, json)
        return true
    }catch(err){        
        return false
    }
}

module.exports = {
    createDir: createDir,
    removeDir: removeDir,
    readFile: readFile,
    writeFile: writeFile,
    readJson: readJson,
    writeJson: writeJson,
    DONT_OVERWRITE: DONT_OVERWRITE
}
