document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can customize this part to handle the form submission, e.g., send the data to a server, save it to a database, etc.
        const recipeName = document.getElementById('recipeName').value;
        const feedback = document.getElementById('feedback').value;

        // For demonstration purposes, let's just log the values to the console.
        console.log(`Recipe Name: ${recipeName}`);
        console.log(`Feedback/Question: ${feedback}`);

        // You can add your logic here to handle the form submission (e.g., send data to a server).
        // For now, let's just show an alert indicating the form submission.
        alert('Form submitted successfully!');
    });
});
