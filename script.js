// Sample data for 10 interns
var interns = [
    {
        uniqueId: "D1O2C",
        name: "Ghazala, Zameer",
        contactInfo: "zameerghazala20@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc.html"
    },
    {
        uniqueId: "D103N",
        name: "Aadhi, Bondugula",
        contactInfo: "aadhirock022003@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc2.html"
    },
    {
        uniqueId: "D104F",
        name: "Satish, Kumar",
        contactInfo: "satish2106981396@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc3.html"
    },
    {
        uniqueId: "D105S",
        name: "Manoj, Dasari",
        contactInfo: "dasarimanoj265@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc4.html"
    },
    {
        uniqueId: "D106H",
        name: "Abhinav, Chauhan",
        contactInfo: "abhinavchauhan708212@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc5.html"
    },
    {
        uniqueId: "D107Q",
        name: "Vasanshetti, Tharun",
        contactInfo: "vasanshettitharun@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc6.html"
    },
    {
        uniqueId: "D108P",
        name: "Meenakshi, Sakthivel",
        contactInfo: "meenasruthipranav@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc7.html"
    },
    {
        uniqueId: "D109M",
        name: "AJAY KUMAR, SANGA",
        contactInfo: "sangaajay14@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc8.html"
    },
    {
        uniqueId: "D110X",
        name: "Tolulope, Balogun",
        contactInfo: "tbalog426@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc9.html"
    },
    {
        uniqueId: "D112V",
        name: "Jayesh, Daga",
        contactInfo: "jayeshdaga99@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc10.html"
    },
    {
        uniqueId: "D113B",
        name: "Vikhas, Kumar",
        contactInfo: "rajsoniabhishek@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc11.html"
    },
    {
        uniqueId: "D114T",
        name: "Nidhi, Rathour",
        contactInfo: "nidhirathour@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc12.html"
    },
    {
        uniqueId: "D115Y",
        name: "Kavya, Maruti",
        contactInfo: "kavya.y.maruti@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc13.html"
    },
    {
        uniqueId: "D116I",
        name: "Bharat, Chavhan",
        contactInfo: "bharat.r.chavhan@gmail.com",
        role: "Front End Intern",
        performance: "Good",
        documentsLink: "./DOCUMENTS/doc14.html"
    },
    {
        uniqueId: "D117O",
        name: "Osama, Ansari",
        contactInfo: "osamariaz369@gmail.com ✖",
        role: "DEPARTED ✖",
        performance: "na",
        documentsLink: "./DOCUMENTS/doc15.html"
    },
    {
        uniqueId: "D118U",
        name: "Md muzaffaul, Haq ",
        contactInfo: "muzaffarhaque777@gmail.com",
        role: "DEPARTED ✖",
        performance: "na",
        documentsLink: "./DOCUMENTS/doc16.html"
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
