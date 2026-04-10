import https from 'https';
import fs from 'fs';
import path from 'path';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  try {
    console.log('Downloading logo...');
    await download('https://lh3.googleusercontent.com/sitesv/APaQ0SSLm6YFvX5WD9jVcA7P6P3U9J-FFu8cfumlDFQ1lKOTk3C4ox7y5mC4V8HyBrHGeUSmu2fphR_dCg3marv63DzVuRNhug7UzMdNAWoS-Fnu7c6oEQkha-VChQ_1l_MWHc4ySMMFwsBibzbm-hkoH-FquaxX-V-ufOaQA7jKB2ycH3XVNJvJScej0Ls=w16383', './public/logo.png');
    console.log('Downloading hero image...');
    await download('https://lh3.googleusercontent.com/sitesv/APaQ0SQ8rh93i_1_bSQaxBXkC_ZNGYUCcKWEl-DXZA2E3fPmQusKvJU_30vetGIhN792KLcrmwuch3e37oCKCQmyS8cvMhtdcKNX95WwDNt-rW82S0-MOtvsEWNeQj9uwEtRF14rJrti40Em1fN7l8Rosokr5Y80keBAu9g2-ZTFRbzXsCnAkhKUwc247I_0O0mpAgxkQpyFSMaLrOdBfUTVE5DBWpl0UrHeQN67=w1280', './public/hero.png');
    console.log('Done!');
  } catch (e) {
    console.error(e);
  }
}

run();
