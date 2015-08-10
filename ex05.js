var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
  if (!err && list) {
    var files = list.filter(function (val) {
      return val.match('\.' + process.argv[3] + '$');
    });

    for (var file in files) {
      console.log(files[file]);
    }
  }
});
