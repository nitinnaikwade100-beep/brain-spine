async function getPhotos() {
  try {
    const response = await fetch('https://photos.app.goo.gl/is2GGEfvqSBLDeDXA');
    const text = await response.text();
    
    // Broad regex for lh3.googleusercontent.com
    const regex = /https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9_-]+/g;
    const matches = text.match(regex);
    
    if (matches) {
      const unique = [...new Set(matches)];
      console.log(unique.slice(0, 10).join('\n'));
    } else {
      console.log('No matches found.');
    }
  } catch (error) {
    console.error('Error fetching:', error);
  }
}

getPhotos();
