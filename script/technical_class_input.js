"use strict";

// Info
function printInfo() {
    scrollUp();

    Localization = "printInfo";

    div.div1.className = "screen_print_example";
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

    let infoDataRus = {
        div1: `<p>language: ${language}</p> <p>localization: ${Localization}</p> <p>choiceLanguage: ${choiceLanguage}</p> <p>choiceUser: ${choiceUser}</p> <p>windowWidth: ${window.innerWidth}</p> <p>windowHeight: ${window.innerHeight}</p> <p>mobile: ${mobile}</p> <p>mobileModule: ${mobileModule}</p> <p>inputFocus: ${focusInputVar}</p>`,
        div2: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран'
    }

    let infoDataEng = {
        div1: `<p>language: ${language}</p> <p>localization: ${Localization}</p> <p>choiceLanguage: ${choiceLanguage}</p> <p>choiceUser: ${choiceUser}</p> <p>windowWidth: ${window.screen.width}</p> <p>windowHeight: ${window.screen.height}</p> <p>mobile: ${mobile}</p> <p>mobileModule: ${mobileModule}</p> <p>inputFocus: ${focusInputVar}</p>`,
        div2: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen'
    }


    if(language == "rus") {
        let arr = Object.values(infoDataRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {   
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(infoDataEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}

// HelpMenu!
function helpMenu() {
    scrollUp();

    Localization = "helpMenu";

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

    let helpMenuRus = {
        div1: '<h3>Help menu</h3> <p>info - вывод технической информации.</p> <p>rus-lang - смена языка на русский.</p> <p>eng-lang - смена языка на английский.</p> <p>JavaScript, JS - список всех основных тем по JS.</p> <p>HTML5, HTML - список всех основных тем по HTML.</p> <p>CSS - список всех основных тем по CSS.</p> <p>theme - выбор темы сайта.</p> <p>map - карта сайта.</p>',
        div2: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - начальный экран'
    }

    let helpMenuEng = {
        div1: '<h3>Help menu</h3> <p>info - output of technical information.</p> <p>rus-lang - change of language to Russian.</p> <p>eng-lang - change the language to English.</p> <p>JavaScript, JS - a list of all the main topics on JS.</p> <p>HTML5, HTML - a list of all the main topics on HTML.</p> <p>CSS - a list of all the main topics on CSS.</p><p>theme - choosing a website theme.</p><p>map - site map.</p>',
        div2: '<b><a href="#" onclick="quicLinkHome()">home</a></b> - home screen'
    }


    if(language == "rus") {
        let arr = Object.values(helpMenuRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {   
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(helpMenuEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}