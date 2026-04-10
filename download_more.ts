import https from 'https';
import fs from 'fs';

const urls = [
  'https://lh3.googleusercontent.com/sitesv/APaQ0SQc8-emfKPJGTnkq2rFUqsrQP7_4jWE1VlrEXepkMSbSMnIfY27PGBNN58wq4ZFrLbEc0NjTnpJx7La1DuzNpPTeEJ8Odn9V2ehwl8SxLf2Tm8TBkD720SYlghorpZiw53CEJHs4ePs3Bezv8CHKvUBzS0-ca2XCwUW545iIXVhWZjxqE-Vl-zk90ZSHMMCKhCGHnDHmUYme79E-EflcbBo8w0EONDNINdl=w1280',
  'https://lh3.googleusercontent.com/sitesv/APaQ0SRh-QlotoUN6Wxp0IqKvhSWAZiHGim9KbDDg6TkXwrgnOFB-gbgP-RB9dJKJalcBiwYoyvcIjnDHiD3Jvbjn0j1v5hQENBtdzcz7HqKD3FitTyrTtm3-5oxg8T8x30LCs-iIUQTdR6L9VaLZdXintQxgLCpTbYryOklBvTGaQfCClNTMmGtGHMKlbIU9S4yA9gXTmrmG8yt-d-M=w1280',
  'https://lh3.googleusercontent.com/sitesv/APaQ0STJbNHTBrY9FgSwfWeWX3lJCmGzHPlu484LEBC0RfEOpMv89VstbWyu1zU-1mBCzqCG___Ym9tKV8435JqbjTsUgjl8-62r0wkpXexIXoJxRrQiTSD6YZurIDVdu7JxaekQJnYJ-3oAbibEHNCqDBcULFj4jbCn8s18P0tbiq2kZa3vFRt8gG10lslxuUxana60asaokbH-Ge4H=w1280',
  'https://lh3.googleusercontent.com/sitesv/APaQ0SSe5srZZhEn_XtniCGB1ffmWo64gb-Vdj6nito_pNcEl4Su9CrcBczCE0Kfrft5h5zKg6puqV7FJlDRuXRP_AibkdYxRP1gELyKl5Kr6jkzHNHWBya2EtcoMn1j6Aw5malUremkUqu0rOGEOi8xN2gWssKNauikVjrGD9bk8txy99GuW2oNfdCjlEZZ74Ju4P6det5RuC3lFVCWPlZVq0spYzG2K6N2A4sZCn0=w1280'
];

urls.forEach((url, i) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(`public/img${i+3}.jpg`);
    res.pipe(file);
  });
});
