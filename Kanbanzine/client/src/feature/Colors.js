class Colors {

    constructor(username) {
      this.username = username;
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getUsernameColor(username) {

        if(username === "Admin_A"){
            var color = '#F28336';
        } else if(username === "Admin_B") {
            var color = '#F23E36';
        } else if(username === "Admin_E") {
            var color = '#4877CA';
        } else if(username === "Admin_M") {
            var color = '#B648CA';
        } else {
            var color = this.getRandomColor();
        }
        return color;
    }

    setRandomColor(username) {
        $(".usernameChat").css("color", this.getUsernameColor(username));
    }
    
}
