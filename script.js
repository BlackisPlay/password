addEventListener("DOMContentLoaded", () => {
    const casy = [
        ["Instantne", "Instantne", "Instantne", "Instantne", "Instantne"],
        ["Instantne", "Instantne", "Instantne", "Instantne", "Instantne"],
        ["Instantne", "Instantne", "Instantne", "Instantne", "Instantne"],
        ["Instantne", "Instantne", "1 Sekunda", "2 Sekundy", "4 Sekundy"],
        ["Instantne", "Instantne", "28 Sekúnd", "2 Minúty", "5 Minút"],
        ["Instantne", "3 Sekundy", "24 Minút", "2 Hodiny", "6 Hodín"],
        ["Instantne", "1 Minúta", "21 Hodín", "5 Dní", "2 Týždne"],
        ["Instantne", "32 Minút", "1 Mesiac", "10 Mesiacov", "3 Roky"],
        ["1 Sekunda", "14 Hodín", "6 Roky", "53 Rokov", "226 Rokov"],
        ["5 Sekúnd", "2 týždne", "332 Rokov", "3k Rokov", "15k Rokov"],
        ["52 Sekúnd", "1 Rok", "17k Rokov", "202k Rokov", "1m Rokov"],
        ["9 Minút", "27 Rokov", "898k Rokov", "12m Rokov", "77m Rokov"],
        ["1 Hodina", "713 Rokov", "46m Rokov", "779m Rokov", "5b Rokov"],
        ["14 Hodín", "18k Rokov", "2b Rokov", "48b Rokov", "380b Rokov"],
        ["6 Dní", "481k Rokov", "126b Rokov", "2t Rokov", "26t Rokov"],
    ];
    let line0 = document.getElementById("line0");
    let loader = document.getElementById("loader");
    let cover = document.getElementById("cover");
    let background = document.getElementById("background");
    let nadpis = document.getElementById("nadpis");
    let nadpisPodtext = document.getElementById("nadpisPodtext");
    let kulin = document.getElementById("kulin");

    let kruhy = document.getElementById("kruhy")
    let kruh0 = document.getElementById("kruh0");
    let kruh1 = document.getElementById("kruh1");
    let kruh2 = document.getElementById("kruh2");

    let testHeslo = document.getElementById("testHeslo");
    
    let prevScroll = 0;
    let scroll;
    let diff = 0;

    let submit = document.getElementById("submit");
    let input = document.getElementById("password");

    let tracker0 = document.getElementById("tracker0");
    let tracker1 = document.getElementById("tracker1");
    let tracker2 = document.getElementById("tracker2");

    let parallax0 = document.querySelectorAll('.parallax0');
    let parallax1 = document.querySelectorAll('.parallax1');
    let parallax2 = document.querySelectorAll('.parallax2');
    
    const divs = document.querySelectorAll('.effect');
    const divs2 = document.querySelectorAll('.effect2');

    function isNumber(heslo) {
        return /^[0-9]+$/.test(heslo);
    }

    function isLowercase(heslo) {
        return /^[a-z]+$/.test(heslo);
    }

    function isAlpha(heslo) {
        return /^[a-zA-Z]+$/.test(heslo);
    }

    function isNeviem(heslo) {
        return /^[a-zA-Z0-9]+$/.test(heslo);
    }

    function isAll(inputText) {
        return /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(inputText);
    }
    
    let type;

    submit.addEventListener("click", () => {
        document.getElementById("warning").textContent = "";
        document.getElementById("warning").classList.remove("show");
        document.getElementById("karta").style.opacity = 0;
        divs2.forEach((div) => {
            div.style.opacity = 0;
        });
        document.getElementById("karta").style.transform = "translate(-50%, -50%)";
        setTimeout(() => {        
            const heslo = input.value;
            if(heslo === ""){
                document.getElementById("warning").textContent = "Budem potrebovat tvoje heslo.";
                document.getElementById("warning").classList.add("show");
            }else{
                if(heslo.length == 1){
                    document.getElementById("warning").textContent = `${heslo.length} Znak? To ani nema zmysel skusat.`;
                    document.getElementById("warning").classList.add("show");
                }
                else if(heslo.length < 4){
                    document.getElementById("warning").textContent = `${heslo.length} Znaky? To ani nema zmysel skusat.`;
                    document.getElementById("warning").classList.add("show");
                }else if(heslo.length > 18){
                    document.getElementById("warning").textContent = "Pre hesla nad 18 znakov nemam data.";
                    document.getElementById("warning").classList.add("show");
                }else{
                    if (isNumber(heslo)) type = 0;
                    else if(isLowercase(heslo)) type = 1;
                    else if(isAlpha(heslo)) type = 2;
                    else if(isNeviem(heslo)) type = 3;
                    else if(isAll(heslo)) type = 4;
                    else type = -1;
                    setTimeout(() => {
                        document.getElementById("warning").textContent = "";
                        document.getElementById("popis").textContent = "Tvoje heslo by bolo cracknute za";
                        document.getElementById("vysledok").textContent = casy[heslo.length - 4][type];
                    }, 200);
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth"
                    });
                    setTimeout(() => {
                        document.getElementById("karta").style.opacity = 1;
                    }, 300);
                    setTimeout(() => {
                        
                        document.getElementById("karta").style.transform = "translate(-50%, -50%)";
                        divs2.forEach((div, index) => {
                            setTimeout(() => {
                                div.style.opacity = 1-index/10;
                                div.style.bottom = 0;
                            }, index*50);
                        });
                    }, 400)
                }
            }
        }, 100);
    });

    window.addEventListener("load", () => {
        setTimeout(() => {
            cover.style.transform = "translateY(-100%)";
        }, 500);
    })



    function shrinkDiv(div, index) {
        let scrolled = getScrollPercent();
        div.style.transform = `translate(-50%, -50%) scale(${(10-index)/10})`;
        div.style.top = 30 + (10-index*0.4)*index*(scrolled-70)/100 + "%";
        div.style.zIndex = 10-index;
        div.style.opacity = 1-index/10;
    }

    function shrinkDiv2(div, index) {
        let scrolled = getScrollPercent();
        div.style.transform = `translate(-50%, -50%) scale(${(10-index)/10})`;
        div.style.top = 86 + (10-index*0.4)*index*(scrolled-120)/100 + "%";
        div.style.zIndex = 10-index;
    }

    function getScrollPercent(){
        const rect = testHeslo.getBoundingClientRect();
        return 100 - (rect.top*100)/window.innerHeight;
    }
  
    window.addEventListener("mousemove", (e) => {
        let posX = e.clientX;
        let posY = e.clientY;

        kruh0.style.transform = "translateY(" + posY/10 + "px) translateX(" + posX/10 + "px)";
        kruh1.style.transform = "translateY(" + posY/20 + "px) translateX(" + posX/20 + "px)";
        kruh2.style.transform = "translateY(" + posY/30 + "px) translateX(" + posX/30 + "px)";

        tracker0.style.top = posY + window.scrollY - 10 + "px";
        tracker0.style.left = posX - 10 + "px";
        setTimeout(() => {
            tracker1.style.top = posY + window.scrollY - 7.5 + "px";
            tracker1.style.left = posX - 7.5 + "px";
            setTimeout(() => {
                tracker2.style.top = posY + window.scrollY - 5 + "px";
                tracker2.style.left = posX - 5 + "px";
            }, 20);
        }, 20);
    })

    window.addEventListener("scroll", () => {
        kruhy.style.bottom = 200 + window.scrollY/2.5 + "px";
        if(isElementVisible(testHeslo, 100)){
            parallax0.forEach((image) => {
                image.style.transform = "translateY(" + window.scrollY/8 + "px)";
            });
            parallax1.forEach((image) => {
                image.style.transform = "translateY(" + window.scrollY/4 + "px)";
            });
            parallax2.forEach((image) => {
                image.style.transform = "translateY(" + window.scrollY/2 + "px)";
            });
        };

        divs.forEach((div, index) => {
            shrinkDiv(div, index);
        });
        divs2.forEach((div, index) => {
            shrinkDiv2(div, index);
        });

        testHeslo.style.opacity = window.scrollY > 200 ? 1 : 0;

        scroll = window.scrollY;
        diff = scroll - prevScroll;
        tracker0.style.top = parseInt(tracker0.style.top) + diff + "px";
        tracker1.style.top = parseInt(tracker1.style.top) + diff + "px";
        tracker2.style.top = parseInt(tracker2.style.top) + diff + "px";
        prevScroll = scroll;
    });
    
    setTimeout(() => {
        cover.style.transform = "translateY(-100%)";
        background.style.transform = "translateY(0px)";

    }, 500);
    setTimeout(() => {
        line0.style.width = "100%";
    }, 1600);
    setTimeout(() => {
        nadpisPodtext.style.transform = "translateY(0px)";
        nadpisPodtext.style.opacity = 1;
        kulin.style.transform = "translateY(0px)";
        kulin.style.opacity = 1;
        document.getElementById("stars").style.transform = "translateY(0px)";
        document.getElementById("awardPopis").style.transform = "translateY(0px)";
        document.getElementById("menu").style.transform = "translateY(0px)";
        document.getElementById("menu").style.opacity = 1;
    }, 1700);
    setTimeout(() => {
        nadpis.style.transform = "translateY(0px)";
        nadpis.style.opacity = 1;
    }, 600);
    let fadeOpacity = 0;


    const ukazkaElements = document.querySelectorAll('.ukazka');

    const backFade = document.getElementById("backgroundFade");
    
    ukazkaElements.forEach(el => observer.observe(el));

    window.addEventListener("scroll", () => {


        loader.style.width = (window.scrollY/(document.body.scrollHeight - window.innerHeight))*100 + "%";

        fadeOpacity = window.scrollY;
        if(fadeOpacity < 400)
            backFade.style.opacity = fadeOpacity/400;
        else
            backFade.style.opacity = 1;
    });

});
realMenu.style.transform = "translateY(-100%)";
document.getElementById("menu").addEventListener("click", () => {
    realMenu.style.transform = realMenu.style.transform == "translateY(-100%)" ? "translateY(0%)" : "translateY(-100%)";
    document.getElementById("menu").style.transform = document.getElementById("menu").style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
    imagine.style.marginTop = imagine.style.marginTop == "20px" ? "200px" : "20px";
});
function isElementVisible(el, delay) {
    const rect = el.getBoundingClientRect();
    return rect.top + delay <= (window.innerHeight || document.documentElement.clientHeight);
}
