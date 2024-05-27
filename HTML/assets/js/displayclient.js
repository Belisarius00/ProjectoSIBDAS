const placeholderClients = [
    { client_id: 1, nome_cliente: "John Doe", clientage: 30, clientsex:"Male", phone: "123-456-789", email: "john.doe@example.com", height:175, weight:70, obs: " Past medical history significant for seasonal allergies and occasional migraines. Denies any history of chronic medical conditions, surgeries, or hospitalizations. Social history negative for tobacco use, drinks alcohol moderately (one glass of wine with dinner most evenings), and exercises regularly (jogging 3 times per week for 30 minutes).  Chief complaint of intermittent sharp right lower abdominal pain for the past 3 days, worse with coughing and bending over. Pain is not radiating and is not associated with fever, nausea, or vomiting. No urinary urgency or frequency.  This is the patient's first visit to this clinic." },
    { client_id: 2, nome_cliente: "Jane Smith", clientage: 25, phone: "234-567-891", email: "jane.smith@example.com" },
    { client_id: 3, nome_cliente: "Mike Johnson", clientage: 40, phone: "345-678-912", email: "mike.johnson@example.com" },
    { client_id: 4, nome_cliente: "Mike Smith", clientage: 31, phone: "123-456-789", email: "mike.smith@example.com" },
    { client_id: 5, nome_cliente: "Jane Doe", clientage: 26, phone: "234-567-891", email: "jane.doe@example.com" },
    { client_id: 6, nome_cliente: "John Johnson", clientage: 41, phone: "345-678-9   12", email: "john.johnson@example.com" }
];

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = parseInt(urlParams.get('id'));

    const client = placeholderClients.find(client => client.client_id === clientId);
    if (client) {
        //document.getElementById('client-name').innerText = client.nome_cliente;
        document.getElementById('client-details').innerHTML = `
        <div class="container-fluid p-2">
        <div class="row p-2">
            <div class="col-7">Nome: ${client.nome_cliente} </div>
            <div class="col-2">Idade: ${client.clientage}</div>
            <div class="col-2">Gender: ${client.clientsex}</div>
        </div>
        <div class="row p-2">
            <div class="col-3">Telemóvel: ${client.phone}</div>
            <div class="col-9"> E-mail: ${client.email}</div>
        </div>
        <div class="row p-2">
            <div class="col-4">Altura: ${client.height/100} m</div>
            <div class="col-4">Peso: ${client.weight} Kg</div>
            <div class="col-4">IMC: ${(client.weight/((client.height/100)*(client.height/100))).toFixed(1)}</div>
        </div>
        <div class="row mt-3">
            <div class="col">Observações e Contraindicações Médicas</div>
        </div>
        <div class="row">
            <div class="col">
                <div class="container-fluid border p-2 m-2 flex-wrap" style="overflow-y:auto; overflow-x:hidden; height:83px">${client.obs}</div>
            </div>
        </div>
    </div>
        `;
    } else {
        document.getElementById('client-details').innerText = 'Client not found.';
    }
});