import utils from "./_utils";


function resort() {
    // Step 1: Select the container
    const container = document.querySelector('.parties-game-type-card-categories');

    // Step 2: Select all div elements with the class "parties-game-type-card-category-div"
    const divs = container.querySelectorAll('.parties-game-type-card-category-div');
    
    // Step 3: Move the last div to the top
    if(divs[0].children[3].getAttribute('data-queue-id')==400){
        
        const lastDiv = divs[divs.length - 1]; // Get the last div
        container.removeChild(lastDiv); // Remove it from its current position
        container.insertBefore(lastDiv, container.firstChild); // Insert it at the top
    }
    
    
    
}
let initiateResort = (mutations) => {
	if (document.querySelector(".parties-game-type-card-category-div")){
		resort()
	}
}

window.addEventListener('load', () => {
	utils.routineAddCallback(initiateResort, ["parties-game-type-card-categories"])
})


