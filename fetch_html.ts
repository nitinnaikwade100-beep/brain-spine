import https from 'https';
import fs from 'fs';

https.get('https://sites.google.com/view/drnitinnaikwade/home', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('site.html', data);
  });
});
