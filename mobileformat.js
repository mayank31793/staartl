if(window.innerWidth < 768){

  main.style.height = '45vh';
	mini.style.height = '45vh';

  // document.getElementById('demo').style.height = '100px';
  // document.getElementById('demo2').style.height = '100px';
  // document.getElementById('demo3').style.height = '100px';

  //techno iframe height in mobile
  document.getElementById('clickedTechnoIframe').style.width = '100vw';
  var frameHeight = document.getElementById('clickedTechnoIframe').style.width;
  var frameHeightNumber = parseInt(frameHeight.substr(0, 3)) - 4;
  console.log(parseInt(frameHeight.substr(0, 3)));
  console.log(frameHeightNumber);
  document.getElementById('clickedTechnoIframe').style.height = frameHeightNumber+'vw';

  //people iframe height in mobile
  document.getElementById('clickedPeopleIframe').style.width = '100vw';
  var frameHeight = document.getElementById('clickedPeopleIframe').style.width;
  var frameHeightNumber = parseInt(frameHeight.substr(0, 3)) - 4;
  console.log(parseInt(frameHeight.substr(0, 3)));
  console.log(frameHeightNumber);
  document.getElementById('clickedPeopleIframe').style.height = frameHeightNumber+'vw';

  //environment iframe height in mobile
  document.getElementById('clickedEnvironmentIframe').style.width = '100vw';
  var frameHeight = document.getElementById('clickedEnvironmentIframe').style.width;
  var frameHeightNumber = parseInt(frameHeight.substr(0, 3)) - 4;
  console.log(parseInt(frameHeight.substr(0, 3)));
  console.log(frameHeightNumber);
  document.getElementById('clickedEnvironmentIframe').style.height = frameHeightNumber+'vw';

}