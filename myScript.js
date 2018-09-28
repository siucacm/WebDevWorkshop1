/*  Function returns day of the week by calling Date().getDay(), then finding
    the case which matches and assigning date to that value. 
*/
function getDate() {
    var date;
    switch (new Date().getDay()) {
    case 0:
        date = "Sunday";
        break;
    case 1:
        date = "Monday";
        break;
    case 2:
        date = "Tuesday";
        break;    
    case 3:
        date = "Wednesday";
        break;
    case 4:
        date = "Thursday";
        break;
    case 5:
        date = "Friday";
        break;  
    case 6:
        date = "Saturday";
        break;   
    }
    window.alert("Today is: " + date);
}

/*  Function to switch between classes of a specific element by removing the current 
    class and adding the other.
*/
function changeFont() {
    if (document.getElementById("chText").classList.contains('firstfont')){
        document.getElementById("chText").classList.remove('firstfont');
        document.getElementById("chText").classList.add('secondfont');
       }
    else if (document.getElementById("chText").classList.contains('secondfont')){
        document.getElementById("chText").classList.remove('secondfont');
        document.getElementById("chText").classList.add('firstfont');
    }
}

/*  Function to display a user's name and interest after being typed into input boxes. If   
    either one is left blank, an alert will appear on the screen. 
*/
function takeInput(){
    var name = document.getElementById("name").value;
    var interest = document.getElementById("interest").value;
    if(name == "" || interest == ""){
        window.alert("WARNING!!! \n You must enter some text")
    }else{
        window.alert("Hello " + name + "\n I see you are interested in " + interest);
    }
   
    
}