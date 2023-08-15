
// The first project
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const myImage = document.getElementById("myImage");
    let imageVisible = true;

    myImage.style.display = "none";
  
    toggleButton.addEventListener("click", function() {
      if (imageVisible) {
        myImage.style.display = "block";
      } else {
        myImage.style.display = "none";
      }
      imageVisible = !imageVisible;
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const container = document.getElementById("container");
    let containerVisible = true;

    container.style.display = "none";

    toggleButton.addEventListener("click", function() {
        if (containerVisible) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
        containerVisible = !containerVisible;



      });

});

// The second project
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const myImage = document.getElementById("myImage");
    let imageVisible = true;

    myImage.style.display = "none";
  
    toggleButton.addEventListener("click", function() {
      if (imageVisible) {
        myImage.style.display = "block";
      } else {
        myImage.style.display = "none";
      }
      imageVisible = !imageVisible;
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton1");
    const container1 = document.getElementById("container1");
    let container1Visible = true;

    container1.style.display = "none";

    toggleButton.addEventListener("click", function() {
        if (container1Visible) {
            container1.style.display = "block";
        } else {
            container1.style.display = "none";
        }
        container1Visible = !container1Visible;



      });

});