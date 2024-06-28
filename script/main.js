"use strict";

// Если отключить мозг, то этот код выглядит как что-то работоспособное.

// Язык.
let language = "rus";
let choiceLanguage = 0;

let HelloUser = true; // Проверка на открытие окна приветствия.

let choiceUser; // Основной выбор пользователя.

let scrollUpVar = true; // Перемотка на верх.

let Localization; // Какой сейчас язык использовать.

let sidebarSoundClose = false; // Переменная для звукового закрытия.

let theme = "black"; // Тема сайта.

let focusInputVar; // Переменная для фокуса на input.

let divHello = document.createElement("div"); // Окно приветствия и не только.

let divInfo = document.createElement("div"); // Уведомление.

let divDisplayTheme = document.createElement("div"); // Окно, показывающее название темы.

let divThemeWhite = document.createElement("div"); // Окно для выбора темы.

let placeholder = "Введите команду";

// Адаптация
let mobile = false; // Мобильный режим сайта.
let mobileModule = false;

// Стартовый экран.
let englishLanguage = {
    // Начальный экран приветствия на английском языке.
    versionCreator: "<p>Hi! Version of <b>HEART</b> 0.1. Creator - <b>Umbetaliev Danila</b>.<p>",
    openCourses: '<p>Open textbook:</p><ul><li><a href="#" onclick="quickLink(); HTMLTopics()">HTML</a></li><li><a href="#" onclick="quickLink(); CSSTopics()">CSS</a></li><li><a href="#" onclick="quickLink(); JSTopics()">JavaScript</a></li></ul>',
    content: '<p>Content taken from site: </p><ul><li><a href="https://learn.javascript.ru">JavaScript.ru</a></li><li><a href="https://htmlbook.ru">htmlbook.ru</a></li></ul><p>The authors of the images used are <b>Vlad Merzhevich</b> and <b>Umbetaliev Danila</b></p>',
    blot: "<p>*To select a textbook, enter its name.</p>",
    // Ошибка.
    error: "<p>Please enter the correct data.</p>",
    // SideBar.
    sideBar: ["Language", "Theme", "Home", "Site Map"]
}

let russianLanguage = {
    // Начальный экран приветствия на русском языке.
    versionCreator: "<p>Версия <b>HEART</b> 0.1. Создатель - <b>Умбеталиев Данила</b>.</p>",
    openCourses: '<p>Открытые учебники:</p> <ul><li><a href="#" onclick="quickLink(); HTMLTopics()">HTML</a></li><li><a href="#" onclick="quickLink(); CSSTopics()">CSS</a></li><li><a href="#" onclick="quickLink(); JSTopics()">JavaScript</a></li></ul>',
    content: '<p>Содержимое взято с сайтов:</p><ul><li><a href="https://learn.javascript.ru">JavaScript.ru</a></li><li><a href="https://htmlbook.ru">htmlbook.ru</a></li></ul><p>Автором используемых изображений являются <b>Влад Мержевич</b> и <b>Умбеталиев Данила</b></p>',
    blot: "<p>*Чтобы выбрать учебник, введите его название.</p>",
    // Ошибка.
    error: "<p>Пожалуйста, введите корректные данные.</p>",
    // SideBar.
    sideBar: ["Язык", "Тема", "Начальный экран", "Карта сайта"]
}

let printScreenRus = russianLanguage.versionCreator + russianLanguage.openCourses + russianLanguage.content + russianLanguage.blot;

let printScreenEng = englishLanguage.versionCreator + englishLanguage.openCourses + englishLanguage.content + englishLanguage.blot;

function textPrint() { // Вывод текста.  
    Localization = "closeTheme";
    let text = document.getElementById("text");
    if(language == "rus")
        text.innerHTML = printScreenRus;
    else
        text.innerHTML = printScreenEng;
}

textPrint(); // Вывод тестовой информации на экран.

function choiceInput(value) { // Ввод пользователя, с последующей очисткой формы.
    choiceUser = value;
    let divError = document.getElementById("div_error").style.display = "none";
    let clearInput = document.getElementById("input").value = "";
    selectionСondition(choiceUser);
}

function placeHolderLocali() {
    let input = document.getElementById("input");
    if(language == "rus") {
        if(placeholder == "Введите команду") {
            placeholder = "Введите команду.";
            input.placeholder = "Введите команду.";
        } else if(placeholder == "Введите команду.") {
            placeholder = "Введите команду..";
            input.placeholder = "Введите команду..";
        } else if(placeholder == "Введите команду..") {
            placeholder = "Введите команду...";
            input.placeholder = "Введите команду...";
        } else if(placeholder == "Введите команду...") {
            placeholder = "Введите команду";
            input.placeholder = "Введите команду";
        }
    } else if(language == "eng") {
        // input.placeholder = "Enter the command"
        if(placeholder == "Введите команду") {
            placeholder = "Введите команду.";
            input.placeholder = "Enter the command.";
        } else if(placeholder == "Введите команду.") {
            placeholder = "Введите команду..";
            input.placeholder = "Enter the command..";
        } else if(placeholder == "Введите команду..") {
            placeholder = "Введите команду...";
            input.placeholder = "Enter the command...";
        } else if(placeholder == "Введите команду...") {
            placeholder = "Введите команду";
            input.placeholder = "Enter the command";
        }
    }
}

setInterval(placeHolderLocali, 500);

function focusInput() { // Фокус на input.
    let input = document.getElementById("input").focus({preventScroll: true}); 
}

function soundInput() { // Звук при подтверждения ввода.
    let audio = new Audio(); 
    audio.src = "../sound/forward.mp3";
    audio.volume = 1.0;
    audio.autoplay = true;
}

