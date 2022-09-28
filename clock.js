        // function startbuttonClick()
    // function stopbuttonClick()
    
    

    function runtimer (x,y){
        var timeout = 1000;
        var currTime = 50
        y.innerHTML += "runtimerActive<br>"
        for (i = 0; i < 11; i++) {
            y.innerHTML += "forActive<br>"
            setTimeout(function(){
                if (currTime <= 25) {
                    x.innerHTML = "WARNING : " + currTime + " seconds till Launch."
                    y.innerHTML += "currTime less than/equal to 25<br>"
                    currTime = currTime - 5
                    y.innerHTML += "currTime Reduced<br>"
                } else {
                    x.innerHTML = currTime + " seconds till Launch."
                    y.innerHTML += "currTime greater than 25<br>"
                    currTime = currTime - 5
                    y.innerHTML += "currTime Reduced<br>"
                }
                if (currTime == 0){
                    alert('Blast Off!!');
                    y.innerHTML += "LaunchAlert<br>"
                }
            }, timeout);
            timeout = timeout + 1000;
        }
    }
