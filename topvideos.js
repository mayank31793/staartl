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

});

document.getElementById('video2').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].people[1].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].people[1].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].people[1].description;  
});

document.getElementById('video1').style.height = '90vh';
document.getElementById('video1').style.backgroundImage = (hashValue == "")?"url('./assets/english/mars.jpg')":"url('./assets/hindi/mars-web-hindi.jpg')";
document.getElementById('video1').style.backgroundRepeat = 'no-repeat';
document.getElementById('video1').style.backgroundSize = '100% auto';

//play button on hover for video1
document.getElementById('video1').addEventListener('mouseenter',function(){
  this.style.opacity = 0.8;
  this.appendChild(playImage);
  console.log(this.clientWidth);
  console.log(playImage.clientWidth);
  playImage.style.left = (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
  playImage.style.top = (this.clientHeight)/2 - (playImage.clientHeight)/2+'px';  
});

document.getElementById('video1').addEventListener('mouseleave',function(){
  this.removeChild(playImage);
  this.style.opacity = 1;
});

document.getElementById('video2').style.height = '90vh';
document.getElementById('video2').style.backgroundImage = (hashValue == "")?"url('./assets/english/afghan.jpg')":"url('./assets/hindi/afghan-web-hindi.jpg')";
document.getElementById('video2').style.backgroundRepeat = 'no-repeat';
document.getElementById('video2').style.backgroundSize = '130% auto';
document.getElementById('video2').style.backgroundPosition= 'center top';

//play button on hover for video2
document.getElementById('video2').addEventListener('mouseenter',function(){
  this.style.opacity = 0.8;
  this.appendChild(playImage);
  console.log(this.clientWidth);
  console.log(playImage.clientWidth);
  playImage.style.left = (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
  playImage.style.top = (this.clientHeight)/2 - (playImage.clientHeight)/2+'px';
});

document.getElementById('video2').addEventListener('mouseleave',function(){
  this.removeChild(playImage);
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