import https from 'https';

https.get('https://sites.google.com/view/drnitinnaikwade/about-us?authuser=0', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/https:\/\/lh3\.googleusercontent\.com\/[^\s"'\\]+/g);
    if (matches) {
      console.log([...new Set(matches)].join('\n'));
    }
  });
}).on('error', (err) => {
  console.error(err);
});
