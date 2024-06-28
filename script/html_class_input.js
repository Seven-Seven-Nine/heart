"use strict";

function HTMLTopics() { // Список всех тем.
    scrollUp();

    Localization = "HTMLTopics";

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
        let arr = Object.values(HTMLContentRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLContentEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicOne() { // Первая тема: Введение.
    scrollUp();
    
    Localization = "HTMLTopicOne";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print_case";
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
        let arr = Object.values(HTMLIntroductionRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLIntroductionEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicTwo() { // Вторая тема: Инструментарий.
    scrollUp();
    
    Localization = "HTMLTopicTwo";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_case";
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
        let arr = Object.values(HTMLToolsRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLToolsEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicThree() { // Третья тема: Теги.
    scrollUp();
    
    Localization = "HTMLTopicThree";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print_example";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print_example";
    div.div23.className = "screen_print";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_case";
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
        let arr = Object.values(HTMLTagsRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLTagsEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicFour() { // Четвёртая тема: Структура.
    scrollUp();
    
    Localization = "HTMLTopicFour";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_case";
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
        let arr = Object.values(HTMLStructureRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLStructureEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicFive() { // Пятая тема: Типы тегов.
    scrollUp();
    
    Localization = "HTMLTopicFive";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print_example";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print";
    div.div33.className = "screen_print";
    div.div34.className = "screen_print";
    div.div35.className = "screen_print";
    div.div36.className = "screen_print";
    div.div37.className = "screen_print";
    div.div38.className = "screen_print";
    div.div39.className = "screen_print";
    div.div40.className = "screen_print";
    div.div41.className = "screen_print";
    div.div42.className = "screen_print";
    div.div43.className = "screen_print";
    div.div44.className = "screen_print";
    div.div45.className = "screen_print";
    div.div46.className = "screen_print";
    div.div47.className = "screen_print";
    div.div48.className = "screen_print";
    div.div49.className = "screen_print";
    div.div50.className = "screen_print_case";
    
    if(language == "rus") {
        let arr = Object.values(HTMLTypesTagsRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLTypesTagsEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicSix() { // Шестая тема: Значение атрибутов тегов.
    scrollUp();
    
    Localization = "HTMLTopicSix";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print_example";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print_example";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print_example";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print";
    div.div24.className = "screen_print_example";
    div.div25.className = "screen_print";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_case";
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
        let arr = Object.values(HTMLTagAttributeValuesRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLTagAttributeValuesEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicSeven() { // Седьмая тема: Текст.
    scrollUp();
    
    Localization = "HTMLTopicSeven";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print_example";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print";
    div.div14.className = "screen_print_example";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print";
    div.div18.className = "screen_print_example";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print_example";
    div.div23.className = "screen_print";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_example";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print_example";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print_example";
    div.div33.className = "screen_print";
    div.div34.className = "screen_print_case";
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
        let arr = Object.values(HTMLTextRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLTextEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicEight() { // Восьмая тема: Ссылки.
    scrollUp();
    
    Localization = "HTMLTopicEight";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_example";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print";
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
    div.div23.className = "screen_print";
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
    div.div38.className = "screen_print";
    div.div39.className = "screen_print";
    div.div40.className = "screen_print_example";
    div.div41.className = "screen_print";
    div.div42.className = "screen_print";
    div.div43.className = "screen_print_case";
    div.div44.className = "screen_print_none";
    div.div45.className = "screen_print_none";
    div.div46.className = "screen_print_none";
    div.div47.className = "screen_print_none";
    div.div48.className = "screen_print_none";
    div.div49.className = "screen_print_none";
    div.div50.className = "screen_print_none";
    
    if(language == "rus") {
        let arr = Object.values(HTMLLinksRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLLinksEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicNine() { // Девятая тема: Якоря.
    scrollUp();
    
    Localization = "HTMLTopicNine";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print_example";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_case";
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
        let arr = Object.values(HTMLAnchorsRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLAnchorsEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicTen() { // Десятая тема: Изображения.
    scrollUp();
    
    Localization = "HTMLTopicTen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print";
    div.div8.className = "screen_print_example";
    div.div9.className = "screen_print";
    div.div10.className = "screen_print_example";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print_example";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print_example";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print_case";
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
        let arr = Object.values(HTMLImageRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLImageEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicEleven() { // Одиннадцатая тема: Списки.
    scrollUp();
    
    Localization = "HTMLTopicEleven";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print_example";
    div.div6.className = "screen_print";
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
    div.div17.className = "screen_print";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print";
    div.div20.className = "screen_print_example";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print";
    div.div23.className = "screen_print_example";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_case";
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
        let arr = Object.values(HTMLListsRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLListsEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicTwelve() { // Двенадцатая тема: Таблицы.
    scrollUp();
    
    Localization = "HTMLTopicTwelve";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print_example";
    div.div4.className = "screen_print";
    div.div5.className = "screen_print";
    div.div6.className = "screen_print";
    div.div7.className = "screen_print_example_table";
    div.div8.className = "screen_print";
    div.div9.className = "screen_print_example_table";
    div.div10.className = "screen_print";
    div.div11.className = "screen_print";
    div.div12.className = "screen_print";
    div.div13.className = "screen_print_example";
    div.div14.className = "screen_print";
    div.div15.className = "screen_print";
    div.div16.className = "screen_print";
    div.div17.className = "screen_print_example";
    div.div18.className = "screen_print";
    div.div19.className = "screen_print_example_table";
    div.div20.className = "screen_print";
    div.div21.className = "screen_print";
    div.div22.className = "screen_print_example";
    div.div23.className = "screen_print";
    div.div24.className = "screen_print";
    div.div25.className = "screen_print_example";
    div.div26.className = "screen_print";
    div.div27.className = "screen_print";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print_example";
    div.div30.className = "screen_print";
    div.div31.className = "screen_print_case";
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
        let arr = Object.values(HTMLTablesRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLTablesEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicThirteen() { // Тринадцатая тема: Фреймы.
    scrollUp();
    
    Localization = "HTMLTopicThirteen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
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
    div.div26.className = "screen_print";
    div.div27.className = "screen_print_example";
    div.div28.className = "screen_print";
    div.div29.className = "screen_print";
    div.div30.className = "screen_print_example";
    div.div31.className = "screen_print";
    div.div32.className = "screen_print_example";
    div.div33.className = "screen_print";
    div.div34.className = "screen_print_case";
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
        let arr = Object.values(HTMLFramesRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLFramesEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

function HTMLTopicFourteen() { // Четырнадцатая тема: Валидация документов.
    scrollUp();
    
    Localization = "HTMLTopicFourteen";

    ThemeDisplayWindow();

    div.div1.className = "screen_print";
    div.div2.className = "screen_print";
    div.div3.className = "screen_print";
    div.div4.className = "screen_print_case";
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
        let arr = Object.values(HTMLDocumentValidationRus);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(HTMLDocumentValidationEng);
        let arr1 = Object.values(div);
    
        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}
