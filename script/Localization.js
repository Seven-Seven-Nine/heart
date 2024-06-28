"use strict";

// Говорил же мне голос в голове, что надо учить PHP, так хотя бы запихнул всё это в БД...

// Приветственное окно.
let printHelloUserEng = {
    div1: '<p>Hi</p><p>The site is managed through the input line, in which commands are entered:</p><div class="div_image"><image class="big_image" src="image/input.png" alt="image"></div><p>Or using "sitelinks":</p><div class="div_image"><image class="small_image" src="image/link.png" alt="image"></div><p>There are three buttons in the site menu: “Home Screen” - returns to the home screen, “Language” - each click on this button changes the language of the site, “Theme” - a window appears with the choice of a light or dark theme, “Site Map” - opens to the user site map.</p><p>*The site may contain outdated information at the moment.</p><div class="div_image"><button id="buttonHelloUser" class="buttonHelloUser" onclick="closePrintHelloUser()">Понял</button></div>',

    div2: '<p>Hi</p><p>The site is managed through the input line, in which commands are entered:</p><div class="div_image"><image class="big_image" src="image/inputWhite.png" alt="image"></div><p>Or using "sitelinks":</p><div class="div_image"><image class="small_image" src="image/linkWhite.png" alt="image"></div><p>There are three buttons in the site menu: “Home Screen” - returns to the home screen, “Language” - each click on this button changes the language of the site, “Theme” - a window appears with the choice of a light or dark theme, “Site Map” - opens to the user site map.</p><p>*The site may contain outdated information at the moment.</p><div class="div_image"><button id="buttonHelloUser" class="buttonHelloUser" onclick="closePrintHelloUser()">Понял</button></div>',
}

let printHelloUserRus = {
    div1: '<p><b>Внимание!</b></p><p>Концепция сайта предполагает два способа управления. Первый способ - осуществляется через строку ввода, в которую вводятся команды:</p><div class="div_image"><image src="image/input.png" alt="image"></div><p>Второй способ - это «быстрые ссылки»:</p><div class="div_image"><image src="image/link.png" alt="image"></div><p>В меню сайта имеются три кнопки: «Начальный экран» - возвращает на начальный экран, «Язык» - каждое нажатие на эту кнопку меняет язык сайта, «Тема» - появляется окно с выбором светлой или тёмной темы, «Карта сайта» - открывает пользователю карту сайта.</p><p>*Сайт может содержать в себе устаревшую информацию на данный момент*</p><div class="div_image"><button id="buttonHelloUser" class="buttonHelloUser" onclick="closePrintHelloUser()">Понял</button></div>',

    div2: '<p><b>Внимание!</b></p><p>Концепция сайта предполагает два способа управления. Первый способ - осуществляется через строку ввода, в которую вводятся команды:</p><div class="div_image"><image src="image/inputWhite.png" alt="image"></div><p>Второй способ - это «быстрые ссылки»:</p><div class="div_image"><image src="image/linkWhite.png" alt="image"></div><p>В меню сайта имеются три кнопки: «Начальный экран» - возвращает на начальный экран, «Язык» - каждое нажатие на эту кнопку меняет язык сайта, «Тема» - появляется окно с выбором светлой или тёмной темы, «Карта сайта» - открывает пользователю карту сайта.</p><p>*Сайт может содержать в себе устаревшую информацию на данный момент*</p><div class="div_image"><button id="buttonHelloUser" class="buttonHelloUser" onclick="closePrintHelloUser()">Понял</button></div>',
}

// Уведомление.
let divInfoEng = {
    div1: '<div onclick="closeDivInfo()" class="div_info_flex"><img src="image/info_white.png" alt="ico"><p>help - list of all commands</p></div>',

    div2: '<div onclick="closeDivInfo()" class="div_info_flex"><img src="image/info_black.png" alt="ico"><p>help - list of all commands</p></div>',
}

let divInfoRus = {
    div1: '<div onclick="closeDivInfo()" class="div_info_flex"><img src="image/info_white.png" alt="ico"><p>help - список всех команд</p></div>',

    div2: '<div onclick="closeDivInfo()" class="div_info_flex"><img src="image/info_black.png" alt="ico"><p>help - список всех команд</p></div>',
}

// Название тем.
let printNameThemeRus = {
    JSTheamOne: 'Привет, мир!',

    JSTheamTwo: 'Структура кода',

    JSTheamThree: 'Строгий режим — "use strict"',

    JSTheamFour: 'Переменные',

    JSTheamFive: 'Типы данных',

    JSTheamSix: 'Взаимодействие: alert, prompt, confirm',

    JSTheamSeven: 'Преобразование типов',

    JSTheamEight: 'Базовые операторы, математика',

    JSTheamNine: 'Операторы сравнения',

    JSTheamTen: 'Условное ветвление: if, "?"',

    JSTheamEleven: 'Логические операторы',

    JSTheamTwelve: 'Оператор нулевого слияния',

    JSTheamThirteen: 'Циклы while и for',

    JSTheamFourteen: 'Конструкция "switch"',

    JSTheamFifteen: 'Функции',

    JSTheamSixteen: 'Function Expression',

    JSTheamSeventeen: 'Стрелочные функции, основы',

    HTMLTopicOne: 'Введение в HTML',

    HTMLTopicTwo: 'Инструментарий',

    HTMLTopicThree: 'Теги',

    HTMLTopicFour: 'Структура HTML-кода',

    HTMLTopicFive: 'Типы тегов',

    HTMLTopicSix: 'Значение атрибутов тегов',

    HTMLTopicSeven: 'Текст',

    HTMLTopicEight: 'Ссылки',

    HTMLTopicNine: 'Якоря',

    HTMLTopicTen: 'Изображения',

    HTMLTopicEleven: 'Списки',

    HTMLTopicTwelve: 'Таблицы',

    HTMLTopicThirteen: 'Фреймы',

    HTMLTopicFourteen: 'Валидация документов',

    CSSTheamOne: 'Введение в CSS',

    CSSTheamTwo: 'Преимущество стилей',

    CSSTheamThree: 'Способы добавления стилей на страницу',

    CSSTheamFour: 'Типы носителей',

    CSSTheamFive: 'Базовый синтаксис CSS',

    CSSTheamSix: 'Значение стилевых свойств',

    CSSTheamSeven: 'Селекторы тегов',

    CSSTheamEight: 'Классы',

    CSSTheamNine: 'Идентификаторы',

    CSSTheamTen: 'Контекстные селекторы',

    CSSTheamEleven: 'Дочерние селекторы',

    CSSTheamTwelve: 'Псевдоклассы',

    CSSTheamThirteen: 'Псевдоэлементы',

    CSSTheamFourteen: 'Наследование',

    siteMap: 'Карта сайта'
}

let printNameThemeEng = {
    JSTheamOne: 'Hello, world!',

    JSTheamTwo: 'Code structure',

    JSTheamThree: '"use strict"',

    JSTheamFour: 'Variables',

    JSTheamFive: 'Data Types',

    JSTheamSix: 'Interaction: alert, prompt, confirm',

    JSTheamSeven: 'Type Conversion',

    JSTheamEight: 'Basic operators, mathematics',

    JSTheamNine: 'Comparison operators',

    JSTheamTen: 'Conditional branching: if, "?"',

    JSTheamEleven: 'Logical operators',

    JSTheamTwelve: 'Zero Merge operator',

    JSTheamThirteen: 'While and for loops',

    JSTheamFourteen: 'The "switch" design',

    JSTheamFifteen: 'Functions',

    JSTheamSixteen: 'Function Expression',

    JSTheamSeventeen: 'Arrow functions, basics',

    HTMLTopicOne: 'Introduction to HTML',

    HTMLTopicTwo: 'Tools',

    HTMLTopicThree: 'Tags',

    HTMLTopicFour: 'HTML code structure',

    HTMLTopicFive: 'Types of tags',

    HTMLTopicSix: 'Tag attribute values',

    HTMLTopicSeven: 'Text',

    HTMLTopicEight: 'Links',

    HTMLTopicNine: 'Anchors',

    HTMLTopicTen: 'Images',

    HTMLTopicEleven: 'Lists',

    HTMLTopicTwelwe: 'Tables',

    HTMLTopicThirteen: 'Frames',

    HTMLTopicFourteen: 'Document validation',

    CSSTheamOne: 'Introduction to CSS',

    CSSTheamTwo: 'Advantage of styles',

    CSSTheamThree: 'Ways to add styles to a page',

    CSSTheamFour: 'Media Types',

    CSSTheamFive: 'Basic CSS syntax',

    CSSTheamSix: 'Meaning of style properties',

    CSSTheamSeven: 'Tag Selectors',

    CSSTheamEight: 'Classes',

    CSSTheamNine: 'Identifiers',

    CSSTheamTen: 'Context selectors',

    CSSTheamEleven: 'Adjacent selectors',

    CSSTheamTwelve: 'Child selectors',

    CSSTheamThirteen: 'Attribute selectors',

    CSSTheamFourteen: 'Universal selector',

    CSSTheamFifteen: 'Pseudo-classes',

    CSSTheamSixteen: 'Pseudo-elements',

    CSSTheamSeventeen: 'Grouping',

    CSSTheamEighteen: 'Inheritance',

    CSSTheamNineteen: 'Cascading',

    CSSTheamTwenty: 'Identifiers and classes',

    siteMap: 'Site map'
}

// Выбор темы.
let ChoiceThemeDisplay = {
    div1_PC: '<p class="p_center">Выберите тему:</p><div class="div_theme_flex_row"><div><img class="img_theme_PC" src="image/HEART_DarkENG.png" alt="image_theme" onclick="OnBlackTheam()"></div><div><img class="img_theme_PC" src="image/HEART_WhiteENG.png" alt="image_theme" onclick="OnWhiteTheam()"></div></div>',

    div2_mobile: '<p class="p_center">Выберите тему:</p><div class="div_theme_flex_colum"><div><img class="img_theme_Mobile" src="image/HEART_DarkENG.png" alt="image_theme" onclick="OnBlackTheam()"></div><div><img class="img_theme_Mobile" src="image/HEART_WhiteENG.png" alt="image_theme" onclick="OnWhiteTheam()"></div></div>',

    div1_PC_eng: '<p class="p_center">Select a theme:</p><div class="div_theme_flex_row"><div><img class="img_theme_PC" src="image/HEART_DarkENG.png" alt="image_theme" onclick="OnBlackTheam()"></div><div><img class="img_theme_PC" src="image/HEART_WhiteENG.png" alt="image_theme" onclick="OnWhiteTheam()"></div></div>',

    div2_mobile_eng: '<p class="p_center">Select a theme:</p><div class="div_theme_flex_colum"><div><img class="img_theme_Mobile" src="image/HEART_DarkENG.png" alt="image_theme" onclick="OnBlackTheam()"></div><div><img class="img_theme_Mobile" src="image/HEART_WhiteENG.png" alt="image_theme" onclick="OnWhiteTheam()"></div></div>',
}

// Карта сайта
let siteMapEng = {
    div1: '<ul><li><a href="#" onclick="quickLink(); HTMLTopics()">HTML</a> <ul><li><a href="#" onclick="quickLink(); HTMLTopicOne()">Introduction to HTML</a></li><li><a href="#" onclick="quickLink(); HTMLTopicTwo()">Tools</a></li><li><a href="#" onclick="quickLink(); HTMLTopicThree()">Tags</a></li><li><a href="#" onclick="quickLink(); HTMLTopicFour()">HTML code structure</a></li><li><a href="#" onclick="quickLink(); HTMLTopicFive()">Tag types</a></li><li><a href="#" onclick="quickLink(); HTMLTopicSix()">Tag attribute values</a></li><li><a href="#" onclick="quickLink(); HTMLTopicSeven()">Text</a></li><li><a href="#" onclick="quickLink(); HTMLTopicEight()">Links</a></li><li><a href="#" onclick="quickLink(); HTMLTopicNine()">Anchors</a></li><li><a href="#" onclick="quickLink(); HTMLTopicTen()">Images</a></li><li><a href="#" onclick="quickLink(); HTMLTopicEleven()">Lists</a></li><li><a href="#" onclick="quickLink(); HTMLTopicTwelve()">Tables</a></li><li><a href="#" onclick="quickLink(); HTMLTopicThirteen()">Frames</a></li><li><a href="#" onclick="quickLink(); HTMLTopicFourteen()">Validation</a></li></ul> </li> <li><a href="#" onclick="quickLink(); CSSTopics()">CSS</a> <ul><li><a href="#" onclick="quickLink(); CSSTheamOne()">Introduction to CSS</a></li><li><a href="#" onclick="quickLink(); CSSTheamTwo()">Advantage of styles</a></li><li><a href="#" onclick="quickLink(); CSSTheamThree()">Ways to add styles to a page</a></li><li><a href="#" onclick="quickLink(); CSSTheamFour()">Media types</a></li><li><a href="#" onclick="quickLink(); CSSTheamFive()">Basic CSS Syntax</a></li><li><a href="#" onclick="quickLink(); CSSTheamSix()">Meaning of style properties</a></li><li><a href="#" onclick="quickLink(); CSSTheamSeven()">Tag selectors</a></li><li><a href="#" onclick="quickLink(); CSSTheamEight()">Classes</a></li><li><a href="#" onclick="quickLink(); CSSTheamNine()">Identifiers</a></li><li><a href="#" onclick="quickLink(); CSSTheamTen()">Context selectors</a></li><li><a href="#" onclick="quickLink(); CSSTheamEleven()">Child selectors</a></li><li><a href="#" onclick="quickLink(); CSSTheamTwelve()">Pseudo-classes</a></li><li><a href="#" onclick="quickLink(); CSSTheamThirteen()">Pseudo-elements</a></li><li><a href="#" onclick="quickLink(); CSSTheamFourteen()">Inheritance</a></li></ul></li> <li><a href="#" onclick="quickLink(); JSTopics()">JavaScript</a> <ul><li><a href="#" onclick="quickLink(); JSTheamOne()">Hello World!</a></li><li><a href="#" onclick="quickLink(); JSTheamTwo()">Code structure</a></li><li><a href="#" onclick="quickLink(); JSTheamThree()">Strict regime</a></li><li><a href="#" onclick="quickLink(); JSTheamFour()">Variables</a></li><li><a href="#" onclick="quickLink(); JSTheamFive()">Data type</a></li><li><a href="#" onclick="quickLink(); JSTheamSix()">Interaction: alert, prompt, confirm</a></li><li><a href="#" onclick="quickLink(); JSTheamSeven()">Type Conversion</a></li><li><a href="#" onclick="quickLink(); JSTheamEight()">Basic operators, mathematics</a></li><li><a href="#" onclick="quickLink(); JSTheamNine()">Comparison Operators</a></li><li><a href="#" onclick="quickLink(); JSTheamTen()">Conditional branching: if, \'?\'</a></li><li><a href="#" onclick="quickLink(); JSTheamEleven()">Logical operators</a></li><li><a href="#" onclick="quickLink(); JSTheamTwelve()">Null merge operator</a></li><li><a href="#" onclick="quickLink(); JSTheamThirteen()">While and for loops</a></li><li><a href="#" onclick="quickLink(); JSTheamFourteen()">"Switch" design</a></li><li><a href="#" onclick="quickLink(); JSTheamFifteen()">Functions</a></li><li><a href="#" onclick="quickLink(); JSTheamSixteen()">Function Expression</a></li><li><a href="#" onclick="quickLink(); JSTheamSeventeen()">Arrow Functions Basics</a></li></ul></li> <li><a href="#" onclick="quickLink(); printInfo()">Info</a></li> <li><a href="#" onclick="quickLink(); helpMenu()">Help menu</a></li></ul>',

    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen',
}
// <li><a href="#" onclick="quickLink(); __TOPIC__()">__NAME__</a></li>
let siteMapRus = {
    div1: '<ul><li><a href="#" onclick="quickLink(); HTMLTopics()">HTML</a> <ul><li><a href="#" onclick="quickLink(); HTMLTopicOne()">Введение в HTML</a></li><li><a href="#" onclick="quickLink(); HTMLTopicTwo()">Инструментарий</a></li><li><a href="#" onclick="quickLink(); HTMLTopicThree()">Теги</a></li><li><a href="#" onclick="quickLink(); HTMLTopicFour()">Структура HTML-кода</a></li><li><a href="#" onclick="quickLink(); HTMLTopicFive()">Типы тегов</a></li><li><a href="#" onclick="quickLink(); HTMLTopicSix()">Значения атрибутов тегов</a></li><li><a href="#" onclick="quickLink(); HTMLTopicSeven()">Текст</a></li><li><a href="#" onclick="quickLink(); HTMLTopicEight()">Ссылки</a></li><li><a href="#" onclick="quickLink(); HTMLTopicNine()">Якоря</a></li><li><a href="#" onclick="quickLink(); HTMLTopicTen()">Изображения</a></li><li><a href="#" onclick="quickLink(); HTMLTopicEleven()">Списки</a></li><li><a href="#" onclick="quickLink(); HTMLTopicTwelve()">Таблицы</a></li><li><a href="#" onclick="quickLink(); HTMLTopicThirteen()">Фреймы</a></li><li><a href="#" onclick="quickLink(); HTMLTopicFourteen()">Валидация</a></li></ul> </li> <li><a href="#" onclick="quickLink(); CSSTopics()">CSS</a> <ul><li><a href="#" onclick="quickLink(); CSSTheamOne()">Введение в CSS</a></li><li><a href="#" onclick="quickLink(); CSSTheamTwo()">Преимущество стилей</a></li><li><a href="#" onclick="quickLink(); CSSTheamThree()">Способы добавления стилей на страницу</a></li><li><a href="#" onclick="quickLink(); CSSTheamFour()">Типы носителей</a></li><li><a href="#" onclick="quickLink(); CSSTheamFive()">Базовый синтаксис CSS</a></li><li><a href="#" onclick="quickLink(); CSSTheamSix()">Значение стилевых свойств</a></li><li><a href="#" onclick="quickLink(); CSSTheamSeven()">Селекторы тегов</a></li><li><a href="#" onclick="quickLink(); CSSTheamEight()">Классы</a></li><li><a href="#" onclick="quickLink(); CSSTheamNine()">Идентификаторы</a></li><li><a href="#" onclick="quickLink(); CSSTheamTen()">Контекстные селекторы</a></li><li><a href="#" onclick="quickLink(); CSSTheamEleven()">Дочерние селекторы</a></li><li><a href="#" onclick="quickLink(); CSSTheamTwelve()">Псевдоклассы</a></li><li><a href="#" onclick="quickLink(); CSSTheamThirteen()">Псевдоэлементы</a></li><li><a href="#" onclick="quickLink(); CSSTheamFourteen()">Наследование</a></li></ul></li> <li><a href="#" onclick="quickLink(); JSTopics()">JavaScript</a> <ul><li><a href="#" onclick="quickLink(); JSTheamOne()">Привет, мир!</a></li><li><a href="#" onclick="quickLink(); JSTheamTwo()">Структура кода</a></li><li><a href="#" onclick="quickLink(); JSTheamThree()">Строгий режим</a></li><li><a href="#" onclick="quickLink(); JSTheamFour()">Переменные</a></li><li><a href="#" onclick="quickLink(); JSTheamFive()">Тип данных</a></li><li><a href="#" onclick="quickLink(); JSTheamSix()">Взаимодействие: alert, prompt, confirm</a></li><li><a href="#" onclick="quickLink(); JSTheamSeven()">Преобразование типов</a></li><li><a href="#" onclick="quickLink(); JSTheamEight()">Базовые операторы, математика</a></li><li><a href="#" onclick="quickLink(); JSTheamNine()">Операторы сравнения</a></li><li><a href="#" onclick="quickLink(); JSTheamTen()">Условное ветвление: if, \'?\'</a></li><li><a href="#" onclick="quickLink(); JSTheamEleven()">Логическое операторы</a></li><li><a href="#" onclick="quickLink(); JSTheamTwelve()">Оператор нулевого слияния</a></li><li><a href="#" onclick="quickLink(); JSTheamThirteen()">Циклы while и for</a></li><li><a href="#" onclick="quickLink(); JSTheamFourteen()">Конструкция "switch"</a></li><li><a href="#" onclick="quickLink(); JSTheamFifteen()">Функции</a></li><li><a href="#" onclick="quickLink(); JSTheamSixteen()">Function Expression</a></li><li><a href="#" onclick="quickLink(); JSTheamSeventeen()">Стрелочные функции, основы</a></li></ul></li> <li><a href="#" onclick="quickLink(); printInfo()">Info</a></li> <li><a href="#" onclick="quickLink(); helpMenu()">Help menu</a></li></ul>',

    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран',
}

// JavaScript
// Заголовок тем.
let JSTopicsEng = {
    topics: '<h3>JavaScript Basics</h3>*To select a topic, enter the topic ID key that is listed next to the topic name.<br><ul><li>Hello world! - <b><a href="#" onclick="quickLink(); JSTheamOne()">JS topic 1</a></b></li><br><li>Code structure - <b><a href="#" onclick="quickLink(); JSTheamTwo()">JS topic 2</a></b></li><br><li>Strict mode — "use strict " - <b><a href="#" onclick="quickLink(); JSTheamThree()">JS topic 3</a></b></li><br><li>Variables - <b><a href="#" onclick="quickLink(); JSTheamFour()">JS topic 4</a></b></li><br><li>Data types - <b><a href="#" onclick="quickLink(); JSTheamFive()">JS topic 5</a></b></li><br><li>Interaction: alert, prompt, confirm - <b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b></li><br><li>Type conversion - <b><a href="#" onclick="quickLink(); JSTheamSeven()">JS topic 7</a></b></li><br><li>Basic operators, math - <b><a href="#" onclick="quickLink(); JSTheamEight()">JS topic 8</a></b></li><br><li>Comparison operators - <b><a href="#" onclick="quickLink(); JSTheamNine()">JS topic 9</a></b></li><br><li>Conditional branching: if, \'?\' - <b><a href="#" onclick="quickLink(); JSTheamTen()">JS topic 10</a></b></li><br><li>Logical operators - <b><a href="#" onclick="quickLink(); JSTheamEleven()">JS topic 11</a></b></li><br><li>Null merge operator (??) - <b><a href="#" onclick="quickLink(); JSTheamTwelve()">JS topic 12</a></b></li><br><li>while and for loops - <b><a href="#" onclick="quickLink(); JSTheamThirteen()">JS topic 13</a></b></li><br><li>The "switch" construct - <b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b></li><br><li>Functions - <b><a href="#" onclick="quickLink(); JSTheamFifteen()">JS topic 15</a></b></li><br><li>Function Expression - <b><a href="#" onclick="quickLink(); JSTheamSixteen()">JS topic 16</a></b></li><br><li>Arrow functions, basics - <b><a href="#" onclick="quickLink(); JSTheamSeventeen()">JS topic 17</a></b></li></ul>',
    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen',
}
/*
<a href="#" onclick="quicLinkHome()">home</a>

<a href="#" onclick="quickLink(); JSTheamOne()">JS topic 1</a>

<a href="#" onclick="quickLink(); JSTheamTwo()">JS topic 2</a>

<a href="#" onclick="quickLink(); JSTheamThree()">JS topic 3</a>

<a href="#" onclick="quickLink(); JSTheamFour()">JS topic 4</a>

<a href="#" onclick="quickLink(); JSTheamFive()">JS topic 5</a> 

<a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a> 

<a href="#" onclick="quickLink(); JSTheamSeven()">JS topic 7</a>

<a href="#" onclick="quickLink(); JSTheamEight()">JS topic 8</a>

<a href="#" onclick="quickLink(); JSTheamNine()">JS topic 9</a>  

<a href="#" onclick="quickLink(); JSTheamTen()">JS topic 10</a>

<a href="#" onclick="quickLink(); JSTheamEleven()">JS topic 11</a>

<a href="#" onclick="quickLink(); JSTheamTwelve()">JS topic 12</a>

<a href="#" onclick="quickLink(); JSTheamThirteen()">JS topic 13</a>

<a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a>

<a href="#" onclick="quickLink(); JSTheamFifteen()">JS topic 15</a>

<a href="#" onclick="quickLink(); JSTheamSixteen()">JS topic 16</a>

<a href="#" onclick="quickLink(); JSTheamSeventeen()">JS topic 17</a>
*/
let JSTopicsRus = {
    topics: '<h3>Основы JavaScript</h3>*Для того, чтобы выбрать тему, введите ключ-идентификатор темы, который указан рядом с названием темы.<br><ul><li>Привет, мир! - <b><a href="#" onclick="quickLink(); JSTheamOne()">JS topic 1</a></b></li><br><li>Структура кода - <b><a href="#" onclick="quickLink(); JSTheamTwo()">JS topic 2</a></b></li><br><li>Строгий режим — "use strict" - <b><a href="#" onclick="quickLink(); JSTheamThree()">JS topic 3</a></b></li><br><li>Переменные - <b><a href="#" onclick="quickLink(); JSTheamFour()">JS topic 4</a></b></li><br><li>Типы данных - <b><a href="#" onclick="quickLink(); JSTheamFive()">JS topic 5</a></b></li><br><li>Взаимодействие: alert, prompt, confirm - <b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b></li><br><li>Преобразование типов - <b><a href="#" onclick="quickLink(); JSTheamSeven()">JS topic 7</a></b></li><br><li>Базовые операторы, математика - <b><a href="#" onclick="quickLink(); JSTheamEight()">JS topic 8</a></b></li><br><li>Операторы сравнения - <b><a href="#" onclick="quickLink(); JSTheamNine()">JS topic 9</a></b></li><br><li>Условное ветвление: if, \'?\' - <b><a href="#" onclick="quickLink(); JSTheamTen()">JS topic 10</a></b></li><br><li>Логические операторы - <b><a href="#" onclick="quickLink(); JSTheamEleven()">JS topic 11</a></b></li><br><li>Оператор нулевого слияния (??) - <b><a href="#" onclick="quickLink(); JSTheamTwelve()">JS topic 12</a></b></li><br><li>Циклы while и for - <b><a href="#" onclick="quickLink(); JSTheamThirteen()">JS topic 13</a></b></li><br><li>Конструкция "switch" - <b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b></li><br><li>Функции - <b><a href="#" onclick="quickLink(); JSTheamFifteen()">JS topic 15</a></b></li><br><li>Function Expression - <b><a href="#" onclick="quickLink(); JSTheamSixteen()">JS topic 16</a></b></li><br><li>Стрелочные функции, основы - <b><a href="#" onclick="quickLink(); JSTheamSeventeen()">JS topic 17</a></b></li></ul>',
    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран',
}

// Первая тема.
let JSTopicOneEng = {
    div1: "<p>JavaScript programs can be inserted anywhere in an HTML document using the <b>&ltscript&gt</b> tag.</p>",

    div2_example: "&lt!DOCTYPE HTML&gt <br> &lthtml&gt <br> &ltbody&gt <br> <br> &ltscript&gt <br>&nbsp&nbsp&nbsp&nbspalert('Hello World!'); <br> &lt/script&gt <br> <br> &lt/body&gt <br> &lt/html&gt",
    
    div3: "<p>If you have a lot of JavaScript code, you can put it in a separate file.</p><p>The script file can be connected to the HTML using the <b>src:</b> attribute</p>",

    div4_example: '&ltscript src="/path/to/script.js"&gt&lt/script&gt.',

    div5: '<p>Here <b>/path/to/script.js</b> is the absolute path to the script from the site root. You can also specify a relative path from the current page. For example, <b>src="script.js"</b> or <b>src="./script.js"</b> would indicate that the file is <b>"script.js"</b> located in the current folder.</p><p>You can also specify the full URL. For example:</p>',

    div6_example: '&ltscript src="https://cdnjs.cloudflare.com/ajax/libs/<br>lodash.js/3.2.0/lodash.js"&gt&lt/script&gt',

    div7: "<p>To connect several scripts, use several tags:</p>",

    div8_example: '&ltscript src="/js/script1.js"&gt&lt/script&gt<br>&ltscript src="/js/script2.js"&gt&lt/script&gt',

    div9: "<p>If the <b>src</b> attribute is set, the contents of the <b>script</b> tag will be ignored.</p><p>In one <b>&ltscript&gt</b> tag you cannot use both the <b>src</b> attribute and the code inside.</p><p>The example below doesn't work:</p>",

    div10_example: '&ltscript src="file.js"&gt <br> &nbsp&nbsp&nbsp&nbsp alert(1); <i>//Content ignored</i> <br>&lt/script&gt',

    div11: '<p>You need to choose: either an external script <b>&ltscript src="..."&gt</b>, or regular code inside the <b>&ltscript&gt</b> tag.</p><p>The above example can be divided into two scripts:</p>',

    div12_example: '&ltscript src="file.js"&gt&lt/script&gt',

    div13_example: '&ltscript&gt<br> &nbsp&nbsp&nbsp&nbsp alert(1); <br>&lt/script&gt',

    next: '<b><a href="#" onclick="quickLink(); JSTheamTwo()">JS topic 2</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicOneRus = {
    div1: "<p>Программы на JavaScript могут быть вставлены в любое место HTML-документа с помощью тега <b>&ltscript&gt</b>.</p>",

    div2_example: "&lt!DOCTYPE HTML&gt <br> &lthtml&gt <br> &ltbody&gt <br> <br> &ltscript&gt <br>&nbsp&nbsp&nbsp&nbspalert('Привет, мир!'); <br> &lt/script&gt <br> <br> &lt/body&gt <br> &lt/html&gt",
    
    div3: "<p>Если у вас много JavaScript-кода, вы можете поместить его в отдельный файл.</p><p>Файл скрипта можно подключить к HTML с помощью атрибута <b>src:</b></p>",

    div4_example: '&ltscript src="/path/to/script.js"&gt&lt/script&gt.',

    div5: '<p>Здесь <b>/path/to/script.js</b> – это абсолютный путь до скрипта от корня сайта. Также можно указать относительный путь от текущей страницы. Например, <b>src="script.js"</b> или <b>src="./script.js"</b> будет означать, что файл <b>"script.js"</b> находится в текущей папке.</p><p>Можно указать и полный URL-адрес. Например:</p>',

    div6_example: '&ltscript src="https://cdnjs.cloudflare.com/ajax/libs/<br>lodash.js/3.2.0/lodash.js"&gt&lt/script&gt',

    div7: "<p>Для подключения нескольких скриптов используйте несколько тегов:</p>",

    div8_example: '&ltscript src="/js/script1.js"&gt&lt/script&gt<br>&ltscript src="/js/script2.js"&gt&lt/script&gt',

    div9: "<p>Если атрибут <b>src</b> установлен, содержимое тега <b>script</b> будет игнорироваться.</p><p>В одном теге <b>&ltscript&gt</b> нельзя использовать одновременно атрибут <b>src</b> и код внутри.</p><p>Нижеприведённый пример не работает:</p>",

    div10_example: '&ltscript src="file.js"&gt <br> &nbsp&nbsp&nbsp&nbsp alert(1); //Содержимое игнорируется <br>&lt/script&gt',

    div11: '<p>Нужно выбрать: либо внешний скрипт <b>&ltscript src="..."&gt</b>, либо обычный код внутри тега <b>&ltscript&gt</b>.</p><p>Вышеприведённый пример можно разделить на два скрипта:</p>',

    div12_example: '&ltscript src="file.js"&gt&lt/script&gt',

    div13_example: '&ltscript&gt<br> &nbsp&nbsp&nbsp&nbsp alert(1); <br>&lt/script&gt',

    next: '<b><a href="#" onclick="quickLink(); JSTheamTwo()">JS topic 2</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Вторая тема.
let JSTopicSecondEng = {
    
    manual1: "<h3>Instructions</h3>Instructions are syntactic constructs and commands that perform actions.<br><br>We have already seen the instruction <b>alert('Hello world!')</b>, which displays the message 'Hello world!'.<br><br>Our code can have as many instructions as we want. Instructions can be separated by semicolons.<br><br>For example, here we split the 'Hello World' message into two alert calls:",
    manualExample1: "alert('Hello'); alert('World');",
    manual2: "Usually each instruction is written on a new line to make the code easier to read:",
    manualExample2: "alert('Hello');<br>alert('World');",

    semicolon1: "<h3>Semicolon</h3>In most cases, a semicolon can be omitted if there is a newline.<br><br>This will also work:",
    semicolonExample1: "alert('Hello')<br>alert('World')",
    semicolon2: "In this case, JavaScript interprets the line break as an 'implicit' semicolon. This is called automatic semicolon insertion.<br><br><b>In most cases, a newline implies a semicolon. But 'most of the time' doesn't mean 'always'!</b><br><br>In some situations, a newline still doesn't mean a semicolon. For example:",
    semicolonExample2: "alert(3 +<br>1<br>+ 2);",
    semicolon3: "The code will output 6 because JavaScript doesn't insert a semicolon here. It is intuitively obvious that if a string ends with a "+", then it is a 'pending expression', so no semicolon is needed. And in this case, everything works as intended.<br><br><b>But there are situations where JavaScript 'forgets' to insert a semicolon where it is needed.</b><br><br>Errors, which appear in this case are quite difficult to detect and fix.<br><br>It is recommended to put a semicolon between instructions, even if they are separated by line breaks. This rule is widely used in the developer community. It is worth noting again - in most cases, you can not put a semicolon. But it is safer, especially for a beginner, to put it on.",

    comments1: "<h3>Comments</h3>Over time, programs become more and more complex. There is a need to add comments that would describe what the code does and why.<br><br>Comments can be placed anywhere in the script. They do not affect its execution as the engine simply ignores them.<br><br>Single-line comments begin with a double slash <b>//</b>.<br><br>The part of the line after <b>// </b> is considered a comment. Such a comment can either occupy the entire line or be located after the instruction.<br><br>Like this:",
    commentsExample1: "<i>// This comment takes up the entire line</i><br>alert('Hello');<br><br>alert('World'); <i>// This comment follows the instruction</i>",
    comments2: "Multiline comments start with a slash followed by an asterisk <b>/*</b> and end with an asterisk followed by a slash <b>*/</b>.<br><br>Like this:",
    commentsExample2: "<i>/* An example with two messages.<br>This is a multi-line comment.<br>*/</i><br>alert('Hello');<br>alert('World');",
    comments3: "The content of the comment is ignored, so if we put code inside <b>/* … */</b> it will not be executed.<br><br>This can be handy for temporarily disabling a section of code:",
    commentsExample3: "<i>/* Commented out the code<br>alert('Hello');<br>*/</i><br>alert('World');",
    comments4: "<h3>Nested comments are not supported!</h3>Cannot be <b>/*...*/</b> inside <b>/*...*/</b> .<br><br>This code will die with an error:",
    commentsExample4: "<i>/*<br>&nbsp&nbsp&nbsp&nbsp/* nested comment ?!? */<br>*/</i><br>alert( 'World' );",

    next: '<b><a href="#" onclick="quickLink(); JSTheamOne()">JS topic 1</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamThree()">JS topic 3</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicSecondRus = {

    manual1: "<h3>Инструкции</h3>Инструкции – это синтаксические конструкции и команды, которые выполняют действия.<br><br>Мы уже видели инструкцию <b>alert('Привет, мир!')</b>, которая отображает сообщение «Привет, мир!».<br><br>В нашем коде может быть столько инструкций, сколько мы захотим. Инструкции могут отделяться точкой с запятой.<br><br>Например, здесь мы разделили сообщение «Привет Мир» на два вызова alert:",
    manualExample1: "alert('Привет'); alert('Мир');",
    manual2: "Обычно каждую инструкцию пишут на новой строке, чтобы код было легче читать:",
    manualExample2: "alert('Привет');<br>alert('Мир');",

    semicolon1: "<h3>Точка с запятой</h3>В большинстве случаев точку с запятой можно не ставить, если есть переход на новую строку.<br><br>Так тоже будет работать:",
    semicolonExample1: "alert('Привет')<br>alert('Мир')",
    semicolon2: "В этом случае JavaScript интерпретирует перенос строки как «неявную» точку с запятой. Это называется автоматическая вставка точки с запятой.<br><br><b>В большинстве случаев новая строка подразумевает точку с запятой. Но «в большинстве случаев» не значит «всегда»!</b><br><br>В некоторых ситуациях новая строка всё же не означает точку с запятой. Например:",
    semicolonExample2: "alert(3 +<br>1<br>+ 2);",
    semicolon3: "Код выведет 6, потому что JavaScript не вставляет здесь точку с запятой. Интуитивно очевидно, что, если строка заканчивается знаком "+", значит, это «незавершённое выражение», поэтому точка с запятой не требуется. И в этом случае всё работает, как задумано.<br><br><b>Но есть ситуации, где JavaScript «забывает» вставить точку с запятой там, где она нужна.</b><br><br>Ошибки, которые при этом появляются, достаточно сложно обнаруживать и исправлять.<br><br>Рекомендуется ставить точку с запятой между инструкциями, даже если они отделены переносами строк. Это правило широко используется в сообществе разработчиков. Стоит отметить ещё раз – в большинстве случаев можно не ставить точку с запятой. Но безопаснее, особенно для новичка, ставить её.",

    comments1: "<h3>Комментарии</h3>Со временем программы становятся всё сложнее и сложнее. Возникает необходимость добавлять комментарии, которые бы описывали, что делает код и почему.<br><br>Комментарии могут находиться в любом месте скрипта. Они не влияют на его выполнение, поскольку движок просто игнорирует их.<br><br>Однострочные комментарии начинаются с двойной косой черты <b>//</b>.<br><br>Часть строки после <b>//</b> считается комментарием. Такой комментарий может как занимать строку целиком, так и находиться после инструкции.<br><br>Как здесь:",
    commentsExample1: "<i>// Этот комментарий занимает всю строку</i><br>alert('Привет');<br><br>alert('Мир'); <i>// Этот комментарий следует за инструкцией</i>",
    comments2: "Многострочные комментарии начинаются косой чертой со звёздочкой <b>/*</b> и заканчиваются звёздочкой с косой чертой <b>*/</b>.<br><br>Как вот здесь:",
    commentsExample2: "<i>/* Пример с двумя сообщениями.<br>Это - многострочный комментарий.<br>*/</i><br>alert('Привет');<br>alert('Мир');",
    comments3: "Содержимое комментария игнорируется, поэтому, если мы поместим код внутри <b>/* … */</b>, он не будет исполняться.<br><br>Это бывает удобно для временного отключения участка кода:",
    commentsExample3: "<i>/* Закомментировали код<br>alert('Привет');<br>*/</i><br>alert('Мир');",
    comments4: "<h3>Вложенные комментарии не поддерживаются!</h3>Не может быть <b>/*...*/</b> внутри <b>/*...*/</b>.<br><br>Такой код «умрёт» с ошибкой:",
    commentsExample4: "<i>/*<br>&nbsp&nbsp&nbsp&nbsp/* вложенный комментарий ?!? */<br>*/</i><br>alert( 'Мир' );",

    next: '<b><a href="#" onclick="quickLink(); JSTheamOne()">JS topic 1</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamThree()">JS topic 3</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Третья тема.
let JSTopicThreeEng = {
    strictRegime: "<h3>Strict mode - 'use strict'</h3>For a long time, JavaScript has evolved without backward compatibility issues. New features were added to the language while the old functionality was not changed.<br><br>The advantage of this approach was that the existing code continued to work. And the downside is that any mistake or imperfect solution made by the creators of JavaScript is stuck in the language forever.<br><br>This was until 2009, when ECMAScript 5 (ES5) appeared. He added new features to the language and changed some of the existing ones. To ensure that legacy code works as before, such changes are not applied by default. Therefore, we need to explicitly enable them with a special directive: <b>'use strict'</b>",
    useStrict1: "<h3>«use strict»</h3>The directive looks like the line: <b>'use strict'</b>. When it is at the beginning of a script, the entire script runs in «modern» mode.<br><br>For example:",
    useStrictExample1: "'use strict'; <br><br> <i>// this code works in modern mode</i>",
    useStrict2: "Looking ahead, we note that instead of the entire script, <b>'use strict'</b> can be placed at the beginning of most kinds of functions. This allows you to enable strict mode only in a specific function. But usually people use it for the whole file.",
    useStrict3: "<h3>Make sure «use strict» is at the beginning</h3>Check that <b>'use strict'</b> is on the first executable line of the script, otherwise strict mode may not be enabled.<br <br>Only comments can be written above <b>'use strict'</b>.<br><br>Strict mode is not enabled here:",
    useStrictExample2: "alert('some code');<br><i>//'use strict' is ignored below - it should be on the first line</i><br><br>'use strict'<br><br>< i>//strict mode not enabled</i>",
    useStrict4: "There is no way to override <b>use strict</b><br><br>There is no directive like 'no use strict' that would revert the engine to the old behavior.<br><br>Once we enter strict mode, it is impossible to cancel it.",
    console1: "<h3>Browser console</h3>Later, when you use the browser console to test features, note that <b>use strict</b> is disabled by default.<br><br> Sometimes, when <b>use strict</b> is set, you can get wrong results.<br><br>So, how can you enable <b>use strict</b> in the console?<br><br> You can use <b>Shift+Enter</b> to enter multiple lines and write on the top line <b>use strict</b>:",
    consoleExample1: "'use strict'; &ltShift+Enter to start a new line&gt<br><i>// ...your code...</i><br>&ltEnter to run&gt",
    console2: "In most browsers, including Chrome and Firefox, this works.<br><br>If it doesn't, for example in an older browser, there is an ugly but reliable way to enforce <b>use strict</b>. Put it in the following wrapper:",
    consoleExample2: "(function() {<br>&nbsp&nbsp&nbsp&nbsp'use strict';<br><br><i>// ...your code...</i><br>})()",
    useStrict5: "<h3>Do you always need to use 'use strict'?</h3>The question seems rhetorical, but it's not.<br><br>Someone will advise you to start every script with <b>'use strict'... </b> But there's a better way.<br><br>Modern JavaScript supports «classes» and «modules» -- advanced language structures (and we'll get to them, of course) that automatically enable strict mode. Therefore, there is no need to add the <b>'use strict'</b> directive to them.",
    next: '<b><a href="#" onclick="quickLink(); JSTheamTwo()">JS topic 2</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamFour()">JS topic 4</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
} 

let JSTopicThreeRus = {
    strictRegime: "<h3>Строгий режим - 'use strict'</h3>На протяжении долгого времени JavaScript развивался без проблем с обратной совместимостью. Новые функции добавлялись в язык, в то время как старая функциональность не менялась.<br><br>Преимуществом данного подхода было то, что существующий код продолжал работать. А недостатком – что любая ошибка или несовершенное решение, принятое создателями JavaScript, застревали в языке навсегда.<br><br>Так было до 2009 года, когда появился ECMAScript 5 (ES5). Он добавил новые возможности в язык и изменил некоторые из существующих. Чтобы устаревший код работал, как и раньше, по умолчанию подобные изменения не применяются. Поэтому нам нужно явно их активировать с помощью специальной директивы: <b>'use strict'</b>",

    useStrict1: "<h3>«use strict»</h3>Директива выглядит как строка: <b>'use strict'</b>. Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.<br><br>Например:",

    useStrictExample1: "'use strict'; <br><br> <i>// этот код работает в современном режиме</i>",

    useStrict2: "Забегая вперёд, заметим, что вместо всего скрипта <b>'use strict'</b> можно поставить в начале большинства видов функций. Это позволяет включить строгий режим только в конкретной функции. Но обычно люди используют его для всего файла.",

    useStrict3: "<h3>Убедитесь, что «use strict» находится в начале</h3>Проверьте, что <b>'use strict'</b> находится в первой исполняемой строке скрипта, иначе строгий режим может не включиться.<br><br>Над <b>'use strict'</b> могут быть записаны только комментарии.<br><br>Здесь строгий режим не включён:",

    useStrictExample2: "alert('some code');<br><i>//'use strict' ниже игнорируется - он должен быть в первой строке</i><br><br>'use strict'<br><br><i>//строгий режим не активирован</i>",

    useStrict4: "Нет никакого способа отменить <b>use strict</b><br><br>Нет директивы типа 'no use strict', которая возвращала бы движок к старому поведению.<br><br>Как только мы входим в строгий режим, отменить это невозможно.",

    console1: "<h3>Консоль браузера</h3>В дальнейшем, когда вы будете использовать консоль браузера для тестирования функций, обратите внимание, что <b>use strict</b> по умолчанию в ней выключен.<br><br>Иногда, когда <b>use strict</b> имеет значение, вы можете получить неправильные результаты.<br><br>Итак, как можно включить <b>use strict</b> в консоли?<br><br>Можно использовать <b>Shift+Enter</b> для ввода нескольких строк и написать в верхней строке <b>use strict</b>:",

    consoleExample1: "'use strict'; &ltShift+Enter для перехода на новую строку&gt<br><i>//  ...ваш код...</i><br>&ltEnter для запуска&gt",

    console2: "В большинстве браузеров, включая Chrome и Firefox, это работает.<br><br>Если этого не происходит, например, в старом браузере, есть некрасивый, но надежный способ обеспечить <b>use strict</b>. Поместите его в следующую обёртку:",

    consoleExample2: "(function() {<br>&nbsp&nbsp&nbsp&nbsp'use strict';<br><br><i>// ...ваш код...</i><br>})()",

    useStrict5: "<h3>Всегда ли нужно использовать «use strict»?</h3>Вопрос кажется риторическим, но это не так.<br><br>Кто-то посоветует начинать каждый скрипт с <b>'use strict'…</b> Но есть способ покруче.<br><br>Современный JavaScript поддерживает «классы» и «модули» — продвинутые структуры языка (и мы, конечно, до них доберёмся), которые автоматически включают строгий режим. Поэтому в них нет нужды добавлять директиву <b>'use strict'</b>.",

    next: '<b><a href="#" onclick="quickLink(); JSTheamTwo()">JS topic 2</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamFour()">JS topic 4</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Четвёртая тема.
let JSTopicFourEng = {
    // div1
    variables: "<h3>Variables</h3>A JavaScript application usually needs to work with information. For example:<br><br>&nbsp1. An online store - information can include products for sale and a shopping cart.<br>&nbsp2 .Chat - Information can include users, messages, and more.<br><br>Variables are used to store this information.",

    //div2
    variable1: "<h3>Variable</h3>A variable is a «named store» for data. We can use variables to store products, visitors, and other data.<br><br>To create a variable in JavaScript, use the keyword word <b>let</b>.<br><br>The following statement creates (in other words: declares or defines) a variable named «message»:",

    // div3
    variableExample1: "let message;",

    // div4
    variable2: "Now you can put data into it using the assignment operator <b>=<b> :",

    // div5
    variableExample2: "let message;<br><br>message = 'Hello'; <i>// store the string 'Hello' in a variable named message</i>",

    // div6
    variable3: "The string is stored in the memory area associated with the variable. We can access it using the variable name:",

    // div7
    variableExample3: "let message;<br>message = 'Hello!';<br><br>alert(message); <i>// show the content of the variable</i>",

    // div8
    variable4: "For the sake of brevity, you can combine the variable declaration and data entry in one line:",

    // div9
    variableExample4: "let message = 'Hello!'; <i>// define a variable and assign a value to it</i><br><br>alert(message); <i>// Hello!</i>",

    // div10
    variable5: "We can also declare multiple variables on the same line:",

    // div11
    variableExample5: "let user = 'John', age = 25, message = 'Hello';",

    // div12
    variable6: "This may seem shorter, but we don't recommend it. For better readability, declare each variable on a new line.<br><br>The multi-line version is slightly longer, but easier to read:",

    // div13
    variableExample6: "let user = 'John';<br>let age = 25;<br>let message = 'Hello';",

    // div14
    variable7: "Some people also define multiple variables in this multi-line style:",

    // div15
    variableExample7: "let user = 'John',<br>&nbsp&nbsp&nbsp&nbsp age = 25,<br>&nbsp&nbsp&nbsp&nbsp message = 'Hello'",

    // div16
    variable8: "...Or even with a comma at the beginning of the line:",

    // div17
    variableExample8: "let user = 'John'<br>&nbsp&nbsp&nbsp , &nbsp age = 25<br>&nbsp&nbsp&nbsp , &nbsp message = 'Hello';",

    // div18
    variable9: "In principle, all of these options work the same way. So it's a matter of personal taste and aesthetics.",

    // div19
    varAndLet1: "<h4>var instead of let</h4>In older scripts, you can also find another keyword: <b>var</b> instead of <b>let</b>:",

    // div20
    varAndLetExample: "var message = 'Hello';", // 20 div...

    // div21
    varAndLet2: "The keyword <b>var</b> is almost the same as <b>let</b>. It declares a variable, but in a slightly different, 'legacy' way.<br><br >There are subtle differences between <b>let</b> and <b>var</b>, but they don't matter to us yet.",

    // div22
    nameVariable1: "JavaScript has two restrictions regarding variable names:<br><br> &nbsp 1.A variable name must contain only letters, numbers, or the symbols <b>$</b> and <b>_</b>. <br> &nbsp 2.The first character must not be a number.<br><br>If the name contains several words, camel case notation is usually used, that is, the words follow one after the other, where each next word begins with a capital letter: myVeryLongName. <br><br>Most interesting - the dollar sign <b>'$'</b> and the underscore <b>'_'</b> can also be used in titles.These are ordinary characters, like letters, without any or a special meaning.<br><br>These names are valid:",

    // div23
    nameVariableExample1: "let $ = 1; <i>// declared a variable named '$'</i><br>let _ = 2; <i>// and now a variable named '_'</i>< br><br>alert($ + _); // 3",

    // div24
    nameVariable2: "Examples of invalid variable names:",

    // div25
    nameVariableExample2: "let 1a; <i>// cannot start with a number</i><br><br>let my-name; <i>// hyphen '-' is not allowed in the name</i>",

    // div26
    nameVariable3: "<h3>Case matters</h3>Variables named apple and APPLE are two different variables.",

    // div27
    nameVariable4: "<h3>Non-Latin letters are allowed, but not recommended</h3>You can use any language, including Cyrillic or even hieroglyphs, for example:",

    // div28
    nameVariableExample3: "let name = '...';<br>let 我 = '...';",

    // div29
    nameVariable5: "Technically there is no error here, such names are allowed, but there is an international tradition to use English in variable names. Even if we write a small script, it may have a long life ahead of it. People from other countries may have to read it more than one once.",

    // div30
    nameVariable6: "<h3>Reserved names</h3>There is a list of reserved words that cannot be used as variable names because they are used by the language itself.<br><br>For example: <b>let</b >, <b>class</b>, <b>return</b> and <b>function</b> are reserved.",

    // div31
    nameVariable7: "<h3>Creating a variable without using use strict</h3>Normally we need to define a variable before using it. But in the old days it was technically possible to create a variable by simply assigning a value without using <b>let</b> This still works if we don't include <b>use strict</b> in our files to ensure compatibility with older scripts.",

    // div32
    nameVariableExample4: "<i>// note: 'use strict' is not used in this example</i><br><br>num = 5; <i>// if the variable 'num' did not exist before, it is created< /i><br><br>alert(num); <i>// 5</i>",

    // div33
    nameVariable8: "This is bad practice and will result in an error in strict mode:",

    // div34
    nameVariableExample5: "'use strict';<br><br>num = 5; <i>// error: num is not defined</i>",

    // div35
    constants1: "<h3>Constants</h3>To declare a constant, that is, immutable variable, use <b>const</b> instead of <b>let</b>:",

    // div36
    constantsExample1: "const myBirthday = '4/18/1982';",

    // div37
    constants2: "Variables declared with <b>const</b> are called 'consts'. They cannot be changed. Attempting to do so will result in an error:",

    // div38
    constantsExample2: "const myBirthday = '4/18/1982';<br><br>myBirthday = '01/01/2001'; <i>// error, constant cannot be overwritten!</i>",

    // div39
    constants3: "If a programmer is sure that a variable will never change, he can guarantee this and make it clear to everyone by declaring it via <b>const.</b>",

    // div40
    constants4: "<h3>Uppercase constants</h3>It is a common practice to use constants as aliases for hard-to-remember values that are known before the script is executed.<br><br>The names of such constants are written using uppercase letters and underscores.<br><br>For example, let's make constants for different colors in «hexadecimal format»:",

    // div41
    constantsExample3: "const COLOR_RED = '#F00';<br>const COLOR_GREEN = '#0F0';<br>const COLOR_BLUE = '#00F';<br>const COLOR_ORANGE = '#FF7F00';<br><br> <i>// ...when we need to choose a color</i><br>let color = COLOR_ORANGE;<br>alert(color); <i>// #FF7F00</i>",

    // div42
    constants5: "Benefits:<br><br><ul><li>COLOR_ORANGE is much easier to remember than '#FF7F00'.</li><br><li>It's much easier to make a mistake when entering '#FF7F00' than when typing COLOR_ORANGE.</li><br><li>When reading the code, COLOR_ORANGE is much clearer than #FF7F00.</li></ul><br><br>When should we use capital letters for constants and when let's look at that as well.<br><br>The name «constant» simply means that the value of the variable never changes.But there are constants that are known before execution (for example, the hex value for red), and constants that are evaluated during script execution but do not change after they are originally assigned.<br><br>For example:",

    // div43
    constantsExample4: "const pageLoadTime = <i>/* time spent loading a web page */</i>;",

    // div44
    constants6: "The value of <b>pageLoadTime</b> is not known before the page is loaded, so its name is written in regular letters instead of capital letters. But it's still a constant because it doesn't change after the assignment.<br><br>In other words , capitalized constants are only used as aliases for «hard-coded» values.",

    // div45
    nameVar: "<h3>Come up with the right names</h3>In talking about variables, it is necessary to mention that there is one more extremely important thing.<br><br>The name of the variable should have a clear and understandable meaning, to say that what data is stored in it.<br><br>Variable naming is one of the most important and complex skills in programming.A quick glance at variable names can show which code was written by a novice and which by an experienced developer.<br><br> In a real project, most of the time is spent changing and extending the existing code base rather than writing something completely new from scratch When we return to the code after a period of time, it is much easier to find information that is well marked up. Or, in other words, when the variables have good names.<br><br>Please take the time to think about the correct variable name before declaring it. Do this and you will be rewarded.", // 45 div.. God, why? !

    // div46
    next: '<b><a href="#" onclick="quickLink(); JSTheamThree()">JS topic 3</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamFive()">JS topic 5</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicFourRus = {
    // div1
    variables: "<h3>Переменные</h3>JavaScript-приложению обычно нужно работать с информацией. Например:<br><br>&nbsp1.Интернет-магазин – информация может включать продаваемые товары и корзину покупок.<br>&nbsp2.Чат – информация может включать пользователей, сообщения и многое другое.<br><br>Переменные используются для хранения этой информации.",

    // div2
    variable1: "<h3>Переменная</h3>Переменная – это «именованное хранилище» для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.<br><br>Для создания переменной в JavaScript используйте ключевое слово <b>let</b>.<br><br>Приведённая ниже инструкция создаёт (другими словами: объявляет или определяет) переменную с именем «message»:",

    // div3
    variableExemple1: "let message;",

    // div4
    variable2: "Теперь можно поместить в неё данные, используя оператор присваивания <b>=<b> :",

    // div5
    variableExemple2: "let message;<br><br>message = 'Hello'; <i>// сохранить строку 'Hello' в переменной с именем message</i>",

    // div6
    variable3: "Строка сохраняется в области памяти, связанной с переменной. Мы можем получить к ней доступ, используя имя переменной:",

    // div7
    variableExemple3: "let message;<br>message = 'Hello!';<br><br>alert(message); <i>// показывает содержимое переменной</i>",

    // div8
    variable4: "Для краткости можно совместить объявление переменной и запись данных в одну строку:",

    // div9
    variableExemple4: "let message = 'Hello!'; <i>// определяем переменную и присваиваем ей значение</i><br><br>alert(message); <i>// Hello!</i>",

    // div10
    variable5: "Мы также можем объявить несколько переменных в одной строке:",

    // div11
    variableExemple5: "let user = 'John', age = 25, message = 'Hello';",

    // div12
    variable6: "Такой способ может показаться короче, но мы не рекомендуем его. Для лучшей читаемости объявляйте каждую переменную на новой строке.<br><br>Многострочный вариант немного длиннее, но легче для чтения:",

    // div13
    variableExemple6: "let user = 'John';<br>let age = 25;<br>let message = 'Hello';",

    // div14
    variable7: "Некоторые люди также определяют несколько переменных в таком вот многострочном стиле:",

    // div15
    variableExemple7: "let user = 'John',<br>&nbsp&nbsp&nbsp&nbsp age = 25,<br>&nbsp&nbsp&nbsp&nbsp message = 'Hello'",

    // div16
    variable8: "…Или даже с запятой в начале строки:",

    // div17
    variableExemple8: "let user = 'John'<br>&nbsp&nbsp&nbsp , &nbsp age = 25<br>&nbsp&nbsp&nbsp , &nbsp message = 'Hello';",

    // div18
    variable9: "В принципе, все эти варианты работают одинаково. Так что это вопрос личного вкуса и эстетики.",

    // div19
    varAndLet1: "<h4>var вместо let</h4>В старых скриптах вы также можете найти другое ключевое слово: <b>var</b> вместо <b>let</b>:",

    // div20
    varAndLetExemple: "var message = 'Hello';", // 20 div...

    // div21
    varAndLet2: "Ключевое слово <b>var</b> – почти то же самое, что и <b>let</b>. Оно объявляет переменную, но немного по-другому, «устаревшим» способом.<br><br>Есть тонкие различия между <b>let</b> и <b>var</b>, но они пока не имеют для нас значения.",

    // div22
    nameVariable1: "В JavaScript есть два ограничения, касающиеся имён переменных:<br><br> &nbsp 1.Имя переменной должно содержать только буквы, цифры или символы <b>$</b> и <b>_</b>.<br> &nbsp 2.Первый символ не должен быть цифрой.<br><br>Если имя содержит несколько слов, обычно используется верблюжья нотация, то есть, слова следуют одно за другим, где каждое следующее слово начинается с заглавной буквы: myVeryLongName.<br><br>Самое интересное – знак доллара <b>'$'</b> и подчёркивание <b>'_'</b> также можно использовать в названиях. Это обычные символы, как и буквы, без какого-либо особого значения.<br><br>Эти имена являются допустимыми:",

    // div23
    nameVariableExemple1: "let $ = 1; <i>// объявили переменную с именем '$'</i><br>let _ = 2; <i>// а теперь переменную с именем '_'</i><br><br>alert($ + _); // 3",

    // div24
    nameVariable2: "Примеры неправильных имён переменных:",

    // div25
    nameVariableExemple2: "let 1a; <i>// не может начинаться с цифры</i><br><br>let my-name; <i>// дефис '-' не разрешён в имени</i>",

    // div26
    nameVariable3: "<h3>Регистр имеет значение</h3>Переменные с именами apple и APPLE – это две разные переменные.",

    // div27
    nameVariable4: "<h3>Нелатинские буквы разрешены, но не рекомендуются</h3>Можно использовать любой язык, включая кириллицу или даже иероглифы, например:",

    // div28
    nameVariableExemple3: "let имя = '...';<br>let 我 = '...';",

    // div29
    nameVariable5: "Технически здесь нет ошибки, такие имена разрешены, но есть международная традиция использовать английский язык в именах переменных. Даже если мы пишем небольшой скрипт, у него может быть долгая жизнь впереди. Людям из других стран, возможно, придётся прочесть его не один раз.",

    // div30
    nameVariable6: "<h3>Зарезервированные имена</h3>Существует список зарезервированных слов, которые нельзя использовать в качестве имён переменных, потому что они используются самим языком.<br><br>Например: <b>let</b>, <b>class</b>, <b>return</b> и <b>function</b> зарезервированы.",

    // div31
    nameVariable7: "<h3>Создание переменной без использования use strict</h3>Обычно нам нужно определить переменную перед её использованием. Но в старые времена было технически возможно создать переменную простым присвоением значения без использования <b>let</b>. Это все ещё работает, если мы не включаем <b>use strict</b> в наших файлах, чтобы обеспечить совместимость со старыми скриптами.",

    // div32
    nameVariableExemple4: "<i>// заметка: 'use strict' в этом примере не используется</i><br><br>num = 5; <i>// если переменная 'num' раньше не существовала, она создаётся</i><br><br>alert(num); <i>// 5</i>",

    // div33
    nameVariable8: "Это плохая практика, которая приводит к ошибке в строгом режиме:",

    // div34
    nameVariableExemple5: "'use strict';<br><br>num = 5; <i>// ошибка: num is not defined</i>",

    // div35
    constants1: "<h3>Константы</h3>Чтобы объявить константную, то есть, неизменяемую переменную, используйте <b>const</b> вместо <b>let</b>:",

    // div36
    constantsExemple1: "const myBirthday = '18.04.1982';",

    // div37
    constants2: "Переменные, объявленные с помощью <b>const</b>, называются «константами». Их нельзя изменить. Попытка сделать это приведёт к ошибке:",

    // div38
    constantsExemple2: "const myBirthday = '18.04.1982';<br><br>myBirthday = '01.01.2001'; <i>// ошибка, константу нельзя перезаписать!</i>",

    // div39
    constants3: "Если программист уверен, что переменная никогда не будет меняться, он может гарантировать это и наглядно донести до каждого, объявив её через <b>const.</b>",

    // div40
    constants4: "<h3>Константы в верхнем регистре</h3>Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта.<br><br>Названия таких констант пишутся с использованием заглавных букв и подчёркивания.<br><br>Например, сделаем константы для различных цветов в «шестнадцатеричном формате»:",

    // div41
    constantsExemple3: "const COLOR_RED = '#F00';<br>const COLOR_GREEN = '#0F0';<br>const COLOR_BLUE = '#00F';<br>const COLOR_ORANGE = '#FF7F00';<br><br><i>// ...когда нам нужно выбрать цвет</i><br>let color = COLOR_ORANGE;<br>alert(color); <i>// #FF7F00</i>",

    // div42
    constants5: "Преимущества:<br><br><ul><li>COLOR_ORANGE гораздо легче запомнить, чем '#FF7F00'.</li><br><li>Гораздо легче допустить ошибку при вводе '#FF7F00', чем при вводе COLOR_ORANGE.</li><br><li>При чтении кода COLOR_ORANGE намного понятнее, чем #FF7F00.</li></ul><br><br>Когда мы должны использовать для констант заглавные буквы, а когда называть их нормально? Давайте разберёмся и с этим.<br><br>Название «константа» просто означает, что значение переменной никогда не меняется. Но есть константы, которые известны до выполнения (например, шестнадцатеричное значение для красного цвета), а есть константы, которые вычисляются во время выполнения сценария, но не изменяются после их первоначального назначения.<br><br>Например:",

    // div43
    constantsExemple4: "const pageLoadTime = <i>/* время, потраченное на загрузку веб-страницы */</i>;",

    // div44
    constants6: "Значение <b>pageLoadTime</b> неизвестно до загрузки страницы, поэтому её имя записано обычными, а не прописными буквами. Но это всё ещё константа, потому что она не изменяется после назначения.<br><br>Другими словами, константы с именами, записанными заглавными буквами, используются только как псевдонимы для «жёстко закодированных» значений.",

    // div45
    nameVar: "<h3>Придумывайте правильные имена</h3>В разговоре о переменных необходимо упомянуть, что есть ещё одна чрезвычайно важная вещь.<br><br>Название переменной должно иметь ясный и понятный смысл, говорить о том, какие данные в ней хранятся.<br><br>Именование переменных – это один из самых важных и сложных навыков в программировании. Быстрый взгляд на имена переменных может показать, какой код был написан новичком, а какой – опытным разработчиком.<br><br>В реальном проекте большая часть времени тратится на изменение и расширение существующей кодовой базы, а не на написание чего-то совершенно нового с нуля. Когда мы возвращаемся к коду после какого-то промежутка времени, гораздо легче найти информацию, которая хорошо размечена. Или, другими словами, когда переменные имеют хорошие имена.<br><br>Пожалуйста, потратьте время на обдумывание правильного имени переменной перед её объявлением. Делайте так, и будете вознаграждены.", // 45 div.. Боже, за что?!

    // div46
    next: '<b><a href="#" onclick="quickLink(); JSTheamThree()">JS topic 3</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamFive()">JS topic 5</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Пятая тема.
let JSTopicFiveEng = {
    // div1
    dataTypes1: "<h3>Data types</h3>A value in JavaScript always refers to data of a certain type. For example, it can be a string or a number.<br><br>There are eight basic data types in JavaScript. In this In this chapter, we'll look at them in general, and in later chapters, we'll talk more about each.<br><br>A variable in JavaScript can contain any data.One moment it can be a string, the next it can be a number:",

    //div2
    dataTypesExample: '<i>// Wont be an error</i><br>let message = "hello";<br>message = 123456;',

    // div3
    dataTypes2: 'Programming languages that allow this are called "dynamically typed". This means that the data types are there, but the variables are not bound to any of them.',

    // div4
    number1: '<h2>Number</h2>',

    // div5
    numberExample1: 'let n = 123;<br>n = 12.345;',

    // div6
    number2: 'The number data type (<b>number</b>) represents both integer and floating point values.<br><br>There are many operations on numbers, such as multiplication <b>*</b>, division <b>/</b>, addition <b></b>+, subtraction <b>-</b> and so on.<br><br>In addition to ordinary numbers, there are so-called "special numeric values" that are of this data type: <b>Infinity</b>, <b>-Infinity</b> and <b>NaN</b>.<br><br><b>Infinity</b> represents mathematical infinity <b>∞</b>. This is a special value that is greater than any number.<br><br>We can get it by dividing by zero:',

    // div7
    numberExample2: 'alert( 1 / 0 ); <i>//Infinity</i>',

    // div8
    number3: 'Or set it explicitly:',

    // div9
    numberExample3: 'alert( Infinity ); <i>//Infinity</i>',

    // div10
    number4: '<b>NaN</b> means a computational error. This is the result of an invalid or undefined mathematical operation, such as:',

    // div11
    numberExample4: 'alert( "not a number" / 2 ); <i>// NaN, this division is an error</i>',

    // div12
    number5: 'The <b>NaN</b> value is sticky. Any mathematical operation with <b>NaN</b> returns <b>NaN</b>:',

    // div13
    numberExample5: 'alert( NaN + 1 ); <i>// NaN</i><br>alert( 3 * NaN ); <i>// NaN</i><br>alert( "not a number" / 2 - 1 ); <i>//NaN</i>',

    // div14
    number6: 'If there is <b>NaN</b> somewhere in the math expression, then it is propagated to the entire result (there is only one exception: <b>NaN ** 0</b> equals <b>1</ b>).',

    // div15
    number7: '<h3>Math operations are safe</h3>Math operations in JavaScript are "safe". We can do anything: divide by zero, treat non-numeric strings as numbers, etc.<br><br>The script will never stop with a fatal error (will not "die"). In the worst case, we will get <b>NaN</b> as a result of execution.',

    // div16
    number8: 'Special numeric values are of type "number". Of course, these are not numbers in the usual sense of the word.<br>',

    // div17
    bidInt1: '<h3>BigInt</h3>In JavaScript, the <b>number</b> type cannot safely handle numbers greater than <b>(2<sup>53</sup>-1 )</b> (i.e. <b>9007199254740991</b>) or less than <b>-(2<sup>53</sup>-1)</b> for negative numbers. Technically, the <b>number</b> type can store much larger values (up to <b>1.7976931348623157 * 10308</b>), but outside the safe range <b>±(2<sup>53</sup) >-1)</b> many of the numbers cannot be represented using this data type due to limitations caused by the internal representation of numbers in binary form. For example, odd numbers larger than <b>(2<sup>53</sup>-1)</b> cannot be stored using the <b>number</b> type, they will be automatically rounded with different precision to even values. At the same time, it is technically possible to store some even numbers greater than <b>(2<sup>53</sup>-1)</b> using the <b>number</b> type (however, do this to avoid further errors).<br><br>For most cases, a safe range of numbers from <b>-(2<sup>53</sup>-1)</b> to <b>(2<sup>53</sup>-1)</b>. But sometimes we need a range of really gigantic integers without any limits or missing values inside it. For example, in cryptography or when using a timestamp ("timestamp") with microseconds.<br><br>The <b>BigInt</b> type was added to JavaScript to allow working with integers of arbitrary length.<br> <br>To create a <b>BigInt</b> value, add n to the end of a numeric literal:',

    // div18
    bidIntExample: '<i>// the "n" at the end means it&aposs a BigInt</i><br>const bigInt = 1234567890123456789012345678901234567890n;',

    // div19
    bidInt2: '<h3>Support</h3>Currently, <b>BigInt</b> is only supported in Firefox, Chrome, Edge, and Safari, but is not supported in IE.',

    // div20
    string1: '<h3>String</h3>String (<b>string</b>) in JavaScript must be enclosed in quotes.',

    // div21
    stringExample1: 'let str = "Hello";<br>let phrase = `Back quotes allow you to embed variables ${str}`;',

    // div22
    string2: 'There are three types of quotes in JavaScript.<br><ol><li>Double quotes: "Hi".</li><li>Single quotes: &#8216Hi&#8217.</li><li>Back quotes: `Hello `.</li></ol><br>Double or single quotes are "plain" and there is no difference between them in JavaScript.<br><br>Back quotes, on the other hand, have extended functionality. They allow us to embed expressions in a string by enclosing them in <b>${…}</b>. For example:',

    // div23
    stringExample2: 'let name = "John";<br><br><i>// Insert a variable</i><br>alert( `Hello, ${name}!` ); <i>// Hi Ivan!</i><br><br><i>// Insert the expression</i><br>alert( `result: ${1 + 2}` ); <i>// result: 3</i>',

    // div24
    string3: 'The expression inside <b>${…}</b> is evaluated and its result becomes part of the string. We can put anything in there: a variable <b>name</b>, or an expression <b>1 + 2</b>, or something more complex.<br><br>Note that this can only be done in backticks. Other quotes don&apost have this embed functionality!',

    // div25
    stringExample3: 'alert( "result: ${1 + 2}" ); <i>// result: ${1 + 2} (double quotes do nothing)</i>',

    // div26
    string4: '<h3>There is no separate data type for a single character.</h3>In some languages, such as C and Java, to store a single character, such as <b>"a"</b> or <b> "%"</b>, there is a separate type. In C and Java, this is <b>char</b>.<br><br>There is no such type in JavaScript, only the <b>string</b> type. The string can contain zero characters (be empty), one character, or many characters.',

    // div27
    bool1: '<h3>Boolean type</h3>Boolean type (<b>boolean</b>) can only take two values: <b>true</b> (true) and <b >false</b> (false).<br><br>This type is usually used to store yes/no values: <b>true</b> means "yes, right", and <b>false </b> means "no, not right".<br><br>For example:',

    // div28
    boolExample1: 'let nameFieldChecked = true; <i>// yes, the field is checked</i><br>let ageFieldChecked = false; <i>// no, the field is not checked</i>',

    // div29
    bool2: 'Boolean values can also be the result of comparisons:',

    // div30
    boolExample2: 'let isGreater = 4 > 1;<br><br>alert( isGreater ); <i>// true (comparison will be "yes")</i>',

    // div31
    null1: '<h3>The value "null"</h3>The special value <b>null</b> does not belong to any of the types described above.<br><br>It forms a separate type that contains only the value <b>null</b>:',

    // div32
    nullExample: 'let age = null;',

    // div33
    null2: 'In JavaScript, <b>null</b> is not a "reference to a non-existent object" or a "null pointer" like it is in some other languages.<br><br>It&aposs just a special value that represents "nothing" , "empty", or "value unknown".<br><br>The above code indicates that the value of the variable <b>age</b> is unknown.',

    // div34
    undefined1: '<h3>The value is "undefined"</h3>The special value <b>undefined</b> also stands alone. It forms a type from itself in the same way as <b>null</b>.<br><br>It means that "no value has been assigned".<br><br>If a variable is declared but not assigned no value, its value will be <b>undefined</b>:',

    // div35
    undefinedExample1: 'let age;<br><br>alert(age); <i>// prints "undefined"</i>',

    // div36
    undefined2: 'Technically we can assign <b>undefined</b> to any variable:',

    // div37
    undefinedExample2: 'let age = 123;<br><br><i>// change value to undefined</i><br>age = undefined;<br><br>alert(age); <i>// "undefined"</i>',

    //div38:
    undefined3: '…But that&aposs not recommended. Typically <b>null</b> is used to assign an "empty" or "unknown" value to a variable, and <b>undefined</b> is used to check if the variable has been assigned.',

    //div39:
    objectsAndSymbols: '<h3>Objects and Symbols</h3>The type <b>object</b> (object) is special.<br><br>All other types are called "primitive" because their values can be only simple values (be it a string, or a number, or something else). Objects store collections of data or more complex structures.<br><br>The <b>symbol</b> type (symbol) is used to create unique identifiers in objects.',

    //div40:
    typeof1: '<h3>Typeof operator</h3>The <b>typeof</b> operator returns the type of the argument. This is useful when we want to treat values of different types differently, or just want to do validation.<br><br>It has two syntactic forms: ',

    // div41
    typeofExample1: '<i>// Normal syntax</i><br>typeof 5 <i>// Outputs "number"</i><br><i>// Function call-like syntax (less common)</i><br>typeof(5) <i>// Also prints "number"</i>',

    // div42
    typeof2: 'If an expression is passed, then you need to enclose it in parentheses, because typeof has higher precedence than binary operators:',

    // div43
    typeofExample2: 'typeof 50 + "Apartments"; <i>// Output "number of Apartments"</i><br>typeof (50 + " Apartments"); <i>// Output "string"</i>',

    // div44
    typeof3: 'In other words, the parentheses are needed to determine the type of the value that resulted from executing the expression in them.<br><br>A call to <b>typeof x</b> returns a string with the type name:',

    // div45
    typeofExample3: 'typeof undefined <i>// "undefined"</i><br><br>typeof 0 <i>// "number"</i><br><br>typeof 10n <i>// "bigint"</i><br><br>typeof true <i>// "boolean"</i><br><br>typeof "foo" <i>// "string"</i><br><br>typeof Symbol("id") <i>// "symbol"</i><br><br>typeof Math <i>// "object" (1)</i><br> <br>typeof null <i>// "object" (2)</i><br><br>typeof alert <i>// "function" (3)</i>',

    // div46
    typeof4: 'The last three lines need an explanation:<br><ol><li><b>Math</b> is a built-in object that provides mathematical operations and constants.</li><li>The result of calling <b >typeof null</b> is <b>"object"</b>. This is an officially recognized bug in <b>typeof</b>, going back to the days of JavaScript and kept for compatibility. Of course, <b>null</b> is not an object. It is a special value with a separate type.</li><li>A call to <b>typeof alert</b> returns <b>"function"</b> because <b>alert</b> is a function. We&aposll explore functions in later chapters, where we&aposll also see that there is no special type "function" in JavaScript. Functions are of object type. But <b>typeof</b> treats them in a special way, returning <b>"function"</b>. So it also happened from the creation of JavaScript. Formally, this is incorrect, but it can be convenient in practice.</li></ol>',

    // div47
    next: '<b><a href="#" onclick="quickLink(); JSTheamFour()">JS topic 4</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicFiveRus = {
    // div1
    dataTypes1: "<h3>Типы данных</h3>Значение в JavaScript всегда относится к данным определённого типа. Например, это может быть строка или число.<br><br>Есть восемь основных типов данных в JavaScript. В этой главе мы рассмотрим их в общем, а в следующих главах поговорим подробнее о каждом.<br><br>Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:",

    // div2
    dataTypesExemple: '<i>// Не будет ошибкой</i><br>let message = "hello";<br>message = 123456;',

    // div3
    dataTypes2: 'Языки программирования, в которых такое возможно, называются «динамически типизированными». Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.',

    // div4
    number1: '<h2>Число</h2>',

    // div5
    numberExemple1: 'let n = 123;<br>n = 12.345;',

    // div6
    number2: 'Числовой тип данных (<b>number</b>) представляет как целочисленные значения, так и числа с плавающей точкой.<br><br>Существует множество операций для чисел, например, умножение <b>*</b>, деление <b>/</b>, сложение <b></b>+, вычитание <b>-</b> и так далее.<br><br>Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: <b>Infinity</b>, <b>-Infinity</b> и <b>NaN</b>.<br><br><b>Infinity</b> представляет собой математическую бесконечность <b>∞</b>. Это особое значение, которое больше любого числа.<br><br>Мы можем получить его в результате деления на ноль:',

    // div7
    numberExemple2: 'alert( 1 / 0 ); <i>// Infinity</i>',

    // div8
    number3: 'Или задать его явно:',

    // div9
    numberExemple3: 'alert( Infinity ); <i>// Infinity</i>',

    // div10
    number4: '<b>NaN</b> означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:',

    // div11
    numberExemple4: 'alert( "не число" / 2 ); <i>// NaN, такое деление является ошибкой</i>',

    // div12
    number5: 'Значение <b>NaN</b> «прилипчиво». Любая математическая операция с <b>NaN</b> возвращает <b>NaN</b>:',

    // div13
    numberExemple5: 'alert( NaN + 1 ); <i>// NaN</i><br>alert( 3 * NaN ); <i>// NaN</i><br>alert( "не число" / 2 - 1 ); <i>// NaN</i>',

    // div14
    number6: 'Если где-то в математическом выражении есть <b>NaN</b>, то оно распространяется на весь результат (есть только одно исключение: <b>NaN ** 0</b> равно <b>1</b>).',

    // div15
    number7: '<h3>Математические операции – безопасны</h3>Математические операции в JavaScript «безопасны». Мы можем делать что угодно: делить на ноль, обращаться с нечисловыми строками как с числами и т.д.<br><br>Скрипт никогда не остановится с фатальной ошибкой (не «умрёт»). В худшем случае мы получим <b>NaN</b> как результат выполнения.',

    // div16
    number8: 'Специальные числовые значения относятся к типу «число». Конечно, это не числа в привычном значении этого слова.<br>',

    // div17
    bidInt1: '<h3>BigInt</h3>В JavaScript тип <b>number</b> не может безопасно работать с числами, большими, чем <b>(2<sup>53</sup>-1)</b> (т. е. <b>9007199254740991</b>) или меньшими, чем <b>-(2<sup>53</sup>-1)</b> для отрицательных чисел. Технически, тип <b>number</b> может хранить и гораздо большие значения (вплоть до <b>1.7976931348623157 * 10308</b>), однако за пределами безопасного диапазона <b>±(2<sup>53</sup>-1)</b> многие из чисел не могут быть представлены с помощью этого типа данных из-за ограничений, вызванных внутренним представлением чисел в двоичной форме. Например, нечётные числа, большие, чем <b>(2<sup>53</sup>-1)</b>, невозможно хранить при помощи типа <b>number</b>, они с разной точностью будут автоматически округляться до чётных значений. В то же время некоторые чётные числа, большие, чем <b>(2<sup>53</sup>-1)</b>, при помощи типа <b>number</b> хранить технически возможно (однако не стоит этого делать во избежание дальнейших ошибок).<br><br>Для большинства случаев достаточно безопасного диапазона чисел от <b>-(2<sup>53</sup>-1)</b> до <b>(2<sup>53</sup>-1)</b>. Но иногда нам нужен диапазон действительно гигантских целых чисел без каких-либо ограничений или пропущенных значений внутри него. Например, в криптографии или при использовании метки времени («timestamp») с микросекундами.<br><br>Тип <b>BigInt</b> был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.<br><br>Чтобы создать значение типа <b>BigInt</b>, необходимо добавить n в конец числового литерала:',

    // div18
    bidIntExemple: '<i>// символ "n" в конце означает, что это BigInt</i><br>const bigInt = 1234567890123456789012345678901234567890n;',

    // div19
    bidInt2: '<h3>Поддержка</h3>В данный момент <b>BigInt</b> поддерживается только в браузерах Firefox, Chrome, Edge и Safari, но не поддерживается в IE.',

    // div20
    string1: '<h3>Строка</h3>Строка (<b>string</b>) в JavaScript должна быть заключена в кавычки.',

    // div21
    stringExemple1: 'let str = "Привет";<br>let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;',

    // div22
    string2: 'В JavaScript существует три типа кавычек.<br><ol><li>Двойные кавычки: "Привет".</li><li>Одинарные кавычки: &#8216Привет&#8217.</li><li>Обратные кавычки: `Привет`.</li></ol><br>Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript.<br><br>Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в <b>${…}</b>. Например:',

    // div23
    stringExemple2: 'let name = "Иван";<br><br><i>// Вставим переменную</i><br>alert( `Привет, ${name}!` ); <i>// Привет, Иван!</i><br><br><i>// Вставим выражение</i><br>alert( `результат: ${1 + 2}` ); <i>// результат: 3</i>',

    // div24
    string3: 'Выражение внутри <b>${…}</b> вычисляется, и его результат становится частью строки. Мы можем положить туда всё, что угодно: переменную <b>name</b>, или выражение <b>1 + 2</b>, или что-то более сложное.<br><br>Обратите внимание, что это можно делать только в обратных кавычках. Другие кавычки не имеют такой функциональности встраивания!',

    // div25
    stringExemple3: 'alert( "результат: ${1 + 2}" ); <i>// результат: ${1 + 2} (двойные кавычки ничего не делают)</i>',

    // div26
    string4: '<h3>Нет отдельного типа данных для одного символа.</h3>В некоторых языках, например C и Java, для хранения одного символа, например <b>"a"</b> или <b>"%"</b>, существует отдельный тип. В языках C и Java это <b>char</b>.<br><br>В JavaScript подобного типа нет, есть только тип <b>string</b>. Строка может содержать ноль символов (быть пустой), один символ или множество.',

    // div27
    bool1: '<h3>Булевый (логический) тип</h3>Булевый тип (<b>boolean</b>) может принимать только два значения: <b>true</b> (истина) и <b>false</b> (ложь).<br><br>Такой тип, как правило, используется для хранения значений да/нет: <b>true</b> значит «да, правильно», а <b>false</b> значит «нет, не правильно».<br><br>Например:',

    // div28
    boolExemple1: 'let nameFieldChecked = true; <i>// да, поле отмечено</i><br>let ageFieldChecked = false; <i>// нет, поле не отмечено</i>',

    // div29
    bool2: 'Булевые значения также могут быть результатом сравнений:',

    // div30
    boolExemple2: 'let isGreater = 4 > 1;<br><br>alert( isGreater ); <i>// true (результатом сравнения будет "да")</i>',

    // div31
    null1: '<h3>Значение «null»</h3>Специальное значение <b>null</b> не относится ни к одному из типов, описанных выше.<br><br>Оно формирует отдельный тип, который содержит только значение <b>null</b>:',

    // div32
    nullExemple: 'let age = null;',

    // div33
    null2: 'В JavaScript <b>null</b> не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках.<br><br>Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».<br><br>В приведённом выше коде указано, что значение переменной <b>age</b> неизвестно.',

    // div34
    undefined1: '<h3>Значение «undefined»</h3>Специальное значение <b>undefined</b> также стоит особняком. Оно формирует тип из самого себя так же, как и <b>null</b>.<br><br>Оно означает, что «значение не было присвоено».<br><br>Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет <b>undefined</b>:',

    // div35
    undefinedExemple1: 'let age;<br><br>alert(age); <i>// выведет "undefined"</i>',

    // div36
    undefined2: 'Технически мы можем присвоить значение <b>undefined</b> любой переменной:',

    // div37
    undefinedExemple2: 'let age = 123;<br><br><i>// изменяем значение на undefined</i><br>age = undefined;<br><br>alert(age); <i>// "undefined"</i>',

    // div38:
    undefined3: '…Но так делать не рекомендуется. Обычно <b>null</b> используется для присвоения переменной «пустого» или «неизвестного» значения, а <b>undefined</b> – для проверок, была ли переменная назначена.',

    // div39:
    objectsAndSymbols: '<h3>Объекты и символы</h3>Тип <b>object</b> (объект) – особенный.<br><br>Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.<br><br>Тип <b>symbol</b> (символ) используется для создания уникальных идентификаторов в объектах.',

    // div40:
    typeof1: '<h3>Оператор typeof</h3>Оператор <b>typeof</b> возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.<br><br>У него есть две синтаксические формы:',

    // div41
    typeofExemple1: '<i>// Обычный синтаксис</i><br>typeof 5 <i>// Выведет "number"</i><br><i>// Синтаксис, напоминающий вызов функции (встречается реже)</i><br>typeof(5) <i>// Также выведет "number"</i>',

    // div42
    typeof2: 'Если передается выражение, то нужно заключать его в скобки, т.к. typeof имеет более высокий приоритет, чем бинарные операторы:',

    // div43
    typeofExemple2: 'typeof 50 + " Квартир"; <i>// Выведет "number Квартир"</i><br>typeof (50 + " Квартир"); <i>// Выведет "string"</i>',

    // div44
    typeof3: 'Другими словами, скобки необходимы для определения типа значения, которое получилось в результате выполнения выражения в них.<br><br>Вызов <b>typeof x</b> возвращает строку с именем типа:',

    // div45
    typeofExemple3: 'typeof undefined <i>// "undefined"</i><br><br>typeof 0 <i>// "number"</i><br><br>typeof 10n <i>// "bigint"</i><br><br>typeof true <i>// "boolean"</i><br><br>typeof "foo" <i>// "string"</i><br><br>typeof Symbol("id") <i>// "symbol"</i><br><br>typeof Math <i>// "object"  (1)</i><br><br>typeof null <i>// "object"  (2)</i><br><br>typeof alert <i>// "function"  (3)</i>',

    // div46
    typeof4: 'Последние три строки нуждаются в пояснении:<br><ol><li><b>Math</b> — это встроенный объект, который предоставляет математические операции и константы.</li><li>Результатом вызова <b>typeof null</b> является <b>"object"</b>. Это официально признанная ошибка в <b>typeof</b>, ведущая начало с времён создания JavaScript и сохранённая для совместимости. Конечно, <b>null</b> не является объектом. Это специальное значение с отдельным типом.</li><li>Вызов <b>typeof alert</b> возвращает <b>"function"</b>, потому что <b>alert</b> является функцией. Мы изучим функции в следующих главах, где заодно увидим, что в JavaScript нет специального типа «функция». Функции относятся к объектному типу. Но <b>typeof</b> обрабатывает их особым образом, возвращая <b>"function"</b>. Так тоже повелось от создания JavaScript. Формально это неверно, но может быть удобным на практике.</li></ol>',

    // div47
    next: '<b><a href="#" onclick="quickLink(); JSTheamFour()">JS topic 4</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Шестая тема.
let JSTopicSixEng = {
    // div1
    interaction: '<h3>Interaction: alert, prompt, confirm</h3>Since we will be using the browser as a demo environment, we need to familiarize ourselves with a few features of its interface, namely: <b>alert</b >, <b>prompt</b> and <b>confirm</b>.',

    //div2
    alert1: '<h3>alert</h3>We are already familiar with this function. It displays a message and waits for the user to click the OK button.<br><br>For example:',

    // div3
    alertExample: 'alert("Hello");',

    // div4
    alert2: 'This little message box is called a modal window. The concept of modal means that the user cannot interact with the interface of the rest of the page, click on other buttons, etc. as long as it interacts with the window. In this case, until the “OK” button is pressed.',

    // div5
    prompt1: '<h3>prompt</h3>The <b>prompt</b> function takes two arguments:',

    // div6
    promptExample1: 'result = prompt(title, [default]);',

    // div7
    prompt2: 'This code will display a modal window with text, a text input field, and OK/Cancel buttons.<br><br><b>title</b> - the text to display in the window.<brr><br><b >default</b> - an optional second parameter that sets the initial value of the text field in the window.<br><br><h3>Square brackets in the syntax [...]</h3>Square brackets around The <b>default</b> in the above syntax means that the parameter is optional.<br><br>The user can type something in the input field and click OK. The entered text will be assigned to the <b>result</b> variable. The user can also cancel the entry by clicking on the "Cancel" button or by pressing the <b>Esc</b> key. In this case, <b>result</b> will be <b>null</b>.<br><br>Invoking prompt returns the text specified in the input field, or <b>null</b> if input canceled by user.<br><br>For example:',

    // div8
    promptExample2: 'let age = prompt("How old are you?", 100);<br><br>alert(`You are ${age} years old!`); <i>// You are 100 years old!</i>',

    // div9
    prompt3: '<h3>For IE: always set the default value</h3>The second parameter is optional, but if you do not specify it, Internet Explorer will insert the string <b>"undefined"</b> in the field for input.<br><br>Run the code in Internet Explorer and see the result:',

    // div10
    promptExample3: 'let test = prompt("Test");',

    // div11
    prompt4: 'For <b>prompt</b> to look good in IE, it is recommended to always specify the second parameter:',

    // div12
    promptExample4: 'let test = prompt("Test", ""); <i>// <-- for IE</i>',

    // div13
    confirm1: '<h3>confirm</h3>Syntax:',

    // div14
    confirmExample1: 'result = confirm(question);',

    // div15
    confirm2: 'The <b>confirm</b> function displays a modal window with the question text <b>question</b> and two buttons: OK and Cancel.<br><br>Result is <b>true</b> if the OK button is pressed. Otherwise, <b>false</b>.<br><br>For example: ',

    // div16
    confirmExample2: 'let isBoss = confirm("Are you the boss here?");<br><br>alert( isBoss ); <i>// true if OK is pressed</i>',

    // div17
    next: '<b><a href="#" onclick="quickLink(); JSTheamFive()">JS topic 5</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamSeven()">JS topic 7</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicSixRus = {
    // div1
    interaction: '<h3>Взаимодействие: alert, prompt, confirm</h3>Так как мы будем использовать браузер как демо-среду, нам нужно познакомиться с несколькими функциями его интерфейса, а именно: <b>alert</b>, <b>prompt</b> и <b>confirm</b>.',

    // div2
    alert1: '<h3>alert</h3>С этой функцией мы уже знакомы. Она показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».<br><br>Например:',

    // div3
    alertExemple: 'alert("Hello");',

    // div4
    alert2: 'Это небольшое окно с сообщением называется модальным окном. Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном случае – пока не будет нажата кнопка «OK».',

    // div5
    prompt1: '<h3>prompt</h3>Функция <b>prompt</b> принимает два аргумента:',

    // div6
    promptExemple1: 'result = prompt(title, [default]);',

    // div7
    prompt2: 'Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.<br><br><b>title</b> - текст для отображения в окне.<brr><br><b>default</b> - необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.<br><br><h3>Квадратные скобки в синтаксисе [...]</h3>Квадратные скобки вокруг <b>default</b> в описанном выше синтаксисе означают, что параметр факультативный, необязательный.<br><br>Пользователь может напечатать что-либо в поле ввода и нажать OK. Введённый текст будет присвоен переменной <b>result</b>. Пользователь также может отменить ввод нажатием на кнопку «Отмена» или нажав на клавишу <b>Esc</b>. В этом случае значением <b>result</b> станет <b>null</b>.<br><br>Вызов prompt возвращает текст, указанный в поле для ввода, или <b>null</b>, если ввод отменён пользователем.<br><br>Например:',

    // div8
    promptExemple2: 'let age = prompt("Сколько тебе лет?", 100);<br><br>alert(`Тебе ${age} лет!`); <i>// Тебе 100 лет!</i>',

    // div9
    prompt3: '<h3>Для IE: всегда устанавливайте значение по умолчанию</h3>Второй параметр является необязательным, но если не указать его, то Internet Explorer вставит строку <b>"undefined"</b> в поле для ввода.<br><br>Запустите код в Internet Explorer и посмотрите на результат:',

    // div10
    promptExemple3: 'let test = prompt("Test");',

    // div11
    prompt4: 'Чтобы <b>prompt</b> хорошо выглядел в IE, рекомендуется всегда указывать второй параметр:',

    // div12
    promptExemple4: 'let test = prompt("Test", ""); <i>// <-- для IE</i>',

    // div13
    confirm1: '<h3>confirm</h3>Синтаксис:',

    // div14
    confirmExemple1: 'result = confirm(question);',

    // div15
    confirm2: 'Функция <b>confirm</b> отображает модальное окно с текстом вопроса <b>question</b> и двумя кнопками: OK и Отмена.<br><br>Результат – <b>true</b>, если нажата кнопка OK. В других случаях – <b>false</b>.<br><br>Например:',

    // div16
    confirmExemple2: 'let isBoss = confirm("Ты здесь главный?");<br><br>alert( isBoss ); <i>// true, если нажата OK</i>',

    // div17
    next: '<b><a href="#" onclick="quickLink(); JSTheamFive()">JS topic 5</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamSeven()">JS topic 7</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Седьмая тема.
let JSTopicSevenEng = {
    // div1
    typeConversion: '<h3>Type conversion</h3>Most often, operators and functions automatically convert the values passed to them to the desired type.<br><br>For example, <b>alert</b> automatically converts any value to a string. Mathematical operators convert values to numbers.<br><br>There are also cases where we need to explicitly convert a value to the expected type.',

    //div2
    stringConversion1: '<h3>String conversion</h3>A string conversion occurs when something needs to be represented as a string.<br><br>For example, <b>alert(value)</b> converts a value to a string. <br><br>We can also use the <b>String(value)</b> function to convert the value to a string:',

    // div3 example
    stringConversionExample: 'let value = true;<br>alert(typeof value); <i>// boolean</i><br><br>value = String(value); <i>// now value is the string "true"</i><br>alert(typeof value); <i>//string</i>',

    // div4
    stringConversion2: 'The conversion is done in the obvious way. <b>false</b> becomes <b>"false"</b>, <b>null</b> becomes <b>"null"</b> etc.',

    // div5
    numericalConversion1: '<h3>Numerical conversion</h3>Numeric conversion occurs in mathematical functions and expressions.<br><br>For example, when division <b>/</b> is applied to something other than a number:',

    // div6 example
    numericalConversionExample1: 'alert( "6" / "2" ); <i>// 3, strings are converted to numbers</i>',

    // div7
    numericalConversion2: 'We can use the <b>Number(value)</b> function to explicitly convert value to a number:',

    // div8 example
    numericalConversionExample2: 'let str = "123";<br>alert(typeof str); <i>// string</i><br><br>let num = Number(str); <i>// becomes the number 123</i><br><br>alert(typeof num); <i>//number</i>',

    // div9
    numericalConversion3: 'Explicit conversion is often used when we expect to get a number from a string context, such as form text fields.<br><br>If a string cannot be explicitly converted to a number, then the result of the conversion is NaN. For example:',

    // div10 example
    numericalConversionExample3: 'let age = Number("Any string instead of a number");<br><br>alert(age); <i>// NaN, conversion failed</i>',

    // div11
    numericalConversion4: 'Value <b>undefined</b> is converted to <b>NaN</b><br><br>Value <b>null</b> is converted to <b>0</b><br> <br>The <b>true / false</b> value is converted to <b>1 / 0</b><br><br>The <b>string</b> value is converted to whitespace (spaces, tabs) \\t, newlines \\n, etc.) are cut off at the edges. Further, if an empty string remains, then we get 0, otherwise a number is “read” from a non-empty string. On error, the result is <b>NaN</b>.<br><br>Examples:',

    // div12 example
    numericalConversionExample4: 'alert( Number(" 123 ") ); <i>// 123</i><br>alert( Number("123z") ); <i>// NaN (error reading number in place of character "z")</i><br>alert( Number(true) ); <i>// 1</i><br>alert( Number(false) ); <i>// 0</i>',

    // div13
    numericalConversion5: 'Please note that <b>null</b> and <b>undefined</b> behave differently. So, <b>null</b> becomes zero, while <b>undefined</b> is reduced to <b>NaN</b>.<br><br>Most math operators also perform this transformation, as we we will see in the next chapter.',

    // div14
    booleanTransformation1: '<h3>Boolean transformation</h3>Boolean transformation is the simplest.<br><br>Occurs in boolean operations (we\'ll see conditional checks and similar constructs later), but can also be done explicitly with the function <b> Boolean(value)</b>.<br><br>Conversion rule:<br><ul><li>Values that are intuitively "empty", like <b>0</b>, an empty string, <b>null</b>, <b>undefined</b> and <b>NaN</b> become <b>false</b>.</li><br><li>All other values become <b>true</b>.</li></ul><br>For example:',

    // div15 example
    booleanTransformationExample1: 'alert( Boolean(1) ); <i>// true</i><br>alert( Boolean(0) ); <i>// false</i><br><br>alert( Boolean("Hi!") ); <i>// true</i><br>alert( Boolean("") ); <i>//false</i>',

    // div16
    booleanTransformation2: 'Note that the null string <b>"0"</b> is <b>true</b><br><br>Some languages (like PHP) accept the string <b>"0" "</b> as <b>false</b>. But in JavaScript, if the string is not empty, then it is always <b>true</b>.',

    // div17 example
    booleanTransformationExample2: 'alert( Boolean("0") ); <i>// true</i><br>alert( Boolean(" ") ); <i>// space is also true (any non-empty string is true)</i>',

    // div18
    next: '<b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamEight()">JS topic 8</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicSevenRus = {
    // div1
    typeConversion: '<h3>Преобразование типов</h3>Чаще всего операторы и функции автоматически приводят переданные им значения к нужному типу.<br><br>Например, <b>alert</b> автоматически преобразует любое значение к строке. Математические операторы преобразуют значения к числам.<br><br>Есть также случаи, когда нам нужно явно преобразовать значение в ожидаемый тип.',

    // div2
    stringConversion1: '<h3>Строковое преобразование</h3>Строковое преобразование происходит, когда требуется представление чего-либо в виде строки.<br><br>Например, <b>alert(value)</b> преобразует значение к строке.<br><br>Также мы можем использовать функцию <b>String(value)</b>, чтобы преобразовать значение к строке:',

    // div3 Exemple
    stringConversionExemple: 'let value = true;<br>alert(typeof value); <i>// boolean</i><br><br>value = String(value); <i>// теперь value это строка "true"</i><br>alert(typeof value); <i>// string</i>',

    // div4
    stringConversion2: 'Преобразование происходит очевидным образом. <b>false</b> становится <b>"false"</b>, <b>null</b> становится <b>"null"</b> и т.п.',

    // div5
    numericalConversion1: '<h3>Численное преобразование</h3>Численное преобразование происходит в математических функциях и выражениях.<br><br>Например, когда операция деления <b>/</b> применяется не к числу:',

    // div6 Exemple
    numericalConversionExemple1: 'alert( "6" / "2" ); <i>// 3, строки преобразуются в числа</i>',

    // div7
    numericalConversion2: 'Мы можем использовать функцию <b>Number(value)</b>, чтобы явно преобразовать value к числу:',

    // div8 Exemple
    numericalConversionExemple2: 'let str = "123";<br>alert(typeof str); <i>// string</i><br><br>let num = Number(str); <i>// становится числом 123</i><br><br>alert(typeof num); <i>// number</i>',

    // div9
    numericalConversion3: 'Явное преобразование часто применяется, когда мы ожидаем получить число из строкового контекста, например из текстовых полей форм.<br><br>Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN. Например:',

    // div10 Exemple
    numericalConversionExemple3: 'let age = Number("Любая строка вместо числа");<br><br>alert(age); <i>// NaN, преобразование не удалось</i>',

    // div11
    numericalConversion4: 'Значение <b>undefined</b> преобразуется в <b>NaN</b><br><br>Значение <b>null</b> преобразуется в <b>0</b><br><br>Значение <b>true / false</b> преобразуется в <b>1 / 0</b><br><br>Значение <b>string</b> преобразуется в пробельные символы (пробелы, знаки табуляции \\t, знаки новой строки \\n и т. п.) по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат <b>NaN</b>.<br><br>Примеры:',

    // div12 Exemple
    numericalConversionExemple4: 'alert( Number("   123   ") ); <i>// 123</i><br>alert( Number("123z") );      <i>// NaN (ошибка чтения числа на месте символа "z")</i><br>alert( Number(true) );        <i>// 1</i><br>alert( Number(false) );       <i>// 0</i>',

    // div13
    numericalConversion5: 'Учтите, что <b>null</b> и <b>undefined</b> ведут себя по-разному. Так, <b>null</b> становится нулём, тогда как <b>undefined</b> приводится к <b>NaN</b>.<br><br>Большинство математических операторов также производит данное преобразование, как мы увидим в следующей главе.',

    // div14
    booleanTransformation1: '<h3>Логическое преобразование</h3>Логическое преобразование самое простое.<br><br>Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции <b>Boolean(value)</b>.<br><br>Правило преобразования:<br><ul><li>Значения, которые интуитивно «пустые», вроде <b>0</b>, пустой строки, <b>null</b>, <b>undefined</b> и <b>NaN</b>, становятся <b>false</b>.</li><br><li>Все остальные значения становятся <b>true</b>.</li></ul><br>Например:',

    // div15 Exemple
    booleanTransformationExemple1: 'alert( Boolean(1) ); <i>// true</i><br>alert( Boolean(0) ); <i>// false</i><br><br>alert( Boolean("Привет!") ); <i>// true</i><br>alert( Boolean("") ); <i>// false</i>',

    // div16
    booleanTransformation2: 'Заметим, что строчка с нулём <b>"0"</b> — это <b>true</b><br><br>Некоторые языки (к примеру, PHP) воспринимают строку <b>"0"</b> как <b>false</b>. Но в JavaScript, если строка не пустая, то она всегда <b>true</b>.',

    // div17 Exemple
    booleanTransformationExemple2: 'alert( Boolean("0") ); <i>// true</i><br>alert( Boolean(" ") ); <i>// пробел это тоже true (любая непустая строка это true)</i>',

    // div18
    next: '<b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamEight()">JS topic 8</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Восьмая тема.
let JSTopicEightEng = {
    // div1
    basicOperators: '<h3>Basic operators, math</h3>Many operators are familiar to us from school: addition <b>+</b>, multiplication <b>*</b>, subtraction <b>-</b > and so on.<br><br>In this chapter, we\'ll start with simple operators, and then we\'ll concentrate on JavaScript-specific aspects that are not taught in high school arithmetic.',

    //div2
    terms1: '<h3>Terms: "unary", "binary", "operand"</h3>Before we move on, let&aposs clear up some terminology.<ul><li><b>Operand</b> – what the operator applies to. For example, the multiplication <b>5 * 2</b> has two operands: the left operand is <b>5</b> and the right operand is <b>2</b>. They are sometimes called "arguments" instead of "operands".</li><br><li><b>Unary</b> is an operator that applies to a single operand. For example, the unary minus operator <b>"-"</b> reverses the sign of a number: <b>x = -x;</b></li><br><li><b>Binary</b > is an operator that is applied to two operands. The same minus exists in binary form:</li></ul>',

    // div3 example
    termsExample: 'let x = 1, y = 3;<br>alert( y - x ); <i>// 2, binary minus subtracts values</i>',

    // div4
    terms2: 'Formally, in the last examples we are talking about two different operators using the same symbol: the negation operator (a unary operator that reverses the sign) and the subtraction operator (a binary operator that subtracts one number from another).',

    // div5
    mathematics1: '<h3>Math</h3>The following mathematical operators are supported:<br><ul><li>Addition <b>+</b></li><li>Subtraction <b>-</b> </li><li>Multiplication <b>*</b></li><li>Dividing <b>/</b></li><li>Taking remainder of division <b>%</b ></li><li>Exponentiation <b>**</b></li></ul>The first four operators are obvious, but about <b>%</b> and <b>**</b> is worth saying a few words.',

    // div6
    mathematics2: '<h3>Remainder taking %</h3>Remainder operator <b>%</b>, despite the designation, has nothing to do with percentages.<br><br>Result <b>a % b</b> is the remainder of integer division of <b>a</b> by <b>b</b>.<br><br>For example:',

    // div7 example
    mathematicsExample1: 'alert( 5 % 2 ); <i>// 1, modulo 5 divided by 2</i><br>alert( 8 % 3 ); <i>// 2, modulo 8 divided by 3</i><br>alert( 8 % 4 ); <i>// 0, modulo 8 divided by 4</i>',

    // div8
    mathematics3: '<h3>Exponentiation **</h3>The exponentiation operator <b>a ** b</b> raises <b>a</b> to the power <b>b</b>. <br><br>In school math we write this as a<sup>b</sup><br><br>For example:.',

    // div9 example
    mathematicsExample2: 'alert( 2 ** 2 ); <i>// 2² = 4</i><br>alert( 2 ** 3 ); <i>// 2³ = 8</i><br>alert( 2 ** 4 ); <i>// 2⁴ = 16</i>',

    // div10
    mathematics4: 'Mathematically, the operator also works for non-integer numbers. For example, the square root is the exponentiation of <b>1/2</b>:',

    // div11 example
    mathematicsExample3: 'alert( 4 ** (1/2) ); <i>// 2 (power 1/2 is equivalent to taking the square root)</i><br>alert( 8 ** (1/3) ); <i>// 2 (power 1/3 is equivalent to taking the cube root)</i>',

    // div12
    mathematics5: '<h3>Adding strings with binary +</h3>Let&aposs look at the special features of JavaScript operators that are beyond the scope of school arithmetic.<br><br>Usually with a plus sign <b>"+"</b> add numbers.<br><br>But if the binary operator <b>"+"</b> is applied to strings, then it combines them into one:',

    // div13 example
    mathematicsExample4: 'let s = "mine" + "string";<br>alert(s); <i>// mystring</i>',

    // div14
    mathematics6: 'Note that if at least one operand is a string, then the second one will also be converted to a string.<br><br>For example:',

    // div15 example
    mathematicsExample5: 'alert( &apos1&apos + 2 ); <i>// "12"</i><br>alert( 2 + &apos1&apos ); <i>// "21"</i>',

    // div16
    mathematics7: 'As you can see, it doesn&apost matter if the first or second operand is a string.<br><br>Here&aposs a more complicated example:',

    // div17 example
    mathematicsExample6: 'alert(2 + 2 + &apos1&apos ); <i>// will be "41", not "221"</i>',

    // div18
    mathematics8: 'Here the operators work one after the other. The first <b>+</b> adds two numbers and returns <b>4</b>, then the next <b>+</b> concatenates the result with a string, producing <b>4 + "1" = " 41"</b>.<br><br>Adding and converting strings is a feature of the binary plus <b>+</b>. Other arithmetic operators work only with numbers and always convert operands to numbers.<br><br>For example, subtraction and division:',

    // div19 example
    mathematicsExample7: 'alert( 6 - &apos2&apos ); <i>// 4, &apos2&apos is cast to a number</i><br>alert( &apos6&apos / &apos2&apos ); <i>// 3, both operands are converted to numbers</i>',

    // div20
    mathematics9: '<h3>Number reduction, unary +</h3>Plus <b>+</b> exists in two forms: binary, which we used above, and unary.<br><br>Unary, that is, applied to a single value, plus <b>+</b> does nothing with numbers. But if the operand is not a number, the unary plus will convert it to a number.<br><br>For example:',

    // div21 example
    mathematicsExample8: '<i>// Does not affect numbers</i><br>let x = 1;<br>alert( +x ); <i>// 1</i><br><br>let y = -2;<br>alert( +y ); <i>// -2</i><br><br><i>// Convert non-numbers to numbers</i><br>alert( +true ); <i>// 1</i><br>alert( +"" ); <i>// 0</i>',

    // div22
    mathematics10: 'This is actually the same as <b>Number(...)</b>, only shorter.<br><br>The need to convert strings to numbers comes up very often. For example, typically the values of HTML form fields are strings. What if they need to be added, for example?<br><br>Binary plus will add them as strings:',

    // div23 example
    mathematicsExample9: 'let apples = "2";<br>let oranges = "3";<br><br>alert( apples + oranges ); <i>// "23" because binary plus concatenates strings</i>',

    // div24
    mathematics11: 'So use unary plus to convert to number:',

    // div25 example
    mathematicsExample10: 'let apples = "2";<br>let oranges = "3";<br><br><i>// both operands pre-converted to numbers</i><br>alert( +apples + + oranges); <i>// 5</i><br><br><i>// longer version</i><br><i>// alert( Number(apples) + Number(oranges) ); // 5</i>',

    // div26
    mathematics12: 'From the point of view of a mathematician, such an abundance of pluses looks strange. But from a programmer&aposs point of view, there is nothing special here: first, unary pluses are executed, which will reduce strings to numbers, and then binary <b>"+"</b> will add them.<br><br>Why unary pluses were executed before binary addition ? As we shall see in a moment, it is a matter of their priority.',

    // div27
    operatorPrecedence: '<h3>Operator precedence</h3>If there are several operators in the expression, the order of their execution is determined by <b>priority</b>, or, in other words, there is a certain order of operators execution.<br> <br>We know from school that the multiplication in the expression <b>1 + 2 * 2</b> will be performed before the addition. That&aposs what "priority" is. Multiplication is said to have higher precedence than addition.<br><br>The parentheses are more important than the precedence, so if we&aposre not happy with the default order, we can use them to change the precedence. For example, write <b>(1 + 2) * 2</b>.<br><br>JavaScript has many operators. Each operator has a corresponding precedence number. The one with the higher number will execute earlier. If the precedence is the same, then the execution order is from left to right.<br><br>Since "unary plus" has a precedence of <b>15</b>, which is higher than <b>12</b> for "addition" (binary plus), then in the expression <b>"+apples + +oranges"</b>, unary pluses are performed first, and then addition.',

    // div28
    assignment1: 'Let&aposs note that the precedence table also has an assignment operator <b>=</b>. It has one of the lowest precedences: <b>2</b>.<br><br>This is why when a variable is assigned something like <b>x = 2 * 2 + 1</b>, then the arithmetic will be performed first, and only then the assignment <b>=</b> will occur, saving the result in <b>x</b>.',

    // div29 example
    assignmentExample1: 'let x = 2 * 2 + 1;<br><br>alert( x ); <i>//5</i>',

    // div30
    assignment2: '<h3>Assignment = returns a value</h3>The fact that <b>=</b> is an operator and not a "magic" language construct has interesting implications.<br><br> Most of the operators in JavaScript return a value. For some, this is obvious, such as addition <b>+</b> or multiplication <b>*</b>. But the assignment operator is no exception.<br><br>A call to <b>x = value</b> writes <b>value</b> to <b>x</b> and returns it.<br> <br>This allows the assignment to be used as part of a more complex expression:',

    // div31 example
    assignmentExample2: 'let a = 1;<br>let b = 2;<br><br>let c = 3 - (a = b + 1);<br><br>alert( a ); <i>// 3</i><br>alert( c ); <i>// 0</i>',

    // div32
    assignment3: 'In the example above, the result of <b>(a = b + 1)</b> will be the value that is assigned to the variable <b>a</b> (that is, <b>3</b>). It is then used for further calculations.<br><br>Funny use of assignment, isn&apost it? We need to understand how this works, because sometimes you can see it in JavaScript libraries.<br><br>However, writing in this style yourself is not recommended. Such tricks will not make your code clearer or more readable.',

    // div33
    assignment4: '<h3>Chaining Assignment</h3>Let&aposs consider another interesting possibility: assignment chaining.',

    // div34 example
    assignmentExample3: 'let a, b, c;<br><br>a = b = c = 2 + 2;<br><br>alert( a ); <i>// 4</i><br>alert( b ); <i>// 4</i><br>alert( c ); <i>//4</i>',

    // div35
    assignment5: 'This assignment works from right to left. The rightmost expression <b>2 + 2</b> is evaluated first, and then the result is assigned to the variables on the left: <b>c</b>, <b>b</b> and <b>a</b>. At the end, all variables will have the same value.<br><br>Again, to make the code easier to read, it is better to separate such constructs into several lines, the benefit of this style is especially felt when quickly reviewing the code.:',

    // div36 example
    assignmentExample4: 'c = 2 + 2;<br>b = c;<br>a = c;',

    // div37
    assignment6: '<h3>Reduced Assignment Arithmetic</h3>It is often necessary to apply an operator to a variable and store the result in it.<br><br>For example:',

    // div38 example
    assignmentExample5: 'let n = 2;<br>n = n + 5;<br>n = n * 2;',

    // div39
    assignment7: 'This entry can be shortened with the combined operators <b>+=</b> and <b>*=</b>:',

    // div40 example
    assignmentExample6: 'let n = 2;<br>n += 5; <i>// now n = 7 (works like n = n + 5)</i><br>n *= 2; <i>// now n = 14 (works like n = n * 2)</i><br><br>alert( n ); <i>// 14</i>',

    // div41
    assignment8: 'Such shorthand notations exist for all arithmetic and bitwise operators: <b>/=</b>, <b>-=</b> and so on.<br><br>The assignment call has exactly same precedence as normal assignment, i.e. will be executed after most other operations:',

    // div42 example
    assignmentExample7: 'let n = 2;<br><br>n *= 3 + 5;<br><br>alert( n ); <i>// 16 (the right part will be executed first, the expression is identical to n *= 8)</i>',

    // div43
    incrementDecrement1: '<h3>Increment/Decrement</h3>One of the most common numeric operations is increment or decrement by one.<br><br>There are even special operators for this:<ul><li><b>Increment</b> ++ increment variable by 1</li><br><li><b>Decrement</b> -- decrement variable by 1</li></ul><b>Important:</b> increment/decrement can only be applied to a variable. Trying to use it on a value like 5++ will result in an error.',

    // div44 example
    incrementDecrementExample1: 'let counter = 2;<br><br>counter++; <i>// works like counter = counter + 1, just shorter notation</i><br>alert( counter ); <i>// 3</i><br><br>counter--; <i>// works like counter = counter - 1, just shorter notation</i><br>alert( counter ); <i>// 1</i>',

    // div45
    incrementDecrement2: 'The operators <b>++</b> and <b>--</b> can be placed not only after but also before the variable.<ul><li>When the operator comes after the variable, it is a "postfix form": <b>counter++</b>.</li><br><li>"Prefix form" is when the operator comes before a variable: <b>++counter</b>.</li>< /ul>These two instructions do the same thing: increase <b>counter</b> by <b>1</b>.<br><br>Is there a difference between them? Yes, but we can only see it if we use the value returned by <b>++/--</b>.<br><br>Let&aposs be clear about this. As we know, all operators return a value. The increment/decrement operators are no exception. The prefix form returns the new value, while the postfix form returns the old value (before the increment/decrement).<br><br>To see the difference, here&aposs a small example:',

    // div46 example
    incrementDecrementExample2: 'let counter = 1;<br>let a = ++counter; <i>// (*)</i><br><br>alert(a); <i>// 2</i>',

    // div47
    incrementDecrement3: 'In the line <b>(*)</b>, the prefix form <b>++counter</b> increments <b>counter</b> and returns the new value <b>2</b>. So <b>alert</b> will show <b>2</b>.<br><br>Now look at the postfix form:',

    // div48 example
    incrementDecrementExample3: 'let counter = 1;<br>let a = counter++; <i>// (*) change ++counter to counter++</i><br><br>alert(a); <i>// 1</i>',

    // div49
    incrementDecrement4: 'In the line <b>(*)</b>, the postfix form <b>counter++</b> also increments <b>counter</b> but returns the old value (before the increment). So <b>alert</b> will show <b>1</b>.',

    // div50
    next: '<b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamEightPartTwo()">JS topic 8/2</a></b> - second part of topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicEightRus = {
    // div1
    basicOperators: '<h3>Базовые операторы, математика</h3>Многие операторы знакомы нам ещё со школы: сложение <b>+</b>, умножение <b>*</b>, вычитание <b>-</b> и так далее.<br><br>В этой главе мы начнём с простых операторов, а потом сконцентрируемся на специфических для JavaScript аспектах, которые не проходят в школьном курсе арифметики.',

    // div2
    terms1: '<h3>Термины: «унарный», «бинарный», «операнд»</h3>Прежде, чем мы двинемся дальше, давайте разберёмся с терминологией.<ul><li><b>Операнд</b> – то, к чему применяется оператор. Например, в умножении <b>5 * 2</b> есть два операнда: левый операнд равен <b>5</b>, а правый операнд равен <b>2</b>. Иногда их называют «аргументами» вместо «операндов».</li><br><li><b>Унарным</b> называется оператор, который применяется к одному операнду. Например, оператор унарный минус <b>"-"</b> меняет знак числа на противоположный: <b>x = -x;</b></li><br><li><b>Бинарным</b> называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:</li></ul>',

    // div3 example
    termsExample: 'let x = 1, y = 3;<br>alert( y - x ); <i>// 2, бинарный минус вычитает значения</i>',

    // div4
    terms2: 'Формально, в последних примерах мы говорим о двух разных операторах, использующих один символ: оператор отрицания (унарный оператор, который обращает знак) и оператор вычитания (бинарный оператор, который вычитает одно число из другого).',

    // div5
    mathematics1: '<h3>Математика</h3>Поддерживаются следующие математические операторы:<br><ul><li>Сложение <b>+</b></li><li>Вычитание <b>-</b></li><li>Умножение <b>*</b></li><li>Деление <b>/</b></li><li>Взятие остатка от деления <b>%</b></li><li>Возведение в степень <b>**</b></li></ul>Первые четыре оператора очевидны, а про <b>%</b> и <b>**</b> стоит сказать несколько слов.',

    // div6
    mathematics2: '<h3>Взятие остатка %</h3>Оператор взятия остатка <b>%</b>, несмотря на обозначение, никакого отношения к процентам не имеет.<br><br>Результат <b>a % b</b> – это остаток от целочисленного деления <b>a</b> на <b>b</b>.<br><br>Например:',

    // div7 example
    mathematicsExample1: 'alert( 5 % 2 ); <i>// 1, остаток от деления 5 на 2</i><br>alert( 8 % 3 ); <i>// 2, остаток от деления 8 на 3</i><br>alert( 8 % 4 ); <i>// 0, остаток от деления 8 на 4</i>', 

    // div8
    mathematics3: '<h3>Возведение в степень **</h3>Оператор возведения в степень <b>a ** b</b> возводит <b>a</b> в степень <b>b</b>.<br><br>В школьной математике мы записываем это как a<sup>b</sup><br><br>Например:.',

    // div9 example
    mathematicsExample2: 'alert( 2 ** 2 ); <i>// 2² = 4</i><br>alert( 2 ** 3 ); <i>// 2³ = 8</i><br>alert( 2 ** 4 ); <i>// 2⁴ = 16</i>',

    // div10
    mathematics4: 'Математически, оператор работает и для нецелых чисел. Например, квадратный корень является возведением в степень <b>1/2</b>:',

    // div11 example
    mathematicsExample3: 'alert( 4 ** (1/2) ); <i>// 2 (степень 1/2 эквивалентна взятию квадратного корня)</i><br>alert( 8 ** (1/3) ); <i>// 2 (степень 1/3 эквивалентна взятию кубического корня)</i>',

    // div12
    mathematics5: '<h3>Сложение строк при помощи бинарного +</h3>Давайте рассмотрим специальные возможности операторов JavaScript, которые выходят за рамки школьной арифметики.<br><br>Обычно при помощи плюса <b>"+"</b> складывают числа.<br><br>Но если бинарный оператор <b>"+"</b> применить к строкам, то он их объединяет в одну:',

    // div13 example
    mathematicsExample4: 'let s = "моя" + "строка";<br>alert(s); <i>// моястрока</i>',

    // div14
    mathematics6: 'Обратите внимание, если хотя бы один операнд является строкой, то второй будет также преобразован в строку.<br><br>Например:',

    // div15 example
    mathematicsExample5: 'alert( &apos1&apos + 2 ); <i>// "12"</i><br>alert( 2 + &apos1&apos ); <i>// "21"</i>',

    // div16
    mathematics7: 'Как видите, не важно, первый или второй операнд является строкой.<br><br>Вот пример посложнее:',

    // div17 example
    mathematicsExample6: 'alert(2 + 2 + &apos1&apos ); <i>// будет "41", а не "221"</i>',

    // div18
    mathematics8: 'Здесь операторы работают один за другим. Первый <b>+</b> складывает два числа и возвращает <b>4</b>, затем следующий <b>+</b> объединяет результат со строкой, производя действие <b>4 + "1" = "41"</b>.<br><br>Сложение и преобразование строк — это особенность бинарного плюса <b>+</b>. Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.<br><br>Например, вычитание и деление:',

    // div19 example
    mathematicsExample7: 'alert( 6 - &apos2&apos ); <i>// 4, &apos2&apos приводится к числу</i><br>alert( &apos6&apos / &apos2&apos ); <i>// 3, оба операнда приводятся к числам</i>',

    // div20
    mathematics9: '<h3>Приведение к числу, унарный +</h3>Плюс <b>+</b> существует в двух формах: бинарной, которую мы использовали выше, и унарной.<br><br>Унарный, то есть применённый к одному значению, плюс <b>+</b> ничего не делает с числами. Но если операнд не число, унарный плюс преобразует его в число.<br><br>Например:',

    // div21 example
    mathematicsExample8: '<i>// Не влияет на числа</i><br>let x = 1;<br>alert( +x ); <i>// 1</i><br><br>let y = -2;<br>alert( +y ); <i>// -2</i><br><br><i>// Преобразует не числа в числа</i><br>alert( +true ); <i>// 1</i><br>alert( +"" );   <i>// 0</i>',

    // div22
    mathematics10: 'На самом деле это то же самое, что и <b>Number(...)</b>, только короче.<br><br>Необходимость преобразовывать строки в числа возникает очень часто. Например, обычно значения полей HTML-формы — это строки. А что, если их нужно, к примеру, сложить?<br><br>Бинарный плюс сложит их как строки:',

    // div23 example
    mathematicsExample9: 'let apples = "2";<br>let oranges = "3";<br><br>alert( apples + oranges ); <i>// "23", так как бинарный плюс объединяет строки</i>',

    // div24
    mathematics11: 'Поэтому используем унарный плюс, чтобы преобразовать к числу:',

    // div25 example
    mathematicsExample10: 'let apples = "2";<br>let oranges = "3";<br><br><i>// оба операнда предварительно преобразованы в числа</i><br>alert( +apples + +oranges ); <i>// 5</i><br><br><i>// более длинный вариант</i><br><i>// alert( Number(apples) + Number(oranges) ); // 5</i>',

    // div26
    mathematics12: 'С точки зрения математика, такое изобилие плюсов выглядит странным. Но с точки зрения программиста тут нет ничего особенного: сначала выполнятся унарные плюсы, которые приведут строки к числам, а затем бинарный <b>"+"</b> их сложит.<br><br>Почему унарные плюсы выполнились до бинарного сложения? Как мы сейчас увидим, дело в их приоритете.',

    // div27
    operatorPrecedence: '<h3>Приоритет операторов</h3>В том случае, если в выражении есть несколько операторов – порядок их выполнения определяется <b>приоритетом</b>, или, другими словами, существует определённый порядок выполнения операторов.<br><br>Из школы мы знаем, что умножение в выражении <b>1 + 2 * 2</b> выполнится раньше сложения. Это как раз и есть «приоритет». Говорят, что умножение имеет более высокий приоритет, чем сложение.<br><br>Скобки важнее, чем приоритет, так что, если мы не удовлетворены порядком по умолчанию, мы можем использовать их, чтобы изменить приоритет. Например, написать <b>(1 + 2) * 2</b>.<br><br>В JavaScript много операторов. Каждый оператор имеет соответствующий номер приоритета. Тот, у кого это число больше, – выполнится раньше. Если приоритет одинаковый, то порядок выполнения – слева направо.<br><br>Так как «унарный плюс» имеет приоритет <b>15</b>, который выше, чем <b>12</b> у «сложения» (бинарный плюс), то в выражении <b>"+apples + +oranges"</b> сначала выполнятся унарные плюсы, а затем сложение.',

    // div28
    assignment1: 'Давайте отметим, что в таблице приоритетов также есть оператор присваивания <b>=</b>. У него один из самых низких приоритетов: <b>2</b>.<br><br>Именно поэтому, когда переменной что-либо присваивают, например, <b>x = 2 * 2 + 1</b>, то сначала выполнится арифметика, а уже затем произойдёт присваивание <b>=</b> с сохранением результата в <b>x</b>.',

    // div29 example
    assignmentExample1: 'let x = 2 * 2 + 1;<br><br>alert( x ); <i>// 5</i>',

    // div30
    assignment2: '<h3>Присваивание = возвращает значение</h3>Тот факт, что <b>=</b> является оператором, а не «магической» конструкцией языка, имеет интересные последствия.<br><br> Большинство операторов в JavaScript возвращают значение. Для некоторых это очевидно, например сложение <b>+</b> или умножение <b>*</b>. Но и оператор присваивания не является исключением.<br><br>Вызов <b>x = value</b> записывает <b>value</b> в <b>x</b> и возвращает его.<br><br>Благодаря этому присваивание можно использовать как часть более сложного выражения:',

    // div31 example
    assignmentExample2: 'let a = 1;<br>let b = 2;<br><br>let c = 3 - (a = b + 1);<br><br>alert( a ); <i>// 3</i><br>alert( c ); <i>// 0</i>',

    // div32
    assignment3: 'В примере выше результатом <b>(a = b + 1)</b> будет значение, которое присваивается переменной <b>a</b> (то есть <b>3</b>). Потом оно используется для дальнейших вычислений.<br><br>Забавное применение присваивания, не так ли? Нам нужно понимать, как это работает, потому что иногда это можно увидеть в JavaScript-библиотеках.<br><br>Однако писать самим в таком стиле не рекомендуется. Такие трюки не сделают ваш код более понятным или читабельным.',

    // div33
    assignment4: '<h3>Присваивание по цепочке</h3>Рассмотрим ещё одну интересную возможность: цепочку присваиваний.',

    // div34 example
    assignmentExample3: 'let a, b, c;<br><br>a = b = c = 2 + 2;<br><br>alert( a ); <i>// 4</i><br>alert( b ); <i>// 4</i><br>alert( c ); <i>// 4</i>',

    // div35
    assignment5: 'Такое присваивание работает справа налево. Сначала вычисляется самое правое выражение <b>2 + 2</b>, и затем результат присваивается переменным слева: <b>c</b>, <b>b</b> и <b>a</b>. В конце у всех переменных будет одно значение.<br><br>Опять-таки, чтобы код читался легче, лучше разделять подобные конструкции на несколько строчек, польза от такого стиля особенно ощущается при быстром просмотре кода.:',

    // div36 example
    assignmentExample4: 'c = 2 + 2;<br>b = c;<br>a = c;',

    // div37
    assignment6: '<h3>Сокращённая арифметика с присваиванием</h3>Часто нужно применить оператор к переменной и сохранить результат в ней же.<br><br>Например:',

    // div38 example
    assignmentExample5: 'let n = 2;<br>n = n + 5;<br>n = n * 2;',

    // div39
    assignment7: 'Эту запись можно укоротить при помощи совмещённых операторов <b>+=</b> и <b>*=</b>:',

    // div40 example
    assignmentExample6: 'let n = 2;<br>n += 5; <i>// теперь n = 7 (работает как n = n + 5)</i><br>n *= 2; <i>// теперь n = 14 (работает как n = n * 2)</i><br><br>alert( n ); <i>// 14</i>',

    // div41
    assignment8: 'Подобные краткие формы записи существуют для всех арифметических и побитовых операторов: <b>/=</b>, <b>-=</b> и так далее.<br><br>Вызов с присваиванием имеет в точности такой же приоритет, как обычное присваивание, то есть выполнится после большинства других операций:',

    // div42 example
    assignmentExample7: 'let n = 2;<br><br>n *= 3 + 5;<br><br>alert( n ); <i>// 16  (сначала выполнится правая часть, выражение идентично n *= 8)</i>',

    // div43
    incrementDecrement1: '<h3>Инкремент/декремент</h3>Одной из наиболее частых числовых операций является увеличение или уменьшение на единицу.<br><br>Для этого существуют даже специальные операторы:<ul><li><b>Инкремент</b> ++ увеличивает переменную на 1</li><br><li><b>Декремент</b> -- уменьшает переменную на 1</li></ul><b>Важно:</b> инкремент/декремент можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке.',

    // div44 example
    incrementDecrementExample1: 'let counter = 2;<br><br>counter++;        <i>// работает как counter = counter + 1, просто запись короче</i><br>alert( counter ); <i>// 3</i><br><br>counter--;        <i>// работает как counter = counter - 1, просто запись короче</i><br>alert( counter ); <i>// 1</i>',

    // div45
    incrementDecrement2: 'Операторы <b>++</b> и <b>--</b> могут быть расположены не только после, но и до переменной.<ul><li>Когда оператор идёт после переменной — это «постфиксная форма»: <b>counter++</b>.</li><br><li>«Префиксная форма» — это когда оператор идёт перед переменной: <b>++counter</b>.</li></ul>Обе эти инструкции делают одно и то же: увеличивают <b>counter</b> на <b>1</b>.<br><br>Есть ли разница между ними? Да, но увидеть её мы сможем, только если будем использовать значение, которое возвращают <b>++/--</b>.<br><br>Давайте проясним этот момент. Как мы знаем, все операторы возвращают значение. Операторы инкремента/декремента не исключение. Префиксная форма возвращает новое значение, в то время как постфиксная форма возвращает старое (до увеличения/уменьшения числа).<br><br>Чтобы увидеть разницу, вот небольшой пример:',

    // div46 example
    incrementDecrementExample2: 'let counter = 1;<br>let a = ++counter; <i>// (*)</i><br><br>alert(a); <i>// 2</i>',

    // div47
    incrementDecrement3: 'В строке <b>(*)</b> префиксная форма <b>++counter</b> увеличивает <b>counter</b> и возвращает новое значение <b>2</b>. Так что <b>alert</b> покажет <b>2</b>.<br><br>Теперь посмотрим на постфиксную форму:',

    // div48 example
    incrementDecrementExample3: 'let counter = 1;<br>let a = counter++; <i>// (*) меняем ++counter на counter++</i><br><br>alert(a); <i>// 1</i>',

    // div49
    incrementDecrement4: 'В строке <b>(*)</b> постфиксная форма <b>counter++</b> также увеличивает <b>counter</b>, но возвращает старое значение (которое было до увеличения). Так что <b>alert</b> покажет <b>1</b>.',

    // div50
    next: '<b><a href="#" onclick="quickLink(); JSTheamSix()">JS topic 6</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamEightPartTwo()">JS topic 8/2</a></b> - вторая часть темы.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Вторая часть восьмой тема.
let JSTopicEightEngPartTwo = {
    // div1
    incrementDecrement1: '<h3>Increment/Decrement can be used in any expression</h3>The <b>++/--</b> operators can also be used inside expressions. Their precedence is higher than most other arithmetic operations.<br><br>For example:',
    
    // div2 example
    incrementDecrementExample1: 'let counter = 1;<br>alert( 2 * ++counter ); <i>//4</i>',

    // div3
    incrementDecrement2: 'Compare with:',

    // div4 example
    incrementDecrementExample2: 'let counter = 1;<br>alert( 2 * counter++ ); <i>// 2 because counter++ returns the "old" value</i>',

    // div5
    incrementDecrement3: 'While this is technically ok, this entry usually makes the code less readable. One line does a lot of things - not good.<br><br>When reading the code quickly, you can easily miss such a <b>counter++</b>, and it will not be obvious that the variable is incremented.<br><br>It is better to use the style “ one line - one action":',

    // div6 example
    incrementDecrementExample3: 'let counter = 1;<br>alert( 2 * counter );<br>counter++;',

    // div7
    bitwiseOperators: '<h3>Bitwise Operators</h3>Bitwise operators operate on 32-bit integers (if necessary, cast to them), at the level of their internal binary representation.<br><br>These operators are not something specific for JavaScript, they are supported in most programming languages.<br><br>The following bitwise operators are supported:<ul><li>AND(and) ( <b>&</b> )</li><li>OR( or) ( <b>|</b> )</li><li>XOR(bitwise exclusive or) ( <b>^</b> )</li><li>NOT(not) ( <b> ~</b> )</li><li>LEFT SHIFT(left shift) ( <b><<</b> )</li><li>RIGHT SHIFT(right shift) ( <b>>></b> )</li><li>ZERO-FILL RIGHT SHIFT ( <b>>>></b> )</li></ul>These are rarely used when the need arises operate on numbers at a very low (bitwise) level. We will not need them in the near future, as web developers rarely resort to them, although in some areas (for example, in cryptography) they are useful. You can read the section on them on MDN when the need arises.',

    // div8
    commaOperator1: '<h3>Comma operator</h3>The comma operator (<b>,</b>) is rarely used and is one of the most unusual. Sometimes it&aposs used to write shorter code, so we need to know it to understand what&aposs going on.<br><br>The "comma" operator gives us the ability to evaluate multiple expressions by separating them with a comma <b>,</b >. Each expression is executed, but only the result of the last one is returned.<br><br>For example:',

    // div9 example
    commaOperatorExample1: 'let a = (1 + 2, 3 + 4);<br><br>alert( a ); <i>// 7 (calculation result 3 + 4)</i>',

    // div10
    commaOperator2: 'The first expression <b>1 + 2</b> is executed and the result is discarded. Then comes <b>3 + 4</b>, the expression is executed and the result is returned.',

    // div11
    commaOperator3: '<h3>!Comma has very low precedence</h3>Please note that the <b>,</b> operator has very low precedence, below <b>=</b>, so parentheses are important in example above.<br><br>Without them, <b>a = 1 + 2, 3 + 4</b> will first execute <b>+</b>, summing the numbers in <b>a = 3, 7</b>, then the assignment operator <b>=</b> will assign <b>a = 3</b> and whatever comes next will be ignored. Everything is the same as in <b>(a = 1 + 2), 3 + 4</b>.',

    // div12
    commaOperator4: 'Why do we need an operator that discards everything except the last expression?<br><br>Sometimes it is used as part of more complex constructs to do several things on the same line.<br><br>For example:',

    // div13 example
    commaOperatorExample2: '<i>// three operations in one line</i><br>for (a = 1, b = 3, c = a * b; a < 10; a++) {<br>&nbsp... <br>}',

    // div14
    commaOperator5: 'Such tricks are used in many JavaScript frameworks. That&aposs why we mention them. But they usually do not improve the readability of the code, so you should think carefully before using them.',

    // div15
    next: '<b><a href="#" onclick="quickLink(); JSTheamSeven()">JS topic 7</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamNine()">JS topic 9</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen. '
}

let JSTopicEightRusPartTwo = {
    // div1
    incrementDecrement1: '<h3>Инкремент/декремент можно использовать в любых выражениях</h3>Операторы <b>++/--</b> могут также использоваться внутри выражений. Их приоритет выше, чем у большинства других арифметических операций.<br><br>Например:',
    
    // div2 example
    incrementDecrementExample1: 'let counter = 1;<br>alert( 2 * ++counter ); <i>// 4</i>',

    // div3
    incrementDecrement2: 'Сравните с:',

    // div4 example
    incrementDecrementExample2: 'let counter = 1;<br>alert( 2 * counter++ ); <i>// 2, потому что counter++ возвращает "старое" значение</i>',

    // div5
    incrementDecrement3: 'Хотя технически здесь всё в порядке, такая запись обычно делает код менее читабельным. Одна строка выполняет множество действий – нехорошо.<br><br>При беглом чтении кода можно с лёгкостью пропустить такой <b>counter++</b>, и будет неочевидно, что переменная увеличивается.<br><br>Лучше использовать стиль «одна строка – одно действие»:',

    // div6 example
    incrementDecrementExample3: 'let counter = 1;<br>alert( 2 * counter );<br>counter++;',

    // div7
    bitwiseOperators: '<h3>Побитовые операторы</h3>Побитовые операторы работают с 32-разрядными целыми числами (при необходимости приводят к ним), на уровне их внутреннего двоичного представления.<br><br>Эти операторы не являются чем-то специфичным для JavaScript, они поддерживаются в большинстве языков программирования.<br><br>Поддерживаются следующие побитовые операторы:<ul><li>AND(и) ( <b>&</b> )</li><li>OR(или) ( <b>|</b> )</li><li>XOR(побитовое исключающее или) ( <b>^</b> )</li><li>NOT(не) ( <b>~</b> )</li><li>LEFT SHIFT(левый сдвиг) ( <b><<</b> )</li><li>RIGHT SHIFT(правый сдвиг) ( <b>>></b> )</li><li>ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( <b>>>></b> )</li></ul>Они используются редко, когда возникает необходимость оперировать с числами на очень низком (побитовом) уровне. В ближайшем времени они нам не понадобятся, так как веб-разработчики редко к ним прибегают, хотя в некоторых сферах (например, в криптографии) они полезны. Можете прочитать раздел о них на MDN, когда возникнет реальная необходимость.',

    // div8
    commaOperator1: '<h3>Оператор "запятая"</h3>Оператор «запятая» (<b>,</b>) редко применяется и является одним из самых необычных. Иногда он используется для написания более короткого кода, поэтому нам нужно знать его, чтобы понимать, что при этом происходит.<br><br>Оператор «запятая» предоставляет нам возможность вычислять несколько выражений, разделяя их запятой <b>,</b>. Каждое выражение выполняется, но возвращается результат только последнего.<br><br>Например:',

    // div9 example
    commaOperatorExample1: 'let a = (1 + 2, 3 + 4);<br><br>alert( a ); <i>// 7 (результат вычисления 3 + 4)</i>',

    // div10
    commaOperator2: 'Первое выражение <b>1 + 2</b> выполняется, а результат отбрасывается. Затем идёт <b>3 + 4</b>, выражение выполняется и возвращается результат.',

    // div11
    commaOperator3: '<h3>!Запятая имеет очень низкий приоритет</h3>Пожалуйста, обратите внимание, что оператор <b>,</b> имеет очень низкий приоритет, ниже <b>=</b>, поэтому скобки важны в приведённом выше примере.<br><br>Без них в <b>a = 1 + 2, 3 + 4</b> сначала выполнится <b>+</b>, суммируя числа в <b>a = 3, 7</b>, затем оператор присваивания <b>=</b> присвоит <b>a = 3</b>, а то, что идёт дальше, будет игнорировано. Всё так же, как в <b>(a = 1 + 2), 3 + 4</b>.',

    // div12
    commaOperator4: 'Зачем нам оператор, который отбрасывает всё, кроме последнего выражения?<br><br>Иногда его используют в составе более сложных конструкций, чтобы сделать несколько действий в одной строке.<br><br>Например:',

    // div13 example
    commaOperatorExample2: '<i>// три операции в одной строке</i><br>for (a = 1, b = 3, c = a * b; a < 10; a++) {<br>&nbsp...<br>}',

    // div14
    commaOperator5: 'Такие трюки используются во многих JavaScript-фреймворках. Вот почему мы упоминаем их. Но обычно они не улучшают читабельность кода, поэтому стоит хорошо подумать, прежде чем их использовать.',

    // div15
    next: '<b><a href="#" onclick="quickLink(); JSTheamSeven()">JS topic 7</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamNine()">JS topic 9</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
} 

// Девятая тема.
let JSTopicNineEng = {
    // div1
    comparisonOperators1: '<h3>Comparison operators</h3>Many comparison operators are familiar to us from mathematics.<br><br>In JavaScript they are written like this:<ul><li>Greater than/less than: <b>a > b, a < b</b>.</li><li>Greater than/less than or equal to: <b>a >= b, a <= b</b>.</li><li>Equal to: <b>a ==b</b>. Note that the double equal sign <b>==</b> is used for comparison. A single equal sign <b>a = b</b> would mean an assignment.</li><li>Not equal. In mathematics, it is represented by the symbol <b>≠</b>, but in JavaScript it is written as <b>a != b</b>.</li></ul>In this section, we will learn more about what comparisons are how the language works with them and what surprises we should be prepared for.',

    //div2
    comparisonOperators2: '<h3>The result of the comparison is of boolean type</h3>All comparison operators return a boolean value: <ul><li><b>true</b> - means "yes", "true", "true" .</li><li><b>false</b> - means "no", "false", "false".</li></ul>',

    // div3 example
    comparisonOperatorsExample1: 'alert( 2 > 1 ); <i>// true (true)</i><br>alert( 2 == 1 ); <i>// false (false)</i><br>alert( 2 != 1 ); <i>// true</i>',

    // div4
    comparisonOperators3: 'The result of the comparison can be assigned to a variable like any value:',

    // div5 example
    comparisonOperatorsExample2: 'let result = 5 > 4; <i>// the result of the comparison is assigned to the variable result</i><br>alert( result ); <i>//true</i>',

    // div6
    stringComparison1: '<h3>String comparison</h3>To determine if one string is greater than another, JavaScript uses "alphabetic" or "lexicographical" order.<br><br>In other words, strings are compared character by character.',

    // div7 example
    stringComparisonExample1: 'alert( \'I\' > \'A\' ); <i>// true</i><br>alert( \'Cats\' > \'Code\' ); <i>// true</i><br>alert( \'Sleepy\' > \'Sleep\' ); <i>//true</i>',

    // div8
    stringComparison2: 'The algorithm for comparing two strings is quite simple:<ol><li>First, the first characters of the strings are compared.</li><li>If the first character of the first string is greater (less) than the first character of the second, then the first string is greater (less than ) second. The comparison is completed.</li><li>If the first characters are equal, then the second characters of the strings are compared in the same way.</li><li>The comparison continues until one of the strings ends.</li><li>If both strings end at the same time, then they are equal. Otherwise, the longer string is considered larger.</li></ol>In the examples above, the comparison <b>\'I\' > \'A\'</b> will end in the first step, while the strings <b>\'Cats\'</b> and <b>\'Code\'</b> will be compared character by character:<ol><li><b>K</b> equals <b>K</b>.</li><li><b>o</b> is equal to <b>o</b>.</li><li><b>t</b> is greater than <b>d</b> . This is where the comparison ends. The first line is larger.</li></ol>',

    // div9
    comparisonOfDifferentTypes1: 'JavaScript compares values of different types to a number.',

    // div10 example
    comparisonOfDifferentTypesExample1: 'alert( \'2\' > 1 ); <i>// true, the string \'2\' becomes the number 2</i><br>alert( \'01\' == 1 ); <i>// true, the string \'01\' becomes the number 1</i>',

    // div11
    comparisonOfDifferentTypes2: 'Boolean <b>true</b> becomes <b>1</b> and <b>false</b> becomes <b>0</b>.',

    // div12 example
    comparisonOfDifferentTypesExample2: 'alert( true == 1 ); <i>// true</i><br>alert( false == 0 ); <i>//true</i>',

    // div13
    strictComparison1: '<h3>Strict comparison</h3>Using the normal comparison <b>==</b> can cause problems. For example, it does not distinguish <b>0</b> from <b>false</b>:',

    // div14 example
    strictComparisonExample1: 'alert( 0 == false ); <i>//true</i>',

    // div15
    strictComparison2: 'Same problem with empty string:',

    // div16 example
    strictComparisonExample2: 'alert( \'\' == false ); <i>//true</i>',

    // div17
    strictComparison3: 'This happens because operands of different types are converted by the <b>==</b> operator to a number. As a result, both the empty string and <b>false</b> become zero.<br><br>How then to distinguish <b>0</b> from <b>false</b>?<br> <br><b>The strict equality operator === tests for equality without casting.</b><br><br>In other words, if <b>a</b> and <b>b</b> have different types, then the test <b>a === b</b> immediately returns <b>false</b> without trying to convert them.',

    // div18 example
    strictComparisonExample3: 'alert( 0 === false ); <i>// false because different types are being compared</i>',

    // div19
    strictComparison4: 'There is also a strict comparison operator <b>!==</b>, similar to <b>!=</b>.<br><br>The strict equality operator takes longer to write, but it makes the code more obvious and leaves less room for error.',

    // div20
    comparisonWithNullAndUndefined1: '<h3>Comparing with null and undefined</h3>The behavior of <b>null</b> and <b>undefined</b> when compared with other values is special:<br><br><b> With strict equality ===</b><br><br>These values are different because their types are different.',

    // div21 example
    comparisonWithNullAndUndefinedExample1: 'alert( null === undefined ); <i>//false</i>',

    // div22
    comparisonWithNullAndUndefined2: '<b>When not strictly equal ==</b><br><br>These values are equal to each other and not equal to any other values. This is a special language rule.',

    // div23 example
    comparisonWithNullAndUndefinedExample2: 'alert( null == undefined ); <i>//true</i>',

    // div24
    comparisonWithNullAndUndefined3: '<b>When using mathematical operators and other comparison operators < > <= >=</b><br><br><b>null/undefined</b> values are converted to numbers: <b>null</b> becomes <b>0</b> and <b>undefined</b> becomes <b>NaN</b>.<br><br>Let\'s see what funny things happen when we apply these rules . And, more importantly, how to avoid mistakes when using them.',

    // div25
    weirdComparisonResult1: '<h3>Weird result comparing null and 0</h3>Compare <b>null</b> with null:',

    // div26 example
    weirdComparisonResultExample: 'alert( null > 0 ); <i>// (1) false</i><br>alert( null == 0 ); <i>// (2) false</i><br>alert( null >= 0 ); <i>// (3) true</i>',

    // div27
    weirdComparisonResult2: 'Mathematically, this is weird. The result of the last comparison says "<b>null</b> is greater than or equal to zero", then the result of one of the comparisons above should be <b>true</b>, but they are both false.<br><br >The reason is that non-strict equality and comparisons <b>> < >= <=</b> work differently. Comparisons convert <b>null</b> to a number, treating it as <b>0</b>. Therefore, expression (3) <b>null >= 0</b> is true, and <b>null > 0</b> is false.<br><br>On the other hand, for non-strict equality <b>==</b> <b>undefined</b> and <b>null</b> values have a special rule: these values are not cast to anything, they are equal to each other and not equal to anything else. Therefore (2) <b>null == 0</b> is false.',

    // div28
    incomparableUndefinedValue1: '<h3>Incomparable value undefined</h3>Value <b>undefined</b> is incomparable with other values:',

    // div29 example
    incomparableUndefinedValueExample: 'alert( undefined > 0 ); <i>// false (1)</i><br>alert( undefined < 0 ); <i>// false (2)</i><br>alert( undefined == 0 ); <i>// false (3)</i><br>',

    // div30
    incomparableUndefinedValue2: 'Why is <b>undefined</b> compared to null always false?<br><br>There are the following reasons for this:<ul><li>Comparisons <b>(1)</b> and < b>(2)</b> returns <b>false</b> because <b>undefined</b> is converted to <b>NaN</b> and <b>NaN</b> is is a special numeric value that returns <b>false</b> for any comparison.</li><li>The non-strict equality <b>(3)</b> returns <b>false</b> because <b>undefined</b> is only equal to <b>null</b>, <b>undefined</b> and nothing else.</li></ul>',

    // div31
    howToAvoidProblems: '<h3>How to Avoid Problems</h3>Why did we look at all these examples? Should we keep all these features in mind all the time? Not necessary. Over time, they will all become familiar to you, but you can avoid problems if you follow these safe rules: <ul><li>Be very careful about any comparison with <b>undefined/null</b>, except in cases of strict equality <b>= ==</b>.</li><li>Do not use comparisons <b>>= > < <=</b> with variables that can take <b>null/undefined</b> values, unless you are absolutely sure of what you are doing. If the variable can take these values, then add separate checks for them.</li></ul>',

    // div32
    next: '<b><a href="#" onclick="quickLink(); JSTheamEight()">JS topic 8</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamTen()">JS topic 10</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicNineRus = {
    // div1
    comparisonOperators1: '<h3>Операторы сравнения</h3>Многие операторы сравнения известны нам из математики.<br><br>В JavaScript они записываются так:<ul><li>Больше/меньше: <b>a > b, a < b</b>.</li><li>Больше/меньше или равно: <b>a >= b, a <= b</b>.</li><li>Равно: <b>a == b</b>. Обратите внимание, для сравнения используется двойной знак равенства <b>==</b>. Один знак равенства <b>a = b</b> означал бы присваивание.</li><li>Не равно. В математике обозначается символом <b>≠</b>, но в JavaScript записывается как <b>a != b</b>.</li></ul>В этом разделе мы больше узнаем про то, какие бывают сравнения, как язык с ними работает и к каким неожиданностям мы должны быть готовы.',

    // div2
    comparisonOperators2: '<h3>Результат сравнения имеет логический тип</h3>Все операторы сравнения возвращают значение логического типа:<ul><li><b>true</b> – означает «да», «верно», «истина».</li><li><b>false</b> – означает «нет», «неверно», «ложь».</li></ul>',

    // div3 example
    comparisonOperatorsExample1: 'alert( 2 > 1 );  <i>// true (верно)</i><br>alert( 2 == 1 ); <i>// false (неверно)</i><br>alert( 2 != 1 ); <i>// true (верно)</i>',

    // div4
    comparisonOperators3: 'Результат сравнения можно присвоить переменной, как и любое значение:',

    // div5 example
    comparisonOperatorsExample2: 'let result = 5 > 4; <i>// результат сравнения присваивается переменной result</i><br>alert( result ); <i>// true</i>',

    // div6
    stringComparison1: '<h3>Сравнение строк</h3>Чтобы определить, что одна строка больше другой, JavaScript использует «алфавитный» или «лексикографический» порядок.<br><br>Другими словами, строки сравниваются посимвольно.',

    // div7 example
    stringComparisonExample1: 'alert( \'Я\' > \'А\' ); <i>// true</i><br>alert( \'Коты\' > \'Кода\' ); <i>// true</i><br>alert( \'Сонный\' > \'Сон\' ); <i>// true</i>',

    // div8
    stringComparison2: 'Алгоритм сравнения двух строк довольно прост:<ol><li>Сначала сравниваются первые символы строк.</li><li>Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.</li><li>Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.</li><li>Сравнение продолжается, пока не закончится одна из строк.</li><li>Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.</li></ol>В примерах выше сравнение <b>\'Я\' > \'А\'</b> завершится на первом шаге, тогда как строки <b>\'Коты\'</b> и <b>\'Кода\'</b> будут сравниваться посимвольно:<ol><li><b>К</b> равна <b>К</b>.</li><li><b>о</b> равна <b>о</b>.</li><li><b>т</b> больше, чем <b>д</b>. На этом сравнение заканчивается. Первая строка больше.</li></ol>',

    // div9
    comparisonOfDifferentTypes1: 'При сравнении значений разных типов JavaScript приводит каждое из них к числу.',

    // div10 example
    comparisonOfDifferentTypesExample1: 'alert( \'2\' > 1 ); <i>// true, строка \'2\' становится числом 2</i><br>alert( \'01\' == 1 ); <i>// true, строка \'01\' становится числом 1</i>',

    // div11
    comparisonOfDifferentTypes2: 'Логическое значение <b>true</b> становится <b>1</b>, а <b>false</b> – <b>0</b>.',

    // div12 example
    comparisonOfDifferentTypesExample2: 'alert( true == 1 ); <i>// true</i><br>alert( false == 0 ); <i>// true</i>',

    // div13
    strictComparison1: '<h3>Строгое сравнение</h3>Использование обычного сравнения <b>==</b> может вызывать проблемы. Например, оно не отличает <b>0</b> от <b>false</b>:',

    // div14 example
    strictComparisonExample1: 'alert( 0 == false ); <i>// true</i>',

    // div15
    strictComparison2: 'Та же проблема с пустой строкой:',

    // div16 example
    strictComparisonExample2: 'alert( \'\' == false ); <i>// true</i>',

    // div17
    strictComparison3: 'Это происходит из-за того, что операнды разных типов преобразуются оператором <b>==</b> к числу. В итоге, и пустая строка, и <b>false</b> становятся нулём.<br><br>Как же тогда отличать <b>0</b> от <b>false</b>?<br><br><b>Оператор строгого равенства === проверяет равенство без приведения типов.</b><br><br>Другими словами, если <b>a</b> и <b>b</b> имеют разные типы, то проверка <b>a === b</b> немедленно возвращает <b>false</b> без попытки их преобразования.',

    // div18 example
    strictComparisonExample3: 'alert( 0 === false ); <i>// false, так как сравниваются разные типы</i>',

    // div19
    strictComparison4: 'Ещё есть оператор строгого неравенства <b>!==</b>, аналогичный <b>!=</b>.<br><br>Оператор строгого равенства дольше писать, но он делает код более очевидным и оставляет меньше места для ошибок.',

    // div20
    comparisonWithNullAndUndefined1: '<h3>Сравнение с null и undefined</h3>Поведение <b>null</b> и <b>undefined</b> при сравнении с другими значениями — особое:<br><br><b>При строгом равенстве ===</b><br><br>Эти значения различны, так как различны их типы.',

    // div21 example
    comparisonWithNullAndUndefinedExample1: 'alert( null === undefined ); <i>// false</i>',

    // div22
    comparisonWithNullAndUndefined2: '<b>При нестрогом равенстве ==</b><br><br>Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.',

    // div23 example
    comparisonWithNullAndUndefinedExample2: 'alert( null == undefined ); <i>// true</i>',

    // div24
    comparisonWithNullAndUndefined3: '<b>При использовании математических операторов и других операторов сравнения < > <= >=</b><br><br>Значения <b>null/undefined</b> преобразуются к числам: <b>null</b> становится <b>0</b>, а <b>undefined</b> – <b>NaN</b>.<br><br>Посмотрим, какие забавные вещи случаются, когда мы применяем эти правила. И, что более важно, как избежать ошибок при их использовании.',

    // div25
    weirdComparisonResult1: '<h3>Странный результат сравнения null и 0</h3>Сравним <b>null</b> с нулём:',

    // div26 example
    weirdComparisonResultExample: 'alert( null > 0 );  <i>// (1) false</i><br>alert( null == 0 ); <i>// (2) false</i><br>alert( null >= 0 ); <i>// (3) true</i>',

    // div27
    weirdComparisonResult2: 'С точки зрения математики это странно. Результат последнего сравнения говорит о том, что "<b>null</b> больше или равно нулю", тогда результат одного из сравнений выше должен быть <b>true</b>, но они оба ложны.<br><br>Причина в том, что нестрогое равенство и сравнения <b>> < >= <=</b> работают по-разному. Сравнения преобразуют <b>null</b> в число, рассматривая его как <b>0</b>. Поэтому выражение (3) <b>null >= 0</b> истинно, а <b>null > 0</b> ложно.<br><br>С другой стороны, для нестрогого равенства <b>==</b> значений <b>undefined</b> и <b>null</b> действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) <b>null == 0</b> ложно.',

    // div28
    incomparableUndefinedValue1: '<h3>Несравненное значение undefined</h3>Значение <b>undefined</b> несравнимо с другими значениями:',

    // div29 example
    incomparableUndefinedValueExample: 'alert( undefined > 0 ); <i>// false (1)</i><br>alert( undefined < 0 ); <i>// false (2)</i><br>alert( undefined == 0 ); <i>// false (3)</i><br>',

    // div30
    incomparableUndefinedValue2: 'Почему же сравнение <b>undefined</b> с нулём всегда ложно?<br><br>На это есть следующие причины:<ul><li>Сравнения <b>(1)</b> и <b>(2)</b> возвращают <b>false</b>, потому что <b>undefined</b> преобразуется в <b>NaN</b>, а <b>NaN</b> – это специальное числовое значение, которое возвращает <b>false</b> при любых сравнениях.</li><li>Нестрогое равенство <b>(3)</b> возвращает <b>false</b>, потому что <b>undefined</b> равно только <b>null</b>, <b>undefined</b> и ничему больше.</li></ul>',

    // div31
    howToAvoidProblems: '<h3>Как избежать проблем</h3>Зачем мы рассмотрели все эти примеры? Должны ли мы постоянно помнить обо всех этих особенностях? Не обязательно. Со временем все они станут вам знакомы, но можно избежать проблем, если следовать надёжным правилам:<ul><li>Относитесь очень осторожно к любому сравнению с <b>undefined/null</b>, кроме случаев строгого равенства <b>===</b>.</li><li>Не используйте сравнения <b>>= > < <=</b> с переменными, которые могут принимать значения <b>null/undefined</b>, разве что вы полностью уверены в том, что делаете. Если переменная может принимать эти значения, то добавьте для них отдельные проверки.</li></ul>',

    // div32
    next: '<b><a href="#" onclick="quickLink(); JSTheamEight()">JS topic 8</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamTen()">JS topic 10</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Десятая тема.
let JSTopicTenEng = {
    // div1
    conditionalBranching: '<h3>Conditional branching: if, \'?\'</h3>Sometimes we need to perform different actions depending on the conditions.<br><br>We can use the <b>if</b statement for this > and the conditional operator <b>?</b>, also known as the "question mark" operator.',

    //div2
    if1: '<h3>The "if" statement</h3>The <b>if(...)</b> statement evaluates the condition in brackets and, if the result is <b>true</b>, then executes the code block. ',

    // div3 example
    ifExample1: 'let year = prompt(\'In what year was the ECMAScript-2015 specification published?\', \'\');<br><br>if (year == 2015) alert( \'You are right!\');',

    // div4
    if2: 'In the example above, the condition is a simple equality test (<b>year == 2015</b>), but it can be much more complex.<br><br>If we want to execute more than one statement , then you need to enclose the block of code in curly braces:',

    // div5 example
    ifExample2: 'if (year == 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( "That\'s right!" );<br> &nbsp&nbsp&nbsp&nbsp alert( "You\'re so smart!" );<br>}',

    // div6
    booleanConversion1: '<h3>Conversion to boolean</h3>The <b>if (…)</b> statement evaluates the expression in parentheses and converts the result to a boolean type.<br><br>Let\'s recall the type conversion rules from the chapter Type conversion:<ul><li>Number <b>0</b>, empty string <b>""</b>, <b>null</b>, <b>undefined</b> and < b>NaN</b> become <b>false</b>. Because of this, they are called "falsy" values.</li><li>The rest of the values become <b>true</b>, so they are called "truthy".</li ></ul>Thus, the code will never be executed under this condition:',

    // div7 example
    booleanConversionExample1: 'if (0) { <i>// 0 is falsy</i><br> &nbsp&nbsp&nbsp&nbsp ...<br>}',

    // div8
    booleanConversion2: '…and with this - it will always be executed:',

    // div9 example
    booleanConversionExample2: 'if (1) { <i>// 1 is truthy</i><br> &nbsp&nbsp&nbsp&nbsp ... <br>}',

    // div10
    booleanConversion3: 'We can also pass a pre-calculated boolean value to <b>if</b> like this:',

    // div11 example
    booleanConversionExample3: 'let condition = (year == 2015); <i>// converts to true or false</i><br><br>if (condition) {<br> &nbsp&nbsp&nbsp&nbsp ... <br>}',

    // div12
    else1: '<h3>The \'else\' block</h3>The <b>if</b> statement can contain an optional \'else\' block. It is executed when the condition is false.',

    // div13 example
    elseExample1: 'let year = prompt(\'In what year was the ECMAScript-2015 specification published?\', \'\');<br><br>if (year == 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'You\'re an expert!\' );<br>} else {<br> &nbsp&nbsp&nbsp&nbsp alert( \'That\'s wrong!\' ); <i>// any value except 2015</i><br>}',

    // div14
    elseIf1: 'Sometimes you need to check more than one condition. For this, the <b>else if</b> block is used.',

    // div15 example
    elseIfExample1: 'let year = prompt(\'In what year was the ECMAScript-2015 specification published?\', \'\');<br><br>if (year < 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( \' It\'s too early...\' );<br>} else if (year > 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'It\'s too late\' );<br>} else {<br> &nbsp&nbsp&nbsp&nbsp alert( \' Right!\' );<br>}',

    // div16
    elseIf2: 'In the above code, JavaScript will first check for <b>year < 2015</b>. If this is not true, it moves on to the next condition <b>year > 2015</b>. If it is also false, then the last <b>alert</b> will work.<br><br>There may be more <b>else if</b> blocks. The presence of the <b>else</b> block is optional.',

    // div17
    conditionalOperator1: '<h3>Conditional Operator „?“</h3>Sometimes we need to define a variable depending on a condition.',

    // div18 example
    conditionalOperatorExample1: 'let accessAllowed;<br>let age = prompt(\'How old are you?\', \'\');<br><br>if (age > 18) {<br> &nbsp&nbsp&nbsp&nbsp accessAllowed = true; <br>} else {<br> &nbsp&nbsp&nbsp&nbsp accessAllowed = false;<br>}<br><br>alert(accessAllowed);',

    // div19
    conditionalOperator2: 'The so-called "question mark" conditional operator allows us to do this in a shorter and simpler way.<br><br>The operator is represented by a question mark <b>?</b>. It is also called "ternary" because this operator, the only one of its kind, has three arguments.<br><br>Syntax:<br><br><b>let result = condition ? value1 : value2;</b><br><br>First, the <b>condition</b> is evaluated: if it is true, then <b>value1</b> is returned, otherwise <b>value2</b> b>.',

    // div20 example
    conditionalOperatorExample2: 'let accessAllowed = (age > 18) ? true : false;',

    // div21
    conditionalOperator3: 'Technically, we can omit the parentheses around <b>age > 18</b>. The question mark operator has low precedence, so it is executed after the <b>></b> comparison.<br><br>This example will do the same as the previous one:',

    // div22 example
    conditionalOperatorExample3: '<i>// comparison operator "age > 18" is executed first anyway</i><br><i>// (no need to parenthesize it)</i><br>let accessAllowed = age > 18 true : false;',

    // div23
    multipleOperators1: '<h3>Multiple \'?\'</h3>A sequence of <b>?</b> question mark operators allows you to return a value that depends on more than one condition.',

    // div24 example
    multipleOperatorsExample1: 'let age = prompt(\'Age?\', 18);<br><br>let message = (age < 3) ? \'Hello baby!\' :<br> &nbsp&nbsp&nbsp&nbsp (age < 18) ? \'Hello!\' :<br> &nbsp&nbsp&nbsp&nbsp (age < 100) ? \'Hello!\' : <br> &nbsp&nbsp&nbsp&nbsp \'What an unusual age!\';<br><br>alert( message );',

    // div25
    multipleOperators2: 'It can be hard to figure out what\'s going on at first. But on closer inspection, we see that this is a normal sequential test: <ol> <li>The first question mark tests <b>age < 3</b>.</li> <li>If true, returns <b>\' Hello baby!\'</b>. Otherwise, it checks the expression after the colon „:“, evaluates <b>age < 18</b>.</li> <li>If true, returns <b>\'Hi!\'</b>. Otherwise, it checks the expression after the next colon „:“, evaluates <b>age < 100</b>.</li> <li>If it is true, returns <b>\'Hello!\'</b> . Otherwise, returns the expression after the last colon - <b>\'What an unusual age!\'</b>.</li> </ol>This is what it looks like when using if..else:',

    // div26 example
    multipleOperatorsExample2: 'if (age < 3) { <br> &nbsp&nbsp&nbsp&nbsp message = \'Hello baby!\'; <br>} else if (age < 18) { <br> &nbsp&nbsp&nbsp&nbsp message = \'Hi!\'; <br>} else if (age < 100) { <br> &nbsp&nbsp&nbsp&nbsp message = \'Hello!\'; <br> } else { <br> &nbsp&nbsp&nbsp&nbsp message = \'What an unusual age!\';<br>}',

    // div27
    unconventionalUse1: '<h3>Unconventional use of \'?\'</h3>Sometimes the "question mark" operator <b>?</b> is used as a substitute for <b>if</b>:',

    // div28 example
    unconventionalUseExample1: 'let company = prompt(\'Which company created JavaScript?\', \'\');<br><br>(company == \'Netscape\') ? <br> &nbsp&nbsp&nbsp&nbsp alert(\'Correct!\') : alert(\'Wrong.\');',

    // div29
    unconventionalUse2: 'Depending on the <b>company == \'Netscape\'</b> condition, either the first or second part after <b>?</b> will be executed.<br><br>We don\'t assign the result to a variable. Instead, we execute different code depending on the condition.<br><br><b>It is not recommended to use the question mark operator in this way.</b><br><br>Despite the fact that such a notation is shorter than the equivalent the <b>if</b> instruction is less readable.<br><br>Here, for comparison, is the same code using if:',

    // div30 example
    unconventionalUseExample2: 'let company = prompt(\'Which company created JavaScript?\', \'\'); <br><br>if (company == \'Netscape\') { <br> &nbsp&nbsp&nbsp&nbsp alert(\'Correct!\');<br>} else { <br> &nbsp&nbsp&nbsp&nbsp alert(\'Wrong.\' ); <br>}',

    // div31
    unconventionalUse3: 'When reading, the eyes scan the code vertically. Blocks of code that span multiple lines are much easier to read than a long horizontal set of instructions.<br><br>The point of the question mark operator <b>?</b> is to return one or another value, depending on the condition. Please use it for just that. When you need to execute different code paths use <b>if</b>.',

    // div32
    next: '<b><a href="#" onclick="quickLink(); JSTheamNine()">JS topic 9</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamEleven()">JS topic 11</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicTenRus = {
    // div1
    conditionalBranching: '<h3>Условное ветвление: if, \'?\'</h3>Иногда нам нужно выполнить различные действия в зависимости от условий.<br><br>Для этого мы можем использовать инструкцию <b>if</b> и условный оператор <b>?</b>, который также называют оператором «вопросительный знак».',

    // div2
    if1: '<h3>Инструкция «if»</h3>Инструкция <b>if(...)</b> вычисляет условие в скобках и, если результат <b>true</b>, то выполняет блок кода.',

    // div3 example
    ifExample1: 'let year = prompt(\'В каком году была опубликована спецификация ECMAScript-2015?\', \'\');<br><br>if (year == 2015) alert( \'Вы правы!\' );',

    // div4
    if2: 'В примере выше, условие – это простая проверка на равенство (<b>year == 2015</b>), но оно может быть и гораздо более сложным.<br><br>Если мы хотим выполнить более одной инструкции, то нужно заключить блок кода в фигурные скобки:',

    // div5 example
    ifExample2: 'if (year == 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( "Правильно!" );<br> &nbsp&nbsp&nbsp&nbsp alert( "Вы такой умный!" );<br>}',

    // div6
    booleanConversion1: '<h3>Преобразование к логическому типу</h3>Инструкция <b>if (…)</b> вычисляет выражение в скобках и преобразует результат к логическому типу.<br><br>Давайте вспомним правила преобразования типов из главы Преобразование типов:<ul><li>Число <b>0</b>, пустая строка <b>""</b>, <b>null</b>, <b>undefined</b> и <b>NaN</b> становятся <b>false</b>. Из-за этого их называют «ложными» («falsy») значениями.</li><li>Остальные значения становятся <b>true</b>, поэтому их называют «правдивыми» («truthy»).</li></ul>Таким образом, код при таком условии никогда не выполнится:',

    // div7 example
    booleanConversionExample1: 'if (0) { <i>// 0 is falsy</i><br> &nbsp&nbsp&nbsp&nbsp ...<br>}',

    // div8
    booleanConversion2: '…а при таком – выполнится всегда:',

    // div9 example
    booleanConversionExample2: 'if (1) { <i>// 1 is truthy</i><br> &nbsp&nbsp&nbsp&nbsp ... <br>}',

    // div10
    booleanConversion3: 'Мы также можем передать заранее вычисленное в переменной логическое значение в <b>if</b>, например так:',

    // div11 example
    booleanConversionExample3: 'let condition = (year == 2015); <i>// преобразуется к true или false</i><br><br>if (condition) {<br> &nbsp&nbsp&nbsp&nbsp ... <br>}',

    // div12
    else1: '<h3>Блок «else»</h3>Инструкция <b>if</b> может содержать необязательный блок «else» («иначе»). Он выполняется, когда условие ложно.',

    // div13 example
    elseExample1: 'let year = prompt(\'В каком году была опубликована спецификация ECMAScript-2015?\', \'\');<br><br>if (year == 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Да вы знаток!\' );<br>} else {<br> &nbsp&nbsp&nbsp&nbsp alert( \'А вот и неправильно!\' ); <i>// любое значение, кроме 2015</i><br>}',

    // div14
    elseIf1: 'Иногда нужно проверить несколько вариантов условия. Для этого используется блок <b>else if</b>.',

    // div15 example
    elseIfExample1: 'let year = prompt(\'В каком году была опубликована спецификация ECMAScript-2015?\', \'\');<br><br>if (year < 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Это слишком рано...\' );<br>} else if (year > 2015) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Это поздновато\' );<br>} else {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Верно!\' );<br>}',

    // div16
    elseIf2: 'В приведённом выше коде JavaScript сначала проверит <b>year < 2015</b>. Если это неверно, он переходит к следующему условию <b>year > 2015</b>. Если оно тоже ложно, тогда сработает последний <b>alert</b>.<br><br>Блоков <b>else if</b> может быть и больше. Присутствие блока <b>else</b> не является обязательным.',

    // div17
    conditionalOperator1: '<h3>Условный оператор „?“</h3>Иногда нам нужно определить переменную в зависимости от условия.',

    // div18 example
    conditionalOperatorExample1: 'let accessAllowed;<br>let age = prompt(\'Сколько вам лет?\', \'\');<br><br>if (age > 18) {<br> &nbsp&nbsp&nbsp&nbsp accessAllowed = true;<br>} else {<br> &nbsp&nbsp&nbsp&nbsp accessAllowed = false;<br>}<br><br>alert(accessAllowed);',

    // div19
    conditionalOperator2: 'Так называемый «условный» оператор «вопросительный знак» позволяет нам сделать это более коротким и простым способом.<br><br>Оператор представлен знаком вопроса <b>?</b>. Его также называют «тернарный», так как этот оператор, единственный в своём роде, имеет три аргумента.<br><br>Синтаксис:<br><br><b>let result = условие ? значение1 : значение2;</b><br><br>Сначала вычисляется <b>условие</b>: если оно истинно, тогда возвращается <b>значение1</b>, в противном случае – <b>значение2</b>.',

    // div20 example
    conditionalOperatorExample2: 'let accessAllowed = (age > 18) ? true : false;',

    // div21
    conditionalOperator3: 'Технически, мы можем опустить круглые скобки вокруг <b>age > 18</b>. Оператор вопросительного знака имеет низкий приоритет, поэтому он выполняется после сравнения <b>></b>.<br><br>Этот пример будет делать то же самое, что и предыдущий:',

    // div22 example
    conditionalOperatorExample3: '<i>// оператор сравнения "age > 18" выполняется первым в любом случае</i><br><i>// (нет необходимости заключать его в скобки)</i><br>let accessAllowed = age > 18 ? true : false;',

    // div23
    multipleOperators1: '<h3>Несколько операторов „?“</h3>Последовательность операторов вопросительного знака <b>?</b> позволяет вернуть значение, которое зависит от более чем одного условия.',

    // div24 example
    multipleOperatorsExample1: 'let age = prompt(\'Возраст?\', 18);<br><br>let message = (age < 3) ? \'Здравствуй, малыш!\' :<br> &nbsp&nbsp&nbsp&nbsp (age < 18) ? \'Привет!\' :<br> &nbsp&nbsp&nbsp&nbsp (age < 100) ? \'Здравствуйте!\' : <br> &nbsp&nbsp&nbsp&nbsp \'Какой необычный возраст!\';<br><br>alert( message );',

    // div25
    multipleOperators2: 'Поначалу может быть сложно понять, что происходит. Но при ближайшем рассмотрении мы видим, что это обычная последовательная проверка: <ol> <li>Первый знак вопроса проверяет <b>age < 3</b>.</li> <li>Если верно – возвращает <b>\'Здравствуй, малыш!\'</b>. В противном случае, проверяет выражение после двоеточия „:“, вычисляет <b>age < 18</b>.</li> <li>Если это верно – возвращает <b>\'Привет!\'</b>. В противном случае, проверяет выражение после следующего двоеточия „:“, вычисляет <b>age < 100</b>.</li> <li>Если это верно – возвращает <b>\'Здравствуйте!\'</b>. В противном случае, возвращает выражение после последнего двоеточия – <b>\'Какой необычный возраст!\'</b>.</li> </ol>Вот как это выглядит при использовании if..else:',

    // div26 example
    multipleOperatorsExample2: 'if (age < 3) { <br> &nbsp&nbsp&nbsp&nbsp message = \'Здравствуй, малыш!\'; <br>} else if (age < 18) { <br> &nbsp&nbsp&nbsp&nbsp   message = \'Привет!\'; <br>} else if (age < 100) { <br> &nbsp&nbsp&nbsp&nbsp   message = \'Здравствуйте!\'; <br> } else { <br> &nbsp&nbsp&nbsp&nbsp   message = \'Какой необычный возраст!\';<br>}',

    // div27
    unconventionalUse1: '<h3>Нетрадиционное использование „?“</h3>Иногда оператор «вопросительный знак» <b>?</b> используется в качестве замены <b>if</b>:',

    // div28 example
    unconventionalUseExample1: 'let company = prompt(\'Какая компания создала JavaScript?\', \'\');<br><br>(company == \'Netscape\') ? <br> &nbsp&nbsp&nbsp&nbsp    alert(\'Верно!\') : alert(\'Неправильно.\');',

    // div29
    unconventionalUse2: 'В зависимости от условия <b>company == \'Netscape\'</b>, будет выполнена либо первая, либо вторая часть после <b>?</b>.<br><br>Здесь мы не присваиваем результат переменной. Вместо этого мы выполняем различный код в зависимости от условия.<br><br><b>Не рекомендуется использовать оператор вопросительного знака таким образом.</b><br><br>Несмотря на то, что такая запись короче, чем эквивалентная инструкция <b>if</b>, она хуже читается.<br><br>Вот, для сравнения, тот же код, использующий if:',

    // div30 example
    unconventionalUseExample2: 'let company = prompt(\'Какая компания создала JavaScript?\', \'\'); <br><br>if (company == \'Netscape\') { <br> &nbsp&nbsp&nbsp&nbsp alert(\'Верно!\');<br>} else { <br> &nbsp&nbsp&nbsp&nbsp alert(\'Неправильно.\'); <br>}',

    // div31
    unconventionalUse3: 'При чтении глаза сканируют код по вертикали. Блоки кода, занимающие несколько строк, воспринимаются гораздо легче, чем длинный горизонтальный набор инструкций.<br><br>Смысл оператора «вопросительный знак» <b>?</b> – вернуть то или иное значение, в зависимости от условия. Пожалуйста, используйте его именно для этого. Когда вам нужно выполнить разные ветви кода – используйте <b>if</b>.',

    // div32
    next: '<b><a href="#" onclick="quickLink(); JSTheamNine()">JS topic 9</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamEleven()">JS topic 11</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Одиннадцатая тема.
let JSTopicElevenEng = {
    // div1
    logicalOperators1: '<h3>Logical Operators</h3>JavaScript has four logical operators: <b>||</b> (OR), <b>&&</b> (AND) and <b>!</b> (NOT), <b>??</b> (Null merge operator). We\'ll look at the first three here, the <b>??</b> operator will be in the next chapter.',

    //div2
    logicalOperators2: '<h3>|| (OR)</h3>The "OR" operator looks like a double pipe character:',

    // div3 example
    logicalOperatorsExample1: 'result = a || b;',

    // div4
    logicalOperators3: 'Traditionally in programming, OR is only intended to manipulate boolean values: if any of the arguments is <b>true</b>, it will return <b>true</b>, otherwise it will return <b> false</b>.<br><br>In JavaScript, as we will see later, this operator works in a slightly different way. But first, let\'s see what happens to boolean values.<br><br>There are only four possible logical combinations:',

    // div5 example
    logicalOperatorsExample2: 'alert( true || true ); <i>// true</i><br>alert( false || true ); <i>// true</i><br>alert( true || false ); <i>// true</i><br>alert( false || false ); <i>//false</i>',

    // div6
    logicalOperators4: 'As we can see, the result of operations is always <b>true</b>, except when both arguments are <b>false</b>.<br><br>If the value is not a boolean, then it is cast to it for calculation purposes.<br><br>For example, the number <b>1</b> will be treated as <b>true</b>, and <b>0</b> as <b>false</b>:',

    // div7 example
    logicalOperatorsExample3: 'if (1 || 0) { <i>// works like if( true || false )</i><br> &nbsp&nbsp&nbsp&nbsp alert( \'truthy!\' );<br>}',

    // div8
    logicalOperators5: 'Usually the operator || is used in an if to test the truth of any of the given conditions.',

    // div9 example
    logicalOperatorsExample4: 'let hour = 9;<br><br>if (hour < 10 || hour > 18) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Office closed.\' );<br>}',

    // div10
    logicalOperators6: 'More conditions can be passed:',

    // div11 example
    logicalOperatorsExample5: 'let hour = 12;<br>let isWeekend = true;<br><br>if (hour < 10 || hour > 18 || isWeekend) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'The office is closed.\' ); <i>// it\'s a day off</i><br>}',

    // div12
    logicalOperators7: '<h3>OR "||" finds the first true value</h3>The logic described above corresponds to the traditional one. Now let\'s work with the "extra" features of JavaScript.<br><br>The advanced algorithm works as follows.<br><br>When ORing <b>||</b> with multiple values: <br><br> <b>result = value1 || value2 || value3;</b><br><br>The <b>||</b> operator does the following: <ul> <li>Evaluates operands from left to right.</li> <li>Each operand converts to a boolean value . If the result is <b>true</b>, stop and return the original value of that operand.</li> <li>If all operands are <b>false</b>, return the last one.</li > </ul>The value is returned as is, without conversion.<br><br>In other words, the OR chain <b>||</b> returns the first true value, or the last one if no such value is found.',

    // div13 example
    logicalOperatorsExample6: 'alert( 1 || 0 ); <i>// 1</i><br>alert( true || \'no matter what\' ); <i>// true</i><br><br>alert( null || 1 ); <i>// 1 (first true value)</i><br>alert( null || 0 || 1 ); <i>// 1 (first true value)</i><br>alert( undefined || null || 0 ); <i>// 0 (because everything is false, the last value is returned)</i>',

    // div14
    logicalOperators8: 'This allows for more interesting applications of the operator than "pure, traditional, boolean-only OR". <ol> <li><b>Getting the first true value from a list of variables or expressions.</b><br><br>Let\'s imagine we have a set of variables that can contain data or be <b>null/undefined </b>. How can we find the first data variable?<br><br>With ||:</li></ol>',

    // div15 example
    logicalOperatorsExample7: 'let currentUser = null;<br>let defaultUser = "John";<br><br>let name = currentUser || defaultUser || "unnamed";<br><br>alert( name ); <i>// select "John" - first true value</i>',

    // div16
    logicalOperators9: 'If both <b>currentUser</b> and <b>defaultUser</b> were false, we would observe <b>"unnamed"</b> as the result.',

    // div17
    logicalOperators10: '<ol start="2"> <li><b>Short calculation.</b><br><br>Operands can be both single values and arbitrary expressions. OR <b>||</b> evaluates them from left to right. The calculation stops when the first true value is reached. This process is called "shortened evaluation" because the second operand is only evaluated if the first is not enough to evaluate the entire expression.<br><br>This is noticeable when the expression given as the second argument has a side effect, such as changing the variable.<br><br>In the example below, x does not change:</li> </ol>',

    // div18 example
    logicalOperatorsExample8: 'let x;<br><br>true || (x = 1);<br><br>alert(x); <i>// undefined because (x = 1) is not evaluated</i>',

    // div19
    logicalOperators11: 'If the first argument were false, then || would proceed to evaluate the second one and perform the assignment operation:',

    // div20 example
    logicalOperatorsExample9: 'let x;<br><br>false || (x = 1);<br><br>alert(x); <i>// 1</i>',

    // div21
    logicalOperators12: 'Assignment is just one example. Of course, there may be other side effects that won\'t show up if the evaluation doesn\'t reach them.<br><br>As we can see, this use case of <b>||</b> is "analogous to <b>if</b>". The first operand is converted to boolean. If it turns out to be false, the second one is evaluated.<br><br>In most cases, it\'s better to use the "plain" <b>if</b> to make the code easier to understand, but sometimes it can be convenient.',

    // div22
    logicalOperators13: '<h3>&& (AND)</h3>The AND operator is written as two ampersands <b>&&</b>:',

    // div23 example
    logicalOperatorsExample10: 'result = a && b;',

    // div24
    logicalOperators14: 'In traditional programming, AND returns <b>true</b> if both arguments are true, otherwise <b>false</b>:',

    // div25 example
    logicalOperatorsExample11: 'alert( true && true ); <i>// true</i><br>alert( false && true ); <i>// false</i><br>alert( true && false ); <i>// false</i><br>alert( false && false ); <i>//false</i>',

    // div26
    logicalOperators15: 'Example with if:',

    // div27 example
    logicalOperatorsExample12: 'let hour = 12;<br>let minute = 30;<br><br>if (hour == 12 && minute == 30) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'The time is 12:30\');<br>}',

    // div28
    logicalOperators16: 'As with OR, any value is allowed as an AND operand:',

    // div29 example
    logicalOperatorsExample13: 'if (1 && 0) { <i>// evaluates to true && false</i><br> &nbsp&nbsp&nbsp&nbsp alert( "won\'t work because the result is false" );<br>}',

    // div30
    logicalOperators17: '<h3>And "&&" finds the first false value</h3>With multiple consecutive AND operators: <br><br><b>result = value1 && value2 && value3;</b><br><br>The <b>&&</b> operator does the following: <ul> <li>Evaluates the operands from left to right.</li> <li>Converts each operand to a boolean value. If the result is <b>false</b>, stop and return the original value of that operand.</li> <li>If all operands were true, the last one is returned.</li> </ul>In other words, AND returns the first false meaning. Or the last one if nothing is found.<br><br>The above rules are similar to the OR behavior. The difference is that AND returns the first <b>false</b> value, while OR returns the first <b>true</b>.',

    // div31 example
    logicalOperatorsExample14: '<i>// If the first operand is true,</i><br><i>// And returns the second:</i><br>alert( 1 && 0 ); <i>// 0</i><br>alert( 1 && 5 ); <i>// 5</i><br><br><i>// If the first operand is false,</i><br><i>// And returns it. The second operand is ignored</i><br>alert( null && 5 ); <i>// null</i><br>alert( 0 && "no matter what" ); <i>// 0</i>',

    // div32
    logicalOperators18: 'You can pass multiple values in a row. In this case, the first "false" value where the calculations stopped will be returned.',

    // div33 example
    logicalOperatorsExample15: 'alert( 1 && 2 && null && 3 ); <i>//null</i>',

    // div34
    logicalOperators19: 'When all values are correct, the last one is returned',

    // div35 example
    logicalOperatorsExample16: 'alert( 1 && 2 && 3 ); <i>// 3</i>',

    // div36
    logicalOperators20: 'Like the OR operator <b>||</b>, AND <b>&&</b> can sometimes replace <b>if</b>.',

    // div37 example
    logicalOperatorsExample17: 'let x = 1;<br><br>(x > 0) && alert( \'Greater than zero!\' );',

    // div38
    logicalOperators21: 'The action on the right side of the <b>&&</b> will only be executed if the calculations reach it. That is, <b>alert</b> will work if the left side (<b>x > 0</b>) contains <b>true</b>.<br><br>An analogue is obtained:',

    // div39 example
    logicalOperatorsExample18: 'let x = 1;<br><br>if (x > 0) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Greater than zero!\' );<br>}',

    // div40
    logicalOperators22: 'However, in general, the <b>if</b> option is more readable and understandable.<br><br>It\'s more obvious, so it\'s better to use it.',

    // div41
    logicalOperators23: '<h3>The precedence of && is greater than ||</h3>The precedence of AND <b>&&</b> is greater than OR <b>||</b>, so it executes first. <br><br>So the code <b>a && b || c && d</b> is essentially the same as if the expressions <b>&&</b> were in parentheses: <b>(a && b) || (c && d)</b>.',

    // div42
    logicalOperators24: '<h3>! (NOT)</h3>The NOT operator is represented by an exclamation point <b>!</b>.<br><br>The syntax is quite simple:<br><br><b>result = !value;</b>< br><br>The operator takes one argument and does the following:<ol> <li>First casts the argument to the boolean type <b>true/false</b>.</li> <li>Then returns the opposite value.</li> </ol>',

    // div43 example
    logicalOperatorsExample19: 'alert( !true ); <i>// false</i><br>alert( !0 ); <i>//true</i>',

    // div44
    logicalOperators25: 'In particular, the double NOT <b>!!</b> is used to convert values to a logical type:',

    // div45 example
    logicalOperatorsExample20: 'alert( !!"non-empty string" ); <i>// true</i><br>alert( !!null ); <i>//false</i>',

    // div46
    logicalOperators26: 'That is, the first one does NOT convert the value to a boolean value and returns the opposite, and the second one does NOT invert it again. At the end we have a simple conversion of the value to boolean.<br><br>There is a slightly more verbose way to do the same thing - the built-in function <b>Boolean</b>:',

    // div47 example
    logicalOperatorsExample21: 'alert( Boolean("non-empty string") ); <i>// true</i><br>alert( Boolean(null) ); <i>//false</i>',

    // div48
    logicalOperators27: 'The precedence of NOT <b>!</b> is the highest of all logical operators, so it is always executed first, before <b>&&</b> or <b>||</b>.',

    // div49
    next: '<b><a href="#" onclick="quickLink(); JSTheamTen()">JS topic 10</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamTwelve()">JS topic 12</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicElevenRus = {
    // div1
    logicalOperators1: '<h3>Логические операторы</h3>В JavaScript есть четыре логических оператора: <b>||</b> (ИЛИ), <b>&&</b> (И) и <b>!</b> (НЕ), <b>??</b> (Оператор нулевого слияния). Здесь мы рассмотрим первые три, оператор <b>??</b> будет в следующей главе.',

    // div2
    logicalOperators2: '<h3>|| (ИЛИ)</h3>Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:',

    // div3 example
    logicalOperatorsExample1: 'result = a || b;',

    // div4
    logicalOperators3: 'Традиционно в программировании ИЛИ предназначено только для манипулирования булевыми значениями: в случае, если какой-либо из аргументов <b>true</b>, он вернёт <b>true</b>, в противоположной ситуации возвращается <b>false</b>.<br><br>В JavaScript, как мы увидим далее, этот оператор работает несколько иным образом. Но давайте сперва посмотрим, что происходит с булевыми значениями.<br><br>Существует всего четыре возможные логические комбинации:',

    // div5 example
    logicalOperatorsExample2: 'alert( true || true );   <i>// true</i><br>alert( false || true );  <i>// true</i><br>alert( true || false );  <i>// true</i><br>alert( false || false ); <i>// false</i>',

    // div6
    logicalOperators4: 'Как мы можем наблюдать, результат операций всегда равен <b>true</b>, за исключением случая, когда оба аргумента <b>false</b>.<br><br>Если значение не логического типа, то оно к нему приводится в целях вычислений.<br><br>Например, число <b>1</b> будет воспринято как <b>true</b>, а <b>0</b> – как <b>false</b>:',

    // div7 example
    logicalOperatorsExample3: 'if (1 || 0) { <i>// работает как if( true || false )</i><br> &nbsp&nbsp&nbsp&nbsp   alert( \'truthy!\' );<br>}',

    // div8
    logicalOperators5: 'Обычно оператор || используется в if для проверки истинности любого из заданных условий.',

    // div9 example
    logicalOperatorsExample4: 'let hour = 9;<br><br>if (hour < 10 || hour > 18) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Офис закрыт.\' );<br>}',

    // div10
    logicalOperators6: 'Можно передать и больше условий:',

    // div11 example
    logicalOperatorsExample5: 'let hour = 12;<br>let isWeekend = true;<br><br>if (hour < 10 || hour > 18 || isWeekend) {<br> &nbsp&nbsp&nbsp&nbsp   alert( \'Офис закрыт.\' ); <i>// это выходной</i><br>}',

    // div12
    logicalOperators7: '<h3>ИЛИ "||" находит первое истинное значение</h3>Описанная выше логика соответствует традиционной. Теперь давайте поработаем с «дополнительными» возможностями JavaScript.<br><br>Расширенный алгоритм работает следующим образом.<br><br>При выполнении ИЛИ <b>||</b> с несколькими значениями: <br><br><b>result = value1 || value2 || value3;</b><br><br>Оператор <b>||</b> выполняет следующие действия: <ul> <li>Вычисляет операнды слева направо.</li> <li>Каждый операнд конвертирует в логическое значение. Если результат <b>true</b>, останавливается и возвращает исходное значение этого операнда.</li> <li>Если все операнды являются ложными (<b>false</b>), возвращает последний из них.</li> </ul>Значение возвращается в исходном виде, без преобразования.<br><br>Другими словами, цепочка ИЛИ <b>||</b> возвращает первое истинное значение или последнее, если такое значение не найдено.',

    // div13 example
    logicalOperatorsExample6: 'alert( 1 || 0 ); <i>// 1</i><br>alert( true || \'no matter what\' ); <i>// true</i><br><br>alert( null || 1 ); <i>// 1 (первое истинное значение)</i><br>alert( null || 0 || 1 ); <i>// 1 (первое истинное значение)</i><br>alert( undefined || null || 0 ); <i>// 0 (поскольку все ложно, возвращается последнее значение)</i>',

    // div14
    logicalOperators8: 'Это делает возможным более интересное применение оператора по сравнению с «чистым, традиционным, только булевым ИЛИ». <ol> <li><b>Получение первого истинного значения из списка переменных или выражений.</b><br><br>Представим, что у нас имеется ряд переменных, которые могут содержать данные или быть <b>null/undefined</b>. Как мы можем найти первую переменную с данными?<br><br>С помощью ||:</li></ol>',

    // div15 example
    logicalOperatorsExample7: 'let currentUser = null;<br>let defaultUser = "John";<br><br>let name = currentUser || defaultUser || "unnamed";<br><br>alert( name ); <i>// выбирается "John" – первое истинное значение</i>',

    // div16
    logicalOperators9: 'Если бы и <b>currentUser</b>, и <b>defaultUser</b> были ложными, в качестве результата мы бы наблюдали <b>"unnamed"</b>.',

    // div17
    logicalOperators10: '<ol start="2"> <li><b>Сокращённое вычисление.</b><br><br>Операндами могут быть как отдельные значения, так и произвольные выражения. ИЛИ <b>||</b> вычисляет их слева направо. Вычисление останавливается при достижении первого истинного значения. Этот процесс называется «сокращённым вычислением», поскольку второй операнд вычисляется только в том случае, если первого недостаточно для вычисления всего выражения.<br><br>Это хорошо заметно, когда выражение, указанное в качестве второго аргумента, имеет побочный эффект, например, изменение переменной.<br><br>В приведённом ниже примере x не изменяется:</li> </ol>',

    // div18 example
    logicalOperatorsExample8: 'let x;<br><br>true || (x = 1);<br><br>alert(x); <i>// undefined, потому что (x = 1) не вычисляется</i>',

    // div19
    logicalOperators11: 'Если бы первый аргумент имел значение false, то || приступил бы к вычислению второго и выполнил операцию присваивания:',

    // div20 example
    logicalOperatorsExample9: 'let x;<br><br>false || (x = 1);<br><br>alert(x); <i>// 1</i>',

    // div21
    logicalOperators12: 'Присваивание – лишь один пример. Конечно, могут быть и другие побочные эффекты, которые не проявятся, если вычисление до них не дойдёт.<br><br>Как мы видим, этот вариант использования <b>||</b> является "аналогом <b>if</b>". Первый операнд преобразуется в логический. Если он оказывается ложным, начинается вычисление второго.<br><br>В большинстве случаев лучше использовать «обычный» <b>if</b>, чтобы облегчить понимание кода, но иногда это может быть удобно.',

    // div22
    logicalOperators13: '<h3>&& (И)</h3>Оператор И пишется как два амперсанда <b>&&</b>:',

    // div23 example
    logicalOperatorsExample10: 'result = a && b;',

    // div24
    logicalOperators14: 'В традиционном программировании И возвращает <b>true</b>, если оба аргумента истинны, а иначе – <b>false</b>:',

    // div25 example
    logicalOperatorsExample11: 'alert( true && true );   <i>// true</i><br>alert( false && true );  <i>// false</i><br>alert( true && false );  <i>// false</i><br>alert( false && false ); <i>// false</i>',

    // div26
    logicalOperators15: 'Пример с if:',

    // div27 example
    logicalOperatorsExample12: 'let hour = 12;<br>let minute = 30;<br><br>if (hour == 12 && minute == 30) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'The time is 12:30\' );<br>}',

    // div28
    logicalOperators16: 'Как и в случае с ИЛИ, любое значение допускается в качестве операнда И:',

    // div29 example
    logicalOperatorsExample13: 'if (1 && 0) { <i>// вычисляется как true && false</i><br> &nbsp&nbsp&nbsp&nbsp   alert( "не сработает, так как результат ложный" );<br>}',

    // div30
    logicalOperators17: '<h3>И «&&» находит первое ложное значение</h3>При нескольких подряд операторах И: <br><br><b>result = value1 && value2 && value3;</b><br><br>Оператор <b>&&</b> выполняет следующие действия: <ul> <li>Вычисляет операнды слева направо.</li> <li>Каждый операнд преобразует в логическое значение. Если результат <b>false</b>, останавливается и возвращает исходное значение этого операнда.</li> <li>Если все операнды были истинными, возвращается последний.</li> </ul>Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.<br><br>Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое <b>ложное</b> значение, а ИЛИ – первое <b>истинное</b>.',

    // div31 example
    logicalOperatorsExample14: '<i>// Если первый операнд истинный,</i><br><i>// И возвращает второй:</i><br>alert( 1 && 0 ); <i>// 0</i><br>alert( 1 && 5 ); <i>// 5</i><br><br><i>// Если первый операнд ложный,</i><br><i>// И возвращает его. Второй операнд игнорируется</i><br>alert( null && 5 ); <i>// null</i><br>alert( 0 && "no matter what" ); <i>// 0</i>',

    // div32
    logicalOperators18: 'Можно передать несколько значений подряд. В таком случае возвратится первое «ложное» значение, на котором остановились вычисления.',

    // div33 example
    logicalOperatorsExample15: 'alert( 1 && 2 && null && 3 ); <i>// null</i>',

    // div34
    logicalOperators19: 'Когда все значения верны, возвращается последнее',

    // div35 example
    logicalOperatorsExample16: 'alert( 1 && 2 && 3 ); <i>// 3</i>',

    // div36
    logicalOperators20: 'Как и оператор ИЛИ <b>||</b>, И <b>&&</b> иногда может заменять <b>if</b>.',

    // div37 example
    logicalOperatorsExample17: 'let x = 1;<br><br>(x > 0) && alert( \'Greater than zero!\' );',

    // div38
    logicalOperators21: 'Действие в правой части <b>&&</b> выполнится только в том случае, если до него дойдут вычисления. То есть, <b>alert</b> сработает, если в левой части (<b>x > 0</b>) будет <b>true</b>.<br><br>Получился аналог:',

    // div39 example
    logicalOperatorsExample18: 'let x = 1;<br><br>if (x > 0) {<br> &nbsp&nbsp&nbsp&nbsp   alert( \'Greater than zero!\' );<br>}',

    // div40
    logicalOperators22: 'Однако, как правило, вариант с <b>if</b> лучше читается и воспринимается.<br><br>Он более очевиден, поэтому лучше использовать его.',

    // div41
    logicalOperators23: '<h3>Приоритет оператора && больше, чем у ||</h3>Приоритет оператора И <b>&&</b> больше, чем ИЛИ <b>||</b>, так что он выполняется раньше.<br><br>Таким образом, код <b>a && b || c && d</b> по существу такой же, как если бы выражения <b>&&</b> были в круглых скобках: <b>(a && b) || (c && d)</b>.',

    // div42
    logicalOperators24: '<h3>! (НЕ)</h3>Оператор НЕ представлен восклицательным знаком <b>!</b>.<br><br>Синтаксис довольно прост:<br><br><b>result = !value;</b><br><br>Оператор принимает один аргумент и выполняет следующие действия:<ol> <li>Сначала приводит аргумент к логическому типу <b>true/false</b>.</li> <li>Затем возвращает противоположное значение.</li> </ol>',

    // div43 example
    logicalOperatorsExample19: 'alert( !true ); <i>// false</i><br>alert( !0 ); <i>// true</i>',

    // div44
    logicalOperators25: 'В частности, двойное НЕ <b>!!</b> используют для преобразования значений к логическому типу:',

    // div45 example
    logicalOperatorsExample20: 'alert( !!"non-empty string" ); <i>// true</i><br>alert( !!null ); <i>// false</i>',

    // div46
    logicalOperators26: 'То есть первое НЕ преобразует значение в логическое значение и возвращает обратное, а второе НЕ снова инвертирует его. В конце мы имеем простое преобразование значения в логическое.<br><br>Есть немного более подробный способ сделать то же самое – встроенная функция <b>Boolean</b>:',

    // div47 example
    logicalOperatorsExample21: 'alert( Boolean("non-empty string") ); <i>// true</i><br>alert( Boolean(null) ); <i>// false</i>',

    // div48
    logicalOperators27: 'Приоритет НЕ <b>!</b> является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед <b>&&</b> или <b>||</b>.',

    // div49
    next: '<b><a href="#" onclick="quickLink(); JSTheamTen()">JS topic 10</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamTwelve()">JS topic 12</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Двенадцатая тема.
let JSTopicTwelveEng = {
    // div1
    zeroMergeOperators1: '<h3>The null merge operator (??)</h3>The null merge operator is two question marks <b>??</b>.<br><br>Because it handles <b>null</b> and <b>undefined</b> in the same way, we will introduce a special term for this article. For brevity, we say that a value is "defined" if it is neither <b>null</b> nor <b>undefined</b>.<br><br>The result of the expression <b>a ?? b</b> would be: <ul> <li>if <b>a</b> is defined then <b>a</b>,</li> <li>if <b>a</b> is not defined, then <b>b</b>.</li> </ul>In other words, the <b>??</b> operator returns the first argument if it is not <b>null/undefined</b>, otherwise the second one.<br><br>The null merge operator is not something fundamentally new. It\'s just a convenience syntax to get two values to one that is "defined".<br><br>Here\'s how you can rewrite the expression <b>result = a ?? b</b> using the operators already familiar to us: ',

    // div2 example
    zeroMergeOperatorsExample1: 'result = (a !== null && a !== undefined) ? a : b;',

    // div3
    zeroMergeOperators2: 'It should now be absolutely clear what <b>??</b> is doing. Let\'s see where this can be useful.<br><br>Usually, the <b>??</b> operator is needed to set a default value for a potentially undefined variable.<br><br>For example, here we will display <b>user</b> if its value is not <b>null/undefined</b>, otherwise <b>Anonymous</b>:',

    // div4 example
    zeroMergeOperatorsExample2: 'let user;<br><br>alert(user ?? "anonymous"); <i>// Anonymous (user does not exist)</i>',

    // div5
    zeroMergeOperators3: 'And here is an example where user is assigned a value:',

    // div6 example
    zeroMergeOperatorsExample3: 'let user = "John";<br><br>alert(user ?? "Anonymous"); <i>// Ivan (user exists)</i>',

    // div7
    zeroMergeOperators4: 'Also, you can write a sequence of <b>??</b> operators to get the first value in the list that is not <b>null/undefined</b>.<br><br>Let\'s say we have user data in <b>firstName</b> , <b>lastName</b> or <b>nickName</b> variables. All of them may not exist if the user chooses not to enter the corresponding value.<br><br>We would like to display the username using one of these variables, or show "Anonymous" if they are all <b>null/undefined</b>.<br><br>To do this, we use the operator <b>??</b>:',

    // div8 example
    zeroMergeOperatorsExample4: 'let firstName = null;<br>let lastName = null;<br><br>let nickName = "Superencoder";<br><br><i>// shows the first value that is defined:</i> <br>alert(firstName ?? lastName ?? nickName ?? "Anonymous"); <i>// Superencoder</i>',

    // div9
    Comparison1: '<h3>Comparison with ||</h3>The OR operator <b>||</b> can be used to do the same as <b>??</b> as shown in the previous chapter .<br><br>For example, if you replace <b>??</b> with <b>||</b> in the code above, the result will be the same:',

    // div10 example
    ComparisonExample1: 'let firstName = null;<br>let lastName = null;<br><br>let nickName = "Superencoder";<br><br><i>// shows first true value:</i><br><br>alert(firstName || lastName || nickName || "Anonymous"); <i>// Superencoder</i>',

    // div11
    Comparison2: 'Historically, the OR operator <b>||</b> came first. It exists from the very beginning in JavaScript, which is why developers have been using it for such purposes for a long time.<br><br>On the other hand, the null merge operator <b>??</b> has been added to the language relatively recently - just because , that many were unhappy with the <b>||</b> operator.<br><br>An important difference between the two is that: <ul> <li><b>||</b> returns the first <b>true</b> value.</li> <li><b>??</b> returns the first <b>defined</b> value.</li> </ul>Put simply, the operator <b>||</b> does not distinguish between <b>false</b>, <b>0</b>, empty string <b>""</b> and <b>null/undefined</b> . For him, they are all the same, i.e. are false values. If the first argument to the <b>||</b> operator is any of the listed values, then we will get the second argument as the result.<br><br>However, in practice, it is often necessary to use the default value only when the variable is <b>null/undefined</b>. Because that\'s when the value is really unknown/undefined.<br><br>Consider the following example:',

    // div12 example
    ComparisonExample2: 'let height = 0;<br><br>alert(height || 100); <i>// 100</i><br>alert(height ?? 100); <i>// 0</i>',

    // div13
    Comparison3: '<ul> <li><b>height || 100</b> checks <b>height</b> for a false value, it is <b>0</b>, yes, false. <ul> <li>so the result of <b>||</b> is the second argument, i.e. <b>100</b>.</li> </ul> </li> <li><b>height ?? 100</b> checks that the <b>height</b> variable contains <b>null/undefined</b> and since it doesn\'t, <ul> <li>the result is the <b>height variable itself </b>, i.e. <b>0</b>.</li> </ul> </li> </ul>In practice, zero height is often a perfectly normal value that should not be replaced by the default value. Thus, ?? it just works the way it should.',

    // div14
    priority1: '<h3>Priority</h3>The precedence of the operator <b>??</b> is the same as that of <b>||</b>. They are both equal to <b>3</b> in the table on MDN.<br><br>This means that, like <b>||</b>, the null merge operator <b>??</b> evaluates before <b>=</b> and <b>?</b>, but after most other operations such as <b>+</b>, <b>*</b>.<br><br>So, in expressions of this kind, brackets are needed:',

    // div15 example
    priorityExample1: 'let height = null;<br>let width = null;<br><br><i>// important: use parentheses</i><br>let area = (height ?? 100) * ( width ??50);<br><br>alert(area); <i>// 5000</i>',

    // div16
    priority2: 'Otherwise, if the brackets are omitted, the <b>*</b> operator will be executed first, since it has a higher priority than <b>??</b>, and this will lead to incorrect results.',

    // div17 example
    priorityExample2: '<i>// without brackets</i><br>let area = height ?? 100*width?? 50;<br><br><i>// ...works like this (not at all what we want):</i><br>let area = height ?? (100*width) ?? 50;',

    // div18
    usage1: '<h3>Using ?? together with && or ||</h3>For security reasons, JavaScript forbids using the <b>??</b> operator together with <b>&&</b> and <b>||</b> if the priority is explicitly not specified using parentheses.<br><br>The following code will result in a syntax error:',

    // div19 example
    usageExample1: 'let x = 1 && 2 ?? 3; <i>// Syntax error</i>',

    // div20
    usage2: 'This certainly controversial restriction was added to the language specification to avoid bugs when people start switching from <b>||</b> to <b>??</b>.<br><br >Use parentheses to get around this limitation:',

    // div21 example
    usageExample2: 'let x = (1 && 2) ?? 3; <i>// Works without errors</i><br><br>alert(x); <i>// 2</i>',

    // div22
    zeroAssignmentOperator1: '<h3>Null assignment operator (??=)</h3>Suppose we need to check whether the variable <b>is null</b> or <b>undefined</b>, and if so, assign some other value to this variable.<br><br>That\'s how we would do it now:',

    // div23 example
    zeroAssignmentOperatorExample1: 'let userAge = null;<br><br>if (userAge === null || userAge === undefined) {<br> &nbsp&nbsp&nbsp&nbsp userAge = 18;<br>}',

    // div24
    zeroAssignmentOperator2: 'Looks cumbersome, right? There is an operator more suitable for such tasks. Here is its syntax:',

    // div25 example
    zeroAssignmentOperatorExample2: 'x ??= y',

    // div26
    zeroAssignmentOperator3: 'Operator <b>??=</b> will assign <b>x</b> the value <b>y</b> only if <b>x</b> is undefined (<b>null/undefined</b>).<br><br>Now let\'s try to rewrite a piece of code that is already familiar to us using a new operator:',

    // div27 example
    zeroAssignmentOperatorExample3: 'let userAge = null;<br><br>userAge ??= 18;<br><br>alert(userAge) <i>// 18</i>',

    // div28
    zeroAssignmentOperator4: 'Note: if <b>Usage</b> was not equal to <b>null/undefined</b>, then the expression to the right of <b>??=</b> would never have been executed:',

    // div29 example
    zeroAssignmentOperatorExample4: 'let userAge = 18;<br><br>userAge ??= alert("won\'t work");<br>Usage ??= 21;<br>userAge ??= null;<br><br>alert(usage) <i>// still 18</i>',

    // div30
    next: '<b><a href="#" onclick="quickLink(); JSTheamEleven()">JS topic 11</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamThirteen()">JS topic 13</a></b> - the next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicTwelveRus = {
    // div1
    zeroMergeOperators1: '<h3>Оператор нулевого слияния (??)</h3>Оператор нулевого слияния представляет собой два вопросительных знака <b>??</b>.<br><br>Так как он обрабатывает <b>null</b> и <b>undefined</b> одинаковым образом, то для этой статьи мы введём специальный термин. Для краткости будем говорить, что значение «определено», если оно не равняется ни <b>null</b>, ни <b>undefined</b>.<br><br>Результат выражения <b>a ?? b</b> будет следующим: <ul> <li>если <b>a</b> определено, то <b>a</b>,</li> <li>если <b>a</b> не определено, то <b>b</b>.</li> </ul>Иначе говоря, оператор <b>??</b> возвращает первый аргумент, если он не <b>null/undefined</b>, иначе второй.<br><br>Оператор нулевого слияния не является чем-то принципиально новым. Это всего лишь удобный синтаксис, как из двух значений получить одно, которое «определено».<br><br>Вот как можно переписать выражение <b>result = a ?? b</b>, используя уже знакомые нам операторы:',

    // div2 example
    zeroMergeOperatorsExample1: 'result = (a !== null && a !== undefined) ? a : b;',

    // div3
    zeroMergeOperators2: 'Теперь должно быть абсолютно ясно, что делает <b>??</b>. Давайте посмотрим, где это может быть полезно.<br><br>Как правило, оператор <b>??</b> нужен для того, чтобы задать значение по умолчанию для потенциально неопределённой переменной.<br><br>Например, здесь мы отобразим <b>user</b>, если её значение не <b>null/undefined</b>, в противном случае <b>Аноним</b>:',

    // div4 example
    zeroMergeOperatorsExample2: 'let user;<br><br>alert(user ?? "Аноним"); <i>// Аноним (user не существует)</i>',

    // div5
    zeroMergeOperators3: 'А вот пример, когда user присвоено значение:',

    // div6 example
    zeroMergeOperatorsExample3: 'let user = "Иван";<br><br>alert(user ?? "Аноним"); <i>// Иван (user существует)</i>',

    // div7
    zeroMergeOperators4: 'Кроме этого, можно записать последовательность из операторов <b>??</b>, чтобы получить первое значение из списка, которое не является <b>null/undefined</b>.<br><br>Допустим, у нас есть данные пользователя в переменных <b>firstName</b>, <b>lastName</b> или <b>nickName</b>. Все они могут не существовать, если пользователь решил не вводить соответствующие значение.<br><br>Мы хотели бы отобразить имя пользователя, используя одну из этих переменных, или показать «Аноним», если все они <b>null/undefined</b>.<br><br>Для этого воспользуемся оператором <b>??</b>:',

    // div8 example
    zeroMergeOperatorsExample4: 'let firstName = null;<br>let lastName = null;<br><br>let nickName = "Суперкодер";<br><br><i>// показывает первое значение, которое определено:</i><br>alert(firstName ?? lastName ?? nickName ?? "Аноним"); <i>// Суперкодер</i>',

    // div9
    Comparison1: '<h3>Сравнение с ||</h3>Оператор ИЛИ <b>||</b> можно использовать для того же, что и <b>??</b>, как это было показано в предыдущей главе.<br><br>Например, если в приведённом выше коде заменить <b>??</b> на <b>||</b>, то будет тот же самый результат:',

    // div10 example
    ComparisonExample1: 'let firstName = null;<br>let lastName = null;<br><br>let nickName = "Суперкодер";<br><br><i>// показывает первое истинное значение:</i><br><br>alert(firstName || lastName || nickName || "Аноним"); <i>// Суперкодер</i>',

    // div11
    Comparison2: 'Исторически сложилось так, что оператор ИЛИ <b>||</b> появился первым. Он существует с самого начала в JavaScript, поэтому разработчики долгое время использовали его для таких целей.<br><br>С другой стороны, сравнительно недавно в язык был добавлен оператор нулевого слияния <b>??</b> – как раз потому, что многие были недовольны оператором <b>||</b>.<br><br>Важное различие между ними заключается в том, что: <ul> <li><b>||</b> возвращает первое <b>истинное</b> значение.</li> <li><b>??</b> возвращает первое <b>определённое</b> значение.</li> </ul>Проще говоря, оператор <b>||</b> не различает <b>false</b>, <b>0</b>, пустую строку <b>""</b> и <b>null/undefined</b>. Для него они все одинаковы, т.е. являются ложными значениями. Если первым аргументом для оператора <b>||</b> будет любое из перечисленных значений, то в качестве результата мы получим второй аргумент.<br><br>Однако на практике часто требуется использовать значение по умолчанию только тогда, когда переменная является <b>null/undefined</b>. Ведь именно тогда значение действительно неизвестно/не определено.<br><br>Рассмотрим следующий пример:',

    // div12 example
    ComparisonExample2: 'let height = 0;<br><br>alert(height || 100); <i>// 100</i><br>alert(height ?? 100); <i>// 0</i>',

    // div13
    Comparison3: '<ul> <li><b>height || 100</b> проверяет <b>height</b> на ложное значение, оно равно <b>0</b>, да, ложное. <ul> <li>поэтому результатом <b>||</b> является второй аргумент, т.е. <b>100</b>.</li> </ul> </li> <li><b>height ?? 100</b> проверяет, что переменная <b>height</b> содержит <b>null/undefined</b>, а поскольку это не так, <ul> <li>то результатом является сама переменная <b>height</b>, т.е. <b>0</b>.</li> </ul> </li> </ul>На практике нулевая высота часто является вполне нормальным значением, которое не следует заменять значением по умолчанию. Таким образом, ?? здесь как раз работает так, как нужно.',

    // div14
    priority1: '<h3>Приоритет</h3>Приоритет оператора <b>??</b> такой же, как и у <b>||</b>. Они оба равны <b>3</b> в таблице на MDN.<br><br>Это означает, что, как и <b>||</b>, оператор нулевого слияния <b>??</b> вычисляется до <b>=</b> и <b>?</b>, но после большинства других операций, таких как <b>+</b>, <b>*</b>.<br><br>Так что, в выражениях такого вида понадобятся скобки:',

    // div15 example
    priorityExample1: 'let height = null;<br>let width = null;<br><br><i>// важно: используйте круглые скобки</i><br>let area = (height ?? 100) * (width ?? 50);<br><br>alert(area); <i>// 5000</i>',

    // div16
    priority2: 'Иначе, если опустить скобки, оператор <b>*</b> выполнится первым, так как у него приоритет выше, чем у <b>??</b>, и это приведёт к неправильным результатам.',

    // div17 example
    priorityExample2: '<i>// без скобок</i><br>let area = height ?? 100 * width ?? 50;<br><br><i>// ...сработает вот так (совсем не как нам нужно):</i><br>let area = height ?? (100 * width) ?? 50;',

    // div18
    usage1: '<h3>Использование ?? вместе с && или ||</h3>По соображениям безопасности JavaScript запрещает использование оператора <b>??</b> вместе с <b>&&</b> и <b>||</b>, если приоритет явно не указан при помощи круглых скобок.<br><br>Выполнение следующего кода приведёт к синтаксической ошибке:',

    // div19 example
    usageExample1: 'let x = 1 && 2 ?? 3; <i>// Синтаксическая ошибка</i>',

    // div20
    usage2: 'Это, безусловно, спорное ограничение было добавлено в спецификацию языка с целью избежать программные ошибки, когда люди начнут переходить с <b>||</b> на <b>??</b>.<br><br>Используйте скобки, чтобы обойти это ограничение:',

    // div21 example
    usageExample2: 'let x = (1 && 2) ?? 3; <i>// Работает без ошибок</i><br><br>alert(x); <i>// 2</i>',

    // div22
    zeroAssignmentOperator1: '<h3>Оператор нулевого присваивания (??=)</h3>Предположим, нам необходимо проверить, равна ли переменная <b>null</b> или <b>undefined</b>, и если это так — присвоить этой переменной какое-либо другое значение.<br><br>Вот как мы сделали бы это сейчас:',

    // div23 example
    zeroAssignmentOperatorExample1: 'let userAge = null;<br><br>if (userAge === null || userAge === undefined) {<br> &nbsp&nbsp&nbsp&nbsp   userAge = 18;<br>}',

    // div24
    zeroAssignmentOperator2: 'Выглядит громоздко, правда? Существует оператор, более подходящий для подобных задач. Вот его синтаксис:',

    // div25 example
    zeroAssignmentOperatorExample2: 'x ??= y',

    // div26
    zeroAssignmentOperator3: 'Оператор <b>??=</b> присвоит <b>x</b> значение <b>y</b> только в том случае, если <b>x</b> не определено (<b>null/undefined</b>).<br><br>Теперь попробуем переписать уже знакомый нам фрагмент кода используя новый оператор:',

    // div27 example
    zeroAssignmentOperatorExample3: 'let userAge = null;<br><br>userAge ??= 18;<br><br>alert(userAge) <i>// 18</i>',

    // div28
    zeroAssignmentOperator4: 'Обратите внимание: если бы <b>userAge</b> не был равен <b>null/undefined</b>, то выражение справа от <b>??=</b> никогда бы не выполнилось:',

    // div29 example
    zeroAssignmentOperatorExample4: 'let userAge = 18;<br><br>userAge ??= alert("не сработает");<br>userAge ??= 21;<br>userAge ??= null;<br><br>alert(userAge) <i>// по-прежнему 18</i>',

    // div30
    next: '<b><a href="#" onclick="quickLink(); JSTheamEleven()">JS topic 11</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamThirteen()">JS topic 13</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Тринадцатая тема.
let JSTopicThirteenEng = {
    // div1
    cycles: '<h3>while and for cycles</h3>When writing scripts, the task often arises to do the same type of action many times.<br><br>For example, to remove products from the list one by one. Or just iterate through all the numbers from <b>1</b> to <b>10</b> and execute the same code for each.<br><br>Cycles are provided for repeated repetition of one section of the code.',

    // div2
    cyclesWile1: '<h3>Loop "while"</h3>Loop <b>while</b> has the following syntax:',

    // div3 example
    cyclesWileExample1: 'while (condition) {<br> &nbsp&nbsp&nbsp&nbsp <i>// code</i><br>&nbsp&nbsp&nbsp&nbsp<i>// also called "loop body"</i><br>}',

    // div4
    cyclesWile2: 'The code from the loop body is executed as long as condition <b>condition</b> is true.<br><br>For example, the loop below outputs <b>i</b> until <b>i <3</b>:',

    // div5 example
    cyclesWileExample2: 'let i = 0;<br>while (i < 3) { <i>// outputs 0, then 1, then 2</i><br> &nbsp&nbsp&nbsp&nbsp alert(i);<br> &nbsp&nbsp&nbsp&nbsp i++;<br>}',

    // div6
    cyclesWile3: 'One execution of the loop body is scientifically called <b>iteration</b>. The loop in the example above performs three iterations.<br><br>If the string <b>i++</b> was missing in the example above, then the cycle would repeat (in theory) forever. In practice, of course, the browser will not allow this to happen, it will give the user the opportunity to stop the "suspended" script, and JavaScript on the server side will have to "kill" the process.<br><br>Any expression or variable can be a loop condition, not just a comparison: the <b>while</b> condition is evaluated and converted to a boolean value.For example, <b>while(i)</b> is a shorter version of <b>while (i != 0)</b>:',

    // div7 example
    cyclesWileExample3: 'let i = 3;<br>while(i) { <i>// when i is equal to 0, the condition will become false and the loop will stop</i><br>  &nbsp&nbsp&nbsp&nbsp alert(i);<br> &nbsp&nbsp&nbsp&nbsp i--;<br>}',

    // div8
    cyclesDoWile1: '<h3>Loop "do...while"</h3>The condition check can be placed under the body of the loop using the special syntax <b>do..while</b>:',

    // div9 example
    cyclesDoWileExample1: 'do {<br> &nbsp&nbsp&nbsp&nbsp <i> // loop body</i><br>} while (condition);',

    // div10
    cyclesDoWile2: 'The loop will first execute the body, and then check the condition <b>condition</b>, and as long as its value is <b>true</b>, it will be executed again and again.',

    // div11
    cyclesDoWileExample2: 'let i = 0;<br>do {<br> &nbsp&nbsp&nbsp&nbsp alert( i );<br> &nbsp&nbsp&nbsp&nbsp i++;<br> } while (i < 3);',

    // div12
    cyclesDoWile3: 'This form of syntax is justified if you want the loop body to execute <b>at least once</b> even if the condition is false. In practice, the form with a precondition is more often used: <b>while(…) {…}</b>.',

    // div13
    cyclesFor1: '<h3>The "for" loop</h3>A more complex but most common loop is the <b>for</b> loop.<br><br>It looks like this:',

    // div14 example
    cyclesForExample1: 'for (start; condition; step) {<br> &nbsp&nbsp&nbsp&nbsp <i> // ... cycle body ...</i><br>}',

    // div15
    cyclesFor2: 'Let\'s understand what each part means with an example. The loop below executes <b>alert(i)</b> for <b>i</b> from <b>0</b> up to (but not including) <b>3</b>:',

    // div16 example
    cyclesForExample2: 'for (let i = 0; i < 3; i++) { <i>// prints 0 then 1 then 2</i><br> &nbsp&nbsp&nbsp&nbsp alert(i);<br>}',

    // div17
    cyclesFor3: 'Let\'s take a closer look at the <b>for</b> construct: <br><br> Start (<b>let i = 0</b>): executed once when entering the loop<br><br>Condition (<b>i < 3</b>): checked before each iteration of the loop. If it evaluates to <b>false</b>, the loop will stop.<br><br>Body (<b>alert(i)</b>): Executes over and over while the condition evaluates to <b>true</b>.<br><br>Step (<b>i++</b>): executed after the loop body on each iteration before the condition is checked.',

    // div18
    cyclesFor4: 'In general, the cycle algorithm looks like this:',

    // div19 example
    cyclesForExample3: 'Run start<br>→ (If condition == true → Run body, Run step)<br>→ (If condition == true → Run body, Run step)<br>→ (If condition == true → Run body, Run step)<br>→ ...',

    // div20
    cyclesFor5: 'That is, <b>beginning</b> is executed once, and then each iteration consists of checking the <b>condition</b>, after which the <b>body</b> and <b>step </b>.<br><br>If the topic of loops is new to you, it might be helpful to go back to the example above and reproduce it on a piece of paper, step by step.<br><br>This is exactly what happens in our case:',

    // div21 example
    cyclesForExample4: '<i>// for (let i = 0; i < 3; i++) alert(i)</i><br><br><i>// Execute start</i><br>let i = 0;<br><i>// If condition == true → Run body, Run step</i><br>if (i < 3) { alert(i); i++ }<br><i>// If condition == true → Run body, Run step</i><br>if (i < 3) { alert(i); i++ }<br><i>// If condition == true → Run body, Run step</i><br>if (i < 3) { alert(i); i++ }<br><i>// ...end because now i == 3</i>',

    // div22
    skippingPartsFor1: '<h3>Skipping "for" parts</h3>Any part of <b>for</b> can be skipped.<br><br>For example, we can skip <b>beginning</b> if we don\'t have to do anything before starting the loop.',

    // div23 example
    skippingPartsForExample1: 'let i = 0; <i>// we already have i declared and assigned a value</i><br><br>for (; i < 3; i++) { <i>// no need for "beginning"</i><br> &nbsp&nbsp&nbsp&nbsp alert( i ); <i>// 0, 1, 2</i><br>}',

    // div24
    skippingPartsFor2: 'You can also skip <b>step</b>:',

    // div25 example
    skippingPartsForExample2: 'let i = 0;<br><br>for (; i < 3;) {<br> &nbsp&nbsp&nbsp&nbsp alert( i++ );<br>}',

    // div26
    skippingPartsFor3: 'This will make the loop look like <b>while (i < 3)</b>.<br><br>Or you can remove everything altogether and get an infinite loop:',

    // div27 example
    skippingPartsForExample3: 'for (;;) {<br> &nbsp&nbsp&nbsp&nbsp <i> // will run forever</i><br>}',

    // div28
    skippingPartsFor4: 'In this case, the semicolons <b>;</b> must be present, otherwise there will be a syntax error.',

    // div29
    interruptingTheBreakCycle1: '<h3>Breaking the loop: \'break\'</h3>Normally, the loop is terminated when the condition evaluates to <b>false</b>.<br><br>But we can break the loop at any time with a special <b>break</b> directives.<br><br>For example, the following code sums the input numbers as long as the visitor enters them, and then prints:',

    // div30 example
    interruptingTheBreakCycleExample1: 'let sum = 0;<br><br>while (true) {<br><br> &nbsp&nbsp&nbsp&nbsp let value = +prompt("Enter a number", \'\');<br><br> &nbsp&nbsp&nbsp&nbsp if (!value) break; <i>// (*)</i><br><br> &nbsp&nbsp&nbsp&nbsp sum += value;<br>}<br><br>alert( \'Sum: \' + sum );',

    // div31
    interruptingTheBreakCycle2: 'The <b>break</b> directive on line (<b>*</b>) completely breaks the loop and transfers control to the line after its body, i.e. to <b>alert</b>.<br><br>In general, the combination "infinite loop + <b>break</b>" is a great thing for those situations where the condition that needs to be interrupted is not at the beginning or end of the loop, but in the middle or even in several places of his body.',

    // div32
    continue1: '<h3>Go to the next iteration: continue</h3>The <b>continue</b> directive is a "light version" <b>break</b>. When executed, the loop does not break, but goes to the next iteration (if the condition is still <b>true</b>).<br><br>It is used if it is clear that there is nothing more to do on the current iteration of the loop.<br><br>For example, the loop below uses <b>continue</b> to output only odd values:',

    // div33 example
    continueExample1: 'for (let i = 0; i < 10; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp <i> // if true, skip the rest of the loop body</i><br> &nbsp&nbsp&nbsp&nbsp if (i % 2 == 0) continue;<br><br> &nbsp&nbsp&nbsp&nbsp alert(i); <i>// 1 then 3, 5, 7, 9</i>',

    // div34
    continue2: 'For even <b>i</b> values, the <b>continue</b> directive stops executing the loop body and transfers control to the next <b>for</b> iteration (with the next number). Thus, <b>alert</b> is called only for odd values.<br><br>A loop that processes only odd values might look like this:',

    // div35 example
    continueExample2: 'for (let i = 0; i < 10; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp if (i % 2) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( i );<br> &nbsp&nbsp&nbsp&nbsp } <br><br>}',

    // div36
    continue3: 'From a technical point of view, it is identical. Indeed, instead of <b>continue</b>, you can simply wrap the actions in a <b>if</b> block.<br><br>However, we got an additional level of curly braces nesting. If the code inside <b>if</b> is longer, then this worsens readability, unlike the variant with <b>continue</b>.',

    // div37
    breakContinue1: '<h3>Cannot use break/continue to the right of the \'?\' operator</h3>Please note that these syntactic constructs are not expressions and cannot be used with the ternary operator <b>?</b>. In particular, using directives such as <b>break/continue</b> will cause an error.',

    // div38 example
    breakContinueExample1: '(i > 5) ? alert(i) : continue; <i>// continue here will result in an error</i>',
   
    // div39
    tags1: '<h3>Labels for break/continue</h3>Sometimes you need to exit several levels of the loop at the same time.<br><br>For example, in the code below we loop through <b>i</b> and <b>j</b>, requesting with <b>prompt</b> the coordinates of (<b>i</b>, <b>j</b>) from (<b>0</b> ,<b>0</b>) to (<b>2</b>,<b>2</b>):',

    // div40 example
    tagsExample1: 'for (let i = 0; i < 3; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp for (let j = 0; j < 3; j++) {<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp let input = prompt (`Value at coordinates (${i},${j})`, \'\');<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <i>// What if we want to jump to Done (below) right from here? </i><br> &nbsp&nbsp&nbsp&nbsp }<br>}<br><br>alert(\'Done!\');',

    // div41
    tags2: 'We need a way to stop execution if the user cancels the input.<br><br>A normal <b>break</b> after <b>input</b> will just break the inner loop, but that\'s not enough. You can achieve the desired behavior using labels.<br><br>A label has the form of an identifier followed by a colon before the loop:',

    // div42 example
    tagsExample2: 'labelName: for (...) {<br> &nbsp&nbsp&nbsp&nbsp <i>...</i><br>}',

    // div43
    tags3: 'The call to <b>break <labelName></b> in the loop below looks for the nearest outer loop with this label and jumps to its end.',

    // div44 example
    tagsExample3: 'outer: for (let i = 0; i < 3; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp for (let j = 0; j < 3; j++) {<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp let input = prompt(`Value at coordinates (${i},${j})`, \'\');<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <i>// if empty string or Cancel, exit both loops </i><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if (!input) break outer; <b>// (*)</b><br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <i>// do something with the values...</i><br> &nbsp&nbsp&nbsp&nbsp }<br>}<br> <br>alert(\'Done!\');',

    // div45
    tags4: 'In the example above, this means that calling <b>break outer</b> will break the outer loop up to the label named <b>outer</b>.<br><br>Thus, control will jump from the line labeled with <b>(*)</b>, to <b>alert(\'Done!\')</b>.<br><br>You can place the label on a separate line:',

    // div46 example
    tagsExample4: 'outer:<br>for (let i = 0; i < 3; i++) { ... }',

    // div47
    tags5: 'The <b>continue</b> directive can also be used with a tag. In this case, control will go to the next iteration of the loop with the label.',

    // div48
    next: '<b><a href="#" onclick="quickLink(); JSTheamTwelve()">JS topic 12</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicThirteenRus = {
    // div1
    cycles: '<h3>Циклы while и for</h3>При написании скриптов зачастую встаёт задача сделать однотипное действие много раз.<br><br>Например, вывести товары из списка один за другим. Или просто перебрать все числа от <b>1</b> до <b>10</b> и для каждого выполнить одинаковый код.<br><br>Для многократного повторения одного участка кода предусмотрены циклы.',

    // div2
    cyclesWile1: '<h3>Цикл «while»</h3>Цикл <b>while</b> имеет следующий синтаксис:',

    // div3 example
    cyclesWileExample1: 'while (condition) {<br> &nbsp&nbsp&nbsp&nbsp <i>// код</i><br> &nbsp&nbsp&nbsp&nbsp <i>// также называемый "телом цикла"</i><br>}',

    // div4
    cyclesWile2: 'Код из тела цикла выполняется, пока условие <b>condition</b> истинно.<br><br>Например, цикл ниже выводит <b>i</b>, пока <b>i < 3</b>:',

    // div5 example
    cyclesWileExample2: 'let i = 0;<br>while (i < 3) { <i>// выводит 0, затем 1, затем 2</i><br> &nbsp&nbsp&nbsp&nbsp   alert( i );<br> &nbsp&nbsp&nbsp&nbsp  i++;<br>}',

    // div6
    cyclesWile3: 'Одно выполнение тела цикла по-научному называется <b>итерация</b>. Цикл в примере выше совершает три итерации.<br><br>Если бы строка <b>i++</b> отсутствовала в примере выше, то цикл бы повторялся (в теории) вечно. На практике, конечно, браузер не позволит такому случиться, он предоставит пользователю возможность остановить «подвисший» скрипт, а JavaScript на стороне сервера придётся «убить» процесс.<br><br>Любое выражение или переменная может быть условием цикла, а не только сравнение: условие <b>while</b> вычисляется и преобразуется в логическое значение.Например, <b>while (i)</b> – более краткий вариант <b>while (i != 0)</b>:',

    // div7 example
    cyclesWileExample3: 'let i = 3;<br>while (i) { <i>// когда i будет равно 0, условие станет ложным, и цикл остановится</i><br> &nbsp&nbsp&nbsp&nbsp   alert( i );<br> &nbsp&nbsp&nbsp&nbsp   i--;<br>}',

    // div8
    cyclesDoWile1: '<h3>Цикл «do…while»</h3>Проверку условия можно разместить под телом цикла, используя специальный синтаксис <b>do..while</b>:',

    // div9 example
    cyclesDoWileExample1: 'do {<br> &nbsp&nbsp&nbsp&nbsp <i>  // тело цикла</i><br>} while (condition);',

    // div10
    cyclesDoWile2: 'Цикл сначала выполнит тело, а затем проверит условие <b>condition</b>, и пока его значение равно <b>true</b>, он будет выполняться снова и снова.',

    // div11
    cyclesDoWileExample2: 'let i = 0;<br>do {<br> &nbsp&nbsp&nbsp&nbsp   alert( i );<br> &nbsp&nbsp&nbsp&nbsp   i++;<br> } while (i < 3);',

    // div12
    cyclesDoWile3: 'Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось <b>хотя бы один раз</b>, даже если условие окажется ложным. На практике чаще используется форма с предусловием: <b>while(…) {…}</b>.',

    // div13
    cyclesFor1: '<h3>Цикл «for»</h3>Более сложный, но при этом самый распространённый цикл — цикл <b>for</b>.<br><br>Выглядит он так:',

    // div14 example
    cyclesForExample1: 'for (начало; условие; шаг) {<br> &nbsp&nbsp&nbsp&nbsp <i>  // ... тело цикла ...</i><br>}',

    // div15
    cyclesFor2: 'Давайте разберёмся, что означает каждая часть, на примере. Цикл ниже выполняет <b>alert(i)</b> для <b>i</b> от <b>0</b> до (но не включая) <b>3</b>:',

    // div16 example
    cyclesForExample2: 'for (let i = 0; i < 3; i++) { <i>// выведет 0, затем 1, затем 2</i><br> &nbsp&nbsp&nbsp&nbsp   alert(i);<br>}',

    // div17
    cyclesFor3: 'Рассмотрим конструкцию <b>for</b> подробней: <br><br> Начало (<b>let i = 0</b>): выполняется один раз при входе в цикл<br><br>Условие (<b>i < 3</b>): проверяется перед каждой итерацией цикла. Если оно вычислится в <b>false</b>, цикл остановится.<br><br>Тело (<b>alert(i)</b>): выполняется снова и снова, пока условие вычисляется в <b>true</b>.<br><br>Шаг (<b>i++</b>): выполняется после тела цикла на каждой итерации перед проверкой условия.',

    // div18
    cyclesFor4: 'В целом, алгоритм работы цикла выглядит следующим образом:',

    // div19 example
    cyclesForExample3: 'Выполнить начало<br>→ (Если условие == true → Выполнить тело, Выполнить шаг)<br>→ (Если условие == true → Выполнить тело, Выполнить шаг)<br>→ (Если условие == true → Выполнить тело, Выполнить шаг)<br>→ ...',

    // div20
    cyclesFor5: 'То есть, <b>начало</b> выполняется один раз, а затем каждая итерация заключается в проверке <b>условия</b>, после которой выполняется <b>тело</b> и <b>шаг</b>.<br><br>Если тема циклов для вас нова, может быть полезным вернуться к примеру выше и воспроизвести его работу на листе бумаги, шаг за шагом.<br><br>Вот в точности то, что происходит в нашем случае:',

    // div21 example
    cyclesForExample4: '<i>// for (let i = 0; i < 3; i++) alert(i)</i><br><br><i>// Выполнить начало</i><br>let i = 0;<br><i>// Если условие == true → Выполнить тело, Выполнить шаг</i><br>if (i < 3) { alert(i); i++ }<br><i>// Если условие == true → Выполнить тело, Выполнить шаг</i><br>if (i < 3) { alert(i); i++ }<br><i>// Если условие == true → Выполнить тело, Выполнить шаг</i><br>if (i < 3) { alert(i); i++ }<br><i>// ...конец, потому что теперь i == 3</i>',

    // div22
    skippingPartsFor1: '<h3>Пропуск частей «for»</h3>Любая часть <b>for</b> может быть пропущена.<br><br>Для примера, мы можем пропустить <b>начало</b> если нам ничего не нужно делать перед стартом цикла.',

    // div23 example
    skippingPartsForExample1: 'let i = 0; <i>// мы уже имеем объявленную i с присвоенным значением</i><br><br>for (; i < 3; i++) { <i>// нет необходимости в "начале"</i><br> &nbsp&nbsp&nbsp&nbsp   alert( i ); <i>// 0, 1, 2</i><br>}',

    // div24
    skippingPartsFor2: 'Можно убрать и <b>шаг</b>:',

    // div25 example
    skippingPartsForExample2: 'let i = 0;<br><br>for (; i < 3;) {<br> &nbsp&nbsp&nbsp&nbsp   alert( i++ );<br>}',

    // div26
    skippingPartsFor3: 'Это сделает цикл аналогичным <b>while (i < 3)</b>.<br><br>А можно и вообще убрать всё, получив бесконечный цикл:',

    // div27 example
    skippingPartsForExample3: 'for (;;) {<br> &nbsp&nbsp&nbsp&nbsp <i>  // будет выполняться вечно</i><br>}',

    // div28
    skippingPartsFor4: 'При этом сами точки с запятой <b>;</b> обязательно должны присутствовать, иначе будет ошибка синтаксиса.',

    // div29
    interruptingTheBreakCycle1: '<h3>Прерывание цикла: «break»</h3>Обычно цикл завершается при вычислении условия в <b>false</b>.<br><br>Но мы можем выйти из цикла в любой момент с помощью специальной директивы <b>break</b>.<br><br>Например, следующий код подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит, а затем – выдаёт:',

    // div30 example
    interruptingTheBreakCycleExample1: 'let sum = 0;<br><br>while (true) {<br><br> &nbsp&nbsp&nbsp&nbsp   let value = +prompt("Введите число", \'\');<br><br> &nbsp&nbsp&nbsp&nbsp if (!value) break; <i>// (*)</i><br><br> &nbsp&nbsp&nbsp&nbsp sum += value;<br>}<br><br>alert( \'Сумма: \' + sum );',

    // div31
    interruptingTheBreakCycle2: 'Директива <b>break</b> в строке (<b>*</b>) полностью прекращает выполнение цикла и передаёт управление на строку за его телом, то есть на <b>alert</b>.<br><br>Вообще, сочетание «бесконечный цикл + <b>break</b>» – отличная штука для тех ситуаций, когда условие, по которому нужно прерваться, находится не в начале или конце цикла, а посередине или даже в нескольких местах его тела.',

    // div32
    continue1: '<h3>Переход к следующей итерации: continue</h3>Директива <b>continue</b> – «облегчённая версия» <b>break</b>. При её выполнении цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно <b>true</b>).<br><br>Её используют, если понятно, что на текущем повторе цикла делать больше нечего.<br><br>Например, цикл ниже использует <b>continue</b>, чтобы выводить только нечётные значения:',

    // div33 example
    continueExample1: 'for (let i = 0; i < 10; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp <i>  // если true, пропустить оставшуюся часть тела цикла</i><br> &nbsp&nbsp&nbsp&nbsp   if (i % 2 == 0) continue;<br><br> &nbsp&nbsp&nbsp&nbsp   alert(i); <i>// 1, затем 3, 5, 7, 9</i>',

    // div34
    continue2: 'Для чётных значений <b>i</b>, директива <b>continue</b> прекращает выполнение тела цикла и передаёт управление на следующую итерацию <b>for</b> (со следующим числом). Таким образом <b>alert</b> вызывается только для нечётных значений.<br><br>Цикл, который обрабатывает только нечётные значения, мог бы выглядеть так:',

    // div35 example
    continueExample2: 'for (let i = 0; i < 10; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp   if (i % 2) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( i );<br> &nbsp&nbsp&nbsp&nbsp } <br><br>}',

    // div36
    continue3: 'С технической точки зрения он полностью идентичен. Действительно, вместо <b>continue</b> можно просто завернуть действия в блок <b>if</b>.<br><br>Однако мы получили дополнительный уровень вложенности фигурных скобок. Если код внутри <b>if</b> более длинный, то это ухудшает читаемость, в отличие от варианта с <b>continue</b>.',

    // div37
    breakContinue1: '<h3>Нельзя использовать break/continue справа от оператора „?“</h3>Обратите внимание, что эти синтаксические конструкции не являются выражениями и не могут быть использованы с тернарным оператором <b>?</b>. В частности, использование таких директив, как <b>break/continue</b>, вызовет ошибку.',

    // div38 example
    breakContinueExample1: '(i > 5) ? alert(i) : continue; <i>// continue здесь приведёт к ошибке</i>',
    
    // div39 
    tags1: '<h3>Метки для break/continue</h3>Бывает, нужно выйти одновременно из нескольких уровней цикла сразу.<br><br>Например, в коде ниже мы проходимся циклами по <b>i</b> и <b>j</b>, запрашивая с помощью <b>prompt</b> координаты (<b>i</b>, <b>j</b>) с (<b>0</b>,<b>0</b>) до (<b>2</b>,<b>2</b>):',

    // div40 example
    tagsExample1: 'for (let i = 0; i < 3; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp   for (let j = 0; j < 3; j++) {<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp let input = prompt(`Значение на координатах (${i},${j})`, \'\');<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <i>// Что если мы захотим перейти к Готово (ниже) прямо отсюда?</i><br> &nbsp&nbsp&nbsp&nbsp }<br>}<br><br>alert(\'Готово!\');',

    // div41
    tags2: 'Нам нужен способ остановить выполнение, если пользователь отменит ввод.<br><br>Обычный <b>break</b> после <b>input</b> лишь прервёт внутренний цикл, но этого недостаточно. Достичь желаемого поведения можно с помощью меток.<br><br>Метка имеет вид идентификатора с двоеточием перед циклом:',

    // div42 example
    tagsExample2: 'labelName: for (...) {<br> &nbsp&nbsp&nbsp&nbsp <i>...</i><br>}',

    // div43
    tags3: 'Вызов <b>break <labelName></b> в цикле ниже ищет ближайший внешний цикл с такой меткой и переходит в его конец.',

    // div44 example
    tagsExample3: 'outer: for (let i = 0; i < 3; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp   for (let j = 0; j < 3; j++) {<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp let input = prompt(`Значение на координатах (${i},${j})`, \'\');<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <i>// если пустая строка или Отмена, то выйти из обоих циклов</i><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if (!input) break outer; <b>// (*)</b><br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <i>// сделать что-нибудь со значениями...</i><br> &nbsp&nbsp&nbsp&nbsp }<br>}<br><br>alert(\'Готово!\');',

    // div45
    tags4: 'В примере выше это означает, что вызовом <b>break outer</b> будет разорван внешний цикл до метки с именем <b>outer</b>.<br><br>Таким образом управление перейдёт со строки, помеченной <b>(*)</b>, к <b>alert(\'Готово!\')</b>.<br><br>Можно размещать метку на отдельной строке:',

    // div46 example
    tagsExample4: 'outer:<br>for (let i = 0; i < 3; i++) { ... }',

    // div47
    tags5: 'Директива <b>continue</b> также может быть использована с меткой. В этом случае управление перейдёт на следующую итерацию цикла с меткой.',

    // div48
    next: '<b><a href="#" onclick="quickLink(); JSTheamTwelve()">JS topic 12</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Четырнадцатая тема.
let JSTopicFourteenEng = {
    // div1
    switch: '<h3>Construction "switch"</h3>Construction <b>switch</b> replaces several <b>if</b> at once.<br><br>It is a more visual way to compare an expression with several options at once.',

    //div2
    syntax1: '<h3>Syntax</h3>The <b>switch</b> construct has one or more <b>case</b> blocks and an optional <b>default</b> block.',

    // div3 example
    syntaxExample1: 'switch(x) {<br> &nbsp&nbsp&nbsp&nbsp   case \'value1\':  <i>// if (x === \'value1\')</i> <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp ...<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp [break]<br><br> &nbsp&nbsp&nbsp&nbsp case \'value2\':  <i>// if (x === \'value2\')</i><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp ... <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp [break]<br><br> &nbsp&nbsp&nbsp&nbsp default: <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp ... <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp [break]<br>}',

    // div4
    syntax2: '<ul> <li>The variable <b>x</b> is checked for strict equality to the first value <b>value1</b>, then the second <b>value2</b> and so on.</li> <li>If a match is established - <b>switch</b> starts executing from the corresponding <b>case</b> directive and further, until the nearest <b>break</b> (or until the end of the <b>switch</b>).</li> <li>If none of the <b>case</b> matches, the <b>default</b> variant is executed (if any).</li> </ul> ',

    // div5
    syntax3: '<h3>Example of work</h3>Example of using <b>switch</b> (code that worked is highlighted):',

    // div6 example
    syntaxExample2: 'let a = 2 + 2;<br><br>switch (a) {<br> &nbsp&nbsp&nbsp&nbsp case 3:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Not enough\' );<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp break;<br> &nbsp&nbsp&nbsp&nbsp <b>case 4:</b><br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <b>alert( \'To the point!\' );</b><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <b>break;</b> <br> &nbsp&nbsp&nbsp&nbsp case 5:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Brute force\' );<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( "No such values" );<br>}',

    // div7
    syntax4: 'Here <b>switch</b> will sequentially compare <b>a</b> against all cases in <b>case</b>.<br><br>First <b>3</b>, then - since there is no match - <b>4</b>. A match is found, this variant will be executed, from the line <b>alert( \'To the point!\' )</b> and further, to the nearest <b>break</b>, which will abort the execution.<br><br>If there is no <b>break</b>, then execution will go down the next <b>case</b>, while the rest of the checks are ignored.<br><br>Example without <b>break</b>: ',

    // div8 example
    syntaxExample3: 'let a = 2 + 2;<br><br>switch (a) {<br> &nbsp&nbsp&nbsp&nbsp case 3:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'not enough\' );<br> &nbsp&nbsp&nbsp&nbsp <b>case 4:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Exactly!\' );<br> &nbsp&nbsp&nbsp&nbsp case 5:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Bust\' );<br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( "No such values" );</b><br>}',

    // div9
    syntax5: 'In the example above, three <b>alert</b>: will be executed in sequence',

    // div10 example
    syntaxExample4: 'alert( \'Fixed!\' );<br>alert( \'Search\' );<br>alert( "No such values" );',

    // div11
    argument1: '<h3>Any expression can be an argument to switch/case</h3>Both <b>switch</b> and <b>case</b> accept any expression as an argument.',

    // div12 example
    argumentExample1: 'let a = "1";<br>let b = 0;<br><br>switch (+a) {<br> &nbsp&nbsp&nbsp&nbsp case b + 1:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Run, t .because the value of +a is 1, which is exactly b+1");<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("That\'s not you full");< br> }',

    // div13
    argument2: 'In this example, the expression <b>+a</b> evaluates to <b>1</b>, which is the same as the expression <b>b + 1</b> in <b>case</b> , and therefore the code in this block will be executed.',

    // div14
    grouping1: '<h3>Group "case"</h3>Several <b>case</b> variants using the same code can be grouped.<br><br>For example, let\'s run the same code for <b>case 3</b> and <b>case 5</b> by grouping them:',

    // div15 example
    groupingExample1: 'let a = 3;<br><br>switch (a) {<br> &nbsp&nbsp&nbsp&nbsp case 4:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(\'Right!\');<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br> <br> &nbsp&nbsp&nbsp&nbsp case 3: <i>// (*) group both cases</i><br> &nbsp&nbsp&nbsp&nbsp case 5: <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(\'Wrong!\');<br> &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp alert("Would you like to take a math class?");<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(\'The result looks weird. Honestly.\');<br> }',

    // div16
    grouping2: 'Now both <b>3</b> and <b>5</b> output the same message.<br><br>The ability to group <b>case</b> is a side effect of how <b>switch/case</b> works without <b>break</b>. Here the execution of case 3 begins with the line <b>(*)</b> and continues to <b>case 5</b> because there is no <b>break</b>.',

    // div17
    typeMatters1: '<h3>Type matters</h3>Note that equality is always strict. Values must be of the same type for equality to hold.<br><br>For an example, let\'s consider the following code:',

    // div18 example
    typeMattersExample1: 'let arg = prompt("Enter the number?");<br>switch (arg) {<br> &nbsp&nbsp&nbsp&nbsp case \'0\':<br> &nbsp&nbsp&nbsp&nbsp case \'1\': <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'One or zero\' );<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp case \'2\':<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Two\' );<br>&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp case 3:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Will never be fulfilled!\' );<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'unknown value\' );<br>}',

    // div19
    typeMatters2: '<ol> <li>For <b>\'0\'</b> and <b>\'1\'</b> the first <b>alert</b>.</li> <br> <li>For <b>\'2\'</b> the second <b>alert</b>.</li> <br> <li>But for <b>3</b> , the result of executing <b>prompt</b> will be the string <b>"3"</b>, which does not match the strict equality <b>===</b> with the number <b>3</b>. So we have "dead code" in <b>case 3</b>! <b>default</b>.</li> </ol>',

    // div20
    next: '<b><a href="#" onclick="quickLink(); JSTheamThirteen()">JS topic 13</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamFifteen()">JS topic 15</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicFourteenRus = {
    // div1
    switch: '<h3>Конструкция "switch"</h3>Конструкция <b>switch</b> заменяет собой сразу несколько <b>if</b>.<br><br>Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.',

    // div2
    syntax1: '<h3>Синтаксис</h3>Конструкция <b>switch</b> имеет один или более блок <b>case</b> и необязательный блок <b>default</b>.',

    // div3 example
    syntaxExample1: 'switch(x) {<br> &nbsp&nbsp&nbsp&nbsp   case \'value1\':  <i>// if (x === \'value1\')</i> <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp ...<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp [break]<br><br> &nbsp&nbsp&nbsp&nbsp case \'value2\':  <i>// if (x === \'value2\')</i><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp ... <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp [break]<br><br> &nbsp&nbsp&nbsp&nbsp default: <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp ... <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp [break]<br>}',

    // div4
    syntax2: '<ul> <li>Переменная <b>x</b> проверяется на строгое равенство первому значению <b>value1</b>, затем второму <b>value2</b> и так далее.</li> <li>Если соответствие установлено – <b>switch</b> начинает выполняться от соответствующей директивы <b>case</b> и далее, до ближайшего <b>break</b> (или до конца <b>switch</b>).</li> <li>Если ни один <b>case</b> не совпал – выполняется (если есть) вариант <b>default</b>.</li>  </ul>',

    // div5
    syntax3: '<h3>Пример работы</h3>Пример использования <b>switch</b> (сработавший код выделен):',

    // div6 example
    syntaxExample2: 'let a = 2 + 2;<br><br>switch (a) {<br> &nbsp&nbsp&nbsp&nbsp case 3:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Маловато\' );<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br> &nbsp&nbsp&nbsp&nbsp <b>case 4:</b><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <b>alert( \'В точку!\' );</b><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp <b>break;</b><br> &nbsp&nbsp&nbsp&nbsp case 5:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Перебор\' );<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( "Нет таких значений" );<br>}',

    // div7
    syntax4: 'Здесь оператор <b>switch</b> последовательно сравнит <b>a</b> со всеми вариантами из <b>case</b>.<br><br>Сначала <b>3</b>, затем – так как нет совпадения – <b>4</b>. Совпадение найдено, будет выполнен этот вариант, со строки <b>alert( \'В точку!\' )</b> и далее, до ближайшего <b>break</b>, который прервёт выполнение.<br><br>Если <b>break</b> нет, то выполнение пойдёт ниже по следующим <b>case</b>, при этом остальные проверки игнорируются.<br><br>Пример без <b>break</b>:',

    // div8 example
    syntaxExample3: 'let a = 2 + 2;<br><br>switch (a) {<br> &nbsp&nbsp&nbsp&nbsp case 3:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Маловато\' );<br> &nbsp&nbsp&nbsp&nbsp <b>case 4:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'В точку!\' );<br> &nbsp&nbsp&nbsp&nbsp case 5:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Перебор\' );<br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( "Нет таких значений" );</b><br>}',

    // div9
    syntax5: 'В примере выше последовательно выполнятся три <b>alert</b>:',

    // div10 example
    syntaxExample4: 'alert( \'В точку!\' );<br>alert( \'Перебор\' );<br>alert( "Нет таких значений" );',

    // div11
    argument1: '<h3>Любое выражение может быть аргументом для switch/case</h3>И <b>switch</b> и <b>case</b> допускают любое выражение в качестве аргумента.',

    // div12 example
    argumentExample1: 'let a = "1";<br>let b = 0;<br><br>switch (+a) {<br> &nbsp&nbsp&nbsp&nbsp case b + 1:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Это не выполнится");<br> }',

    // div13
    argument2: 'В этом примере выражение <b>+a</b> вычисляется в <b>1</b>, что совпадает с выражением <b>b + 1</b> в <b>case</b>, и следовательно, код в этом блоке будет выполнен.',

    // div14
    grouping1: '<h3>Группировка «case»</h3>Несколько вариантов <b>case</b>, использующих один код, можно группировать.<br><br>Для примера, выполним один и тот же код для <b>case 3</b> и <b>case 5</b>, сгруппировав их:',

    // div15 example
    groupingExample1: 'let a = 3;<br><br>switch (a) {<br> &nbsp&nbsp&nbsp&nbsp case 4:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(\'Правильно!\');<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp case 3: <i>// (*) группируем оба case</i><br> &nbsp&nbsp&nbsp&nbsp case 5: <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(\'Неправильно!\');<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Может вам посетить урок математики?");<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(\'Результат выглядит странновато. Честно.\');<br>}',

    // div16
    grouping2: 'Теперь оба варианта <b>3</b> и <b>5</b> выводят одно сообщение.<br><br>Возможность группировать <b>case</b> – это побочный эффект того, как <b>switch/case</b> работает без <b>break</b>. Здесь выполнение case 3 начинается со строки <b>(*)</b> и продолжается в <b>case 5</b>, потому что отсутствует <b>break</b>.',

    // div17
    typeMatters1: '<h3>Тип имеет значение</h3>Нужно отметить, что проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство.<br><br>Для примера, давайте рассмотрим следующий код:',

    // div18 example
    typeMattersExample1: 'let arg = prompt("Введите число?");<br>switch (arg) {<br> &nbsp&nbsp&nbsp&nbsp case \'0\':<br> &nbsp&nbsp&nbsp&nbsp case \'1\': <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Один или ноль\' );<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp case \'2\':<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Два\' );<br>&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br><br> &nbsp&nbsp&nbsp&nbsp case 3:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Никогда не выполнится!\' );<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp break;<br> &nbsp&nbsp&nbsp&nbsp default:<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( \'Неизвестное значение\' );<br>}',

    // div19
    typeMatters2: '<ol> <li>Для <b>\'0\'</b> и <b>\'1\'</b> выполнится первый <b>alert</b>.</li> <br> <li>Для <b>\'2\'</b> – второй <b>alert</b>.</li> <br> <li>Но для <b>3</b>, результат выполнения <b>prompt</b> будет строка <b>"3"</b>, которая не соответствует строгому равенству <b>===</b> с числом <b>3</b>. Таким образом, мы имеем «мёртвый код» в <b>case 3</b>! Выполнится вариант <b>default</b>.</li> </ol>',

    // div20
    next: '<b><a href="#" onclick="quickLink(); JSTheamThirteen()">JS topic 13</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamFifteen()">JS topic 15</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Пятнадцатая тема.
let JSTopicFifteenEng = {
    // div1
    functions: '<h3>Functions</h3>Often we need to repeat the same action in many parts of the program.<br><br>For example, you need to beautifully display a message when greeting a visitor, when a visitor leaves the site, or somewhere else.<br><br>In order not to repeat the same code in many places, functions were invented. Functions are the basic "building blocks" of a program.<br><br>You have already seen examples of built-in functions - this is <b>alert(message)</b>, <b>prompt(message, default)</b> and <b>confirm(question)</b>. But you can create your own.',

    // div2
    functionDeclaration: '<h3>Function declaration</h3>To create functions, we can use <b>function declaration</b>.<br><br>',

    // div3 example
    functionDeclarationExample1: 'function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Hi all!\' );<br>}',

    // div4
    functionDeclaration2: 'The keyword <b>function</b> comes first, followed by the name of the function, then the list of parameters in parentheses, separated by commas (in the above example, it is empty), and finally the code of the function, also called the “function body”, inside curly braces .',

    // div5 example
    functionDeclarationExample2: 'function name(options) {<br> &nbsp&nbsp&nbsp&nbsp ...body... <br>}',

    // div6
    functionDeclaration3: 'Our new function can be called by its name: showMessage().',

    // div7 example
    functionDeclarationExample3: 'function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Hi all!\' );<br>}<br><br>showMessage();<br>showMessage();',

    // div8
    functionDeclaration4: 'Calling <b>showMessage()</b> executes the function code. Here we will see the message twice.<br><br>This example clearly demonstrates one of the main purposes of the functions: getting rid of code duplication.<br><br>If you need to change the message or the way it is displayed, you just need to change it in one place: in function that outputs it.',

    // div9
    localVariables1: '<h3>Local variables</h3>Variables declared inside a function are only visible inside that function.',

    // div10 example
    localVariablesExample1: 'function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp let message = "Hello, I\'m JavaScript!"; <i>// local variable</i><br><br>  &nbsp&nbsp&nbsp&nbsp alert( message );<br>}<br><br>showMessage(); <i>// Hi, I\'m JavaScript!</i><br><br>alert( message ); <i>// <-- there will be an error, because the variable is only visible inside the function</i>',

    // div11
    externalVariables: '<h3>External variables</h3>The function has access to external variables, for example:',

    // div12 example
    externalVariablesExample1: 'let userName = \'Vasya\';<br><br>function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp let message = \'Hello, \' + userName;<br> &nbsp&nbsp&nbsp&nbsp alert(message);<br>}<br><br>showMessage(); <i>// Hello, Vasya</i>',

    // div13
    externalVariables2: 'The function has full access to external variables and can change their value.',

    // div14 example
    externalVariablesExample2: 'let userName = \'Vasya\';<br><br>function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp userName = "Peter"; <i>// (1) change the value of an external variable</i><br><br> &nbsp&nbsp&nbsp&nbsp let message = \'Hello, \' + userName;<br> &nbsp&nbsp&nbsp&nbsp alert(message);<br>}<br><br>alert( userName ); <i>// Vasya before calling the function</i><br><br>showMessage();<br><br>alert( userName ); <i>// Petya, the value of the external variable was changed by the function</i>',

    // div15
    externalVariables3: 'An external variable is used only if there is no such local variable inside the function.<br><br>If a variable of the same name is declared inside a function, then it overrides the external one. For example, in the code below, the function uses the local variable <b>userName</b>. The outer one will be ignored:',

    // div16 example
    externalVariablesExample3: 'let userName = \'Vasya\';<br><br>function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp let userName = "Peter"; <i>// declare a local variable</i><br><br> &nbsp&nbsp&nbsp&nbsp let message = \'Hello, \' + userName;<i>// Peter</i><br> &nbsp&nbsp&nbsp&nbsp alert(message);<br>}<br><br><i>// the function will create and use its own local variable userName</i><br>showMessage();<br><br>alert( userName ); <i>// Vasya, has not changed, the function did not touch the external variable</i>',

    // div17
    globalVariables: '<h3>Global variables</h3>Variables declared outside of all functions, such as the external variable <b>userName</b> in the above code, are called <b>global</b>.<br><br><b>Global variables</b> are visible to any function (unless they are overridden by local variables of the same name).<br><br>It is desirable to keep the use of <b>global variables</b> to a minimum. There are usually few or no <b>global variables</b> in modern code. Although they are sometimes useful for storing critical "project-wide" data.',

    // div18
    options1: '<h3>Options</h3>We can pass any information inside the function using parameters.<br><br>In the example below, two parameters are passed to the function: <b>from</b> и <b>text</b>.',

    // div19 example
    optionsExample1: 'function showMessage(from, text) { <i>// options: from, text</i><br> &nbsp&nbsp&nbsp&nbsp alert(from + \': \' + text);<br>}<br><br>showMessage(\'Anya\', \'Hello!\'); <i>// Anya: Hello! (*)</i><br>showMessage(\'Anya\', "How are you?"); <i>// Anya: How are you? (**)</i>',

    // div20
    options2: 'When a function is called on strings <b>(*)</b> and <b>(**)</b>, passed values are copied to local variables <b>from</b> and <b>text</b>. Then they are used in the body of the function.<br><br>Here is another example: we have a variable <b>from</b>, and we pass its functions. Please note: the function changes the value <b>from</b>, but this change is not visible from the outside. The function always gets only a copy of the value:',

    // div21 example
    optionsExample2: 'function showMessage(from, text) {<br><br> &nbsp&nbsp&nbsp&nbsp from = \'*\' + from + \'*\'; <i>// let\'s decorate a little "from"</i><br><br> &nbsp&nbsp&nbsp&nbsp alert( from + \': \' + text );<br>}<br><br>let from = "Anya";<br><br>showMessage(from, "Hello"); <i>// *Anya*: Hello</i><br><br><i>// the value of "from" remained the same, the function changed the value of the local variable</i><br>alert( from ); <i>// Anya</i>',

    // div22
    options3: 'The value passed as a function parameter is also called <b>argument</b>.<br><br>In other words: <ul> <li><b>Parameter</b> – this is the variable specified in parentheses in the function declaration.</li> <li><b>Argument</b> – this is the value that is passed to the function when it is called.</li> </ul>We declare functions with a list of parameters, then call them by passing arguments.<br><br>Considering the above example, we could say: "function <b>showMessage</b> announced with two <b>parameters</b>, then called with two <b>arguments</b>: <b>from</b> и <b>"Hi"</b>".',

    // div23
    defaultValues1: '<h3>Default values</h3>If no argument was specified when calling the function, then its value becomes <b>undefined</b>.<br><br>For example, the above function <b>showMessage(from, text)</b> can be called with one argument:',

    // div24 example
    defaultValuesExample1: 'showMessage("Anya");',

    // div25
    defaultValues2: 'This will not cause an error. Such a call will output <b>"*Anya*: undefined"</b>. The parameter is not specified in the call <b>text</b>, therefore, it is assumed that <b>text === undefined</b>.<br><br>If we want to set the parameter <b>text</b> the default value, we have to specify it after <b>=</b>:',

    // div26 example
    defaultValuesExample2: 'function showMessage(from, text = "no text added") {<br> &nbsp&nbsp&nbsp&nbsp alert( from + ": " + text );<br>}<br><br>showMessage("Anya"); <i>// Anya: no text added</i>',

    // div27
    defaultValues3: 'Now, if the parameter <b>text</b> not specified, its value will be <b>"no text added"</b><br><br>In this case <b>"no text added"</b> this is a string, but in its place there could be a more complex expression that would be calculated and assigned in the absence of a parameter. For example:',

    // div28 example
    defaultValuesExample3: 'function showMessage(from, text = anotherFunction()) {<br> &nbsp&nbsp&nbsp&nbsp <i>// anotherFunction() executed only if not passed text</i><br> &nbsp&nbsp&nbsp&nbsp <i>// the result will be the value text</i><br>}',

    // div29
    calculatingDefaultParameters: '<h3>Calculating default parameters</h3>In JavaScript, default parameters are calculated every time a function is called without a corresponding parameter.<br><br>In the example above, the function <b>anotherFunction()</b> will not be called at all if the parameter is specified <b>text</b>.<br><br>On the other hand, the function will be independently called every time <b>text</b> absent.',

    // div30
    alternativeDefaultSettings1: '<h3>Alternative default settings</h3>Sometimes it makes sense to assign default values for parameters not in the function declaration, but at a later stage.<br><br>During the execution of the function, we can check whether the parameter is passed by comparing it with <b>undefined</b>:',

    // div31 example
    alternativeDefaultSettingsExample1: 'function showMessage(text) {<br> &nbsp&nbsp&nbsp&nbsp <i>// ...</i><br> &nbsp&nbsp&nbsp&nbsp if (text === undefined) { <i>// if the parameter is missing</i> <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp text = \'empty message\'; <br> &nbsp&nbsp&nbsp&nbsp }<br> &nbsp&nbsp&nbsp&nbsp alert(text);<br>}<br>showMessage(); <i>// empty message</i>',

    // div32
    alternativeDefaultSettings2: '…Or we can use the operator <b>||</b>:',

    // div33 example
    alternativeDefaultSettingsExample2: 'function showMessage(text) {<br> &nbsp&nbsp&nbsp&nbsp <i>// if the value of text is false or equals undefined, then assign the value \'empty\' to text</i><br> &nbsp&nbsp&nbsp&nbsp text = text || \'empty\';<br> &nbsp&nbsp&nbsp&nbsp ...<br>}',

    // div34
    alternativeDefaultSettings3: 'Modern JavaScript engines support the null merge operator <b>??</b>. Its use will be the best practice, in case most of the false values, such as <b>0</b>, should be regarded as "normal".',

    // div35 example
    alternativeDefaultSettingsExample3: 'function showCount(count) {<br> &nbsp&nbsp&nbsp&nbsp <i>// if count is undefined or null, show "unknown"</i><br> &nbsp&nbsp&nbsp&nbsp alert(count ?? "unknown");<br>}<br>showCount(0); <i>// 0</i><br>showCount(null); <i>// unknown</i><br>showCount(); <i>// unknown</i>',

    // div36
    returningValue1: '<h3>Returning a value</h3>The function can return a result that will be passed to the code that called it.<br><br>The simplest example is the function of adding two numbers:',

    // div37 example
    returningValueExample1: 'function sum(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>}<br><br>let result = sum(1, 2);<br>alert( result ); <i>// 3</i>',

    // div38
    returningValue2: 'Directive <b>return</b> it can be located anywhere in the function body. As soon as execution reaches this point, the function stops, and the value is returned to the code that called it (assigned to the <b>result</b> variable above).<br><br>There may be several calls to return, for example:',

    // div39
    returningValueExample2: 'function checkAge(age) {<br> &nbsp&nbsp&nbsp&nbsp if (age >= 18) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp     return true;<br> &nbsp&nbsp&nbsp&nbsp } else {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp return confirm(\'Did your parents allow it?\');<br> &nbsp&nbsp&nbsp&nbsp } <br>}<br><br>let age = prompt(\'How old are you?\', 18);<br><br>if ( checkAge(age) ) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Access received\' );<br> } else {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Access is closed\' );<br>}',

    // div40
    returningValue3: 'It is possible to use <b>return</b> without a value. This will cause the function to exit immediately.',

    // div41 example
    returningValueExample3: 'function showMovie(age) { <br> &nbsp&nbsp&nbsp&nbsp if ( !checkAge(age) ) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp return;<br> &nbsp&nbsp&nbsp&nbsp }<br><br> &nbsp&nbsp&nbsp&nbsp alert( "You are shown a movie" ); <i>// (*)</i><br> &nbsp&nbsp&nbsp&nbsp ...<br>}',

    // div42
    returningValue4: 'In the code above, if <b>checkAge(age)</b> will return <b>false</b>, <b>showMovie</b> will not execute <b>alert</b>.',

    // div43 
    return1: '<h3>Never add a line feed between return and its value</h3>For a long expression in <b>return</b>, it may be tempting to place it on several separate lines, for example like this:',

    // div44 example
    returnExample1: 'return<br> &nbsp&nbsp&nbsp&nbsp  (some + long + expression + or + whatever * f(a) + f(b))',

    // div45
    return2: 'The code will not execute because the JavaScript interpreter will substitute a semicolon after <b>return</b>. For him it will look like this:',

    // div46 example
    returnExample2: 'return;<br> &nbsp&nbsp&nbsp&nbsp (some + long + expression + or + whatever * f(a) + f(b))',

    // div47
    return3: 'So it actually became an empty <b>return</b>.<br><br>If we want the returned expression to occupy several lines, we need to start it on the same line as <b>return</b>. Or, at least, put an opening bracket there, like this:',

    // div48 example
    returnExample3: 'return (<br> &nbsp&nbsp&nbsp&nbsp some + long + expression<br> &nbsp&nbsp&nbsp&nbsp + or +<br> &nbsp&nbsp&nbsp&nbsp whatever * f(a) + f(b)<br> &nbsp&nbsp&nbsp&nbsp )',

    // div49
    return4: 'And then everything will work as planned.',

    // div50
    next: '<b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamFifteenPartTwo()">JS topic 15/2</a></b> - the second part of the topic.<br><b><a href="#" onclick="quicLinkHome()"><a href="#" onclick="quicLinkHome()">home</a></a></b> - home screen.'
}

let JSTopicFifteenRus = {
    // div1
    functions: '<h3>Функции</h3>Зачастую нам надо повторять одно и то же действие во многих частях программы.<br><br>Например, необходимо красиво вывести сообщение при приветствии посетителя, при выходе посетителя с сайта, ещё где-нибудь.<br><br>Чтобы не повторять один и тот же код во многих местах, придуманы функции. Функции являются основными «строительными блоками» программы.<br><br>Примеры встроенных функций вы уже видели – это <b>alert(message)</b>, <b>prompt(message, default)</b> и <b>confirm(question)</b>. Но можно создавать и свои.',

    // div2
    functionDeclaration1: '<h3>Объявление функции</h3>Для создания функций мы можем использовать <b>объявление функции</b>.<br><br>',

    // div3 example
    functionDeclarationExample1: 'function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Всем привет!\' );<br>}',

    // div4
    functionDeclaration2: 'Вначале идёт ключевое слово <b>function</b>, после него имя функции, затем список параметров в круглых скобках через запятую (в вышеприведённом примере он пустой) и, наконец, код функции, также называемый «телом функции», внутри фигурных скобок.',

    // div5 example
    functionDeclarationExample2: 'function имя(параметры) {<br> &nbsp&nbsp&nbsp&nbsp ...тело... <br>}',

    // div6
    functionDeclaration3: 'Наша новая функция может быть вызвана по своему имени: showMessage().',

    // div7 example
    functionDeclarationExample3: 'function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Всем привет!\' );<br>}<br><br>showMessage();<br>showMessage();',

    // div8
    functionDeclaration4: 'Вызов <b>showMessage()</b> выполняет код функции. Здесь мы увидим сообщение дважды.<br><br>Этот пример явно демонстрирует одно из главных предназначений функций: избавление от дублирования кода.<br><br>Если понадобится поменять сообщение или способ его вывода – достаточно изменить его в одном месте: в функции, которая его выводит.',

    // div9
    localVariables1: '<h3>Локальные переменные</h3>Переменные, объявленные внутри функции, видны только внутри этой функции.',

    // div10 example
    localVariablesExample1: 'function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp let message = "Привет, я JavaScript!"; <i>// локальная переменная</i><br><br>  &nbsp&nbsp&nbsp&nbsp alert( message );<br>}<br><br>showMessage(); <i>// Привет, я JavaScript!</i><br><br>alert( message ); <i>// <-- будет ошибка, т.к. переменная видна только внутри функции</i>',

    // div11
    externalVariables1: '<h3>Внешние переменные</h3>У функции есть доступ к внешним переменным, например:',

    // div12 example
    externalVariablesExample1: 'let userName = \'Вася\';<br><br>function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp let message = \'Привет, \' + userName;<br> &nbsp&nbsp&nbsp&nbsp alert(message);<br>}<br><br>showMessage(); <i>// Привет, Вася</i>',

    // div13
    externalVariables2: 'Функция обладает полным доступом к внешним переменным и может изменять их значение.',

    // div14 example
    externalVariablesExample2: 'let userName = \'Вася\';<br><br>function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp userName = "Петя"; <i>// (1) изменяем значение внешней переменной</i><br><br> &nbsp&nbsp&nbsp&nbsp let message = \'Привет, \' + userName;<br> &nbsp&nbsp&nbsp&nbsp alert(message);<br>}<br><br>alert( userName ); <i>// Вася перед вызовом функции</i><br><br>showMessage();<br><br>alert( userName ); <i>// Петя, значение внешней переменной было изменено функцией</i>',

    // div15
    externalVariables3: 'Внешняя переменная используется, только если внутри функции нет такой локальной.<br><br>Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. Например, в коде ниже функция использует локальную переменную <b>userName</b>. Внешняя будет проигнорирована:',

    // div16 example
    externalVariablesExample3: 'let userName = \'Вася\';<br><br>function showMessage() {<br> &nbsp&nbsp&nbsp&nbsp let userName = "Петя"; <i>// объявляем локальную переменную</i><br><br> &nbsp&nbsp&nbsp&nbsp let message = \'Привет, \' + userName;<i>// Петя</i><br> &nbsp&nbsp&nbsp&nbsp alert(message);<br>}<br><br><i>// функция создаст и будет использовать свою собственную локальную переменную userName</i><br>showMessage();<br><br>alert( userName ); <i>// Вася, не изменилась, функция не трогала внешнюю переменную</i>',

    // div17
    globalVariables: '<h3>Глобальные переменные</h3>Переменные, объявленные снаружи всех функций, такие как внешняя переменная <b>userName</b> в вышеприведённом коде – называются <b>глобальными</b>.<br><br><b>Глобальные переменные</b> видимы для любой функции (если только их не перекрывают одноимённые локальные переменные).<br><br>Желательно сводить использование <b>глобальных переменных</b> к минимуму. В современном коде обычно мало или совсем нет <b>глобальных переменных</b>. Хотя они иногда полезны для хранения важнейших «общепроектовых» данных.',

    // div18
    options1: '<h3>Параметры</h3>Мы можем передать внутрь функции любую информацию, используя параметры.<br><br>В нижеприведённом примере функции передаются два параметра: <b>from</b> и <b>text</b>.',

    // div19 example
    optionsExample1: 'function showMessage(from, text) { <i>// параметры: from, text</i><br> &nbsp&nbsp&nbsp&nbsp alert(from + \': \' + text);<br>}<br><br>showMessage(\'Аня\', \'Привет!\'); <i>// Аня: Привет! (*)</i><br>showMessage(\'Аня\', "Как дела?"); <i>// Аня: Как дела? (**)</i>',

    // div20
    options2: 'Когда функция вызывается в строках <b>(*)</b> и <b>(**)</b>, переданные значения копируются в локальные переменные <b>from</b> и <b>text</b>. Затем они используются в теле функции.<br><br>Вот ещё один пример: у нас есть переменная <b>from</b>, и мы передаём её функции. Обратите внимание: функция изменяет значение <b>from</b>, но это изменение не видно снаружи. Функция всегда получает только копию значения:',

    // div21 example
    optionsExample2: 'function showMessage(from, text) {<br><br> &nbsp&nbsp&nbsp&nbsp from = \'*\' + from + \'*\'; <i>// немного украсим "from"</i><br><br> &nbsp&nbsp&nbsp&nbsp alert( from + \': \' + text );<br>}<br><br>let from = "Аня";<br><br>showMessage(from, "Привет"); <i>// *Аня*: Привет</i><br><br><i>// значение "from" осталось прежним, функция изменила значение локальной переменной</i><br>alert( from ); <i>// Аня</i>',

    // div22
    options3: 'Значение, передаваемое в качестве параметра функции, также называется <b>аргументом</b>.<br><br>Другими словами: <ul> <li><b>Параметр</b> – это переменная, указанная в круглых скобках в объявлении функции.</li> <li><b>Аргумент</b> – это значение, которое передаётся функции при её вызове.</li> </ul>Мы объявляем функции со списком параметров, затем вызываем их, передавая аргументы.<br><br>Рассматривая приведённый выше пример, мы могли бы сказать: "функция <b>showMessage</b> объявляется с двумя <b>параметрами</b>, затем вызывается с двумя <b>аргументами</b>: <b>from</b> и <b>"Привет"</b>".',

    // div23
    defaultValues1: '<h3>Значения по умолчанию</h3>Если при вызове функции аргумент не был указан, то его значением становится <b>undefined</b>.<br><br>Например, вышеупомянутая функция <b>showMessage(from, text)</b> может быть вызвана с одним аргументом:',

    // div24 example
    defaultValuesExample1: 'showMessage("Аня");',

    // div25
    defaultValues2: 'Это не приведёт к ошибке. Такой вызов выведет <b>"*Аня*: undefined"</b>. В вызове не указан параметр <b>text</b>, поэтому предполагается, что <b>text === undefined</b>.<br><br>Если мы хотим задать параметру <b>text</b> значение по умолчанию, мы должны указать его после <b>=</b>:',

    // div26 example
    defaultValuesExample2: 'function showMessage(from, text = "текст не добавлен") {<br> &nbsp&nbsp&nbsp&nbsp alert( from + ": " + text );<br>}<br><br>showMessage("Аня"); <i>// Аня: текст не добавлен</i>',

    // div27
    defaultValues3: 'Теперь, если параметр <b>text</b> не указан, его значением будет <b>"текст не добавлен"</b><br><br>В данном случае <b>"текст не добавлен"</b> это строка, но на её месте могло бы быть и более сложное выражение, которое бы вычислялось и присваивалось при отсутствии параметра. Например:',

    // div28 example
    defaultValuesExample3: 'function showMessage(from, text = anotherFunction()) {<br> &nbsp&nbsp&nbsp&nbsp <i>// anotherFunction() выполнится только если не передан text</i><br> &nbsp&nbsp&nbsp&nbsp <i>// результатом будет значение text</i><br>}',

    // div29
    calculatingDefaultParameters: '<h3>Вычисление параметров по умолчанию</h3>В JavaScript параметры по умолчанию вычисляются каждый раз, когда функция вызывается без соответствующего параметра.<br><br>В приведённом выше примере, функция <b>anotherFunction()</b> не будет вызвана вообще, если указан параметр <b>text</b>.<br><br>С другой стороны, функция будет независимо вызываться каждый раз, когда <b>text</b> отсутствует.',

    // div30
    alternativeDefaultSettings1: '<h3>Альтернативные параметры по умолчанию</h3>Иногда имеет смысл присваивать значения по умолчанию для параметров не в объявлении функции, а на более позднем этапе.<br><br>Во время выполнения функции мы можем проверить, передан ли параметр, сравнив его с <b>undefined</b>:',

    // div31 example
    alternativeDefaultSettingsExample1: 'function showMessage(text) {<br> &nbsp&nbsp&nbsp&nbsp <i>// ...</i><br> &nbsp&nbsp&nbsp&nbsp if (text === undefined) { <i>// если параметр отсутствует</i> <br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp text = \'пустое сообщение\'; <br> &nbsp&nbsp&nbsp&nbsp }<br> &nbsp&nbsp&nbsp&nbsp alert(text);<br>}<br>showMessage(); <i>// пустое сообщение</i>',

    // div32
    alternativeDefaultSettings2: '…Или мы можем использовать оператор <b>||</b>:',

    // div33 example
    alternativeDefaultSettingsExample2: 'function showMessage(text) {<br> &nbsp&nbsp&nbsp&nbsp <i>// если значение text ложно или равняется undefined, тогда присвоить text значение \'пусто\'</i><br> &nbsp&nbsp&nbsp&nbsp text = text || \'пусто\';<br> &nbsp&nbsp&nbsp&nbsp ...<br>}',

    // div34
    alternativeDefaultSettings3: 'Современные движки JavaScript поддерживают оператор нулевого слияния <b>??</b>. Его использование будет лучшей практикой, в случае, если большинство ложных значений, таких как <b>0</b>, следует расценивать как «нормальные».',

    // div35 example
    alternativeDefaultSettingsExample3: 'function showCount(count) {<br> &nbsp&nbsp&nbsp&nbsp <i>// если count равен undefined или null, показать "неизвестно"</i><br> &nbsp&nbsp&nbsp&nbsp alert(count ?? "неизвестно");<br>}<br>showCount(0); <i>// 0</i><br>showCount(null); <i>// неизвестно</i><br>showCount(); <i>// неизвестно</i>',

    // div36
    returningValue1: '<h3>Возврат значения</h3>Функция может вернуть результат, который будет передан в вызвавший её код.<br><br>Простейшим примером может служить функция сложения двух чисел:',

    // div37 example
    returningValueExample1: 'function sum(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>}<br><br>let result = sum(1, 2);<br>alert( result ); <i>// 3</i>',

    // div38
    returningValue2: 'Директива <b>return</b> может находиться в любом месте тела функции. Как только выполнение доходит до этого места, функция останавливается, и значение возвращается в вызвавший её код (присваивается переменной <b>result</b> выше).<br><br>Вызовов return может быть несколько, например:',

    // div39 example
    returningValueExample2: 'function checkAge(age) {<br> &nbsp&nbsp&nbsp&nbsp if (age >= 18) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp     return true;<br> &nbsp&nbsp&nbsp&nbsp } else {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp return confirm(\'А родители разрешили?\');<br> &nbsp&nbsp&nbsp&nbsp } <br>}<br><br>let age = prompt(\'Сколько вам лет?\', 18);<br><br>if ( checkAge(age) ) {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Доступ получен\' );<br> } else {<br> &nbsp&nbsp&nbsp&nbsp alert( \'Доступ закрыт\' );<br>}',

    // div40
    returningValue3: 'Возможно использовать <b>return</b> и без значения. Это приведёт к немедленному выходу из функции.',

    // div41 example
    returningValueExample3: 'function showMovie(age) { <br> &nbsp&nbsp&nbsp&nbsp if ( !checkAge(age) ) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp return;<br> &nbsp&nbsp&nbsp&nbsp }<br><br> &nbsp&nbsp&nbsp&nbsp alert( "Вам показывается кино" ); <i>// (*)</i><br> &nbsp&nbsp&nbsp&nbsp ...<br>}',

    // div42
    returningValue4: 'В коде выше, если <b>checkAge(age)</b> вернёт <b>false</b>, <b>showMovie</b> не выполнит <b>alert</b>.',

    // div43 
    return1: '<h3>Никогда не добавляйте перевод строки между return и его значением</h3>Для длинного выражения в <b>return</b> может быть заманчиво разместить его на нескольких отдельных строках, например так:',

    // div44 example
    returnExample1: 'return<br> &nbsp&nbsp&nbsp&nbsp (some + long + expression + or + whatever * f(a) + f(b))',

    // div45
    return2: 'Код не выполнится, потому что интерпретатор JavaScript подставит точку с запятой после <b>return</b>. Для него это будет выглядеть так:',

    // div46 example
    returnExample2: 'return;<br> &nbsp&nbsp&nbsp&nbsp (some + long + expression + or + whatever * f(a) + f(b))',

    // div47
    return3: 'Таким образом, это фактически стало пустым <b>return</b>.<br><br>Если мы хотим, чтобы возвращаемое выражение занимало несколько строк, нужно начать его на той же строке, что и <b>return</b>. Или, хотя бы, поставить там открывающую скобку, вот так:',

    // div48 example
    returnExample3: 'return (<br> &nbsp&nbsp&nbsp&nbsp some + long + expression<br> &nbsp&nbsp&nbsp&nbsp + or +<br> &nbsp&nbsp&nbsp&nbsp whatever * f(a) + f(b)<br> &nbsp&nbsp&nbsp&nbsp )',

    // div49
    return4: 'И тогда всё сработает, как задумано.',

    // div50
    next: '<b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamFifteenPartTwo()">JS topic 15/2</a></b> - вторая часть темы.<br><b><a href="#" onclick="quicLinkHome()"><a href="#" onclick="quicLinkHome()">home</a></a></b> - начальный экран.'
}

let JSTopicFifteenEngPartTwo = {
    // div1
    choosingFunctionName: '<h3>Choosing a function name</h3>A function is an action. Therefore, the function name is usually a verb. It should be concise, precise, and describe the action of the function so that the programmer who will read the code gets a correct idea of what the function is doing.<br><br>As a rule, verbal prefixes are used, denoting the general nature of the action, followed by clarification. Usually, development teams have agreements regarding the values of these prefixes.<br><br>For example, functions starting with <b>"show"</b> usually show something.<br><br>Functions starting with…<br><br> <ul> <li><b>"get…"</b> – return the value,</li> <li><b>"calc…"</b> – something is being calculated,</li> <li><b>"create…"</b> – something is being created,</li> <li><b>"check…"</b> – something is checked and a boolean value is returned, etc.</li> </ul>',

    // div2
    oneFunctionOneAction: '<h3>One function – one action</h3>A function should only do what its name explicitly implies. And it should be a single action.<br><br>Two independent actions usually imply two functions, even if they are supposed to be called together (in this case, we can create a third function that will call them).<br><br>A few examples that violate this rule: <ul> <li><b>getAge</b> – it would be a bad choice if the function outputs <b>alert</b> with age (should only return it).</li> <li><b>createForm</b> – it will be a bad choice if the function will modify the document by adding a form to it (it should only create a form and return it).</li> <li><b>checkPermission</b> – it will be a bad choice if the function displays a message with the text <b>access is allowed/denied</b> (it should only perform a check and return its result).</li> </ul>In these examples, the generally accepted meanings of prefixes were used. Of course, you can agree on other values in the team, but usually they differ little from the generally accepted ones. In any case, you and your team should clearly understand what the prefix means, what the function can do with it, and what it cannot.',

    // div3
    ultrashortFunctionNames: '<h3>Ultrashort function names</h3>Function names that are used very often are sometimes made super-short.<br><br>For example, the <b>jQuery</b> framework defines a function using <b>$</b>. In the <b>Lodash</b> library, the main function is represented by the name <b>_</b>.<br><br>These are exceptions. Basically, function names should be reasonably concise and descriptive.',

    // div4
    functionsComments1: '<h3>Functions == Comments</h3>Functions should be short and do only one thing. If it\'s something big, it makes sense to split the function into several smaller ones. Sometimes it\'s not easy to follow this rule, but it\'s definitely a good rule.<br><br>Small functions not only facilitate testing and debugging – the very existence of such functions serves as good comments!<br><br>For example, let\'s compare the two functions below <b>showPrimes(n)</b>. Each of them outputs a prime number up to <b>n</b>.The first option uses a label <b>nextPrime</b>:',

    // div5 example
    functionsCommentsExample1: 'function showPrimes(n) {<br> &nbsp&nbsp&nbsp&nbsp nextPrime: for (let i = 2; i < n; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp for (let j = 2; j < i; j++) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if (i % j == 0) continue nextPrime;<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp }<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( i ); <i>// simple</i><br> &nbsp&nbsp&nbsp&nbsp }<br>}',

    // div6
    functionsComments2: 'The second option uses an additional function <b>isPrime(n)</b> to check for a simple:',

    // div7 example
    functionsCommentsExample2: 'function showPrimes(n) {<br><br> &nbsp&nbsp&nbsp&nbsp for (let i = 2; i < n; i++) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if (!isPrime(i)) continue;<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(i);  <i>// simple</i><br> &nbsp&nbsp&nbsp&nbsp }<br>}<br><br> function isPrime(n) {<br> &nbsp&nbsp&nbsp&nbsp for (let i = 2; i < n; i++) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if ( n % i == 0) return false;<br> &nbsp&nbsp&nbsp&nbsp }<br> &nbsp&nbsp&nbsp&nbsp return true;<br>}',

    // div8
    functionsComments3: 'The second option is easier to understand, isn\'t it? Instead of a piece of code, we see the name of the action (<b>isPrime</b>). Sometimes developers call such code <b>self-documenting</b>.<br><br>Thus, it is acceptable to create functions, even if we do not plan to reuse them. Such functions structure the code and make it more understandable.',

    // div9
    next: '<b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamSixteen()">JS topic 16</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicFifteenRusPartTwo = {
    // div1
    choosingFunctionName: '<h3>Выбор имени функции</h3>Функция – это действие. Поэтому имя функции обычно является глаголом. Оно должно быть кратким, точным и описывать действие функции, чтобы программист, который будет читать код, получил верное представление о том, что делает функция.<br><br>Как правило, используются глагольные префиксы, обозначающие общий характер действия, после которых следует уточнение. Обычно в командах разработчиков действуют соглашения, касающиеся значений этих префиксов.<br><br>Например, функции, начинающиеся с <b>"show"</b> обычно что-то показывают.<br><br>Функции, начинающиеся с… <ul> <li><b>"get…"</b> – возвращают значение,</li> <li><b>"calc…"</b> – что-то вычисляют,</li> <li><b>"create…"</b> – что-то создают,</li> <li><b>"check…"</b> – что-то проверяют и возвращают логическое значение, и т.д.</li> </ul>',

    // div2
    oneFunctionOneAction: '<h3>Одна функция – одно действие</h3>Функция должна делать только то, что явно подразумевается её названием. И это должно быть одним действием.<br><br>Два независимых действия обычно подразумевают две функции, даже если предполагается, что они будут вызываться вместе (в этом случае мы можем создать третью функцию, которая будет их вызывать).<br><br>Несколько примеров, которые нарушают это правило: <ul> <li><b>getAge</b> – будет плохим выбором, если функция будет выводить <b>alert</b> с возрастом (должна только возвращать его).</li> <li><b>createForm</b> – будет плохим выбором, если функция будет изменять документ, добавляя форму в него (должна только создавать форму и возвращать её).</li> <li><b>checkPermission</b> – будет плохим выбором, если функция будет отображать сообщение с текстом <b>доступ разрешён/запрещён</b> (должна только выполнять проверку и возвращать её результат).</li> </ul>В этих примерах использовались общепринятые смыслы префиксов. Конечно, вы в команде можете договориться о других значениях, но обычно они мало отличаются от общепринятых. В любом случае вы и ваша команда должны чётко понимать, что значит префикс, что функция с ним может делать, а чего не может.',

    // div3
    ultrashortFunctionNames: '<h3>Сверхкороткие имена функций</h3>Имена функций, которые используются очень часто, иногда делают сверхкороткими.<br><br>Например, фреймворк <b>jQuery</b> определяет функцию с помощью <b>$</b>. В библиотеке <b>Lodash</b> основная функция представлена именем <b>_</b>.<br><br>Это исключения. В основном имена функций должны быть в меру краткими и описательными.',

    // div4
    functionsComments1: '<h3>Функции == Комментарии</h3>Функции должны быть короткими и делать только что-то одно. Если это что-то большое, имеет смысл разбить функцию на несколько меньших. Иногда следовать этому правилу непросто, но это определённо хорошее правило.<br><br>Небольшие функции не только облегчают тестирование и отладку – само существование таких функций выполняет роль хороших комментариев!<br><br>Например, сравним ниже две функции <b>showPrimes(n)</b>. Каждая из них выводит простое число до <b>n</b>.Первый вариант использует метку <b>nextPrime</b>:',

    // div5 example
    functionsCommentsExample1: 'function showPrimes(n) {<br> &nbsp&nbsp&nbsp&nbsp nextPrime: for (let i = 2; i < n; i++) {<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp for (let j = 2; j < i; j++) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if (i % j == 0) continue nextPrime;<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp }<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert( i ); <i>// простое</i><br> &nbsp&nbsp&nbsp&nbsp }<br>}',

    // div6
    functionsComments2: 'Второй вариант использует дополнительную функцию <b>isPrime(n)</b> для проверки на простое:',

    // div7 example
    functionsCommentsExample2: 'function showPrimes(n) {<br><br> &nbsp&nbsp&nbsp&nbsp for (let i = 2; i < n; i++) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if (!isPrime(i)) continue;<br><br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert(i);  <i>// простое</i><br> &nbsp&nbsp&nbsp&nbsp }<br>}<br><br> function isPrime(n) {<br> &nbsp&nbsp&nbsp&nbsp for (let i = 2; i < n; i++) {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if ( n % i == 0) return false;<br> &nbsp&nbsp&nbsp&nbsp }<br> &nbsp&nbsp&nbsp&nbsp return true;<br>}',

    // div8
    functionsComments3: 'Второй вариант легче для понимания, не правда ли? Вместо куска кода мы видим название действия (<b>isPrime</b>). Иногда разработчики называют такой код <b>самодокументируемым</b>.<br><br>Таким образом, допустимо создавать функции, даже если мы не планируем повторно использовать их. Такие функции структурируют код и делают его более понятным.',

    // div9
    next: '<b><a href="#" onclick="quickLink(); JSTheamFourteen()">JS topic 14</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamSixteen()">JS topic 16</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Шестнадцатая тема.
let JSTopicSixteenEng = {
    div1: '<h3>Function Expression</h3><p>A function in JavaScript is not a magical language structure, but a special type of value.</p><p>The syntax we used before is called Function Declaration:</p>',

    div2_example: 'function sayHi() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Hi" );<br>}',

    div3: '<p>There is another syntax for creating functions, which is called <b>Function Expression</b> (Functional Expression).</p><p>This syntax allows us to create a new function in the middle of any expression.</p><p>It looks like this:</p>',

    div4_example: 'let sayHi = function() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Hi" );<br>}',

    div5: '<p>Here we can see the variable <b>SayHi</b> getting a value, a new function created as <b>function() { alert("Hi"); }</b>.</p><p>Since the function is created in the context of an assignment expression (on the right side of <b>=</b>), this is a Function Expression.</p><p>Note that after the keyword <b>function</b> no name. For <b>Function Expression</b>, its absence is allowed.</p><p>Here we immediately assign it to a variable, so the meaning of these code examples is the same: "create a function and put it in a variable <b>SayHi</b>".</p><p>In more complex situations, which we will encounter later, the function can be created and immediately called, or scheduled for further execution, without being saved anywhere, thus remaining anonymous.</p>',

    div6: '<h3>A function is a value</h3><p>Let\'s repeat: no matter how the function is created, it is a value. In both of the above examples, the function is stored in a variable <b>sayHi</b>.</p><p>We can even output this value using <b>alert</b>:</p>',

    div7_example: 'function sayHi() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Hi" );<br>}<br><br>alert( sayHi ); <i>// outputs the function code</i>',

    div8: '<p>Note that the last line does not call the function because there are no parentheses after <b>SayHi</b>. There are programming languages in which any mention of the function name leads to its execution, but JavaScript is not one of them.</p><p>In JavaScript, a function is a value, so we can treat it as a value. The above code shows its string representation, which is its source code.</p><p>Of course, the function is a special meaning, in the sense that we can call it as <b>SayHi()</b>.</p><p>But it\'s still a value. Therefore, we can work with it in the same way as with other types of values.</p><p>We can copy the function to another variable:</p>',

    div9_example: 'function sayHi() {   <i>// (1) creating</i><br> &nbsp&nbsp&nbsp&nbsp alert( "Hi" );<br>}<br><br> let func = sayHi;    <>i// (2) copy</i><br><br>func(); <i>// Hello // (3) calling a copy (works)!</i><br>sayHi(); <i>// Hi  // this one is still working too (why not)</i>',

    div10: '<p>Let\'s take a detailed look at everything that happened here:</p><ol> <li>The Function Declaration <b>(1)</b> creates a function and puts it in a variable named <b>SayHi</b>.</li> <li>In the line <b>(2)</b> we copied its value to the variable <b>func</b>. Pay attention (again): there are no parentheses after <b>SayHi</b>. If they were, the expression <b>func = SayHi()</b> would write the result of the call <b>SayHi()</b> to the variable <b>func</b>, and not the function itself <b>SayHi</b>.</li> <li>Now the function can be called both <b>SayHi()</b> and <b>func()</b>.</li> </ol><p>We could also use Function Expression to declare SayHi in the first line:</p>',

    div11_example: 'let sayHi = function() { <i>// (1) creating</i><br> &nbsp&nbsp&nbsp&nbsp alert( "Hi" );<br>};<br><br>let func = sayHi;<br><i>// ...</i>',

    div12: '<p>Why do I need a semicolon at the end?</p><p>You might have a question: Why is a semicolon put in Function Expression <b>;</b> at the end, but not in the Function Declaration:</p>',

    div13_example: 'function sayHi() {<br> &nbsp&nbsp&nbsp&nbsp <i>// ...</i><br>}<br><br>let sayHi = function() {<br> &nbsp&nbsp&nbsp&nbsp <i>// ...</i><br>};',

    div14: '<p>The answer is simple: Function Expression is created here as <b>function(...) {...}</b> inside the assignment expression: <b>let sayHi = …;</b>. Semicolon <b>;</b> is recommended to be placed at the end of the expression, it is not part of the syntax of the function.</p><p>A semicolon is needed there for a simpler assignment, such as <b>let SayHi = 5;</b>, as well as for assigning a function.</p>',

    div15: '<h3>Functions-"callbacks"</h3><p>Let\'s look at more examples of passing a function as a value and using functional expressions.</p><p>Let\'s write the <b>ask function(question, yes, no)</b> with three parameters:</p><p><b>question</b> - question text;</p><p><b>yes</b> - the function that will be called if the answer is "Yes";</p><p><b>no</b> - the function that will be called if the answer is "No";</p><p>Our function should ask a question <b>question</b> and, depending on how the user responds, call <b>yes()</b> or <b>no()</b>:</p>',

    div16_example: 'function ask(question, yes, no) {<br> &nbsp&nbsp&nbsp&nbsp if (confirm(question)) yes()<br> &nbsp&nbsp&nbsp&nbsp else no();<br>}<br><br>function showOk() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Do you agree." );<br>}<br><br>function showCancel() {<br> &nbsp&nbsp&nbsp&nbsp alert( "You canceled the execution." );<br>}<br><br><i>// usage: the showOk, showCancel functions are passed as arguments to ask</i><br>ask("Do you agree?", showOk, showCancel);',

    div17: '<p>In practice, such functions are very useful. The main difference between the "real" function <b>ask</b> from the example above will be that it uses more complex ways of interacting with the user than a simple call <b>confirm</b>. In browsers, such functions usually display beautiful dialog boxes. But that\'s another story.</p><p>The arguments <b>showOk</b> and <b>showCancel</b> of the <b>ask</b> function are called callback functions or just callbacks.</p><p>The key idea is that we pass a function and expect it to be called back sometime later, if necessary. In our case, <b>showOk</b> becomes a callback for the answer "yes", and <b>showCancel</b> – for the answer "no".</p><p>We can rewrite this example much shorter using Function Expression:</p>',

    div18_example: 'function ask(question, yes, no) {<br> &nbsp&nbsp&nbsp&nbsp if (confirm(question)) yes()<br> &nbsp&nbsp&nbsp&nbsp else no();<br>}<br><br>ask(<br> &nbsp&nbsp&nbsp&nbsp "Do you agree?",<br> &nbsp&nbsp&nbsp&nbsp function() { alert("You agreed."); },<br> &nbsp&nbsp&nbsp&nbsp function() { alert("You canceled the execution."); }<br>);',

    div19: '<p>Here the functions are declared right inside the call <b>ask(...)</b>. They have no names, so they are called anonymous. Such functions are not available from outside <b>ask</b> (because they are not assigned to variables), but this is exactly what we need.</p><p>Such code that appeared in our script looks very natural, in the spirit of JavaScript.</p>',

    div20: '<h3>Function Expression versus Function Declaration</h3><p>Let\'s look at the key differences between Function Declaration and Function Expression.</p><p>First, the syntax: how to distinguish them from each other in the code.</p><ul><li>Function Declaration: the function is declared by a separate construct "function..." in the main code stream.</li></ul>',

    div21_example: '<i>// Function Declaration</i><br>function sum(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>}',

    div22: '<ul> <li>Function Expression: A function created inside another expression or syntactic construct. In this case, the function is created in the right part of the "assignment expression" <b>=</b>:</li> </ul>',

    div23_example: '<i>// Function Expression</i><br>let sum = function(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>};',

    div24: '<p>A more subtle difference is when a function is created by the JavaScript engine.</p> <p><b>Function Expression is created when execution reaches it, and then can already be used.</b></p> <p>After the execution thread reaches the right side of the assignment expression <b>let sum = function...</b> – from this moment, the function is considered created and can be used (assigned to a variable, called, etc.).</p> <p>With Function Declaration, everything is different.</p> <p><b>Function Declaration can be called before it is declared.</b></p> <p>In other words, when the JavaScript engine is preparing to execute a script or a block of code, first of all it looks for a Function Declaration in it and creates all such functions. This process can be considered the "initialization stage".</p> <p>And only after all Function Declaration declarations are processed, execution will continue.</p> <p>As a result, functions created as Function Declaration can be called before their definitions.</p><p>For example, this will work:</p>',

    div25_example: 'sayHi("Vasya"); <i>// Hello, Vasya</i><br><br>function sayHi(name) {<br> &nbsp&nbsp&nbsp&nbsp alert( `Hello, ${name}` );<br>}',

    div26: '<p>The <b>SayHi</b> function was created when the JavaScript engine was preparing the script for execution, and such a function is visible everywhere in this script.</p> <p>…If it was a Function Expression, then such a move would cause an error:</p>',

    div27_example: 'sayHi("Vasya"); <i>>// mistake!</i><br><br>let sayHi = function(name) {  <i>// (*) There is no more magic</i><br> &nbsp&nbsp&nbsp&nbsp alert( `Hello, ${name}` );<br>};',

    div28: '<p>Functions declared using Function Expression are created when execution reaches them. This will happen only on the line marked with an asterisk <b>(*)</b>. It\'s too late.</p> <p>Another important feature of Function Declaration is their block scope.</p> <p><b>In strict mode, when the Function Declaration is in the {...} block, the function is available everywhere inside the block. But not outside of it.</b></p> <p>For example, let\'s imagine that we need to declare the <b>welcome() function</b> depending on the value of the <b>age</b> variable, which we get during code execution. And then we plan to use it sometime in the future.</p> <p>If we try to use Function Declaration, it won\'t work as intended:</p>',

    div29_example: 'let age = prompt("How old are you?", 18);<br><br><i>// depending on the condition, we declare the function</i><br>if (age < 18) {<br><br> &nbsp&nbsp&nbsp&nbsp function welcome() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Hi!");<br> &nbsp&nbsp&nbsp&nbsp }<br><br> } else {<br><br> &nbsp&nbsp&nbsp&nbsp function welcome() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Hello!");<br> &nbsp&nbsp&nbsp&nbsp }<br><br>}<br><br><i>// ...does not work</i><br>welcome(); <i>// Error: welcome is not defined</i>',

    div30: '<p>This happened because the Function Declaration is visible only inside the code block in which it is located.</p><p>What can I do to make <b>welcome</b> visible from the outside <b>if</b>?</p><p>The correct approach is to use the function declared using Function Expression and assign the value <b>welcome</b> to the variable declared outside <b>if</b>, which will provide us with the necessary visibility.</p><p>This code will work as expected:</p>',

    div31_example: 'let age = prompt("How old are you?", 18);<br><br>let welcome;<br><br>if (age < 18) {<br><br> &nbsp&nbsp&nbsp&nbsp welcome = function() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Hi!");<br> &nbsp&nbsp&nbsp&nbsp};<br><br> } else {<br><br> &nbsp&nbsp&nbsp&nbsp  welcome = function() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Hello!");<br> &nbsp&nbsp&nbsp&nbsp};<br><br>} <br><br> welcome(); <i>// It\'s all right now</i>',

    div32: 'Or could we simplify this even more by using the conditional operator <b>?</b>:',

    div33_example: 'let age = prompt("How old are you?", 18);<br><br>let welcome = (age < 18) ?<br> &nbsp&nbsp&nbsp&nbsp function() { alert("Hi!"); } :<br> &nbsp&nbsp&nbsp&nbsp function() { alert("Hello!"); };<br><br>welcome(); <i>// it\'s all right now</i>',

    div34: '<h3>When to use Function Declaration, and when to use Function Expression?</h3><p>As a rule, if we need a function, first of all we need to consider the syntax of Function Declaration, which we used before. It gives us more freedom in how we can organize the code. Functions declared in this way can be called before they are declared.</p><p>Also, functions like <b>function f(...) {...}</b> are slightly more noticeable in the code than <b>let f = function(...) {...}</b>. Function Declaration is easier to "catch the eye".</p><p>…But if Function Declaration does not suit us for some reason, or we need a conditional declaration (we considered this in the example above), then we should use Function Expression.</p>',

    next: '<b><a href="#" onclick="quickLink(); JSTheamFifteen()">JS topic 15</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); JSTheamSeventeen()">JS topic 17</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicSixteenRus = {
    div1: '<h3>Function Expression</h3><p>Функция в JavaScript – это не магическая языковая структура, а особого типа значение.</p><p>Синтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):</p>',

    div2_example: 'function sayHi() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Привет" );<br>}',

    div3: '<p>Существует ещё один синтаксис создания функций, который называется <b>Function Expression</b> (Функциональное Выражение).</p><p>Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.</p><p>Это выглядит следующим образом:</p>',

    div4_example: 'let sayHi = function() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Привет" );<br>}',

    div5: '<p>Здесь мы можем видеть переменную <b>sayHi</b>, получающую значение, новую функцию, созданную как <b>function() { alert("Привет"); }</b>.</p><p>Поскольку создание функции происходит в контексте выражения присваивания (с правой стороны от <b>=</b>), это Function Expression.</p><p>Обратите внимание, что после ключевого слова <b>function</b> нет имени. Для <b>Function Expression</b> допускается его отсутствие.</p><p>Здесь мы сразу присваиваем её переменной, так что смысл этих примеров кода один и тот же: "создать функцию и поместить её в переменную <b>sayHi</b>".</p><p>В более сложных ситуациях, с которыми мы столкнёмся позже, функция может быть создана и немедленно вызвана, или запланирована для дальнейшего выполнения, нигде не сохраняясь, таким образом, оставаясь анонимной.</p>',

    div6: '<h3>Функция – это значение</h3><p>Давайте повторим: независимо от того, как создаётся функция – она является значением. В обоих приведённых выше примерах функция хранится в переменной <b>sayHi</b>.</p><p>Мы даже можем вывести это значение с помощью <b>alert</b>:</p>',

    div7_example: 'function sayHi() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Привет" );<br>}<br><br>alert( sayHi ); <i>// выведет код функции</i>',

    div8: '<p>Обратите внимание, что последняя строка не вызывает функцию, потому что после <b>sayHi</b> нет круглых скобок. Существуют языки программирования, в которых любое упоминание имени функции приводит к её выполнению, но JavaScript к таким не относится.</p><p>В JavaScript функция – это значение, поэтому мы можем обращаться с ней как со значением. Приведённый выше код показывает её строковое представление, которое является её исходным кодом.</p><p>Конечно, функция – это особое значение, в том смысле, что мы можем вызвать её как <b>sayHi()</b>.</p><p>Но всё же это значение. Поэтому мы можем работать с ней так же, как и с другими видами значений.</p><p>Мы можем скопировать функцию в другую переменную:</p>',

    div9_example: 'function sayHi() {   <i>// (1) создаём</i><br> &nbsp&nbsp&nbsp&nbsp alert( "Привет" );<br>}<br><br> let func = sayHi;    <>i// (2) копируем</i><br><br>func(); <i>// Привет     // (3) вызываем копию (работает)!</i><br>sayHi(); <i>// Привет    //     эта тоже все ещё работает (почему бы и нет)</i>',

    div10: '<p>Давайте подробно разберём всё, что тут произошло:</p><ol> <li>Объявление Function Declaration <b>(1)</b> создаёт функцию и помещает её в переменную с именем <b>sayHi</b>.</li> <li>В строке <b>(2)</b> мы скопировали её значение в переменную <b>func</b>. Обратите внимание (ещё раз): нет круглых скобок после <b>sayHi</b>. Если бы они были, то выражение <b>func = sayHi()</b> записало бы результат вызова <b>sayHi()</b> в переменную <b>func</b>, а не саму функцию <b>sayHi</b>.</li> <li>Теперь функция может вызываться как <b>sayHi()</b>, так и <b>func()</b>.</li> </ol><p>Мы также могли бы использовать Function Expression для объявления sayHi в первой строке:</p>',

    div11_example: 'let sayHi = function() { <i>// (1) создаём</i><br> &nbsp&nbsp&nbsp&nbsp alert( "Привет" );<br>};<br><br>let func = sayHi;<br><i>// ...</i>',

    div12: '<p>Зачем нужна точка с запятой в конце?</p><p>У вас мог возникнуть вопрос: Почему в Function Expression ставится точка с запятой <b>;</b> на конце, а в Function Declaration нет:</p>',

    div13_example: 'function sayHi() {<br> &nbsp&nbsp&nbsp&nbsp <i>// ...</i><br>}<br><br>let sayHi = function() {<br> &nbsp&nbsp&nbsp&nbsp <i>// ...</i><br>};',

    div14: '<p>Ответ прост: Function Expression создаётся здесь как <b>function(...) {...}</b> внутри выражения присваивания: <b>let sayHi = …;</b>. Точку с запятой <b>;</b> рекомендуется ставить в конце выражения, она не является частью синтаксиса функции.</p><p>Точка с запятой нужна там для более простого присваивания, такого как <b>let sayHi = 5;</b>, а также для присваивания функции.</p>',

    div15: '<h3>Функции-«колбэки»</h3><p>Давайте рассмотрим больше примеров передачи функции в виде значения и использования функциональных выражений.</p><p>Давайте напишем функцию <b>ask(question, yes, no)</b> с тремя параметрами:</p><p><b>question</b> - текст вопроса;</p><p><b>yes</b> - функция, которая будет вызываться, если ответ будет «Yes»;</p><p><b>no</b> - функция, которая будет вызываться, если ответ будет «No»;</p><p>Наша функция должна задать вопрос <b>question</b> и, в зависимости от того, как ответит пользователь, вызвать <b>yes()</b> или <b>no()</b>:</p>',

    div16_example: 'function ask(question, yes, no) {<br> &nbsp&nbsp&nbsp&nbsp if (confirm(question)) yes()<br> &nbsp&nbsp&nbsp&nbsp else no();<br>}<br><br>function showOk() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Вы согласны." );<br>}<br><br>function showCancel() {<br> &nbsp&nbsp&nbsp&nbsp alert( "Вы отменили выполнение." );<br>}<br><br><i>// использование: функции showOk, showCancel передаются в качестве аргументов ask</i><br>ask("Вы согласны?", showOk, showCancel);',

    div17: '<p>На практике подобные функции очень полезны. Основное отличие «реальной» функции <b>ask</b> от примера выше будет в том, что она использует более сложные способы взаимодействия с пользователем, чем простой вызов <b>confirm</b>. В браузерах такие функции обычно отображают красивые диалоговые окна. Но это уже другая история.</p><p>Аргументы <b>showOk</b> и <b>showCancel</b> функции <b>ask</b> называются функциями-колбэками или просто колбэками.</p><p>Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно (от англ. «call back» – обратный вызов) когда-нибудь позже, если это будет необходимо. В нашем случае, <b>showOk</b> становится колбэком для ответа «yes», а <b>showCancel</b> – для ответа «no».</p><p>Мы можем переписать этот пример значительно короче, используя Function Expression:</p>',

    div18_example: 'function ask(question, yes, no) {<br> &nbsp&nbsp&nbsp&nbsp if (confirm(question)) yes()<br> &nbsp&nbsp&nbsp&nbsp else no();<br>}<br><br>ask(<br> &nbsp&nbsp&nbsp&nbsp "Вы согласны?",<br> &nbsp&nbsp&nbsp&nbsp function() { alert("Вы согласились."); },<br> &nbsp&nbsp&nbsp&nbsp function() { alert("Вы отменили выполнение."); }<br>);',

    div19: '<p>Здесь функции объявляются прямо внутри вызова <b>ask(...)</b>. У них нет имён, поэтому они называются анонимными. Такие функции недоступны снаружи <b>ask</b> (потому что они не присвоены переменным), но это как раз то, что нам нужно.</p><p>Подобный код, появившийся в нашем скрипте выглядит очень естественно, в духе JavaScript.</p>',

    div20: '<h3>Function Expression в сравнении с Function Declaration</h3><p>Давайте разберём ключевые отличия Function Declaration от Function Expression.</p><p>Во-первых, синтаксис: как отличить их друг от друга в коде.</p><ul><li>Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.</li></ul>',

    div21_example: '<i>// Function Declaration</i><br>function sum(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>}',

    div22: '<ul> <li>Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» <b>=</b>:</li> </ul>',

    div23_example: '<i>// Function Expression</i><br>let sum = function(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>};',

    div24: '<p>Более тонкое отличие состоит в том, когда создаётся функция движком JavaScript.</p> <p><b>Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.</b></p> <p>После того, как поток выполнения достигнет правой части выражения присваивания <b>let sum = function…</b> – с этого момента, функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д. ).</p> <p>С Function Declaration всё иначе.</p> <p><b>Function Declaration может быть вызвана раньше, чем она объявлена.</b></p> <p>Другими словами, когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции. Можно считать этот процесс «стадией инициализации».</p> <p>И только после того, как все объявления Function Declaration будут обработаны, продолжится выполнение.</p> <p>В результате функции, созданные как Function Declaration, могут быть вызваны раньше своих определений.</p><p>Например, так будет работать:</p>',

    div25_example: 'sayHi("Вася"); <i>// Привет, Вася</i><br><br>function sayHi(name) {<br> &nbsp&nbsp&nbsp&nbsp alert( `Привет, ${name}` );<br>}',

    div26: '<p>Функция <b>sayHi</b> была создана, когда движок JavaScript подготавливал скрипт к выполнению, и такая функция видна повсюду в этом скрипте.</p> <p>…Если бы это было Function Expression, то такой код вызвал бы ошибку:</p>',

    div27_example: 'sayHi("Вася"); <i>>// ошибка!</i><br><br>let sayHi = function(name) {  <i>// (*) магии больше нет</i><br> &nbsp&nbsp&nbsp&nbsp alert( `Привет, ${name}` );<br>};',

    div28: '<p>Функции, объявленные при помощи Function Expression, создаются тогда, когда выполнение доходит до них. Это случится только на строке, помеченной звёздочкой <b>(*)</b>. Слишком поздно.</p> <p>Ещё одна важная особенность Function Declaration заключается в их блочной области видимости.</p> <p><b>В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.</b></p> <p>Для примера давайте представим, что нам нужно объявить функцию <b>welcome()</b> в зависимости от значения переменной <b>age</b>, которое мы получим во время выполнения кода. И затем запланируем использовать её когда-нибудь в будущем.</p> <p>Если мы попробуем использовать Function Declaration, это не заработает так, как задумывалось:</p>',

    div29_example: 'let age = prompt("Сколько Вам лет?", 18);<br><br><i>// в зависимости от условия объявляем функцию</i><br>if (age < 18) {<br><br> &nbsp&nbsp&nbsp&nbsp function welcome() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Привет!");<br> &nbsp&nbsp&nbsp&nbsp }<br><br> } else {<br><br> &nbsp&nbsp&nbsp&nbsp function welcome() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Здравствуйте!");<br> &nbsp&nbsp&nbsp&nbsp }<br><br>}<br><br><i>// ...не работает</i><br>welcome(); <i>// Error: welcome is not defined</i>',

    div30: '<p>Это произошло, так как объявление Function Declaration видимо только внутри блока кода, в котором располагается.</p><p>Что можно сделать, чтобы <b>welcome</b> была видима снаружи <b>if</b>?</p><p>Верным подходом будет воспользоваться функцией, объявленной при помощи Function Expression, и присвоить значение <b>welcome</b> переменной, объявленной снаружи <b>if</b>, что обеспечит нам нужную видимость.</p><p>Такой код заработает, как ожидалось:</p>',

    div31_example: 'let age = prompt("Сколько Вам лет?", 18);<br><br>let welcome;<br><br>if (age < 18) {<br><br> &nbsp&nbsp&nbsp&nbsp welcome = function() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Привет!");<br> &nbsp&nbsp&nbsp&nbsp};<br><br> } else {<br><br> &nbsp&nbsp&nbsp&nbsp  welcome = function() {<br> &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp alert("Здравствуйте!");<br> &nbsp&nbsp&nbsp&nbsp};<br><br>} <br><br> welcome(); <i>// теперь всё в порядке</i>',

    div32: 'Или мы могли бы упростить это ещё сильнее, используя условный оператор <b>?</b>:',

    div33_example: 'let age = prompt("Сколько Вам лет?", 18);<br><br>let welcome = (age < 18) ?<br> &nbsp&nbsp&nbsp&nbsp function() { alert("Привет!"); } :<br> &nbsp&nbsp&nbsp&nbsp function() { alert("Здравствуйте!"); };<br><br>welcome(); <i>// теперь всё в порядке</i>',

    div34: '<h3>Когда использовать Function Declaration, а когда Function Expression?</h3><p>Как правило, если нам понадобилась функция, в первую очередь нужно рассматривать синтаксис Function Declaration, который мы использовали до этого. Он даёт нам больше свободы в том, как мы можем организовывать код. Функции, объявленные таким образом, можно вызывать до их объявления.</p><p>Также функции вида <b>function f(…) {…}</b> чуть более заметны в коде, чем <b>let f = function(…) {…}</b>. Function Declaration легче «ловятся глазами».</p><p>…Но если Function Declaration нам не подходит по какой-то причине, или нам нужно условное объявление (мы рассмотрели это в примере выше), то следует использовать Function Expression.</p>',

    next: '<b><a href="#" onclick="quickLink(); JSTheamFifteen()">JS topic 15</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); JSTheamSeventeen()">JS topic 17</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Семнадцатая тема.
let JSTopicSeventeenEng = {
    div1: '<h3>Arrow functions, basics</h3><p>There is another very simple and concise syntax for creating functions, which is often better than Function Expression.</p><p>It is called "arrow functions" or "arrow functions", because it looks like this:</p>',

    div2_example: 'let func = (arg1, arg2, ...argN) => expression;',

    div3: '<p>This creates a function <b>func</b> that takes arguments <b>arg1..argN</b>, then calculates <b>expression</b> on the right side using them and returns the result.</p><p>In other words, this is an abbreviated version:</p>',

    div4_example: 'let func = function(arg1, arg2, ...argN) {<br> &nbsp&nbsp&nbsp&nbsp return expression;<br>};',

    div5: 'Let\'s look at a concrete example:',

    div6_example: 'let sum = (a, b) => a + b;<br><br><i>/* This arrow function is a shorter form:<br><br>let sum = function(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>};<br>*/ </i><br><br>alert( sum(1, 2) ); <i>// 3</i>',

    div7: '<p>As you can see, <b>(a, b) => a + b</b> specifies a function that takes two arguments named <b>a</b> and <b>b</b>. And when executed, it evaluates the expression <b>a + b</b> and returns the result.</p><ul> <li>If we have only one argument, then the parentheses around the parameters can be omitted, making the entry even shorter:</li> </ul>',

    div8_example: 'let double = n => n * 2;<br><i>// about the same as: let double = function(n) { return n * 2 }</i><br><br>alert( double(3) ); <i>// 6</i>',

    div9: '<ul> <li>If there are no arguments, the parentheses will be empty, but they must be present:</li> </ul>',

    div10_example: 'let sayHi = () => alert("Hello!");<br><br>sayHi();',

    div11: '<p>Arrow functions can be used in the same way as Function Expression.</p><p>For example, to dynamically create a function:</p>',

    div12_example: 'let age = prompt("How old are you?", 18);<br><br>let welcome = (age < 18) ?<br> &nbsp&nbsp&nbsp&nbsp () => alert(\'Hi!\') :<br> &nbsp&nbsp&nbsp&nbsp () => alert("Hello!");<br><br>welcome();',

    div13: '<p>At first, the arrow functions may seem unusual and even difficult to read, but this will quickly pass as the eyes get used to these designs.</p><p>They are very convenient for simple one-line actions when you are too lazy to write a lot of words.</p>',

    div14: '<h3>Multiline arrow functions</h3><p>The arrow functions that we saw before were very simple. They took the arguments to the left of <b>=></b> and evaluated and returned the expression to the right.</p> <p>Sometimes we need a more complex function, with multiple expressions and instructions. This is also possible, you just need to enclose them in curly brackets. At the same time, an important difference is that in such brackets to return a value, you need to use <b>return</b> (as in normal functions).</p> <p>Like this:</p>',

    div15_example: 'let sum = (a, b) => {  <i>// curly brace that opens the body of a multiline function</i><br> &nbsp&nbsp&nbsp&nbsp let result = a + b;<br> &nbsp&nbsp&nbsp&nbsp   return result; <i>// if we use curly braces, then we need to explicitly specify "return"</i><br>};<br><br>alert( sum(1, 2) ); <i>// 3</i>',

    next: '<b><a href="#" onclick="quickLink(); JSTheamSixteen()">JS topic 16</a></b> - previous topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let JSTopicSeventeenRus = {
    div1: '<h3>Стрелочные функции, основы</h3><p>Существует ещё один очень простой и лаконичный синтаксис для создания функций, который часто лучше, чем Function Expression.</p><p>Он называется «функции-стрелки» или «стрелочные функции» (arrow functions), т.к. выглядит следующим образом:</p>',

    div2_example: 'let func = (arg1, arg2, ...argN) => expression;',

    div3: '<p>Это создаёт функцию <b>func</b>, которая принимает аргументы <b>arg1..argN</b>, затем вычисляет <b>expression</b> в правой части с их использованием и возвращает результат.</p><p>Другими словами, это сокращённая версия:</p>',

    div4_example: 'let func = function(arg1, arg2, ...argN) {<br> &nbsp&nbsp&nbsp&nbsp return expression;<br>};',

    div5: 'Давайте рассмотрим конкретный пример:',

    div6_example: 'let sum = (a, b) => a + b;<br><br><i>/* Эта стрелочная функция представляет собой более короткую форму:<br><br>let sum = function(a, b) {<br> &nbsp&nbsp&nbsp&nbsp return a + b;<br>};<br>*/ </i><br><br>alert( sum(1, 2) ); <i>// 3</i>',

    div7: '<p>Как вы можете видеть, <b>(a, b) => a + b</b> задаёт функцию, которая принимает два аргумента с именами <b>a</b> и <b>b</b>. И при выполнении она вычисляет выражение <b>a + b</b> и возвращает результат.</p><ul> <li>Если у нас только один аргумент, то круглые скобки вокруг параметров можно опустить, сделав запись ещё короче:</li> </ul>',

    div8_example: 'let double = n => n * 2;<br><i>// примерно тоже что и: let double = function(n) { return n * 2 }</i><br><br>alert( double(3) ); <i>// 6</i>',

    div9: '<ul> <li>Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать:</li> </ul>',

    div10_example: 'let sayHi = () => alert("Hello!");<br><br>sayHi();',

    div11: '<p>Стрелочные функции можно использовать так же, как и Function Expression.</p><p>Например, для динамического создания функции:</p>',

    div12_example: 'let age = prompt("Сколько Вам лет?", 18);<br><br>let welcome = (age < 18) ?<br> &nbsp&nbsp&nbsp&nbsp () => alert(\'Привет!\') :<br> &nbsp&nbsp&nbsp&nbsp () => alert("Здравствуйте!");<br><br>welcome();',

    div13: '<p>Поначалу стрелочные функции могут показаться необычными и даже трудночитаемыми, но это быстро пройдёт по мере того, как глаза привыкнут к этим конструкциям.</p><p>Они очень удобны для простых однострочных действий, когда лень писать много слов.</p>',

    div14: '<h3>Многострочные стрелочные функции</h3><p>Стрелочные функции, которые мы видели до этого, были очень простыми. Они брали аргументы слева от <b>=></b> и вычисляли и возвращали выражение справа.</p> <p>Иногда нам нужна более сложная функция, с несколькими выражениями и инструкциями. Это также возможно, нужно лишь заключить их в фигурные скобки. При этом важное отличие – в том, что в таких скобках для возврата значения нужно использовать <b>return</b> (как в обычных функциях).</p> <p>Вроде этого:</p>',

    div15_example: 'let sum = (a, b) => {  <i>// фигурная скобка, открывающая тело многострочной функции</i><br> &nbsp&nbsp&nbsp&nbsp let result = a + b;<br> &nbsp&nbsp&nbsp&nbsp   return result; <i>// если мы используем фигурные скобки, то нам нужно явно указать "return"</i><br>};<br><br>alert( sum(1, 2) ); <i>// 3</i>',
    
    next: '<b><a href="#" onclick="quickLink(); JSTheamSixteen()">JS topic 16</a></b> - предыдущая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// HTML.
// Содержание.
let HTMLContentEng = {
    div1: '<h3>HTML Basics</h3><p>*To select a theme, enter the theme ID key, which is indicated next to the theme name.</p> <ul> <li>Introduction to HTML - <b><a href="#" onclick="quickLink(); HTMLTopicOne()">HTML topic 1</a></b></li> <br> <li>Tools - <b><a href="#" onclick="quickLink(); HTMLTopicTwo()">HTML topic 2</a></b></li> <br> <li>Tags - <b><a href="#" onclick="quickLink(); HTMLTopicThree()">HTML topic 3</a></b></li> <br> <li>HTML code structure - <b><a href="#" onclick="quickLink(); HTMLTopicFour()">HTML topic 4</a></b></li> <br> <li>Types of tags - <b><a href="#" onclick="quickLink(); HTMLTopicFive()">HTML topic 5</a></b></li> <br> <li>Tag attribute values - <b><a href="#" onclick="quickLink(); HTMLTopicSix()">HTML topic 6</a></b></li> <br> <li>Text - <b><a href="#" onclick="quickLink(); HTMLTopicSeven()">HTML topic 7</a></b></li> <br> <li>Links - <b><a href="#" onclick="quickLink(); HTMLTopicEight()">HTML topic 8</a></b></li> <br> <li>Anchors - <b><a href="#" onclick="quickLink(); HTMLTopicNine()">HTML topic 9</a></b></li> <br> <li>Images - <b><a href="#" onclick="quickLink(); HTMLTopicTen()">HTML topic 10</a></b></li> <br> <li>Lists - <b><a href="#" onclick="quickLink(); HTMLTopicEleven()">HTML topic 11</a></b></li> <br> <li>Tables - <b><a href="#" onclick="quickLink(); HTMLTopicTwelwe()">HTML topic 12</a></b></li> <br> <li>Frames - <b><a href="#" onclick="quickLink(); HTMLTopicThirteen()">HTML topic 13</a></b></li> <br> <li>Document validation - <b><a href="#" onclick="quickLink(); HTMLTopicFourteen()">HTML topic 14</a></b></li> </ul>',

    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen',
}
/*
<a href="#" onclick="quicLinkHome()">home</a>

<a href="#" onclick="quickLink(); HTMLTopicOne()">HTML topic 1</a>

<a href="#" onclick="quickLink(); HTMLTopicTwo()">HTML topic 2</a>

<a href="#" onclick="quickLink(); HTMLTopicThree()">HTML topic 3</a>

<a href="#" onclick="quickLink(); HTMLTopicFour()">HTML topic 4</a>

<a href="#" onclick="quickLink(); HTMLTopicFive()">HTML topic 5</a>

<a href="#" onclick="quickLink(); HTMLTopicSix()">HTML topic 6</a>

<a href="#" onclick="quickLink(); HTMLTopicSeven()">HTML topic 7</a>

<a href="#" onclick="quickLink(); HTMLTopicEight()">HTML topic 8</a>

<a href="#" onclick="quickLink(); HTMLTopicNine()">HTML topic 9</a>

<a href="#" onclick="quickLink(); HTMLTopicTen()">HTML topic 10</a>

<a href="#" onclick="quickLink(); HTMLTopicEleven()">HTML topic 11</a>

<a href="#" onclick="quickLink(); HTMLTopicTwelwe()">HTML topic 12</a>

<a href="#" onclick="quickLink(); HTMLTopicThirteen()">HTML topic 13</a>

<a href="#" onclick="quickLink(); HTMLTopicFourteen()">HTML topic 14</a>
*/
let HTMLContentRus = {
    div1: '<h3>Основы HTML</h3><p>*Для того, чтобы выбрать тему, введите ключ-идентификатор темы, который указан рядом с названием темы.</p> <ul> <li>Введение в HTML - <b><a href="#" onclick="quickLink(); HTMLTopicOne()">HTML topic 1</a></b></li> <br> <li>Инструментарий - <b><a href="#" onclick="quickLink(); HTMLTopicTwo()">HTML topic 2</a></b></li> <br> <li>Теги - <b><a href="#" onclick="quickLink(); HTMLTopicThree()">HTML topic 3</a></b></li> <br> <li>Структура HTML-кода - <b><a href="#" onclick="quickLink(); HTMLTopicFour()">HTML topic 4</a></b></li> <br> <li>Типы тегов - <b><a href="#" onclick="quickLink(); HTMLTopicFive()">HTML topic 5</a></b></li> <br> <li>Значения атрибутов тегов - <b><a href="#" onclick="quickLink(); HTMLTopicSix()">HTML topic 6</a></b></li> <br> <li>Текст - <b><a href="#" onclick="quickLink(); HTMLTopicSeven()">HTML topic 7</a></b></li> <br> <li>Ссылки - <b><a href="#" onclick="quickLink(); HTMLTopicEight()">HTML topic 8</a></b></li> <br> <li>Якоря - <b><a href="#" onclick="quickLink(); HTMLTopicNine()">HTML topic 9</a></b></li> <br> <li>Изображения - <b><a href="#" onclick="quickLink(); HTMLTopicTen()">HTML topic 10</a></b></li> <br> <li>Списки - <b><a href="#" onclick="quickLink(); HTMLTopicEleven()">HTML topic 11</a></b></li> <br> <li>Таблицы - <b><a href="#" onclick="quickLink(); HTMLTopicTwelve()">HTML topic 12</a></b></li> <br> <li>Фреймы - <b><a href="#" onclick="quickLink(); HTMLTopicThirteen()">HTML topic 13</a></b></li> <br> <li>Валидация документов - <b><a href="#" onclick="quickLink(); HTMLTopicFourteen()">HTML topic 14</a></b></li> </ul>',

    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран',
}

// Введение
let HTMLIntroductionEng = {
    div1: '<h3>Introduction to HTML</h3><p>In order to immediately bring impatient readers up to date, we will offer them the opportunity to create a web page without consistently studying HTML rules. At least you will be able to make sure that creating web pages is a fairly simple thing.</p>',

    div2_example: `&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt<br> &lthtml&gt<br> &nbsp&nbsp &lthead&gt<br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt<br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtMy first web page&lt/title&gt<br> &nbsp&nbsp &lt/head&gt<br> &nbsp&nbsp &ltbody&gt<br><br> &nbsp&nbsp &nbsp&nbsp &lth1&gtPage title&lt/h1&gt<br> &nbsp&nbsp &nbsp&nbsp &ltp&gtMain text.&lt/p&gt<br><br> &nbsp&nbsp &lt/body&gt<br>&lt/html&gt`,

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTwo()">HTML topic 2</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.',
}

let HTMLIntroductionRus = {
    div1: '<h3>Введение в HTML</h3><p>Чтобы сразу же ввести в курс дела нетерпеливых читателей, предложим им возможность создания веб-страницы без последовательного изучения правил HTML. По крайней мере, вы сумеете убедиться, что создание веб-страниц достаточно простая штука.</p>',

    div2_example: `&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt<br> &lthtml&gt<br> &nbsp&nbsp &lthead&gt<br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt<br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtМоя первая веб-страница&lt/title&gt<br> &nbsp&nbsp &lt/head&gt<br> &nbsp&nbsp &ltbody&gt<br><br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок страницы&lt/h1&gt<br> &nbsp&nbsp &nbsp&nbsp &ltp&gtОсновной текст.&lt/p&gt<br><br> &nbsp&nbsp &lt/body&gt<br>&lt/html&gt`,

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTwo()">HTML topic 2</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.',
}

// Инструментарий.
let HTMLToolsEng = {
    div1: '<h3>Tools</h3><p>To work effectively, you cannot do without the necessary and familiar tools, including when writing HTML code. Therefore, for the initial development of web pages or even a small <b>site </b> - this is the name of a set of pages linked by links and a single design, we will need the following programs.</p><ul><li>A text editor.</li><li>Browser to view the results.</li><li>Validator is a program for checking HTML syntax and detecting errors in the code.</li><li>Graphic editor.</li><li>HTML Tags Reference.</li></ul>',

    div2: '<h3>Text Editor</h3><p>An HTML document can be created in any text editor, even a Notepad, however, not every program is suitable for this purpose. We need one that supports the following features:</p><ul><li><b>Syntax highlighting</b> — highlighting tags, text, keywords and parameters in different colors. This makes it easier to find the right element, speeds up the developer\'s work and reduces the occurrence of errors;</li><li><b>Working with tabs</b>. The site is a set of files that have to be edited separately, which requires an editor who can simultaneously work with several documents at once. At the same time, it is convenient to open files in separate tabs to quickly navigate to the desired document;</li><li><b>Checking for errors</b> current document.</li></ul><p>Light and simple text editors are listed below:</p><ul><li><b>PSPad</b></li><li><b>HtmlReader</b></li><li><b>Notepad++</b></li><li><b>EditPlus</b></li></ul>',

	div3_image: '<div class="div_image_print"><img class="image_print" src="image/NotePad.png" alt="image"></div><div class="div_text_image"><p>NotePad++</p></div>',

    div4: '<h3>Browser</h3><p>A browser is a program designed for browsing the web. At first, any browser will do, but with increasing experience and knowledge, you will need to start a whole "menagerie" to check the correctness of the site display in different browsers. The fact is that each browser has its own unique features, so to check the universality of the code, you need to view and adjust the code to take them into account. To date , three browsers are the most popular: <b>Firefox</b>, <b>Chrome</b> and <b>Opera</b>.</p>',

	div5_image: '<div class="div_image_print"><img class="image_print" src="image/Firefox.png" alt="image"></div><div class="div_text_image"><p>Firefox</p></div>',

    div6: '<h3>Validator</h3><p><b>Validation</b> An HTML document is designed to identify errors in the syntax of a web page and discrepancies with the HTML specification. Accordingly, the program or system for such verification is called a <b>validator</b>.</p><p>If you have Internet access, you should go to http://validator.w3.org and enter the path to the document or site being checked in a special form. After verification, possible errors will be shown or an inscription will appear that the document has passed validation successfully.</p><p>To check the local HTML file or in the absence of an Internet connection, the Tidy program is designed. Some editors, for example, PSPad, already contain a built-in Tidy and document validation can be carried out without additional funds.</p>',

    div7: '<h3>Graphic Editor</h3><p>A graphic editor is needed to process images and prepare them for publication on a web page. The most popular program of this kind is <b>Photoshop</b>, which has become the standard for photo processing and creating graphic images for websites. But in most cases, the power of <b>Photoshop</b> is excessive, and it\'s better to use something simpler and more agile. In particular, the program <b>Paint.Net</b> or <b>Gimp</b allows you to do all the necessary manipulations with images, in addition, they are free to use.</p>',

	div8_image: '<div class="div_image_print"><img class="image_print" src="image/gimp.png" alt="image"></div><div class="div_text_image"><p>Gimp</p></div>',

    div9: '<h3>HTML Tags Reference</h3><p>It is difficult to memorize all the tags and their parameters by heart at first, so you need to periodically look into the manual to clarify this or that question. In general, everyone needs a good reference book, regardless of the level of training.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicOne()">HTML topic 1</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicThree()">HTML topic 3</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLToolsRus = {
    div1: '<h3>Инструментарий</h3><p>Для эффективной работы не обойтись без необходимых и привычных инструментов, в том числе и при написании кода HTML. Поэтому для начальной разработки веб-страниц или даже небольшого <b>сайта</b> — так называется набор страниц, связанных между собой ссылками и единым оформлением, нам понадобятся следующие программы.</p><ul><li>Текстовый редактор.</li><li>Браузер для просмотра результатов.</li><li>Валидатор — программа для проверки синтаксиса HTML и выявления ошибок в коде.</li><li>Графический редактор.</li><li>Справочник по тегам HTML.</li></ul>',

    div2: '<h3>Текстовый редактор</h3><p>HTML-документ можно создавать в любом текстовом редакторе, хоть Блокноте, тем не менее, для этой цели подойдет не всякая программа. Нужна такая, чтобы поддерживала следующие возможности:</p><ul><li><b>Подсветка синтаксиса</b> — выделение тегов, текста, ключевых слов и параметров разными цветами. Это облегчает поиск нужного элемента, ускоряет работу разработчика и снижает возникновение ошибок;</li><li><b>Работа с вкладками</b>. Сайт представляет собой набор файлов, которые приходится править по отдельности, для чего нужен редактор, умеющий одновременно работать сразу с несколькими документами. При этом файлы удобно открывать в отдельных вкладках, чтобы быстро переходить к нужному документу;</li><li><b>Проверка на ошибки</b> текущего документа.</li></ul><p>Лёгкие и простые текстовые редакторы приведены ниже:</p><ul><li><b>PSPad</b></li><li><b>HtmlReader</b></li><li><b>Notepad++</b></li><li><b>EditPlus</b></li></ul>',

    div3_image: '<div class="div_image_print"><img class="image_print" src="image/NotePad.png" alt="image"></div><div class="div_text_image"><p>NotePad++</p></div>',

    div4: '<h3>Браузер</h3><p>Браузер это программа, предназначенная для просмотра веб-страниц. На первых порах подойдет любой браузер, но с повышением опыта и знаний потребуется завести целый «зверинец», чтобы проверять правильность отображения сайта в разных браузерах. Дело в том, что каждый браузер имеет свои уникальные особенности, поэтому для проверки универсальности кода требуется просматривать и корректировать код с их учетом. На сегодняшний день наибольшей популярностью пользуются три браузера: <b>Firefox</b>, <b>Chrome</b> и <b>Opera</b>.</p>',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/Firefox.png" alt="image"></div><div class="div_text_image"><p>Firefox</p></div>',

    div6: '<h3>Валидатор</h3><p><b>Валидация</b> HTML-документа предназначена для выявления ошибок в синтаксисе веб-страницы и расхождений со спецификацией HTML. Соответственно, программа или система для такой проверки называется <b>валидатором</b>.</p><p>Если есть доступ в Интернет, то следует зайти по адресу http://validator.w3.org и ввести путь к проверяемому документу или сайту в специальной форме. После проверки будут показаны возможные ошибки или появится надпись, что документ прошел валидацию успешно.</p><p>Для проверки локального HTML-файла или при отсутствии подключения к Интернету, предназначена программа Tidy. Некоторые редакторы, например, PSPad, уже содержат встроенный Tidy и валидацию документа можно провести без дополнительных средств.</p>',

    div7: '<h3>Графический редактор</h3><p>Графический редактор необходим для обработки изображений и их подготовки для публикации на веб-странице. Самой популярной программой такого рода является <b>Photoshop</b>, ставший стандартом для обработки фотографий и создания графических изображений для сайтов. Но в большинстве случаев мощь <b>Photoshop-а</b> избыточна, и лучше воспользоваться чем-нибудь более простым и проворным. В частности, программа <b>Paint.Net</b> или <b>Gimp</b> позволяют сделать все необходимые манипуляции с изображениями, вдобавок бесплатны для использования.</p>',

	div8_image: '<div class="div_image_print"><img class="image_print" src="image/gimp.png" alt="image"></div><div class="div_text_image"><p>Gimp</p></div>',

    div9: '<h3>Справочник по тегам HTML</h3><p>Запоминать все теги и их параметры наизусть на первых порах сложно, поэтому требуется периодически заглядывать в руководство, чтобы уточнить тот или иной вопрос. Вообще, хороший справочник нужен всем, независимо от уровня подготовки.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicOne()">HTML topic 1</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicThree()">HTML topic 3</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Теги.
let HTMLTagsEng = {
    div1: '<h3>Tags</h3><p>So that the browser understands when displaying the document that it is not dealing with plain text, but with a formatting element and <b>tags</b> are used. The general syntax for writing tags is as follows.</p>',

    div2_example: '&lttag attribute1="value" attribute2="value"&gt<br>&lttag attribute1="value" attribute2="value"&gt...&lt/tag&gt',

    div3: '<p>As can be seen from this example, there are two types of tags — <b>single</b> and <b>paired</b> (containers). A single tag is used independently, and a paired tag can include other tags or text inside. Tags can have various attributes that are separated by a space. However, there are tags without any additional attributes. Conditionally, attributes can be divided into mandatory, they must necessarily be present, and optional, their addition depends on the purpose of using the tag.</p><p>The example shows a typical HTML document with tags and text:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLorem ipsum&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtLorem ipsum dolor sit amet consectetuer cursus pede pellentesque vitae pretium. Tristique mus at elit lobortis libero Sed vestibulum ut eleifend habitasse. Quis Nam Mauris adipiscing Integer ligula dictum sed at enim urna. Et scelerisque id et nibh dui tincidunt Curabitur faucibus elit massa. Tincidunt et gravida Phasellus eget parturient faucibus tellus at justo sollicitudin. Mi nulla ut adipiscing.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_1.png" alt="image"></div><div class="div_text_image"><p>Lorem ipsum</p></div>',

    div6: '<h3>Paired tags</h3><p><b>Paired tags</b>, containers, called in another way, consist of two parts — an opening and closing tag. The opening tag is denoted as a single — &lttag&gt, and the closing one uses a slash — &lt/tag&gt. It is allowed to put other tags in the container, but their order should be observed.</p>',

    div7: '<h3>Rules for using tags</h3><p>For tags of any type, certain rules apply for their use. Moreover, some rules are mandatory, while others are recommendations, i.e. they can be followed, or they can not.</p>',

    div8: '<h3>Tag attributes and quotes</h3><p>According to the HTML specification, all tag attribute values should be specified in double ("example") or single quotes (\'example\'). The absence of quotation marks will not lead to errors, browsers in many cases correctly process the code without quotation marks, with the exception of text containing spaces.</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtQuotation marks in the attribute alt&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" alt="Header type" width="400" height="101"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" alt=Header type width="400" height="101"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_2.png" alt="image"></div><div class="div_text_image"><p>Quotes in the alt attribute</p></div>',

    div11: '<p>In this example, line 8 is written correctly, with all quotes, and in line 9, the <b>alt</b> attribute has no quotes. Because of this, the browser will take only the first word ("View") as the <b>alt</b> value, and the word "header" will be perceived as an erroneous value. Therefore, always learn to specify the values of tag attributes in quotation marks.</p>',

    div12: '<h3>Tags can be written in both uppercase and lowercase characters</h3><p>Any tags, as well as their attributes, are case insensitive, so you are free to choose how to write — <b>&ltBR&gt</b>, <b>&ltBr&gt</b> or <b>&ltbr&gt</b>. In any case, it is recommended to adhere to the selected form of recording throughout all pages of the site. Note also that text typed entirely in uppercase characters reads worse than text with lowercase characters or mixed.</p>',

    div13: '<h3>Line breaks</h3><p>It is permissible to put line breaks between its attributes inside a tag. The example shows the same line, but decorated in different ways:</p>',

    div14_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtQuotation marks in the attribute alt&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br>  &nbsp&nbsp  &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" alt="Header view in IE" width="400" height="101"&gt&lt/p&gt <br> &nbsp&nbsp  &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" <br> &nbsp&nbsp  &nbsp&nbsp alt="Header view in IE" <br> &nbsp&nbsp &nbsp&nbsp width="400" <br> &nbsp&nbsp &nbsp&nbsp height="101"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div15_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_3.png" alt="image"></div><div class="div_text_image"><p>Quotes in the alt attribute with line breaks</p></div>',

    div16: '<p>In this example, the first tag<b>&ltimg&gt</b> typed in one line, including all its attributes, and the second tag <b>&ltimg&gt</b> it is divided into several lines.</p>',

    div17: '<h3>Unknown tags and attributes</h3><p>If any tag or its attribute was written incorrectly, the browser will ignore such a tag and display the text as if the tag did not exist. Again, unknown tags should be avoided, since the HTML code will not pass validation.</p>',

    div18: '<h3>Tag order</h3><p>There is a certain hierarchy of nesting tags. For example, the tag <b>&lttitle&gt</b> must be inside the container <b>&lthead&gt</b> and nowhere else. To avoid errors, make sure that the tags are placed correctly in the code.</p><p> If the tags are equivalent to each other in the hierarchy of communication, then their sequence does not matter. So, you can swap tags <b>&lttitle&gt</b> and <b>&ltmeta&gt</b>, this will not affect the final result in any way.</p>',

    div19: '<h3>Close all tags</h3><p>There are three states of the closing tag: required, not required, or not required. The mandatory closing tag must always be present, otherwise it will lead to an error when displaying the document. For some tags like <b>&ltbr&gt</b> there is no closing tag in principle. An optional closing tag indicates that the developer can either add or omit it, this will not lead to an error. However, we recommend closing all such tags, including optional ones, this disciplines, creates a more slender and strict code that is easy to modify.</p>',

    div20: '<h3>Tag Attributes</h3><p>To expand the capabilities of individual tags and manage the contents of containers more flexibly, tag attributes are applied.</p><p>Default values are used for tag attributes. When no valid attribute is added to the tag, it means that the browser will substitute the default value in this case. If you expected to get a different result on a web page, check if you should explicitly specify the values of some attributes.</p>',

    div21: '<h3>Attributes without values</h3><p>It is acceptable to use some attributes for tags without assigning them any value, as shown in the example:</p>',

    div22_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtAdding a form&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltform action="self.php"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltinput type="text"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltinput type="submit" disabled&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/form&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div23_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_4.png" alt="image"></div><div class="div_text_image"><p>Adding a form</p></div>',

    div24: 'In this example, the <b>disabled</b> attribute is used, which does not have an explicitly set value. Such a record is called <b>«abbreviated tag attribute»</b>.',

    div25: '<h3>The order of attributes in tags</h3><p>The order of attributes in any tag does not matter and does not affect the result of the element display. Therefore , tags of the form <b>&ltimg src="/images/title.gif" width="438" height="118"&gt and &ltimg height="118" width="438" src="/images/title.gif"&gt</b> they are equal in their action.</p>',

    div26: '<h3>Attribute format</h3><p>Each tag attribute belongs to a specific type (for example: text, number, file path, etc.), which must be taken into account when writing the attribute. So, the example mentions the tag <b>&ltimg&gt</b>, it adds a drawing to the web page, and its <b>width</b> attribute sets the width of the image in pixels. If you do not put a number, but something else, the value will be ignored and an error will occur during document validation. </p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTwo()">HTML topic 2</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicFour()">HTML topic 4</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLTagsRus = {
    div1: '<h3>Теги</h3><p>Чтобы браузер при отображении документа понимал, что имеет дело не с простым текстом, а с элементом форматирования, которые необходимы для корректного распознования структуры страницы и применяются <b>теги</b>. Общий синтаксис написания тегов следующий.</p>',

    div2_example: '&ltтег атрибут1="значение" атрибут2="значение"&gt<br>&ltтег атрибут1="значение" атрибут2="значение"&gt...&lt/тег&gt',

    div3: '<p>Как видно из данного примера, теги бывают двух типов — <b>одиночные</b> и <b>парные</b> (контейнеры). Одиночный тег используется самостоятельно, а парный может включать внутри себя другие теги или текст. У тегов допустимы различные атрибуты, которые разделяются между собой пробелом. Впрочем, есть теги без всяких дополнительных атрибутов. Условно атрибуты можно подразделить на обязательные, они непременно должны присутствовать, и необязательные, их добавление зависит от цели применения тега.</p><p>В примере показан типичный HTML-документ с тегами и текстом:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLorem ipsum&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtLorem ipsum dolor sit amet consectetuer cursus pede pellentesque vitae pretium. Tristique mus at elit lobortis libero Sed vestibulum ut eleifend habitasse. Quis Nam Mauris adipiscing Integer ligula dictum sed at enim urna. Et scelerisque id et nibh dui tincidunt Curabitur faucibus elit massa. Tincidunt et gravida Phasellus eget parturient faucibus tellus at justo sollicitudin. Mi nulla ut adipiscing.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_1.png" alt="image"></div><div class="div_text_image"><p>Lorem ipsum</p></div>',

    div6: '<h3>Парные теги</h3><p><b>Парные теги</b>, называемые по-другому контейнеры, состоят из двух частей — открывающий и закрывающий тег. Открывающий тег обозначается как и одиночный — &ltтег&gt, а в закрывающем используется слэш — &lt/тег&gt. Допускается вкладывать в контейнер другие теги, однако следует соблюдать их порядок.</p>',

    div7: '<h3>Правила применения тегов</h3><p>Для тегов любого типа действуют определенные правила их использования. Причем, некоторые правила обязательны для выполнения, а другие являются рекомендациями, т.е. их можно выполнять, а можно и нет.</p>',

    div8: '<h3>Атрибуты тегов и кавычки</h3><p>Согласно спецификации HTML все значения атрибутов тегов следует указывать в двойных ("пример") или одинарных кавычках (\'пример\'). Отсутствие кавычек не приведет к ошибкам, браузеры во многих случаях достаточно корректно обрабатывают код и без кавычек, за исключением текста, содержащего пробелы.</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtКавычки в атрибуте alt&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" alt="Вид заголовка" width="400" height="101"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" alt=Вид заголовка width="400" height="101"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_2.png" alt="image"></div><div class="div_text_image"><p>Кавычки в атрибуте alt</p></div>',

    div11: '<p>В данном примере строка 8 написана правильно, со всеми кавычками, а в строке 9 у атрибута <b>alt</b> кавычки отсутствуют. Из-за этого браузер в качестве значения <b>alt</b> возьмет только первое слово («Вид»), а слово «заголовка» будет воспринято как ошибочное значение. Поэтому всегда приучайтесь указывать значения атрибутов тегов в кавычках.</p>',

    div12: '<h3>Теги можно писать как прописными, так и строчными символами</h3><p>Любые теги, а также их атрибуты нечувствительны к регистру, поэтому вы вольны выбирать сами, как писать — <b>&ltBR&gt</b>, <b>&ltBr&gt</b> или <b>&ltbr&gt</b>. В любом случае рекомендуется придерживаться выбранной формы записи на протяжении всех страниц сайта. Заметим также, что текст, полностью набранный прописными символами, читается хуже, чем текст со строчными символами или смешанный.</p>',

    div13: '<h3>Переносы строк</h3><p>Внутри тега между его атрибутами допустимо ставить перенос строк. В примере показана одна и та же строка, но оформленная разными способами:</p>',

    div14_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtКавычки в атрибуте alt&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br>  &nbsp&nbsp  &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" alt="Вид заголовка в IE" width="400" height="101"&gt&lt/p&gt <br> &nbsp&nbsp  &nbsp&nbsp &ltp&gt&ltimg src="images/arena.png" <br> &nbsp&nbsp  &nbsp&nbsp alt="Вид заголовка в браузере IE" <br> &nbsp&nbsp &nbsp&nbsp width="400" <br> &nbsp&nbsp &nbsp&nbsp height="101"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div15_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_3.png" alt="image"></div><div class="div_text_image"><p>Кавычки в атрибуте alt с переносом строк</p></div>',

    div16: '<p>В данном примере первый тег <b>&ltimg&gt</b> набран в одну строку, включая все его атрибуты, а второй тег <b>&ltimg&gt</b> разбит на несколько строк.</p>',

    div17: '<h3>Неизвестные теги и атрибуты</h3><p>Если какой-либо тег или его атрибут был написан неверно, то браузер проигнорирует подобный тег и будет отображать текст так, словно тега и не было. Опять же, следует избегать неизвестных тегов, поскольку код HTML не пройдет валидацию.</p>',

    div18: '<h3>Порядок тегов</h3><p>Существует определенная иерархия вложенности тегов. Например, тег <b>&lttitle&gt</b> должен находиться внутри контейнера <b>&lthead&gt</b> и нигде иначе. Чтобы не возникло ошибки, следите за тем, чтобы теги располагались в коде правильно.</p><p> Если теги между собой равноценны в иерархии связи, то их последовательность не имеет значения. Так, можно поменять местами теги <b>&lttitle&gt</b> и <b>&ltmeta&gt</b>, на конечном результате это никак не скажется.</p>',

    div19: '<h3>Закрывайте все теги</h3><p>Существует три состояния закрывающего тега: обязателен, не требуется или не обязателен. Обязательный закрывающий тег должен присутствовать всегда, иначе это приведет к ошибке при отображении документа. Для некоторых тегов вроде <b>&ltbr&gt</b> закрывающего тега нет в принципе. Необязательный закрывающий тег говорит о том, что разработчик может его как добавить, так и опустить, к ошибке это не приведет. Однако рекомендуем закрывать все подобные теги, включая необязательные, это дисциплинирует, создает более стройный и строгий код, который легко модифицировать.</p>',

    div20: '<h3>Атрибуты тегов</h3><p>Чтобы расширить возможности отдельных тегов и более гибко управлять содержимым контейнеров и применяются атрибуты тегов.</p><p>Для атрибутов тегов используются значения по умолчанию. Когда для тега не добавлен какой-либо допустимый атрибут, это означает, что браузер в этом случае будет подставлять значение, заданное по умолчанию. Если вы ожидали получить иной результат на веб-странице, проверьте, возможно, следует явно указать значения некоторых атрибутов.</p>',

    div21: '<h3>Атрибуты без значений</h3><p>Допустимо использовать некоторые атрибуты у тегов, не присваивая им никакого значения, как показано в примере:</p>',

    div22_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtДобавление формы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltform action="self.php"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltinput type="text"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltinput type="submit" disabled&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/form&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div23_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_tag_4.png" alt="image"></div><div class="div_text_image"><p>Добавление формы</p></div>',

    div24: 'В данном примере используется атрибут <b>disabled</b>, у которого явно не задано значение. Подобная запись называется <b>«сокращенный атрибут тега»</b>.',

    div25: '<h3>Порядок атрибутов в тегах</h3><p>Порядок атрибутов в любом теге не имеет значения и на результат отображения элемента не влияет. Поэтому теги вида <b>&ltimg src="/images/title.gif" width="438" height="118"&gt и &ltimg height="118" width="438" src="/images/title.gif"&gt</b> по своему действию равны.</p>',

    div26: '<h3>Формат атрибутов</h3><p>Каждый атрибут тега относится к определенному типу (например: текст, число, путь к файлу и др.), который обязательно должен учитываться при написании атрибута. Так, в примере упоминается тег <b>&ltimg&gt</b>, он добавляет на веб-страницу рисунок, а его атрибут <b>width</b> задает ширину изображения в пикселах. Если поставить не число, а нечто другое, то значение будет проигнорировано и возникнет ошибка при валидации документа. </p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTwo()">HTML topic 2</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicFour()">HTML topic 4</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Структура.
let HTMLStructureEng = {
    div1: '<h3>HTML code structure</h3><p>If you open any web page, it will contain typical elements that do not change from the type and orientation of the site. The example shows the code of a simple document containing the main tags:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtExample of a web page&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtHeading&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp <i>&lt!-- Comment --&gt</i> <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtFirst paragraph.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtSecond paragraph.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lthtml&gt',

    div3_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_structure_1.png" alt="image"></div><div class="div_text_image"><p>Example of a web page</p></div>',

    div4: '<p>Element <b>&lt!DOCTYPE&gt</b> it is intended for specifying the type of the current document — <b>DTD</b> (document type definition, description of the document type). This is necessary so that the browser understands how to interpret the current web page, because <b>HTML</b> exists in several versions, in addition, there is <b>XHTML</b> (EXtensible HyperText Markup Language, extended hypertext markup language), similar to <b>HTML</b>, but differing with it in syntax. So that the browser "does not get confused" and understands according to which standard to display a web page and it is necessary to specify in the first line of the code <b>&lt!DOCTYPE&gt</b>.</p><p>There are several types <b>&lt!DOCTYPE&gt</b>, they vary depending on the version <b>HTML</b>, which are focused on.</p><p>HTML 4.01:</p><ul><li><b>&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt</b> - strict HTML syntax.</li><br><li><b>&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt</b> - transitional HTML syntax.</li><br><li><b>&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt</b> - frames are used in the HTML document.</li></ul><p>HTML 5:</p><ul><li><b>&lt!DOCTYPE html&gt</b> - there is only one doctype in this HTML version.</li></ul><p>XHTML 1.0:</p><ul><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt</b> - strict XHTML syntax.</li><br><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt</b> - transitional syntax of XHTML.Transitional syntax of XHTML.</li><br><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"&gt</b> - the document is written in XHTML and contains frames.</li></ul><p>XHTML 1.1:</p><ul><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"&gt</b> - The developers of XHTML 1.1 assume that it will gradually replace HTML. As you can see, this definition has no division into types, since the syntax is the same and obeys clear rules.</li></ul>',

    div5: '<p>The difference between a strict and a transitional description of a document is a different approach to writing the document code. Strict HTML requires strict adherence to the HTML specification and does not forgive mistakes. Transitional HTML is more "calm" about some code flaws, so it is preferable to use this type in certain cases.</p><p> For example, in strict HTML and XHTML, the presence of a tag is required by all means <b>&lttitle&gt</b>, and in the transitional HTML, you can omit it and not specify it. At the same time, remember that the browser will show the document in any case, regardless of whether it corresponds to the syntax or not. Such verification is carried out using a validator and is intended primarily for developers to track errors in the document.</p><p> In the future, we will apply mainly strict <b>&lt!DOCTYPE&gt</b>, except when it is specifically stipulated. This will allow us to avoid typical mistakes and teach us to write syntactically correct code. You can often find HTML code without using it at all <b>&lt!DOCTYPE&gt</b>, the web page will still be displayed in such a case. However, it may happen that the same document is displayed differently in the browser when using <b>&lt!DOCTYPE&gt</b> and without him. In addition, browsers can show such documents in their own way, as a result, the page will "crumble", i.e. it will not be displayed at all as required by the developer. To avoid such situations, always add <b>&lt!DOCTYPE&gt</b> to the beginning of the document.</p><p> Tag <b>&lthtml&gt</b> defines the beginning of the HTML file, the header is stored inside it (<b>&lthead&gt</b>) and the body of the document (<b>&ltbody&gt</b>).</p><p>The title of the document, as the block is also called <b>&lthead&gt</b>, it may contain text and tags, but the contents of this section are not shown directly on the page, except for the container <b>&lttitle&gt</b>.</p><p> Tag <b>&ltmeta&gt</b> it is universal and adds a whole class of features, in particular, using meta tags, as this tag is generally called, you can change the page encoding, add keywords, document description, and much more. So that the browser understands that it is dealing with encoding <b>UTF-8</b> (Unicode transformation format, Unicode conversion format)and this line is added:</p><p><b>&ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt</b></p>',

    div6: '<p>Tag <b>&lttitle&gt</b> defines the title of a web page, this is one of the important elements designed to solve a variety of tasks. In the <b>Windows</b> operating system, the title text is displayed in the upper-left corner of the browser window: <b>&lttitle&gtExample of a web page&lt/title&gt</b></p><p>Document body <b>&ltbody&gt</b> it is intended for placing tags and the content part of a web page.</p>',

    div7: '<p>HTML offers six text headers of different levels, which show the relative importance of the section located after the header. So, the tag <b>&lth1&gt</b> represents the most important header of the first level, and the tag <b>&lth6&gt</b> it is used to indicate the sixth level header and is the least significant. By default, the title of the first level is displayed in the largest bold font, the titles of the next level are smaller in size. Tags <b>&lth1&gt...&lth6&gt</b> refer to block elements, they always start with a new line, and after them other elements are displayed on the next line. In addition, an empty space is added before and after the header.</p><p> Some text can be hidden from display in the browser by making it a comment. Although the user will not see such a text, it will still be transmitted in the document, so by looking at the source code, you can find hidden notes.:<i>&lt!-- Comment --&gt</i></p><p> Comments are needed to make their own entries in the code that do not affect the appearance of the page. They begin with the tag <b>&lt!--</b> and end with a tag <b>--&gt</b>. Everything between these tags will not be displayed on the web page.</p><p> Tag <b>&ltp&gt</b> defines a paragraph (paragraph) of the text. If there is no closing tag, it is assumed that the end of the paragraph coincides with the beginning of the next block element.</p><p>Tag <b>&ltp&gt</b> it is a block element, so the text always begins with a new line, paragraphs following each other are separated by a chipping (the so-called empty space between them).</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicThree()">HTML topic 3</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicFive()">HTML topic 5</a> </b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLStructureRus = {
    div1: '<h3>Структура HTML-кода</h3><p>Если открыть любую веб-страницу, то она будет содержать в себе типичные элементы, которые не меняются от вида и направленности сайта. В примере показан код простого документа, содержащего основные теги:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtПример веб-страницы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp <i>&lt!-- Комментарий --&gt</i> <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtПервый абзац.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtВторой абзац.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lthtml&gt',

    div3_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_structure_1.png" alt="image"></div><div class="div_text_image"><p>Пример веб-страницы</p></div>',

    div4: '<p>Элемент <b>&lt!DOCTYPE&gt</b> предназначен для указания типа текущего документа — <b>DTD</b> (document type definition, описание типа документа). Это необходимо, чтобы браузер понимал, как следует интерпретировать текущую веб-страницу, ведь <b>HTML</b> существует в нескольких версиях, кроме того, имеется <b>XHTML</b> (EXtensible HyperText Markup Language, расширенный язык разметки гипертекста), похожий на <b>HTML</b>, но различающийся с ним по синтаксису. Чтобы браузер «не путался» и понимал, согласно какому стандарту отображать веб-страницу и необходимо в первой строке кода задавать <b>&lt!DOCTYPE&gt</b>.</p><p>Существует несколько видов <b>&lt!DOCTYPE&gt</b>, они различаются в зависимости от версии <b>HTML</b>, на которую ориентированы.</p><p>HTML 4.01:</p><ul><li><b>&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt</b> - строгий синтаксис HTML.</li><br><li><b>&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt</b> - переходный синтаксис HTML.</li><br><li><b>&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt</b> - в HTML-документе применяются фреймы.</li></ul><p>HTML 5:</p><ul><li><b>&lt!DOCTYPE html&gt</b> - в этой версии HTML только один доктайп.</li></ul><p>XHTML 1.0:</p><ul><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt</b> - строгий синтаксис XHTML.</li><br><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt</b> - переходный синтаксис XHTML.Переходный синтаксис XHTML.</li><br><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"&gt</b> - документ написан на XHTML и содержит фреймы.</li></ul><p>XHTML 1.1:</p><ul><li><b>&lt!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"&gt</b> - разработчики XHTML 1.1 предполагают, что он постепенно вытеснит HTML. Как видите, никакого деления на виды это определение не имеет, поскольку синтаксис один и подчиняется четким правилам.</li></ul>',

    div5: '<p>Разница между строгим и переходным описанием документа состоит в различном подходе к написанию кода документа. Строгий HTML требует жесткого соблюдения спецификации HTML и не прощает ошибок. Переходный HTML более «спокойно» относится к некоторым огрехам кода, поэтому этот тип в определенных случаях использовать предпочтительнее.</p><p> Например, в строгом HTML и XHTML непременно требуется наличие тега <b>&lttitle&gt</b>, а в переходном HTML его можно опустить и не указывать. При этом помним, что браузер в любом случае покажет документ, независимо от того, соответствует он синтаксису или нет. Подобная проверка осуществляется при помощи валидатора и предназначена в первую очередь для разработчиков, чтобы отслеживать ошибки в документе.</p><p> В дальнейшем будем применять преимущественно строгий <b>&lt!DOCTYPE&gt</b>, кроме случаев, когда это оговаривается особо. Это позволит нам избегать типичных ошибок и приучит к написанию синтаксически правильного кода. Часто можно встретить код HTML вообще без использования <b>&lt!DOCTYPE&gt</b>, веб-страница в подобном случае все равно будет показана. Тем не менее, может получиться, что один и тот же документ отображается в браузере по-разному при использовании <b>&lt!DOCTYPE&gt</b> и без него. Кроме того, браузеры могут по-своему показывать такие документы, в итоге страница «рассыплется», т.е. будет отображаться совсем не так, как это требуется разработчику. Чтобы не произошло подобных ситуаций, всегда добавляйте <b>&lt!DOCTYPE&gt</b> в начало документа.</p><p> Тег <b>&lthtml&gt</b> определяет начало HTML-файла, внутри него хранится заголовок (<b>&lthead&gt</b>) и тело документа (<b>&ltbody&gt</b>).</p><p>Заголовок документа, как еще называют блок <b>&lthead&gt</b>, может содержать текст и теги, но содержимое этого раздела не показывается напрямую на странице, за исключением контейнера <b>&lttitle&gt</b>.</p><p> Тег <b>&ltmeta&gt</b> является универсальным и добавляет целый класс возможностей, в частности, с помощью метатегов, как обобщенно называют этот тег, можно изменять кодировку страницы, добавлять ключевые слова, описание документа и многое другое. Чтобы браузер понимал, что имеет дело с кодировкой <b>UTF-8</b> (Unicode transformation format, формат преобразования Юникод) и добавляется данная строка:</p><p><b>&ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt</b></p>',

    div6: '<p>Тег <b>&lttitle&gt</b> определяет заголовок веб-страницы, это один из важных элементов предназначенный для решения множества задач. В операционной системе <b>Windows</b> текст заголовка отображается в левом верхнем углу окна браузера: <b>&lttitle&gtПример веб-страницы&lt/title&gt</b></p><p>Тело документа <b>&ltbody&gt</b> предназначено для размещения тегов и содержательной части веб-страницы.</p>',

    div7: '<p>HTML предлагает шесть текстовых заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <b>&lth1&gt</b> представляет собой наиболее важный заголовок первого уровня, а тег <b>&lth6&gt</b> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <b>&lth1&gt...&lth6&gt</b> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.</p><p> Некоторый текст можно спрятать от показа в браузере, сделав его комментарием. Хотя такой текст пользователь не увидит, он все равно будет передаваться в документе, так что, посмотрев исходный код, можно обнаружить скрытые заметки: <i>&lt!-- Комментарий --&gt</i></p><p> Комментарии нужны для внесения в код своих записей, не влияющих на вид страницы. Начинаются они тегом <b>&lt!--</b> и заканчиваются тегом <b>--&gt</b>. Все, что находится между этими тегами, отображаться на веб-странице не будет.</p><p> Тег <b>&ltp&gt</b> определяет абзац (параграф) текста. Если закрывающего тега нет, считается, что конец абзаца совпадает с началом следующего блочного элемента.</p><p>Тег <b>&ltp&gt</b> является блочным элементом, поэтому текст всегда начинается с новой строки, абзацы идущие друг за другом разделяются между собой отбивкой (так называется пустое пространство между ними).</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicThree()">HTML topic 3</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicFive()">HTML topic 5</a> </b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Типы тегов.
let HTMLTypesTagsEng = {
    div1: '<h3>Types of tags</h3><p>Each HTML tag belongs to a specific group of tags, for example, tabular tags are aimed at forming tables and cannot be used for other purposes.</p><p>Conventionally , tags are divided into the following types:</p><ul><li>top-level tags;</li><li>document title tags;</li><li>block elements;</li><li>lowercase elements;</li><li>universal elements;</li><li>lists;</li><li>tables;</li><li>frames.</li></ul><p>Keep in mind that the same tag can belong to different groups at the same time, for example, the tags <b>&ltol&gt</b> and <b>&ltul&gt</b> belong to the category of lists, but they are also block elements.</p>',

    div2: '<h3>Top-level tags</h3><p>These tags are designed to form the structure of a web page and define the section of the title and body of the document.</p>',

    div3: '<h3>&lthtml&gt</h3><p>Tag <b>&lthtml&gt</b> it is a container that contains all the contents of a web page, including tags <b>&lthead&gt</b> and <b>&ltbody&gt</b>. Opening and closing tags <b>&lthtml&gt</b> they are optional in the document, but good style dictates their indispensable use.</p>',

    div4: '<h3>&lthead&gt</h3><p>Tag <b>&lthead&gt</b> it is intended for storing other elements, the purpose of which is to help the browser in working with data. Also inside the container <b>&lthead&gt</b> there are meta tags that are used to store information intended for browsers and search engines. For example, search engine engines turn to meta tags to get a description of the site, keywords and other data.</p>',

    div5: '<h3>&ltbody&gt</h3><p>Tag <b>&ltbody&gt</b> it is intended for storing the content of a web page displayed in a browser window. The information that should be displayed in the document should be placed exactly inside the container <b>&ltbody&gt</b>. Such information includes text, images, tables, lists, etc.</p><p>The set of top-level tags and the order of their attachment is shown in the example:</p>',

    div6_example: '&lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp .... <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp .... <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>This example shows that the container <b>&lthtml&gt</b> defines the "framework" of the entire web page, the tag is first set inside it <b>&lthead&gt</b>, then comes the container <b>&ltbody&gt</b>, it stores the content of the document, which is displayed in the browser. Tags <b>&lthtml&gt</b> and <b>&ltbody&gt</b> although they do not belong to mandatory tags (i.e. they can not be placed in the code), it is still worth adding always. This allows you to get a clear and understandable structure of the document.</p>',

    div8: '<h3>Document Title Tags</h3><p>These tags include elements that are located in the container <b>&lthead&gt</b>. All these tags are not directly displayed in the browser window, with the exception of the tag <b>&lttitle&gt</b>, which defines the name of the web page.</p>',

    div9: '<h3>&lttitle&gt</h3><p>It is used to display a line of text in the upper-left corner of the browser window, as well as on a tab. This line tells the user the name of the site and other information that the developer adds.</p>',

    div10: '<h3>&ltmeta&gt</h3><p>Meta tags are used to store information intended for browsers and search engines. For example, search engine engines turn to meta tags to get a description of the site, keywords and other data. Although the tag <b>&ltmeta&gt</b> there is only one, it has several attributes, so the plural is applied to it.</p><p>So, for a brief description of the content of a web page, the description value of the name attribute is used, as shown in the example:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtHTML&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta name="description" content="Website about HTML and website creation"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div12: '<p>The description of the site specified using the tag <b>&ltmeta&gt</b> and values <b>description</b>, it is usually displayed in search engines or directories when displaying search results. Meaning <b>keywords</b> it is also intended primarily to increase the ranking of the site in search engines, it lists the keywords found on the web page:</p>',

    div13_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML  4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtHTML&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta name="keywords" content="HTML, META, meta tag, tag, search engine">&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div14: '<p>Keywords can be listed separated by a space or comma. Search engines themselves will bring the record to the form they use.</p>',

    div15: '<h3>Block elements</h3><p>Block elements are characterized by the fact that they occupy the entire available width, the height of the element is determined by its contents, and it always starts with a new line.</p>',

    div16: '<h3>&ltblockquote&gt</h3><p>Designed to highlight long quotes inside a document. The text indicated by this tag is traditionally displayed as an aligned block with margins on the left and right (approximately 40 pixels each), as well as with empty space on top and bottom.</p>',

    div17: '<h3>&ltdiv&gt</h3><p>Tag <b>&ltdiv&gt</b> it refers to universal block containers and is used in cases where block elements without additional properties are needed. Also using the tag <b>&ltdiv&gt</b> you can align the text inside this container using the <b>align</b> attribute.</p>',

    div18: '<h3>&lth1&gt,...,&lth6&gt</h3><p>This group of tags defines text headers of different levels that show the relative importance of the section located after the header.</p>',

    div19: '<h3>&lthr&gt</h3><p>Draws a horizontal line, which in its appearance depends on the attributes used. The line always starts with a new line, and after it all the elements are displayed on the next line.</p>',

    div20: '<h3>&ltp&gt</h3><p>Defines a paragraph (paragraph) of the text.</p>',

    div21: '<h3>&ltpre&gt</h3><p>Sets a block of preformatted text. Such text is usually displayed in monospaced font and with all spaces between words. In HTML, any number of consecutive spaces in the code on a web page is shown as one. Tag <b>&ltpre&gt</b> allows you to bypass this feature and display the text as required by the developer.</p><p>The following tags should not be placed inside the container <b>&ltpre&gt</b>: <b>&ltbig&gt</b>, <b>&ltimg&gt</b>, <b>&ltsmall&gt</b>, <b>&ltsub&gt</b> and <b>&ltsup&gt</b>.</p>',

    div22: '<h3>Lowercase elements</h3><p>Lowercase elements are those elements of a web page that are directly part of another element, for example, a text paragraph. They are mainly used to change the type of text or its logical selection.</p>',

    div23: '<h3>&lta&gt</h3><p> Tag <b>&lta&gt</b> It is one of the important elements of HTML and is intended for creating links. Depending on the presence of attributes <b>name</b> or <b>href</b> tag <b>&lta&gt</b> sets a link or anchor.</p>',

    div24: '<h3>&ltb&gt</h3><p>Defines the bold font.</p>',

    div25: '<h3>&ltbig&gt</h3><p>Tag <b>&ltbig&gt</b> increases the font size by one compared to regular text. In HTML, the font size is measured in conventional units from <b>1</b> to <b>7</b>, the average text size used by default is <b>3</b>. Thus, adding a tag <b>&ltbig&gt</b> increases the text by one conditional unit.</p>',

    div26: '<h3>&ltbr&gt</h3><p>Tag <b>&ltbr&gt</b> sets the line feed in the place where this tag is located. Unlike the paragraph tag <b>&ltp&gt</b>, using the tag <b>&ltbr&gt</b> does not add an empty indent before the line.</p>',

    div27: '<h3>&ltem&gt</h3><p>Tag <b>&ltem&gt</b> designed to accentuate the text. Browsers display such text in italics.</p>',

    div28: '<h3>&lti&gt</h3><p>Sets the italic font style.</p>',

    div29: '<h3>&ltimg&gt</h3><p>Tag <b>&ltimg&gt</b> designed for displaying images in graphic format on a web page <b>GIF</b>, <b>JPEG</b> or <b>PNG</b>. If necessary, the drawing can be made a link to another file by placing the tag <b>&ltimg&gt</b> into the container <b>&lta&gt</b>. At the same time, a frame is displayed around the image, which can be removed by adding the <b>border="0"</b> attribute to the tag <b>&ltimg&gt</b>.</p>',

    div30: '<h3>&ltsmall&gt</h3><p>Tag <b>&ltsmall&gt</b> reduces the font size by one compared to regular text. Its action is similar to the tag <b>&ltbig&gt</b>, but it works exactly the opposite.</p>',
    
    div31: '<h3>&ltspan&gt</h3><p>A universal tag designed to define a lowercase element inside a document.</p>',

    div32: '<h3>&ltstrong&gt</h3><p>Tag <b>&ltstrong&gt</b> designed to accentuate the text. Browsers display such text in bold.</p>',

    div33: '<h3>&ltsub&gt</h3><p>Displays the font as a subscript. The text is located below the baseline of the remaining characters of the string and the reduced size — H<sub>2</sub>O.</p>',

    div34: '<h3>&ltsup&gt</h3><p>Displays the font as a superscript. In its action it is similar to <b>&ltsub&gt</b>, but the text is displayed above the text baseline — м<sup>2</sup>.</p>',

    div35: '<p>The difference between block and lowercase elements is as follows:</p><ul><li>Lowercase elements can contain only data or other lowercase elements, and block elements can include other block elements, lowercase elements, as well as data. In other words, lowercase elements cannot store block elements in any way.</li><li>Block elements always start with a new line, and lowercase ones are not accented in this way.</li><li>Block elements occupy the entire available width, for example, of a browser window, and the width of lowercase elements is equal to their contents plus the values of margins, margins and borders.</li></ul>',

    div36: '<h3>Universal elements</h3><p>The peculiarity of these tags is that, depending on the context, they can be used as block or embedded elements.</p>',

    div37: '<h3>&ltdel&gt</h3><p>Tag <b>&ltdel&gt</b> used to highlight text that has been deleted in the new version of the document. Such formatting allows you to track what changes have been made in the text of the document. Browsers usually mark the text in the container <b>&ltdel&gt</b> as crossed out.</p>',

    div38: '<h3>&ltins&gt</h3><p>Tag <b>&ltins&gt</b> it is intended to accentuate newly added text and is usually used along with the tag <b>&ltdel&gt</b>. Browsers mark the contents of the container <b>&ltins&gt</b> underlining the text.</p>',

    div39: '<h3>Tags for lists</h3><p>A list is an interconnected set of individual phrases or sentences that begin with a marker or a number. Lists provide an opportunity to organize and systematize various data and present them in a visual and user-friendly form.</p>',

    div40: '<h3>&ltol&gt</h3><p>Tag <b>&ltol&gt</b> sets a numbered list, i.e. teach list item starts with a number or letter and increases incrementally.</p>',

    div41: '<h3>&ltul&gt</h3><p>Sets a bulleted list, each element of which begins with a small marker symbol.</p>',

    div42: '<h3>&ltli&gt</h3><p>Tag <b>&ltli&gt</b> defines a separate list item. External tag <b>&ltul&gt</b> or <b>&ltol&gt</b> sets the type of the list — bulleted or numbered.</p>',

    div43: '<h3>&ltdd&gt, &ltdt&gt, &ltdl&gt</h3><p>The three elements are designed to create a list of definitions. Each such list starts with a container <b>&ltdl&gt</b>, where the tag is included <b>&ltdt&gt</b> creating term and tag <b>&ltdd&gt</b> defining the definition of this term. Closing tag <b>&lt/dd&gt</b> optional, because the next tag reports the completion of the previous element. However, it is a good style to close all tags.</p>',

    div44: '<h3>Tags for tables</h3><p>The table consists of rows and columns of cells that can contain text and pictures. Tables are usually used to organize and represent tabular data.</p>',

    div45: '<h3>&lttable&gt</h3><p>Serves as a container for elements that define the contents of the table. Any table consists of rows and cells that are set using tags <b>&lttr&gt</b> and <b>&lttd&gt</b>.</p>',

    div46: '<h3>&lttd&gt</h3><p>Designed to create a single table cell. Tag <b>&lttd&gt</b> must be placed inside the container <b>&lttr&gt</b>, which in turn is located inside the tag <b>&lttable&gt</b>.</p>',

    div47: '<h3>&ltth&gt</h3><p>Tag <b>&ltth&gt</b> designed to create a single table cell, which is designated as a header. The text in such a cell is usually displayed by the browser in bold and aligned in the center.</p>',

    div48: '<h3>&lttr&gt</h3><p>Tag <b>&lttr&gt</b> serves as a container for creating a table row.</p>',

    div49: '<h3>Tags for frames</h3><p>Frames divide the browser window into separate areas located close to each other. An independent web page defined by a tag is loaded into each of these areas <b>&ltframe&gt</b>. With the help of frames, a web page is divided into two or more documents, which usually contain site navigation and its content. The frame mechanism allows you to open a document in one frame, following a link clicked in a completely different frame. It is also acceptable to use a nested structure of elements, this allows you to split frames into small areas.</p><ul><li><b>&ltframe&gt</b> - defines the properties of a separate frame into which the browser window is divided.</li><li><b>&ltframeset&gt</b> - replaces the element <b>&ltbody&gt</b> on the web page and forms the frame structure.</li><li><b>&ltiframe&gt</b> - creates a floating frame that is located inside a regular document, it allows you to load any other independent documents into the area of the specified dimensions.</li></ul>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicFour()">HTML topic 4</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicSix()">HTML topic 6</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLTypesTagsRus = {
    div1: '<h3>Типы тегов</h3><p>Каждый тег HTML принадлежит к определенной группе тегов, например, табличные теги направлены на формирование таблиц и не могут применяться для других целей.</p><p>Условно теги делятся на следующие типы:</p><ul><li>теги верхнего уровня;</li><li>теги заголовка документа;</li><li>блочные элементы;</li><li>строчные элементы;</li><li>универсальные элементы;</li><li>списки;</li><li>таблицы;</li><li>фреймы.</li></ul><p>Следует учитывать, что один и тот же тег может одновременно принадлежать разным группам, например, теги <b>&ltol&gt</b> и <b>&ltul&gt</b> относятся к категории списков, но также являются и блочными элементами.</p>',

    div2: '<h3>Теги верхнего уровня</h3><p>Эти теги предназначены для формирования структуры веб-страницы и определяют раздел заголовка и тела документа.</p>',

    div3: '<h3>&lthtml&gt</h3><p>Тег <b>&lthtml&gt</b> является контейнером, который заключает в себе всё содержимое веб-страницы, включая теги <b>&lthead&gt</b> и <b>&ltbody&gt</b>. Открывающий и закрывающий теги <b>&lthtml&gt</b> в документе необязательны, но хороший стиль диктует непременное их использование.</p>',

    div4: '<h3>&lthead&gt</h3><p>Тег <b>&lthead&gt</b> предназначен для хранения других элементов, цель которых — помочь браузеру в работе с данными. Также внутри контейнера <b>&lthead&gt</b> находятся метатеги, которые используются для хранения информации, предназначенной для браузеров и поисковых систем. Например, механизмы поисковых систем обращаются к метатегам для получения описания сайта, ключевых слов и других данных.</p>',

    div5: '<h3>&ltbody&gt</h3><p>Тег <b>&ltbody&gt</b> предназначен для хранения содержания веб-страницы, отображаемого в окне браузера. Информацию, которую следует выводить в документе, следует располагать именно внутри контейнера <b>&ltbody&gt</b>. К такой информации относится текст, изображения, таблицы, списки и др.</p><p>Набор тегов верхнего уровня и порядок их вложения показан в примере:</p>',

    div6_example: '&lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp .... <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp .... <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>В данном примере показано, что контейнер <b>&lthtml&gt</b> определяет «каркас» всей веб-страницы, внутри него вначале задается тег <b>&lthead&gt</b>, затем идет контейнер <b>&ltbody&gt</b>, в нем хранится содержательная часть документа, которая и отображается в браузере. Теги <b>&lthtml&gt</b> и <b>&ltbody&gt</b> хотя и не относятся к обязательным тегам (т. е. их можно не размещать в коде), все же стоит добавлять всегда. Это позволяет получить четкую и понятную структуру документа.</p>',

    div8: '<h3>Теги заголовка документа</h3><p>К этим тегам относятся элементы, которые располагаются в контейнере <b>&lthead&gt</b>. Все эти теги напрямую не отображаются в окне браузера, за исключением тега <b>&lttitle&gt</b>, который определяет название веб-страницы.</p>',

    div9: '<h3>&lttitle&gt</h3><p>Используется для отображения строки текста в левом верхнем углу окна браузера, а также на вкладке. Такая строка сообщает пользователю название сайта и другую информацию, которую добавляет разработчик.</p>',

    div10: '<h3>&ltmeta&gt</h3><p>Метатеги используются для хранения информации, предназначенной для браузеров и поисковых систем. Например, механизмы поисковых систем обращаются к метатегам для получения описания сайта, ключевых слов и других данных. Хотя тег <b>&ltmeta&gt</b> всего один, он имеет несколько атрибутов, поэтому к нему и применяется множественное число.</p><p>Так, для краткого описания содержимого веб-страницы используется значение description атрибута name, как показано в примере:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtHTML&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta name="description" content="Сайт об HTML и создании сайтов"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div12: '<p>Описание сайта, заданное с помощью тега <b>&ltmeta&gt</b> и значения <b>description</b>, обычно отображается в поисковых системах или каталогах при выводе результатов поиска. Значение <b>keywords</b> также предназначено в первую очередь для повышения рейтинга сайта в поисковых системах, в нем перечисляются ключевые слова, встречаемые на веб-странице:</p>',

    div13_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML  4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtHTML&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta name="keywords" content="HTML, META, метатег, тег, поисковая система">&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div14: '<p>Ключевые слова можно перечислять через пробел или запятую. Поисковые системы сами приведут запись к виду, который они используют.</p>',

    div15: '<h3>Блочные элементы</h3><p>Блочные элементы характеризуются тем, что занимают всю доступную ширину, высота элемента определяется его содержимым, и он всегда начинается с новой строки.</p>',

    div16: '<h3>&ltblockquote&gt</h3><p>Предназначен для выделения длинных цитат внутри документа. Текст, обозначенный этим тегом, традиционно отображается как выровненный блок с отступами слева и справа (примерно по 40 пикселов), а также с пустым пространством сверху и снизу.</p>',

    div17: '<h3>&ltdiv&gt</h3><p>Тег <b>&ltdiv&gt</b> относится к универсальным блочным контейнерам и применяется в тех случаях, где нужны блочные элементы без дополнительных свойств. Также с помощью тега <b>&ltdiv&gt</b> можно выравнивать текст внутри этого контейнера с помощью атрибута <b>align</b>.</p>',

    div18: '<h3>&lth1&gt,...,&lth6&gt</h3><p>Эта группа тегов определяет текстовые заголовки разного уровня, которые показывают относительную важность секции, расположенной после заголовка.</p>',

    div19: '<h3>&lthr&gt</h3><p>Рисует горизонтальную линию, которая по своему виду зависит от используемых атрибутов. Линия всегда начинается с новой строки, а после нее все элементы отображаются на следующей строке.</p>',

    div20: '<h3>&ltp&gt</h3><p>Определяет параграф (абзац) текста.</p>',

    div21: '<h3>&ltpre&gt</h3><p>Задает блок предварительно форматированного текста. Такой текст отображается обычно моноширинным шрифтом и со всеми пробелами между словами. В HTML любое количество пробелов идущих в коде подряд на веб-странице показывается как один. Тег <b>&ltpre&gt</b> позволяет обойти эту особенность и отображать текст как требуется разработчику.</p><p>Следующие теги не должны размещаться внутри контейнера <b>&ltpre&gt</b>: <b>&ltbig&gt</b>, <b>&ltimg&gt</b>, <b>&ltsmall&gt</b>, <b>&ltsub&gt</b> и <b>&ltsup&gt</b>.</p>',

    div22: '<h3>Строчные элементы</h3><p>Строчными называются такие элементы веб-страницы, которые являются непосредственной частью другого элемента, например, текстового абзаца. В основном они используются для изменения вида текста или его логического выделения.</p>',

    div23: '<h3>&lta&gt</h3><p> Тег <b>&lta&gt</b> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов <b>name</b> или <b>href</b> тег <b>&lta&gt</b> устанавливает ссылку или якорь.</p>',

    div24: '<h3>&ltb&gt</h3><p>Определяет жирное начертание шрифта.</p>',

    div25: '<h3>&ltbig&gt</h3><p>Тег <b>&ltbig&gt</b> увеличивает размер шрифта на единицу по сравнению с обычным текстом. В HTML размер шрифта измеряется в условных единицах от <b>1</b> до <b>7</b>, средний размер текста, используемый по умолчанию, принят <b>3</b>. Таким образом, добавление тега <b>&ltbig&gt</b> увеличивает текст на одну условную единицу.</p>',

    div26: '<h3>&ltbr&gt</h3><p>Тег <b>&ltbr&gt</b> устанавливает перевод строки в том месте, где этот тег находится. В отличие от тега параграфа <b>&ltp&gt</b>, использование тега <b>&ltbr&gt</b> не добавляет пустой отступ перед строкой.</p>',

    div27: '<h3>&ltem&gt</h3><p>Тег <b>&ltem&gt</b> предназначен для акцентирования текста. Браузеры отображают такой текст курсивным начертанием.</p>',

    div28: '<h3>&lti&gt</h3><p>Устанавливает курсивное начертание шрифта.</p>',

    div29: '<h3>&ltimg&gt</h3><p>Тег <b>&ltimg&gt</b> предназначен для отображения на веб-странице изображений в графическом формате <b>GIF</b>, <b>JPEG</b> или <b>PNG</b>. Если необходимо, то рисунок можно сделать ссылкой на другой файл, поместив тег <b>&ltimg&gt</b> в контейнер <b>&lta&gt</b>. При этом вокруг изображения отображается рамка, которую можно убрать, добавив атрибут <b>border="0"</b> в тег <b>&ltimg&gt</b>.</p>',

    div30: '<h3>&ltsmall&gt</h3><p>Тег <b>&ltsmall&gt</b> уменьшает размер шрифта на единицу по сравнению с обычным текстом. По своему действию похож на тег <b>&ltbig&gt</b>, но действует с точностью до наоборот.</p>',

    div31: '<h3>&ltspan&gt</h3><p>Универсальный тег, предназначенный для определения строчного элемента внутри документа.</p>',

    div32: '<h3>&ltstrong&gt</h3><p>Тег <b>&ltstrong&gt</b> предназначен для акцентирования текста. Браузеры отображают такой текст жирным начертанием.</p>',

    div33: '<h3>&ltsub&gt</h3><p>Отображает шрифт в виде нижнего индекса. Текст при этом располагается ниже базовой линии остальных символов строки и уменьшенного размера — H<sub>2</sub>O.</p>',

    div34: '<h3>&ltsup&gt</h3><p>Отображает шрифт в виде верхнего индекса. По своему действию похож на <b>&ltsub&gt</b>, но текст отображается выше базовой линии текста — м<sup>2</sup>.</p>',

    div35: '<p>Разница между блочными и строчными элементами следующая:</p><ul><li>Строчные элементы могут содержать только данные или другие строчные элементы, а в блочные допустимо вкладывать другие блочные элементы, строчные элементы, а также данные. Иными словами, строчные элементы никак не могут хранить блочные элементы.</li><li>Блочные элементы всегда начинаются с новой строки, а строчные таким способом не акцентируются.</li><li>Блочные элементы занимают всю доступную ширину, например, окна браузера, а ширина строчных элементов равна их содержимому плюс значения отступов, полей и границ.</li></ul>',

    div36: '<h3>Универсальные элементы</h3><p>Особенность этих тегов состоит в том, что они в зависимости от контекста могут использоваться как блочные или встроенные элементы.</p>',

    div37: '<h3>&ltdel&gt</h3><p>Тег <b>&ltdel&gt</b> используется для выделения текста, который был удален в новой версии документа. Подобное форматирование позволяет отследить, какие изменения в тексте документа были сделаны. Браузеры обычно помечают текст в контейнере <b>&ltdel&gt</b> как перечеркнутый.</p>',

    div38: '<h3>&ltins&gt</h3><p>Тег <b>&ltins&gt</b> предназначен для акцентирования вновь добавленного текста и обычно применяется наряду с тегом <b>&ltdel&gt</b>. Браузеры помечают содержимое контейнера <b>&ltins&gt</b> подчеркиванием текста.</p>',

    div39: '<h3>Теги для списков</h3><p>Списком называется взаимосвязанный набор отдельных фраз или предложений, которые начинаются с маркера или цифры. Списки предоставляют возможность упорядочить и систематизировать разные данные и представить их в наглядном и удобном для пользователя виде.</p>',

    div40: '<h3>&ltol&gt</h3><p>Тег <b>&ltol&gt</b> устанавливает нумерованный список, т.е. каждый элемент списка начинается с числа или буквы и увеличивается по нарастающей.</p>',

    div41: '<h3>&ltul&gt</h3><p>Устанавливает маркированный список, каждый элемент которого начинается с небольшого символа — маркера.</p>',

    div42: '<h3>&ltli&gt</h3><p>Тег <b>&ltli&gt</b> определяет отдельный элемент списка. Внешний тег <b>&ltul&gt</b> или <b>&ltol&gt</b> устанавливает тип списка — маркированный или нумерованный.</p>',

    div43: '<h3>&ltdd&gt, &ltdt&gt, &ltdl&gt</h3><p>Тройка элементов предназначена для создания списка определений. Каждый такой список начинается с контейнера <b>&ltdl&gt</b>, куда входит тег <b>&ltdt&gt</b> создающий термин и тег <b>&ltdd&gt</b> задающий определение этого термина. Закрывающий тег <b>&lt/dd&gt</b> не обязателен, поскольку следующий тег сообщает о завершении предыдущего элемента. Тем не менее, хорошим стилем является закрывать все теги.</p>',

    div44: '<h3>Теги для таблиц</h3><p>Таблица состоит из строк и столбцов ячеек, которые могут содержать текст и рисунки. Обычно таблицы используются для упорядочения и представления табличных данных.</p>',

    div45: '<h3>&lttable&gt</h3><p>Служит контейнером для элементов, определяющих содержимое таблицы. Любая таблица состоит из строк и ячеек, которые задаются с помощью тегов <b>&lttr&gt</b> и <b>&lttd&gt</b>.</p>',

    div46: '<h3>&lttd&gt</h3><p>Предназначен для создания одной ячейки таблицы. Тег <b>&lttd&gt</b> должен размещаться внутри контейнера <b>&lttr&gt</b>, который в свою очередь располагается внутри тега <b>&lttable&gt</b>.</p>',

    div47: '<h3>&ltth&gt</h3><p>Тег <b>&ltth&gt</b> предназначен для создания одной ячейки таблицы, которая обозначается как заголовочная. Текст в такой ячейке отображается браузером обычно жирным шрифтом и выравнивается по центру.</p>',

    div48: '<h3>&lttr&gt</h3><p>Тег <b>&lttr&gt</b> служит контейнером для создания строки таблицы.</p>',

    div49: '<h3>Теги для фреймов</h3><p>Фреймы разделяют окно браузера на отдельные области, расположенные вплотную друг к другу. В каждую из таких областей загружается самостоятельная веб-страница определяемая с помощью тега <b>&ltframe&gt</b>. С помощью фреймов веб-страница делится на два или более документа, которые обычно содержат навигацию по сайту и его контент. Механизм фреймов позволяет открывать документ в одном фрейме, по ссылке, нажатой в совершенно другом фрейме. Допустимо также использовать вложенную структуру элементов, это позволяет дробить фреймы на мелкие области.</p><ul><li><b>&ltframe&gt</b> - определяет свойства отдельного фрейма, на которые делится окно браузера.</li><li><b>&ltframeset&gt</b> - заменяет собой элемент <b>&ltbody&gt</b> на веб-странице и формирует структуру фреймов.</li><li><b>&ltiframe&gt</b> - создает плавающий фрейм, который находится внутри обычного документа, он позволяет загружать в область заданных размеров любые другие независимые документы.</li></ul>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicFour()">HTML topic 4</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicSix()">HTML topic 6</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Значение атрибутов тегов.
let HTMLTagAttributeValuesEng = {
    div1: '<h3>Tag Attribute Values</h3><p>Tag attributes extend the capabilities of the tags themselves and allow you to flexibly control various settings for displaying web page elements. The total number of attributes is quite large, but their values, as a rule, can be grouped into different types, for example, those specifying color, size, address, etc. Next, we will consider the main types of values.</p>',

    div2: '<h3>Color</h3><p>In HTML, the color is specified in one of two ways: using a hexadecimal code and by the name of some colors. The method based on the hexadecimal system is mainly used, as the most universal.</p>',

    div3: '<h3>Hexadecimal colors</h3><p>HTML uses hexadecimal numbers to specify colors. The hexadecimal system, unlike the decimal system, is based, as its name implies, on the number 16. The numbers will be the following: <b>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C , D, E, F</b>. Numbers from <b>10</b> to <b>15</b> are replaced by Latin letters.</p><p>Numbers greater than <b>15</b> in the hexadecimal system are formed by combining two numbers into one. For example, the number <b>255</b> in decimal corresponds to the number <b>FF</b> in hexadecimal.</p><p>To avoid confusion in the definition of the number system, the hexadecimal number is preceded by a hash symbol <b>#</b>, for example <b>#aa69cc</b>. In this case, the case does not matter, so it is permissible to write <b>#F0F0F0</b> or <b>#f0f0f0</b>.</p><p>A typical color used in HTML looks like this: <b>&ltbody bgcolor="#fa8e47"&gt</b></p><p>Here the background color of the web page is set as <b>#FA8E47</b>. Lattice symbol <b>#</b> in front of a number means it\'s in hexadecimal. First two digits (<b>FA</b>) determine the red component of the color, the numbers from the third to the fourth (<b>8E</b>) — green, and the last two digits (<b>47</b>) — blue.</p>',

    div4: '<p>Each of the three colors - red, green and blue - can take on values from <b>00</b> before <b>FF</b>, which eventually forms <b>256</b> shades. Thus, the total number of colors can be <b>256x256x256</b> = <b>16.777.216</b> combinations. The color model based on the red, green and blue components is called <b>RGB</b> (red, green, blue). This model is additive, in which the addition of all three components forms white.</p>',

    div5: '<p>To make it easier to navigate in hexadecimal colors, take into account some rules:</p><ul><li>If the values of the color components are the same (for example: <b>#D6D6D6</b>), you get a gray tint. The higher the number, the lighter the color, the values vary from <b>#000000</b> (black) before <b>#FFFFFF</b> (white).</li><li>A bright red color is formed if the red component is made maximum (<b>FF</b>), and the rest of the components are set to zero. Color with meaning <b>#FF0000</b> the reddest possible red hue. The same goes for green (<b>#00FF00</b>) and blue (<b>#0000FF</b>).</li><li>Yellow (<b>#FFFF00</b>) obtained by mixing red with green. This is clearly seen on the color wheel, where primary colors (red, green, blue) and complementary or complementary colors are presented. These include yellow, cyan, and violet (also called magenta). In general, any color can be obtained by mixing colors adjacent to it. Yes, blue (<b>#00FFFF</b>) obtained by combining blue and green.</li></ul><p>Colors based on hexadecimal values do not have to be empirically selected. For this purpose, a graphic editor that can work with different color models, such as Adobe Photoshop, is suitable.</p>',

    div6_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_1.jpeg" alt="image"></div><div class="div_text_image"><p>Color circle</p></div>',

    div7: '<h3>Web Colors</h3><p>If you set the monitor\'s color quality to <b>8 bit</b> (<b>256</b> colors), then the same color may be displayed differently in different browsers. This has to do with the way graphics are rendered when the browser works with its own palette and cannot show a color that is not in its palette. In this case, the color is replaced by a combination of pixels of other, close to it, colors that imitate the given one. In order for the color to remain the same in different browsers, a palette of so-called web colors was introduced. Web Colors are colors that have each of their red, green, and blue components set to one of six values — <b>0</b> (<b>00</b>), <b>51</b> (<b>33</b>), <b>102</b> (<b>66</b>), <b>153</b> (<b>99</b>), <b>204</b> (<b>CC</b>), <b>255</b> (<b>FF</b>). The hexadecimal value of this component is indicated in brackets. The total number of colors from all possible combinations gives 6x6x6 - <b>216</b> colors. An example web color is <b>#33FF66</b>.</p><p> The main feature of web color is that it is displayed the same in all browsers. At the moment, the relevance of web colors is very small due to the improvement in the quality of monitors and the expansion of their capabilities.</p><p>The example shows how to set the background and text color of a web page:</p>',

    div8_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt<br>&lthtml&gt<br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtColors&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody bgcolor="teal" text="#ffffff"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtExample text&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div9_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_2.jpeg" alt="image"></div><div class="div_text_image"><p>Colors</p></div>',

    div10: '<p>In this example, the background color is set using the <b>bgcolor</b> attribute of the tag <b>&ltbody&gt</b>, and text color through the <b>text</b> attribute. For variety, the <b>text</b> attribute is set to a hexadecimal number, and the <b>bgcolor</b> attribute is set to the reserved keyword <b>teal</b>.</p>',

    div11: '<h3>Size</h3><p>In HTML, the sizes of elements or the distance between them are specified in pixels or percentages. A pixel is an elementary point on the monitor screen, it is a relative unit of measurement, its value depends on the set screen resolution and monitor size. Take, for example, the outdated monitor resolution of <b>1024x768</b> pixels. A picture with the same dimensions will occupy the entire screen area. By increasing the monitor resolution to <b>1280x1024</b>, we thereby reduce the size of the image on the screen.</p><p>When using pixels as values, only the number is written without specifying units, for example: <b>width="380"</b>. The example shows adding an image with given dimensions:</p>',

    div12_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtImage&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/figure.jpg" alt="Winnie the Pooh visiting the Rabbit" width="100" height="111" hspace="4" vspace="4" border="2">&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div13_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_3.jpeg" alt="image"></div><div class="div_text_image"><p>Image</p></div>',

    div14: '<p>In this example, the image is <b>100</b> pixels wide (<b>width="100"</b>), height <b>111</b> pixels (<b>height="111"</b>), гhorizontal and vertical padding by <b>4</b> pixels (<b>hspace</b> and <b>vspace</b>) and the thickness of the border around the image <b>2</b> pixels (<b>border="2"</b>).</p><p>Percentage notation complements pixels well because it allows you to snap to the size of a specific element, such as a browser window. So, if you set the image width to <b>100%</b>, then the image will fill all the free space of the window in width. The browser understands that it is a percentage if the character <b>%</b> is added after the number, for example: <b>width="40%"</b>.</p><p>Please note that the percentage size is calculated from the size of the parent element, in other words, the container inside which the element is located. If the parent is not explicitly set, then the browser window is taken as the reference. The example shows the code for a web page where the width of the elements is set as a percentage:</p>',

    div15_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtImage&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/figure.jpg" alt="Winnie the Pooh visiting the Rabbit" width="100%"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div16_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_4.jpeg" alt="image"></div><div class="div_text_image"><p>Image</p></div>',

    div17: '<p>In this example, the width of the image is set to <b>100%</b>, but the height of the image is not explicitly set as it is calculated automatically.</p><p>Please note that noticeable distortions appear in the image, this is due to the increase in the image in spite of its original dimensions.</p><p>As you can imagine, the width of the window is taken as <b>100%</b>, but it is easy to exceed it, and inadvertently. In particular, it is only necessary to add the tag in the example <b>&ltimg&gt</b> horizontal padding (<b>hspace="10"</b>) and the width of the image becomes <b>100%+20</b>. This in turn will cause a horizontal scrollbar to appear. Consider this nuance when setting the size of elements.</p>',

    div18: '<h3>Address</h3><p>An address is a path to a document, such as a graphic file. The address is needed when a link is made to a web page or a specific file is downloaded. For example, in the tag <b>&ltimg&gt</b> the address is used as the value of the <b>src</b> attribute, it specifies the path to the image file.</p><p>The synonym of the address is <b>URL</b> (Universal Resource Locator), there are absolute and relative addresses.</p>',

    div19: '<h3>Absolute addresses</h3><p>Such addresses work everywhere and everywhere, regardless of the name of the site or web page where the <b>URL</b> is given, and always begin with a data transfer protocol. For web pages, this is usually <b>HTTP</b> (HyperText Transfer Protocol), so absolute addresses start with the <b>http://</b> keyword. The example shows a link that uses an absolute address:</p>',

    div20_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLink&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="http://htmlbook.ru/html/body"&gtTag Description BODY&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div21_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_5.jpeg" alt="image"></div><div class="div_text_image"><p>Link</p></div>',
	
    div22: '<p>In this example, the text link leads to the site <b>htmlbook.ru</b> and points to a web page named <b>body.html</b>, which is located in the <b>html</b> directory.</p><p>Absolute addresses are primarily used to point to another network resource and are rarely used within the same site.</p>',

    div23: '<h3>Relative addresses</h3><p>Relative addresses are specified from the root of the site or the current document. For example, code <b>&ltimg src="pic.gif"&gt</b> means to download a graphic file called <b>pic.gif</b>, which is located in the same folder as the web page itself. Let\'s look at some examples of such addresses.</p><ul><li><b>/</b> -  the address usually points to the file <b>index.html</b>, which is located in the root of the site. If the <b>index.html</b> file is not present, the browser will usually show a list of files in that directory. The file name does not have to be <b>index.html</b>, this parameter is changed through the web server settings - this is the name of the program that analyzes the requests coming from the browser and sends it the documents shown to the user.</li><li><b>/images/pic.gif</b> -  The slash (symbol <b>/</b>) before the address indicates that the addressing starts from the root of the site. The link leads to the picture <b>pic.gif</b>, which is located in the <b>images</b> folder. And that, in turn, is located in the root of the site.</li><li><b>../help/me.html</b> - two dots in front of the name tell the browser to go one level up in the list of directories of the site and there “search” in the <b>help</b> folder for the file <b>me.html</b>.</li><li><b>manual/info.html</b> - if there are no additional characters before the folder name, such as dots or slashes, then the folder is located inside the current directory, and the file <b>info.html</b> is already located in it.</li></ul><p> The example shows links that use relative addresses:</p>',

    div24_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLinks&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br>  &nbsp&nbsp  &nbsp&nbsp &ltp&gt&lta href="images/xxx.jpg"&gtLook at my photo!&lt/a&gt&lt/p&gt <br> &nbsp&nbsp  &nbsp&nbsp &ltp&gt&lta href="tip.html"&gtHow to take the same photo?&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div25_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_6.jpeg" alt="image"></div><div class="div_text_image"><p>Links</p></div>',

    div26: '<p>Sometimes you can find a path in the link address in the form <b>./file/doc.html</b>. A period with a slash means that the countdown is from the current folder. Such a notation is redundant and can be reduced to <b>file/doc.html</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicFive()">HTML topic 5</a> </b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicSeven()">HTML topic 7</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLTagAttributeValuesRus = {
    div1: '<h3>Значения атрибутов тегов</h3><p>Атрибуты тегов расширяют возможности самих тегов и позволяют гибко управлять различными настройками отображения элементов веб-страницы. Общее количество атрибутов достаточно велико, но их значения, как правило, можно сгруппировать по разным типам, например, задающих цвет, размер, адрес и др. Далее рассмотрим основные типы значений.</p>',

    div2: '<h3>Цвет</h3><p>В HTML цвет задается одним из двух путей: с помощью шестнадцатеричного кода и по названию некоторых цветов. Преимущественно используется способ, основанный на шестнадцатеричной системе исчисления, как наиболее универсальный.</p>',

    div3: '<h3>Шестнадцатеричные цвета</h3><p>Для задания цветов в HTML используются числа в шестнадцатеричном коде. Шестнадцатеричная система, в отличие от десятичной системы, базируется, как следует из ее названия, на числе 16. Цифры будут следующие: <b>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F</b>. Числа от <b>10</b> до <b>15</b> заменены латинскими буквами.</p><p>Числа больше <b>15</b> в шестнадцатеричной системе образуются объединением двух чисел в одно. Например, числу <b>255</b> в десятичной системе соответствует число <b>FF</b> в шестнадцатеричной.</p><p>Чтобы не возникало путаницы в определении системы счисления, перед шестнадцатеричным числом ставится символ решетки <b>#</b>, например <b>#aa69cc</b>. При этом регистр значения не имеет, поэтому допустимо писать <b>#F0F0F0</b> или <b>#f0f0f0</b>.</p><p>Типичный цвет, используемый в HTML, выглядит следующим образом: <b>&ltbody bgcolor="#fa8e47"&gt</b></p><p>Здесь цвет фона веб-страницы задан как <b>#FA8E47</b>. Символ решетки <b>#</b> перед числом означает, что оно шестнадцатеричное. Первые две цифры (<b>FA</b>) определяют красную составляющую цвета, цифры с третьей по четвертую (<b>8E</b>) — зеленую, а последние две цифры (<b>47</b>) — синюю.</p>',

    div4: '<p>Каждый из трех цветов — красный, зеленый и синий — может принимать значения от <b>00</b> до <b>FF</b>, что в итоге образует <b>256</b> оттенков. Таким образом, общее количество цветов может быть <b>256х256х256</b> = <b>16.777.216</b> комбинаций. Цветовая модель, основанная на красной, зеленой и синей составляющей получила название <b>RGB</b> (red, green, blue; красный, зеленый, синий). Эта модель аддитивная (от add — складывать), при которой сложение всех трех компонент образует белый цвет.</p>',

    div5: '<p>Чтобы легче ориентироваться в шестнадцатеричных цветах, примите во внимание некоторые правила:</p><ul><li>Если значения компонент цвета одинаковы (например: <b>#D6D6D6</b>), то получится серый оттенок. Чем больше число, тем светлее цвет, значения при этом меняются от <b>#000000</b> (черный) до <b>#FFFFFF</b> (белый).</li><li>Ярко-красный цвет образуется, если красный компонент сделать максимальным (<b>FF</b>), а остальные компоненты обнулить. Цвет со значением <b>#FF0000</b> самый красный из возможных красных оттенков. Аналогично обстоит с зеленым цветом (<b>#00FF00</b>) и синим (<b>#0000FF</b>).</li><li>Желтый цвет (<b>#FFFF00</b>) получается смешением красного с зеленым. Это хорошо видно на цветовом круге, где представлены основные цвета (красный, зеленый, синий) и комплементарные или дополнительные. К ним относятся желтый, голубой и фиолетовый (еще называемым пурпурным). Вообще, любой цвет можно получить смешением близлежащих к нему цветов. Так, голубой (<b>#00FFFF</b>) получается за счет объединения синего и зеленого цвета.</li></ul><p>Цвета по шестнадцатеричным значениям не обязательно подбирать эмпирическим путем. Для этой цели подойдет графический редактор, умеющий работать с разными цветовыми моделями, например, Adobe Photoshop.</p>',

	div6_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_1.jpeg" alt="image"></div><div class="div_text_image"><p>Цветовой круг</p></div>',

    div7: '<h3>Веб-цвета</h3><p>Если установить качество цветопередачи монитора в <b>8 бит</b> (<b>256</b> цветов), то один и тот же цвет может показываться в разных браузерах по-своему. Это связано со способом отображения графики, когда браузер работает со своей собственной палитрой и не может показать цвет, который у него в палитре отсутствует. В этом случае цвет заменяется сочетанием пикселов других, близких к нему, цветов, имитирующих заданный. Чтобы цвет оставался неизменным в разных браузерах, ввели палитру так называемых веб-цветов. Веб-цветами называются такие цвета, для каждой составляющей которых — красной, зеленой и синей — устанавливается одно из шести значений — <b>0</b> (<b>00</b>), <b>51</b> (<b>33</b>), <b>102</b> (<b>66</b>), <b>153</b> (<b>99</b>), <b>204</b> (<b>CC</b>), <b>255</b> (<b>FF</b>). В скобках указано шестнадцатеричное значение данной компоненты. Общее количество цветов из всех возможных сочетаний дает 6х6х6 — <b>216</b> цветов. Пример веб-цвета — <b>#33FF66</b>.</p><p> Основная особенность веб-цвета заключается в том, что он показывается одинаково во всех браузерах. В данный момент актуальность веб-цветов весьма мала из-за повышения качества мониторов и расширения их возможностей.</p><p>В примере показано, как установить цвет фона и текста веб-страницы:</p>',

    div8_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt<br>&lthtml&gt<br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtЦвета&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody bgcolor="teal" text="#ffffff"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtПример текста&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div9_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_2.jpeg" alt="image"></div><div class="div_text_image"><p>Цвета</p></div>',

    div10: '<p>В данном примере цвет фона задается с помощью атрибута <b>bgcolor</b> тега <b>&ltbody&gt</b>, а цвет текста через атрибут <b>text</b>. Для разнообразия значение у атрибута <b>text</b> установлено в виде шестнадцатеричного числа, а у <b>bgcolor</b> с помощью зарезервированного ключевого слова <b>teal</b>.</p>',

    div11: '<h3>Размер</h3><p>В HTML размеры элементов или расстояния между ними задаются в пикселах или процентах. Пиксел — это элементарная точка на экране монитора, является относительной единицей измерения, ее величина зависит от установленного экранного разрешения и размера монитора. Возьмем, к примеру, устаревшее разрешение монитора <b>1024х768</b> пикселов. Картинка с такими же размерами будет занимать всю область экрана. Увеличив разрешение монитора до <b>1280х1024</b>, мы, тем самым, уменьшим размеры изображения на экране.</p><p>При использовании пикселов в качестве значений пишется только число без указания единиц, например: <b>width="380"</b>. В примере приведено добавление изображения с заданными размерами:</p>',

    div12_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtИзображение&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/figure.jpg" alt="Винни-Пух в гостях у Кролика" width="100" height="111" hspace="4" vspace="4" border="2">&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div13_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_3.jpeg" alt="image"></div><div class="div_text_image"><p>Изображение</p></div>',

    div14: '<p>В данном примере рисунок имеет ширину <b>100</b> пикселов (<b>width="100"</b>), высоту <b>111</b> пикселов (<b>height="111"</b>), горизонтальный и вертикальный отступ по <b>4</b> пиксела (<b>hspace</b> и <b>vspace</b>) и толщину границы вокруг картинки <b>2</b> пиксела (<b>border="2"</b>).</p><p>Процентная запись удачно дополняет пикселы, поскольку позволяет привязаться к размерам определенного элемента, к примеру, окна браузера. Так, если задать у картинки ширину <b>100%</b>, то рисунок будет заполнять все свободное пространство окна по ширине. Браузер понимает, что речь идет о процентах, если после числа добавляется символ <b>%</b>, например: <b>width="40%"</b>.</p><p>Учтите, что размер в процентах вычисляется от размеров родительского элемента, иными словами, контейнера, внутри которого располагается элемент. Если родитель явно не задан, тогда за отсчет принимается окно браузера. В примере приведен код веб-страницы, в котором ширина элементов задается в процентах:</p>',

    div15_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtИзображение&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/figure.jpg" alt="Винни-Пух в гостях у Кролика" width="100%"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div16_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_4.jpeg" alt="image"></div><div class="div_text_image"><p>Изображение</p></div>',

    div17: '<p>В данном примере ширина картинки задана как <b>100%</b>, при этом высота изображения явно не задается, поскольку она вычисляется автоматически.</p><p>Обратите внимание, что в изображении появляются заметные искажения, это связано с увеличением картинки вопреки ее исходным размерам.</p><p>Как вы понимаете, ширина окна принимается за <b>100%</b>, но ее легко превысить, причем ненароком. В частности, стоит только добавить в примере тегу <b>&ltimg&gt</b> отступы по горизонтали (<b>hspace="10"</b>) и ширина изображения станет <b>100%+20</b>. Это в свою очередь приведет к появлению горизонтальной полосы прокрутки. Учитывайте этот нюанс при установке размеров элементов.</p>',

    div18: '<h3>Адрес</h3><p>Адресом называется путь к документу, например, к графическому файлу. Адрес необходим в тех случаях, когда делается ссылка на веб-страницу или загружается определенный файл. Например, в теге <b>&ltimg&gt</b> адрес используется в качестве значения атрибута <b>src</b>, он задает путь к файлу с изображением.</p><p>Синонимом адреса выступает <b>URL</b> (Universal Resource Locator, универсальный указатель ресурсов), различают абсолютные и относительные адреса.</p>',

    div19: '<h3>Абсолютные адреса</h3><p>Подобные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где задан <b>URL</b>, и начинаются всегда с указания протокола передачи данных. Для веб-страниц это обычно <b>HTTP</b> (HyperText Transfer Protocol, протокол передачи гипертекста), соответственно, абсолютные адреса начинаются с ключевого слова <b>http://</b>. В примере приведена ссылка, в которой применяется абсолютный адрес:</p>',

    div20_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСсылка&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="http://htmlbook.ru/html/body"&gtОписание тега BODY&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div21_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_5.jpeg" alt="image"></div><div class="div_text_image"><p>Ссылка</p></div>',

    div22: '<p>В данном примере текстовая ссылка ведет на сайт <b>htmlbook.ru</b> и указывает на веб-страницу с именем <b>body.html</b>, которая располагается в каталоге <b>html</b>.</p><p>Абсолютные адреса применяются в первую очередь для указания на другой сетевой ресурс и достаточно редко используются в рамках одного сайта.</p>',

    div23: '<h3>Относительные адреса</h3><p>Относительные адреса указываются от корня сайта или текущего документа. Например, код <b>&ltimg src="pic.gif"&gt</b> означает загрузить графический файл с именем <b>pic.gif</b>, который располагается в той же папке, что и сама веб-страница. Далее рассмотрим несколько примеров таких адресов.</p><ul><li><b>/</b> -  адрес указывает обычно на файл <b>index.html</b>, который находится в корне сайта. Если файл <b>index.html</b> отсутствует, браузер, как правило, показывает список файлов, находящихся в данном каталоге. Имя файла не обязательно должно быть <b>index.html</b>, этот параметр меняется через настройки веб-сервера — так называется программа, которая анализирует приходящие от браузера запросы и передает ему документы, показываемые пользователю.</li><li><b>/images/pic.gif</b> -  слэш (символ <b>/</b>) перед адресом говорит о том, что адресация начинается от корня сайта. Ссылка ведет на рисунок <b>pic.gif</b>, который находится в папке <b>images</b>. А та в свою очередь размещена в корне сайта.</li><li><b>../help/me.html</b> - две точки перед именем указывают браузеру перейти на уровень выше в списке каталогов сайта и там «поискать» в папке <b>help</b> файл <b>me.html</b>.</li><li><b>manual/info.html</b> - если перед именем папки нет никаких дополнительных символов, вроде точек или слэша, то папка размещена внутри текущего каталога, а уже в ней располагается файл <b>info.html</b>.</li></ul><p> В примере приведены ссылки, в которых используются относительные адреса:</p>',

    div24_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="content-type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСсылки&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br>  &nbsp&nbsp  &nbsp&nbsp &ltp&gt&lta href="images/xxx.jpg"&gtПосмотрите на мою фотографию!&lt/a&gt&lt/p&gt <br> &nbsp&nbsp  &nbsp&nbsp &ltp&gt&lta href="tip.html"&gtКак сделать такое же фото?&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div25_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_TagAttributeValues_6.jpeg" alt="image"></div><div class="div_text_image"><p>Ссылки</p></div>',
	
    div26: '<p>Иногда можно встретить в адресе ссылки путь в виде <b>./file/doc.html</b>. Точка со слэшем означает, что отсчет ведется от текущей папки. Подобная запись избыточна и ее можно сократить до <b>file/doc.html</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicFive()">HTML topic 5</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicSeven()">HTML topic 7</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Текст.
let HTMLTextEng = {
    div1: '<h3>Text</h3><p>To change the type of text, there are a fairly large number of different tags. This is not surprising, because the text is the most popular type of information.</p>',

    div2: '<h3>Features of text in HTML</h3><p>Before editing the code of a web page, you should take into account some of the features that are inherent in HTML when working with text.</p><p><b>Any number of consecutive spaces is displayed as one in the browser.</b></p><p>No matter how many spaces you put between words, this will not affect the final form of the text. The same rule applies to tab characters and text wrapping. Therefore, do not put extra spaces, as this will only increase the total size of the file, but will not change the appearance of the document in the browser. The lines below will display the same on the web page, despite their different spellings.</p>',

    div3_example: '&ltp&gtMeasure with a micrometer. Mark with chalk. Chop with an axe.&lt/p&gt<br>&ltp&gtMeasure with a micrometer. &nbsp&nbsp&nbsp Mark with chalk. &nbsp&nbsp&nbsp Chop with an axe.&lt/p&gt<br> &ltp&gtMeasure with a micrometer. <br> &nbsp&nbsp&nbsp&nbsp Mark with chalk. <br> &nbsp&nbsp&nbsp&nbsp Chop with an axe.&lt/p&gt',

	div4_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_1.jpeg" alt="image"></div><div class="div_text_image"><p>Text</p></div>',

    div5: 'The exception to this rule is the tag <b>&ltpre&gt</b>, inside which any number of spaces is displayed exactly as it is specified in the code.',

    div6: '<h3>No hyphenation in the text</h3><p>HTML does not support hyphenation in words, as text editors do, in other words, all words are written as a whole without breaking them. This condition is unimportant as long as the text justification is not used. In this case, the block of text is aligned to the left and right. Short lines are stretched by automatically adding spaces between words. Sometimes the blank spaces between words are so large that they spoil the look of the page and impair the readability of the text.</p><p>Imagine that you have some long word in the middle of a sentence, for example "Dehydroepiandrosterone". In a text editor, this word will be hyphenated so that the text takes up the specified width, and on a web page, such a word will be displayed in its entirety, without hyphenation.</p>',

    div7: '<h3>Text takes up the width of the browser window</h3><p>If you just write one long line of HTML code, it will be formatted in the browser to fit the width of the text into the window. Text hyphens will be added automatically at spaces or hyphens. What happens if there is neither one nor the other character in the text? The browser will not be able to create hyphens and will display the text in one line. If it is wider than the browser window, then a horizontal scroll bar will inevitably appear.</p>',

    div8: '<h3>Paragraphs</h3><p>As a rule, blocks of text are separated by paragraphs (paragraphs). By default, there is a small vertical indent between paragraphs, called a padding. The syntax for creating paragraphs is as follows.</p>',

    div9_example: '&ltp&gtparagraph 1&lt/p&gt<br>&ltp&gtparagraph 2&lt/p&gt',

    div10: '<p>Each paragraph starts with a tag <b>&ltp&gt</b> and ends with an optional closing tag <b>&lt/p&gt</b>.</p><p>The example shows the use of paragraphs to create indents between lines:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtApplying paragraphs&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtAlmond blossoms in some orchards, blizzards blow in others.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtIn some places it\'s still February, in others it\'s already April.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtTime passes, an eternal count: year after year, century after century...&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtIn everything - his unhurried move, his pitch-black run.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtThere are twenty-five weeks in a year for joy and sorrow.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtI am twenty-five weeks in February, and twenty-five weeks in April.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtFor twenty-five weeks, counting the centuries goes into the fog.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtMy sonorous farce flies somewhere to the clouds.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lti&gtM. Shcherbakov&lt/i&gt&lt/p&gt<br> &nbsp&nbsp &lt/body&gt <br> &lthtml&gt',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_2.jpeg" alt="image"></div><div class="div_text_image"><p>Application of paragraphs</p></div>',

    div13: '<p>When using the tag <b>&ltp&gt</b> There are too many indents between paragraphs. You can get rid of them if you add a tag at the line breaks <b>&ltbr&gt</b>. Unlike paragraph, line break tag <b>&ltbr&gt</b> does not create additional vertical indents between lines and can be used in almost any text.</p><p>So, the text of the example, taking into account line breaks, will be transformed as follows:</p>',

    div14_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtHyphenation in text&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtIn some orchards almond blossoms, in others a blizzard sweeps.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp In some places it\'s still February, in others it\'s already April.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp Time passes, an eternal count: year after year, century after century...&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp In everything - his unhurried move, his pitch-black run.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp There are twenty-five weeks in a year for joy and sorrow.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp I am twenty-five weeks in February, and twenty-five weeks in April.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp For twenty-five weeks, counting the centuries goes into the fog.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp My sonorous farce flies somewhere to the clouds.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lti&gtM. Shcherbakov&lt/i&gt&lt/p&gt',

	div15_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_3.jpeg" alt="image"></div><div class="div_text_image"><p>Hyphenation in the text</p></div>',

    div16: '<p>As a result, the distance between lines of text has decreased and it has become more compact.</p>',

    div17: '<h3>Titles</h3><p>Headings perform an important function on a web page. First, they show the importance of the section to which they refer. The larger the title and its "weight", the more significant it is. Remember that in newspapers and magazines the editorials are typed in large print, thereby drawing attention to them and saying: “this is a must-read”. Secondly, with the help of different headings, it is easy to adjust the size of the text. The higher the heading level, the larger the font size. The highest level is the level <b>1</b> (<b>&lth1&gt</b>), and the lowest level <b>6</b> (<b>&lth6&gt</b>). And thirdly, search engines add a rating to the text if it is inside the title tag. This is important for the promotion of the site and for its occupation of the first lines of the result in the search engine for keywords.</p><p>The syntax for creating headers is shown in the example:</p>',

    div18_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtHeadings in text&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtFirst level heading&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2&gtSecond level heading&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &lth3&gtThird level heading&lt/h3&gt <br> &nbsp&nbsp &nbsp&nbsp &lth4&gtFourth level heading&lt/h4&gt <br> &nbsp&nbsp &nbsp&nbsp &lth5&gtLevel 5 heading&lt/h5&gt <br> &nbsp&nbsp &nbsp&nbsp &lth6&gtLevel 6 heading&lt/h6&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div19_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_4.jpeg" alt="image"></div><div class="div_text_image"><p>Headings in the text</p></div>',

    div20: '<p>As a rule, headings from the first to the third level are used on a web page, they are quite enough. It\'s rare that you have to use lower-level headings.</p>',

    div21: '<h3>Text alignment</h3><p>Text alignment determines its appearance and the orientation of the paragraph edges, and can be left, right, centered, or justified. The most common option is left-aligned, when the left text is shifted to the edge, while the right remains jagged. Right and center alignment is mostly used in headings and subheadings. It should be borne in mind that when using justification in width, large intervals between words may appear in the text, which is not very beautiful.</p><p>The paragraph tag is usually used to set text alignment. <b>&ltp&gt</b> with the <b>align</b> attribute, which defines the alignment method. It is also permissible to align a block of text using the tag <b>&ltdiv&gt</b> with a similar <b>align</b> attribute. It can take the following values:</p><ul><li><b>left</b> - left alignment, set by default;</li><li><b>right</b> - right-aligned;</li><li><b>center</b> - center alignment;</li><li><b>justify</b> - justified alignment (left and right at the same time). This value only works for text that is more than one line long.</li></ul><p>The <b>align</b> attribute can be applied to both text and headings:</p>',

    div22_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtText alignment&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1 align="center"&gtHow to catch a lion?&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2 align="right"&gtenumeration method&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp align="justify"&gtWe divide the desert into a number of elementary sections, the size of which coincides with the overall dimensions of the lion, but is smaller than the size of the cage. Next, by simple enumeration, we determine the area in which the lion is located, which automatically leads to its capture.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2 align="right"&gtdichotomy method&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp align="justify"&tWe divide the desert into two halves. In one part there is a lion, in the other there is none. We take the half in which the lion is located, and divide it in half again. So we repeat until the lion is caught.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div23_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_5.jpeg" alt="image"></div><div class="div_text_image"><p>Text alignment</p></div>',

    div24: '<h3>Inscription</h3><p><b>Bold style</b></p><p>Saturation refers to the increase in the thickness of the lines of the font and, accordingly, the contrast. There are usually four types of saturation: light, normal, bold, and bold. However, only normal and bold weights can be set using HTML. Two tags are used to set the text to be bold: <b>&ltb&gt</b> and <b>&ltstrong&gt</b>.</p>',

    div25_example: '&ltb&gtBold font&lt/b&gt<br>&ltstrong&gtStrong text selection&lt/strong&gt',

    div26: '<p><b>Italics</b></p><p>The italic font is not just a slope of individual characters, for some fonts it is a complete redesign for a new style that imitates handwriting. The italics for the text are defined by two tags: <b>&lti&gt</b> and <b>&ltem&gt</b>.</p>',

    div27_example: '&lti&gtItalic font type&lt/i&gt<br>&ltem&gtText Selection&lt/em&gt',

    div28: '<p>It should be noted that the tags <b>&ltb&gt</b> and <b>&ltstrong&gt</b>, as well as <b>&lti&gt</b> and <b>&ltem&gt</b> although similar in their action, they are not exactly equivalent and replaceable. The first tag <b>&ltb&gt</b> — it is a physical markup tag and sets the bold text, and the tag <b>&ltstrong&gt</b> — a logical markup tag and highlights the marked text. This separation of tags into logical and physical formatting was originally intended to make HTML universal, including independent of the information output device. Theoretically, if you use, for example, a speech browser, then the text formatted with tags <b>&ltb&gt</b> and <b>&ltstrong&gt</b>, will be marked differently. However, it turned out that in popular browsers, the result of using these tags is equivalent.</p><p>The example shows the use of tags <b>&ltem&gt</b> and <b>&ltstrong&gt</b> for the design of texts:</p>',

    div29_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtText formatting&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltstrong&gtAnd where are the cookies and moonshine?!&lt/strong&gt — <br> &nbsp&nbsp &nbsp&nbsp &ltem&gtexclaimed the bad Boy&lt/em&gt.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div30_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_6.jpeg" alt="image"></div><div class="div_text_image"><p>Text formatting</p></div>',

    div31: '<h3>Upper and lower indexes</h3><p>The index relative to the text is the offset of characters relative to the baseline up or down. Depending on the positive or negative value, the index is called, respectively, upper or lower. They are actively used in mathematics, physics, chemistry and to designate units of measurement. HTML offers two tags for creating an index: <b>&ltsup&gt</b> — superscript and <b>&ltsub&gt</b> — the index is lower. The text placed in one of these containers is indicated by a smaller size than the base text and is shifted relative to the horizontal.</p><p>The example shows where a similar text is used:</p>',

    div32_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtSubscript&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltb&gtThe formula of sulfuric acid:&lt/b&gt &lti&gtH&ltsub&gt2&lt/sub&gtSO&ltsub&gt4&lt/sub&gt&lt/i&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div33_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_7.jpeg" alt="image"></div><div class="div_text_image"><p>Subscript</p></div>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicSix()">HTML topic 6</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicEight()">HTML topic 8</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLTextRus = {
    div1: '<h3>Текст</h3><p>Для изменения вида текста существует достаточно большое количество различных тегов. Это и немудрено, ведь текст самый популярный вид информации.</p>',

    div2: '<h3>Особенности текста в HTML</h3><p>Прежде чем редактировать код веб-страницы, следует принять во внимание некоторые особенности, которые присущи HTML при работе с текстом.</p><p><b>Любое количество пробелов идущих подряд, в браузере отображается как один.</b></p><p>Сколько бы вы не поставили пробелов между словами, это никак не повлияет на конечный вид текста. Это же правило относится к символам табуляции и переносу текста. Поэтому не ставьте лишних пробелов, поскольку это лишь увеличит общий объем файла, но никак не изменит вид документа в браузере. Приведенные ниже строки будут отображаться на веб-странице одинаково, несмотря на их разное написание.</p>',

    div3_example: '&ltp&gtИзмеряй микрометром. Отмечай мелом. Отрубай топором.&lt/p&gt<br>&ltp&gtИзмеряй микрометром. &nbsp&nbsp&nbsp Отмечай мелом. &nbsp&nbsp&nbsp Отрубай топором.&lt/p&gt<br> &ltp&gtИзмеряй микрометром. <br> &nbsp&nbsp&nbsp&nbsp Отмечай мелом. <br> &nbsp&nbsp&nbsp&nbsp Отрубай топором.&lt/p&gt',

    div4_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_1.jpeg" alt="image"></div><div class="div_text_image"><p>Текст</p></div>',

    div5: 'Исключением из этого правила является тег <b>&ltpre&gt</b>, внутри которого любое число пробелов отображается именно так, как оно указано в коде.',

    div6: '<h3>Нет расстановки переносов в тексте</h3><p>HTML не поддерживает расстановку переносов в словах, как это делают текстовые редакторы, иначе говоря, все слова пишутся целиком без их разбиения. Это условие несущественно, пока не используется выравнивание текста по ширине. В этом случае блок текста выравнивается по левому и правому краю. Короткие строки при этом растягиваются за счет автоматического добавления пробелов между словами. Иногда пустые блоки между словами настолько велики, что портят внешний вид страницы и ухудшают читабельность текста.</p><p>Представьте, что у вас в середине предложения есть какое-нибудь длинное слово, вот например «Дегидроэпиандростерон» . В текстовом редакторе это слово будет перенесено по слогам так, чтобы текст занял указанную ширину, а на веб-странице подобное слово будет отображаться целиком, без переносов.</p>',

    div7: '<h3>Текст занимает ширину окна браузера</h3><p>Если вы просто напишете одну длинную строку в коде HTML, то в браузере она будет отформатирована, чтобы текст поместился по ширине в окно. Переносы текста будут добавлены автоматически в местах пробела или дефиса. Что произойдет, если в тексте нет ни того, ни другого символа? Браузер не сможет создать переносы и отобразит текст одной строкой. Если она шире окна браузера, то неминуемо появится горизонтальная полоса прокрутки.</p>',

    div8: '<h3>Абзацы</h3><p>Как правило, блоки текста разделяют между собой абзацами (параграфами). По умолчанию между параграфами существует небольшой вертикальный отступ, называемый отбивкой. Синтаксис создания абзацев следующий.</p>',

    div9_example: '&ltp&gtАбзац 1&lt/p&gt<br>&ltp&gtАбзац 2&lt/p&gt',

    div10: '<p>Каждый абзац начинается с тега <b>&ltp&gt</b> и заканчивается необязательным закрывающим тегом <b>&lt/p&gt</b>.</p><p>В примере показано применение абзацев для создания отступов между строками:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtПрименение абзацев&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtВ одних садах цветёт миндаль, в других метёт метель.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtВ одних краях ещё февраль, в других - уже апрель.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtПроходит время, вечный счёт: год за год, век за век...&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtВо всём - его неспешный ход, его кромешный бег.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtВ году на радость и печаль по двадцать пять недель.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtМне двадцать пять недель февраль, и двадцать пять - апрель.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtПо двадцать пять недель в туман уходит счёт векам.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtЛетит мой звонкий балаган куда-то к облакам.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lti&gtМ. Щербаков&lt/i&gt&lt/p&gt<br> &nbsp&nbsp &lt/body&gt <br> &lthtml&gt',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_2.jpeg" alt="image"></div><div class="div_text_image"><p>Применение абзацев</p></div>',

    div13: '<p>При использовании тега <b>&ltp&gt</b> между абзацами возникают слишком большие отступы. От них можно избавиться, если в местах переноса строк добавлять тег <b>&ltbr&gt</b>. В отличие от абзаца, тег переноса строки <b>&ltbr&gt</b> не создает дополнительных вертикальных отступов между строками и может применяться практически в любом тексте.</p><p>Так, текст примера с учетом переноса строк будет преобразован следующим образом:</p>',

    div14_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtПереносы в тексте&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtВ одних садах цветёт миндаль, в других метёт метель.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp В одних краях ещё февраль, в других - уже апрель.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp Проходит время, вечный счёт: год за год, век за век...&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp Во всём - его неспешный ход, его кромешный бег.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp В году на радость и печаль по двадцать пять недель.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp Мне двадцать пять недель февраль, и двадцать пять - апрель.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp По двадцать пять недель в туман уходит счёт векам.&ltbr&gt <br> &nbsp&nbsp &nbsp&nbsp Летит мой звонкий балаган куда-то к облакам.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lti&gtМ. Щербаков&lt/i&gt&lt/p&gt',

    div15_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_3.jpeg" alt="image"></div><div class="div_text_image"><p>Переносы в тексте</p></div>',

    div16: '<p>В результате расстояние между строками текста уменьшилось и он приобрел более компактный вид.</p>',

    div17: '<h3>Заголовки</h3><p>Заголовки выполняют важную функцию на веб-странице. Во-первых, они показывают важность раздела, к которому относятся. Чем больше заголовок и его «вес» , тем более он значимый. Вспомните, что в газетах и журналах передовицы набраны крупным шрифтом, тем самым, привлекая к ним внимание и говоря: «вот это надо читать обязательно» . Во-вторых, с помощью различных заголовков легко регулировать размер текста. Чем выше уровень заголовка, тем больше размер шрифта. Самым верхним уровнем является уровень <b>1</b> (<b>&lth1&gt</b>), а самым нижним — уровень <b>6</b> (<b>&lth6&gt</b>). И, в-третьих, поисковики добавляют рейтинг тексту, если он находится внутри тега заголовка. Это важно для раскрутки сайта и для его занятия первых строк выдачи результата в поисковой системе по ключевым словам.</p><p>Синтаксис создания заголовков показан в примере:</p>',

    div18_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtЗаголовки в тексте&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок первого уровня&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2&gtЗаголовок второго уровня&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &lth3&gtЗаголовок третьего уровня&lt/h3&gt <br> &nbsp&nbsp &nbsp&nbsp &lth4&gtЗаголовок четвертого уровня&lt/h4&gt <br> &nbsp&nbsp &nbsp&nbsp &lth5&gtЗаголовок пятого уровня&lt/h5&gt <br> &nbsp&nbsp &nbsp&nbsp &lth6&gtЗаголовок шестого уровня&lt/h6&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div19_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_4.jpeg" alt="image"></div><div class="div_text_image"><p>Заголовки в тексте</p></div>',

    div20: '<p>Как правило, на веб-странице применяют заголовки с первого по третий уровень, их вполне достаточно. Редко когда приходится использовать заголовки более низкого уровня.</p>',

    div21: '<h3>Выравнивание текста</h3><p>Выравнивание текста определяет его внешний вид и ориентацию краев абзаца и может выполняться по левому краю, правому краю, по центру или по ширине. Наиболее распространенный вариант — выравнивание по левому краю, когда слева текст сдвигается до края, а правый остается неровным. Выравнивание по правому краю и по центру в основном используется в заголовках и подзаголовках. Следует иметь в виду, что при использовании выравнивания по ширине, в тексте между словами могут появиться большие интервалы, что не очень красиво.</p><p>Для установки выравнивания текста обычно используется тег параграфа <b>&ltp&gt</b> с атрибутом <b>align</b>, который определяет способ выравнивания. Также блок текста допустимо выравнивать с помощью тега <b>&ltdiv&gt</b> с аналогичным атрибутом <b>align</b>. Он может принимать следующие значения:</p><ul><li><b>left</b> - выравнивание по левому краю, задается по умолчанию;</li><li><b>right</b> - выравнивание по правому краю;</li><li><b>center</b> - выравнивание по центру;</li><li><b>justify</b> - выравнивание по ширине (одновременно по правому и левому краю). Это значение работает только для текста, длина которого более, чем одна строка.</li></ul><p>Атрибут <b>align</b> можно применять как для текста, так и для заголовков:</p>',

    div22_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtВыравнивание текста&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1 align="center"&gtКак поймать льва?&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2 align="right"&gtМетод перебора&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp align="justify"&gtДелим пустыню на ряд элементарных участков, размер которых совпадает с габаритными размерами льва, но при этом меньше размера клетки. Далее простым перебором определяем участок, в котором находится лев, что автоматически приводит к его поимке.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2 align="right"&gtМетод дихотомии&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp align="justify"&tДелим пустыню на две половины. В одной части - лев, в другой его нет. Берем ту половину, в которой находится лев, и снова делим ее пополам. Так повторяем до тех пор, пока лев не окажется пойман.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div23_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_5.jpeg" alt="image"></div><div class="div_text_image"><p>Выравнивание текста</p></div>',

    div24: '<h3>Начертание</h3><p><b>Жирное начертание</b></p><p>Насыщенностью называют увеличение толщины линий шрифта и соответственно контраста. Обычно различают четыре вида насыщенности: светлое начертание, нормальное, полужирное и жирное. Однако с помощью HTML можно установить только нормальное и жирное начертание. Для установки текста жирного начертания применяется два тега: <b>&ltb&gt</b> и <b>&ltstrong&gt</b>.</p>',

    div25_example: '&ltb&gtЖирное начертание шрифта&lt/b&gt<br>&ltstrong&gtСильное выделение текста&lt/strong&gt',

    div26: '<p><b>Курсивное начертание</b></p><p>Курсивный шрифт представляет собой не просто наклон отдельных символов, для некоторых шрифтов это полная переделка под новый стиль, имитирующий рукописный. Курсив для текста определяют два тега: <b>&lti&gt</b> и <b>&ltem&gt</b>.</p>',

    div27_example: '&lti&gtКурсивное начертание шрифта&lt/i&gt<br>&ltem&gtВыделение текста&lt/em&gt',

    div28: '<p>Следует отметить, что теги <b>&ltb&gt</b> и <b>&ltstrong&gt</b>, также как <b>&lti&gt</b> и <b>&ltem&gt</b> хотя и похожи по своему действию, являются не совсем эквивалентными и заменяемыми. Первый тег <b>&ltb&gt</b> — является тегом физической разметки и устанавливает жирное начертание текста, а тег <b>&ltstrong&gt</b> — тегом логической разметки и выделяет помеченный текст. Такое разделение тегов на логическое и физическое форматирование изначально предназначалось, чтобы сделать HTML универсальным, в том числе не зависящим от устройства вывода информации. Теоретически, если воспользоваться, например, речевым браузером, то текст, оформленный с помощью тегов <b>&ltb&gt</b> и <b>&ltstrong&gt</b>, будет отмечен по-разному. Однако получилось так, что в популярных браузерах результат использования этих тегов равнозначен.</p><p>В примере показано использование тегов <b>&ltem&gt</b> и <b>&ltstrong&gt</b> для оформления текстов:</p>',

    div29_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtОформление текста&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltstrong&gtА где же печенье и самогоноваренье?!&lt/strong&gt — <br> &nbsp&nbsp &nbsp&nbsp &ltem&gtвоскликнул Мальчиш-плохиш&lt/em&gt.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div30_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_6.jpeg" alt="image"></div><div class="div_text_image"><p>Оформление текста</p></div>',

    div31: '<h3>Верхний и нижний индексы</h3><p>Индексом по отношению к тексту называется смещение символов относительно базовой линии вверх или вниз. В зависимости от положительного или отрицательного значения, индекс называется, соответственно, верхним или нижним. Они активно применяются в математике, физике, химии и для обозначения единиц измерения. HTML предлагает два тега для создания индекса: <b>&ltsup&gt</b> — верхний индекс и <b>&ltsub&gt</b> — индекс нижний. Текст, помещенный в один из этих контейнеров, обозначается меньшим размером, чем базовый текст и смещается относительно горизонтали.</p><p>В примере показано, где применяется подобный текст:</p>',

    div32_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtНижний индекс&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltb&gtФормула серной кислоты:&lt/b&gt &lti&gtH&ltsub&gt2&lt/sub&gtSO&ltsub&gt4&lt/sub&gt&lt/i&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div33_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_text_7.jpeg" alt="image"></div><div class="div_text_image"><p>Нижний индекс</p></div>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicSix()">HTML topic 6</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicEight()">HTML topic 8</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Ссылки.
let HTMLLinksEng = {
    div1: '<h3>Links</h3><p>Links are the basis of hypertext documents and allow you to navigate from one web page to another. Their peculiarity is that the link itself can lead not only to HTML files, but also to a file of any type, and this file can be placed on a completely different site. The main thing is to have access to the document to which the link is being made. In other words, if the path to the file can be specified in the browser\'s address bar, and the file will be opened, then you can link to it.</p><p>To create a link, you need to tell the browser what the link is, and also specify the address of the document to which the link should be made. Both actions are performed using the tag <b>&lta&gt</b>. The general syntax for creating links is as follows:</p>',

    div2_example: '&lta href="URL"&gtlink text&lt/a&gt',

    div3: 'The <b>href</b> attribute defines <b>URL</b> (Universal Resource Locator), in other words, the address of the document to go to, and the contents of the container <b>&lta&gt</b> is a reference. Text located between tags <b>&lta&gt</b> and <b>&lt/a&gt</b>, by default, it turns blue and is underlined. The example shows the creation of several links to different web pages:',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLinks on the page&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="dog.html"&gtDogs&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="cat.html"&gtCats&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_1.jpeg" alt="image"></div><div class="div_text_image"><p>Links on the page</p></div>',

    div6: '<p>In this example, two links with different texts are created. Clicking on the text "Dogs" in the browser window opens the document <b>dog.html</b>, and when you click on "Cats" — file <b>cat.html</b>.</p><p>If a link to a file that does not exist is specified, for example, its name in the <b>href</b> attribute is typed with an error, then such a link is called <b>broken</b>. Broken links should be categorically avoided, as they mislead site visitors.</p>',

    div7: '<p>Such a message will differ in browsers, but the meaning remains the same — the document to which the link leads cannot be opened. To avoid such errors, test all links for their operability and immediately eliminate the existing errors.</p><p>The file by the link opens in the browser window only in cases when the browser knows the type of document. But since a link can be made to any type of file, the browser cannot always display the document. At the same time, a message is displayed how to process the file — open it or save it to the specified folder.</p>',

    div8: '<h3>Absolute and relative references</h3><p>The link address can be either absolute or relative. Absolute addresses must begin with the protocol (usually <b>http://</b>) and contain the name of the site. Relative links count from the root of the site or the current document.</p><p>The example shows the creation of an absolute link to another site:</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtAbsolute address&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="http://htmlbook.ru"&gtLearning HTML&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_2.jpeg" alt="image"></div><div class="div_text_image"><p>Absolute address</p></div>',

    div11: '<p>In this example, a link of the form <b>&lta href="http://htmlbook.ru"&gtLearning HTML&lt/a&gt</b> is absolute and leads to the main page of the site <b>htmlbook.ru</b>.</p><p>! When specifying the site directory as a link (for example, <b>http://htmlbook.ru/css/</b>), the <b>index file</b> is displayed. This is a file that is loaded by default when accessing a directory without explicitly specifying the file name. Usually the index file is a document with the name <b>index.html</b>.</p><p>Absolute links are usually used to indicate a document on another network resource, however, it is permissible to make absolute links inside the current site. However, this is not often practiced, since such links are quite long and cumbersome. Therefore, relative links are mainly used inside the site.</p>',

    div12: '<h3>Links relative to the current document</h3><p>When creating relative links, it is necessary to understand which value for the <b>href</b> attribute should be specified, since it depends on the source location of the files. Let\'s consider a few typical options.</p><ol><li>The files are located in the same folder: <br><br>Website:<ul><li>Source document.html</li><li>Referenced document.html</li></ul> </li></ol><p>It is necessary to make a link from the source document to the referenced one. In this case, the code will be as follows:</p>',

    div13_example: '&lta href="Referenced document.html"&gtLink&lt/a&gt',

    div14: '<ol start="2"><li>Files are placed in different folders: <br><br>Website:<ul><li>Folder:<ul><li>Source document.html</li></ul><li>Referenced document.html</li></li></ul> </li></ol><p>When the source document is stored in one folder, and the referenced document is in the root of the site, then two dots and a slash (<b>/</b>) should be placed before the file name in the link address, as shown below:</p>',

    div15_example: '&lta href="../Referenced document.html"&gtLink&lt/a&gt',

    div16: '<p>Two dots in this case mean to exit the current folder to a higher level.</p><ol start="3"><li>Files are placed in different folders: <br><br>Website 2:<ul><li>Folder:<ul><li>Folder:<ul><li>Source document.html</li></ul></li></ul></li><li>Referenced document.html</li></ul> </li></ol><p>Now the source file is located in two subfolders, and to refer to the document in the root of the site, you need to repeat the writing of the previous example twice:</p>',

    div17_example: '&lta href="../../Referenced document.html"&gtLink&lt/a&gt',

    div18: '<p>The same is the case with any number of subfolders.</p><ol start="4"><li>Files are placed in different folders: <br><br>Website:<ul><li>Folder:<ul><li>Referenced document.html</li></ul></li><li>Source document.html</li></ul> </li></ol><p>Now the situation is changing, the source file is located in the root of the site, and the file to which you need to link is in the folder. In this case, the path to the file will be as follows:</p>',

    div19_example: '&lta href="Folder/Referenced document.html"&gtLink&lt/a&gt',

    div20: '<p>Note that there are no additional dots and slashes before the folder name. If the file is located inside not one, but two folders, then the path to it is written as follows:</p>',

    div21_example: '&lta href="Folder 1/Folder 2/Referenced document.html"&gtLink&lt/a&gt',

    div22: '<h3>Links relative to the root of the site</h3><p>Sometimes you can find the path to the file relative to the root of the site, it looks like <b>"/Folder/Name file"</b> with slash first. So, the record <b>&lta href="/course/"&gtCourses&lt/a&gt</b> it means that the link leads to a folder named <b>course</b>, which is located at the root of the site, and you need to upload an index file in it.</p><p>Note that this form of recording does not work on a local computer, but only under the control of a web server.</p>',

    div23: '<h3>Types of links</h3><p>Any link on a web page can be in one of the following states:<ol><li><b>Unvisited link.</b> This condition is characterized for links that have not yet been opened. By default, unvisited text links are displayed in blue and with an underscore.</li><li><b>Active link.</b> The link is marked as active when it is opened. Since the time between clicking on the link and starting to download a new document is quite short, such a link state is very short. The link also becomes active when it is selected using the keyboard. The default color of such a link is red.</li><li><b>Visited link.</b> As soon as the user opens the document to which the link points, it is marked as visited and changes its color to purple, set by default.</li></ol></p>',

    div24: '<h3>Attachment rules for the tag &lta&gt</h3><p>Any link is an embedded element, so the same rules apply to it as for embedded elements. Namely, it cannot be placed inside the tag<b>&lta&gt</b> block elements, but it is permissible to do the opposite, and embed the link in a block container. The example shows the erroneous and correct use of tags:</p>',

    div25_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtErrors when using links&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lta href="lion.html"&gt&lth1&gtLion Hunting&lt/h1&gt&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gt&lta href="lion.html"&gtHow to catch a lion in the desert&lt/a&gt&lt/h1&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div26_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_3.jpeg" alt="image"></div><div class="div_text_image"><p>Errors when using links</p></div>',

    div27: '<p>The line of this example contains a typical error — the tag <b>&lth1&gt</b> located inside the container <b>&lta&gt</b>. Because <b>&lth1&gt</b> this is a block element, then it is unacceptable to put it inside the link.',

    div28: '<h3>Link Attributes</h3><p>The main attribute of the <b>href</b> tag <b>&lta&gt</b> we have already mastered, let\'s look at a few more useful, but optional attributes of this tag.</p><p><b>target</b></p><p>By default, when clicking on the link, the document opens in the current window or frame. If necessary, this condition can be changed by the <b>target</b> attribute of the tag <b>&lta&gt</b>. The syntax is as follows:</p>',

    div29_example: '&lta target="window name"&gt...&lt/a&gt',

    div30: '<p>The value is the name of the window or frame specified by the <b>name</b> attribute. If a non-existent name is set, a new window will be opened. The following are used as reserved names:</p><ul><li><b>_blank</b> - loads the page into a new browser window.</li><li><b>_self</b> - loads the page into the current window (this value is set by default).</li><li><b>_parent</b> - loads the page into the parent frame, if there are no frames, then this value works as <b>_self</b>.</li><li><b>_top</b> - cancels all frames and loads the page in the full browser window, if there are no frames, then this value works as <b>_self</b>.</li></ul><p>The example shows how to make the link open in a new window:</p>',

    div31_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLink in a new window&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="new.html" target="_blank"&gtOpen in a new window&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div32_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_4.jpeg" alt="image"></div><div class="div_text_image"><p>Link in a new window</p></div>',

    div33: '<p>! The <b>target</b> attribute is correctly used only when transitioning <b>&lt!DOCTYPE&gt</b>, under strict <b>&lt!DOCTYPE&gt</b> there will be an error message because in this version of HTML <b>target</b> is no longer supported.</p><p>Please also note that users do not like when links open in new windows, so use this opportunity carefully and if absolutely necessary.</p><p><b>title</b></p><p>Adds explanatory text to the link in the form of a tooltip. Such a hint is displayed when the mouse cursor lingers on the link, after which the hint disappears after a while. The syntax is as follows:</p>',

    div34_example: '&lta title="text"&gt...&lt/a&gt',

    div35: '<p>Any text string is specified as the value. The string must be enclosed in double or single quotes. The example shows how to use the <b>title</b> attribute for links:</p>',

    div36_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLink Hint&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="zoo.html" title="Drawings of various animals and not only..."&gtDrawings&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div37_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_5.jpeg" alt="image"></div><div class="div_text_image"><p>Link Hint</p></div>',

    div38: '<p>The colors and design of the popup hint depend on the operating system and browser settings, and cannot be changed by the developer.</p>',

    div39: '<h3>Link to the email address</h3><p>Creating a link to an email address is done almost the same way as a link to a web page. Only instead of <b>URL</b> <b>mailto is specified:email address</b>:</p>',

    div40_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtEmail address&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="mailto:vlad@htmlbook.ru"&gtAsk questions by email&lt/a&gt&lt/p&gt<br>&nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div41_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_6.jpeg" alt="image"></div><div class="div_text_image"><p>Email address</p></div>',

    div42: '<p>In the <b>href</b> attribute of the tag <b>&lta&gt</b> first, the keyword <b>mailto</b> is written, then the desired postal address is separated by a colon. Such a link is no different from a link to a web page, but clicking on it launches the mail client installed by default. Therefore, the name of the link should indicate that it is related to e-mail, so that readers understand what clicking on it will lead to.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicSeven()">HTML topic 7</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicNine()">HTML topic 9</a> </b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLLinksRus = {
    div1: '<h3>Ссылки</h3><p>Ссылки являются основой гипертекстовых документов и позволяют переходить с одной веб-страницы на другую. Особенность их состоит в том, что сама ссылка может вести не только на HTML-файлы, но и на файл любого типа, причем этот файл может размещаться совсем на другом сайте. Главное, чтобы к документу, на который делается ссылка, был доступ. Иными словами, если путь к файлу можно указать в адресной строке браузера, и файл при этом будет открыт, то на него можно сделать ссылку.</p><p>Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку. Оба действия выполняются с помощью тега <b>&lta&gt</b>. Общий синтаксис создания ссылок следующий:</p>',

    div2_example: '&lta href="URL"&gtтекст ссылки&lt/a&gt',

    div3: 'Атрибут <b>href</b> определяет <b>URL</b> (Universal Resource Locator, универсальный указатель ресурса), иными словами, адрес документа, на который следует перейти, а содержимое контейнера <b>&lta&gt</b> является ссылкой. Текст, расположенный между тегами <b>&lta&gt</b> и <b>&lt/a&gt</b>, по умолчанию становится синего цвета и подчеркивается. В примере показано создание нескольких ссылок на разные веб-страницы:',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСсылки на странице&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="dog.html"&gtСобаки&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="cat.html"&gtКошки&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_1.jpeg" alt="image"></div><div class="div_text_image"><p>Ссылки на странице</p></div>',

    div6: '<p>В данном примере создаются две ссылки с разными текстами. При щелчке по тексту «Собаки» в окне браузера откроется документ <b>dog.html</b>, а при щелчке на «Кошки» — файл <b>cat.html</b>.</p><p>Если указана ссылка на файл, которого не существует, например, его имя в атрибуте <b>href</b> набрано с ошибкой, то такая ссылка называется <b>битая</b>. Битых ссылок следует категорически избегать, поскольку они вводят посетителей сайта в заблуждение.</p>',

    div7: '<p>Подобное сообщение будет различаться в браузерах, но смысл остается один — документ, на который ведет ссылка, не может быть открыт. Чтобы не возникало подобных ошибок, тестируйте все ссылки на их работоспособность и сразу же устраняйте имеющиеся погрешности.</p><p>Файл по ссылке открывается в окне браузера только в тех случаях, когда браузер знает тип документа. Но поскольку ссылку можно сделать на файл любого типа, то браузер не всегда может отобразить документ. При этом выводится сообщение, как следует обработать файл — открыть его или сохранить в указанную папку.</p>',

    div8: '<h3>Абсолютные и относительные ссылки</h3><p>Адрес ссылки может быть как абсолютным, так и относительным. Абсолютные адреса должны начинаться с указания протокола (обычно <b>http://</b>) и содержать имя сайта. Относительные ссылки ведут отсчет от корня сайта или текущего документа.</p><p>В примере показано создание абсолютной ссылки на другой сайт:</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtАбсолютный адрес&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="http://htmlbook.ru"&gtИзучение HTML&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_2.jpeg" alt="image"></div><div class="div_text_image"><p>Абсолютный адрес</p></div>',

    div11: '<p>В данном примере ссылка вида <b>&lta href="http://htmlbook.ru"&gtИзучение HTML&lt/a&gt</b> является абсолютной и ведет на главную страницу сайта <b>htmlbook.ru</b>.</p><p>! При указании в качестве ссылки каталога сайта (например, <b>http://htmlbook.ru/css/</b>), отображается <b>индексный файл</b>. Это файл, который загружается по умолчанию при обращении к каталогу без явного указания имени файла. Обычно в качестве индексного файла выступает документ с именем <b>index.html</b>.</p><p>Абсолютные ссылки обычно применяются для указания документа на другом сетевом ресурсе, впрочем, допустимо делать абсолютные ссылки и внутри текущего сайта. Однако подобное практикуется нечасто, поскольку такие ссылки достаточно длинные и громоздкие. Поэтому внутри сайта преимущественно используются относительные ссылки.</p>',

    div12: '<h3>Ссылки относительно текущего документа</h3><p>При создании относительных ссылок надо понимать, какое значение для атрибута <b>href</b> следует указывать, поскольку оно зависит от исходного расположения файлов. Рассмотрим несколько типичных вариантов.</p><ol><li>Файлы располагаются в одной папке: <br><br>Сайт:<ul><li>Исходный документ.html</li><li>Ссылаемый документ.html</li></ul> </li></ol><p>Необходимо сделать ссылку из исходного документа на ссылаемый. В таком случае код будет следующий:</p>',

    div13_example: '&lta href="Ссылаемый документ.html"&gtСсылка&lt/a&gt',

    div14: '<p>Подобное имя файла взято только для образца, на сайте в именах файлов не следует использовать русские символы с пробелами, да еще и в разном регистре.</p><ol start="2"><li>Файлы размещаются в разных папках: <br><br>Сайт:<ul><li>Папка:<ul><li>Исходный документ.html</li></ul><li>Ссылаемый документ.html</li></li></ul> </li></ol><p>Когда исходный документ хранится в одной папке, а ссылаемый в корне сайта, то перед именем файла в адресе ссылки следует поставить две точки и слэш (<b>/</b>), как показано ниже:</p>',

    div15_example: '&lta href="../Ссылаемый документ.html"&gtСсылка&lt/a&gt',

    div16: '<p>Две точки в данном случае означают выйти из текущей папки на уровень выше.</p><ol start="3"><li>Файлы размещаются в разных папках: <br><br>Сайт 2:<ul><li>Папка:<ul><li>Папка:<ul><li>Исходный документ.html</li></ul></li></ul></li><li>Ссылаемый документ.html</li></ul> </li></ol><p>Теперь исходный файл находится в двух вложенных папках, и чтобы сослаться на документ в корне сайта, требуется повторить написание предыдущего примера два раза:</p>',

    div17_example: '&lta href="../../Ссылаемый документ.html"&gtСсылка&lt/a&gt',

    div18: '<p>Аналогично обстоит дело с любым числом вложенных папок.</p><ol start="4"><li>Файлы размещаются в разных папках: <br><br>Сайт:<ul><li>Папка:<ul><li>Ссылаемый документ.html</li></ul></li><li>Исходный документ.html</li></ul> </li></ol><p>Теперь ситуация меняется, исходный файл располагается в корне сайта, а файл, на который необходимо сделать ссылку - в папке. В этом случае путь к файлу будет следующий:</p>',

    div19_example: '&lta href="Папка/Ссылаемый документ.html"&gtСсылка&lt/a&gt',

    div20: '<p>Заметьте, что никаких дополнительных точек и слэшей перед именем папки нет. Если файл находится внутри не одной, а двух папок, то путь к нему записывается так:</p>',

    div21_example: '&lta href="Папка 1/Папка 2/Ссылаемый документ.html"&gtСсылка&lt/a&gt',

    div22: '<h3>Ссылки относительно корня сайта</h3><p>Иногда можно встретить путь к файлу относительно корня сайта, он выглядит как <b>"/Папка/Имя файла"</b> со слэшем вначале. Так, запись <b>&lta href="/course/"&gtКурсы&lt/a&gt</b> означает, что ссылка ведет в папку с именем <b>course</b>, которая располагается в корне сайта, а в ней необходимо загрузить индексный файл.</p><p>Учтите, что такая форма записи не работает на локальном компьютере, а только под управлением веб-сервера.</p>',

    div23: '<h3>Виды ссылок</h3><p>Любая ссылка на веб-странице может находиться в одном из следующих состояний:<ol><li><b>Непосещенная ссылка.</b> Такое состояние характеризуется для ссылок, которые еще не открывали. По умолчанию непосещенные текстовые ссылки изображаются синего цвета и с подчеркиванием.</li><li><b>Активная ссылка.</b> Ссылка помечается как активная в момент ее открытия. Поскольку время между нажатием на ссылку и началом загрузки нового документа достаточно мало, подобное состояние ссылки весьма кратковременно. Активной ссылка становится также, при ее выделении с помощью клавиатуры. Цвет такой ссылки по умолчанию красный.</li><li><b>Посещенная ссылка.</b> Как только пользователь открывает документ, на который указывает ссылка, она помечается как посещенная и меняет свой цвет на фиолетовый, установленный по умолчанию.</li></ol></p>',

    div24: '<h3>Правила вложений для тега &lta&gt</h3><p>Любая ссылка является встроенным элементом, поэтому для нее действуют те же правила, что и для встроенных элементов. А именно, нельзя размещать внутри тега <b>&lta&gt</b> блочные элементы, но допустимо делать наоборот, и вкладывать ссылку в блочный контейнер. В примере показано ошибочное и правильное использование тегов:</p>',

    div25_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtОшибки при использовании ссылок&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lta href="lion.html"&gt&lth1&gtОхота на льва&lt/h1&gt&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gt&lta href="lion.html"&gtКак поймать льва в пустыне&lt/a&gt&lt/h1&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div26_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_3.jpeg" alt="image"></div><div class="div_text_image"><p>Ошибки при использовании ссылок</p></div>',

    div27: '<p>В строке данного примера содержится типичная ошибка — тег <b>&lth1&gt</b> располагается внутри контейнера <b>&lta&gt</b>. Поскольку <b>&lth1&gt</b> это блочный элемент, то его недопустимо вкладывать внутрь ссылки.',

    div28: '<h3>Атрибуты ссылок</h3><p>Основной атрибут <b>href</b> тега <b>&lta&gt</b> мы уже освоили, рассмотрим еще несколько полезных, но необязательных атрибутов этого тега.</p><p><b>target</b></p><p>По умолчанию, при переходе по ссылке документ открывается в текущем окне или фрейме. При необходимости, это условие может быть изменено атрибутом <b>target</b> тега <b>&lta&gt</b>. Синтаксис следующий:</p>',

    div29_example: '&lta target="имя окна"&gt...&lt/a&gt',

    div30: '<p>В качестве значения используется имя окна или фрейма, заданное атрибутом <b>name</b>. Если установлено несуществующее имя, то будет открыто новое окно. В качестве зарезервированных имен применяются следующие:</p><ul><li><b>_blank</b> - загружает страницу в новое окно браузера.</li><li><b>_self</b> - загружает страницу в текущее окно (это значение задается по умолчанию).</li><li><b>_parent</b> - загружает страницу во фрейм-родитель, если фреймов нет, то это значение работает как <b>_self</b>.</li><li><b>_top</b> - отменяет все фреймы и загружает страницу в полном окне браузера, если фреймов нет, то это значение работает как <b>_self</b>.</li></ul><p>В примере показано, как сделать, чтобы ссылка открывалась в новом окне:</p>',

    div31_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСсылка в новом окне&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="new.html" target="_blank"&gtОткрыть в новом окне&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div32_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_4.jpeg" alt="image"></div><div class="div_text_image"><p>Ссылка в новом окне</p></div>',

    div33: '<p>! Атрибут <b>target</b> корректно использовать только при переходном <b>&lt!DOCTYPE&gt</b>, при строгом <b>&lt!DOCTYPE&gt</b> будет сообщение об ошибке, поскольку в этой версии HTML <b>target</b> уже не поддерживается.</p><p>Учтите также, что пользователи не любят, когда ссылки открываются в новых окнах, поэтому используйте подобную возможность осмотрительно и при крайней необходимости.</p><p><b>title</b></p><p>Добавляет поясняющий текст к ссылке в виде всплывающей подсказки. Такая подсказка отображается, когда курсор мыши задерживается на ссылке, после чего подсказка через некоторое время пропадает. Синтаксис следующий:</p>',

    div34_example: '&lta title="текст"&gt...&lt/a&gt',

    div35: '<p>В качестве значения указывается любая текстовая строка. Строка должна заключаться в двойные или одинарные кавычки. В примере показано, как использовать атрибут <b>title</b> для ссылок:</p>',

    div36_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtПодсказка к ссылке&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="zoo.html" title="Рисунки различных животных и не только..."&gtРисунки&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div37_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_5.jpeg" alt="image"></div><div class="div_text_image"><p>Подсказка к ссылке</p></div>',

    div38: '<p>Цвета и оформления всплывающей подсказки зависят от настроек операционной системы и браузера, и меняться разработчиком не могут.</p>',

    div39: '<h3>Ссылка на адрес электронной почты</h3><p>Создание ссылки на адрес электронной почты делается почти также как и ссылка на веб-страницу. Только вместо <b>URL</b> указывается <b>mailto:адрес электронной почты</b>:</p>',

    div40_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtАдрес почты&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="mailto:vlad@htmlbook.ru"&gtЗадавайте вопросы по электронной почте&lt/a&gt&lt/p&gt<br>&nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div41_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_links_6.jpeg" alt="image"></div><div class="div_text_image"><p>Адрес почты</p></div>',

    div42: '<p>В атрибуте <b>href</b> тега <b>&lta&gt</b> вначале пишется ключевое слово <b>mailto</b>, затем через двоеточие желаемый почтовый адрес. Подобная ссылка ничем не отличается от ссылки на веб-страницу, но при нажатии на нее запускается почтовая программа, установленная по умолчанию. Поэтому в названии ссылки следует указывать, что она имеет отношение к электронной почте, чтобы читатели понимали, к чему приведет нажатие на нее.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicSeven()">HTML topic 7</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicNine()">HTML topic 9</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Якоря.
let HTMLAnchorsEng = {
    div1: '<h3>Anchors</h3><p>An anchor is a bookmark with a unique name at a certain place on a web page, designed to create a link to it. Anchors are convenient to use in large-volume documents so that you can quickly navigate to the desired section.</p><p>To create an anchor, first make a bookmark in the appropriate place and give it a name using the name attribute of the tag <b>&lta&gt</b>. As the <b>href</b> value, the bookmark name with the lattice symbol (<b>#</b>) in front is used to jump to this anchor:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtQuick transition inside the document&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta name="top"&gt&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="#top"&gtUp&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div3_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_anchors_1.jpeg" alt="image"></div><div class="div_text_image"><p>Quick transition inside the document</p></div>',

    div4: '<p>Between tags <b>&lta name="top"&gt</b> and &lt/a&gt the text is not required, since it is only required to specify the location of the click on the link located at the bottom of the page. The anchor link name starts with the symbol <b>#</b>, followed by the anchor name, it is selected any corresponding to the subject. The main thing is that the values of the <b>name</b> and <b>href</b> attributes match (the lattice symbol does not count).</p><p>! Anchors are associated with one feature of the browser. After navigating to the specified anchor, clicking on the "Back" button returns not to the previous viewed page, but to the link from which the transition to the anchor was made. It turns out that to go to the previous document, you need to press the "Back" button twice.</p><p>A link can also be made to a bookmark located on another web page or even another site. To do this, in the attribute <b>href</b> tag <b>&lta&gt</b> it is necessary to specify the address of the document and at the end add the grid symbol <b>#</b> and the name of the bookmark:</p>',

    div5_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtAnchor in another document&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="text.html#bottom"&gtGo to the bottom of the text&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div6_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_anchors_2.jpeg" alt="image"></div><div class="div_text_image"><p>Anchor in another document</p></div>',

    div7: '<p>This example shows the creation of a link to the <b>filetext.html</b>, when you open this file, you go to a bookmark named <b>bottom</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicEight()">HTML topic 8</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicTen()">HTML topic 10</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLAnchorsRus = {
    div1: '<h3>Якоря</h3><p>Якорем называется закладка с уникальным именем на определенном месте веб-страницы, предназначенная для создания перехода к ней по ссылке. Якоря удобно применять в документах большого объема, чтобы можно было быстро переходить к нужному разделу.</p><p>Для создания якоря следует вначале сделать закладку в соответствующем месте и дать ей имя при помощи атрибута name тега <b>&lta&gt</b>. В качестве значения <b>href</b> для перехода к этому якорю используется имя закладки с символом решетки (<b>#</b>) впереди:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtБыстрый переход внутри документа&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta name="top"&gt&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="#top"&gtНаверх&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div3_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_anchors_1.jpeg" alt="image"></div><div class="div_text_image"><p>Быстрый переход внутри документа</p></div>',

    div4: '<p>Между тегами <b>&lta name="top"&gt</b> и &lt/a&gt текст не обязателен, так как требуется лишь указать местоположение перехода по ссылке, находящейся внизу страницы. Имя ссылки на якорь начинается с символа <b>#</b>, после чего идет имя якоря, оно выбирается любое, соответствующее тематике. Главное, чтобы значения атрибутов <b>name</b> и <b>href</b> совпадали (символ решетки не в счет).</p><p>! С якорями связана одна особенность работы браузера. После перехода к указанному якорю нажатие на кнопку «Назад» возвращает не на предыдущую просмотренную страницу, а к ссылке, с которой был сделан переход к якорю. Получается, что для перехода к предыдущему документу надо нажать кнопку «Назад» два раза.</p><p>Cсылку можно также сделать на закладку, находящуюся в другой веб-странице и даже другом сайте. Для этого в атрибуте <b>href</b> тега <b>&lta&gt</b> надо указать адрес документа и в конце добавить символ решетки <b>#</b> и имя закладки:</p>',

    div5_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtЯкорь в другом документе&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="text.html#bottom"&gtПерейти к нижней части текста&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div6_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_anchors_2.jpeg" alt="image"></div><div class="div_text_image"><p>Якорь в другом документе</p></div>',

    div7: '<p>В данном примере показано создание ссылки на файл <b>text.html</b>, при открытии этого файла происходит переход на закладку с именем <b>bottom</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicEight()">HTML topic 8</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicTen()">HTML topic 10</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Изображения.
let HTMLImageEng = {
    div1: '<h3>Images</h3><p>The image is added in two stages: first, a graphic file of the desired size is prepared, then it is added to the page via the tag <b>&ltimg&gt</b>. HTML itself is intended only to display the required image, while not changing it in any way.</p><p>When preparing images, several points should be taken into account:</p><ol><li>Since the web page is loaded over the network, the volume of the graphic file embedded in the document is a significant factor. The smaller it is, the faster the image will be displayed.</li><li>The size of the image must be limited in width, for example, set to no more than 800 pixels. Otherwise, the entire image will not fit in the browser window, and scrollbars will appear.</li></ol>',

    div2: '<h3>File Formats</h3><p>Two formats are widely used for web graphics - <b>GIF</b> and <b>JPEG</b>. Their versatility, versatility, a small amount of source files with sufficient quality for the site, served them a positive service, in fact defining them as a standard of web images. There is also the <b>PNG</b> format, which is also supported by browsers when adding images and exists in two guises — <b>PNG-8</b> and <b>PNG-24</b>. However, the popularity of <b>PNG</b> is much inferior to the recognition of the formats <b>GIF</b> and <b>JPEG</b>.</p>',

    div3: '<p><b>Format GIF</b></p><p><b>GIF</b> (Graphics Interchange Format) — the format of graphic files, widely used when creating websites. <b>GIF</b> uses 8-bit color and effectively compresses solid color areas, while preserving the details of the image.</p><p>Features:</p><ul><li>The number of colors in the image can be from <b>2</b> to <b>256</b>, but it can be any colors from the <b>24-bit</b> palette.</li><li>A file in the <b>GIF</b> format may contain transparent sections. If a background other than white is used, it will look through the "holes" in the image.</li><li>Supports frame-by-frame image change, which makes the format popular for creating banners and simple animation.</li><li> Uses a lossless compression method.</li></ul>',

    div4: '<p><b>Format JPEG</b></p><p><b>JPEG</b> (Joint Photographic Experts Group) — a popular image file format, widely used when creating websites and for storing images. <b>JPEG</b> supports 24-bit color and keeps the brightness and color shades in photos unchanged. This format is called lossy compression because the <b>JPEG</b> algorithm selectively rejects data. The compression method can distort a drawing, especially one containing text, small details or clear edges. The <b>JPEG</b> format does not support transparency. When you save a photo in this format, the transparent pixels are filled with a certain color.</p><p>Features:</p><ul><li>The number of colors in the image is about <b>16</b> million, which is quite enough to preserve the photographic quality of the image.</li><li>The main characteristic of the format is the quality that allows you to control the final file size.</li><li>Supports the technology, the so-called progressive <b>JPEG</b>, in which a low-resolution version of the drawing appears in the viewing window until the image itself is fully loaded.</li></ul>',

    div5: '<p><b>Format PNG-8</b></p><p>PNG-8 (Portable Network Graphics) — the format is similar in its action to <b>GIF</b>. According to the developers, it uses an improved data compression format, but as practice shows, this is not always the case.</p><p>Features:</p><ul><li>Uses an <b>8-bit</b> palette (<b>256</b> colors) in the image, for which he received the number eight in his name. At the same time, you can choose how many colors will be saved in the file — from <b>2</b> to <b>256</b>.</li><li>Unlike <b>GIF</b>, it does not display animation in any form.</li></ul>',

    div6: '<p><b>Format PNG-24</b></p><p>PNG-24 — a format similar to <b>PNG-8</b>, but using a <b>24-bit</b> color palette Similar to the <b>JPEG</b> format, preserves the brightness and shades of colors in photos. Similar to <b>GIF</b> and <b>PNG-8 format</b>, it preserves the details of the image, as, for example, in line drawings, logos, or illustrations.</p><p>Features:</p><ul><li>It uses approximately <b>16.7</b> million colors in a file, which is why this format is used for full-color images.</li><li>Supports multi-level transparency, this allows you to create a smooth transition from the transparent area of the image to the color, the so-called gradient.</li><li>Due to the fact that the compression algorithm used keeps all the colors and pixels in the image unchanged, when compared with other formats, then <b>PNG-24</b> has the largest final volume of the graphic file.</li></ul>',

    div7: '<h3>Adding a drawing</h3><p>To add an image to a web page, use the tag <b>&ltimg&gt</b>, the <b>src</b> attribute of which defines the address of the graphic file. The general syntax for adding an image will be as follows:</p>',

    div8_example: '&ltimg src="URL" alt="alternative text"&gt',

    div9: '<p><b>URL</b> (Universal Resource Locator) represents the path to the image file. To specify it, you can use both an absolute and a relative address. Next, let\'s look at several different paths to the image file to place it on a web page. For example, let\'s take a file with a drawing called <b>sample.gif</b> and stored in the <b>images</b> folder of the site root:</p><ul><li>If there is a slash at the beginning of the address (symbol <b>/</b>), it means that the countdown is from the root of the site. For example, the site address — <b>http://baklan.narod.ru</b>, so, by writing the path to the image as <b>/images/bird.jpg</b>, we thereby tell the server that the file should be shown <b>http://baklan.narod.ru/images/bird.jpg</b>. Note that such links with a slash in front only work on the web server, they will not work on the local computer.</li><br><li>If a reference to the protocol <b>http</b> (<b>http://</b>) is added before the address, then we are talking about an absolute link. The image will always be downloaded from the specified Internet address, even when saving the web page to a local computer.</li><br><li>A colon with a slash (<b>../</b>) at the beginning of the address indicates that both the drawing and the web page are in different folders that are placed on the same level. The example shows the <b> fileindex.html</b> in which you want to place the drawing <b>pic.gif</b>. Then the relative path to the image from <b>index.html</b> will be <b>../images/pic.gif</b>. There may be cases of file storage, that an appeal from one file to another turns into a set of colons, for example: <b>../../../images/pic.gif</b>: <br><br><b>Website:</b><ul><li>images:<ul><li>pic.gif</li></ul></li><li>bird:<ul><li>index.html</li></ul></li></ul> </li><br><li>The folder name at the beginning of the path, without any slashes and colons, informs that both the current file and the folder with the image are on the same level. As shown in the example, the relative path to the figure <b>pic.gif</b> from file <b>index.html</b> will be <b>images/pic.gif</b>: <br><br><b>Website:</b><ul><li>images:<ul><li>pic.gif</li></ul></li><li>index.html</li></ul> </li></ul><p>The example shows several ways to add a drawing to a web page:</p>',

    div10_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtAdding Drawings&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="http://webimg.ru/themes/cloverfield/images/ref_collage.gif" alt="This is the absolute address of the image placement"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="/example/images/home.png" alt="The address of the image placement relative to the root of the site"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/home.png" alt="The address of the image placement relative to the current HTML document"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div11_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_image_1.jpeg" alt="image"></div><div class="div_text_image"><p>Adding Drawings</p></div>',

    div12: '<h3>Alternative text</h3><p>The alternative text allows you to get text information about the drawing when the display of images is disabled in the browser or during their loading. Such text appears before the image itself and gives an idea of its content. Then the reserved empty field is replaced with a picture.</p><p>To create an alternative text, the <b>alt</b> tag attribute is used <b>&ltimg&gt</b>, as shown in the example:</p>',

    div13_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtAlternative text&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/robot.jpg" alt="Girl and robot" width="300" height="388"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div14_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_image_2.jpeg" alt="image"></div><div class="div_text_image"><p>Image "Girl and Robot"</p></div>',

    div15_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_image_3.jpeg" alt="image"></div><div class="div_text_image"><p>Alternative text</p></div>',

    div16: '<p>Note that the text in the <b>alt</b> attribute must be enclosed in quotation marks, as in this example.</p><p>Not all browsers display alternative text as a tooltip. Therefore, to create it, use the attribute <b>title</b>:</p>',

    div17_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtTitle attribute&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="index.html"&gt&ltimg src="images/home.png" alt="Go back to the main page" title="Main page"&gt&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div18: '<p>As shown in this example, the values of the <b>alt</b> and <b>title</b> attributes may differ, which allows you to set a specific text for different cases. Just keep in mind that long text will be "cut off" and not all of it will be displayed. But search engines, for which the <b>title</b> and <b>alt</b> attribute are sometimes used, quite read it.</p>',

    div19: '<h3>Changing the size of the drawing</h3><p>To change the size of the drawing by means of HTML at the tag <b>&ltimg&gt</b> the <b>width</b> and <b>height</b> attributes are provided. Pixels are used as the value, and the arguments must match the physical dimensions of the image.</p><p>Accordingly, the HTML code for placing this figure is given in the example:</p>',

    div20_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtImage Dimensions&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/figure.jpg" width="100" height="111" alt="Winnie the Pooh"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div21: '<p>If the image dimensions are specified explicitly, the browser uses them to display an empty area corresponding to the image during document loading. Otherwise, the browser waits for the drawing to load completely, after which it changes the width and height of the image. In this case, the text may be reformatted, since the original size of the image is not known and it is automatically set small.</p><p>The width and height of the image can be changed both in a smaller and larger direction. However, this does not affect the loading speed of the drawing in any way, since the file size remains unchanged. Therefore, be careful to reduce the image, because this may cause confusion among readers, why such a small drawing takes so long to load. But increasing the size leads to the opposite effect — the image size is large, but the file relative to the image of the same size loads faster.</p><p>Such a change in size is called resampling, while the browser algorithm is inferior in its capabilities to graphic editors. Therefore, it is necessary to increase the image in this way only in special cases, otherwise the image quality deteriorates too much. It is better to use some kind of graphics program. The exception is drawings containing rectangular areas.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicNine()">HTML topic 9</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicEleven()">HTML topic 11</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLImageRus = {
    div1: '<h3>Изображения</h3><p>Добавление изображения происходит в два этапа: вначале готовится графический файл желаемого размера, затем он добавляется на страницу через тег <b>&ltimg&gt</b>. Сам HTML предназначен только для того, чтобы отобразить требуемую картинку, при этом никак ее не меняя.</p><p>При подготовке изображений следует учесть несколько моментов:</p><ol><li>Поскольку веб-страница загружается по сети, существенным фактором выступает объем графического файла, встроенного в документ. Чем он меньше, тем быстрее отобразится изображение.</li><li>Размер картинки необходимо ограничить по ширине, например, установить не более 800 пикселов. Иначе изображение целиком не поместится в окне браузера, и появятся полосы прокрутки.</li></ol>',

    div2: '<h3>Форматы файлов</h3><p>Широкое распространение для веб-графики получили два формата — <b>GIF</b> и <b>JPEG</b>. Их многофункциональность, универсальность, небольшой объем исходных файлов при достаточном для сайта качестве, сослужили им положительную службу, фактически определив их как стандарт веб-изображений. Есть еще формат <b>PNG</b>, который также поддерживается браузерами при добавлении изображений и существует в двух ипостасях — <b>PNG-8</b> и <b>PNG-24</b>. Однако популярность <b>PNG</b> сильно уступает признанию форматов <b>GIF</b> и <b>JPEG</b>.</p>',

    div3: '<p><b>Формат GIF</b></p><p><b>GIF</b> (Graphics Interchange Format) — формат графических файлов, широко применяемый при создании сайтов. <b>GIF</b> использует 8-битовый цвет и эффективно сжимает сплошные цветные области, при этом сохраняя детали изображения.</p><p>Особенности:</p><ul><li>Количество цветов в изображении может быть от <b>2</b> до <b>256</b>, но это могут быть любые цвета из <b>24-битной</b> палитры.</li><li>Файл в формате <b>GIF</b> может содержать прозрачные участки. Если используется отличный от белого цвета фон, он будет проглядывать сквозь «дыры» в изображении.</li><li>Поддерживает покадровую смену изображений, что делает формат популярным для создания баннеров и простой анимации.</li><li> Использует свободный от потерь метод сжатия.</li></ul>',

    div4: '<p><b>Формат JPEG</b></p><p><b>JPEG</b> (Joint Photographic Experts Group) — популярный формат графических файлов, широко применяемый при создании сайтов и для хранения изображений. <b>JPEG</b> поддерживает 24-битовый цвет и сохраняет яркость и оттенки цветов в фотографиях неизменными. Данный формат называют сжатием с потерями, поскольку алгоритм <b>JPEG</b> выборочно отвергает данные. Метод сжатия может внести искажения в рисунок, особенно содержащий текст, мелкие детали или четкие края. Формат <b>JPEG</b> не поддерживает прозрачность. Когда вы сохраняете фотографию в этом формате, прозрачные пиксели заполняются определенным цветом.</p><p>Особенности:</p><ul><li>Количество цветов в изображении — около <b>16</b> миллионов, что вполне достаточно для сохранения фотографического качества изображения.</li><li>Основная характеристика формата — качество, позволяющее управлять конечным размером файла.</li><li>Поддерживает технологию, так называемый прогрессивный <b>JPEG</b>, в котором версия рисунка с низким разрешением появляется в окне просмотра до полной загрузки самого изображения.</li></ul>',

    div5: '<p><b>Формат PNG-8</b></p><p>PNG-8 (Portable Network Graphics) — формат по своему действию аналогичен <b>GIF</b>. По заверению разработчиков использует улучшенный формат сжатия данных, но как показывает практика, это не всегда так.</p><p>Особенности:</p><ul><li>Использует <b>8-битную</b> палитру (<b>256</b> цветов) в изображении, за что и получил в своем названии цифру восемь. При этом можно выбирать, сколько цветов будет сохраняться в файле — от <b>2</b> до <b>256</b>.</li><li>В отличие от <b>GIF</b>, не отображает анимацию ни в каком виде.</li></ul>',

    div6: '<p><b>Формат PNG-24</b></p><p>PNG-24 — формат, аналогичный <b>PNG-8</b>, но использующий <b>24-битную</b> палитру цвета Подобно формату <b>JPEG</b>, сохраняет яркость и оттенки цветов в фотографиях. Подобно <b>GIF</b> и формату <b>PNG-8</b>, сохраняет детали изображения, как, например, в линейных рисунках, логотипах, или иллюстрациях.</p><p>Особенности:</p><ul><li>Использует примерно <b>16,7</b> млн. цветов в файле, из-за чего этот формат применяется для полноцветных изображений.</li><li>Поддерживает многоуровневую прозрачность, это позволяет создавать плавный переход от прозрачной области изображения к цветной, так называемый градиент.</li><li>Из-за того, что используемый алгоритм сжатия сохраняет все цвета и пикселы в изображении неизменными, если сравнивать с другими форматами, то у <b>PNG-24</b> конечный объем графического файла получается наибольшим.</li></ul>',

    div7: '<h3>Добавление рисунка</h3><p>Для добавления изображения на веб-страницу используется тег <b>&ltimg&gt</b>, атрибут <b>src</b> которого определяет адрес графического файла. Общий синтаксис добавления изображения будет следующий:</p>',

    div8_example: '&ltimg src="URL" alt="альтернативный текст"&gt',

    div9: '<p><b>URL</b> (Universal Resource Locator, универсальный указатель ресурсов) представляет собой путь к графическому файлу. Для его указания можно использовать как абсолютный, так и относительный адрес. Далее рассмотрим несколько разных путей к графическому файлу для размещения его на веб-странице. Для примера возьмем файл с рисунком, который называется <b>sample.gif</b> и хранится в папке <b>images</b> корня сайта:</p><ul><li>Если в начале адреса стоит слэш (символ <b>/</b>), это значит, что отсчет идет от корня сайта. Например, адрес сайта — <b>http://baklan.narod.ru</b>, значит, написав путь к изображению как <b>/images/bird.jpg</b>, мы, тем самым говорим серверу, что показать следует файл <b>http://baklan.narod.ru/images/bird.jpg</b>. Учтите, что подобные ссылки со слэшем впереди работают только на веб-сервере, на локальном компьютере они действовать не будут.</li><br><li>Если перед адресом добавляется упоминание протокола <b>http</b> (<b>http://</b>), то речь идет об абсолютной ссылке. Изображение всегда будет загружаться с указанного адреса в Интернете, даже при сохранении веб-страницы на локальный компьютер.</li><br><li>Двоеточие со слэшем (<b>../</b>) в начале адреса говорит о том, что и рисунок и веб-страница находятся в разных папках, которые размещены на одном уровне. В примере показан файл <b>index.html</b>, в который требуется поместить рисунок <b>pic.gif</b>. Тогда относительный путь к изображению из <b>index.html</b> будет <b>../images/pic.gif</b>. Возможны случаи хранения файлов, что обращение из одного файла к другому превращается в набор двоеточий, например: <b>../../../images/pic.gif</b>: <br><br><b>Сайт:</b><ul><li>images:<ul><li>pic.gif</li></ul></li><li>bird:<ul><li>index.html</li></ul></li></ul> </li><br><li>Имя папки в начале пути, без всяких слэшей и двоеточий, сообщает, что и текущий файл и папка с изображением находятся на одном уровне. Как показано в примере, относительный путь к рисунку <b>pic.gif</b> из файла <b>index.html</b> будет <b>images/pic.gif</b>: <br><br><b>Сайт:</b><ul><li>images:<ul><li>pic.gif</li></ul></li><li>index.html</li></ul> </li></ul><p>В примере показано несколько способов добавления рисунка на веб-страницу:</p>',

    div10_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtДобавление рисунков&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="http://webimg.ru/themes/cloverfield/images/ref_collage.gif" alt="Это абсолютный адрес размещения изображения"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="/example/images/home.png" alt="Адрес размещения изображения относительно корня сайта"&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/home.png" alt="Адрес размещения изображения относительно текущего HTML-документа"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div11_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_image_1.jpeg" alt="image"></div><div class="div_text_image"><p>Добавление рисунков</p></div>',

    div12: '<h3>Альтернативный текст</h3><p>Альтернативный текст позволяет получить текстовую информацию о рисунке при отключенном в браузере показе картинок или во время их загрузки. Такой текст появляется раньше самого изображения и дает представление об его содержании. Затем зарезервированное пустое поле заменяется картинкой.</p><p>Для создания альтернативного текста используется атрибут <b>alt</b> тега <b>&ltimg&gt</b>, как показано в примере:</p>',

    div13_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtАльтернативный текст&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/robot.jpg" alt="Девочка и робот" width="300" height="388"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div14_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_image_2.jpeg" alt="image"></div><div class="div_text_image"><p>Изображение "Девочка и робот"</p></div>',

    div15_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_image_3.jpeg" alt="image"></div><div class="div_text_image"><p>Альтернативный текст</p></div>',

    div16: '<p>Учтите, что текст в атрибуте <b>alt</b> обязательно должен быть взят в кавычки, как в данном примере.</p><p>Не все браузеры отображают альтернативный текст в виде всплывающей подсказки. Поэтому для ее создания используйте атрибут <b>title</b>:</p>',

    div17_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtАтрибут title&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="index.html"&gt&ltimg src="images/home.png" alt="Вернуться на главную страницу" title="Главная страница"&gt&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div18: '<p>Как показано в данном примере, значения у атрибутов <b>alt</b> и <b>title</b> может различаться, что позволяет установить определенный текст для разных случаев. Только учтите, что длинный текст будет «обрезаться» и отображается не весь. Но поисковые системы, для которых иной раз и применяют атрибут <b>title</b> и <b>alt</b>, вполне его читают.</p>',

    div19: '<h3>Изменение размеров рисунка</h3><p>Для изменения размеров рисунка средствами HTML у тега <b>&ltimg&gt</b> предусмотрены атрибуты <b>width</b> (ширина) и <b>height</b> (высота). В качестве значения используются пикселы, при этом аргументы должны совпадать с физическими размерами картинки.</p><p>Соответственно, HTML-код для размещения данного рисунка, приведен в примере:</p>',

    div20_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtРазмеры изображения&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltimg src="images/figure.jpg" width="100" height="111" alt="Винни-Пух"&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div21: '<p>Если размеры изображения указаны явно, то браузер использует их для того, чтобы отображать соответствующую картинке пустую область в процессе загрузки документа. В противном случае браузер ждет, когда рисунок загрузится полностью, после чего меняет ширину и высоту картинки. При этом может произойти переформатирование текста, поскольку первоначально размер картинки не известен и автоматически он устанавливается небольшим.</p><p>Ширину и высоту изображения можно менять как в меньшую, так и большую сторону. Однако на скорость загрузки рисунка это никак не влияет, поскольку размер файла остается неизменным. Поэтому с осторожностью уменьшайте изображение, т.к. это может вызвать недоумение у читателей, отчего такой маленький рисунок так долго грузится. А вот увеличение размеров приводит к обратному эффекту — размер изображения велик, но файл относительно изображения аналогичного размера загружается быстрее.</p><p>Такое изменение размеров называется ресемплированием, при этом алгоритм браузера по своим возможностям уступает графическим редакторам. Поэтому увеличивать таким способом изображения нужно только в особых случаях, а то слишком ухудшается качество картинки. Лучше воспользоваться какой-нибудь графической программой. Исключением являются рисунки, содержащие прямоугольные области.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicNine()">HTML topic 9</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicEleven()">HTML topic 11</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Списки.
let HTMLListsEng = {
    div1: '<h3>Lists</h3><p>A list is an interconnected set of individual phrases or sentences that begin with a marker or a number. Lists provide an opportunity to organize and systematize various data and present them in a visual and user-friendly form.</p><p>Any list is a container <b>&ltul&gt</b>, which sets the bulleted list, or <b>&ltol&gt</b>, the defining list is numbered. Each list item must start with a tag <b>&ltli&gt</b>.</p>',

    div2: '<h3>Bulleted list</h3><p>A bulleted list is defined by the fact that a small marker is added before each list item, usually in the form of a colored circle. The list itself is formed using a container <b>&ltul&gt</b>, and each item in the list starts with a tag <b>&ltli&gt</b>, as shown below:</p>',

    div3_example: '&ltul&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtThe first point&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtSecond point&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtThe third point&lt/li&gt <br> &ltul&gt',

    div4: '<p>The example shows the HTML code for adding a bulleted list on a web page:</p>',

    div5_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtBulleted list&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lthr&gt <br> &nbsp&nbsp &nbsp&nbsp &ltul&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtCheburashka&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtCrocodile Gene&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtShapoklyak&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtLarisa the Rat&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/ul&gt <br> &nbsp&nbsp &nbsp&nbsp &lthr&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div6_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_1.jpeg" alt="image"></div><div class="div_text_image"><p>Bulleted list</p></div>',

    div7: '<p>Pay attention to the margins at the top, bottom and left of the list. Such margins are added automatically.</p><p>Markers can take one of three types: circle (by default), circle and square. To select the marker style, the <b>type</b> attribute of the tag is used <b>&ltul&gt</b>:</p><p>A list with markers in the form of a circle:</p>',

    div8_example: '&ltul type="disc"&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gt...&lt/li&gt <br> &lt/ul&gt ',

    div9: '<p>A list with markers in the form of a circle:</p>',

    div10_example: '&ltul type="circle"&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gt...&lt/li&gt <br> &lt/ul&gt',

    div11: '<p>List with square markers:</p>',

    div12_example: '&ltul type="square"&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gt...&lt/li&gt <br> &lt/ul&gt',

    div13: '<h3>Numbered list</h3><p>Numbered lists are a set of elements with their ordinal numbers. The type and type of numbering depends on the tag attributes <b>&ltol&gt</b>, which is used to create a list. Each item in the numbered list is indicated by a tag <b>&ltli&gt</b>, as shown below:</p>',

    div14_example: '&ltol&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtThe first point&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtSecond point&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtThe third point&lt/li&gt <br> &ltol&gt ',

    div15: '<p>If you do not specify any additional attributes and just write a tag <b>&ltol&gt</b>, then a list with Arabic numbers is used by default (1, 2, 3,...), as shown in the example:</p>',

    div16_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtNumbered list&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltstrong&gtWorking with time&lt/strong&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltol&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtcreating punctuality (you will never be late anywhere);&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gta cure for punctuality (you will never rush anywhere);&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtchanging the perception of time and hours.&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/ol&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	 div17_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_2.jpeg" alt="image"></div><div class="div_text_image"><p>Numbered list</p></div>',

    div18: '<p>Note that the numbered list also adds automatic margins at the top, bottom and left of the text.</p><p>The following values can act as numbering elements:</p><ul><li>arabic numbers (1, 2, 3, ...);</li><li>uppercase Latin letters (A, B, C, ...);</li><li>lowercase Latin letters (a, b, c, ...);</li><li>uppercase Roman numbers (I, II, III, ...);</li><li>lowercase Roman numbers (i, ii, iii, ...).</li></ul><p>To specify the type of numbered list, the attribute is used <b>type</b> tag <b>&ltol&gt</b>. Its possible values are:</p>',

    div19: '<p>Arabic numbers: <b>&ltol type="1"&gt</b></p><p>Uppercase letters of the Latin alphabet: <b>&ltol type="A"&gt</b></p><p>Lowercase letters of the Latin alphabet: <b>&ltol type="a"&gt</b></p><p>Roman numbers in uppercase: <b>&ltol type="I"&gt</b></p><p>Roman numbers in lowercase: <b>&ltol type="i"&gt</b></p><p>To start the list with a specific value, the <b>start</b> attribute of the tag is used <b>&ltol&gt</b>. It does not matter which type of list is set using <b>type</b>, the <b>start</b> attribute works equally with both Roman and Arabic numbers. The example shows creating a list using uppercase Roman numerals starting with eight:</p>',

    div20_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtRoman numbers&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltol type="I" start="8"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtKing Magnum XLIV&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtKing Siegfried XVI&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtKing Sigismund XXI&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtKing Husbrandt I&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/ol&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div21_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_4.jpeg" alt="image"></div><div class="div_text_image"><p>Roman numbers</p></div>',

    div22: '<h3>List of definitions</h3><p>The list of definitions consists of two elements — a term and its definition. The list itself is set using a container <b>&ltdl&gt</b>, term — tag <b>&ltdt&gt</b>, and its definition is with the help of a tag <b>&ltdd&gt</b>. Embedding tags to create a list of definitions is demonstrated in the example:</p>',

    div23_example: '&ltdl&gt <br> &nbsp&nbsp &ltdt&gtTerm 1&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdd&gtDefinition 1&lt/dd&gt <br> &nbsp&nbsp &ltdt&gtTerm 2&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdd&gtDefinition 2&lt/dd&gt <br> &lt/dl&gt',

    div24: '<p>The list of definitions is well suited for deciphering terms, creating a glossary, dictionary, reference book, etc. The example shows one of the possible uses of this type of list:</p>',

    div25_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtList of definitions&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdl&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdt&gtTag&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdd&gtA tag is a special markup symbol that is used to insert various elements on a web page, such as figures, tables, links, etc., and to change their appearance.&lt/dd&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdt&gtHTML document&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdd&gtA plain text file that can contain text, tags, and styles. Images and other objects are stored separately. The contents of such a file are usually called HTML code.&lt/dd&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdt&gtWebsite&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdd&gtA website is a set of separate web pages that are linked together by links and a single design.&lt/dd&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/dl&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

	div26_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_3.jpeg" alt="image"></div><div class="div_text_image"><p>List of definitions</p></div>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTen()">HTML topic 10</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicTwelwe()">HTML topic 12</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLListsRus = {
    div1: '<h3>Списки</h3><p>Списком называется взаимосвязанный набор отдельных фраз или предложений, которые начинаются с маркера или цифры. Списки предоставляют возможность упорядочить и систематизировать разные данные и представить их в наглядном и удобном для пользователя виде.</p><p>Любой список представляет собой контейнер <b>&ltul&gt</b>, который устанавливает маркированный список, или <b>&ltol&gt</b>, определяющий список нумерованный. Каждый элемент списка должен начинаться с тега <b>&ltli&gt</b>.</p>',

    div2: '<h3>Маркированный список</h3><p>Маркированный список определяется тем, что перед каждым элементом списка добавляется небольшой маркер, обычно в виде закрашенного кружка. Сам список формируется с помощью контейнера <b>&ltul&gt</b>, а каждый пункт списка начинается с тега <b>&ltli&gt</b>, как показано ниже:</p>',

    div3_example: '&ltul&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtПервый пункт&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtВторой пункт&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtТретий пункт&lt/li&gt <br> &ltul&gt',

    div4: '<p>В примере приведен код HTML для добавления маркированного списка на веб-странице:</p>',

    div5_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtМаркированный список&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lthr&gt <br> &nbsp&nbsp &nbsp&nbsp &ltul&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtЧебурашка&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtКрокодил Гена&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtШапокляк&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtКрыса Лариса&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/ul&gt <br> &nbsp&nbsp &nbsp&nbsp &lthr&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div6_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_1.jpeg" alt="image"></div><div class="div_text_image"><p>Маркированный список</p></div>',

    div7: '<p>Обратите внимание на отступы сверху, снизу и слева от списка. Такие отступы добавляются автоматически.</p><p>Маркеры могут принимать один из трех видов: круг (по умолчанию), окружность и квадрат. Для выбора стиля маркера используется атрибут <b>type</b> тега <b>&ltul&gt</b>:</p><p>Список с маркерами в виде круга:</p>',

    div8_example: '&ltul type="disc"&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gt...&lt/li&gt <br> &lt/ul&gt ',

    div9: '<p>Список с маркерами в виде окружности:</p>',

    div10_example: '&ltul type="circle"&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gt...&lt/li&gt <br> &lt/ul&gt',

    div11: '<p>Список с квадратными маркерами:</p>',

    div12_example: '&ltul type="square"&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gt...&lt/li&gt <br> &lt/ul&gt',

    div13: '<h3>Нумерованный список</h3><p>Нумерованные списки представляют собой набор элементов с их порядковыми номерами. Вид и тип нумерации зависит от атрибутов тега <b>&ltol&gt</b>, который и применяется для создания списка. Каждый пункт нумерованного списка обозначается тегом <b>&ltli&gt</b>, как показано ниже:</p>',

    div14_example: '&ltol&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtПервый пункт&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtВторой пункт&lt/li&gt <br> &nbsp&nbsp&nbsp&nbsp &ltli&gtТретий пункт&lt/li&gt <br> &ltol&gt ',

    div15: '<p>Если не указывать никаких дополнительных атрибутов и просто написать тег <b>&ltol&gt</b>, то по умолчанию применяется список с арабскими числами (1, 2, 3,...), как показано в примере:</p>',

    div16_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtНумерованный список&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltstrong&gtРабота со временем&lt/strong&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltol&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtсоздание пунктуальности (никогда не будете никуда опаздывать);&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtизлечение от пунктуальности (никогда никуда не будете торопиться);&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtизменение восприятия времени и часов.&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/ol&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div17_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_2.jpeg" alt="image"></div><div class="div_text_image"><p>Нумерованный список</p></div>',

    div18: '<p>Заметьте, что в нумерованном списке также добавляются автоматические отступы сверху, снизу и слева от текста.</p><p>В качестве нумерующих элементов могут выступать следующие значения:</p><ul><li>арабские числа (1, 2, 3, ...);</li><li>прописные латинские буквы (A, B, C, ...);</li><li>строчные латинские буквы (a, b, c, ...);</li><li>прописные римские числа (I, II, III, ...);</li><li>строчные римские числа (i, ii, iii, ...).</li></ul><p>Для указания типа нумерованного списка применяется атрибут <b>type</b> тега <b>&ltol&gt</b>. Его возможные значения:</p>',

    div19: '<p>Арабские числа: <b>&ltol type="1"&gt</b></p><p>Прописные буквы латинского алфавита: <b>&ltol type="A"&gt</b></p><p>Строчные буквы латинского алфавита: <b>&ltol type="a"&gt</b></p><p>Римские числа в верхнем регистре: <b>&ltol type="I"&gt</b></p><p>Римские числа в нижнем регистре: <b>&ltol type="i"&gt</b></p><p>Чтобы начать список с определенного значения, используется атрибут <b>start</b> тега <b>&ltol&gt</b>. При этом не имеет значения, какой тип списка установлен с помощью <b>type</b>, атрибут <b>start</b> одинаково работает и с римскими и с арабскими числами. В примере показано создание списка с использованием римских цифр в верхнем регистре, начинающихся с восьми:</p>',

    div20_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtРимские числа&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltol type="I" start="8"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtКороль Магнум XLIV&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtКороль Зигфрид XVI&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtКороль Сигизмунд XXI&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltli&gtКороль Хусбрандт I&lt/li&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/ol&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div21_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_4.jpeg" alt="image"></div><div class="div_text_image"><p>Римские числа</p></div>',

    div22: '<h3>Список определений</h3><p>Список определений состоит из двух элементов — термина и его определения. Сам список задается с помощью контейнера <b>&ltdl&gt</b>, термин — тегом <b>&ltdt&gt</b>, а его определение — с помощью тега <b>&ltdd&gt</b>. Вложение тегов для создания списка определений продемонстрировано в примере:</p>',

    div23_example: '&ltdl&gt <br> &nbsp&nbsp &ltdt&gtТермин 1&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdd&gtОпределение 1&lt/dd&gt <br> &nbsp&nbsp &ltdt&gtТермин 2&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdd&gtОпределение 2&lt/dd&gt <br> &lt/dl&gt',

    div24: '<p>Список определений хорошо подходит для расшифровки терминов, создания глоссария, словаря, справочника и т.д. В примере показано одно из возможных использований этого вида списка:</p>',

    div25_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСписок определений&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdl&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdt&gtТег&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdd&gtТег — это специальный символ разметки, который применяется для вставки различных элементов на веб-страницу таких как: рисунки, таблицы, ссылки и др., и для изменения их вида.&lt/dd&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdt&gtHTML-документ&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdd&gtОбычный текстовый файл, который может содержать в себе текст, теги и стили. Изображения и другие объекты хранятся отдельно. Содержимое такого файла обычно называется HTML-код.&lt/dd&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdt&gtСайт&lt/dt&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltdd&gtCайт — это набор отдельных веб-страниц, которые связаны между собой ссылками и единым оформлением.&lt/dd&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/dl&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div26_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_list_3.jpeg" alt="image"></div><div class="div_text_image"><p>Список определений</p></div>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTen()">HTML topic 10</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicTwelve()">HTML topic 12</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Таблицы.
let HTMLTablesEng = {
    div1: '<h3>Tables</h3><p>Due to the versatility of tables, a large number of parameters that control their appearance, tables have long become a certain standard for the layout of web pages. A table with an invisible border is like a modular grid, in the blocks of which it is convenient to place elements of a web page. However, this is not quite the right approach, because each HTML object is defined for its own purposes and if it is used for other purposes, and everywhere, it means that there are no alternatives. So it was for a long time, until layers replaced tables when making up websites. This does not mean that layers are now used all the time, but the trend has already been clearly outlined — tables are used to place tabular data, and layers are used for layout and design.</p>',

    div2: '<h3>Creating a table</h3><p>The table consists of rows and columns of cells that can contain text and pictures. Tables are usually used to organize and represent data, but the capabilities of tables are not limited to this. With the help of tables, it is convenient to make up page layouts, arranging fragments of text and images in the right way.</p><p>To add a table to a web page, use the tag <b>&lttable&gt</b>. This element serves as a container for the elements that define the contents of the table. Any table consists of rows and cells, which are set accordingly using tags <b>&lttr&gt</b> and <b>&lttd&gt</b>. The table must contain at least one cell. Allowed instead of a tag <b>&lttd&gt</b> use the tag <b>&ltth&gt</b>. Text in a cell decorated with a tag <b>&ltth&gt</b>, displayed by the browser in bold font and aligned to the center of the cell. Otherwise, the differences between cells created through tags <b>&lttd&gt</b> and <b>&ltth&gt</b> no.</p>',

    div3_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtTag TABLE&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable border="1" width="100%" cellpadding="5"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltth&gtCell 1&lt/th&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltth&gtCell 2&lt/th&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtCell 3&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtCell 4&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div4_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_1.jpeg" alt="image"></div><div class="div_text_image"><p>Tag TABLE</p></div>',

    div5: '<h3>Tag Attributes &lttable&gt</h3><p>The fact that tables are used quite often and not only for displaying tabular data is due not only to their flexibility and versatility, but also to the abundance of tag attributes <b>&lttable&gt</b>, <b>&lttr&gt</b> and <b>&lttd&gt</b>. Some tag attributes are listed below <b>&lttable&gt</b>, which are used most often:</p><p><b>align</b></p><p>Sets the alignment of the table along the edge of the browser window. Acceptable values: <b>left</b> — left alignment of the table, <b>center</b> — center and <b>right</b> — right. When the values <b>left</b> and <b>right</b> are used, the text begins to flow around the table from the side and bottom.</p><p><b>bgcolor</b></p><p>Sets the background color of the table.</p><p><b>border</b></p><p>Sets the border thickness in pixels around the table. If this attribute is present, the boundaries between cells are also displayed.</p><p><b>cellpadding</b></p><p>Defines the distance between the cell border and its contents. This attribute adds empty space to the cell, thereby increasing its size. Without <b>cellpadding</b>, the text in the table "sticks" to the frame, thereby impairing its perception. Adding <b>cellpadding</b> allows you to improve the readability of the text. If there are no borders, this attribute has no special meaning, but it can help when you need to set an empty space between cells.</p><p><b>cellspacing</b></p><p>Sets the distance between the outer borders of the cells. If the <b>border</b> attribute is set, the border thickness is taken into account and included in the total value.</p><p><b>cols</b></p><p>The <b>cols</b> attribute specifies the number of columns in the table, helping the browser to prepare for its display. Without this attribute, the table will be shown only after all its contents have been downloaded to the browser and analyzed. Using the <b>cols</b> attribute allows you to speed up the display of the table contents somewhat.</p><p><b>rules</b></p><p>Tells the browser where to display the borders between cells. By default, a frame is drawn around each cell, thereby forming a grid. In addition, you can specify to display lines between columns (<b>cols</b>), rows (<b>rows</b>) or groups (<b>groups</b>), which are determined by the presence of tags <b>&ltthead&gt</b>, <b>&lttfoot&gt</b>, <b>&lttbody&gt</b>, <b>&ltcolgroup&gt</b> or <b>&ltcol&gt</b>. The border thickness is specified using the <b>border</b> attribute.</p><p><b>width</b></p><p>Sets the width of the table. If the total width of the content exceeds the specified width of the table, the browser will try to "squeeze" into the specified dimensions by formatting the text. If this is not possible, for example, there are images in the table, the <b>width</b> attribute will be ignored, and the new width of the table will be calculated based on its contents.</p>',

    div6: '<h3>Tag Attributes &lttd&gt</h3><p>Each cell of the table, specified via the tag <b>&lttd&gt</b>, in turn, it also has its own attributes, some of which coincide with the attributes of the tag <b>&lttable&gt</b>.</p><p><b>align</b></p><p>Sets the horizontal alignment of the cell contents. Possible values: <b>left</b> - left alignment, <b>center</b> — center and <b>right</b> - right edge of the cell.</p><p><b>bgcolor</b></p><p>Sets the background color of the cell. Using this attribute in conjunction with the <b>bgcolor</b> attribute of the tag <b>&lttable&gt</b> you can get a variety of color effects in the table.</p><p><b>colspan</b></p><p>Sets the number of cells to be joined horizontally. This attribute makes sense for tables consisting of multiple columns. For example, as for the table:</p>',

    div7_example: '<table><tr><td colspan="2">Cell 1</td></tr><tr><td>Cell 2</td><td>Cell 3</td></tr></table>',

    div8: '<p>The above table contains two rows and two columns, with the upper horizontal cells combined using the <b>colspan</b> attribute.</p><p><b>height</b></p><p>The browser itself sets the height of the table and its cells based on their contents. However, when using the <b>height</b> attribute, the height of the cells will be changed. There are two possible options here. If the value of <b>height</b> is less than the contents of the cell, this attribute will be ignored. If the height of the cell is set to exceed its contents, an empty space is added vertically.</p><p><b>rowspan</b></p><p>Sets the number of cells to be joined vertically. This attribute makes sense for tables consisting of multiple rows. For example, as for the table:</p>',

    div9_example: '<table><tr><td rowspan="2">Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr><tr><td>Cell 4</td><td>Cell 5</td></tr></table>',

    div10: '<p>The above table contains two rows and two columns, the left vertical cells are combined using the <b>rowspan</b> attribute.</p><p><b>valign</b></p><p>Sets the vertical alignment of the cell contents. By default, the contents of the cell are positioned vertically in the center. Possible values: <b>top</b> — alignment along the upper edge of the line, <b>middle</b> — alignment along the middle, <b>bottom</b> — alignment along the lower edge, <b>baseline</b> — alignment along the baseline, if this binds the contents of the cell to one line.</p><p><b>width</b></p><p>Sets the width of the cell. The total width of all cells can exceed the total width of the table only if the contents of the cell exceeds the specified width.</p>',

    div11: '<h3>Features of tables</h3><p>Each table parameter has its own default value. This means that if some attribute is omitted, then it is implicitly still present, and with some value. Because of this, the view of the table may turn out to be completely different than the developer expected. To understand what can be expected from tables, you should know their explicit and implicit features, which are listed below:</p><ul><li>One table can be placed inside a cell of another table. This is required to represent complex data or in the case when one table acts as a modular grid, and the second, inside it, is already like a regular table.</li><br><li>The dimensions of the table are not initially set and are calculated based on the contents of the cells. For example, the total width is determined automatically based on the total width of the cell contents plus the width of the borders between the cells, the margins around the content set via the <b>cellpadding</b> attribute and the distance between the cells, which are determined by the <b>cellspacing</b> value.</li><br><li>If the width of the table is set as a percentage or pixels, then the contents of the table are adjusted to the specified dimensions. So, the browser automatically adds line breaks to the text so that it fits completely into the cell, and at the same time the width of the table remains unchanged. It happens that the width of the cell contents cannot be changed, as, for example, happens with drawings. In this case, the width of the table increases, despite the specified dimensions.</li><br><li>Until the table is fully loaded, its contents will not begin to be displayed. The fact is that the browser, before showing the contents of the table, must calculate the required cell sizes, their width and height. And to do this, you need to know what is in these cells. Therefore, the browser waits for everything in the cells to load, and only then displays the table.</li></ul>',

    div12: '<h3>Table Alignment</h3><p>To set the alignment of the table to the center of the web page or to one of its edges, use the attribute <b>align</b> tag <b>&lttable&gt</b>. The result will be noticeable only if the width of the table does not occupy the entire available area, in other words, less than <b>100%</b>. In fact, <b>align</b> not only sets the alignment, but also makes the text flow around the table from other sides, similar to the behavior of the tag <b>&ltimg&gt</b>. The example shows the alignment of the table to the right and its text wrapping:</p>',

    div13_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtTable Alignment&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="200" bgcolor="#c0c0c0" cellspacing="0" cellpadding="5" border="1" align="right"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd&gtTable contents&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div14_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_2.jpeg" alt="image"></div><div class="div_text_image"><p>Table contents</p></div>',

    div15: '<p>In this example, a table is created with a gray background and right alignment.</p><p>By default, the table is formed in the form of a grid, while each row of the table contains the same number of cells. This option is quite suitable for the formation of simple tables, but it is absolutely not suitable for those cases when you have to make a complex table. In such situations, two main methods are used: combining cells and nested tables.</p>',

    div16: '<h3>Merging cells</h3><p>To combine two or more cells into one, the <b>colspan</b> and <b>rowspan</b> tag attributes are used <b>&lttd&gt</b>. The <b>colspan</b> attribute sets the number of cells to be joined horizontally. The <b>rowspan</b> attribute works similarly, with the only difference that it combines cells vertically. Before adding attributes, check the number of cells in each row to avoid errors. So, <b>&lttd colspan="3"&gt</b> replaces three cells, so there should be three tags in the next line <b>&lttd&gt</b> or a construction of the form <b>&lttd colspan="2"&gt</b>...<b>&lt/td&gt&lttd&gt</b>...<b>&lt/td&gt</b>. If the number of cells in each row does not match, empty phantom cells will appear. The example shows, although valid, but incorrect code, in which just such an error manifests itself:</p>',

    div17_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtIncorrect use of colspan&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable border="1" cellpadding="5" width="100%"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd colspan="2"&gtCell 1&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtCell 2&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br>  &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtCell 3&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtCell 4&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div18: '<p>The result of this example:</p>',

    div19_example: '<table><tr><td colspan="2">Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>',

    div20: '<p>In the first line of the example, three cells are specified, two of them are combined using the <b>colspan</b> attribute, and only two cells are added in the second line. Because of this, an additional cell appears, which is displayed in the browser. It is clearly visible on the result.</p>',

    div21: '<h3>Nested tables</h3><p>Combining cells has some disadvantages, so this method of creating tables cannot be used everywhere. For example, consider an example where the height of a cell is set using the <b>height</b> attribute:</p>',

    div22_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtMerging cells&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="100%" border="1" cellpadding="4" cellspacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd width="100" valign="top"&gtDuis te feugifacilisi. Duis autem dolor in hendrerit in vulputate velit esse molestie consequat.&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd rowspan="2" valign="top"&gtLorem ipsum dolor sit amet, consectetuer adipiscing  elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam  erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis te  feugifacilisi. Ut wisi enim ad minim veniam, quis nostrud exerci taion  ullamcorper suscipit lobortis nisl ut aliquip ex en commodo consequat.&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd height="40"&gtLorem ipsum&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div23_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_3.jpeg" alt="image"></div><div class="div_text_image"><p>Merging cells</p></div>',

    div24: '<p>The lower left cell according to the HTML code has a height of <b>40</b> pixels, but since the height of the contents of the right column is greater than the contents of the left column, the height of the cell changes. It turns out that the <b>height</b> attribute is ignored in this case. Note that this feature appears only in the browser <b>Opera</b>, but other browsers can display complex tables with errors. This is often expressed in those tables where the height of the cells and their vertical union are explicitly set. To simplify the layout, a technique with nested tables is used.</p><p>The essence of the idea is simple — another table with its own parameters is embedded in the cell. Since these tables are independent in some sense, it is possible to create quite fancy constructions. In order for the nested table to occupy the entire width of the cell, the table must be set to a width <b>100%</b>.</p><p>The example shows an example of using nested tables to create two columns and navigation:</p>',

    div25_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtNested tables&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="100%" border="0" cellpadding="5" cellspacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd width="150" valign="top" bgcolor="#f0f0f0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttable width="100%" cellpadding="2" cellspacing="1"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtLorem&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtIpsum&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtDolor&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtSit&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtAmet&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd valign="top" bgcolor="#ffffee"&gtLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div26_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_4.jpeg" alt="image"></div><div class="div_text_image"><p>Nested tables</p></div>',

    div27: '<p>In this layout, two columns are created using a table, and the left column has a fixed width of <b>150</b> pixels. To create a semblance of navigation, another table with a width of <b>100%</b> is added inside the cell.</p>',

    div28: '<h3>Table header</h3><p>If there are a large number of tables on the page of each of them, it is convenient to set a header containing the name of the table and its description. There is a special tag in HTML for this purpose <b>&ltcaption&gt</b>, which sets the text and its position relative to the table. The easiest way is to place the text in the center of the table at the top or bottom of it, in other cases browsers interpret tag attributes differently <b>&ltcaption&gt</b>, because of this, the result is not the same. By default, the title is placed at the top of the table in the center, its width does not exceed the width of the table and in the case of long text, it is automatically moved to a new line. To change the position of the tag header <b>&ltcaption&gt</b> there is an attribute <b>align</b> that can take the following values:</p><ul><li><b>left</b> - aligns the header to the left edge of the table. The browser <b>Firefox</b> places the text on the side of the table, <b>Internet Explorer</b> and <b>Opera</b> place the title on top, aligning it to the left.</li><br><li><b>right</b> - in the browser <b>Internet Explorer</b> and <b>Opera</b> places the header on top of the table and aligns it to the right edge of the table. <b>Firefox</b> displays the title to the right of the table.</li><br><li><b>center</b> - the header is located at the top of the table in its center. This location is set in browsers by default.</li><br><li><b>top</b> - the result is similar to the action of the <b>center</b> attribute, but unlike it, it is included in the <b>HTML 4</b> specification and is understood by all browsers.</li><br><li><b>bottom</b> - the title is placed at the bottom of the table in its center.</li></ul><p>The example shows how to set the header at the top of the table. Note that the tag <b>&ltcaption&gt</b> located inside the container <b>&lttable&gt</b>, this is his standard location:</p>',

    div29_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtTable header&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="100%" border="1" cellpadding="4" cellspacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltcaption&gtChange in resource extraction by year&lt/caption&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltth&gt&nbsp;&lt/th&gt&ltth&gt2003&lt/th&gt&ltth&gt2004&lt/th&gt&ltth&gt2005&lt/th&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtOil&lt/td&gt&lttd&gt43&lt/td&gt&lttd&gt51&lt/td&gt&lttd&gt79&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtGold&lt/td&gt&lttd&gt29&lt/td&gt&lttd&gt34&lt/td&gt&lttd&gt48&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtTree&lt/td&gt&lttd&gt38&lt/td&gt&lttd&gt57&lt/td&gt&lttd&gt36&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div30_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_5.jpeg" alt="image"></div><div class="div_text_image"><p>Table header</p></div>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicEleven()">HTML topic 11</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicThirteen()">HTML topic 13</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLTablesRus = {
    div1: '<h3>Таблицы</h3><p>Благодаря универсальности таблиц, большому числу параметров, управляющих их видом, таблицы надолго стали определенным стандартом для верстки веб-страниц. Таблица с невидимой границей представляет собой словно модульную сетку, в блоках которой удобно размещать элементы веб-страницы. Тем не менее, это не совсем правильный подход, ведь каждый объект HTML определен для своих собственных целей и если он используется не по назначению, причем повсеместно, это значит, что альтернатив нет. Так оно и было долгое время, пока на смену таблицам при верстке сайтов не пришли слои. Это не значит, что слои теперь используются сплошь и рядом, но тенденция уже наметилась четко — таблицы применяются для размещения табличных данных, а слои — для верстки и оформления.</p>',

    div2: '<h3>Создание таблицы</h3><p>Таблица состоит из строк и столбцов ячеек, которые могут содержать текст и рисунки. Обычно таблицы используются для упорядочения и представления данных, однако возможности таблиц этим не ограничиваются. C помощью таблиц удобно верстать макеты страниц, расположив нужным образом фрагменты текста и изображений.</p><p>Для добавления таблицы на веб-страницу используется тег <b>&lttable&gt</b>. Этот элемент служит контейнером для элементов, определяющих содержимое таблицы. Любая таблица состоит из строк и ячеек, которые задаются соответственно с помощью тегов <b>&lttr&gt</b> и <b>&lttd&gt</b>. Таблица должна содержать хотя бы одну ячейку. Допускается вместо тега <b>&lttd&gt</b> использовать тег <b>&ltth&gt</b>. Текст в ячейке, оформленной с помощью тега <b>&ltth&gt</b>, отображается браузером шрифтом жирного начертания и выравнивается по центру ячейки. В остальном, разницы между ячейками, созданными через теги <b>&lttd&gt</b> и <b>&ltth&gt</b> нет.</p>',

    div3_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtТег TABLE&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable border="1" width="100%" cellpadding="5"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltth&gtЯчейка 1&lt/th&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltth&gtЯчейка 2&lt/th&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtЯчейка 3&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtЯчейка 4&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div4_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_1.jpeg" alt="image"></div><div class="div_text_image"><p>Тег TABLE</p></div>',

    div5: '<h3>Атрибуты тега &lttable&gt</h3><p>Тот факт, что таблицы применяются достаточно часто и не только для отображения табличных данных обязан не только их гибкости и универсальности, но и обилию атрибутов тегов <b>&lttable&gt</b>, <b>&lttr&gt</b> и <b>&lttd&gt</b>. Далее перечислены некоторые атрибуты тега <b>&lttable&gt</b>, которые применяются наиболее часто:</p><p><b>align</b></p><p>Задает выравнивание таблицы по краю окна браузера. Допустимые значения: <b>left</b> — выравнивание таблицы по левому краю, <b>center</b> — по центру и <b>right</b> — по правому краю. Когда используются значения <b>left</b> и <b>right</b>, текст начинает обтекать таблицу сбоку и снизу.</p><p><b>bgcolor</b></p><p>Устанавливает цвет фона таблицы.</p><p><b>border</b></p><p>Устанавливает толщину границы в пикселах вокруг таблицы. При наличии этого атрибута также отображаются границы между ячеек.</p><p><b>cellpadding</b></p><p>Определяет расстояние между границей ячейки и ее содержимым. Этот атрибут добавляет пустое пространство к ячейке, увеличивая тем самым ее размеры. Без <b>cellpadding</b> текст в таблице «налипает» на рамку, ухудшая тем самым его восприятие. Добавление же <b>cellpadding</b> позволяет улучшить читабельность текста. При отсутствии границ особого значения этот атрибут не имеет, но может помочь, когда требуется установить пустой промежуток между ячейками.</p><p><b>cellspacing</b></p><p>Задает расстояние между внешними границами ячеек. Если установлен атрибут <b>border</b>, толщина границы принимается в расчет и входит в общее значение.</p><p><b>cols</b></p><p>Атрибут <b>cols</b> указывает количество столбцов в таблице, помогая браузеру в подготовке к ее отображению. Без этого атрибута таблица будет показана только после того, как все ее содержимое будет загружено в браузер и проанализировано. Использование атрибута <b>cols</b> позволяет несколько ускорить отображение содержимого таблицы.</p><p><b>rules</b></p><p>Сообщает браузеру, где отображать границы между ячейками. По умолчанию рамка рисуется вокруг каждой ячейки, образуя тем самым сетку. В дополнение можно указать отображать линии между колонками (значение <b>cols</b>), строками (<b>rows</b>) или группами (<b>groups</b>), которые определяются наличием тегов <b>&ltthead&gt</b>, <b>&lttfoot&gt</b>, <b>&lttbody&gt</b>, <b>&ltcolgroup&gt</b> или <b>&ltcol&gt</b>. Толщина границы указывается с помощью атрибута <b>border</b>.</p><p><b>width</b></p><p>Задает ширину таблицы. Если общая ширина содержимого превышает указанную ширину таблицы, то браузер будет пытаться «втиснуться» в заданные размеры за счет форматирования текста. В случае, когда это невозможно, например, в таблице находятся изображения, атрибут <b>width</b> будет проигнорирован, и новая ширина таблицы будет вычислена на основе ее содержимого.</p>',

    div6: '<h3>Атрибуты тега &lttd&gt</h3><p>Каждая ячейка таблицы, задаваемая через тег <b>&lttd&gt</b>, в свою очередь тоже имеет свои атрибуты, часть из которых совпадает с атрибутами тега <b>&lttable&gt</b>.</p><p><b>align</b></p><p>Задает выравнивание содержимого ячейки по горизонтали. Возможные значения: <b>left</b> - выравнивание по левому краю, <b>center</b> — по центру и <b>right</b> - по правому краю ячейки.</p><p><b>bgcolor</b></p><p>Устанавливает цвет фона ячейки. Используя этот атрибут совместно с атрибутом <b>bgcolor</b> тега <b>&lttable&gt</b> можно получить разнообразные цветовые эффекты в таблице.</p><p><b>colspan</b></p><p>Устанавливает число ячеек, которые должны быть объединены по горизонтали. Этот атрибут имеет смысл для таблиц, состоящих из нескольких столбцов. Например, как для таблицы:</p>',

    div7_example: '<table><tr><td colspan="2">Ячейка 1</td></tr><tr><td>Ячейка 2</td><td>Ячейка 3</td></tr></table>',

    div8: '<p>В приведенной таблице содержатся две строки и две колонки, причем верхние горизонтальные ячейки объединены с помощью атрибута <b>colspan</b>.</p><p><b>height</b></p><p>Браузер сам устанавливает высоту таблицы и ее ячеек исходя из их содержимого. Однако при использовании атрибута <b>height</b> высота ячеек будет изменена. Здесь возможны два варианта. Если значение <b>height</b> меньше, чем содержимое ячейки, то этот атрибут будет проигнорирован. В случае, когда установлена высота ячейки, превышающая ее содержимое, добавляется пустое пространство по вертикали.</p><p><b>rowspan</b></p><p>Устанавливает число ячеек, которые должны быть объединены по вертикали. Этот атрибут имеет смысл для таблиц, состоящих из нескольких строк. Например, как для таблицы:</p>',

    div9_example: '<table><tr><td rowspan="2">Ячейка 1</td><td>Ячейка 2</td><td>Ячейка 3</td></tr><tr><td>Ячейка 4</td><td>Ячейка 5</td></tr></table>',

    div10: '<p>В приведенной таблице содержатся две строки и две колонки, левые вертикальные ячейки объединены с помощью атрибута <b>rowspan</b>.</p><p><b>valign</b></p><p>Устанавливает вертикальное выравнивание содержимого ячейки. По умолчанию содержимое ячейки располагается по ее вертикали в центре. Возможные значения: <b>top</b> — выравнивание по верхнему краю строки, <b>middle</b> — выравнивание по середине, <b>bottom</b> — выравнивание по нижнему краю, <b>baseline</b> — выравнивание по базовой линии, при этом происходит привязка содержимого ячейки к одной линии.</p><p><b>width</b></p><p>Задает ширину ячейки. Суммарное значение ширины всех ячеек может превышать общую ширину таблицы только в том случае, если содержимое ячейки превышает указанную ширину.</p>',

    div11: '<h3>Особенности таблиц</h3><p>У каждого параметра таблицы есть свое значение установленное по умолчанию. Это означает, что если какой-то атрибут пропущен, то неявно он все равно присутствует, причем с некоторым значением. Из-за чего вид таблицы может оказаться совсем другим, нежели предполагал разработчик. Чтобы понимать, что можно ожидать от таблиц, следует знать их явные и неявные особенности, которые перечислены далее:</p><ul><li>Одну таблицу допускается помещать внутрь ячейки другой таблицы. Это требуется для представления сложных данных или в том случае, когда одна таблица выступает в роли модульной сетки, а вторая, внутри нее, уже как обычная таблица.</li><br><li>Размеры таблицы изначально не установлены и вычисляются на основе содержимого ячеек. Например, общая ширина определяется автоматически исходя из суммарной ширины содержимого ячеек плюс ширина границ между ячейками, поля вокруг содержимого, устанавливаемые через атрибут <b>cellpadding</b> и расстояние между ячейками, которые определяются значением <b>cellspacing</b>.</li><br><li>Если для таблицы задана ее ширина в процентах или пикселах, то содержимое таблицы подстраивается под указанные размеры. Так, браузер автоматически добавляет переносы строк в текст, чтобы он полностью поместился в ячейку, и при этом ширина таблицы осталась без изменений. Бывает, что ширину содержимого ячейки невозможно изменить, как это, например, происходит с рисунками. В этом случае ширина таблицы увеличивается, несмотря на указанные размеры.</li><br><li>Пока таблица не загрузится полностью, ее содержимое не начнет отображаться. Дело в том, что браузер, прежде чем показать содержимое таблицы, должен вычислить необходимые размеры ячеек, их ширину и высоту. А для этого необходимо знать, что в этих ячейках находится. Поэтому браузер и ожидает, пока загрузится все, что находится в ячейках, и только потом отображает таблицу.</li></ul>',

    div12: '<h3>Выравнивание таблиц</h3><p>Для задания выравнивания таблицы по центру веб-страницы или по одному из ее краев предназначен атрибут <b>align</b> тега <b>&lttable&gt</b>. Результат будет заметен только в том случае, если ширина таблицы не занимает всю доступную область, другими словами, меньше, чем <b>100%</b>. На самом деле <b>align</b> не только устанавливает выравнивание, но и заставляет текст обтекать таблицу с других сторон аналогично поведению тега <b>&ltimg&gt</b>. В примере показано выравнивание таблицы по правому краю и ее обтекание текстом:</p>',

    div13_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtВыравнивание таблицы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="200" bgcolor="#c0c0c0" cellspacing="0" cellpadding="5" border="1" align="right"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd&gtСодержимое таблицы&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div14_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_2.jpeg" alt="image"></div><div class="div_text_image"><p>Содержимое таблицы</p></div>',

    div15: '<p>В данном примере создается таблица с фоном серого цвета и выравниванием по правому краю.</p><p>По умолчанию таблица формируется в виде сетки, при этом в каждой строке таблицы содержится одинаковое количество ячеек. Такой вариант вполне подходит для формирования простых таблиц, но совершенно не годится для тех случаев, когда предстоит сделать сложную таблицу. В подобных ситуациях применяются два основных метода: объединение ячеек и вложенные таблицы.</p>',

    div16: '<h3>Объединение ячеек</h3><p>Для объединения двух и более ячеек в одну используются атрибуты <b>colspan</b> и <b>rowspan</b> тега <b>&lttd&gt</b>. Атрибут <b>colspan</b> устанавливает число ячеек объединяемых по горизонтали. Аналогично работает и атрибут <b>rowspan</b>, с тем лишь отличием, что объединяет ячейки по вертикали. Перед добавлением атрибутов проверьте число ячеек в каждой строке, чтобы не возникло ошибок. Так, <b>&lttd colspan="3"&gt</b> заменяет три ячейки, поэтому в следующей строке должно быть три тега <b>&lttd&gt</b> или конструкция вида <b>&lttd colspan="2"&gt</b>...<b>&lt/td&gt&lttd&gt</b>...<b>&lt/td&gt</b>. Если число ячеек в каждой строке не будет совпадать, появятся пустые фантомные ячейки. В примере приведен хотя и валидный, но неверный код, в котором как раз проявляется подобная ошибка:</p>',

    div17_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtНеправильное использование colspan&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable border="1" cellpadding="5" width="100%"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd colspan="2"&gtЯчейка 1&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtЯчейка 2&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br>  &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtЯчейка 3&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtЯчейка 4&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div18: '<p>Результат данного примера:</p>',

    div19_example: '<table><tr><td colspan="2">Ячейка 1</td><td>Ячейка 2</td></tr><tr><td>Ячейка 3</td><td>Ячейка 4</td></tr></table>',

    div20: '<p>В первой строке примера задано три ячейки, две из них объединены с помощью атрибута <b>colspan</b>, а во второй строке добавлено только две ячейки. Из-за этого возникает дополнительная ячейка, которая отображается в браузере. Ее хорошо видно на результате.</p>',

    div21: '<h3>Вложенные таблицы</h3><p>Объединение ячеек имеет некоторые недостатки, поэтому этот метод создания таблиц нельзя использовать повсеместно. Для примера рассмотрим пример, где задается высота ячейки с помощью атрибута <b>height</b>:</p>',

    div22_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtОбъединение ячеек&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="100%" border="1" cellpadding="4" cellspacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd width="100" valign="top"&gtDuis te feugifacilisi. Duis autem dolor in hendrerit in vulputate velit esse molestie consequat.&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd rowspan="2" valign="top"&gtLorem ipsum dolor sit amet, consectetuer adipiscing  elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam  erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis te  feugifacilisi. Ut wisi enim ad minim veniam, quis nostrud exerci taion  ullamcorper suscipit lobortis nisl ut aliquip ex en commodo consequat.&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd height="40"&gtLorem ipsum&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div23_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_3.jpeg" alt="image"></div><div class="div_text_image"><p>Объединение ячеек</p></div>',

    div24: '<p>Левая нижняя ячейка согласно коду HTML имеет высоту <b>40</b> пикселов, но поскольку высота содержимого правой колонки больше, чем содержимое левой колонки, то высота ячейки меняется. Получается, что атрибут <b>height</b> в данном случае игнорируется. Заметим, что данная особенность проявляется только в браузере <b>Opera</b>, но и другие браузеры могут отображать сложные таблицы с ошибками. Это часто выражается в тех таблицах, где явно устанавливается высота ячеек и их объединение по вертикали. Для упрощения верстки применяется прием с вложенными таблицами.</p><p>Суть идеи проста — в ячейку вкладывается еще одна таблица со своими параметрами. Поскольку эти таблицы в каком-то смысле независимы, то можно создавать довольно причудливые конструкции. Чтобы вложенная таблица занимала всю ширину ячейки, таблице надо задать ширину <b>100%</b>.</p><p>В примере показан пример использования вложенных таблиц для создания двух колонок и навигации:</p>',

    div25_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtВложенные таблицы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="100%" border="0" cellpadding="5" cellspacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd width="150" valign="top" bgcolor="#f0f0f0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttable width="100%" cellpadding="2" cellspacing="1"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtLorem&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtIpsum&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtDolor&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtSit&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt&lttd bgcolor="#ffffff"&gtAmet&lt/td&gt&lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd valign="top" bgcolor="#ffffee"&gtLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div26_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_4.jpeg" alt="image"></div><div class="div_text_image"><p>Вложенные таблицы</p></div>',

    div27: '<p>В данном макете с помощью таблицы создается две колонки, причем левая колонка имеет фиксированную ширину <b>150</b> пикселов. Чтобы создать подобие навигации, внутрь ячейки добавлена еще одна таблица с шириной <b>100%</b>.</p>',

    div28: '<h3>Заголовок таблицы</h3><p>При большом количестве таблиц на странице каждой из них удобно задать заголовок, содержащий название таблицы и ее описание. Для этой цели в HTML существует специальный тег <b>&ltcaption&gt</b>, который устанавливает текст и его положение относительно таблицы. Проще всего размещать текст по центру таблицы сверху или снизу от нее, в остальных случаях браузеры по разному интерпретируют атрибуты тега <b>&ltcaption&gt</b>, из-за чего результат получается неодинаковый. По умолчанию заголовок помещается сверху таблицы по центру, его ширина не превышает ширины таблицы и в случае длинного текста он автоматически переносится на новую строку. Для изменения положения заголовка у тега <b>&ltcaption&gt</b> существует атрибут <b>align</b>, который может принимать следующие значения:</p><ul><li><b>left</b> - выравнивает заголовок по левому краю таблицы. Браузер <b>Firefox</b> располагает текст сбоку от таблицы, <b>Internet Explorer</b> и <b>Opera</b> располагают заголовок сверху, выравнивая его по левому краю.</li><br><li><b>right</b> - в браузере <b>Internet Explorer</b> и <b>Opera</b> располагает заголовок сверху таблицы и выравнивает его по правому краю таблицы. <b>Firefox</b> отображает заголовок справа от таблицы.</li><br><li><b>center</b> - заголовок располагается сверху таблицы по ее центру. Такое расположение задано в браузерах по умолчанию.</li><br><li><b>top</b> - результат аналогичен действию атрибута <b>center</b>, но в отличие от него входит в спецификацию <b>HTML 4</b> и понимается всеми браузерами.</li><br><li><b>bottom</b> - заголовок размещается внизу таблицы по ее центру.</li></ul><p>В примере показано, как установить заголовок сверху таблицы. Обратите внимание, что тег <b>&ltcaption&gt</b> находится внутри контейнера <b>&lttable&gt</b>, это его стандартное местоположение:</p>',

    div29_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtЗаголовок таблицы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lttable width="100%" border="1" cellpadding="4" cellspacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltcaption&gtИзменение добычи ресурсов по годам&lt/caption&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltth&gt&nbsp;&lt/th&gt&ltth&gt2003&lt/th&gt&ltth&gt2004&lt/th&gt&ltth&gt2005&lt/th&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtНефть&lt/td&gt&lttd&gt43&lt/td&gt&lttd&gt51&lt/td&gt&lttd&gt79&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtЗолото&lt/td&gt&lttd&gt29&lt/td&gt&lttd&gt34&lt/td&gt&lttd&gt48&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttr&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lttd&gtДерево&lt/td&gt&lttd&gt38&lt/td&gt&lttd&gt57&lt/td&gt&lttd&gt36&lt/td&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/tr&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/table&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div30_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_table_5.jpeg" alt="image"></div><div class="div_text_image"><p>Заголовок таблицы</p></div>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicEleven()">HTML topic 11</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicThirteen()">HTML topic 13</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Фреймы.
let HTMLFramesEng = {
    div1: '<h3>Frames</h3><p>Frames divide the browser window into separate areas located next to each other. An independent web page is loaded into each of these areas. Since there is a lot of talk about the need for frames, here are the advantages and disadvantages of frames so that you can decide for yourself whether to use them on your site.</p>',

    div2: '<h3>Advantages of frames</h3><p><b>Simplicity</b></p><p>With the help of frames, a web page is divided into two areas that contain site navigation and its content. The frame mechanism allows you to open a document in one frame, following a link clicked in a completely different frame. This division of a web page into components is intuitively understandable and logically conditioned.</p><p><b>Speed</b></p><p>Layout without frames is characterized by placing both navigation and content on the same page. This increases the volume of each page and in total can significantly affect the amount of information downloaded from the site. And since frames use the separation of information into parts, pages with them will load faster.</p><p><b>Placement</b></p><p>Frames provide a unique opportunity — placing information exactly in the right place of the browser window. So, you can place a frame at the bottom of the browser and regardless of scrolling the content, this area will not change its position.</p><p><b>Resizing areas</b></p><p>You can resize frames on the fly, which traditional HTML layout does not allow you to do.</p><p><b>Loading</b><p><p>The web page is loaded only in the specified window, the rest remain unchanged. Using the JavaScript language, you can simultaneously load two or more pages into frames.</p>',

    div3: '<h3>Disadvantages of frames</h3><p><b>Navigation</b></p><p>The user often finds himself on the site, completely unaware of where he got to, because he just clicked on the link received in the search engine. To make it easier for the site visitor to figure out where he is, the site name, page title and navigation are placed on each page. Frames, as a rule, violate this principle by separating the site title from the content, and navigation from the content. Imagine that you have found a suitable link in a search engine, click on it, and as a result, a document opens without a title and navigation. To understand where we are or to view other materials, you will have to edit the path in the address bar, which in any case is inconvenient.</p><p><b>Poor indexing by search engines</b></p><p>Search engines do not work well with the frame structure, because there are no links to other documents on the pages that contain content.</p><p><b>Internal pages cannot be added to Bookmarks</b></p><p>Frames hide the address of the page where the visitor is located, and always show only the address of the site. For this reason, it is difficult to bookmark the page you like in the browser.</p><p><b>Incompatibility with different browsers</b></p><p>Frame parameters have the property of being displayed completely differently in different browsers. Moreover, the contradiction between them is so obvious that the same parameters are interpreted by browsers in a completely different way.</p><p><b>Non - prestige</b></p><p>A very strange flaw that has nothing to do with the technical features of creating a website, but is rather ideological in nature. Sites with frames are considered undignified, and their authors immediately fall out of the category of professionals who never use frames in their works. The exception is chats, where it is possible to do without frames, but with rather tricky methods, and using frames to create chats is quite simple.</p><p>It should be noted that some of the above disadvantages are completely dispensed with. So, with the help of scripts, it can be done that a separate document opened in the browser is formed with the entire frame structure. Search engines are also already better at indexing frame documents than they were a few years ago.</p>',

    div4: '<h3>Creating frames</h3><p>Despite the fact that sites with frames are becoming rarer, learning HTML would be incomplete without considering the topic of frames. In addition, frames in a sense have occupied their niche and are used for administration and help systems. Where the disadvantages of frames do not matter much, but the advantages, on the contrary, are actively in demand.</p><p>To create a frame, the tag is used <b>&ltframeset&gt</b>, which replaces the tag <b>&ltbody&gt</b> in the document and is used to split the screen into areas. There are tags inside this tag <b>&ltframe&gt</b>, which point to an HTML document intended to be uploaded to the area.</p><p>When using frames, at least three HTML files are required: the first defines the frame structure and divides the browser window into two parts, and the remaining two documents are loaded into the specified windows. The number of frames is not necessarily equal to two, maybe more, but not less than two, otherwise the meaning of using frames is lost altogether.</p><p>Let\'s look at the steps of creating frames based on a page. We will need three files: <b>index.html</b> — defines the structure of the document, <b>menu.html</b> — loaded into the left frame and <b>content.html</b> — loaded into the right frame. Of these, only <b>index.html</b> differs in the structure of its code from other files:</p>',

    div5_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFrames&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div6: '<p>If frames are used, the following document type is written in the first line of the code: <b>&lt!DOCTYPE  HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt</b></p><p>This <b>&lt!DOCTYPE&gt</b> indicates to the browser that it is dealing with frames, this line of code is mandatory. Container <b>&lthead&gt</b> it contains typical information such as page encoding and document title. Just keep in mind that the header remains unchanged while the HTML files are opened inside the frames.</p><p>In this example, the browser window is split into two columns using the <b>cols</b> attribute, the left column occupies <b>100</b> pixels, and the right one occupies the remaining space specified by the asterisk symbol. The width or height of the frames can also be set as a percentage, like tables.</p><p>In the tag <b>&ltframe&gt</b> specifies the name of the HTML file loaded into the specified area using the <b>src</b> attribute. A file will be uploaded to the left window, named <b>menu.html</b>, and in the right — <b>content.html</b>. It is desirable to give each frame its unique name so that documents can be loaded into the specified window using the <b>name</b> attribute:</p>',

    div7_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtSite navigation&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody style="background: #f0f0f0"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtMENU&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div8: '<p>In this example, the gray background on the page is set using styles, which will be discussed later.</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtSite content&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtCONTENT&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10: '<p>Let\'s consider a more complex example with three frames already. In this case, the tag is used again <b>&ltframeset&gt</b>, but twice, and one tag is embedded in the other. Horizontal partitioning is created via the <b>rows</b> attribute, where a percentage entry is used for variety:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFrames&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset rows="25%,75%"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="top.html" name="TOP" scrolling="no" noresize&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/frameset&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div12: '<p>As can be seen from this example, the container <b>&ltframeset&gt</b> with the <b>rows</b> attribute, it first creates two horizontal frames, but another one is substituted instead of the second frame <b>&lttframeset&gt</b>, which repeats the structure you already know from the example. To prevent a vertical scrollbar from appearing and the user could not change the size of the upper frame by himself, the attributes <b>scrolling="no"</b> and <b>noresize</b> were added.</p>',

    div13: '<h3>Links in frames</h3><p>In a normal HTML document, when you click on a link, the current document is replaced with a new one in the browser window. When using frames, the document loading scheme differs from the standard one. The main difference is the ability to load a document into a selected frame from another. The <b>target</b> attribute is used for this purpose tag <b>&lta&gt</b>. The value is the name of the frame into which the document will be loaded, specified by the <b>name</b> attribute:</p>',

    div14_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFrames&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu2.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div15: '<p>In the example above, the frame is named <b>CONTENT</b>. To load the document into the specified frame, the <b>target="CONTENT"</b> construction is used, as shown in the example:</p>',

    div16_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtSite navigation&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody style="background: #f0f0f0"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtМЕНЮ&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="text.html" target="CONTENT"&gtText&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div17: '<p>The frame name must begin with a digit or a Latin letter. The following names are used as reserved names:</p><ul><li><b>_blank</b> - loads the document into a new window;</li><li><b>_self</b> - loads the document into the current frame;</li><li><b>_parent</b> - loads the document into the frame occupied by the parent, if there is no parent frame, the value acts the same as <b>_top</b>;</li><li><b>_top</b> - cancels all frames and loads the document into a full browser window.</li></ul>',

    div18: '<h3>Boundaries between frames</h3><p>The border between frames is displayed by default and, as a rule, in the form of a three-dimensional line. To hide it, the <b>frameborder</b> attribute of the <b>&ltframeset&gt</b> tag is used with the value <b>0</b>. However, in the Opera browser, although the border becomes pale in this case, it still remains. For this browser, you need to add <b>framespacing="0"</b>. Thus, by combining different attributes of the <b>&ltframeset&gt</b> tag, we get a universal code that works in all browsers. The line will not be shown in any way:</p>',

    div19_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFrames&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframeset cols="100,*" frameborder="0" framespacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div20: '<p>Note that the <b>frameborder</b> and <b>framespacing</b> attributes are not valid and do not comply with the HTML specification.</p><p>If the border between frames is still needed, it is drawn in the browser by default, without specifying any attributes. You can also set the border color using the <b>bordercolor</b> attribute, which can be used in the <b>&ltframeset&gt</b> and <b>&ltframe&gt</b> tags. The color is indicated by its name or hexadecimal value, and the line thickness is controlled by the <b>border</b> attribute. The Opera browser ignores this attribute and usually displays a black line.</p>',

    div21_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFrames&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*" bordercolor="#000080" border="5"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div22: '<p>The <b>bordercolor</b> and <b>border</b> attributes of the <b>&ltframeset&gt</b> tag are also not valid and are not recognized by the HTML specification.</p><p>In this example, the line between the frames is set to blue with a thickness of five pixels. The lines differ in their appearance in different browsers, despite the same parameters.</p>',

    div23: '<h3>Changing frame sizes</h3><p>By default, the frame sizes can be changed using the mouse cursor by hovering it over the border between the frames. To block the possibility of the user changing the size of frames, use the <b>noresize</b> attribute of the <b>&ltframe&gt</b> tag:</p>',

    div24_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFrames&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU" noresize&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div25: '<p>The <b>noresize</b> attribute does not require any values and is used by itself. For the case of two frames, this attribute can only be specified in one place. Naturally, if one frame cannot be resized, then the dimensions of the one next to it will not change either.</p>',

    div26: '<h3>Scroll Bars</h3><p>If the content of the frame does not fit into the allotted window, scrollbars automatically appear to view the information. In some cases, scrollbars violate the design of the web page, so they can be discarded. To control the display of scrollbars, the <b>scrolling</b> attribute of the <b>&ltframe&gt</b> tag is used. It can take two main values: <b>yes</b> — always causes scrollbars to appear, regardless of the amount of information, and <b>no</b> — prohibits their appearance:</p>',

    div27_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFrames&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU" noresize scrolling="no"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div28: '<p>With the scrollbars turned off, if the information does not fit into the frame window, it will be difficult to view it. Therefore, <b>scrolling="no"</b> should be used carefully.</p><p>If the <b>scrolling</b> attribute is not specified, scrollbars are added by the browser only when necessary, in the case when the content of the frame exceeds its visible part.</p>',

    div29: '<h3>Floating frames</h3><p>A conversation about frames will be incomplete without mentioning floating frames. This is the name of a frame that can be added to any place on a web page. Another name for it is an embedded frame, it is so called because of its peculiarity of embedding directly into the body of a web page.</p><p>You can load an HTML document into the frame and scroll through its contents independently of the rest of the material on the web page. The frame sizes are set independently according to the design of the site or your own preferences.</p><p>The floating frame is created using the <b>&ltiframe&gt</b> tag, it has a mandatory attribute <b>src</b>, indicating the document loaded into the frame:</p>',

    div30_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFloating frame&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltiframe src="hsb.html" width="300" height="120"&gt&lt/iframe&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div31: '<p>In this example, the width and height of the frame are set via the <b>width</b> and <b>height</b> attributes. The file itself loaded into the frame is called <b>hsb.html</b>. Note that if the content does not fit entirely into the allotted area, scrollbars appear.</p><p>Another convenience of floating frames is that you can upload documents to it by link. To do this, you need to set the name of the frame through the <b>name</b> attribute, and in the <b>&lta&gt</b> tag, specify the same name in the <b>target</b> attribute:</p>',

    div32_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFloating frame&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="rgb.html" target="color"&gtRGB&lt/a&gt | <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="cmyk.html" target="color"&gtCMYK&lt/a&gt | <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="hsb.html" target="color"&gtHSB&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltiframe src="model.html" name="color" width="100%" height="200"&gt&lt/iframe&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div33: '<p>In this example, several links have been added, they open in a frame named <b>color</b>.</p><p><b>!</b> The <b>&ltiframe&gt</b> tag passes validation only when using the transitional <b>&lt!DOCTYPE&gt</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTwelwe()">HTML topic 12</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); HTMLTopicFourteen()">HTML topic 14</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLFramesRus = {
    div1: '<h3>Фреймы</h3><p>Фреймы разделяют окно браузера на отдельные области, расположенные рядом друг с другом. В каждую из таких областей загружается самостоятельная веб-страница. Поскольку вокруг фреймов существует много разговоров об их необходимости, далее приведем достоинства и недостатки фреймов, чтобы можно было самостоятельно решить стоит ли их использовать на своем сайте.</p>',

    div2: '<h3>Достоинства фреймов</h3><p><b>Простота</b></p><p>С помощью фреймов веб-страница разграничивается на две области, которые содержат навигацию по сайту и его контент. Механизм фреймов позволяет открывать документ в одном фрейме, по ссылке, нажатой в совершенно другом фрейме. Такое разделение веб-страницы на составляющие интуитивно понятно и логически обусловлено.</p><p><b>Быстрота</b></p><p>Для верстки без фреймов характерно размещение на одной странице и навигации и содержания. Это увеличивает объем каждой страницы и в сумме может существенно повлиять на объем загружаемой с сайта информации. А так как фреймы используют разделение информации на части, страницы с ними будут загружаться быстрее.</p><p><b>Размещение</b></p><p>Фреймы предоставляют уникальную возможность — размещение информации точно в нужном месте окна браузера. Так, можно поместить фрейм внизу браузера и независимо от прокручивания содержимого, эта область не изменит своего положения.</p><p><b>Изменение размеров областей</b></p><p>Можно изменять размеры фреймов «на лету», чего не позволяет сделать традиционная верстка HTML.</p><p><b>Загрузка</b><p><p>Загрузка веб-страницы происходит только в указанное окно, остальные остаются неизменными. С помощью языка JavaScript можно осуществить одновременную загрузку двух и более страниц во фреймы.</p>',

    div3: '<h3>Недостатки фреймов</h3><p><b>Навигация</b></p><p>Пользователь зачастую оказывается на сайте, совершенно не представляя, куда он попал, потому что всего лишь нажал на ссылку, полученную в поисковой системе. Чтобы посетителю сайта было проще разобраться, где он находится, на каждую страницу помещают название сайта, заголовок страницы и навигацию. Фреймы, как правило, нарушают данный принцип, отделяя заголовок сайта от содержания, а навигацию от контента. Представьте, что вы нашли подходящую ссылку в поисковой системе, нажимаете на нее, а в итоге открывается документ без названия и навигации. Чтобы понять, где мы находимся или посмотреть другие материалы, придется редактировать путь в адресной строке, что в любом случае доставляет неудобство.</p><p><b>Плохая индексация поисковыми системами</b></p><p> Поисковые системы плохо работают с фреймовой структурой, поскольку на страницах, которые содержат контент, нет ссылок на другие документы.</p><p><b>Внутренние страницы нельзя добавить в «Закладки»</b></p><p> Фреймы скрывают адрес страницы, на которой находится посетитель, и всегда показывают только адрес сайта. По этой причине понравившуюся страницу сложно поместить в закладки браузера.</p><p><b>Несовместимость с разными браузерами</b></p><p>Параметры фреймов обладают свойством совершенно по разному отображаться в различных браузерах. Причём противоречие между ними настолько явное, что одни и те же параметры интерпретируются браузерами совершенно по-своему.</p><p><b>Непрестижность</b></p><p>Весьма странный недостаток, который не имеет никакого отношения к техническим особенностям создания сайта, а носит скорее идеологический характер. Сайты с фреймами считаются несолидными, а их авторы сразу выпадают из разряда профессионалов, которые никогда не используют фреймы в своих работах. Исключение составляют чаты, где без фреймов обойтись хотя можно, но достаточно хитрыми методами, а с помощью фреймов создавать чаты достаточно просто.</p><p>Надо отметить, что некоторые приведённые недостатки вполне обходятся. Так, с помощью скриптов можно сделать, что открытый в браузере отдельный документ формируется со всей фреймовой структурой. Поисковые системы также уже лучше индексируют фреймовые документы, чем это было несколько лет назад.</p>',

    div4: '<h3>Создание фреймов</h3><p>Несмотря на то, что сайты с фреймами встречаются все реже, изучение HTML было бы неполным без рассмотрения темы о фреймах. К тому же фреймы в каком-то смысле заняли свою нишу и применяются для систем администрирования и справки. Там, где недостатки фреймов не имеют особого значения, а преимущества наоборот, активно востребованы.</p><p>Для создания фрейма используется тег <b>&ltframeset&gt</b>, который заменяет тег <b>&ltbody&gt</b> в документе и применяется для разделения экрана на области. Внутри данного тега находятся теги <b>&ltframe&gt</b>, которые указывают на HTML-документ, предназначенный для загрузки в область.</p><p>При использовании фреймов необходимо как минимум три HTML-файла: первый определяет фреймовую структуру и делит окно браузера на две части, а оставшиеся два документа загружаются в заданные окна. Количество фреймов не обязательно равно двум, может быть и больше, но никак не меньше двух, иначе вообще теряется смысл применения фреймов.</p><p>Рассмотрим этапы создания фреймов на основе страницы. Нам понадобится три файла: <b>index.html</b> — определяет структуру документа, <b>menu.html</b> — загружается в левый фрейм и <b>content.html</b> — загружается в правый фрейм. Из них только <b>index.html</b> отличается по структуре своего кода от других файлов:</p>',

    div5_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div6: '<p>В случае использования фреймов в первой строке кода пишется следующий тип документа: <b>&lt!DOCTYPE  HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt</b></p><p>Данный <b>&lt!DOCTYPE&gt</b> указывает браузеру, что он имеет дело с фреймами, эта строка кода является обязательной. Контейнер <b>&lthead&gt</b> содержит типовую информацию вроде кодировки страницы и заголовка документа. Вот только учтите, что заголовок остается неизменным, пока HTML-файлы открываются внутри фреймов.</p><p>В данном примере окно браузера разбивается на две колонки с помощью атрибута <b>cols</b>, левая колонка занимает <b>100</b> пикселов, а правая — оставшееся пространство, заданное символом звездочки. Ширину или высоту фреймов можно также задавать в процентном отношении, наподобие таблиц.</p><p>В теге <b>&ltframe&gt</b> задается имя HTML-файла, загружаемого в указанную область с помощью атрибута <b>src</b>. В левое окно будет загружен файл, названный <b>menu.html</b>, а в правое — <b>content.html</b>. Каждому фрейму желательно задать его уникальное имя, чтобы документы можно было загружать в указанное окно с помощью атрибута <b>name</b>:</p>',

    div7_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtНавигация по сайту&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody style="background: #f0f0f0"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtМЕНЮ&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div8: '<p>В данном примере серый фон на странице задается с помощью стилей, о которых речь пойдет далее.</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСодержание сайта&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtСОДЕРЖАНИЕ&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10: '<p>Рассмотрим более сложный пример уже с тремя фреймами. В данном случае опять используется тег <b>&ltframeset&gt</b>, но два раза, причем один тег вкладывается в другой. Горизонтальное разбиение создается через атрибут <b>rows</b>, где для разнообразия применяется процентная запись:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset rows="25%,75%"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="top.html" name="TOP" scrolling="no" noresize&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/frameset&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div12: '<p>Как видно из данного примера, контейнер <b>&ltframeset&gt</b> с атрибутом <b>rows</b> вначале создает два горизонтальных фрейма, но вместо второго фрейма подставляется еще один <b>&lttframeset&gt</b>, который повторяет уже известную вам структуру из примера. Чтобы не появилась вертикальная полоса прокрутки, и пользователь не мог самостоятельно изменить размер верхнего фрейма, добавлены атрибуты <b>scrolling="no"</b> и <b>noresize</b>.</p>',

    div13: '<h3>Ссылки во фреймах</h3><p>В обычном HTML-документе при переходе по ссылке, в окне браузера текущий документ заменяется новым. При использовании фреймов схема загрузки документов отличается от стандартной. Основное отличие — возможность загружать документ в выбранный фрейм из другого. Для этой цели используется атрибут <b>target</b> тега <b>&lta&gt</b>. В качестве значения используется имя фрейма, в который будет загружаться документ, указанный атрибутом <b>name</b>:</p>',

    div14_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu2.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div15: '<p>В приведенном примере фрейму присваивается имя <b>CONTENT</b>. Чтобы документ загружался в указанный фрейм, используется конструкция <b>target="CONTENT"</b>, как показано в примере:</p>',

    div16_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtНавигация по сайту&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody style="background: #f0f0f0"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtМЕНЮ&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="text.html" target="CONTENT"&gtТекст&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div17: '<p>Имя фрейма должно начинаться на цифру или латинскую букву. В качестве зарезервированных имен используются следующие:</p><ul><li><b>_blank</b> - загружает документ в новое окно;</li><li><b>_self</b> - загружает документ в текущий фрейм;</li><li><b>_parent</b> - загружает документ во фрейм, занимаемый родителем, если фрейма-родителя нет значение действует также, как <b>_top</b>;</li><li><b>_top</b> - отменяет все фреймы и загружает документ в полное окно браузера.</li></ul>',

    div18: '<h3>Границы между фреймами</h3><p>Граница между фреймами отображается по умолчанию и, как правило, в виде трехмерной линии. Чтобы ее скрыть используется атрибут <b>frameborder</b> тега <b>&ltframeset&gt</b> со значением <b>0</b>. Однако в браузере Opera граница хоть и становится в этом случае бледной, все же остается. Для этого браузера требуется добавить <b>framespacing="0"</b>. Таким образом, комбинируя разные атрибуты тега <b>&ltframeset&gt</b>, получим универсальный код, который работает во всех браузерах. Линия при этом показываться никак не будет:</p>',

    div19_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframeset cols="100,*" frameborder="0" framespacing="0"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div20: '<p>Учтите, что атрибуты <b>frameborder</b> и <b>framespacing</b> не являются валидными и не соответствуют спецификации HTML.</p><p>Если граница между фреймами все же нужна, в браузере она рисуется по умолчанию, без задания каких-либо атрибутов. Можно, также, задать цвет рамки с помощью атрибута <b>bordercolor</b>, который может применяться в тегах <b>&ltframeset&gt</b> и <b>&ltframe&gt</b>. Цвет указывается по его названию или шестнадцатеричному значению, а толщина линии управляется атрибутом <b>border</b>. Браузер Opera игнорирует этот атрибут и обычно отображает линию черного цвета.</p>',

    div21_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*" bordercolor="#000080" border="5"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div22: '<p>Атрибуты <b>bordercolor</b> и <b>border</b> тега <b>&ltframeset&gt</b> также не являются валидными и не признаются спецификацией HTML.</p><p>В данном примере линия между фреймами задается синего цвета толщиной пять пикселов. Линии различается по своему виду в разных браузерах, несмотря на одинаковые параметры.</p>',

    div23: '<h3>Изменение размеров фреймов</h3><p>По умолчанию размеры фреймов можно изменять с помощью курсора мыши, наведя его на границу между фреймами. Для блокировки возможности изменения пользователем размера фреймов следует воспользоваться атрибутом <b>noresize</b> тега <b>&ltframe&gt</b>:</p>',

    div24_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU" noresize&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div25: '<p>Атрибут <b>noresize</b> не требует никаких значений и используется сам по себе. Для случая двух фреймов этот атрибут можно указать лишь в одном месте. Естественно, если у одного фрейма нельзя изменять размеры, то у близлежащего к нему размеры тоже меняться не будут.</p>',

    div26: '<h3>Полосы прокрутки</h3><p>Если содержимое фрейма не помещается в отведенное окно, автоматически появляются полосы прокрутки для просмотра информации. В некоторых случаях полосы прокрутки нарушают дизайн веб-страницы, поэтому от них можно отказаться. Для управления отображением полос прокрутки используется атрибут <b>scrolling</b> тега <b>&ltframe&gt</b>. Он может принимать два основных значения: <b>yes</b> — всегда вызывает появление полос прокрутки, независимо от объема информации и <b>no</b> — запрещает их появление:</p>',

    div27_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="menu.html" name="MENU" noresize scrolling="no"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltframe src="content.html" name="CONTENT"&gt <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt',

    div28: '<p>При выключенных полосах прокрутки, если информация не помещается в окно фрейма, просмотреть ее будет сложно. Поэтому <b>scrolling="no"</b> следует использовать осторожно.</p><p>Если атрибут <b>scrolling</b> не указан, то полосы прокрутки добавляются браузером только по необходимости, в том случае, когда содержимое фрейма превышает его видимую часть.</p>',

    div29: '<h3>Плавающие фреймы</h3><p>Разговор о фреймах будет неполным без упоминания плавающих фреймов. Так называется фрейм, который можно добавлять в любое место веб-страницы. Еще одно его название — встроенный фрейм, он называется так из-за своей особенности встраиваться прямо в тело веб-страницы.</p><p>Во фрейм можно загружать HTML-документ и прокручивать его содержимое независимо от остального материала на веб-странице. Размеры фрейма устанавливаются самостоятельно согласно дизайну сайта или собственных предпочтений.</p><p>Создание плавающего фрейма происходит с помощью тега <b>&ltiframe&gt</b>, он имеет обязательный атрибут <b>src</b>, указывающий на загружаемый во фрейм документ:</p>',

    div30_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtПлавающий фрейм&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltiframe src="hsb.html" width="300" height="120"&gt&lt/iframe&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div31: '<p>В данном примере ширина и высота фрейма устанавливается через атрибуты <b>width</b> и <b>height</b>. Сам загружаемый во фрейм файл называется <b>hsb.html</b>. Заметьте, что если содержимое не помещается целиком в отведенную область, появляются полосы прокрутки.</p><p>Еще одно удобство плавающих фреймов состоит в том, что в него можно загружать документы по ссылке. Для этого требуется задать имя фрейма через атрибут <b>name</b>, а в теге <b>&lta&gt</b> указать это же имя в атрибуте <b>target</b>:</p>',

    div32_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtПлавающий фрейм&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&lta href="rgb.html" target="color"&gtRGB&lt/a&gt | <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="cmyk.html" target="color"&gtCMYK&lt/a&gt | <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="hsb.html" target="color"&gtHSB&lt/a&gt&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltiframe src="model.html" name="color" width="100%" height="200"&gt&lt/iframe&gt&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div33: '<p>В данном примере добавлено несколько ссылок, они открываются во фрейме с именем <b>color</b>.</p><p><b>!</b> Тег <b>&ltiframe&gt</b> проходит валидацию только при использовании переходного <b>&lt!DOCTYPE&gt</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicTwelwe()">HTML topic 12</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); HTMLTopicFourteen()">HTML topic 14</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Валидация документов.
let HTMLDocumentValidationEng = {
    div1: '<h3>Document validation</h3><p>Validation will be called checking the document for compliance with web standards and identifying existing errors. Accordingly, a valid web document is one that has passed a similar procedure and has no comments on the code. The code of a web page must obey certain rules, which are called a specification, it is developed by the <b>W3 Consortium</b> (<b>www.w3c.org </b>) with the support of browser developers.</p><p>At first glance, it seems that validation is necessary, because we are talking about reducing the number of developers mistakes and writing the "right" code. In fact, everything is much more complicated and there are still heated debates about its relevance around validation. In order to objectively disclose this issue, we will further consider the pros and cons of such a check.</p>',

    div2: '<h3>Advantages of validation</h3><p>Although the HTML code has a fairly simple hierarchical structure, when the volume of the document grows in the code, it is easy to get confused, therefore, it is easy to make a mistake. Browsers, despite the obviously incorrect code, will try to display the web page in any case. But since there is no single regulation on how a "crooked" document should be displayed, each browser tries to do it in its own way. And this in turn leads to the fact that the same document may look different in popular browsers. Correcting obvious mistakes and systematizing the code leads, as a rule, to a stable result.</p><p><b>Trends</b></p><p>The times when browser manufacturers added unique features to their product, contrary to all standards, are beginning to fade into the past. Each new version of the browser increasingly supports specifications and displays documents with minimal or no errors at all. Developers of websites that also adhere to the canons of web standards, thus correspond to modern trends in the development of web technologies.</p><p>Do not forget about XML (eXtensible Markup Language). This language is becoming the de facto standard for storing data and exchanging information between different applications. XML syntax is more rigid than HTML and does not forgive the slightest mistakes. In a sense, XML is similar to programming languages in which a program will not be compiled until the code is debugged. HTML is the first step to learning XML, so by teaching yourself to write code according to all the rules, it will be easier to move on to the next stage of HTML development.</p><p><b>Fashion for validation</b></p><p>As it is not surprising, but there is also a fashion among web developers. The current fashion is to create valid documents and post a special icon in the form of an image that the site complies with the HTML specification. This trend has even affected website customers, and when writing a technical task for website development, some of them specifically stipulate that the site should be made according to web standards.</p><p><b>Indirect benefits</b></p><p>Following standards in many ways gives a lot of benefits, which manifest themselves in small things and become noticeable when a certain critical mass is reached. In particular, the amount of code becomes smaller, more compact and more readable. Accordingly, the loading speed of the site as a whole increases for users.</p>',

    div3: '<h3>Disadvantages of validation</h3><p>Websites, of course, are made to be visited by people. It is the visitors who act as a measure of the site\'s work, and they are interested in information and how to get it. The user wants the site to display correctly in his favorite browser, load quickly and contain the materials he needs. Note that there is nothing in this list about the document code and its validity, visitors are simply not interested in it. Therefore, a completely invalid site, but made with a soul, filled with interesting materials, will attract more visitors than an empty resource, but made according to all the "rules".</p><p><b>Browsers</b></p><p>Browser developers do not always follow the specification and in some cases interpret the code not according to the set rules, but in their own way. Ultimately, this leads to the fact that a web page that is displayed correctly (i.e., as the developers intended) in one browser is displayed with errors in another. Following the specification in such cases is likely to scare away users of some browsers.</p><p>The customers of the site, as well as their developers, do not like this situation, so when faced with a choice: standards or a browser, they mostly choose a browser.</p><p>It turns out a disappointing picture — there is no special need to spend time debugging code to meet the specification. It is better to devote this time to ensuring that the document works without problems in different browsers — this is how web developers mainly think.</p><p><b>Resume</b></p><p>So is it worth validating documents and dealing with this stage when writing web pages? Absolutely, yes. For someone, it will help to identify existing shortcomings, for another it will help to write correct code. To correct errors, achieving full compliance with the standards, or to leave them for the sake of compatibility with different browsers — here everyone decides for himself what goals he pursues and what is more important for him.</p>',

    next: '<b<a href="#" onclick="quickLink(); HTMLTopicThirteen()">HTML topic 13</a></b> - previous topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let HTMLDocumentValidationRus = {
    div1: '<h3>Валидация документов</h3><p>Валидацией будем называть проверку документа на соответствие веб-стандартам и выявление существующих ошибок. Соответственно, валидным является такой веб-документ, который прошел подобную процедуру и не имеет замечаний по коду. Код веб-страницы должен подчиняться определенным правилам, которые называются спецификацией, ее разрабатывает <b>W3 Консорциум</b> (<b>www.w3c.org</b>) при поддержке разработчиков браузеров.</p><p>На первый взгляд, кажется, что валидация необходима, ведь речь идет о сокращении количества ляпов разработчиков и написании «правильного» кода. На деле все обстоит гораздо сложнее и вокруг валидации до сих пор ведутся горячие споры об ее актуальности. Чтобы объективно раскрыть этот вопрос далее рассмотрим плюсы и минусы такой проверки.</p>',

    div2: '<h3>Плюсы валидации</h3><p>Хотя HTML-код имеет достаточно простую иерархическую структуру, при разрастании объема документа в коде легко запутаться, следовательно, просто и совершить ошибку. Браузеры, несмотря на явно неверный код, в любом случае постараются отобразить веб-страницу. Но поскольку не существует единого регламента о том, как же должен быть показан «кривой» документ, каждый браузер пытается сделать это по-своему. А это в свою очередь приводит к тому, что один и тот же документ может выглядеть по-разному в популярных браузерах. Исправление явных промахов и систематизация кода приводит, как правило, к стабильному результату.</p><p><b>Тенденции</b></p><p>Времена, когда производители браузеров добавляли уникальные возможности в свой продукт вопреки всем стандартам, начинают уходить в прошлое. Каждая новая версия браузера все больше поддерживает спецификации и отображает документы с минимальными ошибками или вообще без них. Разработчики сайтов, также придерживающихся канонов веб-стандартов, таким образом соответствуют современным тенденциям развития веб-технологий.</p><p>Не стоит забывать и об XML (eXtensible Markup Language, расширяемый язык разметки). Этот язык становится стандартом де-факто для хранения данных и обмена информацией между разными приложениями. Синтаксис XML более жесткий, чем HTML и не прощает малейших ошибок. В каком-то смысле XML похож на языки программирования, в которых программа не будет скомпилирована, пока код не отлажен. HTML является первой ступенькой к изучению XML, поэтому приучая себя писать код по всем правилам, будет легче перейти к следующему этапу развития HTML.</p><p><b>Мода на валидацию</b></p><p>Как это не удивительно, но среди веб-разработчиков тоже существует своя мода. Текущая мода — создавать валидные документы и вывешивать специальный значок в виде картинки, что сайт соответствует спецификации HTML. Подобная тенденция затронула даже заказчиков сайтов и при написании технического задания на разработку сайта некоторые из них специально оговаривают, чтобы сайт был выполнен по веб-стандартам.</p><p><b>Косвенные преимущества</b></p><p>Следование стандартам во многом дает множество выгод, которые проявляются в мелочах и становятся заметными при достижении определенной критической массы. В частности, объем кода становится меньше, компактнее и читабельнее. Соответственно, для пользователей повышается скорость загрузки сайта в целом.</p>',

    div3: '<h3>Минусы валидации</h3><p>Сайты, конечно же, делают для того, чтобы их посещали люди. Именно посетители выступают мерилом работы сайта, а их интересует информация и способ ее получения. Пользователь желает, чтобы сайт корректно отображался в его любимом браузере, быстро загружался и содержал те материалы, которые ему нужны. Заметьте, в этом списке нет ничего про код документа и его валидность, посетителей это просто не интересует. Поэтому совершенно невалидный сайт, но выполненный с душой, наполненный интересными материалами привлечет к себе больше посетителей, чем пустой ресурс, но сделанный по всем «правилам».</p><p><b>Браузеры</b></p><p>Разработчики браузеров не всегда следуют спецификации и в некоторых случаях трактуют код не по заданным правилам, а по-своему. В конечном итоге это приводит к тому, что веб-страница, которая правильно (т.е. так, как и задумывали разработчики) отображается в одном браузере, выводится с ошибками в другом. Следование спецификации в подобных случаях, скорее всего, отпугнет пользователей некоторых браузеров.</p><p>Заказчикам сайта, а также их разработчикам подобная ситуация не по нраву, поэтому стоя перед выбором: стандарты или браузер, они в большинстве своем выбирают браузер.</p><p>Получается неутешительная картина — тратить время на отладку кода для соответствия спецификации нет особой нужды. Это время лучше посвятить тому, чтобы документ без проблем работал в разных браузерах — так в основном размышляют веб-разработчики.</p><p><b>Резюме</b></p><p>Так стоит ли проводить валидацию документов и заниматься этим этапом при написании веб-страниц? Безусловно, да. Кому-то она поможет выявить существующие недочеты, другому поможет писать корректный код. Исправлять же ошибки, добиваясь полного соответствия стандартам, или оставить их ради совместимости с разными браузерами — здесь уже каждый решает сам, какие цели он преследует и что для него важнее.</p>',

    next: '<b><a href="#" onclick="quickLink(); HTMLTopicThirteen()">HTML topic 13</a></b> - предыдущая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// CSS
let CSSTopicsEng = {
    topics: '<h3>CSS Basics</h3>*To select a theme, enter the theme ID key, which is indicated next to the theme name.<br><ul><li>Introduction to CSS - <b><a href="#" onclick="quickLink(); CSSTheamOne()">CSS topic 1</a></b></li><br><li>Advantage of styles - <b><a href="#" onclick="quickLink(); CSSTheamTwo()">CSS topic 2</a></b></li><br><li>Ways to add styles to a page - <b><a href="#" onclick="quickLink(); CSSTheamThree()">CSS topic 3</a></b></li><br><li>Media Types - <b><a href="#" onclick="quickLink(); CSSTheamFour()">CSS topic 4</a></b></li><br><li>Basic CSS syntax - <b><a href="#" onclick="quickLink(); CSSTheamFive()">CSS topic 5</a></b></li><br><li>The value of style properties - <b><a href="#" onclick="quickLink(); CSSTheamSix()">CSS topic 6</a></b></li><br><li>Tag Selectors - <b><a href="#" onclick="quickLink(); CSSTheamSeven()">CSS topic 7</a></b></li><br><li>Classes - <b><a href="#" onclick="quickLink(); CSSTheamEight()">CSS topic 8</a></b></li><br><li>Identifiers - <b><a href="#" onclick="quickLink(); CSSTheamNine()">CSS topic 9</a></b></li><br><li>Context selectors - <b><a href="#" onclick="quickLink(); CSSTheamTen()">CSS topic 10</a></b></li><br><li>Child selectors - <b><a href="#" onclick="quickLink(); CSSTheamEleven()">CSS topic 11</a></b></li><br><li>Pseudo-classes - <b><a href="#" onclick="quickLink(); CSSTheamTwelve()">CSS topic 12</a></b></li><br><li>Pseudo-elements - <b><a href="#" onclick="quickLink(); CSSTheamThirteen()">CSS topic 13</a></b></li><br><li>Inheritance - <b><a href="#" onclick="quickLink(); CSSTheamFourteen()">CSS topic 14</a></b></li></ul>',
    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen',
}

let CSSTopicsRus = {
    topics: '<h3>Основы CSS</h3>*Для того, чтобы выбрать тему, введите ключ-идентификатор темы, который указан рядом с названием темы.<br><ul><li>Введение в CSS - <b><a href="#" onclick="quickLink(); CSSTheamOne()">CSS topic 1</a></b></li><br><li>Преимущество стилей - <b><a href="#" onclick="quickLink(); CSSTheamTwo()">CSS topic 2</a></b></li><br><li>Способы добавления стилей на страницу - <b><a href="#" onclick="quickLink(); CSSTheamThree()">CSS topic 3</a></b></li><br><li>Типы носителей - <b><a href="#" onclick="quickLink(); CSSTheamFour()">CSS topic 4</a></b></li><br><li>Базовый синтаксис CSS - <b><a href="#" onclick="quickLink(); CSSTheamFive()">CSS topic 5</a></b></li><br><li>Значение стилевых свойств - <b><a href="#" onclick="quickLink(); CSSTheamSix()">CSS topic 6</a></b></li><br><li>Селекторы тегов - <b><a href="#" onclick="quickLink(); CSSTheamSeven()">CSS topic 7</a></b></li><br><li>Классы - <b><a href="#" onclick="quickLink(); CSSTheamEight()">CSS topic 8</a></b></li><br><li>Идентификаторы - <b><a href="#" onclick="quickLink(); CSSTheamNine()">CSS topic 9</a></b></li><br><li>Контекстные селекторы - <b><a href="#" onclick="quickLink(); CSSTheamTen()">CSS topic 10</a></b></li><br><li>Дочерние селекторы - <b><a href="#" onclick="quickLink(); CSSTheamEleven()">CSS topic 11</a></b></li><br><li>Псевдоклассы - <b><a href="#" onclick="quickLink(); CSSTheamTwelve()">CSS topic 12</a></b></li><br><li>Псевдоэлементы - <b><a href="#" onclick="quickLink(); CSSTheamThirteen()">CSS topic 13</a></b></li><br><li>Наследование - <b><a href="#" onclick="quickLink(); CSSTheamFourteen()">CSS topic 14</a></b></li></ul>',
    next: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран',
}
// Первая тема CSS.
let CSSTheameOneEng = {
    div1: '<h3>Introduction to CSS</h3><p>After getting acquainted with HTML developers, sites are divided into two main categories. One part believes that with the help of HTML code on the site, you can create everything or almost everything, while the other understands that, in general, markup tools are not enough to design web documents. Indeed, an HTML file is the first step in the process of teaching users about websites. The next step is to use styles or CSS (cascading style sheets).</p><p>Styles are a set of parameters that control the appearance and position of web page elements. To make it clear what we are talking about, let\'s look at the drawing:</p>',

    div2_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSTheme_1.png" alt="image"></div><div class="div_text_image"><p>A web page created in HTML only</p></div>',

    div3: '<p>This is an ordinary web page, designed without any frills. The same document, but with the addition of styles, takes on a completely different look:</p>',

    div4_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSTheme_2.png" alt="image"></div><div class="div_text_image"><p>A web page created in HTML and CSS</p></div>',

    div5: '<p>The change is dramatic, so let\'s look into the code to understand what the difference is:</p>',

    div6_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtFlexagon&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtFlexagon&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtFlexagon is a paper figure that has three or more sides. At first it seems that this is impossible, but remember the Mobius strip, because it has only one side, unlike a sheet of paper, and, nevertheless, it is real. Flexagon is also real, which is easy to make and glue at home. It looks like a two-sided hexagon, but it is worth bending it in a special way, and we will see the third side. It is easy to make sure that we are dealing with exactly three sides if we paint them in different colors. Bending the flexagon, we will observe all its surfaces in turn.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>The HTML code itself has not undergone any changes and the only addition is the line <b>&ltlink rel="stylesheet" href="style.css"&gt</b>. It refers to an external style description file named <b>style.css</b>. The contents of this file are shown in the example:</p>',

    div8_example: 'body { <br> &nbsp&nbsp font-family: Arial, Verdana,  sans-serif; <i>/* Font family */</i> <br> &nbsp&nbsp font-size: 11pt; <i>/* The size of the main font in points  */</i> <br> &nbsp&nbsp background-color: #f0f0f0; <i>/* Web page background color */</i> <br> &nbsp&nbsp color: #333; <i>/* The color of the main text */</i> <br> } <br> h1 { <br> &nbsp&nbsp color: #a52a2a; <i>/* Header color */</i> <br> &nbsp&nbsp font-size: 24pt; <i>/* Font size in points */</i> <br> &nbsp&nbsp  font-family: Georgia, Times, serif; <i>/* Font family */</i> <br> &nbsp&nbsp font-weight: normal; <i>/* Normal text font  */</i> <br> } <br> p { <br> &nbsp&nbsp text-align: justify; <i>/* Width Alignment */</i> <br> &nbsp&nbsp margin-left: 60px; <i>/* Left margin in pixels */</i> <br> &nbsp&nbsp margin-right: 10px; <i>/* Right margin in pixels */</i> <br> &nbsp&nbsp border-left: 1px solid #999; <i>/* Line parameters on the left */</i> <br> &nbsp&nbsp border-bottom: 1px solid #999; <i>/* Parameters of the bottom line */</i> <br> &nbsp&nbsp padding-left: 10px; <i>/* Indent from the line on the left to the text */</i> <br> &nbsp&nbsp padding-bottom: 10px; <i>/* Indent from the line from the bottom to the text  */</i> <br> }',

    div9: '<p>The <b>style.css</b> file describes all the design parameters of such tags as <b>&ltbody&gt</b>, <b>&lth1&gt</b> and <b>&ltp&gt</b>. Note that the tags themselves in the HTML code are written as usual.</p><p>Since a file with a style can be referenced from any web document, this ultimately leads to a reduction in the amount of repetitive data. And thanks to the separation of code and design, the flexibility of managing the type of document and the speed of work on the site increases.</p><p>CSS is its own language, which coincides with HTML only with some values, for example, the way color is defined.</p>',

    div10: '<h3>Types of styles</h3><p>There are several types of styles that can be applied together to a single document. These are browser style, author style and user style.</p><p><b>Browser Style</b></p><p> The design that is applied by default to the elements of the web page by the browser. This design can be seen in the case of "naked" HTML, when no styles are added to the document. For example, the page title generated by the <b>&ltH1&gt</b> tag is displayed in most browsers in a 24-point serif font.</p><p><b>Author\'s style</b></p><p>The style that the developer adds to the document. The example shows one of the possible ways to connect the author\'s style.</p><p><b>User Style</b></p><p>This is a style that the site user can enable through the browser settings. This style has a higher priority and overrides the original design of the document.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTwo()">CSS topic 2</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamOneRUS = {
    div1: '<h3>Введение в CSS</h3><p>После знакомства с HTML разработчики сайтов разделяются на две основные категории. Одна часть считает, что с помощью HTML на сайте можно создавать всё или практически всё, другая же понимает, что в целом средств разметки недостаточно для оформления веб-документов. Действительно, HTML лишь первый этап в процессе обучения созданию сайтов. Следующим шагом является изучение стилей или CSS (Cascading Style Sheets, каскадные таблицы стилей).</p><p>Стили представляют собой набор параметров, управляющих видом и положением элементов веб-страницы. Чтобы стало понятно, о чем идет речь, посмотрим на рисунок:</p>',

    div2_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSTheme_1.png" alt="image"></div><div class="div_text_image"><p>Веб-страница, созданная только на HTML</p></div>',

    div3: '<p>Это обычная веб-страница, оформленная без всяких изысков. Тот же самый документ, но уже с добавлением стилей приобретает совершенно иной вид:</p>',

    div4_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSTheme_2.png" alt="image"></div><div class="div_text_image"><p>Веб-страница, созданная на HTML и CSS</p></div>',

    div5: '<p>Перемена разительна, поэтому заглянем в код, чтобы понять, в чем же разница:</p>',

    div6_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФлексагон&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtФлексагон&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtФлексагон представляет собой бумажную фигуру, которая имеет три и более стороны. Поначалу кажется, что это невозможно, но вспомните ленту Мёбиуса, она ведь имеет всего одну сторону, в отличие от листа  бумаги, и, тем не менее, реальна. Так же реален и флексагон, который легко сделать и склеить в домашних условиях. Он выглядит как двухсторонний шестиугольник, но стоит согнуть его особым образом, и мы увидим третью сторону. Легко убедиться, что мы имеем дело именно с тремя сторонами, если раскрасить их в разные цвета. Перегибая флексагон, по очереди будем наблюдать все его поверхности.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>Сам код HTML никаких изменений не претерпел и единственное добавление — это строка <b>&ltlink rel="stylesheet" href="style.css"&gt</b>. Она ссылается на внешний файл с описанием стилей под именем <b>style.css</b>. Содержимое этого файла показано в примере:</p>',

    div8_example: 'body { <br> &nbsp&nbsp font-family: Arial, Verdana,  sans-serif; <i>/* Семейство шрифтов */</i> <br> &nbsp&nbsp font-size: 11pt; <i>/* Размер основного шрифта в пунктах  */</i> <br> &nbsp&nbsp background-color: #f0f0f0; <i>/* Цвет фона веб-страницы */</i> <br> &nbsp&nbsp color: #333; <i>/* Цвет основного текста */</i> <br> } <br> h1 { <br> &nbsp&nbsp color: #a52a2a; <i>/* Цвет заголовка */</i> <br> &nbsp&nbsp font-size: 24pt; <i>/* Размер шрифта в пунктах */</i> <br> &nbsp&nbsp  font-family: Georgia, Times, serif; <i>/* Семейство шрифтов */</i> <br> &nbsp&nbsp font-weight: normal; <i>/* Нормальное начертание текста  */</i> <br> } <br> p { <br> &nbsp&nbsp text-align: justify; <i>/* Выравнивание по ширине */</i> <br> &nbsp&nbsp margin-left: 60px; <i>/* Отступ слева в пикселах */</i> <br> &nbsp&nbsp margin-right: 10px; <i>/* Отступ справа в пикселах */</i> <br> &nbsp&nbsp border-left: 1px solid #999; <i>/* Параметры линии слева */</i> <br> &nbsp&nbsp border-bottom: 1px solid #999; <i>/* Параметры линии снизу */</i> <br> &nbsp&nbsp padding-left: 10px; <i>/* Отступ от линии слева до текста  */</i> <br> &nbsp&nbsp padding-bottom: 10px; <i>/* Отступ от линии снизу до текста  */</i> <br> }',

    div9: '<p>В файле <b>style.css</b> как раз и описаны все параметры оформления таких тегов как <b>&ltbody&gt</b>, <b>&lth1&gt</b> и <b>&ltp&gt</b>. Заметьте, что сами теги в коде HTML пишутся как обычно.</p><p>Поскольку на файл со стилем можно ссылаться из любого веб-документа, это приводит в итоге к сокращению объёма повторяющихся данных. А благодаря разделению кода и оформления повышается гибкость управления видом документа и скорость работы над сайтом.</p><p>CSS представляет собой свой собственный язык, который совпадает с HTML только некоторыми значениями, например способом определения цвета.</p>',

    div10: '<h3>Типы стилей</h3><p>Различают несколько типов стилей, которые могут совместно применяться к одному документу. Это стиль браузера, стиль автора и стиль пользователя.</p><p><b>Стиль браузера</b></p><p> Оформление, которое по умолчанию применяется к элементам веб-страницы браузером. Это оформление можно увидеть в случае «голого» HTML, когда к документу не добавляется никаких стилей. Например, заголовок страницы, формируемый тегом <b>&ltH1&gt</b>, в большинстве браузеров выводится шрифтом с засечками размером 24 пункта.</p><p><b>Стиль автора</b></p><p>Стиль, который добавляет к документу его разработчик. В примере показан один из возможных способов подключения авторского стиля.</p><p><b>Стиль пользователя</b></p><p>Это стиль, который может включить пользователь сайта через настройки браузера. Такой стиль имеет более высокий приоритет и переопределяет исходное оформление документа.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTwo()">CSS topic 2</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Вторая тема CSS.
let CSSTheamTwoEng = {
    div1: '<h3>Advantages of styles</h3><p>Styles are a convenient, practical and effective tool for laying out web pages and designing text, links, images and other elements. Despite the obvious advantages of using styles, let\'s consider all the advantages of CSS, including those invisible at first glance.</p><p><b>Distinguishing between code and design</b></p><p>The idea of keeping HTML code free of design elements like setting color, font size, and other parameters is as old as the world. Ideally, a web page should contain only logical formatting tags, and the appearance of elements is specified through styles. With such a division, work on the design and layout of the site can be carried out in parallel.</p><p><b>Different designs for different devices</b></p><p>Using styles, you can define the appearance of a web page for different output devices: monitor, printer, smartphone, tablet, etc. For example, display a page in one design on the monitor screen, and in another when printing it. This feature also allows you to hide or show some document elements when displayed on different devices.</p><p><b>Enhanced methods for designing elements compared to HTML</b></p><p>Unlike HTML, styles have much more options for designing elements of web pages. With simple tools you can change the background color of an element, add a frame, set the font, determine the size, position and much more.</p><p><b>Speed up site loading</b></p><p>When storing styles in a separate file, it is cached and when accessed again, it is retrieved from the browser cache. Due to caching and the fact that styles are stored in a separate file, the code of web pages is reduced and the loading time of documents is reduced.</p><p><b>Unified style for multiple documents</b></p><p>A website is not just a set of interconnected documents, but also the same arrangement of main blocks and their appearance. The use of a consistent design for headings, body text and other elements creates continuity between pages and makes it easier for users to work with the site and perceive it as a whole. For developers, the use of styles greatly simplifies the design process.</p><p><b>Centralized storage</b></p><p>Styles are usually stored in one or more special files, a link to which is indicated in all site documents. Thanks to this, it is convenient to edit the style in one place, while the design of elements automatically changes on all pages that are associated with the specified file. Instead of modifying dozens of HTML files, you just need to edit one style file and the design of the necessary documents will immediately change.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamOne()">CSS topic 1</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamThree()">JS topic 3</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamTwoRus = {
    div1: '<h3>Преимущества стилей</h3><p>Стили являются удобным, практичным и эффективным инструментом при вёрстке веб-страниц и оформления текста, ссылок, изображений и других элементов. Несмотря на явные плюсы применения стилей, рассмотрим все преимущества CSS, в том числе и незаметные на первый взгляд.</p><p><b>Разграничение кода и оформления</b></p><p>Идея о том, чтобы код HTML был свободен от элементов оформления вроде установки цвета, размера шрифта и других параметров, стара как мир. В идеале, веб-страница должна содержать только теги логического форматирования, а вид элементов задаётся через стили. При подобном разделении работа над дизайном и версткой сайта может вестись параллельно.</p><p><b>Разное оформление для разных устройств</b></p><p>С помощью стилей можно определить вид веб-страницы для разных устройств вывода: монитора, принтера, смартфона, планшета и др. Например, на экране монитора отображать страницу в одном оформлении, а при её печати — в другом. Эта возможность также позволяет скрывать или показывать некоторые элементы документа при отображении на разных устройствах.</p><p><b>Расширенные по сравнению с HTML способы оформления элементов</b></p><p>В отличие от HTML стили имеют гораздо больше возможностей по оформлению элементов веб-страниц. Простыми средствами можно изменить цвет фона элемента, добавить рамку, установить шрифт, определить размеры, положение и многое другое.</p><p><b>Ускорение загрузки сайта</b></p><p>При хранении стилей в отдельном файле, он кэшируется и при повторном обращении к нему извлекается из кэша браузера. За счёт кэширования и того, что стили хранятся в отдельном файле, уменьшается код веб-страниц и снижается время загрузки документов.</p><p><b>Единое стилевое оформление множества документов</b></p><p>Сайт это не просто набор связанных между собой документов, но и одинаковое расположение основных блоков, и их вид. Применение единообразного оформления заголовков, основного текста и других элементов создает преемственность между страницами и облегчает пользователям работу с сайтом и его восприятие в целом. Разработчикам же использование стилей существенно упрощает проектирование дизайна.</p><p><b>Централизованное хранение</b></p><p>Стили, как правило, хранятся в одном или нескольких специальных файлах, ссылка на которые указывается во всех документах сайта. Благодаря этому удобно править стиль в одном месте, при этом оформление элементов автоматически меняется на всех страницах, которые связаны с указанным файлом. Вместо того чтобы модифицировать десятки HTML-файлов, достаточно отредактировать один файл со стилем и оформление нужных документов сразу же поменяется.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamOne()">CSS topic 1</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamThree()">JS topic 3</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Третья тема CSS.
let CSSTheamThreeEng = {
    div1: '<h3>Ways to add styles to a page</h3><p>There are several ways to add styles to a web page, which differ in their capabilities and purpose. Let\'s look at them in more detail next.</p>',

    div2: '<h4>Related styles</h4><p>When using linked styles, the description of selectors and their values is located in a separate file, usually with the <b>css</b> extension, and the <b>&ltlink&gt</b> tag is used to link the document to this file. This tag is placed in the <b>&lthead&gt</b> container, as shown in the example:</p>',

    div3_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink rel="stylesheet" href="http://www.htmlbook.ru/main.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtStyles&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtHeading&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtТекст&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div4: '<p>The value of the <b>&ltlink&gt</b> tag attribute - <b>rel</b> remains the same regardless of the code, as shown in this example. The <b>href</b> value specifies the path to the CSS file; it can be specified either relative or absolute. Note that this way you can connect a style sheet that is located on another site.</p><p>The contents of the <b>mysite.css</b> file connected via the <b>&ltlink&gt</b> tag are shown in the example:</p>',

    div5_example: 'H1 { <br> &nbsp&nbsp color: #000080; <br> &nbsp&nbsp font-size: 200%; <br> &nbsp&nbsp font-family: Arial, Verdana, sans-serif; <br> &nbsp&nbsp text-align: center; <br> } <br> P { <br> &nbsp&nbsp padding-left: 20px; <br> }',

    div6: '<p>As you can see from this example, the style file does not store any data other than CSS syntax. In turn, the HTML document contains only a link to the file with the style, i.e. in this way the principle of separation of code and site design is fully implemented. Therefore, using linked styles is the most versatile and convenient method of adding style to a site. After all, styles are stored in one file, and in HTML documents only a link to it is indicated.</p>',

    div7: '<h4>Global styles</h4><p>When using global styles, CSS properties are described in the document itself and are located in the head of the web page. In terms of flexibility and capabilities, this method of adding style is inferior to the previous one, but it also allows you to store styles in one place, in this case right on the same page using the <b>&ltstyle&gt</b> container, as shown in the example:</p>',

    div8_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtGlobal styles&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-size: 120%; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Verdana, Arial, Helvetica, sans-serif;  <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: #333366; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br>  &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtHello, world!&lt/h1&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSThemeThree_1.png" alt="image"></div><div class="div_text_image"><p>Global styles</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTwo()">CSS topic 2</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamFour()">JS topic 4</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamThreeRus = {
    div1: '<h3>Способы добавления стилей на страницу</h3><p>Для добавления стилей на веб-страницу существует несколько способов, которые различаются своими возможностями и назначением. Далее рассмотрим их подробнее.</p>',

    div2: '<h4>Связанные стили</h4><p>При использовании связанных стилей описание селекторов и их значений располагается в отдельном файле, как правило, с расширением <b>css</b>, а для связывания документа с этим файлом применяется тег <b>&ltlink&gt</b>. Данный тег помещается в контейнер <b>&lthead&gt</b>, как показано в примере:</p>',

    div3_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink rel="stylesheet" href="http://www.htmlbook.ru/main.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСтили&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtТекст&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div4: '<p>Значение атрибута тега <b>&ltlink&gt</b> — <b>rel</b> остаётся неизменным независимо от кода, как приведено в данном примере. Значение <b>href</b> задаёт путь к CSS-файлу, он может быть задан как относительно, так и абсолютно. Заметьте, что таким образом можно подключать таблицу стилей, которая находится на другом сайте.</p><p>Содержимое файла <b>mysite.css</b> подключаемого посредством тега <b>&ltlink&gt</b> приведено в примере:</p>',

    div5_example: 'H1 { <br> &nbsp&nbsp color: #000080; <br> &nbsp&nbsp font-size: 200%; <br> &nbsp&nbsp font-family: Arial, Verdana, sans-serif; <br> &nbsp&nbsp text-align: center; <br> } <br> P { <br> &nbsp&nbsp padding-left: 20px; <br> }',

    div6: '<p>Как видно из данного примера, файл со стилем не хранит никаких данных, кроме синтаксиса CSS. В свою очередь и HTML-документ содержит только ссылку на файл со стилем, т. е. таким способом в полной мере реализуется принцип разделения кода и оформления сайта. Поэтому использование связанных стилей является наиболее универсальным и удобным методом добавления стиля на сайт. Ведь стили хранятся в одном файле, а в HTML-документах указывается только ссылка на него.</p>',

    div7: '<h4>Глобальные стили</h4><p>При использовании глобальных стилей свойства CSS описываются в самом документе и располагаются в заголовке веб-страницы. По своей гибкости и возможностям этот способ добавления стиля уступает предыдущему, но также позволяет хранить стили в одном месте, в данном случае прямо на той же странице с помощью контейнера <b>&ltstyle&gt</b>, как показано в примере:</p>',

    div8_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtГлобальные стили&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-size: 120%; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Verdana, Arial, Helvetica, sans-serif;  <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: #333366; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br>  &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtHello, world!&lt/h1&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSThemeThree_1.png" alt="image"></div><div class="div_text_image"><p>Глобальные стили</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTwo()">CSS topic 2</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamFour()">JS topic 4</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Четвёртая тема CSS.
let CSSTheamFourEng = {
    div1: '<h3>Media types</h3><p>The widespread development of various platforms and devices forces developers to create special versions of sites for them, which is quite labor-intensive and problematic. At the same time, times and needs change, and creating a website for various devices is an inevitable and necessary part of its development. With this in mind, CSS introduced the concept of a media type, where a style is applied only to a specific device.</p><p>CSS uses the <b>@import</b> and <b>@media</b> commands to specify media types, which can be used to style elements depending on whether the document is being output to the screen or to a printer.</p><p>When importing a style using the <b>@import</b> command, the media type is specified after the file address. In this case, it is possible to specify several types at once, mentioning them separated by commas, as shown in the example:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp @import "/style/main.css" screen; <i> /* Style for displaying the result on the monitor */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp @import "/style/smart.css" print, handheld; <i>/* Style for print and smartphone */</i> <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtImporting styles&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div3: '<p>In this example, two files are imported - <b>main.css</b> is intended to change the appearance of the document when viewing it on a monitor screen, and <b>smart.css</b> - when printing the page and displaying it on a smartphone.</p><p>The <b>@media</b> command allows you to specify the media type for global or linked styles and generally has the following syntax:</p>',

    div4_example: '@media media type 1 { <br> &nbsp&nbsp Style Description for Media Type 1<br>}<br> &nbsp&nbsp @media media type 2 { <br> &nbsp&nbsp Style Description for Media Type 2 <br> }',

    div5: '<p>After the <b>@media</b> keyword there is one or more media types; if there is more than one, they are separated by a comma. This is followed by the obligatory curly braces, inside of which there is the usual description of style rules. The example shows how to set a different style for printing and display on the monitor:</p>',

    div6_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtТипы носителей&lt/title&gt <br> &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp @media screen <i>{ /* Browser Display Style */</i> <br> &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Arial, Verdana, sans-serif; <i>/* Chopped font */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-size: 90%; <i>/* Font size */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: #000080; <i>/* Text color */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp H1 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background: #faf0e6; <i>/* Background color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border: 2px dashed maroon; <i>/* Frame around the title */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv color: #a0522d; </i>/* Text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv padding: 7px; <i>/* Margins around text */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp H2 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv color: #556b2f; <i>/* Text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv margin: 0; <i>/* Removing indents */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp p { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp margin-top: 0.5em; <i>/* Top margin */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp  @media print { <i>/* Print style */</i> <br> &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Times, \'Times New Roman\', serif; <i>/* Serif font */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp H1, H2, P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: black; <i>/* Black text color */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtHow to catch a lion in the desert&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2&gtRandom number method&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtLet\'s divide the desert into a number of elementary rectangles, the size of which coincides with the size of the lion\'s cage. Then we sort through the resulting rectangles, each time choosing a given area randomly. If there is a lion in this area, we will catch it by covering it with a cage.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>In this example, two styles are introduced - one to change the appearance of elements when they are normally displayed in the browser, and the second when the page is printed. At the same time, the appearance of the document for different media can vary greatly, for example, as shown:</p>',

    div8_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSThemeFour_1.png" alt="image"></div><div class="div_text_image"><p>Page to display in browser window</p></div>',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSThemeFour_2.png" alt="image"></div><div class="div_text_image"><p> Printable page</p></div>',

    div10: '<p>You can preview a document that has CSS set to <b>print</b> by printing a specific page or by using a browser preview (File > Preview). Or use a trick and temporarily replace <b>print</b> with <b>screen</b> to display the result in the browser.</p><p>The <b>@media</b> command is used in mainly to generate one style file, which is divided into blocks by device type. Sometimes it makes sense to create several different CSS files - one for printing, one for display in the browser - and connect them to the document as needed. In such a case, you should use the <b>&ltlink&gt</b> tag with the <b>media</b> attribute, the value of which is all the same types.</p>',

    div11: '<p>The example shows how to create links to CSS files that target different media types:</p>',
    
    div12_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink media="print, handheld" rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink media="screen" rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtVarious media&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div13: '<p>This example uses two linked style sheets, one for display in the browser, and one for printing the document and viewing it on a smartphone. Although two different styles are loaded onto the page at the same time, they only apply to certain devices.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamThree()">CSS topic 3</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamFive()">JS topic 5</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamFourRus = {
    div1: '<h3>Типы носителей</h3><p>Широкое развитие различных платформ и устройств заставляет разработчиков делать под них специальные версии сайтов, что достаточно трудоёмко и проблематично. Вместе с тем, времена и потребности меняются, и создание сайта для различных устройств является неизбежным и необходимым звеном его развития. С учетом этого в CSS введено понятие типа носителя, когда стиль применяется только для определённого устройства.</p><p>В CSS для указания типа носителей применяются команды <b>@import</b> и <b>@media</b>, с помощью которых можно определить стиль для элементов в зависимости от того, выводится документ на экран или на принтер.</p><p>При импортировании стиля через команду <b>@import</b> тип носителя указывается после адреса файла. При этом допускается задавать сразу несколько типов, упоминая их через запятую, как показано в примере:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp @import "/style/main.css" screen; <i> /* Стиль для вывода результата на монитор */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp @import "/style/smart.css" print, handheld; <i>/* Стиль для печати и смартфона */</i> <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtИмпорт стилей&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div3: '<p>В данном примере импортируется два файла — <b>main.css</b> предназначен для изменения вида документа при его просмотре на экране монитора, и <b>smart.css</b> — при печати страницы и отображении на смартфоне.</p><p>Команда <b>@media</b> позволяет указать тип носителя для глобальных или связанных стилей и в общем случае имеет следующий синтаксис:</p>',

    div4_example: '@media тип носителя 1 { <br> &nbsp&nbsp Описание стиля для типа носителя 1<br>}<br> &nbsp&nbsp @media тип носителя 2 { <br> &nbsp&nbsp Описание стиля для типа носителя 2 <br> }',

    div5: '<p>После ключевого слова <b>@media</b> идёт один или несколько типов носителя, если их больше одного, то они разделяются между собой запятой. После чего следуют обязательные фигурные скобки, внутри которых идёт обычное описание стилевых правил. В примере показано, как задать разный стиль для печати и отображения на мониторе:</p>',

    div6_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtТипы носителей&lt/title&gt <br> &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp @media screen <i>{ /* Стиль для отображения в браузере */</i> <br> &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Arial, Verdana, sans-serif; <i>/* Рубленый шрифт */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-size: 90%; <i>/* Размер шрифта */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: #000080; <i>/* Цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp H1 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background: #faf0e6; <i>/* Цвет фона */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border: 2px dashed maroon; <i>/* Рамка вокруг заголовка */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv color: #a0522d; </i>/* Цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv padding: 7px; <i>/* Поля вокруг текста */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp H2 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv color: #556b2f; <i>/* Цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbspv margin: 0; <i>/* Убираем отступы */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp p { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp margin-top: 0.5em; <i>/* Отступ сверху */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp  @media print { <i>/* Стиль для печати */</i> <br> &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Times, \'Times New Roman\', serif; <i>/* Шрифт с засечками */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp H1, H2, P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: black; <i>/* Чёрный цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtКак поймать льва в пустыне&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth2&gtМетод случайных чисел&lt/h2&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtРазделим пустыню на ряд элементарных прямоугольников, размер которых совпадает с размером клетки для льва. После чего перебираем полученные прямоугольники, каждый раз выбирая заданную область случайным образом. Если в данной области окажется лев, то мы поймаем его, накрыв клеткой.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>В данном примере вводится два стиля — один для изменения вида элементов при их обычном отображении в браузере, а второй — при выводе страницы на печать. При этом облик документа для разных носителей может сильно различаться между собой, например, как это показано:</p>',

    div8_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSThemeFour_1.png" alt="image"></div><div class="div_text_image"><p>Страница для отображения в окне браузера</p></div>',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/html_example_CSSThemeFour_2.png" alt="image"></div><div class="div_text_image"><p> Страница, предназначенная для печати</p></div>',

    div10: '<p>Просмотреть документ, у которого CSS установлен как тип <b>print</b> можно, если распечатать определенную страницу или воспользовавшись предварительным просмотром в браузере (Файл > Предварительный просмотр). Или пойти на хитрость и временно заменить <b>print</b> на <b>screen</b>, чтобы отобразить итог в браузере.</p><p>Команда <b>@media</b> применяется в основном для формирования одного стилевого файла, который разбит на блоки по типу устройств. Иногда же имеет смысл создать несколько разных CSS-файлов — один для печати, другой для отображения в браузере — и подключать их к документу по мере необходимости. В подобном случае следует воспользоваться тегом <b>&ltlink&gt</b> с атрибутом <b>media</b>, значением которого выступают все те же типы.</p>',

    div11: '<p>В примере показано, как создавать ссылки на CSS-файлы, которые предназначены для разных типов носителей:</p>',
    
    div12_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink media="print, handheld" rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink media="screen" rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtРазные носители&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gt...&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div13: '<p>В данном примере используются две таблицы связанных стилей, одна для отображения в браузере, а вторая — для печати документа и его просмотре на смартфоне. Хотя на страницу загружаются одновременно два разных стиля, применяются они только для определённых устройств.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamThree()">CSS topic 3</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamFive()">JS topic 5</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Пятая тема CSS.
let CSSTheamFiveEng = {
    div1: '<h3>Basic CSS Syntax</h3><p>As noted earlier, style rules are written in their own format, different from HTML. The main concept is a selector - this is a certain name of the style for which formatting parameters are added. The selectors are tags, classes and identifiers. The general recording method is as follows.</p>',

    div2_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeFive_1.png" alt="image"></div><div class="div_text_image"><p>CSS syntax structure</p></div>',

    div3: '<p>First, the name of the selector is written, for example, <b>TABLE</b>, this means that all style parameters will be applied to the <b>&lttable&gt</b> tag, then there are curly braces in which the style property is written, and its value is indicated after the colon. Style properties are separated by semicolons; this symbol can be omitted at the end.</p><p>CSS is not sensitive to case, line breaks, spaces or tabs, so the form of the entry depends on the desire of the developer. So, the example shows two types of design of selectors and their rules:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtHeadings&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp h1 { color: #a6780a; font-weight: normal; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp h2 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: olive; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border-bottom: 2px solid black; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtHeading 1&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtHeading 2&lt/h1&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: 'In this example, the properties of the <b>h1</b> selector are written on one line, and for the <b>h2</b> selector, each property is on a separate line. In the second case, it is easier to find the necessary properties and edit them as necessary, but at the same time the volume of data increases slightly due to the active use of spaces and line breaks. So in any case, the way to design style parameters depends on the developer.',

    div6: '<h3>Rules for applying styles</h3><p>The following are some rules you need to know when describing style.</p><p><b>Entry form</b></p><p>For a selector, you can add each style property and its value separately, as shown in the example:</p>',

    div7_example: 'td { background: olive; }<br>td { color: white; }<br>td { border: 1px solid black; }',

    div8: '<p>However, this notation is not very convenient. You have to repeat the same selector several times, and it\'s easy to get confused in their number. Therefore, write all the properties for each selector together. The specified set of records in this case will look like this:</p>',

    div9_example: 'td { <br> &nbsp&nbsp background: olive; <br> &nbsp&nbsp color: white; <br> &nbsp&nbsp border: 1px solid black; <br> }',

    div10: '<p>This form of recording is more visual and convenient to use.</p><p></b>The value specified in the code below takes precedence</b></p><p>If a selector is first set to a property with one value, and then the same property, but with a different value, then the value that is set in the code below will be used:</p>',

    div11_example: 'p { color: green; }<br>p { color: red; }',

    div12: '<p>ВIn this example, for the p selector, the text color is first set to green and then red. Since the red value is located below, it will ultimately be applied to the text.</p><p>In fact, it is better to avoid such an entry altogether and remove duplicate values. But this can happen accidentally, for example, if you connect different style files that contain the same selectors.</p><p><b>Значения</b></p><p>Each property can only have a value corresponding to its function. For example, for color, which sets the color of the text, numbers cannot be used as values.</p><p><b>Comments</b></p><p>Comments are needed to explain the use of a particular style property, highlight sections, or write your own notes. Comments make it easy to recall the logic and structure of selectors, and increase code legibility. At the same time, adding text increases the volume of documents, which negatively affects their loading time. Therefore, comments are usually used for debugging or training purposes, and when the site is posted on the network, they are erased.</p><p>To mark that text is a comment, use the following construction <b>/* ... */</b>:</p>',

    div13_example: '<i>/* <br> &nbsp&nbsp Style for the site htmlbook.ru <br> &nbsp&nbsp Made for informational purposes <br> */ </i> <br> div { <br> &nbsp&nbsp width: 200px; <i>/* Block width */</i> <br> &nbsp&nbsp margin: 10px; <i>/* Margins around an element */</i> <br> &nbsp&nbsp float: left; <i>/* Right Wrap */</i> <br> }',

    div14: '<p>As this example shows, comments can be added anywhere in a CSS document, and the comment text can also be written in several lines. Nested comments are not allowed.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamFour()">CSS topic 4</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamSix()">JS topic 6</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamFiveRus = {
    div1: '<h3>Базовый синтаксис CSS</h3><p>Как уже было отмечено ранее, стилевые правила записываются в своём формате, отличном от HTML. Основным понятием выступает селектор — это некоторое имя стиля, для которого добавляются параметры форматирования. В качестве селектора выступают теги, классы и идентификаторы. Общий способ записи имеет следующий вид.</p>',

    div2_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeFive_1.png" alt="image"></div><div class="div_text_image"><p>Структура синтаксиса CSS</p></div>',

    div3: '<p>Вначале пишется имя селектора, например, <b>TABLE</b>, это означает, что все стилевые параметры будут применяться к тегу <b>&lttable&gt</b>, затем идут фигурные скобки, в которых записывается стилевое свойство, а его значение указывается после двоеточия. Стилевые свойства разделяются между собой точкой с запятой, в конце этот символ можно опустить.</p><p>CSS не чувствителен к регистру, переносу строк, пробелам и символам табуляции, поэтому форма записи зависит от желания разработчика. Так, в примере показаны две разновидности оформления селекторов и их правил:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtЗаголовки&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp h1 { color: #a6780a; font-weight: normal; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp h2 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: olive; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border-bottom: 2px solid black; <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок 1&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок 2&lt/h1&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: 'В данном примере свойства селектора <b>h1</b> записаны в одну строку, а для селектора <b>h2</b> каждое свойство находится на отдельной строке. Во втором случае легче отыскивать нужные свойства и править их по необходимости, но при этом незначительно возрастает объем данных за счёт активного использования пробелов и переносов строк. Так что в любом случае способ оформления стилевых параметров зависит от разработчика.',

    div6: '<h3>Правила применения стилей</h3><p>Далее приведены некоторые правила, которые необходимо знать при описании стиля.</p><p><b>Форма записи</b></p><p>Для селектора допускается добавлять каждое стилевое свойство и его значение по отдельности, как это показано в примере:</p>',

    div7_example: 'td { background: olive; }<br>td { color: white; }<br>td { border: 1px solid black; }',

    div8: '<p>Однако такая запись не очень удобна. Приходится повторять несколько раз один и тот же селектор, да и легко запутаться в их количестве. Поэтому пишите все свойства для каждого селектора вместе. Указанный набор записей в таком случае получит следующий вид:</p>',

    div9_example: 'td { <br> &nbsp&nbsp background: olive; <br> &nbsp&nbsp color: white; <br> &nbsp&nbsp border: 1px solid black; <br> }',

    div10: '<p>Эта форма записи более наглядная и удобная в использовании.</p><p></b>Имеет приоритет значение, указанное в коде ниже</b></p><p>Если для селектора вначале задаётся свойство с одним значением, а затем то же свойство, но уже с другим значением, то применяться будет то значение, которое в коде установлено ниже:</p>',

    div11_example: 'p { color: green; }<br>p { color: red; }',

    div12: '<p>В данном примере для селектора p цвет текста вначале установлен зелёным, а затем красным. Поскольку значение red расположено ниже, то оно в итоге и будет применяться к тексту.</p><p>На самом деле такой записи лучше вообще избегать и удалять повторяющиеся значения. Но подобное может произойти случайно, например, в случае подключения разных стилевых файлов, в которых содержатся одинаковые селекторы.</p><p><b>Значения</b></p><p>У каждого свойства может быть только соответствующее его функции значение. Например, для color, который устанавливает цвет текста, в качестве значений недопустимо использовать числа.</p><p><b>Комментарии</b></p><p>Комментарии нужны, чтобы делать пояснения по поводу использования того или иного стилевого свойства, выделять разделы или писать свои заметки. Комментарии позволяют легко вспоминать логику и структуру селекторов, и повышают разборчивость кода. Вместе с тем, добавление текста увеличивает объём документов, что отрицательно сказывается на времени их загрузки. Поэтому комментарии обычно применяют в отладочных или учебных целях, а при выкладывании сайта в сеть их стирают.</p><p>Чтобы пометить, что текст является комментарием, применяют следующую конструкцию <b>/* ... */</b>:</p>',

    div13_example: '<i>/* <br> &nbsp&nbsp Стиль для сайта htmlbook.ru <br> &nbsp&nbsp Сделан для ознакомительных целей <br> */ </i> <br> div { <br> &nbsp&nbsp width: 200px; <i>/* Ширина блока */</i> <br> &nbsp&nbsp margin: 10px; <i>/* Поля  вокруг элемента */</i> <br> &nbsp&nbsp float: left; <i>/* Обтекание по правому краю */</i> <br> }',

    div14: '<p>Как следует из данного примера, комментарии можно добавлять в любое место CSS-документа, а также писать текст комментария в несколько строк. Вложенные комментарии недопустимы.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamFour()">CSS topic 4</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamSix()">JS topic 6</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Шестая тема CSS.
let CSSTheamSixEng = {
    div1: '<h3>Style property values</h3><p>The entire variety of style property values can be reduced to a specific type: string, number, percentage, size, color, address or keyword.</p><h4>Strings</h4><p>Any strings must be enclosed in double or single quotes. If you need to leave one or more quotes inside a string, you can combine quote types or add a slash before the quote:</p>',

    div2_example: '\'Hotel "Tourist"\'<br>"Hotel \'Tourist\'"<br>"Hotel \"Tourist\""',

    div3: '<p>In this example, single quotes are used in the first line, and the word “Tourist” is enclosed in double quotes. In the second line, everything is exactly the opposite; in the third line, only double quotes are used, but the internal ones are escaped using a slash.</p><h4>Numbers</h4><p>The value can be an integer containing the numbers 0 to 9 and a decimal fraction in which the integer and decimal parts are separated by a dot:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtNumbers&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp p { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-weight: 600; <i>/* Bold style */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp line-height: 1.2; <i>/* Line spacing */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtExample text&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: '<p>If in a decimal fraction the integer part is equal to zero, then it is allowed not to be written. The entries <b>.7</b> and <b>0.7</b> are equivalent.</p><h4>Interest</h4><p>Percentage notation is usually used in cases where it is necessary to change the value relative to the parent element or when the dimensions depend on external conditions. So, a table width of 100% means that it will adapt to the size of the browser window and change along with the window width:</p>',

    div6_example: 'TABLE { <br> &nbsp&nbsp width: 100%; <i>/* Table width in percentage */</i><br> &nbsp&nbsp background: #f0f0f0; <i>/* Background color */</i> <br> }',

    div7: '<p>Percentages do not have to be a whole number; decimals, such as 56.8%, can be used.</p><h4>Dimensions</h4><p>To set the sizes of various elements, CSS uses absolute and relative units of measurement. Absolute units are independent of the output device, but relative units define the size of an element relative to the value of another size.</p><p><b>Relative units</b></p><p>Relative units are usually used to work with text, or when you need to calculate the percentage relationship between elements:</p><ul><li><b>em</b> - current element font size;</li><li><b>ex</b> - character height x;</li><li><b>px</b> - pixel;</li><li><b>%</b> - percent;</li></ul><p>The <b>em</b> unit is a variable value that depends on the font size of the current element (the size is set via the <b>font-size</b> style property). Each browser has a built-in text size that is used when this size is not explicitly specified. Therefore, initially <b>1em</b> is equal to the default browser font size or the font size of the parent element. The percentage entry is identical to <b>em</b>, in that the values of <b>1em</b> and <b>100%</b> are equal.</p><p>The <b>ex</b> unit is defined as the height of the lowercase "x" character. <b>ex</b> follows the same rules as <b>em</b>, namely, it is bound to the browser\'s default font size or to the font size of its parent element.</p><p><b>Pixel</b> this is an elementary point displayed by a monitor or other similar device, such as a smartphone. The pixel size depends on the resolution of the device and its technical characteristics. The example shows the use of <b>pixels</b> and <b>em</b> to set the font size:</p>',

    div8_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtRelative units&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { font-size: 30px; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { font-size: 1.5em; } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gt30px header&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp  &ltp&gtText size 1.5 em&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeSix_1.png" alt="image"></div><div class="div_text_image"><p>Text size with different units</p></div>',

    div10: '<p><b>Absolute units</b></p><p>Absolute units are used less often than relative ones and usually when working with text. Basic absolute units:</p><ul><li><b>in</b> - inch (1 inch equals 2.54 cm);</li><li><b>cm</b> - centimeter;</li><li><b>mm</b> - millimeter;</li><li><b>pt</b> - point (1 point equals 1/72 inch);</li><li><b>pc</b> - pica (1 pica equals 12 points);</li></ul><p>Perhaps the most common unit is the point, which is used to indicate the font size. Although we are accustomed to measuring everything in millimeters and similar units, the point is perhaps the only value from a non-metric measurement system that is used everywhere in our country. And all thanks to text editors and publishing systems. The example shows the use of points and millimeters:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtRelative units&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { font-size: 24pt; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { margin-left: 30mm; } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gt24 point headline&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp  &ltp&gtShift text to the right by 30 millimeters&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeSix_2.png" alt="image"></div><div class="div_text_image"><p>Text size with different units</p></div>',

    div13: '<p>When setting dimensions, be sure to specify the units of measurement, for example <b>width: 30px</b>. Otherwise, the browser will not be able to show the desired result because it does not understand what size you require. Units are not added only when <b>(margin: 0)</b> is zero.</p>',

    div14: '<h4>Color</h4><p>The color in styles can be specified in three ways: by hexadecimal value, by name, and in RGB format.</p><p><b>By hexadecimal value</b></p><p>Hexadecimal numbers are used to specify colors. The hexadecimal system, unlike the decimal system, is based, as its name suggests, on the number 16. The numbers will be as follows: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C , D, E, F. Numbers from 10 to 15 are replaced by Latin letters. Numbers greater than 15 in the hexadecimal system are formed by combining two numbers into one. For example, the number 255 in decimal corresponds to the number FF in hexadecimal. To avoid confusion in determining the number system, a hash symbol # is placed before the hexadecimal number, for example #666999. Each of the three colors - red, green and blue - can take values from 00 to FF. Thus, the color symbol is divided into three components #rrggbb, where the first two symbols indicate the red component of the color, the middle two - green, and the last two - blue. It is allowed to use a shortened form like #rgb, where each character should be doubled (#rrggbb). For example, the entry #fe0 is regarded as #ffee00.</p><p><b>By name</b></p><p>Browsers support some colors by their name.</p><p><b>Using RGB</b></p><p>You can define color using the red, green, and blue values in decimal terms. The value of each of the three colors can range from 0 to 255. You can also set the color as a percentage. First, the rgb keyword is indicated, and then the color components are indicated in parentheses, separated by commas, for example <b>rgb(255, 0, 0)</b> or <b>rgb(100%, 20%, 20%)</b>.</p><p>The example shows different ways to set the colors of web page elements:</p>',

    div15_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtColors&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background-color: #3366CC; <i>/* Web page background color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background-color: RGB(249, 201, 16); <i>/* Header background color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background-color: maroon; <i>/* Background color under paragraph text */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: white; <i>/* Text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtLorem ipsum dolor sit amet&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp  &ltp&gtLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div16_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeSix_3.png" alt="image"></div><div class="div_text_image"><p>Colors on a web page</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamFive()">CSS topic 5</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamSeven()">JS topic 7</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamSixRus = {
    div1: '<h3>Значения стилевых свойств</h3><p>Всё многообразие значений стилевых свойств может быть сведено к определённому типу: строка, число, проценты, размер, цвет, адрес или ключевое слово.</p><h4>Строки</h4><p>Любые строки необходимо брать в двойные или одинарные кавычки. Если внутри строки требуется оставить одну или несколько кавычек, то можно комбинировать типы кавычек или добавить перед кавычкой слэш:</p>',

    div2_example: '\'Гостиница "Турист"\'<br>"Гостиница \'Турист\'"<br>"Гостиница \"Турист\""',

    div3: '<p>В данном примере в первой строке применяются одинарные кавычки, а слово «Турист» взято в двойные кавычки. Во второй строке всё с точностью до наоборот, в третьей же строке используются только двойные кавычки, но внутренние экранированы с помощью слэша.</p><h4>Числа</h4><p>Значением может выступать целое число, содержащее цифры от 0 до 9 и десятичная дробь, в которой целая и десятичная часть разделяются точкой:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtЧисла&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp p { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-weight: 600; <i>/* Жирное начертание */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp line-height: 1.2; <i>/* Межстрочный интервал */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtПример текста&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: '<p>Если в десятичной дроби целая часть равна нулю, то её разрешается не писать. Запись <b>.7</b> и <b>0.7</b> равнозначна.</p><h4>Проценты</h4><p>Процентная запись обычно применяется в тех случаях, когда надо изменить значение относительно родительского элемента или когда размеры зависят от внешних условий. Так, ширина таблицы 100% означает, что она будет подстраиваться под размеры окна браузера и меняться вместе с шириной окна:</p>',

    div6_example: 'TABLE { <br> &nbsp&nbsp width: 100%; <i>/* Ширина таблицы в процентах */</i><br> &nbsp&nbsp background: #f0f0f0; <i>/* Цвет фона */</i> <br> }',

    div7: '<p>Проценты не обязательно должны быть целым числом, допускается использовать десятичные дроби, вроде значения 56.8%.</p><h4>Размеры</h4><p>Для задания размеров различных элементов, в CSS используются абсолютные и относительные единицы измерения. Абсолютные единицы не зависят от устройства вывода, а относительные единицы определяют размер элемента относительно значения другого размера.</p><p><b>Относительные единицы</b></p><p>Относительные единицы обычно используют для работы с текстом, либо когда надо вычислить процентное соотношение между элементами:</p><ul><li><b>em</b> - размер шрифта текущего элемента;</li><li><b>ex</b> - высота символа x;</li><li><b>px</b> - пиксел;</li><li><b>%</b> - процент;</li></ul><p>Единица <b>em</b> это изменяемое значение, которое зависит от размера шрифта текущего элемента (размер устанавливается через стилевое свойство <b>font-size</b>). В каждом браузере заложен размер текста, применяемый в том случае, когда этот размер явно не задан. Поэтому изначально <b>1em</b> равен размеру шрифта, заданного в браузере по умолчанию или размеру шрифта родительского элемента. Процентная запись идентична <b>em</b>, в том смысле, что значения <b>1em</b> и <b>100%</b> равны.</p><p>Единица <b>ex</b> определяется как высота символа «x» в нижнем регистре. На <b>ex</b> распространяются те же правила, что и для <b>em</b>, а именно, он привязан к размеру шрифта, заданного в браузере по умолчанию, или к размеру шрифта родительского элемента.</p><p><b>Пиксел</b> это элементарная точка, отображаемая монитором или другим подобным устройством, например, смартфоном. Размер пиксела зависит от разрешения устройства и его технических характеристик. В примере показано применение <b>пикселов</b> и <b>em</b> для задания размера шрифта:</p>',

    div8_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtОтносительные единицы&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { font-size: 30px; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { font-size: 1.5em; } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок размером 30 пикселов&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp  &ltp&gtРазмер текста 1.5 em&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeSix_1.png" alt="image"></div><div class="div_text_image"><p>Размер текста при различных единицах </p></div>',

    div10: '<p><b>Абсолютные единицы</b></p><p>Абсолютные единицы применяются реже, чем относительные и обычно при работе с текстом. Основные абсолютные единицы:</p><ul><li><b>in</b> - дюйм (1 дюйм равен 2,54 см);</li><li><b>cm</b> - сантиметр;</li><li><b>mm</b> - миллиметр;</li><li><b>pt</b> - пункт (1 пункт равен 1/72 дюйма);</li><li><b>pc</b> - пика (1 пика равна 12 пунктам);</li></ul><p>Самой, пожалуй, распространенной единицей является пункт, который используется для указания размера шрифта. Хотя мы привыкли измерять все в миллиметрах и подобных единицах, пункт, пожалуй, единственная величина из не метрической системы измерения, которая используется у нас повсеместно. И все благодаря текстовым редакторам и издательским системам. В примере показано использование пунктов и миллиметров:</p>',

    div11_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtОтносительные единицы&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { font-size: 24pt; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { margin-left: 30mm; } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtЗаголовок размером 24 пункта&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp  &ltp&gtСдвиг текста вправо на 30 миллиметров&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeSix_2.png" alt="image"></div><div class="div_text_image"><p>Размер текста при различных единицах</p></div>',

    div13: '<p>При установке размеров обязательно указывайте единицы измерения, например <b>width: 30px</b>. В противном случае браузер не сможет показать желаемый результат, поскольку не понимает, какой размер вам требуется. Единицы не добавляются только при нулевом значении <b>(margin: 0)</b>.</p>',

    div14: '<h4>Цвет</h4><p>Цвет в стилях можно задавать тремя способами: по шестнадцатеричному значению, по названию и в формате RGB.</p><p><b>По шестнадцатеричному значению</b></p><p>Для задания цветов используются числа в шестнадцатеричном коде. Шестнадцатеричная система, в отличие от десятичной системы, базируется, как следует из ее названия, на числе 16. Цифры будут следующие: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. Цифры от 10 до 15 заменены латинскими буквами. Числа больше 15 в шестнадцатеричной системе образуются объединением двух чисел в одно. Например, числу 255 в десятичной системе соответствует число FF в шестнадцатеричной системе. Чтобы не возникало путаницы в определении системы счисления, перед шестнадцатеричным числом ставят символ решетки #, например #666999. Каждый из трех цветов — красный, зеленый и синий — может принимать значения от 00 до FF. Таким образом, обозначение цвета разбивается на три составляющие #rrggbb, где первые два символа отмечают красную компоненту цвета, два средних — зелёную, а два последних — синюю. Допускается использовать сокращенную форму вида #rgb, где каждый символ следует удваивать (#rrggbb). К примеру, запись #fe0 расценивается как #ffee00.</p><p><b>По названию</b></p><p>Браузеры поддерживают некоторые цвета по их названию.</p><p><b>С помощью RGB</b></p><p>Можно определить цвет, используя значения красной, зелёной и синей составляющей в десятичном исчислении. Значение каждого из трех цветов может принимать значения от 0 до 255. Также можно задавать цвет в процентном отношении. Вначале указывается ключевое слово rgb, а затем в скобках, через запятую указываются компоненты цвета, например <b>rgb(255, 0, 0)</b> или <b>rgb(100%, 20%, 20%)</b>.</p><p>В примере представлены различные способы задания цветов элементов веб-страниц:</p>',

    div15_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtЦвета&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background-color: #3366CC; <i>/* Цвет фона веб-страницы */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp H1 { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background-color: RGB(249, 201, 16); <i>/* Цвет фона под заголовком */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background-color: maroon; <i>/* Цвет фона под текстом абзаца */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: white; <i>/* Цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &lth1&gtLorem ipsum dolor sit amet&lt/h1&gt <br> &nbsp&nbsp &nbsp&nbsp  &ltp&gtLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div16_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeSix_3.png" alt="image"></div><div class="div_text_image"><p>Цвета на веб-странице</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamFive()">CSS topic 5</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamSeven()">JS topic 7</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Седьмая тема CSS.
let CSSTheamSevenEng = {
    div1: '<h3>Tag selectors</h3><p>The selector can be any HTML tag for which formatting rules are defined, such as color, background, size, etc. The rules are specified in the following form.</p>',

    div2_example: 'Тег { property1: value; property2: value; ... }',

    div3: '<p>First, indicate the name of the tag whose design will be redefined; uppercase or lowercase characters do not matter. The style property is written inside the curly braces, and its value is written after the colon. A set of properties is separated by a semicolon and can be located either on one line or on several:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtTag selectors&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp text-align: justify; <i>/* Justification */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: green; <i>/* Green text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtA more effective way to catch a lion in the desert is the golden ratio method. When using it, the desert is divided into two unequal parts, the size of which is subject to the rule of the golden ratio.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: '<p>This example changes the color and alignment of paragraph text. The style will only be applied to text that is located inside the <b>&ltp&gt</b> container.</p><p>Please understand that while styling can be applied to any tag, the effect will only be visible on tags that directly appear within the <b>&ltbody&gt</b> container.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamSix()">CSS topic 6</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamEight()">JS topic 8</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamSevenRus = {
    div1: '<h3>Селекторы тегов</h3><p>В качестве селектора может выступать любой тег HTML, для которого определяются правила форматирования, такие как: цвет, фон, размер и т. д. Правила задаются в следующем виде.</p>',

    div2_example: 'Тег { свойство1: значение; свойство2: значение; ... }',

    div3: '<p>Вначале указывается имя тега, оформление которого будет переопределено, заглавными или строчными символами не имеет значения. Внутри фигурных скобок пишется стилевое свойство, а после двоеточия — его значение. Набор свойств разделяется между собой точкой с запятой и может располагаться как в одну строку, так и в несколько:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtСелекторы тегов&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp text-align: justify; <i>/* Выравнивание по ширине */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: green; <i>/* Зеленый цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtБолее эффективным способом ловли льва в пустыне является метод золотого сечения. При его использовании пустыня делится на две неравные части, размер которых подчиняется правилу золотого сечения.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: '<p>В данном примере изменяется цвет и выравнивание текста абзаца. Стиль будет применяться только к тексту, который располагается внутри контейнера <b>&ltp&gt</b>.</p><p>Следует понимать, что хотя стиль можно применить к любому тегу, результат будет заметен только для тегов, которые непосредственно отображаются в контейнере <b>&ltbody&gt</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamSix()">CSS topic 6</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamEight()">JS topic 8</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Восьмая тема CSS.
let CSSTheamEightEng = {
    div1: '<h3>Classes</h3><p>Classes are used when you need to define a style for an individual element of a web page or set different styles for one tag. When used in conjunction with tags, the syntax for classes is as follows.</p>',

    div2_example: 'Tag.ClassName { property1: value; property2: value; ... }',

    div3: '<p>Inside the style, the desired tag is first written, and then, separated by a dot, the custom class name. Class names must begin with a Latin character and may contain a hyphen (<b>-</b>) and an underscore (<b>_</b>). The use of Russian letters in class names is unacceptable. To indicate in HTML code that a tag is used with a particular class, the <b>class="ClassName"</b> attribute is added to the tag:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtClasses&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <i>/* Regular paragraph */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp text-align: justify; <i>/* Justification */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P.cite { <i>/* Paragraph with class cite */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: navy; <i>/* Text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp margin-left: 20px; <i>/* Left indent */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border-left: 1px solid navy; <i>/* Border to the left of text */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp padding-left: 15px; <i>/* Distance from line to text */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtFluorescent lamps are used for artificial lighting of the room. They are distinguished by high luminous efficiency, long service life, low brightness of the luminous surface, and a spectral composition of the emitted light close to natural, which ensures good color rendition.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp class="cite"&gtTo prevent the display screen from being illuminated by light fluxes, the window openings are equipped with light-diffusing curtains.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEight_1.png" alt="image"></div><div class="div_text_image"><p>Type of text styled using style classes</p></div>',

    div6: '<p>The first paragraph is justified with black text (the browser\'s default color), and the next paragraph, which has a class called <b>cite</b> applied to it, is blue with a line to the left.</p><p>You can also use classes without specifying a tag. The syntax in this case will be as follows:</p>',

    div7_example: ' .ClassName { property1: value; property2: value; ... }',

    div8: '<h4>Using different classes at the same time<h4><p>You can add several classes to any tag at the same time, listing them in the <b>class</b> attribute separated by a space. In this case, the style described in the rules for each class is applied to the element. Since when adding several classes they can contain the same style properties, but with different values, the value is taken from the class, which is described in the code below.</p><p>The example shows the use of different classes to create a tag cloud:</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtTag Cloud&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle type="text/css"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level1 { font-size: 1em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level2 { font-size: 1.2em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level3 { font-size: 1.4em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level4 { font-size: 1.6em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level5 { font-size: 1.8em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level6 { font-size: 2em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp <b>A</b>.tag { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: #468be1; <i>/* Link color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdiv&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/69" class="tag level6"&gtPhotoshop&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/3" class="tag level5"&gtcolor&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/95" class="tag level5"&gtbackground&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/11" class="tag level4"&gtpalette&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/43" class="tag level3"&gtlayers&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/97" class="tag level2"&gtlight&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/44" class="tag level2"&gtpanels&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/16" class="tag level1"&gtline&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/33" class="tag level1"&gtrectangle&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/14" class="tag level1"&gtpixel&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/27" class="tag level1"&gtgradient&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/div&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEight_2.png" alt="image"></div><div class="div_text_image"><p>Tag Cloud</p></div>',

    div11: '<p>Styles can also use a notation like <b>.layer1.layer2</b>, where <b>layer1</b> and <b>layer2</b> are class names. The style is applied only to elements that have both the <b>layer1</b> and <b>layer2</b> classes specified.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamSeven()">CSS topic 7</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamNine()">JS topic 9</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamEightRus = {
    div1: '<h3>Классы</h3><p>Классы применяют, когда необходимо определить стиль для индивидуального элемента веб-страницы или задать разные стили для одного тега. При использовании совместно с тегами синтаксис для классов будет следующий.</p>',

    div2_example: 'Тег.Имя класса { свойство1: значение; свойство2: значение; ... }',

    div3: '<p>Внутри стиля вначале пишется желаемый тег, а затем, через точку пользовательское имя класса. Имена классов должны начинаться с латинского символа и могут содержать в себе символ дефиса (<b>-</b>) и подчеркивания (<b>_</b>). Использование русских букв в именах классов недопустимо. Чтобы указать в коде HTML, что тег используется с определённым классом, к тегу добавляется атрибут <b>class="Имя класса"</b>:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtКлассы&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <i>/* Обычный абзац */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp text-align: justify; <i>/* Выравнивание по ширине */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P.cite { <i>/* Абзац с классом cite */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: navy; <i>/* Цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp margin-left: 20px; <i>/* Отступ слева */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border-left: 1px solid navy; <i>/* Граница слева от текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp padding-left: 15px; <i>/* Расстояние от линии до текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtДля искусственного освещения помещения применяются люминесцентные лампы. Они отличаются высокой световой отдачей, продолжительным сроком службы, малой яркостью светящейся поверхности, близким к естественному спектральным составом излучаемого света, что обеспечивает хорошую цветопередачу.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp class="cite"&gtДля исключения засветки экрана дисплея световыми потоками оконные проемы снабжены светорассеивающими шторами.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEight_1.png" alt="image"></div><div class="div_text_image"><p>Вид текста, оформленного с помощью стилевых классов</p></div>',

    div6: '<p>Первый абзац выровнен по ширине с текстом чёрного цвета (этот цвет задаётся браузером по умолчанию), а следующий, к которому применен класс с именем <b>cite</b> — отображается синим цветом и с линией слева.</p><p>Можно, также, использовать классы и без указания тега. Синтаксис в этом случае будет следующий:</p>',

    div7_example: ' .Имя класса { свойство1: значение; свойство2: значение; ... }',

    div8: '<h4>Одновременное использование разных классов<h4><p>К любому тегу одновременно можно добавить несколько классов, перечисляя их в атрибуте <b>class</b> через пробел. В этом случае к элементу применяется стиль, описанный в правилах для каждого класса. Поскольку при добавлении нескольких классов они могут содержать одинаковые стилевые свойства, но с разными значениями, то берётся значение у класса, который описан в коде ниже.</p><p>В примере показано использование разных классов для создания облака тегов:</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtОблако тегов&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle type="text/css"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level1 { font-size: 1em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level2 { font-size: 1.2em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level3 { font-size: 1.4em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level4 { font-size: 1.6em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level5 { font-size: 1.8em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp .level6 { font-size: 2em; } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp <b>A</b>.tag { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: #468be1; <i>/* Цвет ссылок */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdiv&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/69" class="tag level6"&gtPhotoshop&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/3" class="tag level5"&gtцвет&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/95" class="tag level5"&gtфон&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/11" class="tag level4"&gtпалитра&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/43" class="tag level3"&gtслои&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/97" class="tag level2"&gtсвет&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/44" class="tag level2"&gtпанели&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/16" class="tag level1"&gtлиния&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/33" class="tag level1"&gtпрямоугольник&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/14" class="tag level1"&gtпиксел&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &lta href="/term/27" class="tag level1"&gtградиент&lt/a&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/div&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEight_2.png" alt="image"></div><div class="div_text_image"><p>Облако тегов</p></div>',

    div11: '<p>В стилях также допускается использовать запись вида <b>.layer1.layer2</b>, где <b>layer1</b> и <b>layer2</b> представляют собой имена классов. Стиль применяется только для элементов, у которых одновременно заданы классы <b>layer1</b> и <b>layer2</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamSeven()">CSS topic 7</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamNine()">JS topic 9</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Девятая тема CSS.
let CSSTheamNineEng = {
    div1: '<h4>Identifiers</h4><p>An identifier (also called an "ID selector") defines a unique name for an element, which is used to change its style and access it through scripts.</p><p>The syntax for using an identifier is as follows:</p>',

    div2_example: '#Identifier name { property1: value; property2: value; ... }',

    div3: '<p>When describing an identifier, a hash symbol (<b>#</b>) is indicated first, followed by the name of the identifier. It must begin with a Latin character and can contain a hyphen (<b>-</b>) and an underscore (<b>_</b>). Unlike classes, identifiers must be unique, in other words, appear only once in the document code.</p><p>Access to an identifier occurs similarly to classes, but the tag uses the <b>id</b> attribute as a keyword, the value of which is the name of the identifier. The hash symbol is no longer indicated:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtIdentifiers&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp #help { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp position: absolute; <i>/* Absolute positioning */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp left: 160px; <i>/* Element position from left edge */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp top: 50px; <i>/* Position from top edge */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp width: 225px; <i>/* Block width */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp padding: 5px; <i>/* Margins around text */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background: #f0f0f0; <i>/* Background color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdiv id="help"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp This element helps when you are aware of the fact that you have absolutely no idea who can help you and how. It is at this moment that we suggest that no one can help you. <br> &nbsp&nbsp &nbsp&nbsp &lt/div&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeNine_1.png" alt="image"></div><div class="div_text_image"><p>Result of applying the identifier</p></div>',

    div6: '<p>As with classes, identifiers can be applied to a specific tag. The syntax will be as follows:</p>',

    div7_example: 'Tag#Identifier name { property1: value; property2: value; ... }',

    div8: '<p>First, indicate the tag name, then, without spaces, the hash symbol and the name of the identifier. The example shows the use of the identifier in relation to the <b>&ltp&gt:</b> tag.</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtIdentifiers&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: green; <i>/* Green text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-style: italic; <i>/* Italic text style */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp P#opa { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: red; <i>/* Red text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border: 1px solid #666; <i>/* Frame Options */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background: #eee; <i>/* Background color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp padding: 5px; <i>/* Margins around text */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtRegular paragraph&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp id="opa"&gtThe paragraph is unusual&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeNine_2.png" alt="image"></div><div class="div_text_image"><p>Text appearance after applying the style</p></div>',

    div11: '<p>In this example, a style is entered for the <b>&ltp&gt</b> tag and for the same tag, but specifying the identifier <b>opa</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamEight()">CSS topic 8</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamTen()">JS topic 10</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamNineRus = {
    div1: '<h4>Идентификаторы</h4><p>Идентификатор (называемый также «ID селектор») определяет уникальное имя элемента, которое используется для изменения его стиля и обращения к нему через скрипты.</p><p>Синтаксис применения идентификатора следующий:</p>',

    div2_example: '#Имя идентификатора { свойство1: значение; свойство2: значение; ... }',

    div3: '<p>При описании идентификатора вначале указывается символ решётки (<b>#</b>), затем идет имя идентификатора. Оно должно начинаться с латинского символа и может содержать в себе символ дефиса (<b>-</b>) и подчеркивания (<b>_</b>). Использование русских букв в именах идентификатора недопустимо. В отличие от классов идентификаторы должны быть уникальны, иными словами, встречаться в коде документа только один раз.</p><p>Обращение к идентификатору происходит аналогично классам, но в качестве ключевого слова у тега используется атрибут <b>id</b>, значением которого выступает имя идентификатора. Символ решётки при этом уже не указывается:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtИдентификаторы&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp #help { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp position: absolute; <i>/* Абсолютное позиционирование */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp left: 160px; <i>/* Положение элемента от левого края */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp top: 50px; <i>/* Положение от верхнего края */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp width: 225px; <i>/* Ширина блока */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp padding: 5px; <i>/* Поля вокруг текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background: #f0f0f0; <i>/* Цвет фона */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdiv id="help"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp Этот элемент помогает в случае, когда вы находитесь в осознании того факта, что совершенно не понимаете, кто и как вам может помочь. Именно в этот момент мы и подсказываем, что помочь вам никто не сможет. <br> &nbsp&nbsp &nbsp&nbsp &lt/div&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeNine_1.png" alt="image"></div><div class="div_text_image"><p>Результат применения идентификатора </p></div>',

    div6: '<p>Как и при использовании классов, идентификаторы можно применять к конкретному тегу. Синтаксис при этом будет следующий:</p>',

    div7_example: 'Тег#Имя идентификатора { свойство1: значение; свойство2: значение; ... }',

    div8: '<p>Вначале указывается имя тега, затем без пробелов символ решётки и название идентификатора. В примере показано использование идентификатора применительно к тегу <b>&ltp&gt:</b>.</p>',

    div9_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtИдентификаторы&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: green; <i>/* Зеленый цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-style: italic; <i>/* Курсивное начертание текста */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp P#opa { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: red; <i>/* Красный цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp border: 1px solid #666; <i>/* Параметры рамки */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp background: #eee; <i>/* Цвет фона */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp padding: 5px; <i>/* Поля вокруг текста */</i> <br> &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtОбычный параграф&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp id="opa"&gtПараграф необычный&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeNine_2.png" alt="image"></div><div class="div_text_image"><p>Вид текста после применения стиля</p></div>',

    div11: '<p>В данном примере вводится стиль для тега <b>&ltp&gt</b> и для такого же тега, но с указанием идентификатора <b>opa</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamEight()">CSS topic 8</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamTen()">JS topic 10</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Десятая тема CSS.
let CSSTheamTenEng = {
    div1: '<h3>Context selectors</h3><p>When creating a web page, you often have to nest some tags inside others. To ensure that styles for these tags are used correctly, selectors that work only in a certain context will help. For example, set the style for the <b>&ltb&gt</b> tag only when it is located inside the <b>&ltp&gt</b> container. This way you can simultaneously set the style for an individual tag, as well as for a tag that is inside another one.</p><p>A context selector consists of simple selectors separated by a space. So, for a tag selector the syntax would be:</p>',

    div2_example: 'Tag1 Tag2 { ... }',

    div3: '<p>In this case, the style will be applied to <b>Tag2</b> when placed inside <b>Tag1</b>, as shown below:</p>',

    div4_example: '&ltTag1&gt<br>&nbsp&nbsp&ltTag2&gt ... &lt/Tag2&gt<br>&lt/Tag1&gt',

    div5: '<p>The use of context selectors is demonstrated in the example:</p>',

    div6_example: 'P B { <br> &nbsp&nbsp font-family: Times, serif; <i>/* Font family */</i> <br> &nbsp&nbsp color: navy; <i>/* Blue text color */</i> <br> }',

    div7: '<p>This example shows the normal use of the <b>&ltb&gt</b> tag and the same tag when it is nested inside a <b>&ltp&gt</b> paragraph. This changes the color and font of the text, as shown in the image:</p>',

    div8_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTen_1.png" alt="image"></div><div class="div_text_image"><p>Text formatting depending on the nesting of tags</p></div>',

    div9: '<p>Contextual selectors provide greater capabilities when using identifiers and classes. This allows you to set the style only for the element that is located inside a certain class, as shown in the example:</p>',

    div10_example: 'A { <br> &nbsp&nbsp color: green; <i>/* Green text color for all links */</i> <br> } <br> .menu { <br> &nbsp&nbsp padding: 7px; <i>/* Margins around text */</i> <br> &nbsp&nbsp border: 1px solid #333; <i>/* Frame Options */</i> <br> &nbsp&nbsp background: #fc0; <i>/* Background color */</i> <br> } <br> .menu A { <br> &nbsp&nbsp color: navy; <i>/* Dark blue link color */</i> <br> }',

    div11_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTen_2.png" alt="image"></div><div class="div_text_image"><p>Links in different colors</p></div>',

    div12: '<p>This example uses two types of links. The first link, styled using the <b>A</b> selector, will apply to the entire page, while the style of the second link (<b>.menu A</b>) will only apply to links within an element with class <b>menu</b>.</p><p>This approach makes it easy to control the styling of similar elements, such as images and links, that should be styled differently in different areas of the web page.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamNine()">CSS topic 9</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamEleven()">JS topic 11</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamTenRus = {
    div1: '<h3>Контекстные селекторы</h3><p>При создании веб-страницы часто приходится вкладывать одни теги внутрь других. Чтобы стили для этих тегов использовались корректно, помогут селекторы, которые работают только в определённом контексте. Например, задать стиль для тега <b>&ltb&gt</b> только когда он располагается внутри контейнера <b>&ltp&gt</b>. Таким образом можно одновременно установить стиль для отдельного тега, а также для тега, который находится внутри другого.</p><p>Контекстный селектор состоит из простых селекторов разделенных пробелом. Так, для селектора тега синтаксис будет следующий:</p>',

    div2_example: 'Тег1 Тег2 { ... }',

    div3: '<p>В этом случае стиль будет применяться к <b>Тегу2</b> когда он размещается внутри <b>Тега1</b>, как показано ниже:</p>',

    div4_example: '&ltТег1&gt<br>&nbsp&nbsp&ltТег2&gt ... &lt/Тег2&gt<br>&lt/Тег1&gt',

    div5: '<p> Использование контекстных селекторов продемонстрировано в примере:</p>',

    div6_example: 'P B { <br> &nbsp&nbsp font-family: Times, serif; <i>/* Семейство шрифта */</i> <br> &nbsp&nbsp color: navy; <i>/* Синий цвет текста */</i> <br> }',

    div7: '<p>В данном примере показано обычное применение тега <b>&ltb&gt</b> и этого же тега, когда он вложен внутрь абзаца <b>&ltp&gt</b>. При этом меняется цвет и шрифт текста, как показано на изображение:</p>',

    div8_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTen_1.png" alt="image"></div><div class="div_text_image"><p>Оформление текста в зависимости от вложенности тегов</p></div>',

    div9: '<p>Более широкие возможности контекстные селекторы дают при использовании идентификаторов и классов. Это позволяет устанавливать стиль только для того элемента, который располагается внутри определённого класса, как показано в примере:</p>',

    div10_example: 'A { <br> &nbsp&nbsp color: green; <i>/* Зеленый цвет текста для всех ссылок */</i> <br> } <br> .menu { <br> &nbsp&nbsp padding: 7px; <i>/* Поля вокруг текста */</i> <br> &nbsp&nbsp border: 1px solid #333; <i>/* Параметры рамки */</i> <br> &nbsp&nbsp background: #fc0; <i>/* Цвет фона */</i> <br> } <br> .menu A { <br> &nbsp&nbsp color: navy; <i>/* Темно-синий цвет ссылок */</i> <br> }',

    div11_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTen_2.png" alt="image"></div><div class="div_text_image"><p>Ссылки разных цветов</p></div>',

    div12: '<p>В данном примере используется два типа ссылок. Первая ссылка, стиль которой задаётся с помощью селектора <b>A</b>, будет действовать на всей странице, а стиль второй ссылки (<b>.menu A</b>) применяется только к ссылкам внутри элемента с классом <b>menu</b>.</p><p>При таком подходе легко управлять стилем одинаковых элементов, вроде изображений и ссылок, оформление которых должно различаться в разных областях веб-страницы.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamNine()">CSS topic 9</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamEleven()">JS topic 11</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Одиннадцатая тема CSS.
let CSSTheamElevenEng = {
    div1: '<h3>Child selectors</h3><p>A child element is an element that is directly located inside a parent element. To better understand the relationships between document elements, let’s look at a little code:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLorem ipsum&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdiv class="main"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltem&gtLorem ipsum dolor sit amet&lt/em&gt, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltstrong&gt&ltem&gtUt wisis enim ad minim veniam&lt/em&gt&lt/strong&gt, quis nostrud exerci tution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/div&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div3: '<p>In this example, several containers are used, which are located one inside the other in the code. This can be seen more clearly in the tree of elements, which is the name given to the structure of relationships between document tags:</p>',

    div4_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_1.png" alt="image"></div><div class="div_text_image"><p>Example element tree</p></div>',

    div5: '<p>The image conveniently shows the nesting of elements and their hierarchy. Here, the child element of the <b>&ltdiv&gt</b> tag is the <b>&ltp&gt</b> tag. However, the <b>&ltstrong&gt</b> tag is not a child of the <b>&ltdiv&gt</b> tag, since it is located in the <b>&ltp&gt</b> container.</p><p>Let\'s return now to selectors. A child selector is one that is located directly inside the parent element in the element tree. The syntax for using such selectors is as follows:</p>',

    div6_example: 'Selector 1 > Selector 2 { Description of style rules }',

    div7: '<p>The style is applied to <b>Selector 2</b>, but only if it is a child of <b>Selector 1</b>.</p><p>Referring to the example again, the style of the form <b>P > EM { color: red }</b> will be set for the first paragraph of the document, since the <b>&ltem&gt</b> tag is inside the <b>&ltp&gt</b> container, and will not produce any effect for second paragraph. And all because the <b>&ltem&gt</b> tag in the second paragraph is located in the <b>&ltstrong&gt</b> container, so the nesting condition is violated.</p><p>In their logic, child selectors are similar to context selectors. The difference between them is as follows. A child selector is only styled if it is a direct child, that is, directly inside the parent element. For a context selector, any level of nesting is allowed. To make it clear what we are talking about, let’s look at the following code:</p>',

    div8_example: 'DIV I { <i>/* Context selector */</i> <br> &nbsp&nbsp color: green; <i>/* Green text color */</i> <br> } <br> P > I { <i>/* Child selector */</i> <br> &nbsp&nbsp color: red; <i>/* Red text color */</i> <br> }',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_2.png" alt="image"></div><div class="div_text_image"><p>Text color set using a child selector</p></div>',

    div10: '<p>The <b>&lti&gt</b> tag in the example is subject to two rules simultaneously: a context selector (the <b>&lti&gt</b> tag is located inside <b>&ltdiv&gt</b>) and a child selector (the <b>&lti&gt</b> tag is a child of <b>&ltp&gt</b>). In this case, the rules are equivalent, since all the conditions for them are met and do not contradict each other. In such cases, the style shown in the code below is applied, so the italic text appears in red. If you reverse the rules and put <b>DIV I</b> below, the text color will change from red to green.</p><p>Note that in most cases you can avoid adding child selectors by replacing them with context selectors. However, the use of child selectors expands the ability to control element styles, which ultimately allows you to get the desired result, as well as simple and clear code.</p><p>It is most convenient to use these selectors for elements that have a hierarchical structure - this includes, for example, tables and various lists. The example shows how to change the appearance of a list using styles. By nesting one list into another we get a type of menu. In this case, the headings are located horizontally, and the set of links is located vertically under the headings:</p>',

    div11_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_3.png" alt="image"></div><div class="div_text_image"><p>List as a menu</p></div>',

    div12: '<p>To position text horizontally, the <b>LI</b> style property is added to the <b>LI</b> selector. In order to separate the style of a horizontal and vertical list, child selectors are used:</p>',

    div13_example: 'UL#menu { <br> &nbsp&nbsp margin: 0; padding: 0; <br> } <br> UL#menu > LI { <br> &nbsp&nbsp list-style: none; <br> &nbsp&nbsp  width: 100px; <br> &nbsp&nbsp background: #b3d9d2; <br> &nbsp&nbsp color: #333; <br> &nbsp&nbsp padding: 5px; <br> &nbsp&nbsp font-family: Arial, sans-serif; <br> &nbsp&nbsp font-size: 90%; <br> &nbsp&nbsp font-weight: bold; <br> &nbsp&nbsp float: left; <br> } <br> LI > UL { <br> &nbsp&nbsp list-style: none; <br> &nbsp&nbsp margin: 0; padding: 0; <br> &nbsp&nbsp border-bottom: 1px solid #666; <br> &nbsp&nbsp padding-top: 5px; <br> } <br> LI > A { <br> &nbsp&nbsp display: block; <br> &nbsp&nbsp font-weight: normal; <br> &nbsp&nbsp font-size: 90%; <br> &nbsp&nbsp background: #fff; <br> &nbsp&nbsp border: 1px solid #666; <br> &nbsp&nbsp border-bottom: none; <br> &nbsp&nbsp padding: 5px; <br> }',

    div14_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_4.png" alt="image"></div><div class="div_text_image"><p>List as a menu</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTen()">CSS topic 10</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamTwelve()">JS topic 12</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamElevenRus = {
    div1: '<h3>Дочерние селекторы</h3><p>Дочерним называется элемент, который непосредственно располагается внутри родительского элемента. Чтобы лучше понять отношения между элементами документа, разберём небольшой код:</p>',

    div2_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtLorem ipsum&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltdiv class="main"&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltem&gtLorem ipsum dolor sit amet&lt/em&gt, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &ltp&gt&ltstrong&gt&ltem&gtUt wisis enim ad minim veniam&lt/em&gt&lt/strong&gt, quis nostrud exerci tution ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &lt/div&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div3: '<p>В данном примере применяется несколько контейнеров, которые в коде располагаются один в другом. Нагляднее это видно на дереве элементов, так называется структура отношений тегов документа между собой:</p>',

    div4_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_1.png" alt="image"></div><div class="div_text_image"><p>Дерево элементов для примера</p></div>',

    div5: '<p>На изображение в удобном виде представлена вложенность элементов и их иерархия. Здесь дочерним элементом по отношению к тегу <b>&ltdiv&gt</b> выступает тег <b>&ltp&gt</b>. Вместе с тем тег <b>&ltstrong&gt</b> не является дочерним для тега <b>&ltdiv&gt</b>, поскольку он расположен в контейнере <b>&ltp&gt</b>.</p><p>Вернёмся теперь к селекторам. Дочерним селектором считается такой, который в дереве элементов находится прямо внутри родительского элемента. Синтаксис применения таких селекторов следующий:</p>',

    div6_example: 'Селектор 1 > Селектор 2 { Описание правил стиля }',

    div7: '<p>Стиль применяется к <b>Селектору 2</b>, но только в том случае, если он является дочерним для <b>Селектора 1</b>.</p><p>Если снова обратиться к примеру, то стиль вида <b>P > EM { color: red }</b> будет установлен для первого абзаца документа, поскольку тег <b>&ltem&gt</b> находится внутри контейнера <b>&ltp&gt</b>, и не даст никакого результата для второго абзаца. А все из-за того, что тег <b>&ltem&gt</b> во втором абзаце расположен в контейнере <b>&ltstrong&gt</b>, поэтому нарушается условие вложенности.</p><p>По своей логике дочерние селекторы похожи на селекторы контекстные. Разница между ними следующая. Стиль к дочернему селектору применяется только в том случае, когда он является прямым потомком, иными словами, непосредственно располагается внутри родительского элемента. Для контекстного селектора же допустим любой уровень вложенности. Чтобы стало понятно, о чем идет речь, разберём следующий код:</p>',

    div8_example: 'DIV I { <i>/* Контекстный селектор */</i> <br> &nbsp&nbsp color: green; <i>/* Зеленый цвет текста */</i> <br> } <br> P > I { <i>/* Дочерний селектор */</i> <br> &nbsp&nbsp color: red; <i>/* Красный цвет текста */</i> <br> }',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_2.png" alt="image"></div><div class="div_text_image"><p>Цвет текста, заданный с помощью дочернего селектора</p></div>',

    div10: '<p>На тег <b>&lti&gt</b> в примере действуют одновременно два правила: контекстный селектор (тег <b>&lti&gt</b> расположен внутри <b>&ltdiv&gt</b>) и дочерний селектор (тег <b>&lti&gt</b> является дочерним по отношению к <b>&ltp&gt</b>). При этом правила являются равносильными, поскольку все условия для них выполняются и не противоречат друг другу. В подобных случаях применяется стиль, который расположен в коде ниже, поэтому курсивный текст отображается красным цветом. Стоит поменять правила местами и поставить <b>DIV I</b> ниже, как цвет текста изменится с красного на зеленый.</p><p>Заметим, что в большинстве случаев от добавления дочерних селекторов можно отказаться, заменив их контекстными селекторами. Однако использование дочерних селекторов расширяет возможности по управлению стилями элементов, что в итоге позволяет получить нужный результат, а также простой и наглядный код.</p><p>Удобнее всего применять указанные селекторы для элементов, которые обладают иерархической структурой — сюда относятся, например, таблицы и разные списки. В примере показано изменение вида списка с помощью стилей. За счёт вложения одного списка в другой получаем разновидность меню. Заголовки при этом располагаются горизонтально, а набор ссылок — вертикально под заголовками:</p>',

    div11_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_3.png" alt="image"></div><div class="div_text_image"><p>Список в виде меню</p></div>',

    div12: '<p>Для размещения текста по горизонтали к селектору <b>LI</b> добавляется стилевое свойство <b>float</b>. Чтобы при этом разделить между собой стиль горизонтального и вертикального списка и применяются дочерние селекторы:</p>',

    div13_example: 'UL#menu { <br> &nbsp&nbsp margin: 0; padding: 0; <br> } <br> UL#menu > LI { <br> &nbsp&nbsp list-style: none; <br> &nbsp&nbsp  width: 100px; <br> &nbsp&nbsp background: #b3d9d2; <br> &nbsp&nbsp color: #333; <br> &nbsp&nbsp padding: 5px; <br> &nbsp&nbsp font-family: Arial, sans-serif; <br> &nbsp&nbsp font-size: 90%; <br> &nbsp&nbsp font-weight: bold; <br> &nbsp&nbsp float: left; <br> } <br> LI > UL { <br> &nbsp&nbsp list-style: none; <br> &nbsp&nbsp margin: 0; padding: 0; <br> &nbsp&nbsp border-bottom: 1px solid #666; <br> &nbsp&nbsp padding-top: 5px; <br> } <br> LI > A { <br> &nbsp&nbsp display: block; <br> &nbsp&nbsp font-weight: normal; <br> &nbsp&nbsp font-size: 90%; <br> &nbsp&nbsp background: #fff; <br> &nbsp&nbsp border: 1px solid #666; <br> &nbsp&nbsp border-bottom: none; <br> &nbsp&nbsp padding: 5px; <br> }',

    div14_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeEleven_4.png" alt="image"></div><div class="div_text_image"><p>Список в виде меню</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTen()">CSS topic 10</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamTwelve()">JS topic 12</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Двенадцатая тема CSS.
let CSSTheamTwelveEng = {
    div1: '<h3>Pseudo-classes</h3><p>Pseudo-classes define the dynamic state of elements, which changes through user actions, as well as their position in the document tree. An example of such a state is a text link that changes color when you hover the mouse over it. When using pseudo-classes, the browser does not overload the current document, so using pseudo-classes you can achieve different dynamic effects on the page.</p><p>The syntax for using pseudo-classes is as follows:</p>',

    div2_example: 'Selector:Pseudo-class { Description of style rules }',

    div3: '<p>First, the selector to which the pseudo-class is added is specified, followed by a colon, followed by the name of the pseudo-class. It is possible to apply pseudo-classes to identifier or class names (<b>A.menu:hover {color: green}</b>), as well as to context selectors (<b>.menu A:hover {background: #fc0}</b>). If a pseudo-class is specified without a selector in front (<b>:hover</b>), then it will apply to all elements of the document.</p><p>Conventionally, all pseudo-classes are divided into three groups:</p><ul><li>determining the state of elements;</li><li>related to the tree of elements;</li><li>indicating the language of the text.</li></ul>',

    div4: '<h4>Pseudo-classes that define the state of elements</h4><p>This group includes pseudo-classes that recognize the current state of an element and apply a style only to that state.</p><p><b>:active</b></p><p>Occurs when the user activates an element. For example, a link becomes active if you hover over it and click the mouse. Although almost any element on a web page can become active, the <b>:active</b> pseudo-class is used primarily for links.</p><p><b>:link</b></p><p>Applies to unvisited links, i.e. links that the user has not yet clicked on. The browser stores your browsing history for some time, so a link can be marked as visited, if only because it was clicked on earlier.</p><p><b>:focus</b></p><p>Applies to an element when it receives focus. For example, for a form text field, receiving focus means that the cursor is positioned in the field and you can use the keyboard to enter text into it.</p>',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_1.png" alt="image"></div><div class="div_text_image"><p>Change text style when receiving focus</p></div>',

    div6: '<p><b>:hover</b></p><p>The <b>:hover</b> pseudo-class is activated when the mouse cursor is within the element, but it is not clicked.</p><p><b>:visited</b></p><p>This pseudo-class is applied to visited links. Typically, such a link changes its default color to purple, but using styles you can set the color and other parameters yourself.</p>',

    div7_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_2.png" alt="image"></div><div class="div_text_image"><p>What a link looks like when you hover your mouse over it</p></div>',

    div8: '<h4>Pseudo-classes related to the document tree</h4><p>This group includes pseudo-classes that determine the position of an element in the document tree and apply a style to it depending on its status.</p><p><b>:first-child</b></p><p>Applies to the first child element of the selector that is located in the document element tree.</p>',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_3.png" alt="image"></div><div class="div_text_image"><p>Using the :first-child pseudo-class</p></div>',

    div10: '<h4>Pseudo-classes that specify the text language</h4><p>For documents that simultaneously contain texts in several languages, it is important to comply with the syntax rules characteristic of a particular language. Using pseudo-classes, you can change the design style of foreign texts, as well as some settings.</p><p><b>:lang</b></p><p>Determines the language that is used in the document or its fragment. In HTML code, the language is set through the <b>lang</b> attribute, which is usually added to the <b>&lthtml&gt</b> tag. Using the <b>:lang</b> pseudo-class, you can set certain settings specific to different languages, for example, the type of quotes in quotes. The syntax is as follows.</p>',

    div11_example: 'Element:lang(language) { ... }',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_4.png" alt="image"></div><div class="div_text_image"><p>Using the :first-child pseudo-class</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamEleven()">CSS topic 11</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamThirteen()">JS topic 13</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamTwelveRus = {
    div1: '<h3>Псевдоклассы</h3><p>Псевдоклассы определяют динамическое состояние элементов, которое изменяется с помощью действий пользователя, а также положение в дереве документа. Примером такого состояния служит текстовая ссылка, которая меняет свой цвет при наведении на неё курсора мыши. При использовании псевдоклассов браузер не перегружает текущий документ, поэтому с помощью псевдоклассов можно получить разные динамические эффекты на странице.</p><p>Синтаксис применения псевдоклассов следующий:</p>',

    div2_example: 'Селектор:Псевдокласс { Описание правил стиля }',

    div3: '<p>Вначале указывается селектор, к которому добавляется псевдокласс, затем следует двоеточие, после которого идёт имя псевдокласса. Допускается применять псевдоклассы к именам идентификаторов или классов (<b>A.menu:hover {color: green}</b>), а также к контекстным селекторам (<b>.menu A:hover {background: #fc0}</b>). Если псевдокласс указывается без селектора впереди (<b>:hover</b>), то он будет применяться ко всем элементам документа.</p><p>Условно все псевдоклассы делятся на три группы:</p><ul><li>определяющие состояние элементов;</li><li>имеющие отношение к дереву элементов;</li><li>указывающие язык текста.</li></ul>',

    div4: '<h4>Псевдоклассы, определяющие состояние элементов</h4><p>К этой группе относятся псевдоклассы, которые распознают текущее состояние элемента и применяют стиль только для этого состояния.</p><p><b>:active</b></p><p>Происходит при активации пользователем элемента. Например, ссылка становится активной, если навести на неё курсор и щёлкнуть мышкой. Несмотря на то, что активным может стать практически любой элемент веб-страницы, псевдокласс <b>:active</b> используется преимущественно для ссылок.</p><p><b>:link</b></p><p>Применяется к непосещенным ссылкам, т. е. таким ссылкам, на которые пользователь ещё не нажимал. Браузер некоторое время сохраняет историю посещений, поэтому ссылка может быть помечена как посещенная хотя бы потому, что по ней был зафиксирован переход ранее.</p><p><b>:focus</b></p><p>Применяется к элементу при получении им фокуса. Например, для текстового поля формы получение фокуса означает, что курсор установлен в поле, и с помощью клавиатуры можно вводить в него текст.</p>',

    div5_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_1.png" alt="image"></div><div class="div_text_image"><p>Изменение стиля текста при получении фокуса</p></div>',

    div6: '<p><b>:hover</b></p><p>Псевдокласс <b>:hover</b> активизируется, когда курсор мыши находится в пределах элемента, но щелчка по нему не происходит.</p><p><b>:visited</b></p><p>Данный псевдокласс применяется к посещённым ссылкам. Обычно такая ссылка меняет свой цвет по умолчанию на фиолетовый, но с помощью стилей цвет и другие параметры можно задать самостоятельно.</p>',

    div7_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_2.png" alt="image"></div><div class="div_text_image"><p>Вид ссылки при наведении на неё курсора мыши</p></div>',

    div8: '<h4>Псевдоклассы, имеющие отношение к дереву документа</h4><p>К этой группе относятся псевдоклассы, которые определяют положение элемента в дереве документа и применяют к нему стиль в зависимости от его статуса.</p><p><b>:first-child</b></p><p>Применяется к первому дочернему элементу селектора, который расположен в дереве элементов документа.</p>',

    div9_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_3.png" alt="image"></div><div class="div_text_image"><p>Использование псевдокласса :first-child</p></div>',

    div10: '<h4>Псевдоклассы, задающие язык текста</h4><p>Для документов, одновременно содержащих тексты на нескольких языках имеет значение соблюдение правил синтаксиса, характерные для того или иного языка. С помощью псевдоклассов можно изменять стиль оформления иностранных текстов, а также некоторые настройки.</p><p><b>:lang</b></p><p>Определяет язык, который используется в документе или его фрагменте. В коде HTML язык устанавливается через атрибут <b>lang</b>, он обычно добавляется к тегу <b>&lthtml&gt</b>. С помощью псевдокласса <b>:lang</b> можно задавать определённые настройки, характерные для разных языков, например, вид кавычек в цитатах. Синтаксис следующий.</p>',

    div11_example: 'Элемент:lang(язык) { ... }',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeTwelve_4.png" alt="image"></div><div class="div_text_image"><p>Использование псевдокласса :first-child</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamEleven()">CSS topic 11</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamThirteen()">JS topic 13</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Тринадцатая тема CSS. 
let CSSTheamThirteenEng = {
    div1: '<h3>Pseudo-elements</h3><p>Pseudo-elements allow you to set the style of elements not defined in the document element tree, as well as generate content that is not in the source code of the text.</p><p>The syntax for using pseudo elements is as follows.</p>',

    div2_example: 'Selector:Pseudo-element { Description of style rules }',

    div3: '<p>First comes the selector name, then a colon, followed by the name of the pseudo-element. Each pseudo element can only be applied to one selector, if you want to set multiple pseudo elements for a single selector, style rules must be added to them individually as shown below.</p>',

    div4_example: '.foo:first-letter { color: red } <br>  .foo:first-line {font-style: italic}',

    div5: '<p><b>:after</b></p><p>Used to insert designated content after the element\'s content. This pseudo-element works in conjunction with the <b>content</b> style property, which specifies the content to be inserted.</p>',

    div6_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_1.png" alt="image"></div><div class="div_text_image"><p>Adding text to a paragraph using :after</p></div>',

    div7: '<p><b>:before</b></p><p>The effect of <b>:before</b> is similar to that of the <b>:after</b> pseudo-element, but it inserts content before the content of the element.</p>',

    div8_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_2.png" alt="image"></div><div class="div_text_image"><p>Changing the appearance of markers using :before</p></div>',

    div9: '<p><b>:first-letter</b></p><p>Defines the style of the first character in the text of the element to which it is appended. This allows you to create a drop cap and a raised initial in the text.</p>',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_3.png" alt="image"></div><div class="div_text_image"><p>Creating a raised initial</p></div>',

    div11: '<p><b>:first-line</b></p><p>Specifies the style of the first line of block text. The length of this line depends on many factors, such as the font used, browser window size, block width, language, etc.</p>',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_4.png" alt="image"></div><div class="div_text_image"><p>The result of applying the :first-line pseudo-element</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTwelve()">CSS topic 12</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamFourteen()">JS topic 14</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamThirteenRus = {
    div1: '<h3>Псевдоэлементы</h3><p>Псевдоэлементы позволяют задать стиль элементов не определённых в дереве элементов документа, а также генерировать содержимое, которого нет в исходном коде текста.</p><p>Синтаксис использования псевдоэлементов следующий.</p>',

    div2_example: 'Селектор:Псевдоэлемент { Описание правил стиля }',

    div3: '<p>Вначале следует имя селектора, затем пишется двоеточие, после которого идёт имя псевдоэлемента. Каждый псевдоэлемент может применяться только к одному селектору, если требуется установить сразу несколько псевдоэлементов для одного селектора, правила стиля должны добавляться к ним по отдельности, как показано ниже.</p>',

    div4_example: '.foo:first-letter { color: red } <br>  .foo:first-line {font-style: italic}',

    div5: '<p><b>:after</b></p><p>Применяется для вставки назначенного контента после содержимого элемента. Этот псевдоэлемент работает совместно со стилевым свойством <b>content</b>, которое определяет содержимое для вставки.</p>',

    div6_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_1.png" alt="image"></div><div class="div_text_image"><p>Добавление текста к абзацу с помощью :after</p></div>',

    div7: '<p><b>:before</b></p><p>По своему действию <b>:before</b> аналогичен псевдоэлементу <b>:after</b>, но вставляет контент до содержимого элемента.</p>',

    div8_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_2.png" alt="image"></div><div class="div_text_image"><p>Изменение вида маркеров с помощью :before</p></div>',

    div9: '<p><b>:first-letter</b></p><p>Определяет стиль первого символа в тексте элемента, к которому добавляется. Это позволяет создавать в тексте буквицу и выступающий инициал.</p>',

    div10_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_3.png" alt="image"></div><div class="div_text_image"><p>Создание выступающего инициала</p></div>',

    div11: '<p><b>:first-line</b></p><p>Определяет стиль первой строки блочного текста. Длина этой строки зависит от многих факторов, таких как используемый шрифт, размер окна браузера, ширина блока, языка и т.д.</p>',

    div12_image: '<div class="div_image_print"><img class="image_print" src="image/css_example_CSSThemeThirteen_4.png" alt="image"></div><div class="div_text_image"><p>Результат применения псевдоэлемента :first-line</p></div>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamTwelve()">CSS topic 12</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamFourteen()">JS topic 14</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}

// Четырнадцатая тема CSS.
let CSSTheamFourteenEng = {
    div1: '<h3>Inheritance</h3><p>Inheritance is the transfer of formatting rules for elements that are inside other elements. Such elements are children, and they inherit some style properties of their parents, within which they are located.</p><p>Let\'s look at inheritance using a table as an example. A feature of the tables can be considered a strict hierarchical structure of tags. First comes the <b>&lttable&gt</b> container, inside which <b>&lttr&gt</b> tags are added, and then comes the <b>&lttd&gt</b> tag. If you set the text color in the styles for the <b>TABLE</b> selector, it is automatically set for the contents of the cells, as shown in the example:</p>',

    div2_example: 'TABLE { <br> &nbsp&nbsp color: red; <i>/* Text color */</i> <br> &nbsp&nbsp background: #333; <i>/* Table background color */</i> <br> border: 2px solid red; <i>/* Red frame around the table */</i> <br> }',

    div3: '<p>In this example, the text color for the entire table is set to red, so it is also used in the cells because the <b>&lttd&gt</b> tag inherits the properties of the <b>&lttable&gt</b> tag. It should be understood that not all style properties are inherited. So, <b>border</b> sets a border around the table as a whole, but not around the cells. Likewise, the value of the <b>background</b> property is not inherited. Then why is the background color of the cells in this example dark, since it is not inherited? The fact is that the default value of the <b>background</b> property is <b>transparent</b>, i.e. transparency. This way the background color of the parent element “peeles through” the child element.</p><p>To determine whether the value of a style property is inherited or not, you need to look into the CSS properties reference and look there. It is useless to use your intuition in such a case; it may even let you down.</p><p>Inheritance allows you to set the values of some properties once, defining them for the top-level parents. Let\'s say you want to set the color and font for the body text. Just use the <b>BODY</b> selector, add the desired properties to it, and the color of the text inside paragraphs and other text elements will change automatically:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtInheritance&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Arial, Helvetica, sans-serif; <i>/* Font typeface */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: navy; <i>/* Blue text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtThe text color of this paragraph is blue.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: '<p>In this example, the font and paragraph text color are set using the <b>BODY</b> selector. Thanks to inheritance, there is no longer any need to set the color for each element of the document separately. However, there are options when you still need to change the color for a separate container. In this case, you will have to override the necessary parameters explicitly, as shown in the example:</p>',

    div6_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtInheritance&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Arial, Helvetica, sans-serif; <i>/* Font typeface */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: navy; <i>/* Blue text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P.red { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: maroon; <i>/* Dark red text color */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtThe text color of this paragraph is blue.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp class="red"&gtAnd this paragraph has a different text color.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>In this example, the color of the first paragraph is inherited from the <b>BODY</b> selector, and the color of the second is set explicitly through a class called <b>red</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamThirteen()">CSS topic 13</a></b> - previous topic.<br><b><a href="#" onclick="quickLink(); CSSTheamFifteen()">JS topic 15</a></b> - next topic.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen.'
}

let CSSTheamFourteenRus = {
    div1: '<h3>Наследование</h3><p>Наследованием называется перенос правил форматирования для элементов, находящихся внутри других. Такие элементы являются дочерними, и они наследуют некоторые стилевые свойства своих родителей, внутри которых располагаются.</p><p>Разберём наследование на примере таблицы. Особенностью таблиц можно считать строгую иерархическую структуру тегов. Вначале следует контейнер <b>&lttable&gt</b> внутри которого добавляются теги <b>&lttr&gt</b>, а затем идёт тег <b>&lttd&gt</b>. Если в стилях для селектора <b>TABLE</b> задать цвет текста, то он автоматически устанавливается для содержимого ячеек, как показано в примере:</p>',

    div2_example: 'TABLE { <br> &nbsp&nbsp color: red; <i>/* Цвет текста */</i> <br> &nbsp&nbsp background: #333; <i>/* Цвет фона таблицы */</i> <br> border: 2px solid red; <i>/* Красная рамка вокруг таблицы */</i> <br> }',

    div3: '<p>В данном примере для всей таблицы установлен красный цвет текста, поэтому в ячейках он также применяется, поскольку тег <b>&lttd&gt</b> наследует свойства тега <b>&lttable&gt</b>. При этом следует понимать, что не все стилевые свойства наследуются. Так, <b>border</b> задаёт рамку вокруг таблицы в целом, но никак не вокруг ячеек. Аналогично не наследуется значение свойства <b>background</b>. Тогда почему цвет фона у ячеек в данном примере тёмный, раз он не наследуется? Дело в том, что у свойства <b>background</b> в качестве значения по умолчанию выступает <b>transparent</b>, т. е. прозрачность. Таким образом цвет фона родительского элемента «проглядывает» сквозь дочерний элемент.</p><p>Чтобы определить, наследуется значение стилевого свойства или нет, требуется заглянуть в справочник по свойствам CSS и посмотреть там. Подключать свою интуицию в подобном случае бесполезно, может и подвести.</p><p>Наследование позволяет задавать значения некоторых свойств единожды, определяя их для родителей верхнего уровня. Допустим, требуется установить цвет и шрифт для основного текста. Достаточно воспользоваться селектором <b>BODY</b>, добавить для него желаемые свойства, и цвет текста внутри абзацев и других текстовых элементов поменяется автоматически:</p>',

    div4_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtНаследование&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Arial, Helvetica, sans-serif; <i>/* Гарнитура шрифта */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: navy; <i>/* Синий цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtЦвет текста этого абзаца синий.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div5: '<p>В данном примере рубленый шрифт и цвет текста абзацев устанавливается с помощью селектора <b>BODY</b>. Благодаря наследованию уже нет нужды задавать цвет для каждого элемента документа в отдельности. Однако бывают варианты, когда требуется всё-таки изменить цвет для отдельного контейнера. В этом случае придётся переопределять нужные параметры явно, как показано в примере:</p>',

    div6_example: '&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtНаследование&lt/title&gt <br> &nbsp&nbsp &nbsp&nbsp &ltstyle&gt <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp BODY { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp font-family: Arial, Helvetica, sans-serif; <i>/* Гарнитура шрифта */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: navy; <i>/* Синий цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp P.red { <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp color: maroon; <i>/* Темно-красный цвет текста */</i> <br> &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp } <br> &nbsp&nbsp &nbsp&nbsp &lt/style&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp&gtЦвет текста этого абзаца синий.&lt/p&gt <br> &nbsp&nbsp &nbsp&nbsp &ltp class="red"&gtА у этого абзаца цвет текста уже другой.&lt/p&gt <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt',

    div7: '<p>В данном примере цвет первого абзаца наследуется от селектора <b>BODY</b>, а для второго установлен явно через класс с именем <b>red</b>.</p>',

    next: '<b><a href="#" onclick="quickLink(); CSSTheamThirteen()">CSS topic 13</a></b> - предыдущая тема.<br><b><a href="#" onclick="quickLink(); CSSTheamFifteen()">JS topic 15</a></b> - следующая тема.<br><b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран.'
}


// &nbsp - пробел.
// &lt - <
// &gt - >
// «»
// &quot - "
// &#8216 - '


/* 

&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gt Название &lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp code <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt

&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &ltlink rel="stylesheet" href="style.css"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gt Название &lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltbody&gt <br> &nbsp&nbsp &nbsp&nbsp code <br> &nbsp&nbsp &lt/body&gt <br> &lt/html&gt

&lt!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd""&gt <br> &lthtml&gt <br> &nbsp&nbsp &lthead&gt <br> &nbsp&nbsp &nbsp&nbsp &ltmeta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt <br> &nbsp&nbsp &nbsp&nbsp &lttitle&gtФреймы&lt/title&gt <br> &nbsp&nbsp &lt/head&gt <br> &nbsp&nbsp &ltframeset cols="100,*"&gt <br> &nbsp&nbsp &nbsp&nbsp code <br> &nbsp&nbsp &lt/frameset&gt <br> &lt/html&gt

*/
