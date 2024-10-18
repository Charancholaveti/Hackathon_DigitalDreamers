document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const professorName = document.getElementById("professor-name").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    if (!professorName || !rating) {
        alert("Please select a professor and rating.");
        return;
    }

    // Submit feedback logic here (e.g., send data to the server)
    console.log("Professor:", professorName);
    console.log("Rating:", rating);
    console.log("Comments:", comments);

    alert("Feedback submitted successfully!");
    
    // Optionally, reset form after submission
    document.getElementById("feedback-form").reset();
});
