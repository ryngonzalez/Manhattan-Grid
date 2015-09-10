var fs = require('fs'),
    cssnext = require('cssnext');

var input = fs.readFileSync('src/grid.css', 'utf8');
            fs.writeFileSync('dist/manhattan.css', cssnext(input));
