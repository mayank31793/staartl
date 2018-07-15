document.getElementById('video1').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].techno[1].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].techno[1].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].techno[1].description;

  //other iframe src null
  document.getElementById('clickedTechnoIframe').setAttribute('src','');
  document.getElementById('clickedPeopleIframe').setAttribute('src','');
  document.getElementById('clickedEnvironmentIframe').setAttribute('src','');  

  document.getElementById('clickedTechnoVid').style.display = 'none';
  document.getElementById('clickedPeopleVid').style.display = 'none';
  document.getElementById('clickedEnvironmentVid').style.display = 'none';

  document.getElementById('clickedfieldarrowTechno').style.display = 'none';
  document.getElementById('clickedfieldarrowPeople').style.display = 'none';
  document.getElementById('clickedfieldarrowEnvironment').style.display = 'none';  

  //delay in display iframe
  setTimeout(function(){
    document.getElementById('modalBox').style.opacity = 1;
    console.log('modal');
  },1000);

});

document.getElementById('video2').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].people[1].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].people[1].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].people[1].description; 

  //other iframe src null
  document.getElementById('clickedTechnoIframe').setAttribute('src','');
  document.getElementById('clickedPeopleIframe').setAttribute('src','');
  document.getElementById('clickedEnvironmentIframe').setAttribute('src','');  

  document.getElementById('clickedTechnoVid').style.display = 'none';
  document.getElementById('clickedPeopleVid').style.display = 'none';
  document.getElementById('clickedEnvironmentVid').style.display = 'none';

  document.getElementById('clickedfieldarrowTechno').style.display = 'none';
  document.getElementById('clickedfieldarrowPeople').style.display = 'none';
  document.getElementById('clickedfieldarrowEnvironment').style.display = 'none'; 

  //delay in display iframe
  setTimeout(function(){
    document.getElementById('modalBox').style.opacity = 1;
    console.log('modal');
  },1000);  

});

// document.getElementById('video1').style.height = '90vh';
document.getElementById('video1').style.backgroundImage = (hashValue == "")?"url('./assets/english/mars.jpg')":"url('./assets/hindi/mars-web-hindi.jpg')";
document.getElementById('video1').style.backgroundRepeat = 'no-repeat';
document.getElementById('video1').style.backgroundSize = '100% auto';

var videoText1Div = document.createElement('div');
var videoText2Div = document.createElement('div');

//play button on hover for video1
document.getElementById('video1').addEventListener('mouseenter',function(){
  this.style.opacity = 0.8;

  //description on hover
  videoText1Div.innerHTML = data[0].techno[1].description;
  this.appendChild(videoText1Div);
  videoText1Div.style.color = 'white';
  videoText1Div.style.position = 'absolute';
  videoText1Div.style.bottom = '0px';
  videoText1Div.style.padding = '5px';
  videoText1Div.style.fontSize = '20px';

  this.appendChild(playImage);
  playImage.style.left = (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
  playImage.style.top = (this.clientHeight)/2 - (playImage.clientHeight)/2+'px';  
});

document.getElementById('video1').addEventListener('mouseleave',function(){
  this.removeChild(playImage);
  this.removeChild(videoText1Div);
  this.style.opacity = 1;
});

// document.getElementById('video2').style.height = '90vh';
document.getElementById('video2').style.backgroundImage = (hashValue == "")?"url('./assets/english/afghan.jpg')":"url('./assets/hindi/afghan-web-hindi.jpg')";
document.getElementById('video2').style.backgroundRepeat = 'no-repeat';
document.getElementById('video2').style.backgroundSize = '133% auto';
document.getElementById('video2').style.backgroundPosition= 'center top';

//play button on hover for video2
document.getElementById('video2').addEventListener('mouseenter',function(){
  this.style.opacity = 0.8;

  //description on hover
  videoText2Div.innerHTML = data[0].people[1].description;
  this.appendChild(videoText2Div);
  videoText2Div.style.color = 'white';
  videoText2Div.style.color = 'white';
  videoText2Div.style.position = 'absolute';
  videoText2Div.style.bottom = '0px';
  videoText2Div.style.padding = '5px';
  videoText2Div.style.fontSize = '20px';  

  this.appendChild(playImage);
  console.log(this.clientWidth);
  console.log(playImage.clientWidth);
  playImage.style.left = (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
  playImage.style.top = (this.clientHeight)/2 - (playImage.clientHeight)/2+'px';
});

document.getElementById('video2').addEventListener('mouseleave',function(){
  this.removeChild(playImage);
  this.removeChild(videoText2Div);
  this.style.opacity = 1;
});

document.getElementById('video1').style.overflowY = 'hidden';
document.getElementById('video2').style.overflowY = 'hidden';

//topvideo border for desktop devices
document.getElementById('video1').style.borderWidth = '10px 5px 10px 10px';
document.getElementById('video1').style.borderColor = 'white';
document.getElementById('video1').style.borderStyle = 'solid';
document.getElementById('video2').style.borderWidth = '10px 10px 10px 5px';
document.getElementById('video2').style.borderColor = 'white';
document.getElementById('video2').style.borderStyle = 'solid';

if(window.innerWidth >1440){
  document.getElementById('video1').style.height = '600px';
  document.getElementById('video2').style.height = '600px';  
}

else if(window.innerWidth<window.innerHeight){
  document.getElementById('video1').style.height = '330px';
  document.getElementById('video2').style.height = '330px'; 
  console.log('we are here');
}

else{
  document.getElementById('video1').style.height = '90vh';
  document.getElementById('video2').style.height = '90vh';  
}

