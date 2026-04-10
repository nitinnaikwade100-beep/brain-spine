import fs from 'fs';
const html = fs.readFileSync('site.html', 'utf8');
const matches = [...html.matchAll(/.{0,50}https:\/\/lh3\.googleusercontent\.com\/[^\"]+?w16383.{0,50}/g)];
matches.forEach(m => console.log(m[0]));
