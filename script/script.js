
//Body
document.body.style.display = 'none'

window.onload = function () {
    document.body.style.display = 'block'
}

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
let $icon = document.getElementById('ico-idioma')
let $name = document.getElementById('name-idioma')

$idioma.addEventListener('mouseenter', () => {

    if ($name.innerText == 'Português') {
        $icon.src = 'img/lang/brasil.png'
        $name.innerText = 'Português'

    } else if ($name.innerText == 'Français') {
        $icon.src = 'img/lang/franca.png'
        $name.innerText = 'Français'

    } else if ($name.innerText == 'Español') {
        $icon.src = 'img/lang/espanha.png'
        $name.innerText = 'Español'

    } else {
        $icon.src = 'img/lang/estados-unidos.png'
        $name.innerText = 'English'
    }
})

$idioma.addEventListener('mouseout', () => {
    if ($name.innerText == 'Português') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Português'

    } else if ($name.innerText == 'Français') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Français'

    } else if ($name.innerText == 'Español') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Español'

    } else {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'English'
    }
})

$idioma.addEventListener('click', () => {

    if ($icon.src.includes('brasil.png')) {
        $icon.src = 'img/lang/estados-unidos.png'
        $name.innerText = 'English'

        //Idioma en-US
        document.getElementById('txt1').innerText = 'Hello everyone, I am'
        document.getElementById('txt1').classList.add('mudaidioma')

        document.getElementById('txt2').innerText = 'SAMUEL SOUZA'
        document.getElementById('txt2').classList.add('mudaidioma')

        document.getElementById('txt3').innerText = 'FULL STACK DEVELOPER JR AND SERVICE DESK'
        document.getElementById('txt3').classList.add('mudaidioma')

        document.getElementById('txt4').innerText = 'I am a passionate technology student, dedicated to learning and growing professionally. I am in the second semester of the Software Engineering course at the University of Philadelphia and I currently work as a Service Desk at the Irmandade da Santa Casa de Londrina.'
        document.getElementById('txt4').classList.add('mudaidioma')

        document.getElementById('pfacul').innerText = 'Study:'
        document.getElementById('pfacul').classList.add('mudaidioma')

        document.getElementById('ptxtfacul').innerText = 'Philadelphia University'
        document.getElementById('ptxtfacul').classList.add('mudaidioma')


        document.getElementById('plocal').innerText = 'Location:'
        document.getElementById('plocal').classList.add('mudaidioma')

        document.getElementById('ptxtlocal').innerText = 'Londrina, BR'
        document.getElementById('ptxtlocal').classList.add('mudaidioma')

        document.getElementById('pgmail').innerText = 'Email:'
        document.getElementById('pgmail').classList.add('mudaidioma')

        document.getElementById('ptxtgmail').innerText = 'silva.samueldev@gmail.com'
        document.getElementById('ptxtgmail').classList.add('mudaidioma')

        document.getElementById('ptrofeu').innerText = 'Interests'
        document.getElementById('ptrofeu').classList.add('mudaidioma')

        document.getElementById('ptxttrofeu').innerText = 'Boxe | No Gi | MMA'
        document.getElementById('ptxttrofeu').classList.add('mudaidioma')

        document.getElementById('footertext').innerText = '@Copyright 2024 | Developed by Samuel Souza.'
        document.getElementById('footertext').classList.add('mudaidioma')

        setTimeout(() => {
            document.getElementById('txt1').classList.remove('mudaidioma')
            document.getElementById('txt2').classList.remove('mudaidioma')
            document.getElementById('txt3').classList.remove('mudaidioma')
            document.getElementById('txt4').classList.remove('mudaidioma')
            document.getElementById('pfacul').classList.remove('mudaidioma')
            document.getElementById('ptxtfacul').classList.remove('mudaidioma')
            document.getElementById('plocal').classList.remove('mudaidioma')
            document.getElementById('ptxtlocal').classList.remove('mudaidioma')
            document.getElementById('pgmail').classList.remove('mudaidioma')
            document.getElementById('ptxtgmail').classList.remove('mudaidioma')
            document.getElementById('ptrofeu').classList.remove('mudaidioma')
            document.getElementById('ptxttrofeu').classList.remove('mudaidioma')
            document.getElementById('footertext').classList.remove('mudaidioma')
        }, 2000)

    } else if ($icon.src.includes('estados-unidos.png')) {

        $icon.src = 'img/lang/franca.png'
        $name.innerText = 'Français'

        //Idioma fr-FR
        document.getElementById('txt1').innerText = 'Salut à tous, je m`appelle'
        document.getElementById('txt1').classList.add('mudaidioma')

        document.getElementById('txt2').innerText = 'SAMUEL SOUZA'
        document.getElementById('txt2').classList.add('mudaidioma')

        document.getElementById('txt3').innerText = 'FULL STACK DEVELOPER JR AND SERVICE DESK'
        document.getElementById('txt3').classList.add('mudaidioma')

        document.getElementById('txt4').innerText = 'Je suis un étudiant passionné de technologie, dédié à l`apprentissage et à l`épanouissement professionnel. Je suis au deuxième semestre du cours de génie logiciel à l`Université de Philadelphie et je travaille actuellement comme Service Desk à l`Irmandade da Santa Casa de Londrina.'
        document.getElementById('txt4').classList.add('mudaidioma')

        document.getElementById('pfacul').innerText = 'Études: '
        document.getElementById('pfacul').classList.add('mudaidioma')

        document.getElementById('ptxtfacul').innerText = 'Université de Philadelphie'
        document.getElementById('ptxtfacul').classList.add('mudaidioma')


        document.getElementById('plocal').innerText = 'Emplacement:'
        document.getElementById('plocal').classList.add('mudaidioma')

        document.getElementById('ptxtlocal').innerText = 'Londrina, BR'
        document.getElementById('ptxtlocal').classList.add('mudaidioma')

        document.getElementById('pgmail').innerText = 'E-mail:'
        document.getElementById('pgmail').classList.add('mudaidioma')

        document.getElementById('ptxtgmail').innerText = 'silva.samueldev@gmail.com'
        document.getElementById('ptxtgmail').classList.add('mudaidioma')

        document.getElementById('ptrofeu').innerText = 'Intérêts'
        document.getElementById('ptrofeu').classList.add('mudaidioma')

        document.getElementById('ptxttrofeu').innerText = 'Boxe | No Gi | MMA'
        document.getElementById('ptxttrofeu').classList.add('mudaidioma')

        document.getElementById('footertext').innerText = '@Droit d`auteur 2024 | Développé par Samuel Souza.'
        document.getElementById('footertext').classList.add('mudaidioma')

        setTimeout(() => {
            document.getElementById('txt1').classList.remove('mudaidioma')
            document.getElementById('txt2').classList.remove('mudaidioma')
            document.getElementById('txt3').classList.remove('mudaidioma')
            document.getElementById('txt4').classList.remove('mudaidioma')
            document.getElementById('pfacul').classList.remove('mudaidioma')
            document.getElementById('ptxtfacul').classList.remove('mudaidioma')
            document.getElementById('plocal').classList.remove('mudaidioma')
            document.getElementById('ptxtlocal').classList.remove('mudaidioma')
            document.getElementById('pgmail').classList.remove('mudaidioma')
            document.getElementById('ptxtgmail').classList.remove('mudaidioma')
            document.getElementById('ptrofeu').classList.remove('mudaidioma')
            document.getElementById('ptxttrofeu').classList.remove('mudaidioma')
            document.getElementById('footertext').classList.remove('mudaidioma')
        }, 2000)


    } else if ($icon.src.includes('franca.png')) {

        $icon.src = 'img/lang/espanha.png'
        $name.innerText = 'Español'

        //Idioma es-ES
        document.getElementById('txt1').innerText = 'Hola a todos soy'
        document.getElementById('txt1').classList.add('mudaidioma')

        document.getElementById('txt2').innerText = 'SAMUEL SOUZA'
        document.getElementById('txt2').classList.add('mudaidioma')

        document.getElementById('txt3').innerText = 'FULL STACK DEVELOPER JR AND SERVICE DESK'
        document.getElementById('txt3').classList.add('mudaidioma')

        document.getElementById('txt4').innerText = 'Soy un estudiante apasionado de tecnología, dedicado a aprender y crecer profesionalmente. Estoy en el segundo semestre del curso de Ingeniería de Software en la Universidad de Filadelfia y actualmente trabajo como Service Desk en la Irmandade da Santa Casa de Londrina.'
        document.getElementById('txt4').classList.add('mudaidioma')

        document.getElementById('pfacul').innerText = 'Estudios: '
        document.getElementById('pfacul').classList.add('mudaidioma')

        document.getElementById('ptxtfacul').innerText = 'Universidad de Filadelfia'
        document.getElementById('ptxtfacul').classList.add('mudaidioma')


        document.getElementById('plocal').innerText = 'Ubicación:'
        document.getElementById('plocal').classList.add('mudaidioma')

        document.getElementById('ptxtlocal').innerText = 'Londrina, BR'
        document.getElementById('ptxtlocal').classList.add('mudaidioma')

        document.getElementById('pgmail').innerText = 'Correo electrónico:'
        document.getElementById('pgmail').classList.add('mudaidioma')

        document.getElementById('ptxtgmail').innerText = 'silva.samueldev@gmail.com'
        document.getElementById('ptxtgmail').classList.add('mudaidioma')

        document.getElementById('ptrofeu').innerText = 'Intereses'
        document.getElementById('ptrofeu').classList.add('mudaidioma')

        document.getElementById('ptxttrofeu').innerText = 'Boxe | No Gi | MMA'
        document.getElementById('ptxttrofeu').classList.add('mudaidioma')

        document.getElementById('footertext').innerText = '@Copyright 2024 | Desenvolvido por Samuel Souza.'
        document.getElementById('footertext').classList.add('mudaidioma')

        setTimeout(() => {
            document.getElementById('txt1').classList.remove('mudaidioma')
            document.getElementById('txt2').classList.remove('mudaidioma')
            document.getElementById('txt3').classList.remove('mudaidioma')
            document.getElementById('txt4').classList.remove('mudaidioma')
            document.getElementById('pfacul').classList.remove('mudaidioma')
            document.getElementById('ptxtfacul').classList.remove('mudaidioma')
            document.getElementById('plocal').classList.remove('mudaidioma')
            document.getElementById('ptxtlocal').classList.remove('mudaidioma')
            document.getElementById('pgmail').classList.remove('mudaidioma')
            document.getElementById('ptxtgmail').classList.remove('mudaidioma')
            document.getElementById('ptrofeu').classList.remove('mudaidioma')
            document.getElementById('ptxttrofeu').classList.remove('mudaidioma')
            document.getElementById('footertext').classList.remove('mudaidioma')
        }, 2000)

    } else {
        $icon.src = 'img/lang/brasil.png'
        $name.innerText = 'Português'

        //Idioma pt-BR
        document.getElementById('txt1').innerText = 'Olá, meu nome é'
        document.getElementById('txt1').classList.add('mudaidioma')

        document.getElementById('txt2').innerText = 'SAMUEL SOUZA'
        document.getElementById('txt2').classList.add('mudaidioma')

        document.getElementById('txt3').innerText = 'DESENVOLVEDOR FULL STACK JR E SERVICE DESK'
        document.getElementById('txt3').classList.add('mudaidioma')

        document.getElementById('txt4').innerText = 'Sou um estudante de tecnologia apaixonado, dedicado a aprender e crescer profissionalmente.Estou no segundo semestre do curso de Engenharia de Software da Universidade de Filadélfia e atualmente trabalho como Service Desk na Irmandade da Santa Casa de Londrina.'
        document.getElementById('txt4').classList.add('mudaidioma')

        document.getElementById('pfacul').innerText = 'Estudos: '
        document.getElementById('pfacul').classList.add('mudaidioma')

        document.getElementById('ptxtfacul').innerText = 'Universidade Filadelfia'
        document.getElementById('ptxtfacul').classList.add('mudaidioma')


        document.getElementById('plocal').innerText = 'Localização:'
        document.getElementById('plocal').classList.add('mudaidioma')

        document.getElementById('ptxtlocal').innerText = 'Londrina, BR'
        document.getElementById('ptxtlocal').classList.add('mudaidioma')

        document.getElementById('pgmail').innerText = 'Email:'
        document.getElementById('pgmail').classList.add('mudaidioma')

        document.getElementById('ptxtgmail').innerText = 'silva.samueldev@gmail.com'
        document.getElementById('ptxtgmail').classList.add('mudaidioma')

        document.getElementById('ptrofeu').innerText = 'Interesses'
        document.getElementById('ptrofeu').classList.add('mudaidioma')

        document.getElementById('ptxttrofeu').innerText = 'Boxe | No Gi | MMA'
        document.getElementById('ptxttrofeu').classList.add('mudaidioma')

        document.getElementById('footertext').innerText = '@Derechos de autor 2024 | Desenvolvido por Samuel Souza.'
        document.getElementById('footertext').classList.add('mudaidioma')

        setTimeout(() => {
            document.getElementById('txt1').classList.remove('mudaidioma')
            document.getElementById('txt2').classList.remove('mudaidioma')
            document.getElementById('txt3').classList.remove('mudaidioma')
            document.getElementById('txt4').classList.remove('mudaidioma')
            document.getElementById('pfacul').classList.remove('mudaidioma')
            document.getElementById('ptxtfacul').classList.remove('mudaidioma')
            document.getElementById('ptxtlocal').classList.remove('mudaidioma')
            document.getElementById('pgmail').classList.remove('mudaidioma')
            document.getElementById('ptxtgmail').classList.remove('mudaidioma')
            document.getElementById('ptrofeu').classList.remove('mudaidioma')
            document.getElementById('ptxttrofeu').classList.remove('mudaidioma')
            document.getElementById('footertext').classList.remove('mudaidioma')
        }, 2000)

    }
})

