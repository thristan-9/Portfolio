/*=============== WINDOW ===============*/

const windowBg = document.querySelector(".window__bg"),
windowWrap = document.querySelector(".window"),
header = document.querySelector(".window__header");

function windowTrigger() {
    const windowDisplay = windowBg.style.display
    if (!windowDisplay || windowDisplay == "none") {
        windowBg.style.display = "block";
    }
    else {
        windowBg.style.display = "none";
        windowWrap.style.transform = "translate(-50%, -50%)";
        windowWrap.style.width = "20em";
        windowWrap.style.height = "30em";
        windowWrap.style.left =  "50%";
        windowWrap.style.top = "50%";
  

    }
}

function windowExpand() {
    windowWrap.style.transform = "translate(0%, 0%)";
    windowWrap.style.width = "100%";
    windowWrap.style.height = "100%";
    windowWrap.style.top = 0;
    windowWrap.style.left = 0;
}
