// pathFile = 'videodata.json';

var divCarousel,imgCarousel;

function categories(a,category,parentElement,field){
  if((a)%3 == 0){

    divCarousel = document.createElement('div');
    divCarousel.setAttribute('class','carousel-item');
    // divCarousel.setAttribute('id','div'+a);      

    imgCarousel = document.createElement('img');
    imgCarousel.setAttribute('src',category);
    imgCarousel.setAttribute('id',field+a);
    imgCarousel.setAttribute('class','col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4');
    imgCarousel.style.width = '';
    imgCarousel.style.height = ''; 

    divCarousel.appendChild(imgCarousel);
    parentElement.appendChild(divCarousel);

  }

  else{
    imgCarousel = document.createElement('img');
    imgCarousel.setAttribute('src',category);
    imgCarousel.setAttribute('id',field+a);
    imgCarousel.setAttribute('class','col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4');
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
      document.getElementById('clickedTechnoIframe').style.width = '100%';
      document.getElementById('clickedTechnoIframe').style.height = '500px';
      document.getElementById('clickedTechnoIframeHeading').innerHTML = data[0].techno[numstrpos].videotitle;
      document.getElementById('clickedTechnoIframeDescription').innerHTML = data[0].techno[numstrpos].description;
    });
    document.getElementById(Object.keys(data[0])[0]+i).addEventListener('mouseenter',function(e){
      this.style.cursor = 'pointer';
      this.style.opacity = 0.7;
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
      document.getElementById('clickedPeopleIframe').style.width = '100%';
      document.getElementById('clickedPeopleIframe').style.height = '500px';      
      document.getElementById('clickedPeopleIframeHeading').innerHTML = data[0].people[numstrpos].videotitle;
      document.getElementById('clickedPeopleIframeDescription').innerHTML = data[0].people[numstrpos].description;
    });
    document.getElementById(Object.keys(data[0])[1]+j).addEventListener('mouseenter',function(e){
      this.style.cursor = 'pointer';
      this.style.opacity = 0.7;
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

      //display only clicked arrow of category
      document.getElementById('clickedfieldarrowTechno').style.display = 'none';
      document.getElementById('clickedfieldarrowPeople').style.display = 'none';

      //arrow pointing which field is open in description
      document.getElementById('clickedfieldarrowEnvironment').style.display = 'block';
      document.getElementById('clickedfieldarrowEnvironment').style.position = 'relative';
      document.getElementById('clickedfieldarrowEnvironment').style.top = '-12px';
      document.getElementById('clickedfieldarrowEnvironment').style.left = arrowpositionenvironment+'px';       

      document.getElementById('clickedEnvironmentIframe').setAttribute('src',data[0].environment[numstrpos].link);
      document.getElementById('clickedEnvironmentIframe').style.width = '100%';
      document.getElementById('clickedEnvironmentIframe').style.height = '500px';      
      document.getElementById('clickedEnvironmentIframeHeading').innerHTML = data[0].environment[numstrpos].videotitle;
      document.getElementById('clickedEnvironmentIframeDescription').innerHTML = data[0].environment[numstrpos].description;
    });
    document.getElementById(Object.keys(data[0])[2]+k).addEventListener('mouseenter',function(e){
      this.style.cursor = 'pointer';
      this.style.opacity = 0.7;
    });

    document.getElementById(Object.keys(data[0])[2]+k).addEventListener('mouseleave',function(e){
      this.style.opacity = 1;
    });

  }    

  }
};

xhttp.open("GET",'videodata.json', true);
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
});

document.getElementById('video2').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].people[2].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].people[2].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].people[2].description;  
});

document.getElementById('video3').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].environment[0].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].environment[0].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].environment[0].description;  
});

document.getElementById('video1').style.overflowY = 'hidden';
document.getElementById('video2').style.overflowY = 'hidden';
document.getElementById('video3').style.overflowY = 'hidden';

document.getElementById('closeModal').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src','');
});

var topvideocontainer = document.getElementById('topVideos');
var mainVideo = document.getElementsByClassName('big')[0];
var miniVideo1 = document.getElementsByClassName('mini')[0];
var miniVideo2 = document.getElementsByClassName('mini')[1];

topvideocontainer.style.height = '400px';

mainVideo.style.height = topvideocontainer.offsetHeight+'px';

miniVideo1.style.height = (topvideocontainer.offsetHeight)/2+'px';

miniVideo2.style.height = (topvideocontainer.offsetHeight)/2+'px';

if(window.innerWidth < 768){
	mainVideo.style.height = '130px';
	miniVideo1.style.height = '130px';
	miniVideo2.style.height = '130px';
}

var technoRow = document.getElementById('technoRow');
var peopleRow = document.getElementById('peopleRow');
var environmentRow = document.getElementById('environmentRow');
var technoCarouselDiv = document.getElementById('technoCarouselInner');
var peopleCarouselDiv = document.getElementById('peopleCarouselInner');
var environmentCarouselDiv = document.getElementById('environmentCarouselInner');

document.getElementById('languageBox').addEventListener('click',function(){
  document.getElementById('languagesAvailable').style.display = 'inline-block';
});

document.getElementById('closeLanguageBox').addEventListener('click',function(){
  document.getElementById('languagesAvailable').style.display = 'none';
});

// document.getElementById('english').addEventListener('click',function(){
//   document.getElementById('language').innerHTML = 'English';  
// });

// document.getElementById('hindi').addEventListener('click',function(){
//   document.getElementById('language').innerHTML = 'हिन्दी'; 
//   console.log('Hindi');
// });

function clodeIframe(arrow,opened,iframesrc){
  document.getElementById(arrow).style.display = 'none';
  document.getElementById(opened).style.display = 'none';
  document.getElementById(iframesrc).setAttribute('src','');  
}

document.getElementById('clickedTechnoIframeclose').addEventListener('click',function(){
  clodeIframe('clickedfieldarrow','clickedTechnoVid','clickedTechnoIframe');
  // document.getElementById('clickedfieldarrow').style.display = 'none';
  // document.getElementById('clickedTechnoVid').style.display = 'none';
  // document.getElementById('clickedTechnoIframe').setAttribute('src','');
});

document.getElementById('clickedPeopleIframeclose').addEventListener('click',function(){
  document.getElementById('clickedfieldarrow').style.display = 'none';
  document.getElementById('clickedPeopleVid').style.display = 'none';
  document.getElementById('clickedPeopleIframe').setAttribute('src','');
});

document.getElementById('clickedEnvironmentIframeclose').addEventListener('click',function(){
  document.getElementById('clickedEnvironmentVid').style.display = 'none';
  document.getElementById('clickedEnvironmentIframe').setAttribute('src','');
});
