// 1 
const hello1 = () => {
        return ('Привет, JavaScript!' + '<br>')
    }
    //document.write(hello1())

// 2
const hello2 = () => {
        let name = prompt('Введите Ваше имя: ')
        if (name) {
            return ('Привет, ' + name + '! <br>')
        } else return ('Привет, гость! <br>')
    }
    //document.write(hello2())

// 3
const mul = (n, m) => {
        return n * m
    }
    //let n = prompt('Введите первое число: ')
    //let m = prompt('Введите второе число: ')
    //document.write(mul(n, m))

// 4 
const repeat = (str = ' ', n = 2) => {
        let i = 0
        let s = ''
        while (i < n) {
            s += str
            i++
        }
        return s
    }
    //document.write(repeat('Привет', 5))

// 5
const rgb = (a, b, c) => {
        if (!a) {
            a = 0
        }
        if (!b) {
            b = 0
        }
        if (!c) {
            c = 0
        }
        return ('rgb(' + a + ',' + b + ',' + c + ')')
    }
    //let a = prompt('Введите первое значение: ')
    //let b = prompt('Введите второе значение: ')
    //let c = prompt('Введите третье значение: ')
    //document.write(rgb(a, b, c))

// 6
const avg = (...arg) => {
        let args = arg
        let sum = 0
        for (let i = 0; i < args.length; i++) {
            let t = typeof args[i]
            if (t != 'number') {
                return ('Вы ввели не число. Попробуйте снова')
            }
            sum += args[i]
        }
        return sum / args.length
    }
    //document.write(avg(1, 3, 4))

// 7
const m = (a, b) => {
        return mul(a, b)
    }
    //document.write(m(4, 5))

const log = (a) => {
        return console.log(a)
    }
    //log(50)

// 8
const operation = (m, n, o) => {
        return o(m, n)
    }
    //document.write(operation(4, 5, mul))

// 9
const addN = n => {
        return function(m) {
            return n + m
        }
    }
    //document.write(addN(5)(5))

// 10
const words = (n) => {
    let m = n % 100
    if (m >= 5 && m <= 20) {
        return (n + ' товаров')
    } else {
        m = m % 10
        if (m === 1) {
            return (n + ' товар')
        }
        if (m >= 2 && m <= 4) {
            return (n + ' товара')
        } else return (n + ' товаров')
    }
}
document.write(words(0))