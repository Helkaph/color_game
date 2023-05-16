export function Medium() {
    let body = document.querySelector('body')
    let start = document.querySelector('#start')
    let field = document.querySelector('#field');
    let counter = document.querySelector('#counter')
    let colors = ['red', 'green', 'blue', 'yellow', 'darkmagenta']
    
    for (let i = 0; i < 6; i++) {
        let tr = document.createElement('tr');
        tr.dataset.row = i;
        field.appendChild(tr);;
        for (let j = 0; j < 6; j++) {
            let td = document.createElement('td')
            td.dataset.num = j;
            tr.appendChild(td)
            td.classList.add(colors[getRandomInt(0, 4)]);
        }
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getNextElem(arr, elem) {
        for (let i = 0; i < arr.length; i++) {
            if (elem.getAttribute('class') == arr[i]) {
                if (arr[i] !== 'darkmagenta') {
                    return arr[i + 1]
                } else {
                    return arr[0]
                }
            }
        }
    }
    function changeColor() {
        if (this.parentElement.dataset.row == 0) {
            let elems2 = this.parentElement.nextElementSibling.childNodes;
            this.setAttribute('class', getNextElem(colors, this))
            if (this.previousElementSibling) {
                this.previousElementSibling.setAttribute('class', getNextElem(colors, this.previousElementSibling))
            }
            if (this.nextElementSibling) {
                this.nextElementSibling.setAttribute('class', getNextElem(colors, this.nextElementSibling))
            }
            for (let elem of elems2) {
                if (this.dataset.num == elem.dataset.num) {
                    elem.setAttribute('class', getNextElem(colors, elem))
                }
            }
        }
        if (this.parentElement.dataset.row == 5) {
            let elems1 = this.parentElement.previousElementSibling.childNodes;
            this.setAttribute('class', getNextElem(colors, this))
            if (this.previousElementSibling) {
                this.previousElementSibling.setAttribute('class', getNextElem(colors, this.previousElementSibling))
            }
            if (this.nextElementSibling) {
                this.nextElementSibling.setAttribute('class', getNextElem(colors, this.nextElementSibling))
            }
            for (let elem of elems1) {
                if (this.dataset.num == elem.dataset.num) {
                    elem.setAttribute('class', getNextElem(colors, elem))
                }
            }
        } else if (this.parentElement.dataset.row > 0 && this.parentElement.dataset.row < 5) {
            let elems1 = this.parentElement.previousElementSibling.childNodes;
            let elems2 = this.parentElement.nextElementSibling.childNodes;
            this.setAttribute('class', getNextElem(colors, this))
            if (this.previousElementSibling) {
                this.previousElementSibling.setAttribute('class', getNextElem(colors, this.previousElementSibling))
            }
            if (this.nextElementSibling) {
                this.nextElementSibling.setAttribute('class', getNextElem(colors, this.nextElementSibling))
            }
            for (let elem of elems1) {
                if (this.dataset.num == elem.dataset.num) {
                    elem.setAttribute('class', getNextElem(colors, elem))
                }
            }
            for (let elem of elems2) {
                if (this.dataset.num == elem.dataset.num) {
                    elem.setAttribute('class', getNextElem(colors, elem))
                }
            }
        }
    }
    let tds = field.querySelectorAll('td')
    
    for (let td of tds) {
        td.addEventListener('click', changeColor)
    }
    
    let count = 0;
    let WinCount = 0;

    
    field.addEventListener('click', function checkWin(event) {
        let target = event.target;
        if (target.tagName == 'TD') {
            count++;
            let arr = []
            for (let i = 0; i < tds.length; i++) {
            let elem = tds[i].getAttribute('class');
            
            arr.push(elem)
            }
            let dublicates = arr.filter((number, index, numbers) => {
                return numbers.indexOf(number) !== index
            })
            counter.textContent = "Сделано ходов: " + count;
            if (dublicates.length == 35) {
                alert('Победа. Возвращаемся в основное меню');
                WinCount++
                if(WinCount == 1) {
                    this.innerHTML = ''
                    this.parentElement.classList.remove('medium_mode')
                    start.style.display = 'flex'
                }
                this.removeEventListener('click', checkWin)
                for (let td of tds) {
                    td.removeEventListener('click', changeColor)
                }
                counter.textContent = '';
            }
        }
        
        return WinCount;
    })
    
    /* Кнопка разработчика, проверка на возможность выиграть
    let button = document.createElement('button')
    button.innerHTML = 'Режим отладки'
    button.setAttribute('id', 'dev')
    button.style.background = 'white';
    button.style.position = 'absolute'
    button.style.color = 'black'
    body.appendChild(button)
    button.addEventListener('click', function() {
        for (let i = 0; i < tds.length; i++) {
            if (i !== tds.length - 1) {
                tds[tds.length - 1].setAttribute('class', 'darkmagenta')
                if (i !== tds.length - 2) {
                    tds[tds.length - 2].setAttribute('class', 'darkmagenta')
                    if (i!== tds.length - 7) {
                        tds[i].setAttribute('class', '')
                        tds[i].classList.add('red')
                        tds[tds.length - 7].setAttribute('class', 'darkmagenta')
                    }
                }
            }
        }
    }) */
}
export default Medium