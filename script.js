function generateResume(){

document.getElementById("resume").style.display="block"

rname.innerText=name.value
rphone.innerText=phone.value
remail.innerText=email.value

reducation.innerText=education.value
rskills.innerText=skills.value
rexperience.innerText=experience.value

new QRCode(document.getElementById("qrcode"),{
text:phone.value,
width:80,
height:80
})

}

upload.onchange=function(){

photo.src=URL.createObjectURL(this.files[0])

}