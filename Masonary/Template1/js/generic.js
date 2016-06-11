
function sayHello() {
    alert('saying hi!'); 
}

function longProcessOrSleep(ms) {

    var dt = new Date();

    dt.setTime(dt.getTime() + ms);

    while (new Date().getTime() < dt.getTime()) {
        document.getElementById('inner').innerHTML =
            document.getElementById('inner').innerHTML + "<br/>" + new Date().getTime();
    };

}

//longProcessOrSleep(5000);
//sayHello();