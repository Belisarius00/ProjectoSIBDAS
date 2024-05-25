const placeholderAssessments = [
    { assessment_id: 1, assessment_date: "24-05-2024" },
];

document.addEventListener('DOMContentLoaded', function () {
    const assessmentList = document.getElementById('assessment-list');
    placeholderAssessments.forEach(assessment => {
        const assessmentRow = document.createElement('tr');
        assessmentRow.innerHTML = `
            <td>${assessment.assessment_id}</td>
            <td>${assessment.assessment_date}</td>
            <td><a href="assessments.html?id=${assessment.assessment_id}" class="btn btn-secondary">View Details</a></td>
        `;
        assessmentList.appendChild(assessmentRow);
    });
});