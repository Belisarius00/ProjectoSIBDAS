document.addEventListener('DOMContentLoaded', function() {
    const addRowButton = document.getElementById('addRow');
    const tableBody = document.querySelector('#exs_treino tbody');

    addRowButton.addEventListener('click', function() {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" class="form-control" name="maquina" required></td>
            <td><input type="text" class="form-control" name="exercicio" required></td>
            <td><input type="number" class="form-control" name="numseries" required></td>
            <td><input type="time" class="form-control" name="duracao" required></td>
            <td><input type="text" class="form-control" name="cadencia" required></td>
            <td><input type="number" class="form-control" name="weight" placeholder="Kg" step="2.5" required></td>
            <td><input type="time" class="form-control" name="rest" required></td>
            <td><input type="text" class="form-control" name="material" required></td>
            <td><input type="text" class="form-control" name="OBS" placeholder="Observações" required></td>
            <td class="text-center"><button type="button" class="btn btn-danger remove-row">X</button></td>
        `;
        tableBody.insertBefore(newRow, tableBody.lastElementChild);
        attachRemoveRowEvent(newRow.querySelector('.remove-row'));
    });

    function attachRemoveRowEvent(button) {
        button.addEventListener('click', function() {
            button.closest('tr').remove();
        });
    }

    document.querySelectorAll('.remove-row').forEach(button => {
        attachRemoveRowEvent(button);
    });
});