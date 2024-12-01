
//Body
document.body.style.display = 'none'

window.onload = function () {
    document.body.style.display = 'block'
}

//Txts
// var txts = document.getElementById('txts')
// var foto = document.getElementById('foto')
// foto.addEventListener('mouseenter', blur)
// function blur() {
//     txts.style.filter = 'blur(3px)'
// }
// foto.addEventListener('mouseout', noblur)
// function noblur() {
//     txts.style.filter = 'blur(0)'
// }


//Logo
var logo = document.getElementById('logo');
logo.addEventListener('mouseenter', mudarLogo);
logo.addEventListener('mouseout', voltaLogo);

function mudarLogo() {
    logo.src = 'img/s.png'
};

function voltaLogo() {
    logo.src = 'img/sw.png'
};

//Twitch
var twitch = document.getElementById('icontwitch');
twitch.addEventListener('mouseenter', mudartwitch);
twitch.addEventListener('mouseout', voltatwitch);

function mudartwitch() {
    twitch.src = 'img/twitch/twitch2.png'
};

function voltatwitch() {
    twitch.src = 'img/twitch/twitch.png'
};

var twitch2 = document.getElementById('twitch2')
twitch2.addEventListener('mouseenter', mudartwitch2)
twitch2.addEventListener('mouseout', voltatwitch2)

function mudartwitch2() {
    twitch2.src = 'img/twitch/twitch4.png'
};

function voltatwitch2() {
    twitch2.src = 'img/twitch/twitch3.png'
};

//Github
var github = document.getElementById('icongithub');
github.addEventListener('mouseenter', mudargithub);
github.addEventListener('mouseout', voltagithub);

function mudargithub() {
    github.src = 'img/github/github2.png'
};

function voltagithub() {
    github.src = 'img/github/github.png'
};

var github2 = document.getElementById('github2')
github2.addEventListener('mouseenter', mudargithub2)
github2.addEventListener('mouseout', voltagithub2)

function mudargithub2() {
    github2.src = 'img/github/github4.png'
};

function voltagithub2() {
    github2.src = 'img/github/github3.png'
};

//Linkedin
var linkedin = document.getElementById('iconlinkedin');
linkedin.addEventListener('mouseenter', mudarlinkedin)
linkedin.addEventListener('mouseout', voltalinkedin)

function mudarlinkedin() {
    linkedin.src = 'img/linkedin/linkedin2.png'
};

function voltalinkedin() {
    linkedin.src = 'img/linkedin/linkedin.png'
};


var linkedin2 = document.getElementById('linkedin2')
linkedin2.addEventListener('mouseenter', mudarlinkedin2)
linkedin2.addEventListener('mouseout', voltalinkedin2)

function mudarlinkedin2() {
    linkedin2.src = 'img/linkedin/linkedin4.png'
};

function voltalinkedin2() {
    linkedin2.src = 'img/linkedin/linkedin3.png'
};


//Youtube
var youtube = document.getElementById('iconyoutube');
youtube.addEventListener('mouseenter', mudaryoutube)
youtube.addEventListener('mouseout', voltayoutube)

function mudaryoutube() {
    youtube.src = 'img/youtube/youtube2.png'
};

function voltayoutube() {
    youtube.src = 'img/youtube/youtube.png'
};

var youtube2 = document.getElementById('youtube2')
youtube2.addEventListener('mouseenter', mudaryoutube2)
youtube2.addEventListener('mouseout', voltayoutube2)

function mudaryoutube2() {
    youtube2.src = 'img/youtube/youtube4.png'
};

function voltayoutube2() {
    youtube2.src = 'img/youtube/youtube3.png'
};

//Instagram
var instagram = document.getElementById('iconinstagram');
instagram.addEventListener('mouseenter', mudarinstagram)
instagram.addEventListener('mouseout', voltainstagram)

function mudarinstagram() {
    instagram.src = 'img/instagram/instagram2.png'
};

function voltainstagram() {
    instagram.src = 'img/instagram/instagram.png'
};

var instagram2 = document.getElementById('instgram2')
instagram2.addEventListener('mouseenter', mudarinstagram2)
instagram2.addEventListener('mouseout', voltainstagram2)

function mudarinstagram2() {
    instagram2.src = 'img/instagram/instagram4.png'
};

function voltainstagram2() {
    instagram2.src = 'img/instagram/instagram3.png'
};


