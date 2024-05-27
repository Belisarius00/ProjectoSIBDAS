const placeholderClients = [
    { client_id: 1, nome_cliente: "John Doe", clientage: 30, clientsex:"Male", phone: "123-456-789", email: "john.doe@example.com", height:175, weight:80, obs: " Past medical history significant for seasonal allergies and occasional migraines. Denies any history of chronic medical conditions, surgeries, or hospitalizations. Social history negative for tobacco use, drinks alcohol moderately (one glass of wine with dinner most evenings), and exercises regularly (jogging 3 times per week for 30 minutes).  Chief complaint of intermittent sharp right lower abdominal pain for the past 3 days, worse with coughing and bending over. Pain is not radiating and is not associated with fever, nausea, or vomiting. No urinary urgency or frequency.  This is the patient's first visit to this clinic." },
    { client_id: 2, nome_cliente: "Jane Smith", clientage: 25, phone: "234-567-891", email: "jane.smith@example.com" },
    { client_id: 3, nome_cliente: "Mike Johnson", clientage: 40, phone: "345-678-912", email: "mike.johnson@example.com" },
    { client_id: 4, nome_cliente: "Mike Smith", clientage: 31, phone: "123-456-789", email: "mike.smith@example.com" },
    { client_id: 5, nome_cliente: "Jane Doe", clientage: 26, phone: "234-567-891", email: "jane.doe@example.com" },
    { client_id: 6, nome_cliente: "John Johnson", clientage: 41, phone: "345-678-9   12", email: "john.johnson@example.com" }
];

document.addEventListener('DOMContentLoaded', function() {
    const clientList = document.getElementById('client-list');
    placeholderClients.forEach(client => {
        const clientCard = document.createElement('div');
        clientCard.className = 'col-md-4';
        clientCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body text-center">
                    <h5 class="card-title">${client.nome_cliente}</h5>
                    <p class="card-text">ID: ${client.client_id}</p>
                    <a href="detalhescliente.html?id=${client.client_id}" class="btn btn-secondary">View Details</a>
                </div>
            </div>
        `;
        clientList.appendChild(clientCard);
    });
});