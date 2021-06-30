/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Comment : ... */
const buttonLogoutElement = document.querySelector('#buttonLogout');

buttonLogoutElement.addEventListener('click', function() {
    /* Menampilkan halaman login halaman login atau index.html*/
    goToLogin();
});
