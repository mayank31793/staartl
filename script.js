var divCarousel,imgCarousel;

var playImage = document.createElement('img');
playImage.setAttribute('src','./assets/staartlPlay.png');
playImage.setAttribute('id','staartlPlay');
// document.getElementById('topVideos').appendChild(playImage);

function categories(a,category,parentElement,field){
  if((a)%3 == 0){

    divCarousel = document.createElement('div');
    divCarousel.setAttribute('class','carousel-item');
    // divCarousel.setAttribute('id','div'+a);      

    imgCarousel = document.createElement('img');
    imgCarousel.setAttribute('src',category);
    imgCarousel.setAttribute('id',field+a);
    imgCarousel.setAttribute('class','col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 CarouselField');
    imgCarousel.style.width = '';
    imgCarousel.style.height = ''; 

    divCarousel.appendChild(imgCarousel);
    parentElement.appendChild(divCarousel);

  }

  else{
    imgCarousel = document.createElement('img');
    imgCarousel.setAttribute('src',category);
    imgCarousel.setAttribute('id',field+a);
    imgCarousel.setAttribute('class','col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 CarouselField');
    imgCarousel.style.width = '';
    imgCarousel.style.height = '';

    divCarousel.appendChild(imgCarousel);

  }

  if(a==0){
    divCarousel.setAttribute('class','carousel-item active');  

  }

}

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(typeof data);        

  for(var i=0;i<data[0].techno.length;i++){
    categories(i,data[0].techno[i].thumbnail,technoCarouselDiv,Object.keys(data[0])[0]); 
    document.getElementById(Object.keys(data[0])[0]+i).addEventListener('click',function(e){
      var strget = e.target.id;
      var strpos = strget.charAt(6);
      var numstrpos = parseInt(strpos);

      var arrowpositiontechno = this.offsetLeft + (this.offsetWidth)/2;

      //display only clicked category
      document.getElementById('clickedPeopleVid').style.display = 'none';
      document.getElementById('clickedEnvironmentVid').style.display = 'none';      
      document.getElementById('clickedTechnoVid').style.display = 'block';
      var scrollPositionTechno = document.getElementById('clickedTechnoVid').offsetTop;
      console.log(scrollPositionTechno);
      window.scrollTo(0,scrollPositionTechno-100);

      //other iframe src
      document.getElementById('clickedPeopleIframe').setAttribute('src','');
      document.getElementById('clickedEnvironmentIframe').setAttribute('src','');

      //display only clicked arrow of category
      document.getElementById('clickedfieldarrowPeople').style.display = 'none';
      document.getElementById('clickedfieldarrowEnvironment').style.display = 'none';      

      //arrow pointing which field is open in description
      document.getElementById('clickedfieldarrowTechno').style.display = 'block';
      document.getElementById('clickedfieldarrowTechno').style.position = 'relative';
      document.getElementById('clickedfieldarrowTechno').style.top = '-12px';
      document.getElementById('clickedfieldarrowTechno').style.left = arrowpositiontechno+'px';

      //toggle div details
      document.getElementById('clickedTechnoVid').style.height = 'auto';
      document.getElementById('clickedTechnoIframe').setAttribute('src',data[0].techno[numstrpos].link);
      document.getElementById('clickedTechnoIframeHeading').innerHTML = data[0].techno[numstrpos].videotitle;
      document.getElementById('clickedTechnoIframeDescription').innerHTML = data[0].techno[numstrpos].description;
    });
    document.getElementById(Object.keys(data[0])[0]+i).addEventListener('mouseenter',function(e){
      this.style.cursor = 'pointer';
      this.style.opacity = 0.7;
      console.log(this.id);
      document.getElementById('technoCarouselInner').appendChild(playImage);
      var leftPosition = this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2 ;
      console.log(leftPosition);
      playImage.style.left = leftPosition+'px';
      console.log(typeof playImage.style.left);
      playImage.style.top = document.getElementById('demo3').clientHeight/2 - (playImage.clientHeight)/2+'px';

    });

    document.getElementById(Object.keys(data[0])[0]+i).addEventListener('mouseleave',function(e){
      this.style.opacity = 1;
    });

  }  

  for(var j=0;j<data[0].people.length;j++){
    categories(j,data[0].people[j].thumbnail,peopleCarouselDiv,Object.keys(data[0])[1]);
    document.getElementById(Object.keys(data[0])[1]+j).addEventListener('click',function(e){
      var strget = e.target.id;
      var strpos = strget.charAt(6);
      var numstrpos = parseInt(strpos);   

      var arrowpositionpeople = this.offsetLeft + (this.offsetWidth)/2;

      //display only clicked category
      document.getElementById('clickedTechnoVid').style.display = 'none';
      document.getElementById('clickedEnvironmentVid').style.display = 'none';         
      document.getElementById('clickedPeopleVid').style.display = 'block';
      var scrollPositionPeople = document.getElementById('clickedPeopleVid').offsetTop;
      console.log(scrollPositionPeople);
      window.scrollTo(0,scrollPositionPeople-100);  

      //other iframe src
      document.getElementById('clickedTechnoIframe').setAttribute('src','');
      document.getElementById('clickedEnvironmentIframe').setAttribute('src','');          

      //display only clicked arrow of category
      document.getElementById('clickedfieldarrowTechno').style.display = 'none';
      document.getElementById('clickedfieldarrowEnvironment').style.display = 'none';

      //arrow pointing which field is open in description
      document.getElementById('clickedfieldarrowPeople').style.display = 'block';
      document.getElementById('clickedfieldarrowPeople').style.position = 'relative';
      document.getElementById('clickedfieldarrowPeople').style.top = '-12px';
      document.getElementById('clickedfieldarrowPeople').style.left = arrowpositionpeople+'px';      

      //toggle div details
      document.getElementById('clickedPeopleVid').style.height = 'auto';
      document.getElementById('clickedPeopleIframe').setAttribute('src',data[0].people[numstrpos].link);      
      document.getElementById('clickedPeopleIframeHeading').innerHTML = data[0].people[numstrpos].videotitle;
      document.getElementById('clickedPeopleIframeDescription').innerHTML = data[0].people[numstrpos].description;
    });
    document.getElementById(Object.keys(data[0])[1]+j).addEventListener('mouseenter',function(e){
      this.style.cursor = 'pointer';
      this.style.opacity = 0.7;
      console.log(this.id);
      console.log(this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2);
      document.getElementById('peopleCarouselInner').appendChild(playImage);
      playImage.style.left = this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
      playImage.style.top = document.getElementById('demo3').clientHeight/2 - (playImage.clientHeight)/2+'px';

    });

    document.getElementById(Object.keys(data[0])[1]+j).addEventListener('mouseleave',function(e){
      this.style.opacity = 1;
    });

  }

  for(var k=0;k<data[0].environment.length;k++){
    categories(k,data[0].environment[k].thumbnail,environmentCarouselDiv,Object.keys(data[0])[2]);
    document.getElementById(Object.keys(data[0])[2]+k).addEventListener('click',function(e){
      var strget = e.target.id;
      var strpos = strget.charAt(11);
      var numstrpos = parseInt(strpos); 

      var arrowpositionenvironment = this.offsetLeft + (this.offsetWidth)/2;

      //display only clicked category
      document.getElementById('clickedTechnoVid').style.display = 'none';
      document.getElementById('clickedPeopleVid').style.display = 'none';
      document.getElementById('clickedEnvironmentVid').style.display = 'block';

      //scroll
      document.getElementById('clickedEnvironmentVid').style.scrollBehavior='smooth';
      var scrollPositionEnvironment = document.getElementById('clickedEnvironmentVid').offsetTop;
      console.log(scrollPositionEnvironment);
      window.scrollTo(0,scrollPositionEnvironment-100);      

      //other iframe src
      document.getElementById('clickedPeopleIframe').setAttribute('src','');
      document.getElementById('clickedTechnoIframe').setAttribute('src','');

      //display only clicked arrow of category
      document.getElementById('clickedfieldarrowTechno').style.display = 'none';
      document.getElementById('clickedfieldarrowPeople').style.display = 'none';

      //arrow pointing which field is open in description
      document.getElementById('clickedfieldarrowEnvironment').style.display = 'block';
      document.getElementById('clickedfieldarrowEnvironment').style.position = 'relative';
      document.getElementById('clickedfieldarrowEnvironment').style.top = '-12px';
      document.getElementById('clickedfieldarrowEnvironment').style.left = arrowpositionenvironment+'px';       

      //toggle div details
      document.getElementById('clickedEnvironmentIframe').setAttribute('src',data[0].environment[numstrpos].link);
      document.getElementById('clickedEnvironmentIframeHeading').innerHTML = data[0].environment[numstrpos].videotitle;
      document.getElementById('clickedEnvironmentIframeDescription').innerHTML = data[0].environment[numstrpos].description;

    });
    document.getElementById(Object.keys(data[0])[2]+k).addEventListener('mouseenter',function(e){
      this.style.cursor = 'pointer';
      this.style.opacity = 0.7;
      console.log(this.id);
      console.log(this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2);
      document.getElementById('environmentCarouselInner').appendChild(playImage);
      playImage.style.left = this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
      playImage.style.top = document.getElementById('demo3').clientHeight/2 - (playImage.clientHeight)/2+'px';

    });

    document.getElementById(Object.keys(data[0])[2]+k).addEventListener('mouseleave',function(e){
      this.style.opacity = 1;
    });

  }    

  }
};