function selectionСondition(choice) {
    switch(choice) {
        case "JavaScript":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTopics";

            CheckingSelection(); // Обновление блоков.
            JSTopics(); // Темы.
            PrintDiv(); // Вывод на экран первой темы.

            break;
        case "JS":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTopics";

            CheckingSelection(); // Обновление блоков.
            JSTopics(); // Темы.
            PrintDiv(); // Вывод на экран первой темы.

            break;
        case "js":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTopics";

            CheckingSelection(); // Обновление блоков.
            JSTopics(); // Темы.
            PrintDiv(); // Вывод на экран первой темы.

            break;
        case "javascript":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTopics";

            CheckingSelection(); // Обновление блоков.
            JSTopics(); // Темы.
            PrintDiv(); // Вывод на экран первой темы.

            break;
        case "JS topic 1":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamOne";

            CheckingSelection(); // Обновление блоков.
            JSTheamOne(); // Первая тема.
            PrintDiv(); // Вывод на экран первой темы.

            break;
        case "JS topic 2":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamTwo";

            CheckingSelection(); // Обновление блоков.
            JSTheamTwo(); // Вторая тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 3":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamThree";

            CheckingSelection(); // Обновление блоков.
            JSTheamThree(); // Третья тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 4":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamFour";

            CheckingSelection(); // Обновление блоков.
            JSTheamFour(); // Четвёртая тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 5":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamFive";

            CheckingSelection(); // Обновление блоков.
            JSTheamFive(); // Пятая тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 6":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamSix";

            CheckingSelection(); // Обновление блоков.
            JSTheamSix(); // Шестая тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 7":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamSeven";

            CheckingSelection(); // Обновление блоков.
            JSTheamSeven(); // Седьмая тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 8":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamEight";

            CheckingSelection(); // Обновление блоков.
            JSTheamEight(); // Восьмая тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 8/2":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "JSTheamEightPartTwo";

            CheckingSelection(); // Обновление блоков.
            JSTheamEightPartTwo(); // Восьмая тема.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "JS topic 9":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamNine";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamNine(); // Девятая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 10":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamTen";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamTen(); // Десятая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 11":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamEleven";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamEleven(); // Одиннадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 12":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamTwelve";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamTwelve(); // Двенадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 13":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamThirteen";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamThirteen(); // Тринадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 14":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamFourteen";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamFourteen(); // Четырнадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 15":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamFifteen";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamFifteen(); // Пятнадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 15/2":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamFifteenPartTwo";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamFifteenPartTwo(); // Пятнадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 16":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamSixteen";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamSixteen(); // Шестнадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "JS topic 17":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "JSTheamSeventeen";
    
            CheckingSelection(); // Обновление блоков.
            JSTheamSeventeen(); // Семнадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML5":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "HTMLTopics";

            CheckingSelection(); // Обновление блоков.
            HTMLTopics(); // Все темы.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "HTML":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "HTMLTopics";

            CheckingSelection(); // Обновление блоков.
            HTMLTopics(); // Все темы.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "html":
            soundInput();
            document.getElementById("screen_print").style.display = "none";

            Localization = "HTMLTopics";

            CheckingSelection(); // Обновление блоков.
            HTMLTopics(); // Все темы.
            PrintDiv(); // Вывод на экран темы.

            break;
        case "HTML topic 1":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicOne";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicOne(); // Певая тема тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 2":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicTwo";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicTwo(); // Вторая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 3":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicThree";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicThree(); // Третья тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 4":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicFour";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicFour(); // Четвёртая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 5":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicFive";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicFive(); // Пятая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 6":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicSix";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicSix(); // Шестая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 7":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicSeven";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicSeven(); // Седьмая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 8":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicEight";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicEight(); // Восьмая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 9":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicNine";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicNine(); // Девятая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 10":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicTen";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicTen(); // Десятая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 11":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicEleven";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicEleven(); // Одиннадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 12":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicTwelve";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicTwelve(); // Двенадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 13":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicThirteen";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicThirteen(); // Тринадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "HTML topic 14":
            soundInput();
            document.getElementById("screen_print").style.display = "none";
    
            Localization = "HTMLTopicFourteen";
    
            CheckingSelection(); // Обновление блоков.
            HTMLTopicFourteen(); // Четырнадцатая тема.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTopics";
    
            CheckingSelection(); // Обновление блоков.
            CSSTopics(); // Все темы CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "css":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTopics";
    
            CheckingSelection(); // Обновление блоков.
            CSSTopics(); // Все темы CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 1":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamOne";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamOne(); // Первая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 2":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamTwo";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamTwo(); // Вторая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 3":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamThree";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamThree(); // Тертья тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 4":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamFour";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamFour(); // Четвёртая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 5":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamFive";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamFive(); // Пятая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 6":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamSix";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamSix(); // Шестая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 7":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamSeven";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamSeven(); // Седьмая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 8":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamEight";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamEight(); // Восьмая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 9":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamNine";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamNine(); // Девятая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 10":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamTen";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamTen(); // Десятая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 11":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamEleven";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamEleven(); // Одиннадцатая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 12":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamTwelve";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamTwelve(); // Двенадцатая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 13":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamThirteen";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamThirteen(); // Тринадцатая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "CSS topic 14":
            soundInput();

            document.getElementById("screen_print").style.display = "none";
    
            Localization = "CSSTheamFourteen";
    
            CheckingSelection(); // Обновление блоков.
            CSSTheamFourteen(); // Четырнадцатая тема CSS.
            PrintDiv(); // Вывод на экран темы.
    
            break;
        case "home":
            soundInput();
            document.getElementById("screen_print").style.display = "block";

            Localization = "closeTheme";

            textPrint();
            CheckingSelection();

            break;
        case "info":
            document.getElementById("screen_print").style.display = "none";

            Localization = "printInfo";

            soundInput(); // Звук нажатия кнопки.

            CheckingSelection(); // Обновление блоков.
            printInfo(); // Вывод на экран текста.
            PrintDiv(); // Вывод на экран.

            break;
        case "rus-lang": 
            choiceLanguage = 1;
            language = "rus";
            languageСhange();
            break;
        case "eng-lang": 
            choiceLanguage = 0;
            language = "eng";
            languageСhange();
            break;
        case "lang": 
            alert(Localization);
            break;
        case "map": 
            siteMap();
            break;
        case "help":
            document.getElementById("screen_print").style.display = "none";

            Localization = "helpMenu";

            soundInput();

            CheckingSelection(); // Обновление блоков.
            helpMenu(); // Смена текста на helpMenu!
            PrintDiv(); // Вывод на экран.
            closeDivInfo(); // Закрытие уведомления.
            
            break;
        case "theme":
            OnTheam();
            break;
        default:
            soundInput();
            let divError = document.getElementById("div_error").style.display = "block";
            if(language == "rus") {
                let spanError = document.getElementById("error").innerHTML = russianLanguage.error;
            }
            else {
                let spanError = document.getElementById("error").innerHTML = englishLanguage.error;
            }
            infoUserPrint();
    }
}

