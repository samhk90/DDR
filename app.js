function addRow() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(table.rows.length - 1); // Insert row just before the last row
    var calbtn=document.getElementById("calbtn");
    var startDate = document.getElementById("startdate").value;
    var endDate = document.getElementById("enddate").value;
   // var dateExcluded = document.getElementById("dateexcluded").value;
    //var excludedDates = document.getElementById("dateexcluded").value.split(',');
    //take excluded dates as array
    var excludedDates = document.getElementById("excludeddates").value.split(',');

    var numberOfDays = calculateNumberOfDays(startDate, endDate, excludedDates);

    newRow.innerHTML = `<th scope="row">1</th>
                                <td>N/A</td>
                                <td>${startDate}</td>
                                <td>${endDate}</td>
                                <td>10</td>
                                <td>${excludedDates.join(', ')}</td>
                                <td>${numberOfDays}</td> 
                                <td>${document.getElementById("leadCount").value}</td>
                                <td>${document.getElementById("expectedDrr").value}</td>
                                <td>${new Date().toLocaleString()}</td>
                               `;
}


function calculateNumberOfDays(startDate, endDate, excludedDates) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    var totalDays = end.getDate() - start.getDate()- excludedDates.length+1;
    // var totalDays = 0;
    // for (var date = start; date <= end; date.setDate(date.getDate() + 1)) {
    //     var dateString = date.toISOString().split('T')[0];
    //     if (!excludedDates.includes(dateString)) {
    //         totalDays++;
    //     }
    // }
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