var pathFile = (hashValue == "")?"videodata.json":(hashValue == "#english")?"videodata.json":"videodatahindi.json";

xhttp.open("GET",pathFile, true);
xhttp.send();

//carousel height
document.getElementById('demo').style.height = '250px';
document.getElementById('demo').style.overflowY = 'hidden';
document.getElementById('demo2').style.height = '250px';
document.getElementById('demo2').style.overflowY = 'hidden';
document.getElementById('demo3').style.height = '250px';
document.getElementById('demo3').style.overflowY = 'hidden';

document.getElementById('clickedTechnoVid').style.display = 'none';
document.getElementById('clickedPeopleVid').style.display = 'none';
document.getElementById('clickedEnvironmentVid').style.display = 'none';
document.getElementById('clickedfieldarrowTechno').style.display = 'none';
document.getElementById('clickedfieldarrowPeople').style.display = 'none';
document.getElementById('clickedfieldarrowEnvironment').style.display = 'none';

document.getElementById('video1').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].techno[1].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].techno[1].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].techno[1].description;

  //other iframe src null
  document.getElementById('clickedTechnoIframe').setAttribute('src','');
  document.getElementById('clickedPeopleIframe').setAttribute('src','');
  document.getElementById('clickedEnvironmentIframe').setAttribute('src','');  

});

