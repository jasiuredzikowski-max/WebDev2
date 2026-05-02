
// Script for index page!
if (document.getElementById('cs2Image') &&
    document.getElementById('gymImage') &&
    document.getElementById('welcomeText')) {

const cs2Image = document.getElementById('cs2Image');
const gymImage = document.getElementById('gymImage');
const welcomeText = document.getElementById('welcomeText');

// Changes welcome text based on time of day
const hour = new Date().getHours();

if (hour < 12) {
    welcomeText.textContent = 'Good morning! Welcome to my personal website!';
} else if (hour < 18) {
    welcomeText.textContent = 'Good afternoon! Welcome to my personal website!';
} else {
    welcomeText.textContent = 'Good evening! Welcome to my personal website!';
}


//expands on hover (cs2 image)
cs2Image.addEventListener('mouseover', () => {
    cs2Image.style.transform = 'scale(1.1)';
    cs2Image.style.transition = 'transform 0.3s ease';
});

//returns to normal size when not hovered (cs2 image)
cs2Image.addEventListener('mouseout', () => {
    cs2Image.style.transform = 'scale(1)';
    cs2Image.style.transition = 'transform 0.3s ease';
});

//expands on hover (gym image)
gymImage.addEventListener('mouseover', () => {
    gymImage.style.transform = 'scale(1.1)';
    gymImage.style.transition = 'transform 0.3s ease';
});

//returns to normal size when not hovered (gym image)
gymImage.addEventListener('mouseout', () => {
    gymImage.style.transform = 'scale(1)';
    gymImage.style.transition = 'transform 0.3s ease';
});
    }
// ---------------------------------------------------


// Script for data page!

if (document.getElementById("hobby-template")) {

// Dataset of hobbies
let hobbies = JSON.parse(localStorage.getItem('hobbies')) || [
    { hobby: 'Gaming', category: "Leisure", hoursPerWeek: 15 },
    { hobby: 'Gym', category: "Fitness", hoursPerWeek: 5 },
    { hobby: 'Cooking', category: "Food", hoursPerWeek: 6 },
    { hobby: 'Traveling', category: "Leisure", hoursPerWeek: 2 },    
    { hobby: 'Reading', category: "Education", hoursPerWeek: 4 }
];

function renderData()  {
    const template = Handlebars.compile(document.getElementById('hobby-template').innerHTML);
    
    document.getElementById('displayArea').innerHTML = template(hobbies);
    
    localStorage.setItem('hobbies', JSON.stringify(hobbies));

    const total = hobbies.reduce((sum, h) => sum + h.hoursPerWeek, 0);
    document.getElementById('totalHours').textContent = `Total hours spent on hobbies per week: ${total}`;

    //Delete button event listeners
   document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            hobbies.splice(index, 1);
            renderData();
        });
    });
}

renderData();

//Event listner for form
document.getElementById('addForm').addEventListener('submit', (e) => {
    const newObject = {
        hobby: document.getElementById('hobby').value,
        category: document.getElementById('category').value,
        hoursPerWeek: parseInt(document.getElementById('hoursPerWeek').value)   
    };
    hobbies.push(newObject);
    renderData();        
});


//Search functionality
document.getElementById("searchBox").addEventListener("input", () => {
    const term = document.getElementById("searchBox").value.toLowerCase();

    const filtered = hobbies.filter(h =>
        h.hobby.toLowerCase().includes(term)
    );

    const template = Handlebars.compile(
        document.getElementById("hobby-template").innerHTML
    );
    document.getElementById("displayArea").innerHTML = template(filtered);
});

//A-Z sorting
document.getElementById("sortAsc").addEventListener("click", () => {
    hobbies.sort((a, b) => a.hobby.localeCompare(b.hobby));
    renderData();
});

document.getElementById("sortDesc").addEventListener("click", () => {
    hobbies.sort((a, b) => b.hobby.localeCompare(a.hobby));
    renderData();
});

renderData();
}

// Script for about page?
if (document.getElementById("commentForm")) {

    // Load comments (or start with defaults)
    let comments = JSON.parse(localStorage.getItem("comments")) || [
        { name: "Alice", message: "Great website!" },
        { name: "John", message: "Very useful project." }
    ];

    // Render comments using Handlebars
    function renderComments() {
        const template = Handlebars.compile(
            document.getElementById("comment-template").innerHTML
        );

        // Most recent first
        const reversed = [...comments].reverse();

        document.getElementById("commentDisplay").innerHTML = template(reversed);

        // Save to localStorage
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    renderComments();

    // Add new comment
    document.getElementById("commentForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("commentName").value;
        const message = document.getElementById("commentMessage").value;

        comments.push({ name, message });

        renderComments();

        e.target.reset();
    });

    // Show/Hide interactive feature
    document.getElementById("toggleInfo").addEventListener("click", () => {
        const extra = document.getElementById("extraInfo");
        extra.style.display = extra.style.display === "none" ? "block" : "none";
    });
}  