function quickLink() { // Ссылка при нажатие мыши на "ключ-идентификатор"
    soundInput();
    document.getElementById("screen_print").style.display = "none";
    PrintDiv();
}

function quicLinkHome() { // Быстрая ссылка на главную страницу.
    scrollUp();
    soundInput();
    document.getElementById("screen_print").style.display = "block";
    textPrint();
    CheckingSelection();

    Localization = "closeTheme";
}

function quicLinkHomeMenu() { // Быстрая ссылка на главную страницу в меню.
    scrollUp();
    audioButton1();
    document.getElementById("screen_print").style.display = "block";
    textPrint();
    CheckingSelection();

    Localization = "closeTheme";
}

function PrintDiv() { // Вывод на экран div.

    window.scroll(0, 0);

    let container = document.getElementById("start"); // Контейнер, куда будут входить div.

    // Первый блок.
    container.insertBefore(div.div1, document.getElementById("div_error"));

    // Второй блок.
    container.insertBefore(div.div2, document.getElementById("div_error"));

    // Третий блок.
    container.insertBefore(div.div3, document.getElementById("div_error"));

    // Четвёртый блок.
    container.insertBefore(div.div4, document.getElementById("div_error"));

    // Пятый блок.
    container.insertBefore(div.div5, document.getElementById("div_error"));

    // Шестой блок.
    container.insertBefore(div.div6, document.getElementById("div_error"));

    // Седьмой блок.
    container.insertBefore(div.div7, document.getElementById("div_error"));

    // Восьмой блок.
    container.insertBefore(div.div8, document.getElementById("div_error"));

    // Девятый блок.
    container.insertBefore(div.div9, document.getElementById("div_error"));

    // Десятый блок.
    container.insertBefore(div.div10, document.getElementById("div_error"));

    // Одиннадцый блок.
    container.insertBefore(div.div11, document.getElementById("div_error"));

    // Двенадцатый блок.
    container.insertBefore(div.div12, document.getElementById("div_error"));

    // Тринадцатый блок.
    container.insertBefore(div.div13, document.getElementById("div_error"));

    // Четырнадцатый блок.
    container.insertBefore(div.div14, document.getElementById("div_error"));

    // Пятнадцатый блок.
    container.insertBefore(div.div15, document.getElementById("div_error"));

    // Шестнадцатый блок.
    container.insertBefore(div.div16, document.getElementById("div_error"));

    // Семнадцатый блок.
    container.insertBefore(div.div17, document.getElementById("div_error"));

    // Восемнадцатое блок.
    container.insertBefore(div.div18, document.getElementById("div_error"));

    // div19
    container.insertBefore(div.div19, document.getElementById("div_error"));

    // div20
    container.insertBefore(div.div20, document.getElementById("div_error"));

    // div21
    container.insertBefore(div.div21, document.getElementById("div_error"));

    // div22
    container.insertBefore(div.div22, document.getElementById("div_error"));

    // div23
    container.insertBefore(div.div23, document.getElementById("div_error"));

    // div24
    container.insertBefore(div.div24, document.getElementById("div_error"));

    // div25
    container.insertBefore(div.div25, document.getElementById("div_error"));

    // div26
    container.insertBefore(div.div26, document.getElementById("div_error"));

    // div27
    container.insertBefore(div.div27, document.getElementById("div_error"));

    // div28
    container.insertBefore(div.div28, document.getElementById("div_error"));
    
    // div29
    container.insertBefore(div.div29, document.getElementById("div_error"));

    // div30
    container.insertBefore(div.div30, document.getElementById("div_error"));

    // div31
    container.insertBefore(div.div31, document.getElementById("div_error"));

    // div32
    container.insertBefore(div.div32, document.getElementById("div_error"));

    // div33
    container.insertBefore(div.div33, document.getElementById("div_error"));

    // div34
    container.insertBefore(div.div34, document.getElementById("div_error"));

    // div35
    container.insertBefore(div.div35, document.getElementById("div_error"));

    // div36
    container.insertBefore(div.div36, document.getElementById("div_error"));

    // div37
    container.insertBefore(div.div37, document.getElementById("div_error"));

    // div38
    container.insertBefore(div.div38, document.getElementById("div_error"));

    // div39
    container.insertBefore(div.div39, document.getElementById("div_error"));

    // div40
    container.insertBefore(div.div40, document.getElementById("div_error"));

    // div41
    container.insertBefore(div.div41, document.getElementById("div_error"));

    // div42
    container.insertBefore(div.div42, document.getElementById("div_error"));

    // div43
    container.insertBefore(div.div43, document.getElementById("div_error"));

    // div44
    container.insertBefore(div.div44, document.getElementById("div_error"));

    // div45
    container.insertBefore(div.div45, document.getElementById("div_error"));

    // div46
    container.insertBefore(div.div46, document.getElementById("div_error"));

    // div47
    container.insertBefore(div.div47, document.getElementById("div_error"));

    // div48
    container.insertBefore(div.div48, document.getElementById("div_error"));

    // div49
    container.insertBefore(div.div49, document.getElementById("div_error"));

    // div50
    container.insertBefore(div.div50, document.getElementById("div_error"));
}

