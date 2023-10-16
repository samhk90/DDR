function addRow() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(table.rows.length - 1); // Insert row just before the last row

    var startDate = document.getElementById("startdate").value;
    var endDate = document.getElementById("enddate").value;
    var dateExcluded = document.getElementById("dateexcluded").value;

    var numberOfDays = calculateNumberOfDays(startDate, endDate, dateExcluded);

    newRow.innerHTML = `<th scope="row">1</th>
                                <td>N/A</td>
                                <td>${startDate}</td>
                                <td>${endDate}</td>
                                <td>10</td>
                                <td>${dateExcluded}</td>
                                <td>${numberOfDays}</td>
                                <td>${document.getElementById("leadCount").value}</td>
                                <td>${document.getElementById("expectedDrr").value}</td>
                                <td>${new Date().toLocaleString()}</td>`;
                                console.log(startDate, endDate, dateExcluded);
                                console.log(excludedDates);
                                console.log(totalDays);
}

function calculateNumberOfDays(startDate, endDate, dateExcluded) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    var excludedDates = dateExcluded.split(',');

    var totalDays = 0;
    for (var date = start; date <= end; date.setDate(date.getDate() + 1)) {
        var dateString = date.toISOString().split('T')[0];
        if (!excludedDates.includes(dateString)) {
            totalDays++;
        }
    }

    return totalDays;
}

function clearFormFields() {
    document.getElementById("startdate").value = "";
    document.getElementById("enddate").value = "";
    document.getElementById("dateexcluded").value = "";
    document.getElementById("leadCount").value = "";
    document.getElementById("expectedDrr").value = "";
}

