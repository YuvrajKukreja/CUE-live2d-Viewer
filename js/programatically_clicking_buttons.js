function select_model(){
    
            // ✅ Auto-select second option for characterSelect
            const charSelect = document.getElementById('characterSelect');
            if (charSelect && charSelect.options.length > 1) {
                charSelect.selectedIndex = 1;
                // Trigger change if costumeSelect depends on it
                charSelect.dispatchEvent(new Event('change'));


console.log("hello");

setTimeout(() => {
    document.getElementById('addL2DModelBtn').click();
}, 1000); // Adjust delay if needed
            }
}

function select_dress(){
                // ✅ Auto-select second option for costumeSelect
                const costumeSelect = document.getElementById('costumeSelect');
                if (costumeSelect && costumeSelect.options.length > 1) {
                    costumeSelect.selectedIndex = 1;
                }
}

function display_none(){
    let myDiv = document.getElementById("collapsible-id");
myDiv.style.display = "none";
}


function do_the_clicking(){
    
    setTimeout(() => {
        document.getElementById('model-setting-btn-id').click();
        document.getElementById('display-collapsible-button').click();
    }, 100); // Adjust delay if needed

    
    setTimeout(() => {



        
        eyeBlinkingCheckbox.checked = true;
        // Fire the event manually
        eyeBlinkingCheckbox.dispatchEvent(new Event('change'));



        
        breathingCheckbox.checked = true;
        // Fire the event manually
        breathingCheckbox.dispatchEvent(new Event('change'));

        document.getElementById('collapsible-Motions').click();//CLICK Motions
        
        document.getElementById('collapsible-Parameters(beta)').click();// CLICK Parameters(beta)
        // display_none();
    }, 300); // Adjust delay if needed


    setTimeout(async () => {
        //  display_none();
        
        // make_background__round();
        
        const move_lipps_randomly = getQueryParam('move_lipps_randomly', 0); // Returns "22" or 0 if not found
        if(move_lipps_randomly == 1){
            // this.loadBG('./bg/background004_1/manifest.json')
            mouth_movement();
        }
        
        const move_face_imotions_randomly = getQueryParam('move_face_imotions_randomly', 0); // Returns "22" or 0 if not found
        if(move_face_imotions_randomly != 0 ){

            continously___load_list_for_buttons_from_a_div__and_programatically_click_button(move_face_imotions_randomly);
        }

        await drag_body_on_y_axis(3000);
        
        const display_none_ = getQueryParam('display_none', 0); // Returns "22" or 0 if not found
        if(display_none_ == 1){
            display_none();
        }
    }, 500); // Adjust delay if needed
}


// #pose of the model
function load_list_for_buttons_from_a_div__and_programatically_click_button(motionslist , index=16){
    
    console.log("below is the another object")


    
let childrenArray = Array.from(motionslist.children);

// Get the 4th element (index 3)
let child__button = childrenArray[index];

// Make sure it's there before clicking
if (child__button) {
    child__button.click();  // 🔥 CLICK!
    console.log(childrenArray[index])
} else {
    console.warn("That bastard isn't in the array!");
}

}



function continously___load_list_for_buttons_from_a_div__and_programatically_click_button( emotions ){
    let interval = setInterval(() => {
    

  setTimeout(() => {

        console.log("below is the another object")

        let expressionslist = document.getElementById('expressions-list')
        load_list_for_buttons_from_a_div__and_programatically_click_button(expressionslist,0); // facial expressions / emotions

    // drag_body_on_y_axis(0);
    }, 1000); // Adjust delay if needed

    

    setTimeout(() => {

        console.log("below is the another object")

        let expressionslist = document.getElementById('expressions-list')
        load_list_for_buttons_from_a_div__and_programatically_click_button(expressionslist,2); // facial expressions / emotions

    // drag_body_on_y_axis(0);
    }, 2000); // Adjust delay if needed
}, 2000); // Lower number = faster animation

}

function mouth_movement(){
    let slider = document.getElementById("paramMouthOpenYRange");

let value = 0;
let direction = 1;  // 1 = opening, -1 = closing

let interval = setInterval(() => {
    // Change value based on direction
    value += direction * 0.01;

    // Reverse at boundaries
    if (value >= 1) {
        value = 1;
        direction = -1;
    } else if (value <= 0) {
        value = 0;
        direction = 1;
    }

    // Set the slider value
    slider.value = value.toFixed(2);

    // Trigger input event (if something listens to slider)
    slider.dispatchEvent(new Event('input'));

}, 30); // Lower number = faster animation

}

async function drag_body_on_y_axis(delay){


    // setTimeout(() => {

    //     let slider = document.getElementById("Param_horizontal-id");
    //     slider.value = -30;
    
    //     // Trigger input event (if something listens to slider)
    //     slider.dispatchEvent(new Event('input'));
        
    //     slider.dispatchEvent(new Event('change'));
    // }, 2000); // Adjust delay if needed




    // setTimeout(() => {

    //     let slider = document.getElementById("Param_horizontal-id");
    //     slider.value = 30;
    
    //     // Trigger input event (if something listens to slider)
    //     slider.dispatchEvent(new Event('input'));
        
    //     slider.dispatchEvent(new Event('change'));
    // }, 4000); // Adjust delay if needed



    return new Promise((resolve) => {
        setTimeout(() => {
          let slider = document.getElementById("Param_horizontal-id");
          if (slider) {
            slider.value = 1;
    
            // Trigger input and change events
            slider.dispatchEvent(new Event('input'));
            slider.dispatchEvent(new Event('change'));
          }
          resolve(0); // Return 0 after action is done
        }, delay); // Adjust delay if needed
      });
      
}



  

function resizeCanvasToParent() {
    const canvas = document.getElementById("viewer");
    const parent = canvas.parentElement;
  
    // Get parent dimensions
    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;
  
    // Set canvas CSS to fill parent
    canvas.style.width = "100%";
    canvas.style.height = "100%";
  
    // Set canvas resolution to match parent (avoid blur)
    canvas.width = parentWidth;
    canvas.height = parentHeight;
  }
  window.addEventListener('resize', resizeCanvasToParent);
resizeCanvasToParent(); // Initial call