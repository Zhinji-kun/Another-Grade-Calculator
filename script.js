document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateBtn").addEventListener("click", function () {
        let java1 = parseFloat(document.getElementById("java1").value) || 0;
        let java2 = parseFloat(document.getElementById("java2").value) || 0;
        let js1 = parseFloat(document.getElementById("js1").value) || 0;
        let js2 = parseFloat(document.getElementById("js2").value) || 0;
        
        let mp1 = parseFloat(document.getElementById("mp1").value) || 0;
        let mp2 = parseFloat(document.getElementById("mp2").value) || 0;
        let mp3 = parseFloat(document.getElementById("mp3").value) || 0;
        let mp3Docu = parseFloat(document.getElementById("mp3Docu").value) || 0;
        
        let absences = parseInt(document.getElementById("absences").value) || 0;
        
        let attendance = Math.max(100 - (10 * absences), 0);
        let labWork = (mp1 + mp2 + mp3 + mp3Docu) / 4;
        let prelimClassStanding = (0.6 * labWork) + (0.4 * attendance);
        let prelimExam = (0.2 * java1) + (0.3 * java2) + (0.2 * js1) + (0.3 * js2);
        let prelimGrade = (0.6 * prelimExam) + (0.4 * prelimClassStanding);

        if (absences >= 4) {
            prelimGrade = 0.00;
        }

        document.getElementById("result").innerText = `Prelim Grade: ${prelimGrade.toFixed(2)}%`;
    });
});
