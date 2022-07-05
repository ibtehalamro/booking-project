
let employees = JSON.parse(localStorage.getItem("emplyees"));
if(!employees) {
    employees = [];
}

function submitForm(){
    
    let EmployeeName = document.getElementById('EmployeeName').value;

    if (EmployeeName == "") { 
        window.alert("Please fill this field"); 
        EmployeeName.focus(); 
        return false;  
    }

    if(employees.length == 0){
        employees.push({"name": EmployeeName, "id": 1});
    } else {
        let id = parseInt(employees[employees.length-1].id);
        employees.push({"name": EmployeeName, "id": id+1});
    }

    localStorage.setItem("employees" , JSON.stringify(employees));
    employees = JSON.parse(localStorage.getItem("employees"));
    clearData();
    showDate();
}

function clearData(){
    EmployeeName.value = ''
}

function showDate(){
    let table ='';
    console.log(employees);
    for(let employee = 1 ; employee < employees.length ; employee++){
        table += `
        <tr> 
            <td>${employee}</td>
            <td>${employees[employee].name}</td>
            
            <td><button onclick = deleteData(${employee}) id= delete>delete</td>
        </tr>`
            document.getElementById('tbody').innerHTML = table;
    }
}
function deleteData(i){
    employees.splice(i , 1);
    localStorage.employee = JSON.stringify(employees);
    showDate();
}