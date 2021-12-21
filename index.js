var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();
            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="rgb(189 12 12)";
            loginTab.style.backgroundColor="rgba(189 12 12)";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

            loginTab.style.backgroundColor="rgb(189 12 12)";
            regTab.style.backgroundColor="rgba(189 12 12)";
        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

            regTab.style.backgroundColor="rgba(189 12 12)";
            loginTab.style.backgroundColor="rgba(189 12 12)";

        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " is already register.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }

            alert("email is send to your email check it in 24hr. \n Thanks");
            document.getElementById("fe").value ="";
        }
var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
document.getElementById("Menu") 
{
    
} 
var x = document.getElementsByClassName("tab");
x[n].style.display = "block";
if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
} else {
    document.getElementById("prevBtn").style.display = "inline";
}
if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
} else {
    document.getElementById("nextBtn").innerHTML = "Next";
}
fixStepIndicator(n)
}
function nextPrev(n) {
var x = document.getElementsByClassName("tab");
if (n == 1 && !validateForm()) return false;
x[currentTab].style.display = "none";
currentTab = currentTab + n;
if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
}
showTab(currentTab);
}
function validateForm() {
var x, y, i, valid = true;
x = document.getElementsByClassName("tab");
y = x[currentTab].getElementsByTagName("input");
for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
    }
}
  
if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
}
    return valid; // return the valid status
}

function fixStepIndicator(n) {
var i, x = document.getElementsByClassName("step");
for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
}
    x[n].className += " active";
}

