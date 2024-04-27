// Sample data for 10 interns
var interns = [
    {
        uniqueId: "D1O2C",
        name: "Ghazala, Zameer",
        contactInfo: "zameerghazala20@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D103N",
        name: "Aadhi, Bondugula",
        contactInfo: "aadhirock022003@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D104F",
        name: "Satish, Kumar",
        contactInfo: "satish2106981396@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D105S",
        name: "Manoj, Dasari",
        contactInfo: "dasarimanoj265@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D106H",
        name: "Abhinav, Chauhan",
        contactInfo: "abhinavchauhan708212@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D107Q",
        name: "Vasanshetti, Tharun",
        contactInfo: "vasanshettitharun@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D108P",
        name: "Meenakshi, Sakthivel",
        contactInfo: "meenasruthipranav@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D109M",
        name: "AJAY KUMAR, SANGA",
        contactInfo: "sangaajay14@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D110X",
        name: "Tolulope, Balogun",
        contactInfo: "tbalog426@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D112V",
        name: "Jayesh, Daga",
        contactInfo: "jayeshdaga99@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D113B",
        name: "Vikhas, Kumar",
        contactInfo: "rajsoniabhishek@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D114T",
        name: "Nidhi, Rathour",
        contactInfo: "nidhirathour@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D115Y",
        name: "Kavya, Maruti",
        contactInfo: "kavya.y.maruti@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D116I",
        name: "Bharat, Chavhan",
        contactInfo: "bharat.r.chavhan@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D117O",
        name: "Osama, Ansari",
        contactInfo: "osamariaz369@gmail.com ✖",
        role: "DEPARTED ✖",
        performance: "na",
        documentsLink: "http://example.com/documents"
    },
    {
        uniqueId: "D118U",
        name: "Md muzaffaul, Haq ",
        contactInfo: "muzaffarhaque777@gmail.com",
        role: "DEPARTED ✖",
        performance: "na",
        documentsLink: "http://example.com/documents"
    },
];

document.getElementById("idForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve unique ID entered by the intern
    var uniqueId = document.getElementById("uniqueId").value;

    // Search for the intern information based on the unique ID
    var intern = interns.find(function(intern) {
        return intern.uniqueId === uniqueId;
    });

    if (intern) {
        // Display intern information
        document.getElementById("internName").textContent = intern.name;
        document.getElementById("contactInfo").textContent = intern.contactInfo;
        document.getElementById("role").textContent = intern.role;
        document.getElementById("performance").textContent = intern.performance;
        document.getElementById("documentsLink").href = intern.documentsLink;
        
        // Show intern information section
        document.getElementById("internInfo").style.display = "block";
    } else {
        // Show error message if intern with provided ID is not found
        alert("Intern with provided ID not found.");
    }
});

document.getElementById("helpButton").addEventListener("click", function() {
    // Open default email client with pre-filled recipient email address
    window.location.href = "mailto:docq.help@gmail.com";
});
