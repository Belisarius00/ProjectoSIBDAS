document.addEventListener('DOMContentLoaded', function() {
    fetch('get_clients.php')
        .then(response => response.json())
        .then(data => {
            const clientList = document.getElementById('client-list');
            data.forEach(client => {
                const clientCard = document.createElement('div');
                clientCard.className = 'col-md-4';
                clientCard.innerHTML = `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${client.client_name}</h5>
                            <p class="card-text">ID: ${client.client_id}</p>
                            <a href="client_details.html?id=${client.client_id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                `;
                clientList.appendChild(clientCard);
            });
        })
        .catch(error => console.error('Error fetching clients:', error));
});