import '../css/style.css';
import sveLogo from '../public/assets/SVE-logo.ico';

var homeImg = document.getElementById('logo');
homeImg.src = sveLogo;

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
