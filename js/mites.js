function daystillfire() {
    var today = new Date();
    var fire = new Date(2018, 2, 9);

    document.write(Math.floor((fire - today) / 1000 / 60 / 60 / 24));
}