function CheckingSelection() { //Обновление экрана.
    div.div1.remove();
    div.div2.remove();
    div.div3.remove();
    div.div4.remove();
    div.div5.remove();
    div.div5.remove();
    div.div6.remove();
    div.div7.remove();
    div.div8.remove();
    div.div9.remove();
    div.div10.remove();
    div.div11.remove();
    div.div12.remove();
    div.div13.remove();
    div.div14.remove();
    div.div15.remove();
    div.div16.remove();
    div.div17.remove();
    div.div18.remove();
    div.div19.remove();
    div.div20.remove();
    div.div21.remove();
    div.div22.remove();
    div.div23.remove();
    div.div24.remove();
    div.div25.remove();
    div.div26.remove();
    div.div27.remove();
    div.div28.remove();
    div.div29.remove();
    div.div30.remove();
    div.div31.remove();
    div.div32.remove();
    div.div33.remove();
    div.div34.remove();
    div.div35.remove();
    div.div36.remove();
    div.div37.remove();
    div.div38.remove();
    div.div39.remove();
    div.div40.remove();
    div.div41.remove();
    div.div42.remove();
    div.div43.remove();
    div.div44.remove();
    div.div45.remove();
    div.div46.remove();
    div.div47.remove();
    div.div48.remove();
    div.div49.remove();
    div.div50.remove();
}

function infoUserPrint() { // Создание уведомления.
    let containerInfo = document.getElementById("global_division");

    containerInfo.insertBefore(divInfo, document.getElementById("mainDiv"));

    if(language == 'eng') {
        if(theme == 'black') {
            divInfo.innerHTML = divInfoEng.div1;
        } else if(theme == 'white') {
            divInfo.innerHTML = divInfoEng.div2;
        }
    } else if(language == 'rus') {
        if(theme == 'black') {
            divInfo.innerHTML = divInfoRus.div1;
        } else if(theme == 'white') {
            divInfo.innerHTML = divInfoRus.div2;
        }
    }

    divInfo.className = "divInfo";

    setTimeout(closeDivInfo, 60000);
}

function closeDivInfo() { // Закрытие уведомления.
    audioButton1();
    divInfo.className = "divInfo_none";
}

function printHelloUser() { // Окно приветствия пользователя.
    let containerHello = document.getElementById("global_division");

    containerHello.insertBefore(divHello, document.getElementById("mainDiv"));

    if(language == 'eng') {
        if(theme == 'black') {
            divHello.innerHTML = printHelloUserEng.div1;
        } else if(theme == 'white') {
            divHello.innerHTML = printHelloUserEng.div2;
        }
    } else if(language == 'rus') {
        if(theme == 'black') {
            divHello.innerHTML = printHelloUserRus.div1;
        } else if(theme == 'white') {
            divHello.innerHTML = printHelloUserRus.div2;
        }
    }

    divHello.className = "hello_div";
}

function closePrintHelloUser() { // Закрытие приветствия пользователя.
    audioButton1();
    divHello.className = "hello_div_none";

    infoUserPrint();
}

