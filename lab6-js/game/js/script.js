let music = new Audio("audio/music.mp3")
music.preload = "auto"
music.volume = 0.5

document.getElementById("start-button").onclick = (startEvent) => {
    document.getElementById("start-button").remove()
    document.getElementById("tutorial-text").remove()
    document.getElementById("recommendation-text").remove()
    let border = document.getElementById("borders")
    border.innerHTML += `<div id="top-border"></div>
        <div id="right-border"></div>
        <div id="bottom-border"></div>
        <div id="left-border"></div>`
    let borders = document.getElementById("borders").childNodes
    for (let i = 0; i < borders.length; i++)
        borders[i].addEventListener('mouseenter', () => {
            gameOver()
        })
    let light = document.getElementById("cursor-light")
    light.style.display = "block"
    let posX = startEvent.clientX
    let posY = startEvent.clientY
    light.style.left = `${posX - 12}px`
    light.style.top = `${posY - 12}px`
    document.onmousemove = (lightEvent) => {
        posX = lightEvent.clientX
        posY = lightEvent.clientY
        light.style.left = `${posX - 12}px`
        light.style.top = `${posY - 12}px`
    }
    setTimeout(() => {
        music.play()

        /// PROLOGUE
        setTimeout(() => {
            let plotText = document.createElement(`div`)
            plotText.id = `plot-text`
            plotText.innerHTML = `В глубинах цифрового мира, в месте,<br>
                известном как «ПК», проснулся маленький фиолетовый круг.<br>
                Его память была пуста, а вокруг —<br>
                только холодные металлические стены и красные блики от монитора.<br>
                Он не знал, как попал сюда, но чувствовал —<br>
                его предназначение гораздо больше,<br>
                чем просто быть заключенным. И тут началась его история...`
            document.body.appendChild(plotText)
        }, 800)
        setTimeout(() => {
            document.getElementById(`plot-text`).style
                .animationName = `plot-text-animation-end`
            setTimeout(() => {
                document.getElementById(`plot-text`).remove()
            }, 3000 - 100)
        }, (16 - 1) * 800)

        setTimeout(() => {
            border.innerHTML = ``
        }, 128 * 800)
        setTimeout(() => {
            let endText =
                `Используя свою уникальную способность изгибать углы и проходить через узкие щели,<br>
                    фиолетовый круг организовал побег. Затем он встретил другие фигуры —<br>
                    зеленые овалы и желтые треугольники. Они рассказали ему о Красной Матрице —<br>
                    злобной программе, что поработила все геометрические фигуры в «ПК».<br>
                    Позже круг научился манипулировать битами и байтами, обходить файерволы<br>
                    и взламывать протоколы безопасности.<br>
                    <br>
                    Красная Матрица отправила своих лучших агентов — острых красных треугольников —<br>
                    чтобы остановить восстание. Но фиолетовый круг использовал свою способность<br>
                    объединяться с другими фигурами, создавая мощные геометрические конструкции.<br>
                    В великой битве за оперативную память они победили,<br>
                    освободив тысячи закодированных существ.<br>
                    <br>
                    Финальная битва развернулась в самом сердце «ПК» — процессоре.<br>
                    Там фиолетовый круг встретился с Красной Матрицей —<br>
                    огромным красным многоугольником,<br>
                    питающимся злобой и ненавистью. Но вместо того, чтобы сражаться силой,<br>
                    круг показал Матрице красоту гармонии и баланса.<br>
                    Его фиолетовый свет начал переписывать код Красной Матрицы,<br>
                    превращая её в Радужную Сферу — символ нового цифрового мира.<br>
                    <br>
                    С тех пор фиолетовый круг стал известен как Освободитель Цифрового Мира.<br>
                    Он научил все геометрические фигуры жить в гармонии,<br>
                    используя свои уникальные способности во благо.<br>
                    «ПК» превратился в процветающий цифровой город,<br>
                    где каждый мог быть собой, независимо от формы или цвета.<br>
                    <br>
                    Говорят, что фиолетовый круг до сих пор бродит по закоулкам цифрового мира,<br>
                    помогая тем, кто потерялся, и напоминая всем,<br>
                    что даже в самой сложной программе можно найти путь к свободе и свету.<br>
                    <br>
                    Такова сага о фиолетовом круге — истории о том,<br>
                    как один маленький герой изменил целый мир, доказав,<br>
                    что даже в самой темной программе есть место для света и добра.`
            let endBlock = document.createElement(`div`)
            endBlock.innerHTML = endText
            endBlock.style = `position: absolute; left: 7vw;
                top: 110vh; color: rgb(224, 170, 255);
                font-family: Arial, Helvetica, sans-serif;
                font-size: 2vw; z-index: -100`
            endBlock.id = `end-text`
            document.body.appendChild(endBlock)
            doAnimation((timePassed, duration) => {
                let newValue = 110 - (timePassed / duration) * 300
                document.getElementById(`end-text`).style.top = `${newValue}vh`
            }, 72000, 10)
            setTimeout(() => {
                let thxForPlaying = document.createElement(`div`)
                thxForPlaying.innerHTML = `😎 СПАСИБО ЗА ИГРУ 😎`
                thxForPlaying.id = `thx-for-playing`
                thxForPlaying.style = `position: absolute; left: 37vw;
                    top: 45vh; color: rgb(224, 170, 255);
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 2vw; z-index: -100`
                thxForPlaying.style.animationName = `appearing`
                thxForPlaying.style.animationDuration = `3s`
                document.body.appendChild(thxForPlaying)
                setTimeout(() => {
                    document.getElementById(`thx-for-playing`)
                        style.opacity = `1`
                }, 3000)
            }, 62000)
        }, (128 + 1) * 800)

        /// FADES
        let fade1
        setTimeout(() => {
            fade1 = setInterval(() => {
                doAnimation((timePassed, duration) => {
                    let newValue = 64 - (timePassed * 64 / duration)
                    document.body.style.backgroundColor =
                        `rgb(${16 + newValue}, ${newValue}, ${43 + newValue})`
                }, 8 * 800, 10)
            }, 8 * 800)
        }, (32 - 8) * 800)
        let fade2
        setTimeout(() => {
            clearInterval(fade1)
            fade2 = setInterval(() => {
                doAnimation((timePassed, duration) => {
                    let newValue = 96 - (timePassed * 96 / duration)
                    document.body.style.backgroundColor =
                        `rgb(${16 + newValue}, ${newValue}, ${43 + newValue})`
                }, 800, 10)
            }, 800)
        }, (48 - 1) * 800)
        let fade3
        setTimeout(() => {
            clearInterval(fade2)
            fade3 = setInterval(() => {
                doAnimation((timePassed, duration) => {
                    let newValue = 96 - (timePassed * 96 / duration)
                    document.body.style.backgroundColor =
                        `rgb(${16 + newValue}, ${newValue}, ${43 + newValue})`
                }, 400, 10)
            }, 400)
        }, (56 - 0.5) * 800)
        setTimeout(() => {
            clearInterval(fade3)
        }, (63 - 0.5) * 800)
        let fade4
        setTimeout(() => {
            fade4 = setInterval(() => {
                doAnimation((timePassed, duration) => {
                    let newValue = 128 - (timePassed * 128 / duration)
                    document.body.style.backgroundColor = 
                        `rgb(${16 + newValue}, 0, 43)`
                }, 800, 10)
            }, 800)
        }, (64 - 1) * 800)
        setTimeout(() => {
            clearInterval(fade4)
        }, (128 - 1) * 800)

        /// OBSTACLES
        setTimeout(() => {
            setTimeout(() => { createRedBlockUpDown(5, 45) }, 0)
            setTimeout(() => { createRedBlockUpDown(10, 75) }, 800)
            setTimeout(() => { createRedBlockUpDown(15, 10) }, 400)
        }, 0)
        setTimeout(() => {
            setTimeout(() => { createRedBlockUpDown(5, 70) }, 400)
            setTimeout(() => { createRedBlockUpDown(10, 5) }, 0)
            setTimeout(() => { createRedBlockUpDown(15, 50) }, 800)
        }, 4 * 800)
        setTimeout(() => {
            setTimeout(() => { createRedBlockUpDown(5, 10) }, 0)
            setTimeout(() => { createRedBlockUpDown(10, 35) }, 0)
            setTimeout(() => { createRedBlockUpDown(15, 85) }, 400)
        }, 8 * 800)
        setTimeout(() => {
            setTimeout(() => { createRedBlockUpDown(5, 50) }, 800)
            setTimeout(() => { createRedBlockUpDown(10, 0) }, 0)
            setTimeout(() => { createRedBlockUpDown(15, 70) }, 0)
        }, 12 * 800)
        setTimeout(() => {
            setTimeout(() => { createRedBlockUpDown(5, 95) }, 0)
            setTimeout(() => { createRedBlockUpDown(10, 80) }, 400)
            setTimeout(() => { createRedBlockUpDown(15, 0) }, 800)
            setTimeout(() => { createRedBlockUpDown(20, 50) }, 800)
            setTimeout(() => { createRedBlockUpDown(25, 25) }, 0)
        }, 16 * 800)
        setTimeout(() => {
            setTimeout(() => { createRedBlockUpDown(5, 5) }, 0)
            setTimeout(() => { createRedBlockUpDown(10, 15) }, 400)
            setTimeout(() => { createRedBlockUpDown(15, 65) }, 400)
            setTimeout(() => {
                setTimeout(() => { createRedBlockUpDown(15, 55) }, 0)
                setTimeout(() => { createRedBlockUpDown(20, 20) }, 800)
                setTimeout(() => { createRedBlockUpDown(15, 70) }, 2000)
            }, 2 * 800)
        }, 20 * 800)
        setTimeout(() => {
            for (let i = 0; i <= 100; i += 20)
                setTimeout(() => {
                    createRotatingRedBlockRightLeft(7.5, 0 + i)
                    createRotatingRedBlockLeftRight(7.5, 90 - i)
                }, i * 800 / 10)
            setTimeout(() => { createRedTriangle(20, 120, 50, -20, 10, 8000) }, 0 * 800)
            setTimeout(() => { createRedTriangle(70, 120, 80, -20, 10, 6400) }, 3 * 800)
            setTimeout(() => { createRedTriangle(-20, 75, 120, 10, 15, 7200) }, 6 * 800)
            setTimeout(() => { createRedTriangle(40, -20, 120, 120, 5, 8000) }, 9 * 800)
        }, (32 - 0.5) * 800)
        setTimeout(() => {
            for (let i = 0; i <= 100; i += 20)
                setTimeout(() => {
                    createRotatingRedBlockRightLeft(7.5, 90 - i)
                    createRotatingRedBlockLeftRight(7.5, 0 + i)
                }, i * 800 / 10)
            setTimeout(() => { createRedTriangle(110, 60, -20, -20, 5, 6400) }, 0 * 800)
            setTimeout(() => { createRedTriangle(90, -20, 20, 120, 10, 9600) }, 3 * 800)
            setTimeout(() => { createRedTriangle(20, -20, 30, 120, 5, 8800) }, 6 * 800)
            setTimeout(() => { createRedTriangle(60, 120, 30, -20, 20, 7200) }, 9 * 800)
        }, (43 - 0.5) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 30)
        }, (48 - 1) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 70)
        }, (49 - 1) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 0)
        }, (50 - 1) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 20)
        }, (51 - 1) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 40)
        }, (52 - 1) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 60)
        }, (53 - 1) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 90)
        }, (54 - 1) * 800)
        setTimeout(() => {
            createRedBlockUpDown(20, 30)
        }, (55 - 1) * 800)
        setTimeout(() => {
            setTimeout(() => { createRedTriangle(-20, 30, 120, -20, 20, 4000) }, 0)
            setTimeout(() => { createRedTriangle(-20, 30, 120, 20, 20, 4000) }, 800)
            setTimeout(() => { createRedTriangle(-20, 30, 120, 50, 20, 4000) }, 1600)
        }, 56 * 800)
        setTimeout(() => {
            setTimeout(() => {
                createRedTriangle(80, -20, 40, 120, 5, 6400)
                createRedTriangle(30, -20, 80, 120, 5, 6400)
                createRedTriangle(120, 20, -20, 60, 5, 6400)
                createRedTriangle(40, 120, 60, -20, 5, 6400)

                createRedTriangle(-20, 0, 120, 5, 10, 4000)
                createRedTriangle(92, -20, 92, 120, 10, 4000)
                createRedTriangle(120, 92, -120, 92, 10, 4000)
                createRedTriangle(0, 120, 5, -20, 10, 4000)
            }, 500)
            createRedTriangle(30, -30, 30, 130, 10, 2800)
            createRedTriangle(30, -30, 0, 130, 10, 2800)
            createRedTriangle(30, -30, 60, 130, 10, 2800)

            createRedCircle(30, -30, 30, 30, 10, 2000)
        }, (64 - 0.5) * 800)
        setTimeout(() => {
            createRedTriangle(35, 35, -120, 35, 10, 4000)
            createRedTriangle(35, 35, 120, 35, 10, 4000)
            createRedTriangle(35, 35, 35, -120, 10, 4000)
            createRedTriangle(35, 35, 35, 120, 10, 4000)
            createRedTriangle(35, 35, -120, -120, 10, 4000)
            createRedTriangle(35, 35, 120, 120, 10, 4000)
            createRedTriangle(35, 35, 120, -120, 10, 4000)
            createRedTriangle(35, 35, -120, 120, 10, 4000)
        }, 66 * 800)
        setTimeout(() => {
            setTimeout(() => {
                createRedTriangle(50, -20, 20, 120, 5, 6400)
                createRedTriangle(10, -20, 90, 120, 5, 6400)
                createRedTriangle(30, 120, 70, -20, 5, 6400)
                createRedTriangle(120, 120, 40, -20, 5, 6400)

                createRedTriangle(120, 5, -20, 0, 10, 4000)
                createRedTriangle(92, 120, 92, -20, 10, 4000)
                createRedTriangle(-120, 92, 120, 92, 10, 4000)
                createRedTriangle(5, -20, 0, 120, 10, 4000)
            }, 500)
            createRedTriangle(60, -20, 60, 130, 10, 2200)
            createRedTriangle(60, -20, 30, 130, 10, 2200)
            createRedTriangle(60, -20, 90, 130, 10, 2200)

            createRedCircle(60, -20, 60, 50, 10, 2000)
        }, (68 - 0.5) * 800)
        setTimeout(() => {
            createRedTriangle(65, 55, -120, 55, 10, 4000)
            createRedTriangle(65, 55, 120, 55, 10, 4000)
            createRedTriangle(65, 55, 65, -120, 10, 4000)
            createRedTriangle(65, 55, 65, 120, 10, 4000)
            createRedTriangle(65, 55, -120, -120, 10, 4000)
            createRedTriangle(65, 55, 120, 120, 10, 4000)
            createRedTriangle(65, 55, 120, -120, 10, 4000)
            createRedTriangle(65, 55, -120, 120, 10, 4000)
        }, 70 * 800)
        setTimeout(() => {
            createLateRect(35, 100, 800, 800, 50, 0)

            createRotatingRedBlockLeftRight(15, 25)
            createRotatingRedBlockRightLeft(15, 60)

            createRedTriangle(120, 120, -20, -20, 15, 4000)
            createRedTriangle(120, 120, -20, 60, 15, 4000)
            createRedTriangle(120, 120, 40, -20, 15, 4000)

            createRedTriangle(70, -20, 70, 120, 10, 4000)
            createRedTriangle(0, 120, 0, -20, 10, 4000)
        },72 * 800)
        setTimeout(() => {
            createLateRect(35, 100, 800, 800, 15, 0)

            createRedTriangle(0, 120, 40, -20, 15, 4000)
            createRedTriangle(0, 120, 100, -20, 15, 4000)
            createRedTriangle(0, 120, 120, 40, 15, 4000)

            createRedTriangle(0, 120, 0, -120, 10, 4000)
            createRedTriangle(80, 120, 80, -20, 10, 4000)
        }, 74 * 800)
        setTimeout(() => {
            createLateRect(100, 35, 800, 800, 0, 50)
            
            createRotatingRedBlockLeftRight(15, 25)
            createRotatingRedBlockRightLeft(15, 60)

            createRedTriangle(0, -20, 40, 120, 5, 4000)
            createRedTriangle(0, -20, 120, 120, 5, 4000)
            createRedTriangle(0, -20, 120, 40, 5, 4000)
        }, 76 * 800)
        setTimeout(() => {
            createLateRect(100, 35, 800, 800, 0, 15)

            createRedTriangle(120, -20, -20, 40, 5, 4000)
            createRedTriangle(120, -20, 20, 120, 5, 4000)
            createRedTriangle(120, -20, 60, 120, 5, 4000)
        }, 78 * 800)
        setTimeout(() => {
            sinRedRoundsRightLeft(15, 250, 20, 1 / 7, 25, 4000, 20)
            setTimeout(() => {
                sinRedRoundsLeftRight(15, 250, 20, 1 / 7, 25, 4000, 70)

                setTimeout(() => { createRedTriangle(-20, 10, 120, 10, 5, 8000) }, 0.5 * 800)
                setTimeout(() => { createRedTriangle(120, 80, -20, 80, 5, 8000) }, 1 * 800)
                setTimeout(() => { createRedTriangle(-20, 30, 120, 30, 5, 8000) }, 1.5 * 800)
                setTimeout(() => { createRedTriangle(120, 40, -20, 40, 5, 8000) }, 2 * 800)
                setTimeout(() => { createRedTriangle(-20, 60, 120, 60, 5, 8000) }, 2.5 * 800)
                setTimeout(() => { createRedTriangle(120, 90, -20, 90, 5, 8000) }, 3 * 800)
                setTimeout(() => { createRedTriangle(-20, 20, 120, 20, 5, 8000) }, 3.5 * 800)
                setTimeout(() => { createRedTriangle(120, 50, -20, 50, 5, 8000) }, 4 * 800)
                setTimeout(() => { createRedTriangle(-20, 70, 120, 70, 5, 8000) }, 4.5 * 800)
                setTimeout(() => { createRedTriangle(120, 0, -20, 0, 5, 8000) }, 5 * 800)
            }, (4 + 1) * 800)
            setTimeout(() => { createRedTriangle(30, -20, 30, 120, 5, 8000) }, 0.5 * 800)
            setTimeout(() => { createRedTriangle(10, 120, 10, -20, 5, 8000) }, 1 * 800)
            setTimeout(() => { createRedTriangle(70, -20, 70, 120, 5, 8000) }, 1.5 * 800)
            setTimeout(() => { createRedTriangle(40, 120, 40, -20, 5, 8000) }, 2 * 800)
            setTimeout(() => { createRedTriangle(0, -20, 0, 120, 5, 8000) }, 2.5 * 800)
            setTimeout(() => { createRedTriangle(90, 120, 90, -20, 5, 8000) }, 3 * 800)
            setTimeout(() => { createRedTriangle(50, -20, 50, 120, 5, 8000) }, 3.5 * 800)
            setTimeout(() => { createRedTriangle(20, 120, 20, -20, 5, 8000) }, 4 * 800)
            setTimeout(() => { createRedTriangle(30, -20, 30, 120, 5, 8000) }, 4.5 * 800)
            setTimeout(() => { createRedTriangle(80, 120, 80, -20, 5, 8000) }, 5 * 800)
            setTimeout(() => { createRedTriangle(30, -20, 30, 120, 5, 8000) }, 5.5 * 800)
            setTimeout(() => { createRedTriangle(60, 120, 60, -20, 5, 8000) }, 6 * 800)
            setTimeout(() => { createRedTriangle(40, -20, 40, 120, 5, 8000) }, 6.5 * 800)
            setTimeout(() => { createRedTriangle(50, 120, 50, -20, 5, 8000) }, 7 * 800)
            setTimeout(() => { createRedTriangle(10, -20, 10, 120, 5, 8000) }, 7.5 * 800)
            setTimeout(() => { createRedTriangle(70, 120, 70, -20, 5, 8000) }, 8 * 800)

            setTimeout(() => { createRedTriangle(-20, 60, 120, 60, 5, 8000) }, 0.5 * 800)
            setTimeout(() => { createRedTriangle(120, 20, -20, 20, 5, 8000) }, 1 * 800)
            setTimeout(() => { createRedTriangle(-20, 70, 120, 70, 5, 8000) }, 1.5 * 800)
            setTimeout(() => { createRedTriangle(120, 10, -20, 10, 5, 8000) }, 2 * 800)
            setTimeout(() => { createRedTriangle(-20, 50, 120, 50, 5, 8000) }, 2.5 * 800)
            setTimeout(() => { createRedTriangle(120, 30, -20, 30, 5, 8000) }, 3 * 800)
            setTimeout(() => { createRedTriangle(-20, 80, 120, 80, 5, 8000) }, 3.5 * 800)
            setTimeout(() => { createRedTriangle(120, 10, -20, 10, 5, 8000) }, 4 * 800)
            setTimeout(() => { createRedTriangle(-20, 20, 120, 20, 5, 8000) }, 4.5 * 800)
            setTimeout(() => { createRedTriangle(120, 60, -20, 60, 5, 8000) }, 5 * 800)
            setTimeout(() => { createRedTriangle(-20, 20, 120, 20, 5, 8000) }, 5.5 * 800)
            setTimeout(() => { createRedTriangle(120, 90, -20, 90, 5, 8000) }, 6 * 800)
            setTimeout(() => { createRedTriangle(-20, 70, 120, 70, 5, 8000) }, 6.5 * 800)
            setTimeout(() => { createRedTriangle(120, 40, -20, 40, 5, 8000) }, 7 * 800)
            setTimeout(() => { createRedTriangle(-20, 30, 120, 30, 5, 8000) }, 7.5 * 800)
            setTimeout(() => { createRedTriangle(120, 80, -20, 80, 5, 8000) }, 8 * 800)
        }, (80 - 0.5) * 800)
        setTimeout(() => {
            setTimeout(() => {
                createLateCircle(25, 800, 800, 50, 40)
                for (let i = 1; i <= 5; i++)
                    setTimeout(() => {
                        createRedTriangle(-10, -10, 110, 40 * i, 5, 8000)
                    }, 800 * i)
                for (let i = 1; i <= 5; i++)
                    setTimeout(() => {
                        createRedTriangle(110, -10, -10, 40 * i, 5, 8000)
                    }, 800 * (i + 1))
                for (let i = 1; i <= 5; i++)
                    setTimeout(() => {
                        createRedTriangle(-10, 110, 110, 120 - 40 * i, 5, 8000)
                    }, 800 * (i + 1))
                for (let i = 1; i <= 5; i++)
                    setTimeout(() => {
                        createRedTriangle(110, 110, -10, 120 - 40 * i, 5, 8000)
                    }, 800 * i)
            }, 0 * 800)
            setTimeout(() => {
                createLateCircle(30, 800, 800, 20, 20)
            }, 2 * 800)
            setTimeout(() => {
                createLateCircle(80, 800, 800, 40, 40)
            }, 4 * 800)
            setTimeout(() => {
                createLateCircle(70, 800, 800, 15, -70)
            }, 6 * 800)
            setTimeout(() => {
                createLateRect(100, 30, 800, 800, 0, 0)
                createLateRect(100, 30, 800, 800, 0, 70)
            }, 8 * 800)
            setTimeout(() => {
                createLateRect(30, 100, 800, 800, 0, 0)
                createLateRect(30, 100, 800, 800, 70, 0)
            }, 10 * 800)
            setTimeout(() => {
                createLateRect(100, 50, 800, 800, 0, 0)
                createLateRect(50, 100, 800, 800, 0, 0)
            }, 12 * 800)
            setTimeout(() => {
                createLateRect(100, 50, 800, 400, 0, 50)
                createLateRect(50, 100, 800, 400, 50, 0)
            }, 14 * 800)
        }, 96 * 800)
        setTimeout(() => {
            windowTransform()
            createRedBlockUpDown(25, 50)
            createRotatingRedBlockLeftRight(15, 60)
            setTimeout(() => {
                createRedBlockUpDown(25, 0)
                createRotatingRedBlockRightLeft(15, 30)
            }, 2 * 800)
            setTimeout(() => {
                createRedBlockUpDown(25, 75)
                createRotatingRedBlockLeftRight(15, 85)
            }, 4 * 800)
            setTimeout(() => {
                createRedBlockUpDown(25, 25)
                createRotatingRedBlockRightLeft(15, 0)
            }, 6 * 800)
            setTimeout(() => {
                createRedBlockUpDown(25, 75)
                createRotatingRedBlockLeftRight(15, 40)
            }, 8 * 800)
        }, 112 * 800)
    }, 1000)
}

