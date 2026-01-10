function dispMessage(){
    let email=document.getElementById("txtemail").value
    let pass=document.getElementById("txtpassword").value
    let found=users.find
    (element=> element.email===email && element.password===pass);
    if(found){
        lblMessage.innerHTML="welcome " +found.name;
    }
    else{
        lblMessage.innerHTML="acess denied";
    }
}
let users=[];
function adduser()
{
    let name=document.getElementById("txtname").value
    let email=document.getElementById("txtemail").value
    let pass=document.getElementById("txtpassword").value
    let user={name: name,email:email,password:pass}
    users.push(user);
    console.log(users);
    showloginform();
}
function showloginform()
{
    let str=`<h3>Login form</h3>
        <p><label id="lblMessage"></label></p>
       <p><input type="text" id="txtemail" placeholder="Email"></p> 
       <p><input type="password" id="txtpassword" placeholder="Password"></p>
       <p><button class="login-btn" onclick="dispMessage()">Login</button></p>
       <hr>
       <p><button class="register-btn" onclick="showRegisterForm()">Create account</button></p>`
       root.innerHTML=str
}
function showRegisterForm()
{
    let str=`
    <h3>Registration form</h3>
    <p><label id="lblMessage"></label></p>
    <p><input type="text" id="txtname" placeholder="name"></p> 
    <p><input type="text" id="txtemail" placeholder="Email"></p> 
    <p><input type="password" id="txtpassword" placeholder="Password"></p>
    <p><button class="login-btn" onclick="adduser()">Submit</button></p>
    <hr>
      <p>Already a member?<a href="#" onclick="showloginform()">Login here</a></p>
    `
    root.innerHTML=str
}
function Register()
{
    let email=document.getElementById("txtemail").value
    let pass=document.getElementById("txtpassword").value
    if(email==="" || pass==="")
    {
        lblMessage.innerHTML="Fill all the details";
    }
    else{
        lblMessage.innerHTML="Successfully registered";
    }
}