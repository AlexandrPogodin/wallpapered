const url = "https://source.unsplash.com/1750x3500/?wallpaper,iphone";
const wallpaper = document.querySelector("#wallpaper");
const wallpaperLink = document.querySelector("#wallpaperLink");
const updateBtn = document.querySelector("#updateBtn");
const imgDefault = "/img/load.png";
let img = "";

function updateImg() {
  fetch(url).then(response => {
    img = response.url;
    wallpaperLink.href = img;
    wallpaper.src = img;
    setTimeout(btnShow, 1000);
  });
}

function btnHide() {
  updateBtn.classList.add("disabled");
}

function btnShow() {
  updateBtn.classList.remove("disabled");
}

updateImg();

updateBtn.addEventListener("click", event => {
  event.preventDefault();
  wallpaperLink.href = "";
  wallpaper.src = imgDefault;
  btnHide();
  updateImg();
});
