const oNav = document.querySelector('#main')
const changePoint = oNav.offsetTop
const oLog = document.querySelector('#logo')

function watchNav() {
    if (window.scrollY >= changePoint) {
        oNav.className = 'fixed-nav'
        oLog.style['max-width'] = '200px'
    } else {
        oNav.className = ''
        oLog.style['max-width'] = '0'
    }
}

window.addEventListener('scroll', watchNav)