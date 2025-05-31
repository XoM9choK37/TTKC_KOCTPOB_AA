/// Accordion-Menu
let acc = document.getElementsByClassName("accordion")
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        let panel = this.nextElementSibling
        if (panel.style.display === "block")
            panel.style.display = "none"
        else
            panel.style.display = "block"
    })
}

/// Date-Time
setInterval(() => {
    let dateTime = new Date()
    let dayOfWeek = dateTime.getDay().toString()
    let year = dateTime.getFullYear().toString()
    let dayOfMonth = dateTime.getDate().toString()
    let month = (dateTime.getMonth() + 1).toString()
    switch (dayOfWeek) {
        case "1": { dayOfWeek = "Понедельник"; break }
        case "2": { dayOfWeek = "Вторник"; break }
        case "3": { dayOfWeek = "Среда"; break }
        case "4": { dayOfWeek = "Четверг"; break }
        case "5": { dayOfWeek = "Пятница"; break }
        case "6": { dayOfWeek = "Суббота"; break }
        case "0": { dayOfWeek = "Воскресенье"; break }
    }
    if (dayOfMonth.length == 1)
        dayOfMonth = "0" + dayOfMonth
    if (month.length == 1)
        month = "0" + month
    let hours = dateTime.getHours().toString()
    let minutes = dateTime.getMinutes().toString()
    let seconds = dateTime.getSeconds().toString()
    if (hours.length == 1)
        hours = "0" + hours
    if (minutes.length == 1)
        minutes = "0" + minutes
    if (seconds.length == 1)
        seconds = "0" + seconds
    document.getElementById("date-time").innerText =
    dayOfWeek + ", " + year + "-" + dayOfMonth + "-" +
    month + " " + hours + ":" + minutes + ":" + seconds
}, 1000)

/// Calendar
let calendar = document.getElementById("calendar")
let dateTime = new Date()
let year = dateTime.getFullYear().toString()
let monthNumber = dateTime.getMonth()
let month = dateTime.getMonth().toString()
let day = dateTime.getDate()
switch (month) {
    case "0": { month = "Январь"; break }
    case "1": { month = "Февраль"; break }
    case "2": { month = "Март"; break }
    case "3": { month = "Апрель"; break }
    case "4": { month = "Май"; break }
    case "5": { month = "Июнь"; break }
    case "6": { month = "Июль"; break }
    case "7": { month = "Август"; break }
    case "8": { month = "Сентябрь"; break }
    case "9": { month = "Октябрь"; break }
    case "10": { month = "Ноябрь"; break }
    case "11": { month = "Декабрь"; break }
}
let header = month + ", " + year
let panelCalendarHeader = document.getElementById("panel-calendar-header")
panelCalendarHeader.innerHTML = header
let days = '<tr style="background-color: black; color: white"><td>ПН</td><td>ВТ</td>' +
    "<td>СР</td><td>ЧТ</td><td>ПТ</td>" +
    '<td style="background-color: red">СБ</td>' +
    '<td style="background-color: red">ВС</td></tr>'
calendar.innerHTML += days
dateTime.setDate(1)
let start = dateTime.getDay()
dateTime.setDate(2 - start)
for (let i = 0; i < 6; i++) {
    let line = "<tr>"
    for (let j = 1; j <= 7; j++, dateTime.setDate(dateTime.getDate() + 1))
        if (dateTime.getMonth() == monthNumber) {
            if (dateTime.getDate() == day) {
                if (j != 6 && j != 7)
                    line += '<td style="background-color: rgb(255, 194, 209)">' +
                        dateTime.getDate() +
                        "</td>"
                else
                    line += '<td style="background-color: rgb(255, 194, 209); ' +
                        'color: red">' +
                        dateTime.getDate() +
                        "</td>"
            } else {
                if (j != 6 && j != 7)
                    line += '<td style="background-color: white">' +
                        dateTime.getDate() +
                        "</td>"
                else
                    line += '<td style="background-color: white; color: red">' +
                        dateTime.getDate() +
                        "</td>"
            }
        } else {
            if (j != 6 && j != 7)
                line += '<td style="background-color: white; ' +
                    'color: rgb(255, 179, 198)">' +
                    dateTime.getDate() +
                    "</td>"
            else
                line += '<td style="background-color: white; ' +
                    'color: rgb(255, 179, 198)">' +
                    dateTime.getDate() +
                    "</td>"
        }
    line += "</tr>"
    calendar.innerHTML += line
}

