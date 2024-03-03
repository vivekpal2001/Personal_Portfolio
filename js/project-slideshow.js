let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num){
    //go to first after last
    if(num > project.length){
        slideIndex = 1;
    }

    // go to last from first
    if(num<1){
        slideIndex = project.length;
    }

    // for loop to hide the project

    for(let i = 0; i < project.length; i++){
        project[i].style.display = "none";
    }

    project[slideIndex-1].style.display = "flex";
}

function navigateProject(num){
    // changing the index based on backward and forward movement
    showProject((slideIndex += num))
}