$icon.addEventListener('mouseout', () => {
    if ($name.innerText == 'Português') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Português'

    } else if ($name.innerText == 'Français') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Français'

    } else if ($name.innerText == 'Español') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Español'

    } else {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'English'
    }
})

$icon.addEventListener('mouseenter', () => {

    if ($name.innerText == 'Português') {
        $icon.src = 'img/lang/brasil.png'
        $name.innerText = 'Português'

    } else if ($name.innerText == 'Français') {
        $icon.src = 'img/lang/franca.png'
        $name.innerText = 'Français'

    } else if ($name.innerText == 'Español') {
        $icon.src = 'img/lang/espanha.png'
        $name.innerText = 'Español'

    } else {
        $icon.src = 'img/lang/estados-unidos.png'
        $name.innerText = 'English'
    }
})

$name.addEventListener('mouseout', () => {
    if ($name.innerText == 'Português') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Português'

    } else if ($name.innerText == 'Français') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Français'

    } else if ($name.innerText == 'Español') {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'Español'

    } else {
        $icon.src = 'img/lang/no-mundo-todo.png'
        $name.innerText = 'English'
    }
})

$name.addEventListener('mouseenter', () => {

    if ($name.innerText == 'Português') {
        $icon.src = 'img/lang/brasil.png'
        $name.innerText = 'Português'

    } else if ($name.innerText == 'Français') {
        $icon.src = 'img/lang/franca.png'
        $name.innerText = 'Français'

    } else if ($name.innerText == 'Español') {
        $icon.src = 'img/lang/espanha.png'
        $name.innerText = 'Español'

    } else {
        $icon.src = 'img/lang/estados-unidos.png'
        $name.innerText = 'English'
    }
})