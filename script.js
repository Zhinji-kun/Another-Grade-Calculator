function calculateGrade() {
    const essay = validateInput(document.getElementById("essay").value);
    const pvm = validateInput(document.getElementById("pvm").value);
    const javaBasics = validateInput(document.getElementById("javaBasics").value);
    const jsIntro = validateInput(document.getElementById("jsIntro").value);
    const exam = validateInput(document.getElementById("exam").value);
    const absences = validateAbsences(document.getElementById("absences").value);

    if (essay === null || pvm === null || javaBasics === null || jsIntro === null || exam === null || absences === null) {
        return;
    }

    if (absences >= 4) {
        document.getElementById("result").innerText = "Result: 0 (Failed due to absences)";
        return;
    }

    const prelimQuizzes = (essay + pvm + javaBasics + jsIntro) / 4;
    const attendanceScore = Math.max(0, 100 - (absences * 10));
    const prelimClassStanding = (0.6 * prelimQuizzes) + (0.4 * attendanceScore);
    const prelimGrade = (0.6 * exam) + (0.4 * prelimClassStanding);

    document.getElementById("result").innerText = `Result: ${prelimGrade.toFixed(2)}`;
}

function validateInput(value) {
    if (isNaN(value) || value.trim() === "") {
        alert("Invalid input! Please enter a number.");
        return null;
    }
    const num = parseFloat(value);
    if (num < 0 || num > 100) {
        alert("Invalid input! Enter a number between 0 and 100.");
        return null;
    }
    return num;
}

function validateAbsences(value) {
    if (isNaN(value) || value.trim() === "") {
        alert("Invalid input! Please enter a number.");
        return null;
    }
    const num = parseInt(value);
    if (num < 0 || num > 10) {
        alert("Invalid input! Absences must be between 0 and 10.");
        return null;
    }
    return num;
}
