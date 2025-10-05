document.addEventListener('DOMContentLoaded', function() {
    fetchEvents();

    const form = document.getElementById('eventForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const eventId = document.getElementById('event_id').value;
        if(eventId) {
            updateEvent(eventId);
        } else {
            addEvent();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        form.reset();
        document.getElementById('event_id').value = '';
    });
});

// Fetch events
function fetchEvents() {
    fetch('fetch_events.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('eventTableBody');
            tbody.innerHTML = '';
            data.forEach(event => {
                tbody.innerHTML += `
                    <tr>
                        <td>${event.event_id}</td>
                        <td>${event.title}</td>
                        <td>${event.date}</td>
                        <td>${event.location}</td>
                        <td>${event.status}</td>
                        <td>
                            <button onclick="editEvent(${event.event_id})">Edit</button>
                            <button onclick="deleteEvent(${event.event_id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
}

// Add event
function addEvent() {
    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('date', document.getElementById('date').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('status', document.getElementById('status').value);

    fetch('add_event.php', { method: 'POST', body: formData })
        .then(() => {
            fetchEvents();
            document.getElementById('eventForm').reset();
        });
}

// Edit event
function editEvent(id) {
    fetch('fetch_events.php')
        .then(response => response.json())
        .then(data => {
            const event = data.find(e => e.event_id == id);
            document.getElementById('event_id').value = event.event_id;
            document.getElementById('title').value = event.title;
            document.getElementById('date').value = event.date;
            document.getElementById('location').value = event.location;
            document.getElementById('status').value = event.status;
        });
}

// Update event
function updateEvent(id) {
    const formData = new FormData();
    formData.append('event_id', id);
    formData.append('title', document.getElementById('title').value);
    formData.append('date', document.getElementById('date').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('status', document.getElementById('status').value);

    fetch('update_event.php', { method: 'POST', body: formData })
        .then(() => {
            fetchEvents();
            document.getElementById('eventForm').reset();
            document.getElementById('event_id').value = '';
        });
}

// Delete event
function deleteEvent(id) {
    if(confirm('Are you sure you want to delete this event?')) {
        const formData = new FormData();
        formData.append('event_id', id);
        fetch('delete_event.php', { method: 'POST', body: formData })
            .then(() => fetchEvents());
    }
}
