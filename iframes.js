function closeIframe(arrow,opened,iframesrc){
  document.getElementById(arrow).style.display = 'none';
  document.getElementById(opened).style.display = 'none';
  document.getElementById(iframesrc).setAttribute('src','');  
}

document.getElementById('clickedTechnoIframeclose').addEventListener('click',function(){
  closeIframe('clickedfieldarrowTechno','clickedTechnoVid','clickedTechnoIframe');
});

document.getElementById('clickedPeopleIframeclose').addEventListener('click',function(){
  closeIframe('clickedfieldarrowPeople','clickedPeopleVid','clickedPeopleIframe');
});

document.getElementById('clickedEnvironmentIframeclose').addEventListener('click',function(){
  closeIframe('clickedfieldarrowEnvironment','clickedEnvironmentVid','clickedEnvironmentIframe');
});

document.getElementById('clickedTechnoIframecloseMobile').addEventListener('click',function(){
  closeIframe('clickedfieldarrowTechno','clickedTechnoVid','clickedTechnoIframe');
});

document.getElementById('clickedPeopleIframecloseMobile').addEventListener('click',function(){
  closeIframe('clickedfieldarrowPeople','clickedPeopleVid','clickedPeopleIframe');
});

document.getElementById('clickedEnvironmentIframecloseMobile').addEventListener('click',function(){
  closeIframe('clickedfieldarrowEnvironment','clickedEnvironmentVid','clickedEnvironmentIframe');
});

//close Iframe while going back and forth
document.getElementsByClassName('signs')[0].addEventListener('click',function(){
	closeIframe('clickedfieldarrowTechno','clickedTechnoVid','clickedTechnoIframe');
  document.getElementById('staartlPlay').remove();
});

document.getElementsByClassName('signs')[1].addEventListener('click',function(){
	closeIframe('clickedfieldarrowTechno','clickedTechnoVid','clickedTechnoIframe');
  document.getElementById('staartlPlay').remove();
});

document.getElementsByClassName('signs2')[0].addEventListener('click',function(){
	closeIframe('clickedfieldarrowPeople','clickedPeopleVid','clickedPeopleIframe');
  document.getElementById('staartlPlay').remove();
});

document.getElementsByClassName('signs2')[1].addEventListener('click',function(){
	closeIframe('clickedfieldarrowPeople','clickedPeopleVid','clickedPeopleIframe');
  document.getElementById('staartlPlay').remove();
});

document.getElementsByClassName('signs3')[0].addEventListener('click',function(){
	closeIframe('clickedfieldarrowEnvironment','clickedEnvironmentVid','clickedEnvironmentIframe');
  document.getElementById('staartlPlay').remove();
});

document.getElementsByClassName('signs3')[1].addEventListener('click',function(){
	closeIframe('clickedfieldarrowEnvironment','clickedEnvironmentVid','clickedEnvironmentIframe');
  document.getElementById('staartlPlay').remove();
});


