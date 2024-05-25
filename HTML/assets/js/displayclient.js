const placeholderClients = [
    { client_id: 1, client_name: "John Doe", age: 30, phone: "123-456-7890", email: "john.doe@example.com" },
    { client_id: 2, client_name: "Jane Smith", age: 25, phone: "234-567-8901", email: "jane.smith@example.com" },
    { client_id: 3, client_name: "Mike Johnson", age: 40, phone: "345-678-9012", email: "mike.johnson@example.com" },
    { client_id: 4, client_name: "Mike Hawk", age: 31, phone: "123-456-7890", email: "john.doe@example.com" },
    { client_id: 5, client_name: "Hugh Mungus", age: 26, phone: "234-567-8901", email: "jane.smith@example.com" },
    { client_id: 6, client_name: "Michael Jackson", age: 41, phone: "345-678-9012", email: "mike.johnson@example.com" }
];

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = parseInt(urlParams.get('id'));

    const client = placeholderClients.find(client => client.client_id === clientId);
    if (client) {
        document.getElementById('client-name').innerText = client.client_name;
        document.getElementById('client-details').innerHTML = `
            <p>ID: ${client.client_id}</p>
            <p>Age: ${client.age}</p>
            <p>Phone: ${client.phone}</p>
            <p>Email: ${client.email}</p>
        `;
    } else {
        document.getElementById('client-details').innerText = 'Client not found.';
    }
});