        // function startbuttonClick()
    // function stopbuttonClick()
    
    

    function runtimer (x,y){
        var timeout = 1000;
        var currTime = 55 //55 won't appear, since currTime is reduced by 5 before it is printed.
        y.innerHTML += "runtimerActive<br>"
        for (i = 0; i < 11; i++) {
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
