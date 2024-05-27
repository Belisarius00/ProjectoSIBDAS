const placeholderAssessments = [
    { assessment_id: 1, assessment_date: "24-05-2024", assessment_hour: "12:30" },
];

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const assessment_id = parseInt(urlParams.get('id'));

    const assessment = placeholderAssessments.find(assessment => assessment.assessment_id === assessment_id);
    if (assessment) {
        document.getElementById('assessment-details').innerHTML = `
        <div class="row">
            <div class="col-8">
                ID da avaliação: ${assessment.assessment_id}
            </div>
            <div class="col-2">
                Data: ${assessment.assessment_date}  
            </div>
            <div class="col-2">
                Hora: ${assessment.assessment_hour}
            </div>
        </div>
        `;
    } else {
        document.getElementById('assessment-details').innerText = 'Assessment not found.';
    }
});

