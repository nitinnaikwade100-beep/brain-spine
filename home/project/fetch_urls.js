const https = require('https');
const fs = require('fs');

https.get('https://sites.google.com/view/drnitinnaikwade/home', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https:\/\/lh3\.googleusercontent\.com\/[^\"]+/g);
    if (matches) {
      fs.writeFileSync('urls.txt', matches.filter((v,i,a)=>a.indexOf(v)===i).join('\n'));
    }
  });
});