function ThemeDisplayWindow() { // Показывает название темы.
    let containerTheme = document.getElementById("start");

    containerTheme.insertBefore(divDisplayTheme, document.getElementById("div_error"));

    if(language == 'eng') {
        if(Localization == 'JSTheamOne') {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamOne;
        } else if(Localization == "JSTheamTwo") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamTwo;
        } else if(Localization == "JSTheamThree") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamThree;
        } else if(Localization == "JSTheamFour") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamFour;
        } else if(Localization == "JSTheamFive") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamFive;
        } else if(Localization == "JSTheamSix") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamSix;
        } else if(Localization == "JSTheamSeven") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamSeven;
        } else if(Localization == "JSTheamEight") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamEight;
        } else if(Localization == "JSTheamNine") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamNine;
        } else if(Localization == "JSTheamTen") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamTen;
        } else if(Localization == "JSTheamEleven") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamEleven;
        } else if(Localization == "JSTheamTwelve") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamTwelve;
        } else if(Localization == "JSTheamThirteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamThirteen;
        } else if(Localization == "JSTheamFourteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamFourteen;
        } else if(Localization == "JSTheamFifteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamFifteen;
        } else if(Localization == "JSTheamSixteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamSixteen;
        } else if(Localization == "JSTheamSeventeen") {
            divDisplayTheme.innerHTML = printNameThemeEng.JSTheamSeventeen;
        } else if(Localization == "HTMLTopicOne") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicOne;
        } else if(Localization == "HTMLTopicTwo") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicTwo;
        } else if(Localization == "HTMLTopicThree") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicThree;
        } else if(Localization == "HTMLTopicFour") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicFour;
        } else if(Localization == "HTMLTopicFive") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicFive;
        } else if(Localization == "HTMLTopicSix") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicSix;
        } else if(Localization == "HTMLTopicSeven") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicSeven;
        } else if(Localization == "HTMLTopicEight") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicEight;
        } else if(Localization == "HTMLTopicNine") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicNine;
        } else if(Localization == "HTMLTopicTen") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicTen;
        } else if(Localization == "HTMLTopicEleven") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicEleven;
        } else if(Localization == "HTMLTopicTwelwe") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicTwelwe;
        } else if(Localization == "HTMLTopicThirteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicThirteen;
        } else if(Localization == "HTMLTopicFourteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.HTMLTopicFourteen;
        } else if(Localization == "CSSTheamOne") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamOne;
        } else if(Localization == "CSSTheamTwo") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamTwo;
        } else if(Localization == "CSSTheamThree") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamThree;
        } else if(Localization == "CSSTheamFour") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamFour;
        } else if(Localization == "CSSTheamFive") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamFive;
        } else if(Localization == "CSSTheamSix") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamSix;
        } else if(Localization == "CSSTheamSeven") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamSeven;
        } else if(Localization == "CSSTheamEight") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamEight;
        } else if(Localization == "CSSTheamNine") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamNine;
        } else if(Localization == "CSSTheamTen") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamTen;
        } else if(Localization == "CSSTheamEleven") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamEleven;
        } else if(Localization == "CSSTheamTwelve") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamTwelve;
        } else if(Localization == "CSSTheamThirteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamThirteen;
        } else if(Localization == "CSSTheamFourteen") {
            divDisplayTheme.innerHTML = printNameThemeEng.CSSTheamFourteen;
        } else if(Localization == "siteMap") {
            divDisplayTheme.innerHTML = printNameThemeEng.siteMap;
        } 
    } else if(language == 'rus') {
        if(Localization == 'JSTheamOne') {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamOne;
        } else if(Localization == "JSTheamTwo") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamTwo;
        } else if(Localization == "JSTheamThree") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamThree;
        } else if(Localization == "JSTheamFour") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamFour;
        } else if(Localization == "JSTheamFive") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamFive;
        } else if(Localization == "JSTheamSix") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamSix;
        } else if(Localization == "JSTheamSeven") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamSeven;
        } else if(Localization == "JSTheamEight") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamEight;
        } else if(Localization == "JSTheamNine") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamNine;
        } else if(Localization == "JSTheamTen") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamTen;
        } else if(Localization == "JSTheamEleven") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamEleven;
        } else if(Localization == "JSTheamTwelve") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamTwelve;
        } else if(Localization == "JSTheamThirteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamThirteen;
        } else if(Localization == "JSTheamFourteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamFourteen;
        } else if(Localization == "JSTheamFifteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamFifteen;
        } else if(Localization == "JSTheamSixteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamSixteen;
        } else if(Localization == "JSTheamSeventeen") {
            divDisplayTheme.innerHTML = printNameThemeRus.JSTheamSeventeen;
        } else if(Localization == "HTMLTopicOne") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicOne;
        } else if(Localization == "HTMLTopicTwo") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicTwo;
        } else if(Localization == "HTMLTopicThree") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicThree;
        } else if(Localization == "HTMLTopicFour") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicFour;
        } else if(Localization == "HTMLTopicFive") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicFive;
        } else if(Localization == "HTMLTopicSix") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicSix;
        } else if(Localization == "HTMLTopicSeven") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicSeven;
        } else if(Localization == "HTMLTopicEight") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicEight;
        } else if(Localization == "HTMLTopicNine") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicNine;
        } else if(Localization == "HTMLTopicTen") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicTen;
        } else if(Localization == "HTMLTopicEleven") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicEleven;
        } else if(Localization == "HTMLTopicTwelve") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicTwelve;
        } else if(Localization == "HTMLTopicThirteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicThirteen;
        } else if(Localization == "HTMLTopicFourteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.HTMLTopicFourteen;
        } else if(Localization == "CSSTheamOne") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamOne;
        } else if(Localization == "CSSTheamTwo") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamTwo;
        } else if(Localization == "CSSTheamThree") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamThree;
        } else if(Localization == "CSSTheamFour") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamFour;
        } else if(Localization == "CSSTheamFive") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamFive;
        } else if(Localization == "CSSTheamSix") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamSix;
        } else if(Localization == "CSSTheamSeven") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamSeven;
        } else if(Localization == "CSSTheamEight") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamEight;
        } else if(Localization == "CSSTheamNine") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamNine;
        } else if(Localization == "CSSTheamTen") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamTen;
        } else if(Localization == "CSSTheamEleven") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamEleven;
        } else if(Localization == "CSSTheamTwelve") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamTwelve;
        } else if(Localization == "CSSTheamThirteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamThirteen;
        } else if(Localization == "CSSTheamFourteen") {
            divDisplayTheme.innerHTML = printNameThemeRus.CSSTheamFourteen;
        } else if(Localization == "siteMap") {
            divDisplayTheme.innerHTML = printNameThemeRus.siteMap;
        } 
    }

    divDisplayTheme.className = "div_theme_display"; // Применение темы к блоку.
    divDisplayTheme.id = "divDisplayTheme"; // Я не знаю как в JS присваивать id, поэтому будет так.
}

function closeThemeDisplayWindow() { // Проверка на закрытие названия темы.
    if(Localization == "closeTheme" || Localization == "JSTopics" || Localization == "HTMLTopics" || Localization == "CSSTopics" || Localization == "helpMenu" || Localization == "printInfo") {
        divDisplayTheme.className = "div_theme_display_none";
    }
}

setInterval(closeThemeDisplayWindow, 200);

function OnTheam() { // Показ окна с выбором темы.
    scrollUp();
	audioButton1();
	
    let containerTheam = document.getElementById("global_division");
	
    containerTheam.insertBefore(divThemeWhite, document.getElementById("mainDiv"));
	
    divThemeWhite.className = "div_Theme_White";
	divThemeWhite.id = "divThemeWindows";
	
    AdaptiveOnWhiteTheam();
}

OnTheam();

