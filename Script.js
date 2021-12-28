const buttons = document.querySelectorAll('.circle')
const img = document.querySelector(".introductionPic")
const linkedIn = document.querySelector(".linkedIn")
const navigation = document.querySelectorAll(".menuBtn")
const contentSlide = document.querySelector(".content")
console.log(buttons)
const sliderPictures = [
'https://c4.wallpaperflare.com/wallpaper/48/413/269/joker-black-dc-comics-batman-joaquin-phoenix-hd-wallpaper-preview.jpg',
'https://c4.wallpaperflare.com/wallpaper/304/872/930/minimalism-artwork-space-space-art-astronaut-hd-wallpaper-preview.jpg',
'https://c4.wallpaperflare.com/wallpaper/459/87/740/cat-glasses-space-abstract-wallpaper-preview.jpg']



buttons[0].onclick =()=>{
    img.style.backgroundImage = `url(${sliderPictures[0]})`
}
buttons[1].onclick =()=>{

    img.style.backgroundImage = `url(${sliderPictures[1]})`
}
buttons[2].onclick =()=>{
    img.style.backgroundImage = `url(${sliderPictures[2]})`
}


for (const navigationKey in navigation) {
    navigation[navigationKey].onclick = () =>{
        contentSlide.style.left = `${-800*navigationKey}px`
    }
}