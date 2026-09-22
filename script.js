const form = document.getElementById("grievanceForm");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Your grievance has been submitted successfully!");

    });
}