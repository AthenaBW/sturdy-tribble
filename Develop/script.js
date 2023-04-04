// Function Wrapped in jQuery (Executed once HTML is loaded)

$(function () {

  // For the save button to execute when clicked
  // Function will retrieve text value of the sibling elements with class "description" 
  // Stores inside "task" and parent element stored inside "hour"
  // Local storage then called so data remains saved for user

  $(".saveBtn").on("click", function () {
    const task = $(this).siblings(".description").val();
    const hour = $(this).parent().attr("id");
    localStorage.setItem(hour, task);

  });

  function addTimeClass() {

    // Current hour retrieved using "date" object

    var currentHour = new Date().getHours();

    // Loops through each time-block div then recieves hour from the "ID" of div

    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("-")[1]);

      // compares the hour parsed to the current hour to determine whether it's in the past, present, or future (class)

      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // Code for the local saved tasks lopping through each hour depending on what is in local storage ( ID hour class description)
  // "val()" used to select all description classes children of "hour-[i]" (ID's 9-17)
  //  Local storage for current hour retrieved
  
  for (let i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
  }

  // For the current date added in header
  const date = document.querySelector("#currentDay");
  date.textContent = dayjs().format("dddd MM, YYYY");


  // Adding the time classes once the page loads 
  // Renders the color change of blocks depending on past present or future of users local time 

  addTimeClass();
});



