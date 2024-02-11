var ulBox = document.querySelector('.ul_Box');
var addTaskBtn = document.querySelector('.addTaskBtn');
var ulBoxDiv = document.querySelector('.ulBoxDiv');
var box = document.querySelector('.modal');
var delBtn = document.querySelector('.del_btn');
var updBtn = document.querySelector('.updBtn')


// Get the parent element that holds the dynamic UL elements
var ulBoxDiv = document.querySelector('.ulBoxDiv');

// Event listener for UL box div to handle the click event
ulBoxDiv.addEventListener('click', function (event) {
    var target = event.target;

    // Check if the clicked element is an LI
    if (target.tagName === 'LI') {
        target.classList.add('checked');
    }
    // Check if the clicked element has the class 'del_btn'
    else if (target.classList.contains('del_btn')) {
        target.parentElement.parentElement.remove();
        console.log("Clicked delete button");
    }
});



ulBoxDiv.addEventListener('click', function (event) {
    var target = event.target;
    console.log("UpdBtn clicked");
    // Check if the clicked element is an LI
    if (target.tagName === 'LI') {
        target.classList.add('checked');
    }
    // Check if the clicked element has the class 'del_btn'
    else if (target.classList.contains('updBtn')) {
        var liElement = target.parentElement.previousElementSibling;
        let updRslt = prompt("Please Update");
        if (updRslt != null) {
            liElement.textContent = updRslt;
        }
        
        console.log("Clicked update button");
    }
});


// Event listener for addTaskBtn
addTaskBtn.addEventListener('click', function () {
    console.log("addTaskBtn clicked");

    // Get the reference to the input field in the modal
    var modal_input_text = document.querySelector('.modal_input_text');
    var taskText = modal_input_text.value.trim();

    // Check if the input field has a value
    if (taskText !== '') {
        // Clone the original ul element
        var ulClone = ulBox.cloneNode(true);

        // Update the text content of the li element in the cloned ul
        var liElements = ulClone.querySelectorAll('li');
        liElements.forEach(function (li) {
            li.textContent = taskText;
        });

        // Append the cloned ul element to the parent div
        ulBoxDiv.appendChild(ulClone);

        // Clear the input field after adding the task
        modal_input_text.value = '';
    } else {
        // Handle case where input field is empty
        console.log('Input field is empty.');
    }
});