function AdaptiveOnWhiteTheam() { // Адаптив для выбора темы.
    if(mobile == true) {
        divThemeWhite.innerHTML = ChoiceThemeDisplay.div2_mobile;

        if(language == "eng") {
            divThemeWhite.innerHTML = ChoiceThemeDisplay.div2_mobile_eng;
        } else if(language == "rus") {
            divThemeWhite.innerHTML = ChoiceThemeDisplay.div2_mobile;
        }
    } else if(mobile == false && mobileModule == true) {
        divThemeWhite.innerHTML = ChoiceThemeDisplay.div2_mobile;

        if(language == "eng") {
            divThemeWhite.innerHTML = ChoiceThemeDisplay.div2_mobile_eng;
        } else if(language == "rus") {
            divThemeWhite.innerHTML = ChoiceThemeDisplay.div2_mobile;
        }
    } else if(mobile == false && mobileModule == false) {
        divThemeWhite.innerHTML = ChoiceThemeDisplay.div1_PC;

        if(language == "eng") {
            divThemeWhite.innerHTML = ChoiceThemeDisplay.div1_PC_eng;
        } else if(language == "rus") {
            divThemeWhite.innerHTML = ChoiceThemeDisplay.div1_PC;
        }
    }
}

function checkAdaptiveTheme() { // Проверка адаптива.
    if(mobile == true) {
        AdaptiveOnWhiteTheam();
    } else if(mobile == false && mobileModule == true) {
        AdaptiveOnWhiteTheam();
    }
}

setInterval(checkAdaptiveTheme, 500);

function OnWhiteTheam() { // Включение белой темы.
    audioButton1();
    divThemeWhite.className = "div_Theme_White_none";

    theme = "white";

    document.getElementById('style').href = 'css/styleWhite.css';
    document.getElementById('btn_image_menu').src = 'image/menuBlack.png';

    if(HelloUser == true) {
        printHelloUser();
    }
    HelloUser = false
}

function OnBlackTheam() { // Включение тёмной темы.
    audioButton1();
    divThemeWhite.className = "div_Theme_White_none";

    theme = "black";

    document.getElementById('style').href = 'css/styleBlack.css';
    document.getElementById('btn_image_menu').src = 'image/menu.png';

    if(HelloUser == true) {
        printHelloUser();
    }
    HelloUser = false
}

function scrollUp() { // Перемотка на верх.
    if(scrollUpVar == true) {
        window.scroll(1, 1);
    } else if(scrollUpVar == false) {
        console.log('Перемотка на верх отменена.');
        scrollUpVar = true;
    }
}

// SideBar 
function audioStartSideBar() { // Звук открытия SideBar.
    let audio = new Audio(); 
    audio.src = "../sound/sidebar.mp3";
    audio.volume = 0.4;
    audio.autoplay = true;
}

function audioButton1() { // Звук нажатия кнопки в SideBar.
    let audio = new Audio(); 
    audio.src = "../sound/button1.mp3";
    audio.volume = 0.6;
    audio.autoplay = true;
}

function openMenuBar() { // Функция открытия SideBar.
    if(sidebarSoundClose == false) {
        sidebarSoundClose = true;
    }

    audioStartSideBar();
    let aside = document.getElementById("bar_menu").style.display = "block";
    let btnMenuAside = document.getElementById("btn_sidebar").style.display = "none";
}

function closeSidebar() { // Функция закрытия SideBar.
    if(sidebarSoundClose == true) {
        sidebarSoundClose = false;
        audioStartSideBar();
    }
    let aside = document.getElementById("bar_menu").style.display = "none";
    let btnMenuAside = document.getElementById("btn_sidebar").style.display = "block";
}

function languageSideBar() { // Локализация SideBar.
    if(language == "rus") {
        let btnLanguage = document.getElementById("btn_language").innerHTML = russianLanguage.sideBar[0];
        let btnTheme = document.getElementById("btn_theme").innerHTML = russianLanguage.sideBar[1];
        let btnStartScreen = document.getElementById("btn_start").innerHTML = russianLanguage.sideBar[2];
        let btnMapSite = document.getElementById("btn_map").innerHTML = russianLanguage.sideBar[3];
    } else {
        let btnLanguage = document.getElementById("btn_language").innerHTML = englishLanguage.sideBar[0];
        let btnTheme = document.getElementById("btn_theme").innerHTML = englishLanguage.sideBar[1];
        let btnStartScreen = document.getElementById("btn_start").innerHTML = englishLanguage.sideBar[2];
        let btnMapSite = document.getElementById("btn_map").innerHTML = englishLanguage.sideBar[3];
    }
}

setInterval(languageSideBar, 50); // Обновляет текст в SideBar.

