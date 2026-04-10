import https from 'https';
import fs from 'fs';

const url1 = 'https://lh3.googleusercontent.com/sitesv/APaQ0SQHa1RY7sxj3hB5CaF39vy96HtjmjowaxISV9lZvAerOVNaOwTGMQK9budiS9MNue4lC7G-sgpnUlHLDX59tsgOE3Ve46Gnawyl8rY3zO9Z6gaocwB1iw6aWX7YhoWabqC7uZQ74lrFb6aREl0z8VfayJw7bHTiomY8sQC1X4r2tdYEJhSwxsLo=w1280';
const url2 = 'https://lh3.googleusercontent.com/sitesv/APaQ0SS5pNJUgbta_eth7MJZsZFaYQCxKhcHHFAc-5H0Ta2Mc0zeKppBdhvl5z7J5XQ78FNRl8EoCngKQ5jMm8E2_GhaCIByuf4KeefASk-NF3BZ-rmQQ2Hmf6w3w9jGoi8UgjpCVmHNmduAz6EIyICo61xDQJl0k354-u_jqUGkHSJ7z7rpIgMHpVw9=w1280';

https.get(url1, (res) => {
  const file = fs.createWriteStream('public/hero1.jpg');
  res.pipe(file);
});

https.get(url2, (res) => {
  const file = fs.createWriteStream('public/hero2.jpg');
  res.pipe(file);
});
