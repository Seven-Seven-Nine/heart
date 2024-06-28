"use strict";

function JSTopics() { // Список тем по JS.
    scrollUp();

    Localization = "JSTopics";

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_case";
    div.div3.className = "screen_print_none";
    div.div4.className = "screen_print_none";
    div.div5.className = "screen_print_none";
    div.div6.className = "screen_print_none";
    div.div7.className = "screen_print_none";
    div.div8.className = "screen_print_none";
    div.div9.className = "screen_print_none";
    div.div10.className = "screen_print_none";
    div.div11.className = "screen_print_none";
    div.div12.className = "screen_print_none";
    div.div13.className = "screen_print_none";
    div.div14.className = "screen_print_none";
    div.div15.className = "screen_print_none";
    div.div16.className = "screen_print_none";
    div.div17.className = "screen_print_none";
    div.div18.className = "screen_print_none";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicsRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicsEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamOne() { // Первая тема: Привет, мир!

    scrollUp();

    Localization = "JSTheamOne";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";

    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print_case";
    div.div15.className = "screen_print_none";
    div.div16.className = "screen_print_none";
    div.div17.className = "screen_print_none";
    div.div18.className = "screen_print_none";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicOneRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicOneEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamTwo() { // Вторая тема: Структура кода

    scrollUp();

    Localization = "JSTheamTwo";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print_example";
    div.div18.className = "screen_print_case";

    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicSecondRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicSecondEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamThree() { // Третья тема: Строгий режим

    scrollUp();

    Localization = "JSTheamThree";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_case";

    div.div14.className = "screen_print_none";
    div.div15.className = "screen_print_none";
    div.div16.className = "screen_print_none";
    div.div17.className = "screen_print_none";
    div.div18.className = "screen_print_none";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicThreeRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicThreeEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamFour() { // Четвёртая тема: Переменные

    scrollUp();

    Localization = "JSTheamFour";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print_example";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print_example";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print_example";
    div.div29.className = "screen_print";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print_example";
    div.div33.className = "screen_print";
    div.div34.className = "screen_print_example";
    div.div35.className = "screen_print";
    div.div36.className = "screen_print_example";
    div.div37.className = "screen_print";
    div.div38.className = "screen_print_example";
    div.div39.className = "screen_print";
    div.div40.className = "screen_print";
    div.div41.className = "screen_print_example";
    div.div42.className = "screen_print";
    div.div43.className = "screen_print_example";
    div.div44.className = "screen_print";
    div.div45.className = "screen_print";
    div.div46.className = "screen_print_case";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicFourRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicFourEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamFive() { // Пятая тема: Тип данных
    scrollUp();

    Localization = "JSTheamFive";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print_example";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print_example";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print_example";
    div.div29.className = "screen_print";
    div.div30.className = "screen_print_example";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print_example";
    div.div33.className = "screen_print";
    div.div34.className = "screen_print";
    div.div35.className = "screen_print_example";
    div.div36.className = "screen_print";
    div.div37.className = "screen_print_example";
    div.div38.className = "screen_print";
    div.div39.className = "screen_print";
    div.div40.className = "screen_print";
    div.div41.className = "screen_print_example";
    div.div42.className = "screen_print";
    div.div43.className = "screen_print_example";
    div.div44.className = "screen_print";
    div.div45.className = "screen_print_example";
    div.div46.className = "screen_print";
    div.div47.className = "screen_print_case";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicFiveRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicFiveEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamSix() { // Шестая тема: Взаимодействие: alert, prompt, confirm
    scrollUp();

    Localization = "JSTheamSix";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print_example";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print_example";
    div.div17.className = "screen_print_case";
    div.div18.className = "screen_print_none";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicSixRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicSixEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamSeven() { // Седьмая тема: Преобразование типов
    scrollUp();

    Localization = "JSTheamSeven";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print_example";
    div.div18.className = "screen_print_case";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicSevenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicSevenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamEight() { // Восьмая тема: Базовые операторы, математика
    scrollUp();

    Localization = "JSTheamEight";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print_example";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print_example";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print_example";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print_example";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print_example";
    div.div32.className = "screen_print";
    div.div33.className = "screen_print";
    div.div34.className = "screen_print_example";
    div.div35.className = "screen_print";
    div.div36.className = "screen_print_example";
    div.div37.className = "screen_print";
    div.div38.className = "screen_print_example";
    div.div39.className = "screen_print";
    div.div40.className = "screen_print_example";
    div.div41.className = "screen_print";
    div.div42.className = "screen_print_example";
    div.div43.className = "screen_print";
    div.div44.className = "screen_print_example";
    div.div45.className = "screen_print";
    div.div46.className = "screen_print_example";
    div.div47.className = "screen_print";
    div.div48.className = "screen_print_example";
    div.div49.className = "screen_print";
    div.div50.className = "screen_print_case";

    if(language == "rus") {
        let arr = Object.values(JSTopicEightRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicEightEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamEightPartTwo() { // Вторая часть восьмой темы.
    scrollUp();

    Localization = "JSTheamEightPartTwo";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_case";
    div.div16.className = "screen_print_none";
    div.div17.className = "screen_print_none";
    div.div18.className = "screen_print_none";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicEightRusPartTwo);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicEightEngPartTwo);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamNine() { // Девятая тема: Операторы сравнения
    scrollUp();

    Localization = "JSTheamNine";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print_example";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print_example";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print_example";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print_example";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print";
    div.div26.className = "screen_print_example";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print_example";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print_case";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicNineRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicNineEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamTen() { // Десятая тема: Условное ветвление: if, \'?\'
    scrollUp();

    Localization = "JSTheamTen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print_example";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print_example";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print_example";
    div.div23.className = "screen_print";
    div.div24.className = "screen_print_example";
    div.div25.className = "screen_print";
    div.div26.className = "screen_print_example";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print_example";
    div.div29.className = "screen_print";
    div.div30.className = "screen_print_example";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print_case";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicTenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicTenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamEleven() { // Одиннадцатая тема: Логическое операторы
    scrollUp();

    Localization = "JSTheamEleven";

    ThemeDisplayWindow();
        
    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print_example";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print_example";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_example";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print_example";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print_example";
    div.div32.className = "screen_print";
    div.div33.className = "screen_print_example";
    div.div34.className = "screen_print";
    div.div35.className = "screen_print_example";
    div.div36.className = "screen_print";
    div.div37.className = "screen_print_example";
    div.div38.className = "screen_print";
    div.div39.className = "screen_print_example";
    div.div40.className = "screen_print";
    div.div41.className = "screen_print";
    div.div42.className = "screen_print";
    div.div43.className = "screen_print_example";
    div.div44.className = "screen_print";
    div.div45.className = "screen_print_example";
    div.div46.className = "screen_print";
    div.div47.className = "screen_print_example";
    div.div48.className = "screen_print";
    div.div49.className = "screen_print_case";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicElevenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicElevenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamTwelve() { // Двенадцатая тема: Оператор нулевого слияния
    scrollUp();

    Localization = "JSTheamTwelve";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print_example";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print_example";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print_example";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_example";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print_example";
    div.div30.className = "screen_print_case";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicTwelveRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicTwelveEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamThirteen() { // Тринадцатая тема: Циклы while и for
    scrollUp();

    Localization = "JSTheamThirteen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print_example";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print_example";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print_example";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print_example";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_example";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print";
    div.div30.className = "screen_print_example";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print";
    div.div33.className = "screen_print_example";
    div.div34.className = "screen_print";
    div.div35.className = "screen_print_example";
    div.div36.className = "screen_print";
    div.div37.className = "screen_print";
    div.div38.className = "screen_print_example";
    div.div39.className = "screen_print";
    div.div40.className = "screen_print_example";
    div.div41.className = "screen_print";
    div.div42.className = "screen_print_example";
    div.div43.className = "screen_print";
    div.div44.className = "screen_print_example";
    div.div45.className = "screen_print";
    div.div46.className = "screen_print_example";
    div.div47.className = "screen_print";
    div.div48.className = "screen_print_case";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicThirteenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicThirteenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamFourteen() { // Четырнадцатая тема: Конструкция "switch"
    scrollUp();

    Localization = "JSTheamFourteen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print_example";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print_case";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicFourteenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicFourteenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamFifteen() { // Пятнадцатая тема: Функции
    scrollUp();

    Localization = "JSTheamFifteen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print_example";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print_example";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print_example";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print_example";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print";
    div.div24.className = "screen_print_example";
    div.div25.className = "screen_print";
    div.div26.className = "screen_print_example";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print_example";
    div.div29.className = "screen_print";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print_example";
    div.div32.className = "screen_print";
    div.div33.className = "screen_print_example";
    div.div34.className = "screen_print";
    div.div35.className = "screen_print_example";
    div.div36.className = "screen_print";
    div.div37.className = "screen_print_example";
    div.div38.className = "screen_print";
    div.div39.className = "screen_print_example";
    div.div40.className = "screen_print";
    div.div41.className = "screen_print_example";
    div.div42.className = "screen_print";
    div.div43.className = "screen_print";
    div.div44.className = "screen_print_example";
    div.div45.className = "screen_print";
    div.div46.className = "screen_print_example";
    div.div47.className = "screen_print";
    div.div48.className = "screen_print_example";
    div.div49.className = "screen_print";
    div.div50.className = "screen_print_case";

    if(language == "rus") {
        let arr = Object.values(JSTopicFifteenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicFifteenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamFifteenPartTwo() { // Вторая часть пятнадцатой темы.
    scrollUp();

    Localization = "JSTheamFifteenPartTwo";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_case";
    div.div10.className = "screen_print_none";
    div.div11.className = "screen_print_none";
    div.div12.className = "screen_print_none";
    div.div13.className = "screen_print_none";
    div.div14.className = "screen_print_none";
    div.div15.className = "screen_print_none";
    div.div16.className = "screen_print_none";
    div.div17.className = "screen_print_none";
    div.div18.className = "screen_print_none";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicFifteenRusPartTwo);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicFifteenEngPartTwo);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamSixteen() { // Шестнадцатая тема: Function Expression
    scrollUp();

    Localization = "JSTheamSixteen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print_example";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print_example";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print_example";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_example";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print_example";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print_example";
    div.div32.className = "screen_print";
    div.div33.className = "screen_print_example";
    div.div34.className = "screen_print";
    div.div35.className = "screen_print_case";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicSixteenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicSixteenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function JSTheamSeventeen() { // Семнадцатая тема: Стрелочные функции, основы
    scrollUp();

    Localization = "JSTheamSeventeen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print_case";
    div.div17.className = "screen_print_none";
    div.div18.className = "screen_print_none";
    div.div19.className = "screen_print_none";
    div.div20.className = "screen_print_none";
    div.div21.className = "screen_print_none";
    div.div22.className = "screen_print_none";
    div.div23.className = "screen_print_none";
    div.div24.className = "screen_print_none";
    div.div25.className = "screen_print_none";
    div.div26.className = "screen_print_none";
    div.div27.className = "screen_print_none";
    div.div28.className = "screen_print_none";
    div.div29.className = "screen_print_none";
    div.div30.className = "screen_print_none";
    div.div31.className = "screen_print_none";
    div.div32.className = "screen_print_none";
    div.div33.className = "screen_print_none";
    div.div34.className = "screen_print_none";
    div.div35.className = "screen_print_none";
    div.div36.className = "screen_print_none";
    div.div37.className = "screen_print_none";
    div.div38.className = "screen_print_none";
    div.div39.className = "screen_print_none";
    div.div40.className = "screen_print_none";
    div.div41.className = "screen_print_none";
    div.div42.className = "screen_print_none";
    div.div43.className = "screen_print_none";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";

    if(language == "rus") {
        let arr = Object.values(JSTopicSeventeenRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(JSTopicSeventeenEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}