/// DOM Search
let domArray = document.body.childNodes
let spaceNodesCount = 0;
for (let i = 0; i < domArray.length; i++) {
    let nodeText = domArray[i].textContent;
    while (nodeText.includes("  "))
        nodeText = nodeText.replace("  ", " ")
    while (nodeText.includes("\n "))
        nodeText = nodeText.replace("\n ", "\n")
    while (nodeText.includes(" \n"))
        nodeText = nodeText.replace(" \n", "\n")
    for (let j = 0; j < nodeText.length; j++)
        if (nodeText[j] == ' ' ||
            nodeText[j] == '\n')
            spaceNodesCount++
}
let domSearch = document.getElementById("panel-search")
domSearch.innerHTML += "Количество пробельных узлов: " +
    spaceNodesCount

/// Random Change
let blocks = document.getElementsByClassName("block")
let cdArray = new Array()
for (let i = 0; i < blocks.length; i++) {
    cdArray.push(false)
    blocks[i].onclick = () => {
        if (!cdArray[i]) {
            let startTime = Date.now()
            let timer = setInterval(() => {
                cdArray[i] = true
                let timePassed = Date.now() - startTime
                if (timePassed > 5000) {
                    blocks[i].style.transform =
                        `rotate(0deg) scale(1)`
                    clearInterval(timer)
                    cdArray[i] = false
                    return
                }
                let rotateValue = 0.09 * timePassed
                if (rotateValue > 180)
                    rotateValue = 180
                let scaleValue = 1 + 0.00025 * timePassed
                if (scaleValue > 1.5)
                    scaleValue = 1.5
                blocks[i].style.transform =
                    `rotate(${rotateValue}deg) ` +
                    `scale(${scaleValue})`
            }, 50)
        }
    }
}

/// DOM Insert/Delete
let maxNumber = 3
let maxPointNumbers = new Array()
maxPointNumbers.push(0)
maxPointNumbers.push(3)
maxPointNumbers.push(3)
maxPointNumbers.push(3)
let startText = '<li id="li-1">Пункт 1<ul>' +
    '<li id="li-1-1">Подпункт 1.1</li>' +
    '<button id="rm-1-1">❌ Удалить подпункт</button>' + 
    '<li id="li-1-2">Подпункт 1.2</li>' +
    '<button id="rm-1-2">❌ Удалить подпункт</button>' +
    '<li id="li-1-3">Подпункт 1.3</li>' +
    '<button id="rm-1-3">❌ Удалить подпункт</button>' +
    '</ul></li>' +
    '<button id="add-1">➕ Добавить подпункт</button>' +
    '<button id="rm-1">❌ Удалить пункт</button>' +
    '<li id="li-2">Пункт 2<ul>' +
    '<li id="li-2-1">Подпункт 2.1</li>' +
    '<button id="rm-2-1">❌ Удалить подпункт</button>' +
    '<li id="li-2-2">Подпункт 2.2</li>' +
    '<button id="rm-2-2">❌ Удалить подпункт</button>' +
    '<li id="li-2-3">Подпункт 2.3</li>' +
    '<button id="rm-2-3">❌ Удалить подпункт</button>' +
    '</ul></li>' +
    '<button id="add-2">➕ Добавить подпункт</button>' +
    '<button id="rm-2">❌ Удалить пункт</button>' +
    '<li id="li-3">Пункт 3<ul>' +
    '<li id="li-3-1">Подпункт 3.1</li>' +
    '<button id="rm-3-1">❌ Удалить подпункт</button>' +
    '<li id="li-3-2">Подпункт 3.2</li>' +
    '<button id="rm-3-2">❌ Удалить подпункт</button>' +
    '<li id="li-3-3">Подпункт 3.3</li>' +
    '<button id="rm-3-3">❌ Удалить подпункт</button>' +
    '</ul></li>' +
    '<button id="add-3">➕ Добавить подпункт</button>' +
    '<button id="rm-3">❌ Удалить пункт</button>'
