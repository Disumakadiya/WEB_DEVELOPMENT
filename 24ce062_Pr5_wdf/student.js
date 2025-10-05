// Mock JSON Data
const data = {
  events: [
    { id: 1, name: "Orientation Day", date: "2025-07-01" },
    { id: 2, name: "Science Fair", date: "2025-07-10" },
    { id: 3, name: "Sports Meet", date: "2025-07-20" }
  ],
  students: [
    { id: 1, name: "Rahul", age: 19, course: "B.Tech" },
    { id: 2, name: "Aditi", age: 18, course: "B.Sc" },
    { id: 3, name: "Ravi", age: 20, course: "MBA" },
    { id: 4, name: "Sneha", age: 21, course: "B.Com" },
    { id: 5, name: "Kunal", age: 22, course: "BCA" },
    { id: 6, name: "Meera", age: 19, course: "M.Tech" }
  ]
};

// Display Events
function displayEvents() {
  const eventList = document.getElementById("eventList");
  eventList.innerHTML = "";
  data.events.forEach(ev => {
    const li = document.createElement("li");
    li.textContent = `${ev.name} - ${ev.date}`;
    eventList.appendChild(li);
  });
}

// Pagination for Students
let currentPage = 1;
const studentsPerPage = 2;

function displayStudents(page) {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  const start = (page - 1) * studentsPerPage;
  const end = start + studentsPerPage;
  const paginatedStudents = data.students.slice(start, end);

  paginatedStudents.forEach(st => {
    const div = document.createElement("div");
    div.className = "student";
    div.innerHTML = `<span>${st.name} (Age: ${st.age})</span><span>${st.course}</span>`;
    studentList.appendChild(div);
  });

  renderPagination();
}

// Render Pagination Buttons
function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(data.students.length / studentsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      displayStudents(currentPage);
    });
    pagination.appendChild(btn);
  }
}

// Initialize
displayEvents();
displayStudents(currentPage);
