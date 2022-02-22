function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
loadPhotos()

function displayPhotos(photos) {
    const photosContainer = document.getElementById('photos')
    for (const photo of photos) {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${photo.url}</p>
        <p>${photo.thumbnailUrl}</p>
        `
        photosContainer.appendChild(div)
    }
}