document.getElementById("list-for-deleting").innerHTML = startText
listSet()
let clearButton = document.getElementById("ul-clear")
clearButton.onclick = () => {
    let confirmText = `Вы уверены, что ` +
    `хотите очистить весь список?`
    if (confirm(confirmText))
        document.getElementById("list-for-deleting").innerHTML = ""
}
function listSet() {
    for (let i = 1; i <= maxNumber; i++) {
        let item = document.getElementById(`li-${i}`)
        if (item != null) {
            for (let j = 1; j <= maxPointNumbers[i]; j++) {
                let deletePoint = document.getElementById(`rm-${i}-${j}`)
                if (deletePoint != null) {
                    deletePoint.onclick = () => {
                        let point = document.getElementById(`li-${i}-${j}`)
                        let pointName = point.innerHTML
                        if (pointName.indexOf("<") != -1)
                            pointName = pointName.slice(0, pointName.indexOf("<"))
                        let confirmText = `Вы уверены, что ` +
                            `хотите удалить данный подпункт: "${pointName}"?`
                        if (confirm(confirmText)) {
                            point.remove()
                            document.getElementById(`rm-${i}-${j}`).remove()
                        }
                    }
                }
            }
            let addPoint = document.getElementById(`add-${i}`)
            addPoint.onclick = () => {
                let newNumber = ++maxPointNumbers[i]
                let addText = prompt("Введите содержимое нового подпункта")
                document.getElementById(`li-${i}`).firstElementChild.innerHTML +=
                    `<li id="li-${i}-${newNumber}">${addText}<ul></ul></li>` +
                    `<button id="rm-${i}-${newNumber}">❌ Удалить подпункт</button>`
                listSet()
            }
            let deleteItem = document.getElementById(`rm-${i}`)
            deleteItem.onclick = () => {
                let item = document.getElementById(`li-${i}`)
                let itemName = item.innerHTML
                if (itemName.indexOf("<") != -1)
                    itemName = itemName.slice(0, itemName.indexOf("<"))
                let confirmText = `Вы уверены, что ` +
                    `хотите удалить данный пункт: "${itemName}"?`
                if (confirm(confirmText)) {
                    item.remove()
                    document.getElementById(`add-${i}`).remove()
                    document.getElementById(`rm-${i}`).remove()
                }
            }
        }
    }
}
let addItem = document.getElementById("add-item")
addItem.onclick = () => {
    let newNumber = ++maxNumber
    maxPointNumbers.push(0)
    let addText = prompt("Введите содержимое нового пункта")
    document.getElementById("list-for-deleting").innerHTML +=
        `<li id="li-${newNumber}">${addText}<ul></ul></li>` +
        `<button id="add-${newNumber}">➕ Добавить подпункт</button>` +
        `<button id="rm-${newNumber}">❌ Удалить пункт</button>`
    listSet()
}

/// Dynamic Object Event
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        let cell = document.getElementById(`cell-${i}-${j}`)
        cell.addEventListener("dblclick", () => {
            document.getElementById("cat-image").remove()
            document.getElementById(`cell-${i}-${j}`).innerHTML +=
                '<div id="cat-image"></div>'
        })
    }
}

/// Sweet Menu
let sweetButton = document.getElementById("sweet-button")
sweetButton.addEventListener("click", () => {
    let sweetPanel = sweetButton.nextElementSibling
    if (sweetPanel.style.display === "flex") {
        sweetPanel.style.display = "none"
        sweetButton.textContent = "👉 Здесь сладости! (НАЖМИТЕ)"
    } else {
        sweetPanel.style.display = "flex"
        sweetButton.textContent = "👇 Здесь сладости! (НАЖМИТЕ)"
    }
})
for (let i = 1; i <= 5; i++) {
    let sweet = document.getElementById(`sweet-${i}`)
    sweet.addEventListener("click", () => {
        let startTime = Date.now()
        let timer = setInterval(() => {
            let timePassed = Date.now() - startTime
            if (timePassed > 1000) {
                sweet.remove()
                sweetMenuEdit(sweetContinue, sweetCallback)
                clearInterval(timer)
                return
            }
            sweet.style = `opacity: ${100 - timePassed / 10}%`
        }, 50)
    })
}
function sweetMenuEdit(primaryFunc, callback) {
    if (primaryFunc())
        return
    callback()
}
function sweetContinue() {
    if (sweetButton.nextElementSibling.childElementCount == 0)
        return false
    return true
}
function sweetCallback() {
    document.getElementById("sweet-panel").innerHTML =
        "Сладости закончились 😢"
}

/// Alpha Opacity Picture
let alphaImage = document.getElementById("alpha-picture")
alphaImage.addEventListener('mouseenter', () => {
    let startTime = Date.now()
    let timer = setInterval(() => {
        let timePassed = Date.now() - startTime
        if (timePassed > 200) {
            clearInterval(timer)
            return
        }
        alphaImage.style.opacity = `${100 - timePassed / 4}%`
    }, 10)
})
alphaImage.addEventListener('mouseleave', () => {
    let startTime = Date.now()
    let timer = setInterval(() => {
        let timePassed = Date.now() - startTime
        if (timePassed > 200) {
            clearInterval(timer)
            return
        }
        alphaImage.style.opacity = `${50 + timePassed / 4}%`
    }, 10)
})

