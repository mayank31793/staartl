var hashValue = window.location.hash;

window.onload = function(){
  console.log('onload function');
  if(hashValue == ""){
    document.getElementById('lang').innerHTML = 'English';
    document.getElementById('video1').style.backgroundImage = "url('./assets/english/mars.jpg')";
    document.getElementById('video2').style.backgroundImage = "url('./assets/english/afghan.jpg')";
  }
  else if(hashValue == "#english"){
    document.getElementById('lang').innerHTML = 'English';
    document.getElementById('video1').style.backgroundImage = "url('./assets/english/mars.jpg')";  
    document.getElementById('video2').style.backgroundImage = "url('./assets/english/afghan.jpg')";  
  }
  else{
    document.getElementById('lang').innerHTML = 'हिंदी';
    document.getElementById('video1').style.backgroundImage = "url('./assets/hindi/mars-web-hindi.jpg')";    
    document.getElementById('video2').style.backgroundImage = "url('./assets/hindi/afghan-web-hindi.jpg')";
    document.getElementById('idTechno').innerHTML = 'तकनीकी';
    document.getElementById('idPeople').innerHTML = 'लोग';
    document.getElementById('idEnvironment').innerHTML = 'वातावरण';
  }
}