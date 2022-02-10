// create a variable to find the boxes that you will want to add a class too
const boxes = document.querySelectorAll('.box');
// listens for the start of the scroll and then runs the checkBoxes function
window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    // works out where on teh viewport it should trigger a box moving in from the side
    const triggerBottom = window.innerHeight /5 * 4;

    boxes.forEach(box => {
        // method that allows you to get various info from an elements box, in this case 'top'
        const boxTop = box.getBoundingClientRect().top
        // this looks at where the trigger is compared to the top of the box, the variable we just created then adds teh class to bring it in
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    });
}