function languageСhange() { // Смена языка.
    audioButton1();
    scrollUpVar = false;
    if(choiceLanguage == 0) {
        choiceLanguage += 1;
        language = "eng";

        if(Localization == "JSTheamOne") { // Локализация для JS.
            JSTheamOne();
        } else if(Localization == "closeTheme") {
            textPrint();
        } else if(Localization == "JSTopics") {
            JSTopics();
        } else if(Localization == "JSTheamTwo") {
            JSTheamTwo();
        } else if(Localization == "JSTheamThree") {
            JSTheamThree();
        } else if(Localization == "JSTheamFour") {
            JSTheamFour();
        } else if(Localization == "JSTheamFive") {
            JSTheamFive();
        } else if(Localization == "JSTheamSix") {
            JSTheamSix();
        } else if(Localization == "JSTheamSeven") {
            JSTheamSeven();
        } else if(Localization == "JSTheamEight") {
            JSTheamEight();
        } else if(Localization == "JSTheamEightPartTwo") {
            JSTheamEightPartTwo();
        } else if(Localization == "JSTheamNine") {
            JSTheamNine();
        } else if(Localization == "JSTheamTen") {
            JSTheamTen(); 
        } else if(Localization == "JSTheamEleven") {
            JSTheamEleven(); 
        } else if(Localization == "JSTheamTwelve") {
            JSTheamTwelve();
        } else if(Localization == "JSTheamThirteen") {
            JSTheamThirteen(); 
        } else if(Localization == "JSTheamFourteen") {
            JSTheamFourteen(); 
        } else if(Localization == "JSTheamFifteen") {
            JSTheamFifteen(); 
        } else if(Localization == "JSTheamFifteenPartTwo") {
            JSTheamFifteenPartTwo(); 
        } else if(Localization == "JSTheamSixteen") {
            JSTheamSixteen(); 
        } else if(Localization == "JSTheamSeventeen") {
            JSTheamSeventeen(); 
        } else if(Localization == "printInfo") {
            printInfo(); // Локализация для Info.
        } else if(Localization == "helpMenu") {
            helpMenu(); // Локализация для helpMenu.
        } else if(Localization == "HTMLTopics") {
            HTMLTopics(); // HTML.
        } else if(Localization == "HTMLTopicOne") {
            HTMLTopicOne(); 
        } else if(Localization == "HTMLTopicTwo") {
            HTMLTopicTwo(); 
        } else if(Localization == "HTMLTopicThree") {
            HTMLTopicThree(); 
        } else if(Localization == "HTMLTopicFour") {
            HTMLTopicFour(); 
        } else if(Localization == "HTMLTopicFive") {
            HTMLTopicFive(); 
        } else if(Localization == "HTMLTopicSix") {
            HTMLTopicSix(); 
        } else if(Localization == "HTMLTopicSeven") {
            HTMLTopicSeven(); 
        } else if(Localization == "HTMLTopicEight") {
            HTMLTopicEight(); 
        } else if(Localization == "HTMLTopicNine") {
            HTMLTopicNine(); 
        } else if(Localization == "HTMLTopicTen") {
            HTMLTopicTen(); 
        } else if(Localization == "HTMLTopicEleven") {
            HTMLTopicEleven(); 
        } else if(Localization == "HTMLTopicTwelve") {
            HTMLTopicTwelve(); 
        } else if(Localization == "HTMLTopicThirteen") {
            HTMLTopicThirteen(); 
        } else if(Localization == "HTMLTopicFourteen") {
            HTMLTopicFourteen(); 
        } else if(Localization == "CSSTopics") { // CSS
            CSSTopics(); 
        } else if(Localization == "CSSTheamOne") {
            CSSTheamOne(); 
        } else if(Localization == "CSSTheamTwo") {
            CSSTheamTwo(); 
        } else if(Localization == "CSSTheamThree") {
            CSSTheamThree(); 
        } else if(Localization == "CSSTheamFour") {
            CSSTheamFour(); 
        } else if(Localization == "CSSTheamFive") {
            CSSTheamFive(); 
        } else if(Localization == "CSSTheamSix") {
            CSSTheamSix(); 
        } else if(Localization == "CSSTheamSeven") {
            CSSTheamSeven(); 
        } else if(Localization == "CSSTheamEight") {
            CSSTheamEight(); 
        } else if(Localization == "CSSTheamNine") {
            CSSTheamNine(); 
        } else if(Localization == "CSSTheamTen") {
            CSSTheamTen(); 
        } else if(Localization == "CSSTheamEleven") {
            CSSTheamEleven(); 
        } else if(Localization == "CSSTheamTwelve") {
            CSSTheamTwelve(); 
        } else if(Localization == "CSSTheamThirteen") {
            CSSTheamThirteen(); 
        } else if(Localization == "CSSTheamFourteen") {
            CSSTheamFourteen(); 
        } else if(Localization == "siteMap") { // Карта сайта.
            siteMap(); 
        } 
    }
    else if(choiceLanguage == 1) {
        choiceLanguage -= 1;
        language = "rus";

        if(Localization == "JSTheamOne") { // Локализация для JS.
            JSTheamOne();
        } else if(Localization == "closeTheme") {
            textPrint();
        } else if(Localization == "JSTopics") {
            JSTopics();
        } else if(Localization == "JSTheamTwo") {
            JSTheamTwo();
        } else if(Localization == "JSTheamThree") {
            JSTheamThree();
        } else if(Localization == "JSTheamFour") {
            JSTheamFour();
        } else if(Localization == "JSTheamFive") {
            JSTheamFive();
        } else if(Localization == "JSTheamSix") {
            JSTheamSix();
        } else if(Localization == "JSTheamSeven") {
            JSTheamSeven();
        } else if(Localization == "JSTheamEight") {
            JSTheamEight();
        } else if(Localization == "JSTheamEightPartTwo") {
            JSTheamEightPartTwo();
        } else if(Localization == "JSTheamNine") {
            JSTheamNine();
        } else if(Localization == "JSTheamTen") {
            JSTheamTen(); // Десятая тема.
        } else if(Localization == "JSTheamEleven") {
            JSTheamEleven(); 
        } else if(Localization == "JSTheamTwelve") {
            JSTheamTwelve();
        } else if(Localization == "JSTheamThirteen") {
            JSTheamThirteen(); 
        } else if(Localization == "JSTheamFourteen") {
            JSTheamFourteen(); 
        } else if(Localization == "JSTheamFifteen") {
            JSTheamFifteen(); 
        } else if(Localization == "JSTheamFifteenPartTwo") {
            JSTheamFifteenPartTwo(); 
        } else if(Localization == "JSTheamSixteen") {
            JSTheamSixteen(); 
        } else if(Localization == "JSTheamSeventeen") {
            JSTheamSeventeen(); 
        } else if(Localization == "printInfo") {
            printInfo(); // Локализация для Info.
        } else if(Localization == "helpMenu") {
            helpMenu(); // Локализация для helpMenu.
        } else if(Localization == "HTMLTopics") {
            HTMLTopics(); // HTML.
        } else if(Localization == "HTMLTopicOne") {
            HTMLTopicOne(); 
        } else if(Localization == "HTMLTopicTwo") {
            HTMLTopicTwo(); 
        } else if(Localization == "HTMLTopicThree") {
            HTMLTopicThree(); 
        } else if(Localization == "HTMLTopicFour") {
            HTMLTopicFour(); 
        } else if(Localization == "HTMLTopicFive") {
            HTMLTopicFive(); 
        } else if(Localization == "HTMLTopicSix") {
            HTMLTopicSix(); 
        } else if(Localization == "HTMLTopicSeven") {
            HTMLTopicSeven(); 
        } else if(Localization == "HTMLTopicEight") {
            HTMLTopicEight(); 
        } else if(Localization == "HTMLTopicNine") {
            HTMLTopicNine(); 
        } else if(Localization == "HTMLTopicTen") {
            HTMLTopicTen(); 
        } else if(Localization == "HTMLTopicEleven") {
            HTMLTopicEleven(); 
        } else if(Localization == "HTMLTopicTwelve") {
            HTMLTopicTwelve(); 
        } else if(Localization == "HTMLTopicThirteen") {
            HTMLTopicThirteen(); 
        } else if(Localization == "HTMLTopicFourteen") {
            HTMLTopicFourteen(); 
        } else if(Localization == "CSSTopics") { // CSS
            CSSTopics(); 
        } else if(Localization == "CSSTheamOne") {
            CSSTheamOne(); 
        } else if(Localization == "CSSTheamTwo") {
            CSSTheamTwo(); 
        } else if(Localization == "CSSTheamThree") {
            CSSTheamThree(); 
        } else if(Localization == "CSSTheamFour") {
            CSSTheamFour(); 
        } else if(Localization == "CSSTheamFive") {
            CSSTheamFive(); 
        } else if(Localization == "CSSTheamSix") {
            CSSTheamSix(); 
        } else if(Localization == "CSSTheamSeven") {
            CSSTheamSeven(); 
        } else if(Localization == "CSSTheamEight") {
            CSSTheamEight(); 
        } else if(Localization == "CSSTheamNine") {
            CSSTheamNine(); 
        } else if(Localization == "CSSTheamTen") {
            CSSTheamTen(); 
        } else if(Localization == "CSSTheamEleven") {
            CSSTheamEleven(); 
        } else if(Localization == "CSSTheamTwelve") {
            CSSTheamTwelve(); 
        } else if(Localization == "CSSTheamThirteen") {
            CSSTheamThirteen(); 
        } else if(Localization == "CSSTheamFourteen") {
            CSSTheamFourteen(); 
        } else if(Localization == "siteMap") { // Карта сайта.
            siteMap(); 
        } 
    }
}

