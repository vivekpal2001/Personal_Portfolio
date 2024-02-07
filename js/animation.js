
// Define DOM element 

const heroImage = document.querySelector("#hero__animation__img");
const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl_content");
const trContent = document.querySelector("#grid__tr_content");
const blContent = document.querySelector("#grid__bl_content");
const brContent = document.querySelector("#grid__br_content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// DEFINE COLOR AND POSITION
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(100vh)";

let blctive = "translateX(10vw) translateY(7h)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define the corner which is open

let activeCorner = "";

//add event listener to the window to resize the result

window.addEventListener("resize,handleWindowResize");

// function that handle the style of resize window

function handleWindowResize(){

}

let lastReverseAnimation = "";

//play animation function

function playAnimation(animation , reverseAnimation){
    // remove all animation
    heroImage.className = ""; 
    if(lastReverseAnimation!==""){
        // clicked somethng 
        heroImage.classList.add(lastReverseAnimation);
        setTimeout(function(){
            heroImage.classList.remove(lastReverseAnimation);
            heroImage.classList.add(animation);
            lastReverseAnimation = reverseAnimation;
        },200)

    }else{
        // play forward animation
        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
    }
}

function playClosingAnimation(reverseAnimation){

}
//onclick corner button function
tlBtn.onClick = function(){
    if(activeCorner === "top-left"){
        playClosingAnimation("reverse-animate-top-left");
    }else{
        trBtn.innerHTML = "Experience";
        blBtn.innerHTML = "Projects";
        brBtn.innerHTML = "Contact";

        // setting the active corner
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br/>About";

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // change background
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;
        blBtn.style.background = bgColor;

        // chng the text color

        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;

        // chane position of corner content

        brContent.style.transform = brHidden;
        trContent.style.transform = trHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
}

trBtn.onClick = function(){
    if(activeCorner === "top-right"){
        playClosingAnimation("reverse-animate-top-right");
    }else{
        tlBtn.innerHTML = "About";
        blBtn.innerHTML = "Projects";
        brBtn.innerHTML = "Contact";
        // setting the active corner
        activeCorner = "top-right";
        trBtn.innerHTML = "&uarr;<br/>Experience";

        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-riight");

        // change background
        trBtn.style.background = bgColorAlt;
        brBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;
        blBtn.style.background = bgColor;

        // chng the text color

        trBtn.style.color = textColorAlt;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        // chane position of corner content

        brContent.style.transform = brHidden;
        trContent.style.transform = trActive;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }
}

blBtn.onClick = function(){
    if(activeCorner === "bottom-left"){
        playClosingAnimation("reverse-animate-bottom-left");
    }else{
        tlBtn.innerHTML = "About";
        trBtn.innerHTML = "Experience";
        brBtn.innerHTML = "Contact";
        // setting the active corner
        activeCorner = "bottom-left";
        blBtn.innerHTML = "Projects<br/>&darr";

        handleWindowResize();
        playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

        // change background
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;
        blBtn.style.background = bgColorAlt;

        // chng the text color

        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColorAlt;
        tlBtn.style.color = textColor;

        // chane position of corner content

        brContent.style.transform = brHidden;
        trContent.style.transform = trHidden;
        blContent.style.transform = blActive;
        tlContent.style.transform = tlHidden;
    }
}
brBtn.onClick = function(){
    if(activeCorner === "bottom-right"){
        playClosingAnimation("reverse-animate-bottom-right");
    }else{
        tlBtn.innerHTML = "About";
        blBtn.innerHTML = "Projects";
        trBtn.innerHTML = "Experience";
        // setting the active corner
        activeCorner = "bottom-right";
        brBtn.innerHTML = "Contact<br/>&darr";

        handleWindowResize();
        playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

        // change background
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColorAlt;
        tlBtn.style.background = bgColor;
        blBtn.style.background = bgColor;

        // chng the text color

        trBtn.style.color = textColor;
        brBtn.style.color = textColorAlt;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        // chane position of corner content

        brContent.style.transform = brActive;
        trContent.style.transform = trHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }
}

