AOS.init()

const tombolMenu = document.querySelector('#tombol-menu');
const menu = document.querySelector('.aside')

tombolMenu.addEventListener('click', function(){
  menu.classList.toggle('keluar')
})

function okegas() {
  alert("Pesan Terkirim");
  location.reload();
}