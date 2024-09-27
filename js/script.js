function fundinho () {
    document.getElementById('fundo').style.height = window.innerHeight - 96 + 'px';
}
addEventListener('load', fundinho());
addEventListener('resize', fundinho());