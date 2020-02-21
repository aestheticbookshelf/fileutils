# fileutils

Fileutils is the no nonsense synchronous file utility package you have always dreamed of. It is built on proven packages ( `copy-dir`, `mkdirp`, `rimraf` ) and brings together their functionality in a coherent way. Plus adds synchronous JSON read from file with default object and JSON write to file, which you cannot achieve with `json-file`.

## Usage

```javascript
const fu = require('@aestheticbookshelf/fileutils')

// create directory, won't complain if it already exists, creates all directories in path

fu.createDir("foo/bar/baz")

// remove directory recursively

fu.removeDir("foo")

// read file, with default

let content = fu.readFile("foo.txt", "default text in case foo.txt is missing")

// write file

fu.writeFile("foo.txt", "some content")

// write file, but don't overwrite if it exists

fu.writeFile("foo.txt", "some content", fu.DONT_OVERWRITE)

// read JSON with default

let obj = fu.readJson("foo.json", {
    meta: "I'm a default object to return in case foo.json does not exist"
})

// write JSON

fu.writeJson("foo.json", {
    meta: "I'm an object to be written to foo.json"
})

// copy directory, recursively

fu.copyDir("foo", "bar")
```
