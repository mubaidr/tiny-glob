# tiny-glob

> Fast and super tiny glob library

Match files and folders using glob patterns, similar to how shell uses globbing.
All path are normalized compared to `node-glob`.

## Installation

```
npm install tiny-glob
```


## Usage

```js
const { glob } = require('tiny-glob');

(async function(){
    let files = await glob('src/*/*.{js,md}');
    // => [ ... ] array of matching files
})();
```


## API


### tiny-glob

Type: `function`<br>
Returns: `Array`

Return array of matching files and folders
This function is `async` and returns a promise.

#### str

Type: `String`

The glob pattern to match against.

#### options.cwd

Type: `String`<br>
Default: `'.'`

Change default working directory

#### options.dot

Type: `Boolean`<br>
Default: `false`

Allow patterns to match filenames or directories that begin with a period (`.`).

## License

MIT © [Terkel Gjervig](https://terkel.com)
