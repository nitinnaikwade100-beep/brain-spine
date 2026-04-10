import https from 'https';
import fs from 'fs';

const url = 'https://lh3.googleusercontent.com/sitesv/APaQ0SRpJ-msqTEQAma6irbol29i7HcK6s8s7WqBQiN4uwSiRijXxSZu6NDfEvsntGbxNIXsb2ZiotP6WVnF-qc_sNK7UHRIgfnqnBe9_A-OCYaLS2xqsrFn0eAzQKoUJ2ywj4yMuTtyXH7E5uPd_dgz9xP5dAsNeGBGcYZkpiYEC4swlSE3lkVe3_da5-w=w1280';

https.get(url, (res) => {
  const file = fs.createWriteStream('public/hero_main.jpg');
  res.pipe(file);
});
