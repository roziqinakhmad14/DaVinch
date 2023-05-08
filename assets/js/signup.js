function checkForStorage() {
  return typeof(Storage) !== 'undefined';
}

let signup = document.querySelector('#signup');

signup.addEventListener('click', function(event) {
  let fullname = document.querySelector('#fullname').value;
  let username = document.querySelector('#username').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let address = document.querySelector('#address').value;
  let password = document.querySelector('#password').value;
  let packageChoosed = document.querySelector('#packageChoosed').value;

  if (fullname !== "" && username !== "" && email !== "" && phone !== "" && address !== "" && password !== "") {
    let userData = {
      namaLengkap: fullname,
      namaPengguna: username,
      eMail: email,
      nomorTelepon: phone,
      alamat: address,
      sandi: password,
      paketDipilih: packageChoosed
    }
  
    localStorage.setItem(username, JSON.stringify(userData));

    alert('Selamat, akun Anda telah terdaftarkan!\n')
    alert('Selamat datang, ' + fullname + '!');
  }
})