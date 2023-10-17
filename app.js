var table = document.getElementById("myTable");
hideEditableRow();
function addRow() {

    var newRow = table.insertRow(table.rows.length);
    var startDate = document.getElementById("startdate").value;
    var endDate = document.getElementById("enddate").value;
    var excludedDates = document.getElementById("excludeddates").value.split(',');

    var numberOfDays = calculateNumberOfDays(startDate, endDate, excludedDates);
    var leadCount = document.getElementById("leadCount").value;
    var expectedDrr = leadCount / numberOfDays;
    var startMonthYear = new Date(startDate).toLocaleString('default', { month: 'long', year: 'numeric' });
    var endMonthYear = new Date(endDate).toLocaleString('default', { month: 'long', year: 'numeric' });

    newRow.innerHTML = `<th scope="row">1</th>
                                <td>N/A</td>
                                <td>${startDate}</td>
                                <td>${endDate}</td>
                                <td>${startMonthYear,endMonthYear}</td>
                                <td>${excludedDates.join(', ')}</td>
                                <td>${numberOfDays}</td> 
                                <td>${document.getElementById("leadCount").value}</td>
                                <td>${expectedDrr}</td>
                                <td>${new Date().toLocaleString()}</td>
                               `;
                               localStorage.setItem('table',table.innerHTML);
                               hideEditableRow();
}


function calculateNumberOfDays(startDate, endDate, excludedDates) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    var totalDays = end.getDate() - start.getDate() - excludedDates.length + 1;
    return totalDays;


}

function clearFormFields() {
    document.getElementById("startdate").value = "";
    document.getElementById("enddate").value = "";
    document.getElementById("excludeddates").value = "";
    document.getElementById("leadCount").value = "";
    document.getElementById("expectedDrr").value = "";
}

function addExcludedDate() {
    var excludedDates = document.getElementById("excludeddates").value.split(',');
    var newExcludedDate = prompt("Enter a new excluded date:");
    excludedDates.push(newExcludedDate);
    document.getElementById("excludeddates").value = excludedDates.join(',');
}
function showEditableRow() {
    document.getElementById("editableRow").style.display = "table-row";
}

function hideEditableRow() {
    document.getElementById("editableRow").style.display = "none";
}

function getData(){
    table.innerHTML = localStorage.getItem('table');
}
getData();
//samee