document.getElementById('video2').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].people[2].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].people[2].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].people[2].description;  
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
// document.getElementById('video3').style.overflowY = 'hidden';

document.getElementById('video1').style.border = '1px solid white';
document.getElementById('video2').style.border = '1px solid white';
// document.getElementById('video3').style.border = '1px solid white';

document.getElementById('closeModal').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src','');
});

var topvideocontainer = document.getElementById('topVideos');
var main = document.getElementsByClassName('big')[0];
var mini = document.getElementsByClassName('mini')[0];

topvideocontainer.style.height = '90vh';

main.style.height = '90vh';
mini.style.height = '90vh';

if(window.innerWidth < 768){

  main.style.height = '45vh';
	mini.style.height = '45vh';

  document.getElementById('demo').style.height = '100px';
  document.getElementById('demo2').style.height = '100px';
  document.getElementById('demo3').style.height = '100px';

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

var technoRow = document.getElementById('technoRow');
var peopleRow = document.getElementById('peopleRow');
var environmentRow = document.getElementById('environmentRow');
var technoCarouselDiv = document.getElementById('technoCarouselInner');
var peopleCarouselDiv = document.getElementById('peopleCarouselInner');
var environmentCarouselDiv = document.getElementById('environmentCarouselInner');

document.getElementById('socialLink').addEventListener('click',function(){
  var scrollingPosition = document.body.scrollHeight;
  window.scrollTo(0,scrollingPosition);
});

document.getElementById('ContactLink').addEventListener('click',function(){
  var scrollingPosition = document.body.scrollHeight;
  window.scrollTo(0,scrollingPosition);
});

document.getElementById('lang').addEventListener('click',function(){
  document.getElementById('languageList').style.display = 'inline';
});

document.getElementById('english').addEventListener('click',function(){
  location.reload();

  // document.getElementById('lang').innerHTML = (hashValue == "")?'English':(hashValue == "#english")?'english':'हिंदी';
});

document.getElementById('hindi').addEventListener('click',function(){
  location.reload();
    // document.getElementById('lang').innerHTML = (hashValue == "")?'English':(hashValue == "#english")?'english':'हिंदी';
});


