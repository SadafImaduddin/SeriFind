const searchInput = document.querySelector('.search');
const movie = document.querySelectorAll('.movie');

searchInput.addEventListener('keyup', function(event){
    const word = event.target.value;

    movie.forEach(function(item){
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})