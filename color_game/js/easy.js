export function Easy() {
    let body = document.querySelector('body')
    let start = document.querySelector('#start')
    let field = document.querySelector('#field');
    let counter = document.querySelector('#counter');
    let colors = ['red', 'green', 'blue'];
    
    
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        field.appendChild(tr);;
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td')
            tr.appendChild(td)
            td.classList.add(colors[getRandomInt(0, 2)]);
        }
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getNextElem(arr, elem) {
        for (let i = 0; i < arr.length; i++) {
            if (elem.getAttribute('class') == arr[i]) {
                if (arr[i] !== 'blue') {
                    return arr[i + 1]
                } else {
                    return arr[0]
                }
            }
        }
    }
    function changeColor() {
        this.setAttribute('class', getNextElem(colors, this))
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
            if (dublicates.length == 8) {
                alert('Победа. Возвращаемся в основное меню');
                WinCount++
                if(WinCount == 1) {
                    this.innerHTML = ''
                    this.parentElement.classList.remove('easy_mode')
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
        for (let td of tds) {
            td.setAttribute
        }
    }) */
}
export default Easy