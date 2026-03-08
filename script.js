// DOM Elements
const goBtn = document.getElementById('go-btn');
const mainSpeed = document.getElementById('main-speed');
const pingValue = document.getElementById('ping-value');
const downloadValue = document.getElementById('download-value');
const uploadValue = document.getElementById('upload-value');
const progressBar = document.getElementById('progress-bar');
const statusText = document.getElementById('status-text');

// State Variables
let isTesting = false;

// Event Listener
goBtn.addEventListener('click', () => {
    if (isTesting) return;
    startTest();
});

// Test Functions
function startTest() {
    isTesting = true;
    goBtn.classList.add('disabled');
    
    // Run tests in sequence
    runPingTest();
    setTimeout(() => runDownloadTest(), 2000);
    setTimeout(() => runUploadTest(), 5000);
}

function runPingTest() {
    // Ping test logic
    let ping = 0;
    const pingInterval = setInterval(() => {
        ping = Math.floor(Math.random() * 30) + 10;
        pingValue.innerText = ping;
        mainSpeed.innerText = ping;
        progressBar.style.width = '20%';
    }, 100);
    
    setTimeout(() => clearInterval(pingInterval), 1500);
}

function runDownloadTest() {
    // Download test logic
    let download = 0;
    const targetDownload = Math.floor(Math.random() * 200) + 50;
    
    const downloadInterval = setInterval(() => {
        download += Math.floor(Math.random() * 10) + 5;
        if (download > targetDownload) download = targetDownload;
        
        downloadValue.innerText = download;
        mainSpeed.innerText = download;
        progressBar.style.width = '50%';
    }, 100);
    
    setTimeout(() => clearInterval(downloadInterval), 3000);
}

function runUploadTest() {
    // Upload test logic
    let upload = 0;
    const targetUpload = Math.floor(Math.random() * 100) + 20;
    
    const uploadInterval = setInterval(() => {
        upload += Math.floor(Math.random() * 5) + 3;
        if (upload > targetUpload) upload = targetUpload;
        
        uploadValue.innerText = upload;
        mainSpeed.innerText = upload;
        progressBar.style.width = '80%';
    }, 100);
    
    setTimeout(() => {
        clearInterval(uploadInterval);
        finishTest();
    }, 3000);
}

function finishTest() {
    progressBar.style.width = '100%';
    statusText.innerText = 'Test Complete!';
    goBtn.classList.remove('disabled');
    isTesting = false;
}