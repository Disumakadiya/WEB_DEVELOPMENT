document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();

    const form = document.getElementById('userForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const userId = document.getElementById('user_id').value;
        if(userId) {
            updateUser(userId);
        } else {
            addUser();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        form.reset();
        document.getElementById('user_id').value = '';
    });
});

// Fetch all users
function fetchUsers() {
    fetch('fetch_users.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('userTableBody');
            tbody.innerHTML = '';
            data.forEach(user => {
                tbody.innerHTML += `
                    <tr>
                        <td>${user.user_id}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.status}</td>
                        <td>
                            <button onclick="editUser(${user.user_id})">Edit</button>
                            <button onclick="deleteUser(${user.user_id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
}

// Add user
function addUser() {
    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('status', document.getElementById('status').value);

    fetch('add_user.php', { method: 'POST', body: formData })
        .then(() => {
            fetchUsers();
            document.getElementById('userForm').reset();
        });
}

// Edit user
function editUser(id) {
    fetch('fetch_users.php')
        .then(response => response.json())
        .then(data => {
            const user = data.find(u => u.user_id == id);
            document.getElementById('user_id').value = user.user_id;
            document.getElementById('username').value = user.username;
            document.getElementById('email').value = user.email;
            document.getElementById('status').value = user.status;
            document.getElementById('password').value = '';
        });
}

// Update user
function updateUser(id) {
    const formData = new FormData();
    formData.append('user_id', id);
    formData.append('username', document.getElementById('username').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('status', document.getElementById('status').value);

    fetch('update_user.php', { method: 'POST', body: formData })
        .then(() => {
            fetchUsers();
            document.getElementById('userForm').reset();
            document.getElementById('user_id').value = '';
        });
}

// Delete user
function deleteUser(id) {
    if(confirm('Are you sure you want to delete this user?')) {
        const formData = new FormData();
        formData.append('user_id', id);
        fetch('delete_user.php', { method: 'POST', body: formData })
            .then(() => fetchUsers());
    }
}
