function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById('new-text').value;
    cell2.innerHTML = document.getElementById('new-text-two').value;
    document.getElementById('new-text').value = '';
    document.getElementById('new-text-two').value = '';
  }
  






