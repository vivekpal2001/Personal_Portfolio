//  define DOM element

const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

//load the user preffered color mode from local storage

function localColorMode(){
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
    updeateToggleButton();
}

localColorMode();

// Toggle button to toggale the color mode

toggleButton.addEventListener("click" , () => {
    saveColorMode();
})

// save the user preffered color mode to local storage

function saveColorMode(){
    // check if root element has the class has dark mode.
    // If 'yes' , then switch the mode to light-mode.
    const currentNode = root.classList.contains("dark-mode")
        ? "light-mode"
        : "dark-mode";
    root.classList.remove("light-mode","dark-mode");
    root.classList.add(currentNode);
    localStorage.setItem(storageKey,currentNode);
    updeateToggleButton();

}

function updeateToggleButton(){
    if(root.classList.contains("dark-mode")){
        toggleButton.style.backgroundImage = "var(--moon)";
    }else{
        toggleButton.style.backgroundImage = "var(--sun)";
    }
}