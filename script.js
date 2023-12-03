const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav li');
const expand = document.querySelectorAll('.expand');
const closeBtn = document.querySelector('.close-btn');
const imgVeiwer = document.querySelector('.img-veiwer');
const imgVeiwerImage = document.querySelector('.img-veiwer img')
const imgViewerOverlay = document.querySelector('.img-viewer-overlay');

const navBarToggle = function () {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
}
for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', navBarToggle)
}
menuBtn.addEventListener('click', navBarToggle);


for (let i = 0; i < expand.length; i++) {
  expand[i].addEventListener('click', function () {
    imgVeiwerImage.src = this.previousElementSibling.src
    imgVeiwer.classList.add('active');
    imgViewerOverlay.classList.add('active');
  });
}

const rmImgViewer = function () {
  imgVeiwer.classList.remove('active');
  imgViewerOverlay.classList.remove('active');
}

closeBtn.addEventListener('click', rmImgViewer);
imgViewerOverlay.addEventListener('click', rmImgViewer);
