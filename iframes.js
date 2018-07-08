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

