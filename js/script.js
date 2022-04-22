var $ = document;

function _id(id_name) {
    return $.getElementById(id_name)
}
function _class(class_name) {
    return $.getElementsByClassName(class_name)
}

var players = $.querySelectorAll('.fa-play')

players.forEach(item => {
    item.addEventListener('click', () => {
        let musicName = item.dataset.name;

        for(var i = 0 ; i < players.length ; i++) {
            if(players[i].nextElementSibling.dataset.name == musicName){
                players[i].nextElementSibling.play()
            }else {
                players[i].nextElementSibling.pause()
            }
        }
    })
})