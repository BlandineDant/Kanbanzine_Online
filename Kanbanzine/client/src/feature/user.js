
window.onload = () => {
    var username1 = "Admin_A";
    var username2 = "Admin_B";
    var username3 = "Admin_E";
    var username4 = "Admin_M";

    var basicUsername = "basicUsername";

    var password1 = "bigboss_A";
    var password2 = "bigboss_B";
    var password3 = "bigboss_E";
    var password4 = "bigboss_M";

    var basicPassword = "basicPlayer";

    var inputUsername = document.getElementById('username');
    var inputPassword = document.getElementById('password1');
    var login = document.getElementById('logIn');
    var form = document.getElementById('signinForm');

    var facilitateurGuide = document.getElementById('facilitateurGuide');
    var facilitateurMemo = document.getElementById('facilitateurMemo');
    var menuHrMark = document.getElementById('menuHrMark');
    var downloadFiles = document.getElementById('downloadFiles');
    var createNewGameSession = document.getElementById('createNewGameSession');
    var addNewPlayers = document.getElementById('addNewPlayers');

    var welcome;
    const users = [];

    form.onsubmit = function () {
        return false;
    };

    function authentification() {
        this.sessionStorage.setItem("username", inputUsername.value);
        this.sessionStorage.setItem("password", inputPassword.value);

        console.log("Connexion au compte réussie !");
        form.onsubmit = () => { return 1 }

        $(document).ready(function () {
            $('#exampleModalToggle').modal('hide');
        })
    }

    /**
     * Ci-dessous le traitement qui vérifie les valeurs transmises par l'utilisateur dans les champs du formulaire d'authentification.
     * En fonction de ces valeurs, l'accès est donné à l'utilisateur ou non + ajustement de l'affichage de l'IHM en fonction du profil
     */
    login.onclick = () => {
        if ((inputUsername.value != "") && (inputPassword.value != "")) {
            if (((inputUsername.value == username1) && (inputPassword.value == password1))
                || ((inputUsername.value == username2) && (inputPassword.value == password2))
                || ((inputUsername.value == username3) && (inputPassword.value == password3))
                || ((inputUsername.value == username4) && (inputPassword.value == password4))) {
                    
                    var id = Math.floor(Math.random() * 100000000000) + 100000; 
                    var username = sessionStorage.getItem('username');
                    const users = [];
                    const user = { id, username };
                    users.push(user);

                    //console.log("Tableau profils : " + users);
                    status = 'admin';
                    this.sessionStorage.setItem("status", status);
                    welcome = 0;
                    authentification();

                /**
                * Fait apparaître le toast bootstrap de bienvenue
                */
                $(document).ready(function () {
                    $(".toast").toast('show');
                    document.getElementById("welcomeNameMessage").innerHTML = sessionStorage.getItem('username');
                });

                welcome++;

                /*let date = new Date(Date.now() + 86400000); //86400000ms = 1 jour
                date = date.toUTCString();*/

                //Crée ou met à jour un cookie 'username'
                //document.cookie = "username="+inputUsername.value+"; password="+inputPassword.value+"; path=/; expires=" + date;

                //document.cookie = "username="+inputUsername.value;
                //document.cookie = "password="+inputPassword.value;

                facilitateurGuide.style.display = "inline";
                facilitateurMemo.style.display = "inline";
                menuHrMark.style.display = "inline";
                downloadFiles.style.display = "inline";
                createNewGameSession.style.display = "inline";
                addNewPlayers.style.display = "inline";

            } else if (((inputUsername.value == basicUsername) && (inputPassword.value == basicPassword))) {

                status = 'standard';
                this.sessionStorage.setItem("status", status);
                welcome = 0;
                authentification();

                /**
                * Fait apparaître le toast bootstrap de bienvenue
                */
                $(document).ready(function () {
                    $(".toast").toast('show');
                    document.getElementById("welcomeNameMessage").innerHTML = sessionStorage.getItem('username');
                });

                welcome++;

            } else {
                if ((inputUsername.value != username1)
                    || (inputUsername.value != username2)
                    || (inputUsername.value != username3)
                    || (inputUsername.value != username4)
                    || (inputUsername.value != basicUsername)) {
                    console.log("Pseudo inexact !");
                    inputUsername.nextElementSibling.textContent = "Pseudo inexact";
                    inputUsername.nextElementSibling.style.color = "#B20005";
                    setTimeout(() => {
                        inputUsername.nextElementSibling.textContent = "";
                    }, 2000);
                }

                if ((inputPassword.value != password1)
                    || (inputPassword.value != password2)
                    || (inputPassword.value != password3)
                    || (inputPassword.value != password4)
                    || (inputPassword.value != basicPassword)) {
                    console.log("Mot de passe inexact !");
                    inputPassword.nextElementSibling.textContent = "Mot de passe inexact";
                    inputPassword.nextElementSibling.style.color = "#B20005";
                    setTimeout(() => {
                        inputPassword.nextElementSibling.textContent = "";
                    }, 2000);
                }
            }
        } else {
            if (inputUsername.value == "") {
                console.log("Aucun pseudo n'a été saisi !");
                inputUsername.nextElementSibling.textContent = "Pseudo manquant";
                inputUsername.nextElementSibling.style.color = "#B20005";
                setTimeout(() => {
                    inputUsername.nextElementSibling.textContent = "";
                }, 2000);
            }

            if (inputPassword.value == "") {
                console.log("Aucun mot de passe n'a été saisi !");
                inputPassword.nextElementSibling.textContent = "Mot de passe manquant";
                inputPassword.nextElementSibling.style.color = "#B20005";
                setTimeout(() => {
                    inputPassword.nextElementSibling.textContent = "";
                }, 2000);
            }
        }
    }


    /**
     * Ci-dessous le traitement qui permet de gérer l'affichage de l'IHM en fonction des profils de connexion de chaque utilisateur.
     */
    if (((this.sessionStorage.getItem('username') != '') && (this.sessionStorage.getItem('password') != ''))) {
        if (((this.sessionStorage.getItem('username') === username1) && (this.sessionStorage.getItem('password') === password1))
            || ((this.sessionStorage.getItem('username') === username2) && (this.sessionStorage.getItem('password') === password2))
            || ((this.sessionStorage.getItem('username') === username3) && (this.sessionStorage.getItem('password') === password3))
            || ((this.sessionStorage.getItem('username') === username4) && (this.sessionStorage.getItem('password') === password4))) {

            facilitateurGuide.style.display = "inline";
            facilitateurMemo.style.display = "inline";
            menuHrMark.style.display = "inline";
            downloadFiles.style.display = "inline";
            createNewGameSession.style.display = "inline";
            addNewPlayers.style.display = "inline";

            if (welcome != 0) {
                /**
                * Dissimule le toast bootstrap de bienvenue
                */
                $(document).ready(function () {
                    $(".toast").toast('hide');
                });
            }

        } else if (((this.sessionStorage.getItem('username') === basicUsername) && (this.sessionStorage.getItem('password') === basicPassword))) {

            if (welcome === 0) {
                /**
                * Affiche le toast bootstrap de bienvenue
                */
                $(document).ready(function () {
                    $(".toast").toast('show');
                    document.getElementById("welcomeNameMessage").innerHTML = sessionStorage.getItem('username');
                });

            } else {

                /**
                 * Dissimule le formulaire d'authentification
                 */
                $(document).ready(function () {
                    $('#exampleModalToggle').modal('hide');
                });

                /**
                * Dissimule le toast bootstrap de bienvenue
                */
                $(document).ready(function () {
                    $(".toast").toast('hide');
                });
            }
        } else {
            /**
             * Affiche le formulaire d'authentification
             */
            $(document).ready(function () {
                $('#exampleModalToggle').modal('show');
            });
        }

    } else {
        /**
         * Affiche le formulaire d'authentification
         */
        $(document).ready(function () {
            $('#exampleModalToggle').modal('show');
        });
    }

}

