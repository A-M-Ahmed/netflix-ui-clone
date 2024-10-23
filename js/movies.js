const api_key = "74a8571992221604364a791175cd8a30"
const Image_Url = 'https://image.tmdb.org/t/p/w500/'

document.addEventListener('DOMContentLoaded',() =>{

    getTrendingMovies()
   
})

//**Trending hero */
async function getTrendingMovies() {

    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)

        const data = await response.json()
     
        setHero(data)


    } catch (error) {

        console.log("Error for trading", error)

    }}




function setHero(data) {
    const heroImage = document.getElementById('hero-img')
    const heroTitle = document.querySelector('#hero-title')
    const heroDesc = document.querySelector('#hero-description')
    //* user for online
    const user = document.querySelector('#user')

    const randomIndex = Math.floor(Math.random() * data.results.length)
    const imgURL = `${Image_Url}${data.results[randomIndex].poster_path}`

    // console.log('looking title',data.results)
    //*hero Image
    heroImage.src = imgURL

    //*here title and description
    heroTitle.textContent = data.results[randomIndex].title
    heroDesc.textContent = data.results[randomIndex].overview
    //* online user
    const userOnline = JSON.parse(localStorage.getItem('onlineUser'))
    user.textContent = userOnline.username
}
