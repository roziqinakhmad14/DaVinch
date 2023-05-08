  
let signin = document.querySelector('#signin');

signin.addEventListener('submit', function(event) {
  let username = document.querySelector('#username').value;
  let password = document.querySelector('#password').value;

  if (password !== "") {
    if (usernameValidate(username)) {
      let userData = JSON.parse(localStorage.getItem(username));
      let sandi = userData['sandi'];
      let namaLengkap = userData['namaLengkap'];
      if (passwordValidate(password, sandi)) {
        alert('Selamat datang, ' + namaLengkap +'!')
      } else {
        alert('Password yang Anda masukkan salah!')
        event.preventDefault();
      }
    } else {
      alert('Akun ' + username + ' tidak dapat ditemukan!\nSilahkan mendaftarkan akun Anda terlebih dahulu.')
      let answer = confirm('Lanjut ke halaman pendaftaran?');
      if (answer) {
        open('signup.html', '_self');
        event.preventDefault();
      }
    }
  }
})

function usernameValidate(username) {
  return localStorage.getItem(username) !== null;
}

function passwordValidate(password, sandi) {
  return password === sandi;
}