
/**
* Fonction de déconnexion 
*/

function logOut() {
    sessionStorage.clear();
    //sessionStorage.removeItem('itemName');

    //document.cookie = 'username=';
    //document.cookie = 'password=';

    //sessionStorage.removeItem('username');
    //sessionStorage.removeItem('password');

    //Supprime le cookie en lui passant une date d'expiration passée
    //document.cookie = 'username=; password=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';

    /*location.reload();
    return false;*/
    window.location.reload(false);

}