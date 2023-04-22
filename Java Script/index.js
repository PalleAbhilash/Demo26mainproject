var email="ramu@gmail.com"
var pass="123"
var form=document.forms
function loginPage()
{
    var userDefEmail=document.getElementById("email").value
    var userDefPassw=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderDiv")
    console.log(divbor)
    if(email!=userDefEmail && pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="EMail And Password is incorrect"
        document.getElementById("result").style.color="red"

    }
    else if (email==userDefEmail && pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(201,0,134),red)"
        divbor[0].style.borderColor="royalblue"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="password is wrong"
    }
    else if (email!=userDefEmail && pass==userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
        divbor[1].style.borderColor="royalblue"
        divbor[0].style.borderColor="red"
        document.getElementById("result").innerHTML="email is wrong"
    }
    else
    {
        form[0].action="./Html/home.html"
        document.getElementById("button").type="submit"
    }
}
function visible()
{
    form[0].elements[1].type="text";
    document.getElementById("passVisible").src="./Assets/Image/lucky.jpg"
    document.getElementById("passVisible").style.transform="rotateY(360deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"

}
function invisible()
{
    form[0].elements[1].type="password";
    document.getElementById("passVisible").src="./Assets/Image/monkeyeyes.jpeg"
    document.getElementById("passVisible").style.transform="rotateY(0deg)"
    document.getElementById("passVisible").style.transition="transform 0.5s"

}