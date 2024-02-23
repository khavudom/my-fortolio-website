export const arrayCombination = [
  {
    projectName: "Change Background color",
    index: 1,
    gitHubSrc: "https://github.com/RuenChanPiseth/change-bg-color-for-beginner",
    productSrc:
      "https://65d624ad27a8aad316901b8f--taupe-clafoutis-bfe240.netlify.app",
    explaination:
      ' This project creates a simple background color changerusing HTML, CSS, and JavaScript. It consists of acontainer with two buttons: one to change the backgroundcolor and another to stop the color change animation.JavaScript generates random hexadecimal color codes andapplies them to the background at regular intervals whenthe "Change Background Color" button is clicked. Clickingthe "Stop" button stops the animation. The project helpspractice DOM manipulation, event handling, and workingwith intervals in JavaScript.',
  },
  {
    projectName: "BMI calculator",
    index: 2,
    gitHubSrc: "https://github.com/RuenChanPiseth/BMI-calculator-for-beginner",
    productSrc: "https://delicate-meringue-07ca09.netlify.app",
    explaination:
      "HTML: Sets up the structure of the calculator with input fields for height and weight, a button to calculate, and an area to display the result.CSS: Styles the calculator to make it look nice and organized.JavaScript: Handles the calculation and display of BMI.It selects elements and adds functions to calculate BMI and validate inputs.When the user clicks the button, it computes BMI and shows the result.It also checks if the input values are valid (not negative and within reasonable bounds).Learning: This project teaches about interacting with web elements, performing calculations, and handling user inputs.Intermediate Level: There's more advanced code commented out, showing a different, more concise approach to achieve the same functionality",
  },
  {
    projectName: "Digital Clock",
    index: 3,
    gitHubSrc: "https://github.com/RuenChanPiseth/digital-clock",
    productSrc: "https://ruenchanpiseth.github.io/digital-clock/",
    explaination:
      "HTML Setup : Sets up the structure of the webpage with a <div> element for the clock container. CSS Styling : Styles the clock container and the webpage body for appearance. JavaScript Logic : Selects the clock container using document.querySelector.Defines a function named display to update the clock.Inside display : Retrieves current time components (hours, minutes, seconds).Determines AM/PM and converts hours to 12-hour format.Formats time with leading zeros and updates the clock display.Uses setInterval to call display every second for real-time updates.Intermediate and Advanced Levels:Includes commented-out code sections for intermediate and advanced level implementations.These sections offer alternative approaches to formatting time and improving code readability.",
  },
  {
    projectName: "To Do List App",
    index: 4,
    gitHubSrc: "https://github.com/RuenChanPiseth/to-do-li-for-beginner",
    productSrc: "https://ruenchanpiseth.github.io/to-do-li-for-beginner/",
    explaination:
      'HTML Structure:The HTML file defines the basic structure of the To-Do list, including a title, an input field, an "Add" button, and a list container.CSS Styling:CSS styles are applied to enhance the appearance and layout of the To-Do list elements, providing a visually appealing interface.JavaScript Functionality:Initialization:JavaScript selects necessary DOM elements, retrieves existing list items from local storage, and populates the list.Adding Items:The addItem function adds a new list item when the user clicks "Add", saving it to local storage.Deleting Items:Event delegation handles clicks on delete buttons, removing the corresponding list item and updating local storage.Keyboard Shortcut:Users can press Enter to add an item, in addition to clicking the "Add" button.',
  },
];