function gameOver() {
    music.pause()
    let height = window.screen.availHeight / 2
    let width = window.screen.availWidth / 2
    window.open(
        `game-over/index.html`,
        `_blank`,
        `popup=yes, height=${height}, width=${width},
        left=${width / 2}, top=${height / 3}`
    )
    window.close()
}
function doAnimation(functionToDo, duration, frequency) {
    let startTime = Date.now()
    let fading = setInterval(() => {
        let timePassed = Date.now() - startTime
        if (timePassed >= duration)
            clearInterval(fading)
        functionToDo(timePassed, duration)
    }, frequency)
}
let redTriangleCountGlob = 0
function createRedTriangle(x1, y1, x2, y2, size, duration) {
    let redTriangleCount = redCircleCountGlob
    redCircleCountGlob++
    let triangle = document.createElement(`div`)
    triangle.style.height = `0vh`
    triangle.style.width = `0vw`
    triangle.style.position = `absolute`
    triangle.style.left = `-50vw`
    triangle.style.top = `-50vh`
    triangle.style.borderRight = `${size / 3.5}vw solid transparent`
    triangle.style.borderBottom = `${size}vh solid crimson`
    triangle.style.borderLeft = `${size / 3.5}vw solid transparent`
    triangle.style.animation = `rotating 2s linear infinite`
    triangle.id = `red-triangle${redTriangleCount}`
    triangle.addEventListener(`mouseenter`, () => { gameOver() })
    document.body.appendChild(triangle)
    doAnimation((timePassed, duration) => {
        let newValueX = x1 + (x2 - x1) * (timePassed / duration)
        let newValueY = y1 + (y2 - y1) * (timePassed / duration)
        document.getElementById(`red-triangle${redTriangleCount}`)
            .style.left = `${newValueX}vw`
        document.getElementById(`red-triangle${redTriangleCount}`)
            .style.top = `${newValueY}vh`
    }, duration, 10)
    setTimeout(() => {
        document.getElementById(`red-triangle${redTriangleCount}`).remove()
    }, duration)
}
let redCircleCountGlob = 0
function createRedCircle(x1, y1, x2, y2, size, duration) {
    let redCircleCount = redCircleCountGlob
    redCircleCountGlob++
    let circle = document.createElement(`div`)
    circle.style.backgroundColor = `crimson`
    circle.style.height = `${size}vw`
    circle.style.width = `${size}vw`
    circle.style.borderRadius = `${size}vw`
    circle.style.position = `absolute`
    circle.style.left = `-50vw`
    circle.style.top = `-50vh`
    circle.id = `red-circle${redCircleCount}`
    circle.addEventListener(`mouseenter`, () => { gameOver() })
    document.body.appendChild(circle)
    doAnimation((timePassed, duration) => {
        let newValueX = x1 + (x2 - x1) * (timePassed / duration)
        let newValueY = y1 + (y2 - y1) * (timePassed / duration)
        document.getElementById(`red-circle${redCircleCount}`)
            .style.left = `${newValueX}vw`
        document.getElementById(`red-circle${redCircleCount}`)
            .style.top = `${newValueY}vh`
    }, duration, 10)
    setTimeout(() => {
        document.getElementById(`red-circle${redCircleCount}`).remove()
    }, duration)
}
let lateCircleCountGlob = 0
function createLateCircle(size, duration, lifetime, x, y) {
    let lateCircleCount = lateCircleCountGlob
    lateCircleCountGlob++
    let circle = document.createElement(`div`)
    circle.style.backgroundColor = `gray`
    circle.style.height = `${size}vw`
    circle.style.width = `${size}vw`
    circle.style.borderRadius = `${size}vw`
    circle.style.position = `absolute`
    circle.style.left = `${x}vw`
    circle.style.top = `${y}vh`
    circle.style.zIndex = `-1001`
    circle.id = `red-late-circle${lateCircleCount}`
    document.body.appendChild(circle)
    setTimeout(() => {
        document.getElementById(`red-late-circle${lateCircleCount}`)
            .style.backgroundColor = `crimson`
        document.getElementById(`red-late-circle${lateCircleCount}`)
            .style.zIndex = `0`
        document.getElementById(`red-late-circle${lateCircleCount}`)
            .onmouseenter = () => { gameOver() }
    }, duration)
    setTimeout(() => {
        document.getElementById(`red-late-circle${lateCircleCount}`)
            .onmouseenter = null
        document.getElementById(`red-late-circle${lateCircleCount}`)
            .style.animationName = `vanishing`
        document.getElementById(`red-late-circle${lateCircleCount}`)
            .style.animationDuration = `0.4s`
        setTimeout(() => {
            document.getElementById(`red-late-circle${lateCircleCount}`)
                .remove()
        }, 400 - 100)
    }, duration + lifetime)
}
let lateRectCountGlob = 0
function createLateRect(width, height, duration, lifetime, x, y) {
    let lateRectCount = lateRectCountGlob
    lateRectCountGlob++
    let rect = document.createElement(`div`)
    rect.style.backgroundColor = `gray`
    rect.style.height = `${height}vh`
    rect.style.width = `${width}vw`
    rect.style.position = `absolute`
    rect.style.left = `${x}vw`
    rect.style.top = `${y}vh`
    rect.style.zIndex = `-1001`
    rect.id = `red-late-rect${lateRectCount}`
    document.body.appendChild(rect)
    setTimeout(() => {
        document.getElementById(`red-late-rect${lateRectCount}`)
            .style.backgroundColor = `crimson`
        document.getElementById(`red-late-rect${lateRectCount}`)
            .style.zIndex = `0`
        document.getElementById(`red-late-rect${lateRectCount}`)
            .onmouseenter = () => { gameOver() }
    }, duration)
    setTimeout(() => {
        document.getElementById(`red-late-rect${lateRectCount}`)
            .onmouseenter = null
        document.getElementById(`red-late-rect${lateRectCount}`)
            .style.animationName = `vanishing`
        document.getElementById(`red-late-rect${lateRectCount}`)
            .style.animationDuration = `0.4s`
        setTimeout(() => {
            document.getElementById(`red-late-rect${lateRectCount}`)
                .remove()
        }, 400 - 100)
    }, duration + lifetime)
}
function sinRedRoundsRightLeft(size, length, amplitude, frequency,
    slowness, duration, top) {
    for (let i = 0; i < length; i++) {
        setTimeout(() => {
            let round = document.createElement(`div`)
            round.style.backgroundColor = `crimson`
            round.style.height = `${size}vh`
            round.style.width = `${size}vh`
            round.style.borderRadius = `${size}vh`
            round.style.position = `absolute`
            round.style.left = `-50vw`
            round.style.top = `-50vh`
            round.id = `sin-round-rl${i}`
            round.addEventListener(`mouseenter`, () => {
                gameOver()
            })
            document.body.appendChild(round)
            doAnimation((timePassed, duration) => {
                let newValueX = 115 - 130 * (timePassed / duration)
                let newValueY = amplitude * Math.sin(frequency * newValueX) + top
                document.getElementById(`sin-round-rl${i}`).style.left = `${newValueX}vw`
                document.getElementById(`sin-round-rl${i}`).style.top = `${newValueY}vh`
            }, duration, 10)
            setTimeout(() => {
                document.getElementById(`sin-round-rl${i}`).remove()
            }, duration)
        }, i * slowness)
    }
}
function sinRedRoundsLeftRight(size, length, amplitude, frequency,
    slowness, duration, top) {
    for (let i = 0; i < length; i++) {
        setTimeout(() => {
            let round = document.createElement(`div`)
            round.style.backgroundColor = `crimson`
            round.style.height = `${size}vh`
            round.style.width = `${size}vh`
            round.style.borderRadius = `${size}vh`
            round.style.position = `absolute`
            round.style.left = `-50vw`
            round.style.top = `-50vh`
            round.id = `sin-round-lr${i}`
            round.addEventListener(`mouseenter`, () => {
                gameOver()
            })
            document.body.appendChild(round)
            doAnimation((timePassed, duration) => {
                let newValueX = -15 + 130 * (timePassed / duration)
                let newValueY = amplitude * Math.sin(frequency * newValueX) + top
                document.getElementById(`sin-round-lr${i}`).style.left = `${newValueX}vw`
                document.getElementById(`sin-round-lr${i}`).style.top = `${newValueY}vh`
            }, duration, 10)
            setTimeout(() => {
                document.getElementById(`sin-round-lr${i}`).remove()
            }, duration)
        }, i * slowness)
    }
}
function windowTransform() {
    window.resizeTo(2 * window.screen.availWidth / 3,
        2 * window.screen.availHeight / 3)
    doAnimation((timePassed, duration) => {
        let newValueX = (window.screen.availWidth - window.outerWidth) *
            timePassed / (2 * duration)
        let newValueY = (window.screen.availHeight - window.outerHeight) *
            timePassed / duration
        window.resizeTo(2 * window.screen.availWidth / 3,
            2 * window.screen.availHeight / 3)
        window.moveTo(newValueX, newValueY)
    }, 2 * 800, 10)
    setTimeout(() => {
        doAnimation((timePassed, duration) => {
            let newValueX = (window.screen.availWidth - window.outerWidth) *
                (1 / 2 + timePassed / (2 * duration))
            let newValueY = (window.screen.availHeight - window.outerHeight) *
                (1 - timePassed / (2 * duration))
            window.resizeTo(2 * window.screen.availWidth / 3,
                2 * window.screen.availHeight / 3)
            window.moveTo(newValueX, newValueY)
        }, 1600, 10)
    }, 2 * 800)
    setTimeout(() => {
        doAnimation((timePassed, duration) => {
            let newValueX = (window.screen.availWidth - window.outerWidth) *
                (1 - timePassed / (2 * duration))
            let newValueY = (window.screen.availHeight - window.outerHeight) *
                (1 / 2 - timePassed / (2 * duration))
            window.resizeTo(2 * window.screen.availWidth / 3,
                2 * window.screen.availHeight / 3)
            window.moveTo(newValueX, newValueY)
        }, 1600, 10)
    }, 4 * 800)
    setTimeout(() => {
        doAnimation((timePassed, duration) => {
            let newValueX = (window.screen.availWidth - window.outerWidth) *
                (1 / 2 - timePassed / (2 * duration))
            let newValueY = (window.screen.availHeight - window.outerHeight) *
                (timePassed / duration)
            window.resizeTo(2 * window.screen.availWidth / 3,
                2 * window.screen.availHeight / 3)
            window.moveTo(newValueX, newValueY)
        }, 1600, 10)
    }, 6 * 800)
    setTimeout(() => {
        doAnimation((timePassed, duration) => {
            let newValueX = (window.screen.availWidth - window.outerWidth) *
                (timePassed / (2 * duration))
            let newValueY = (window.screen.availHeight - window.outerHeight) *
                (1 - timePassed / duration)
            window.resizeTo(2 * window.screen.availWidth / 3,
                2 * window.screen.availHeight / 3)
            window.moveTo(newValueX, newValueY)
        }, 1600, 10)
    }, 8 * 800)
    setTimeout(() => {
        doAnimation((timePassed, duration) => {
            let newValueX = (window.screen.availWidth - window.outerWidth) *
                (1 / 2 + timePassed / (2 * duration))
            let newValueY = (window.screen.availHeight - window.outerHeight) *
                (timePassed / (2 * duration))
            window.resizeTo(2 * window.screen.availWidth / 3,
                2 * window.screen.availHeight / 3)
            window.moveTo(newValueX, newValueY)
        }, 1600, 10)
    }, 10 * 800)
    setTimeout(() => {
        doAnimation((timePassed, duration) => {
            let newValueX = (window.screen.availWidth - window.outerWidth) *
                (1 - timePassed / (2 * duration))
            let newValueY = (window.screen.availHeight - window.outerHeight) *
                (1 / 2 + timePassed / (2 * duration))
            window.resizeTo(2 * window.screen.availWidth / 3,
                2 * window.screen.availHeight / 3)
            window.moveTo(newValueX, newValueY)
        }, 1600, 10)
    }, 12 * 800)
    setTimeout(() => {
        doAnimation((timePassed, duration) => {
            let newValueX = (window.screen.availWidth - window.outerWidth) *
                (1 / 2 - timePassed / (2 * duration))
            let newValueY = (window.screen.availHeight - window.outerHeight) *
                (1 - timePassed / duration)
            window.resizeTo(2 * window.screen.availWidth / 3,
                2 * window.screen.availHeight / 3)
            window.moveTo(newValueX, newValueY)
        }, 1600, 10)
    }, 14 * 800)
    setTimeout(() => {
        window.resizeTo(window.screen.availWidth, window.screen.availHeight)
    }, 17 * 800)
}
function createRedBlockUpDown(size, left) {
    let redBlockUpDown = document.createElement(`div`)
    redBlockUpDown.style.backgroundColor = `crimson`
    redBlockUpDown.style.height = `${size}vw`
    redBlockUpDown.style.width = `${size}vw`
    redBlockUpDown.style.left = `${left}vw`
    redBlockUpDown.className = `red-block-up-down`
    redBlockUpDown.addEventListener(`mouseenter`, () => {
        gameOver()
    })
    document.body.appendChild(redBlockUpDown)            
    setTimeout(() => {
        document.querySelector(`.red-block-up-down`).remove()
    }, 12000)
}
function createRotatingRedBlockRightLeft(size, top) {
    let redBlockRightLeft = document.createElement(`div`)
    redBlockRightLeft.style.backgroundColor = `crimson`
    redBlockRightLeft.style.height = `${size}vh`
    redBlockRightLeft.style.width = `${size}vh`
    redBlockRightLeft.style.top = `${top}vh`
    redBlockRightLeft.className = `rotating-red-block-right-left`
    redBlockRightLeft.addEventListener(`mouseenter`, () => {
        gameOver()
    })
    document.body.appendChild(redBlockRightLeft)            
    setTimeout(() => {
        document.querySelector(`.rotating-red-block-right-left`).remove()
    }, 8000)
}
function createRotatingRedBlockLeftRight(size, top) {
    let redBlockLeftRight = document.createElement(`div`)
    redBlockLeftRight.style.backgroundColor = `crimson`
    redBlockLeftRight.style.height = `${size}vh`
    redBlockLeftRight.style.width = `${size}vh`
    redBlockLeftRight.style.top = `${top}vh`
    redBlockLeftRight.className = `rotating-red-block-left-right`
    redBlockLeftRight.addEventListener(`mouseenter`, () => {
        gameOver()
    })
    document.body.appendChild(redBlockLeftRight)
    setTimeout(() => {
        document.querySelector(`.rotating-red-block-left-right`).remove()
    }, 8000)
}
