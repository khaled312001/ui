// Shared JavaScript functions for the app

// Check if user is logged in
function checkAuth() {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-gray-900';
    toast.className = `fixed top-20 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-3 rounded-lg z-50 shadow-lg`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Get saved jobs
function getSavedJobs() {
    return JSON.parse(localStorage.getItem('savedJobs') || '[]');
}

// Save job
function saveJob(jobId) {
    let savedJobs = getSavedJobs();
    if (!savedJobs.includes(jobId)) {
        savedJobs.push(jobId);
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        return true;
    }
    return false;
}

// Unsave job
function unsaveJob(jobId) {
    let savedJobs = getSavedJobs();
    const index = savedJobs.indexOf(jobId);
    if (index > -1) {
        savedJobs.splice(index, 1);
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        return true;
    }
    return false;
}

// Get applications
function getApplications() {
    return JSON.parse(localStorage.getItem('applications') || '[]');
}

// Sign out
function signOut() {
    if (confirm('Are you sure you want to sign out?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        window.location.href = 'login.html';
    }
}

