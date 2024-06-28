"use strict";

function siteMap() { // Карта сайта.
    scrollUp();

    Localization = "siteMap";

    quickLink();

    ThemeDisplayWindow();

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
        let arr = Object.values(siteMapRus);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    } else if(language == "eng") {
        let arr = Object.values(siteMapEng);
        let arr1 = Object.values(div);

        for(let i = 0; i < 50; i++) {     
            arr1[i].innerHTML = arr[i];
        }
    }
}