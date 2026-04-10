import https from 'https';

https.get('https://sites.google.com/view/drnitinnaikwade/home', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const imgTags = data.match(/<img[^>]+>/g) || [];
    console.log("IMG TAGS:");
    imgTags.forEach(tag => console.log(tag));
    
    const bgImages = data.match(/background-image:[^;]+/g) || [];
    console.log("\nBACKGROUND IMAGES:");
    bgImages.forEach(bg => console.log(bg));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
