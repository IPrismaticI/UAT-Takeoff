    function startbuttonClick(){
        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
    }
    function stopbuttonClick(){
        document.getElementById("btnStop").disabled = true;
        document.getElementById("btnStart").disabled = false;
    }
    
    function enterName (namefeed){ //Alerts user to input name & ID.
        var nameStorageAll = "Debug"
        var nameStorageFirst = "Debug"
        var nameStorageLast = "Debug" //These three set the storages as variables so the if/else part works.
        var idStorage = "Debug"
        y.innerHTML += "enterName values loaded<br>"
        do{ //Asks for and sets Name
            if(nameStorageAll.length > 20){
                alert("ERROR: " + nameStorageFirst + " " + nameStorageLast + " is not a valid input. Please enter a shorter name.")
                y.innerHTML += "Name invalid<br>"
            }else{
                alert("Please input identification to continue.")
                y.innerHTML += "Request Name<br>"
            }
            nameStorageFirst = prompt("First Name: ")
            y.innerHTML += "requested first name<br>"
            nameStorageLast = prompt("Last Name: ")
            y.innerHTML += "requested second name<br>"
            nameStorageAll = nameStorageFirst + nameStorageLast
        }while(nameStorageAll.length > 20); //Checks name length to make sure it equals 8. If it isnt, it asks again.
        do{ //Asks for and sets ID
            if(idStorage == "69"){
                alert("Nice try, but you need one more digit for this.")
                y.innerHTML += "funnie number<br>"
            }else if(idStorage.length == 3 || idStorage != "Debug"){
                alert("ERROR: " + idStorage + " is not a valid input. Please enter an 3-digit ID.")
                y.innerHTML += "ID invalid<br>"
            }
            idStorage = prompt("User ID: ")
            y.innerHTML += "Request ID<br>"
        }while(idStorage.length != 3) //Checks ID length to make sure it equals 8. If it isnt, it asks again.
        namefeed.innerHTML = "Name : " + nameStorageFirst + " " + nameStorageLast + "<br>User ID : " + idStorage
    }

    function runtimer (x,y){ //Begins clock.
        var timeout = 1000;
        var currTime = 55 //55 won't appear, since currTime is reduced by 5 before it is printed.
        y.innerHTML += "runtimerActive<br>"
        for (i = 0; i < 11; i++) { //Loops clock.
            y.innerHTML += "forActive<br>"
            setTimeout(function(){
                if (currTime <= 30) {
                    currTime = currTime - 5
                    x.innerHTML = "WARNING : " + currTime + " seconds till Launch."
                    y.innerHTML += "currTime less than/equal to 25<br>"
                    y.innerHTML += "currTime Reduced to " + currTime + "<br>"
                } else {
                    currTime = currTime - 5
                    x.innerHTML = currTime + " seconds till Launch."
                    y.innerHTML += "currTime greater than 25<br>"
                    y.innerHTML += "currTime Reduced to " + currTime + "<br>"
                }
                if (currTime == 0){
                    alert('Blast Off!!');
                    y.innerHTML += "LaunchAlert<br>"
                }
            }, timeout);
            timeout = timeout + 1000;
        }
    }
