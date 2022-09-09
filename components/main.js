import Tree from './tree.js'

const menu = [
    { id : 1, name: "Entre em contato", parent: null },
    { id: 2, name: '<a href="https://api.whatsapp.com/send?phone=556499058575" target="_blank">Maike <img src="../assects/contat.png" width="30px" class="border-15"></a><hr>', parent: 1 },
    { id: 3, name: '<a href="https://api.whatsapp.com/send?phone=556499750061" target="_blank">Penha <img src="../assects/contat.png" width="30px" class="border-15"></a>', parent: 1 }
]

Tree(menu)