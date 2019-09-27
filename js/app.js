const url = "https://source.unsplash.com/1750x3500/?wallpaper,iphone";
const wallpaper = document.querySelector("#wallpaper");
const wallpaperLink = document.querySelector("#wallpaperLink");
const updateBtn = document.querySelector("#updateBtn");
const imgDefault = "/img/load.png";
let img = "";

function updateImg() {
  updateBtn.classList.add("disabled");
  fetch(url).then(response => {
    img = response.url;
    wallpaperLink.href = img;
    wallpaper.src = img;
    updateBtn.classList.remove("disabled");
  });
}

updateImg();

updateBtn.addEventListener("click", event => {
  event.preventDefault();
  wallpaperLink.href = "";
  wallpaper.src = imgDefault;
  setTimeout(updateImg, 2000);
});
