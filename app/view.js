const fs = require('fs');

fs.readFile(__dirname + '/' +  process.argv[2], 'utf8', (err, data) => {
  if (err) {
    throw new Error(err);
  }
  const str = JSON.stringify(data.toString(), null, 2);
  console.log(str);
});



