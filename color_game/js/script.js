import { Easy } from './easy.js'
import { Medium } from './medium.js'
import { Hard } from './hard.js'

let start = document.querySelector('#start');
let easy_mode = document.querySelector("#easy_mode");
let medium_mode = document.querySelector('#medium_mode');
let hard_mode = document.querySelector('#hard_mode');
let game_board = document.querySelector('#game_board');

easy_mode.addEventListener('click', function() {
    start.style.display = 'none'
    Easy();
    game_board.classList.add('easy_mode')
});
medium_mode.addEventListener('click', function() {
    start.style.display = 'none'
    Medium();
    game_board.classList.add('medium_mode')

});
hard_mode.addEventListener('click', function() {
    start.style.display = 'none'
    Hard();
    game_board.classList.add('hard_mode')

});