/// Regexp & Form
let rusAlphabet = new Array()
for (let i = "А".charCodeAt(0); i <= "Я".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    rusAlphabet.push(char)
}
for (let i = "а".charCodeAt(0); i <= "я".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    rusAlphabet.push(char)
}
let engAlphabet = new Array()
for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    engAlphabet.push(char)
}
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    engAlphabet.push(char)
}
let digits = new Array()
for (let i = "0".charCodeAt(0); i <= "9".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    digits.push(char)
}
let smallLetters = new Array()
for (let i = "а".charCodeAt(0); i <= "я".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    smallLetters.push(char)
}
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    smallLetters.push(char)
}
let bigLetters = new Array()
for (let i = "А".charCodeAt(0); i <= "Я".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    bigLetters.push(char)
}
for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    let char = String.fromCharCode(i)
    bigLetters.push(char)
}
let specSymbols = new Array(
    '~', '!', '?', '@', '#', '$', '%', '^', '&',
    '*', '_', '-', '+', '(', ')', '[', ']',
    '{', '}', '>', '<', '/', '\\', '|',
    '\"', '\'', '.', ',', ':', ';'
)
let login = document.getElementById("login")
let passwd = document.getElementById("passwd")
let confPasswd = document.getElementById("conf-passwd")
let email = document.getElementById("e-mail")
let phone = document.getElementById("phone")
let secondName = document.getElementById("second-name")
let firstName = document.getElementById("first-name")
let thirdName = document.getElementById("third-name")
let man = document.getElementById("man")
let woman = document.getElementById("woman")
let birthDate = document.getElementById("birth-date")
let cb1 = document.getElementById("cb1")
let cb2 = document.getElementById("cb2")
let cb3 = document.getElementById("cb3")
let cb4 = document.getElementById("cb4")
let bioText = document.getElementById("bio-text")
let jobSelect = document.getElementById("job-select")
let resetButton = document.getElementById("reset-button")
let submitButton = document.getElementById("submit-button")
let reEmailCheck =
    /^[A-Za-z0-9]{2,}@([A-Za-z0-9]{2,}\.)+[A-Za-z0-9]{0,4}$/