function checkingAdaptive() { // Проверка расширения экрана.
    if(window.innerWidth < 630) {
        mobile = true;
        mobileModule = true;
    } else if(window.innerWidth > 700) {
        mobile = false;
        mobileModule = false;
    } else {
        mobile = false;
    }
}

setInterval(checkingAdaptive, 100); 

function checkMobileFocus() { // Фокус на input.
    let width = window.innerWidth;
    let height = window.innerHeight;
    let permission = width * height; // Разрешение экрана.
    if(permission > 800000) {
        setInterval(focusInput, 100); // Наводит фокус на input.
        focusInputVar = true;
    } else if(permission < 800000) {
        focusInputVar = false;
    }
}

setInterval(checkMobileFocus, 300);

function classAdaptive() { // Изменение стилей под мобильный экран.
    if(mobile == true) { // Мобильная версия.
        document.getElementById("aside").style.display = "none";
        document.getElementById("mainDiv").style.width = "100%";
        document.getElementById("global_division").style.flexDirection = "column";
        document.body.style.padding = "0";
        document.body.style.fontSize = "5vw";
        document.getElementById("input").style.fontSize = "5vw";
        document.getElementById("arrow").style.fontSize = "10vw";

        document.getElementById("screen_input").style.maxHeight = "55px";
        document.getElementById("screen_input").style.minHeight = "55px";

        document.getElementById("buttonHelloUser").style.fontSize = "3vw";
        document.getElementById("divDisplayTheme").style.left = "20%";
    } else if(mobile == false && mobileModule == true) { // Планшетная версия.
        document.body.style.fontSize = "3vw";
        document.getElementById("input").style.fontSize = "3vw";
        document.getElementById("arrow").style.fontSize = "5vw";

        document.getElementById("screen_input").style.maxHeight = "55px";
        document.getElementById("screen_input").style.minHeight = "55px";

        document.getElementById("buttonHelloUser").style.fontSize = "2vw";
        document.getElementById("divDisplayTheme").style.left = "20%";
    } else if(mobile == false && mobileModule == false) { // настольная версия.
        document.getElementById("aside").style.display = "block";
        document.getElementById("mainDiv").style.width = "70%";
        document.getElementById("global_division").style.flexDirection = "row";
        document.body.style.padding = "1% 15% 1% 0";
        document.body.style.fontSize = "1.7vw";
        document.getElementById("input").style.fontSize = "1.7vw";
        document.getElementById("arrow").style.fontSize = "4vw";

        document.getElementById("buttonHelloUser").style.fontSize = "1.7vw";
        document.getElementById("divDisplayTheme").style.left = "24.7%";
    }
}

setInterval(classAdaptive, 200);

function checkMobileCSS() { // Проверка и включение мобильных CSS-файлов.
    if(mobile == true) {
        if(theme == "black") {
            document.getElementById('style').href = 'css/styleBlackMobile.css';
        } else if(theme == "white") {
            document.getElementById('style').href = 'css/styleWhiteMobile.css';
        }
    } else {
        if(theme == "black") {
            document.getElementById('style').href = 'css/styleBlack.css';
        } else if(theme == "white") {
            document.getElementById('style').href = 'css/styleWhite.css';
        }
    }
}

setInterval(checkMobileCSS, 500);
