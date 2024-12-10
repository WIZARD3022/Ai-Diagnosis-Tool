document.getElementById('diagnoseButton').addEventListener('click', function () {

    const xray = document.getElementById('xray').checked;
    const ctscan = document.getElementById('ctscan').checked;
    const mri = document.getElementById('mri').checked;

    if (xray) {
        // alert("X-Ray is selected");

        const fileInput = document.getElementById('imageUpload');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please upload an image.');
            return;
        }

        document.getElementById('diagnosisResult').style.display = 'block';
        document.getElementById('resultText').innerHTML = `processing...`;

        const formData = new FormData();
        formData.append('imageUpload', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('diagnosisResult').style.display = 'block';
                console.log(data.diagnosis);
                document.getElementById('resultText').innerHTML = data.diagnosis;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error uploading file: ' + error.message);
            });

    } else if (ctscan) {
        alert("Sorry currently CT-Scan is not working which you selected");
    } else if (mri) {
        alert("Sorry currently MRI is not working which you selected");
    } else {
        alert("No option selected! Please select Diagnosis Type");
    }
});

document.getElementById('deleteButton').addEventListener('click', function () {
    const fileInput = document.getElementById('imageUpload');
    fileInput.value = ''; // Clear the file input
    document.getElementById('imagePreview').innerHTML = ''; // Clear the preview
    document.getElementById('diagnosisResult').style.display = 'none'; // Hide diagnosis result
});

document.getElementById('imageUpload').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imagePreview').innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        }
        reader.readAsDataURL(file);
    }
});