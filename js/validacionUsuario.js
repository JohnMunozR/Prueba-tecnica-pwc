document.getElementById("sesion-usuario");

function getUsers() {
    var userjson = JSON.parse(localStorage.getItem("user"));
    if (userjson==null) {
        userjson=
        [
            ['user','1234'],
            ['admin','12345']
        ]
        
    }
    return userjson;
    
}

function userValidation(pUser, pPassword) {
    let userList = getUsers();
    let access = false;

    for (let index = 0; index < userList.length; index++) {
        if (pUser===userList[index][0]&& pPassword === userList[index][1]){
            access=true;
            sessionStorage.setItem("activeUser", userList[index][1])
        }
        
    }
    return access;
}