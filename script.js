pathFile = 'videodata.json';

  var divCarousel,imgCarousel;

  function categories(a,category,parentElement,iframesrc){
    if((a)%3 == 0){

      divCarousel = document.createElement('div');
      divCarousel.setAttribute('class','carousel-item');
      // divCarousel.setAttribute('id','div'+a);      

      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',category);
      imgCarousel.setAttribute('id',a);
      imgCarousel.setAttribute('class','col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4');
      imgCarousel.style.width = '';
      imgCarousel.style.height = ''; 

      divCarousel.appendChild(imgCarousel);
      parentElement.appendChild(divCarousel);

    }

    else{
      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',category);
      imgCarousel.setAttribute('id',a);
      imgCarousel.setAttribute('class','col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4');
      imgCarousel.style.width = '';
      imgCarousel.style.height = '';

      divCarousel.appendChild(imgCarousel);

    }

    if(a==0){
      divCarousel.setAttribute('class','carousel-item active');  

    }

  }

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(typeof data);

  for(var i=0;i<data[0].techno.length;i++){
    categories(i,data[0].techno[i].thumbnail,technoCarouselDiv); 
    document.getElementById(i).addEventListener('click',function(){
      var xyz = this;
      console.log(xyz.id);
      document.getElementById('clickedTechnoVid').style.display = 'block';
      document.getElementById('clickedTechnoIframe').setAttribute('src',data[0].techno[this.id].link);
      document.getElementById('clickedTechnoIframeHeading').innerHTML = data[0].techno[this.id].videotitle;
      document.getElementById('clickedTechnoIframeDescription').innerHTML = data[0].techno[this.id].description;
    });       
  }  

  for(var j=0;j<data[0].people.length;j++){
    categories(j,data[0].people[j].thumbnail,peopleCarouselDiv);
    document.getElementById(j).addEventListener('click',function(){
      var abc = this;
      console.log(abc);
      document.getElementById('clickedPeopleVid').style.display = 'block';
      document.getElementById('clickedPeopleIframe').setAttribute('src',data[0].people[this.id].link);
      document.getElementById('clickedPeopleIframeHeading').innerHTML = data[0].people[this.id].videotitle;
      document.getElementById('clickedPeopleIframeDescription').innerHTML = data[0].people[this.id].description;
    });    
  }

  for(var k=0;k<data[0].environment.length;k++){
    categories(k,data[0].environment[k].thumbnail,environmentCarouselDiv);
    document.getElementById(k).addEventListener('click',function(){
      var def = this;
      console.log(def.id);
      document.getElementById('clickedEnvironmentVid').style.display = 'block';
      document.getElementById('clickedEnvironmentIframe').setAttribute('src',data[0].environment[this.id].link);
      document.getElementById('clickedEnvironmentIframeHeading').innerHTML = data[0].environment[this.id].videotitle;
      document.getElementById('clickedEnvironmentIframeDescription').innerHTML = data[0].environment[this.id].description;
    });    
  }    

  }
};

xhttp.open("GET", pathFile, true);
xhttp.send();

// document.getElementById('clickedTechnoVid').style.display = 'none';
// document.getElementById('clickedPeopleVid').style.display = 'none';
// document.getElementById('clickedEnvironmentVid').style.display = 'none';

document.getElementById('video1').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].techno[0].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].techno[0].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].techno[0].description;
});

document.getElementById('video2').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].techno[1].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].techno[1].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].techno[1].description;  
});

document.getElementById('video3').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',data[0].techno[2].link);
  document.getElementsByClassName('modal-title')[0].innerHTML = data[0].techno[2].videotitle;
  document.getElementById('modalBody').innerHTML = data[0].techno[2].description;  
});

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

document.getElementById('english').addEventListener('click',function(){
  document.getElementById('language').innerHTML = 'English';  
});

document.getElementById('hindi').addEventListener('click',function(){
  document.getElementById('language').innerHTML = 'हिन्दी'; 
});

document.getElementById('clickedTechnoIframeclose').addEventListener('click',function(){
  document.getElementById('clickedTechnoVid').style.display = 'none';
  document.getElementById('clickedTechnoIframe').setAttribute('src','');
});

document.getElementById('clickedPeopleIframeclose').addEventListener('click',function(){
  document.getElementById('clickedPeopleVid').style.display = 'none';
  document.getElementById('clickedPeopleIframe').setAttribute('src','');
});

document.getElementById('clickedEnvironmentIframeclose').addEventListener('click',function(){
  document.getElementById('clickedEnvironmentVid').style.display = 'none';
  document.getElementById('clickedEnvironmentIframe').setAttribute('src','');
});

console.log(pathFile);