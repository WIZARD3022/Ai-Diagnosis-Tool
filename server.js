const express = require('express');
const multer = require('multer');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Set storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads')); // Save to the correct 'uploads' folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Initialize multer with the defined storage
const upload = multer({ storage: storage }); // Initialize multer correctly

// Serve static files (your index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Route for file upload
app.post('/upload', upload.single('imageUpload'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const filePath = path.join(__dirname, 'uploads', req.file.filename);

    // Call Python script with the image file
    const pythonProcess = spawn('python', ['fracture_checker.py', filePath]);

    let output = ''; // Collect data from Python process
    let errorOccurred = false; // Track if an error happens

    pythonProcess.stdout.on('data', (data) => {
        output += data.toString(); // Collect the result from Python
    });

    pythonProcess.stderr.on('data', (data) => {
        errorOccurred = true;
        console.error(`Error: ${data}`);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Error processing the image' });
        }
    });

    pythonProcess.on('close', (code) => {
        if (!errorOccurred && !res.headersSent) {
            // Only send the response if there was no error and the headers were not already sent
            res.json({ diagnosis: output.trim() });
        }
        // Optionally delete the file after processing
        fs.unlink(filePath, (err) => {
            if (err) console.error('Failed to delete file:', err);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