//Facul
var lfacul = document.getElementById('lfacul')
lfacul.addEventListener('mouseenter', mudafacul)
var facul = document.getElementById('facul')
lfacul.addEventListener('mouseout', voltafaul)
var pfacul = document.getElementById('pfacul')
pfacul.addEventListener('mouseenter', mudafacul)
pfacul.addEventListener('mouseout', voltafaul)
facul.addEventListener('mouseenter', mudafacul)
facul.addEventListener('mouseout', voltafaul)

lfacul.addEventListener('click', (e) => {
    e.preventDefault()
})

function mudafacul() {
    facul.src = 'img/outros/capelo2.png'
}

function voltafaul() {
    facul.src = 'img/outros/capelo.png'
}

//Ptxt Facul
var ptxtfacul = document.getElementById('ptxtfacul')
ptxtfacul.addEventListener('mouseenter', function activelogo() {
    facul.src = 'img/outros/capelo2.png'
})

//Local
var llocal = document.getElementById('llocal')
llocal.addEventListener('mouseenter', mudalocal)
var local = document.getElementById('local')
llocal.addEventListener('mouseout', voltalocal)
local.addEventListener('mouseenter', mudalocal)
local.addEventListener('mouseout', voltalocal)
var plocal = document.getElementById('plocal')
plocal.addEventListener('mouseenter', mudalocal)
plocal.addEventListener('mouseout', voltalocal)

llocal.addEventListener('click', (e) => {
    e.preventDefault()
})

function mudalocal() {
    local.src = 'img/outros/local2.png'
}

function voltalocal() {
    local.src = 'img/outros/local.png'
}

// Ptxt Local
var ptxtlocal = document.getElementById('ptxtlocal')
ptxtlocal.addEventListener('mouseenter', function activelocal() {
    local.src = 'img/outros/local2.png'
})


//Gmail
var lgmail = document.getElementById('lgmail')
lgmail.addEventListener('mouseenter', mudagmail)
lgmail.addEventListener('mouseout', voltagmail)
var gmail = document.getElementById('gmail')
gmail.addEventListener('mouseenter', mudagmail)
gmail.addEventListener('mouseout', voltagmail)
var pgmail = document.getElementById('pgmail')
pgmail.addEventListener('mouseenter', mudagmail)
pgmail.addEventListener('mouseout', voltagmail)
var ptxtgmail = document.getElementById('ptxtgmail')

lgmail.addEventListener('click', (e) => {
    e.preventDefault()
})

function mudagmail() {
    gmail.src = 'img/outros/email2.png'
}

function voltagmail() {
    gmail.src = 'img/outros/email.png'
}

//Ptxt Gmail
ptxtgmail.addEventListener('mouseenter', function activegmail() {
    gmail.src = 'img/outros/email2.png'
})

//Trofeu
var ltrofeu = document.getElementById('ltrofeu')
ltrofeu.addEventListener('mouseenter', mudatrofeu)
var trofeu = document.getElementById('trofeu')
ltrofeu.addEventListener('mouseout', voltatrofeu)
trofeu.addEventListener('mouseenter', mudatrofeu)
trofeu.addEventListener('mouseout', voltatrofeu)
var ptrofeu = document.getElementById('ptrofeu')
ptrofeu.addEventListener('mouseenter', mudatrofeu)
ptrofeu.addEventListener('mouseout', voltatrofeu)

ltrofeu.addEventListener('click', (e) => {
    e.preventDefault()
})

function mudatrofeu() {
    trofeu.src = 'img/outros/trofeu2.png'
}

function voltatrofeu() {
    trofeu.src = 'img/outros/trofeu.png'
}

var ptxttrofeu = document.getElementById('ptxttrofeu')
ptxttrofeu.addEventListener('mouseenter', function activetrofeu() {
    trofeu.src = 'img/outros/trofeu2.png'
})

let $idioma = document.getElementById('idioma')
let $lang = document.getElementById('lang')
let $icon = document.getElementById('ico-lang')
let $name = document.getElementById('name-lang')

$lang.addEventListener('click', () => {

    $lang.classList.add('anima')

    if ($icon.src.includes('brasil.png')) {
        $icon.src = 'img/lang/estados-unidos.png'
        $name.innerText = 'English'
    } else if ($icon.src.includes('estados-unidos.png')) {
        $icon.src = 'img/lang/franca.png'
        $name.innerText = 'Français'
    } else {
        $icon.src = 'img/lang/brasil.png'
        $name.innerText = 'Português'
    }

    setTimeout(() => {
        $lang.classList.remove('anima')

    }, 200)

})