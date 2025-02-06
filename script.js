// Global variables to store current user and attendance data
let currentUser = null;
let attendanceData = new Map();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('exportBtn').addEventListener('click', exportToExcel);
    
    // Set current date
    const today = new Date().toLocaleDateString();
    document.getElementById('dateInfo').textContent = `Date: ${today}`;

    // Add touch support
    document.addEventListener('touchstart', function() {}, {passive: true});
});

// Handle login submission
function handleLogin(e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Find user
    const user = users.find(u => u.userId === userId && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('dashboardSection').classList.remove('hidden');
        document.getElementById('deptInfo').textContent = 
            `Department: ${user.department} - Year ${user.year}`;
        loadStudentList();
    } else {
        showError('Invalid credentials!');
    }
}

// Handle logout
function handleLogout() {
    currentUser = null;
    attendanceData.clear();
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('dashboardSection').classList.add('hidden');
    document.getElementById('loginForm').reset();
}

// Load student list for current user
function loadStudentList() {
    const attendanceList = document.getElementById('attendanceList');
    attendanceList.innerHTML = '';

    // Get students for current department and year
    const departmentStudents = students[currentUser.department][currentUser.year];

    // Create student list
    departmentStudents.forEach(student => {
        const studentItem = createStudentListItem(student);
        attendanceList.appendChild(studentItem);
    });

    updateAbsentList();
}

// Create student list item with toggle button
function createStudentListItem(student) {
    const div = document.createElement('div');
    div.className = 'student-item';
    
    // Set initial attendance status
    attendanceData.set(student.id, 'present');

    div.innerHTML = `
        <span>${student.name}</span>
        <div class="toggle-btn present" onclick="toggleAttendance(${student.id}, this)">
            <span class="toggle-text present-text">PR</span>
            <span class="toggle-text absent-text">AB</span>
        </div>
    `;

    // Ensure initial state shows PR
    const toggleBtn = div.querySelector('.toggle-btn');
    const presentText = toggleBtn.querySelector('.present-text');
    const absentText = toggleBtn.querySelector('.absent-text');
    presentText.style.opacity = '1';
    absentText.style.opacity = '0';

    return div;
}

// Function to export attendance to Excel (CSV)
function exportToExcel() {
    // Get current date in YYYY-MM-DD format
    const today = new Date();
    const date = today.toISOString().split('T')[0];
    
    // Create CSV content
    let csvContent = "Name,Attendance Status\n";
    
    // Get students for current department and year
    const yearStudents = students[currentUser.department][currentUser.year];
    
    // Add each student's attendance to CSV
    yearStudents.forEach(student => {
        const status = attendanceData.get(student.id) === 'present' ? 'PR' : 'AB';
        csvContent += `${student.name},${status}\n`;
    });
    
    // Create blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    
    // Create file name with department, year and date
    const fileName = `${currentUser.department}_Year${currentUser.year}_${date}.csv`;
    
    // Check if browser supports download attribute
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, fileName);
    } else {
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Toggle attendance status
function toggleAttendance(studentId, toggleBtn) {
    const currentStatus = attendanceData.get(studentId);
    const newStatus = currentStatus === 'present' ? 'absent' : 'present';
    
    attendanceData.set(studentId, newStatus);
    toggleBtn.className = `toggle-btn ${newStatus}`;
    
    // Update the visibility of PR/AB text
    const presentText = toggleBtn.querySelector('.present-text');
    const absentText = toggleBtn.querySelector('.absent-text');
    
    // Add smooth transition
    if (newStatus === 'present') {
        absentText.style.opacity = '0';
        setTimeout(() => {
            presentText.style.opacity = '1';
        }, 150);
    } else {
        presentText.style.opacity = '0';
        setTimeout(() => {
            absentText.style.opacity = '1';
        }, 150);
    }
    
    updateAbsentList();
}

// Update absent students list
function updateAbsentList() {
    const absentList = document.getElementById('absentList');
    absentList.innerHTML = '';

    // Get students for current department and year
    const yearStudents = students[currentUser.department][currentUser.year];
    
    yearStudents.forEach(student => {
        if (attendanceData.get(student.id) === 'absent') {
            const absentItem = createAbsentListItem(student);
            absentList.appendChild(absentItem);
        }
    });
}

// Create absent student list item
function createAbsentListItem(student) {
    const div = document.createElement('div');
    div.className = 'absent-student';
    
    div.innerHTML = `
        <span>${student.name}</span>
        <button class="call-btn" onclick="callStudent('${student.phone}')">
            <i class="fas fa-phone"></i> Call
        </button>
    `;

    return div;
}

// Handle calling student
function callStudent(phoneNumber) {
    // In a real application, this would integrate with a calling system
    window.location.href = `tel:${phoneNumber}`;
}

// Add this new function to show errors
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    document.querySelector('.login-box').appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
} 
