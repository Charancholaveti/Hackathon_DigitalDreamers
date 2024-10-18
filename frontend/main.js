document.addEventListener("DOMContentLoaded", () => {
    const semesterDropdown = document.getElementById('semester-dropdown');
    const theoryDropdown = document.getElementById('theory-dropdown');
    const theoryLecturerDropdown = document.getElementById('theory-lecturer-dropdown');
    const theoryLecturerDetails = document.getElementById('theory-lecturer-details');

    const labDropdown = document.getElementById('lab-dropdown');
    const labLecturerDropdown = document.getElementById('lab-lecturer-dropdown');
    const labLecturerDetails = document.getElementById('lab-lecturer-details');

    const maxTheory = 4;
    const maxLab = 2;

    let selectedTheoryCount = 0;
    let selectedLabCount = 0;

    // Populate semester-based subjects
    semesterDropdown.addEventListener('change', function () {
        const selectedSemester = this.value;

        // Clear previous options
        theoryDropdown.innerHTML = '<option value="" disabled selected>Select Theory Subject</option>';
        labDropdown.innerHTML = '<option value="" disabled selected>Select Lab Subject</option>';
        theoryLecturerDropdown.innerHTML = '<option value="" disabled selected>Select Lecturer</option>';
        labLecturerDropdown.innerHTML = '<option value="" disabled selected>Select Lecturer</option>';

        // Populate subjects based on semester
        if (selectedSemester === '1') {
            theoryDropdown.innerHTML += '<option value="LAAC">Linear Algebra & Advanced Calculus</option>';
            theoryDropdown.innerHTML += '<option value="Physics">Applied  Physics</option>';
            theoryDropdown.innerHTML += '<option value="ED">Engineering Drawing</option>';
            theoryDropdown.innerHTML += '<option value="BEE">Basic Electrical Engineering</option>';
            theoryDropdown.innerHTML += '<option value="PSP">Problem Solving & Programming</option>';
            labDropdown.innerHTML += '<option value="Physics Lab">Physics Lab</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="PSP Lab">PSP Lab</option>';
        } else if (selectedSemester === '2') {
            theoryDropdown.innerHTML += '<option value="Chemistry">Chemistry</option>';
            theoryDropdown.innerHTML += '<option value="Python Programming"> Python Programming</option>';
            theoryDropdown.innerHTML += '<option value="DS">Data Structers</option>';
            theoryDropdown.innerHTML += '<option value="EFE">English For Engineers</option>';
            theoryDropdown.innerHTML += '<option value="DEVC">Differntial Equations & Vector Calculas</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="DS">DS Lab</option>';
            labDropdown.innerHTML += '<option value="DELL Lab">Digital English Language Lab</option>';
        }
        // Add more cases for other semesters
        else if (selectedSemester === '3') {
            theoryDropdown.innerHTML += '<option value="Chemistry">Chemistry</option>';
            theoryDropdown.innerHTML += '<option value="Python Programming"> Python Programming</option>';
            theoryDropdown.innerHTML += '<option value="DS">Data Structers</option>';
            theoryDropdown.innerHTML += '<option value="EFE">English For Engineers</option>';
            theoryDropdown.innerHTML += '<option value="DEVC">Differntial Equations & Vector Calculas</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="DS">DS Lab</option>';
            labDropdown.innerHTML += '<option value="DELL Lab">Digital English Language Lab</option>';
        }
        else if (selectedSemester === '4') {
            theoryDropdown.innerHTML += '<option value="Chemistry">Chemistry</option>';
            theoryDropdown.innerHTML += '<option value="Python Programming"> Python Programming</option>';
            theoryDropdown.innerHTML += '<option value="DS">Data Structers</option>';
            theoryDropdown.innerHTML += '<option value="EFE">English For Engineers</option>';
            theoryDropdown.innerHTML += '<option value="DEVC">Differntial Equations & Vector Calculas</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="DS">DS Lab</option>';
            labDropdown.innerHTML += '<option value="DELL Lab">Digital English Language Lab</option>';
        }
        else if (selectedSemester === '5') {
            theoryDropdown.innerHTML += '<option value="Chemistry">Chemistry</option>';
            theoryDropdown.innerHTML += '<option value="Python Programming"> Python Programming</option>';
            theoryDropdown.innerHTML += '<option value="DS">Data Structers</option>';
            theoryDropdown.innerHTML += '<option value="EFE">English For Engineers</option>';
            theoryDropdown.innerHTML += '<option value="DEVC">Differntial Equations & Vector Calculas</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="DS">DS Lab</option>';
            labDropdown.innerHTML += '<option value="DELL Lab">Digital English Language Lab</option>';
        }else if (selectedSemester === '6') {
            theoryDropdown.innerHTML += '<option value="Chemistry">Chemistry</option>';
            theoryDropdown.innerHTML += '<option value="Python Programming"> Python Programming</option>';
            theoryDropdown.innerHTML += '<option value="DS">Data Structers</option>';
            theoryDropdown.innerHTML += '<option value="EFE">English For Engineers</option>';
            theoryDropdown.innerHTML += '<option value="DEVC">Differntial Equations & Vector Calculas</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="DS">DS Lab</option>';
            labDropdown.innerHTML += '<option value="DELL Lab">Digital English Language Lab</option>';
        }else if (selectedSemester === '7') {
            theoryDropdown.innerHTML += '<option value="Chemistry">Chemistry</option>';
            theoryDropdown.innerHTML += '<option value="Python Programming"> Python Programming</option>';
            theoryDropdown.innerHTML += '<option value="DS">Data Structers</option>';
            theoryDropdown.innerHTML += '<option value="EFE">English For Engineers</option>';
            theoryDropdown.innerHTML += '<option value="DEVC">Differntial Equations & Vector Calculas</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="DS">DS Lab</option>';
            labDropdown.innerHTML += '<option value="DELL Lab">Digital English Language Lab</option>';
        }else if (selectedSemester === '8') {
            theoryDropdown.innerHTML += '<option value="Chemistry">Chemistry</option>';
            theoryDropdown.innerHTML += '<option value="Python Programming"> Python Programming</option>';
            theoryDropdown.innerHTML += '<option value="DS">Data Structers</option>';
            theoryDropdown.innerHTML += '<option value="EFE">English For Engineers</option>';
            theoryDropdown.innerHTML += '<option value="DEVC">Differntial Equations & Vector Calculas</option>';
            labDropdown.innerHTML += '<option value="Chemistry Lab">Chemistry Lab</option>';
            labDropdown.innerHTML += '<option value="DS">DS Lab</option>';
            labDropdown.innerHTML += '<option value="DELL Lab">Digital English Language Lab</option>';
        }

        theoryLecturerDropdown.disabled = true;
        labLecturerDropdown.disabled = true;
    });

    // Enable lecturer dropdown after selecting a theory subject
    theoryDropdown.addEventListener('change', () => {
        theoryLecturerDropdown.disabled = false;

        // Populate lecturers based on selected subject
        const selectedTheorySubject = theoryDropdown.value;
        theoryLecturerDropdown.innerHTML = '<option value="" disabled selected>Select Lecturer</option>';

        if (selectedTheorySubject === 'LAAC') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Smith">Dr. Smith</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Davis">Prof. Davis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
            
        } else if (selectedTheorySubject === 'Physics') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }
        else if (selectedTheorySubject === 'ED') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedTheorySubject === 'BEE') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedTheorySubject === 'PSP') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedTheorySubject === 'Chemistry') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedTheorySubject === 'Python Programming') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedTheorySubject === 'DS') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedTheorySubject === 'EFE') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedTheorySubject === 'DEVC') {
            theoryLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            theoryLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }
        // Add more lecturers for other subjects
    });

    // Display lecturer details after selecting a lecturer for theory
    theoryLecturerDropdown.addEventListener('change', () => {
        theoryLecturerDetails.style.display = 'block';
        const selectedLecturer = theoryLecturerDropdown.value;
        theoryLecturerDetails.innerHTML = `<p>Selected Lecturer: ${selectedLecturer}</p><p>Experience: 10 years</p><p>Rating: 4.5/5</p></p>
        <p>Patents:Design patents,electronics patents</p></p><p>Projects:Traffic monitoring system,Weather monitoring System</p>`;
    });

    // Enable lecturer dropdown after selecting a lab subject
    labDropdown.addEventListener('change', () => {
        labLecturerDropdown.disabled = false;

        // Populate lecturers based on selected lab subject
        const selectedLabSubject = labDropdown.value;
        labLecturerDropdown.innerHTML = '<option value="" disabled selected>Select Lecturer</option>';

        if (selectedLabSubject === 'Physics Lab') {
            labLecturerDropdown.innerHTML += '<option value="Dr. Clark">Dr. Clark</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Lewis">Prof. Lewis</option>';
        }else if (selectedLabSubject === 'DELL Lab') {
            labLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedLabSubject === 'Chemistry Lab') {
            labLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedLabSubject === 'PSP Lab') {
            labLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }else if (selectedLabSubject === 'DS') {
            labLecturerDropdown.innerHTML += '<option value="Dr. Brown">Dr. Brown</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Johnson">Prof. Johnson</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Ravis">Prof. Ravis</option>';
            labLecturerDropdown.innerHTML += '<option value="Prof. Calvis">Prof. Calvis</option>';
        }
        // Add more lecturers for other lab subjects
    });

    // Display lecturer details after selecting a lecturer for lab
    labLecturerDropdown.addEventListener('change', () => {
        labLecturerDetails.style.display = 'block';
        const selectedLecturer = labLecturerDropdown.value;
        labLecturerDetails.innerHTML = `<p>Selected Lecturer: ${selectedLecturer}</p><p>Experience: 8 years</p><p>Rating: 4.3/5</p>`;
    });
});