submitButton.onclick = () => {
    let forms = document.getElementsByClassName("notification")
    for (let i = 0; i < forms.length; i++)
        forms[i].innerText = ``
    let flag = true
    if (login.value.length == 0) {
        login.previousElementSibling.innerText +=
            `Обязательное поле!\n`
        flag = false
    }
    if (login.value.length < 3 ||
        login.value.length > 16) {
        login.previousElementSibling.innerText +=
            `Логин должен содержать от 3 до 16 символов!\n`
        flag = false
    }
    let stringLogin = login.value
    let loginFlag = true
    for (let i = 0; i < stringLogin.length && loginFlag; i++) {
        loginFlag = false
        let symbol = stringLogin[i]
        for (let j = 0; j < engAlphabet.length; j++)
            if (symbol == engAlphabet[j])
                loginFlag = true
        for (let j = 0; j < digits.length; j++)
            if (symbol == digits[j])
                loginFlag = true
    }
    if (!loginFlag) {
        login.previousElementSibling.innerText +=
            `Поле «Логин» содержит недопустимые символы!\n`
        flag = false
    }
    if (passwd.value.length == 0) {
        passwd.previousElementSibling.innerText +=
            `Обязательное поле!\n`
        flag = false
    }
    if (passwd.value.length < 8 ||
        passwd.value.length > 128) {
        passwd.previousElementSibling.innerText +=
            `Пароль должен содержать от 8 до 128 символов!\n`
        flag = false
    }
    let stringPasswd = passwd.value
    let passwdFlag = true
    for (let i = 0; i < stringPasswd.length && passwdFlag; i++) {
        if (!digits.includes(stringPasswd[i]) &&
        !rusAlphabet.includes(stringPasswd[i]) &&
        !engAlphabet.includes(stringPasswd[i]) &&
        !specSymbols.includes(stringPasswd[i]))
            passwdFlag = false
    }
    if (!passwdFlag) {
        passwd.previousElementSibling.innerText +=
            `Поле «Пароль» содержит недопустимые символы!\n`
        flag = false
    }
    let passwdBigFlag = false
    for (let i = 0; i < bigLetters.length && !passwdBigFlag; i++)
        if (stringPasswd.includes(bigLetters[i]))
            passwdBigFlag = true
    if (!passwdBigFlag) {
        passwd.previousElementSibling.innerText +=
            `Пароль должен содержать как минимум 1 заглавную букву!\n`
        flag = false
    }
    let passwdSmallFlag = false
    for (let i = 0; i < smallLetters.length && !passwdSmallFlag; i++)
        if (stringPasswd.includes(smallLetters[i]))
            passwdSmallFlag = true
    if (!passwdSmallFlag) {
        passwd.previousElementSibling.innerText +=
            `Пароль должен содержать как минимум 1 строчную букву!\n`
        flag = false
    }
    let passwdDigitFlag = false
    for (let i = 0; i < digits.length && !passwdDigitFlag; i++)
        if (stringPasswd.includes(digits[i]))
            passwdDigitFlag = true
    if (!passwdDigitFlag) {
        passwd.previousElementSibling.innerText +=
            `Пароль должен содержать как минимум 1 цифру!\n`
        flag = false
    }
    if (confPasswd.value.length == 0) {
        confPasswd.previousElementSibling.innerText +=
            `Обязательное поле!\n`
        flag = false
    }
    if (passwd.value != confPasswd.value) {
        confPasswd.previousElementSibling.innerText +=
            `Пароли не совпадают!\n`
        flag = false
    }
    if (email.value.length == 0) {
        email.previousElementSibling.innerText +=
            `Обязательное поле!\n`
        flag = false
    } else if (!reEmailCheck.test(email.value)) {
        email.previousElementSibling.innerText +=
            `E-mail имеет недопустимую форму!\n`
        flag = false
    }
    let stringSecondName = secondName.value
    let secondNameFlag = true
    for (let i = 0; i < stringSecondName.length && secondNameFlag; i++) {
        secondNameFlag = false
        let symbol = stringSecondName[i]
        for (let j = 0; j < rusAlphabet.length; j++)
            if (symbol == rusAlphabet[j])
                secondNameFlag = true
        if (symbol == `-` || symbol == ` `)
            secondNameFlag = true
    }
    if (!secondNameFlag) {
        secondName.previousElementSibling.innerText +=
            `Поле «Фамилия» содержит недопустимые символы!\n`
        flag = false
    }
    let stringFirstName = firstName.value
    let firstNameFlag = true
    for (let i = 0; i < stringFirstName.length && firstNameFlag; i++) {
        firstNameFlag = false
        let symbol = stringFirstName[i]
        for (let j = 0; j < rusAlphabet.length; j++)
            if (symbol == rusAlphabet[j])
                firstNameFlag = true
        if (symbol == `-` || symbol == ` `)
            firstNameFlag = true
    }
    if (!firstNameFlag) {
        firstName.previousElementSibling.innerText +=
            `Поле «Имя» содержит недопустимые символы!\n`
        flag = false
    }
    let stringThirdName = thirdName.value
    let thirdNameFlag = true
    for (let i = 0; i < stringThirdName.length && thirdNameFlag; i++) {
        thirdNameFlag = false
        let symbol = stringThirdName[i]
        for (let j = 0; j < rusAlphabet.length; j++)
            if (symbol == rusAlphabet[j])
                thirdNameFlag = true
        if (symbol == `-` || symbol == ` `)
            thirdNameFlag = true
    }
    if (!thirdNameFlag) {
        thirdName.previousElementSibling.innerText +=
            `Поле «Отчество» содержит недопустимые символы!\n`
        flag = false
    }
    if (jobSelect.value == `Выберите вакансию`) {
        jobSelect.previousElementSibling.innerText +=
            `Выберите вакансию!`
        flag = false
    }
    if (flag) {
        login.value = ``
        passwd.value = ``
        confPasswd.value = ``
        email.value = ``
        phone.value = ``
        secondName.value = ``
        firstName.value = ``
        thirdName.value = ``
        man.checked = false
        woman.checked = false
        birthDate.value = ``
        cb1.checked = false
        cb2.checked = false
        cb3.checked = false
        cb4.checked = false
        bioText.value = ``
        jobSelect.value = `Выберите вакансию`
        submitButton.nextElementSibling.nextElementSibling
            .nextElementSibling.innerText =
                `Анкета успешно отправлена!`
    } else
        document.getElementById("success").innerText = ``
}
resetButton.onclick = () => {
    document.getElementById("success").innerText = ``
}

/// JS-game
document.getElementById("start-game-button").onclick = () => {
    let height = window.screen.availHeight
    let width = window.screen.availWidth
    window.open(
        `game/index.html`,
        `_blank`,
        `popup=yes, height=${height}, width=${width}`
    )
}
