
function zoomIn(element) {
        element.children[0].style.transition = "transform 0.2s ease-in-out";
        element.children[0].style.transform = "scale(1.05)";
}

function zoomOut(element) {
        element.children[0].style.transition = "transform 0.2s ease-in-out";
        element.children[0].style.transform = "scale(1)";
}

function selectRestaurant(restaurantName) {
    // Handle the selection logic here (e.g., set a cookie, update a variable, etc.)
    console.log('Selected Restaurant:', restaurantName);
    // Redirect or perform other actions based on the selected restaurant
}

    // JavaScript function to scroll to a specific section
    function scrollToSection(menu) {
        var section = document.getElementById(menu);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }



    $(document).ready(function () {
      $("#submitButton").click(function () {
          // Add your form submission logic here (e.g., using Ajax to send data to the server)

          // Display submission message
          $("#submissionMessage").show();
      });
  });