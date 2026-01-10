function dispMessage(){
    // a=10
    // b=20
    // c=a+b
    //alert("Hello")
    // alert(c)
    // alert(document.getElementById("txtemail").value)
    // lblMessage.innerHTML = document.getElementById("txtemail").value + "-" + document.getElementById("txtpassword").value
    let email=document.getElementById("txtemail").value
    let pass=document.getElementById("txtpassword").value
    if(email==="john@gmail.com" && pass==="1234")
    {
        lblMessage.innerHTML="Welcome";
    }
    else{
        lblMessage.innerHTML="Access denied";
    }
}
function showloginform()
{
    let str=`<h3>Login form</h3>
        <p><label id="lblMessage"></label></p>
       <p><input type="text" id="txtemail"></p> 
       <p><input type="password" id="txtpassword"></p>
       <p><button class="login-btn" onclick="dispMessage()">Login</button></p>
       <hr>
       <p><button class="register-btn" onclick="showRegisterForm()">Create account</button></p>`
       root.innerHTML=str
}
function showRegisterForm()
{
    let str=`
    <h3>Registration form</h3>
    `
    root.innerHTML=str
}