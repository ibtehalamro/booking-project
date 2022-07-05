function showTableData() {
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    document.getElementById('info').innerHTML = "";
    let myTab = document.getElementById('empTable');
    let index = document.getElementById("date").cellIndex;
    let userTableData = ``;
    for (let i = 1; i < myTab.rows.length; i++) {
        const objCells = myTab.rows.item(i).cells;

        for (let j = index; j <= index; j++) {
            if (new Date(objCells.item(j).innerHTML) >  new Date(startDate) && new Date(objCells.item(j).innerHTML) <  new Date(endDate)) {
                for (let k = 0; k < objCells.length; k++) {
                    
                    info.innerHTML = info.innerHTML + ' ' + objCells.item(k).innerHTML;
                
                }

            }
        }

        info.innerHTML = info.innerHTML + '<br />';

    }
}

