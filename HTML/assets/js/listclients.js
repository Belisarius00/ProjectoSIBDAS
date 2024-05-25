const placeholderClients = [
    { client_id: 1, client_name: "John Doe", age: 30, phone: "123-456-7890", email: "john.doe@example.com" },
    { client_id: 2, client_name: "Jane Smith", age: 25, phone: "234-567-8901", email: "jane.smith@example.com" },
    { client_id: 3, client_name: "Mike Johnson", age: 40, phone: "345-678-9012", email: "mike.johnson@example.com" },
    { client_id: 4, client_name: "Mike Hawk", age: 31, phone: "123-456-7890", email: "john.doe@example.com" },
    { client_id: 5, client_name: "Hugh Mungus", age: 26, phone: "234-567-8901", email: "jane.smith@example.com" },
    { client_id: 6, client_name: "Michael Jackson", age: 41, phone: "345-678-9012", email: "mike.johnson@example.com" }
];

document.addEventListener('DOMContentLoaded', function() {
    const clientList = document.getElementById('client-list');
    placeholderClients.forEach(client => {
        const clientCard = document.createElement('div');
        clientCard.className = 'col-md-4';
        clientCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body text-center">
                    <h5 class="card-title">${client.client_name}</h5>
                    <p class="card-text">ID: ${client.client_id}</p>
                    <a href="detalhescliente.html?id=${client.client_id}" class="btn btn-secondary">View Details</a>
                </div>
            </div>
        `;
        clientList.appendChild(clientCard);
    });
});