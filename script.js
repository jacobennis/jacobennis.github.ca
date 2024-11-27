
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting normally
function searchContent() {
    // Get the search query from the input field
    const query = document.getElementById('search').value.toLowerCase();

    // Get all section elements
    const sections = document.querySelectorAll('section');
    
    // Loop through each section
    sections.forEach(section => {
        // Get all text content inside each section
        const text = section.textContent.toLowerCase();
        
        // If the text content contains the search query, show the section
        if (text.includes(query) && query !== "") {
            section.style.display = "block"; // Show the section
        } else {
            section.style.display = "none"; // Hide the section
        }
    });
}
function searchContent() {
    const query = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('section');
    
    // Loop through each section
    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        
        // Check if the section contains the query
        if (sectionText.includes(query) && query !== "") {
            section.style.display = "block"; // Show the section
            highlightText(section, query);  // Highlight the search term in the section
        } else {
            section.style.display = "none"; // Hide the section
            removeHighlight(section);  // Remove any existing highlights
        }
    });
}

// Function to highlight the search term
function highlightText(section, query) {
    const regex = new RegExp(query, 'gi');
    section.innerHTML = section.innerHTML.replace(regex, (match) => `<span class="highlight">${match}</span>`);
}

// Function to remove any previous highlights
function removeHighlight(section) {
    section.innerHTML = section.innerHTML.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '');
}

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);
});
