
let customers = JSON.parse(localStorage.getItem("customers"));
if(!customers) {
    customers = [];
}

function submitForm(){
    
    let Name = document.getElementById('Name').value;

    if (Name == "") { 
        window.alert("Please enter your name."); 
        Name.focus(); 
        return false; 
    }

    if(customers.length == 0){
        customers.push({"name": Name, "id": 1});
    } else {
        let id = parseInt(customers[customers.length-1].id);
        customers.push({"name": Name, "id": id+1});
    }

    localStorage.setItem("customers" , JSON.stringify(customers));
    customers = JSON.parse(localStorage.getItem("customers"));
    clearDate();
    showDate();
}

function clearDate(){
    Name.value = ''
}

function showDate(){
    let table ='';
    console.log(customers);
    for(let customer = 1 ; customer < customers.length ; customer++){
        table += `
        <tr> 
            <td>${customer}</td>
            <td>${customers[customer].name}</td>
            
            <td><button onclick = deleteData(${customer}) id= delete>delete</td>
        </tr>`
            document.getElementById('tbody').innerHTML = table;
    }
}
function deleteData(i){
    customers.splice(i,1);
    localStorage.customer = JSON.stringify(customers);
    showDate();
}
