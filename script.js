var divCarousel,imgCarousel;

var playImage = document.createElement('img');
playImage.setAttribute('src','./assets/staartlPlay.png');
playImage.setAttribute('id','staartlPlay');

document.getElementById('clickedTechnoIframe').style.opacity = 0;
document.getElementById('clickedPeopleIframe').style.opacity = 0;
document.getElementById('clickedEnvironmentIframe').style.opacity = 0;

function categories(a,category,parentElement,field){
  if((a)%3 == 0){

    divCarousel = document.createElement('div');
    divCarousel.setAttribute('class','carousel-item carouselHeight');
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
    divCarousel.setAttribute('class','carousel-item active carouselHeight');  
  }

}

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(typeof data);        

  for(var i=0;i<data[0].techno.length;i++){
    categories(i,data[0].techno[i].thumbnail,technoCarouselDiv,Object.keys(data[0])[0]); 
    
    document.getElementById(Object.keys(data[0])[0]+i).addEventListener('mouseenter',function(e){
      var getId = this.id;
      document.getElementById('technoCarouselInner').appendChild(playImage);
      var leftPosition = this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2 ;
      playImage.style.left = leftPosition+'px';
      playImage.style.top = document.getElementById('demo3').clientHeight/2 - (playImage.clientHeight)/2+'px';       

      playImage.addEventListener('click',function(){
        this.style.cursor = 'pointer';
        var hovergetId = document.querySelector('#'+getId).getAttribute('id');
        console.log(hovergetId);


        var strget = hovergetId;
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
        document.getElementById('clickedPeopleIframe').setAttribute('src',null);
        document.getElementById('clickedEnvironmentIframe').setAttribute('src',null);

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
        document.getElementById('clickedTechnoIframeDescription').style.fontFamily = 'fantasy';
        
        //delay in display iframe
        setTimeout(function(){
          document.getElementById('clickedTechnoIframe').style.opacity = 1;
          document.getElementById('clickedPeopleIframe').style.opacity = 0;
          document.getElementById('clickedEnvironmentIframe').style.opacity = 0;
          console.log('techno');
        },1000);

      });           

    });

    document.getElementById(Object.keys(data[0])[0]+i).addEventListener('mouseleave',function(e){
      this.style.opacity = 1;

    });

  }  

  for(var j=0;j<data[0].people.length;j++){
    categories(j,data[0].people[j].thumbnail,peopleCarouselDiv,Object.keys(data[0])[1]);
    
    document.getElementById(Object.keys(data[0])[1]+j).addEventListener('mouseenter',function(e){
      var getId = this.id;
      document.getElementById('peopleCarouselInner').appendChild(playImage);
      playImage.style.left = this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
      playImage.style.top = document.getElementById('demo3').clientHeight/2 - (playImage.clientHeight)/2+'px';

      playImage.addEventListener('click',function(){
        this.style.cursor = 'pointer';
        var hovergetId = document.querySelector('#'+getId).getAttribute('id');
        console.log(hovergetId);

        var strget = hovergetId;
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
        document.getElementById('clickedTechnoIframe').setAttribute('src',null);
        document.getElementById('clickedEnvironmentIframe').setAttribute('src',null);          

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
        document.getElementById('clickedPeopleIframeDescription').style.fontFamily = 'fantasy';
      
        //delay in display iframe
        setTimeout(function(){
          document.getElementById('clickedPeopleIframe').style.opacity = 1;
          document.getElementById('clickedTechnoIframe').style.opacity = 0;
          document.getElementById('clickedEnvironmentIframe').style.opacity = 0;          
          console.log('people');
        },1000);

      }); 

    });

    document.getElementById(Object.keys(data[0])[1]+j).addEventListener('mouseleave',function(e){
      this.style.opacity = 1;
    });

  }

  for(var k=0;k<data[0].environment.length;k++){
    categories(k,data[0].environment[k].thumbnail,environmentCarouselDiv,Object.keys(data[0])[2]);
    
    document.getElementById(Object.keys(data[0])[2]+k).addEventListener('mouseenter',function(e){
      var getId = this.id;
      document.getElementById('environmentCarouselInner').appendChild(playImage);
      playImage.style.left = this.offsetLeft + (this.clientWidth)/2 - (playImage.clientWidth)/2+'px';
      playImage.style.top = document.getElementById('demo3').clientHeight/2 - (playImage.clientHeight)/2+'px';

      playImage.addEventListener('click',function(){
        this.style.cursor = 'pointer';
        var hovergetId = document.querySelector('#'+getId).getAttribute('id');
        console.log(hovergetId);

        var strget = hovergetId;
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
        document.getElementById('clickedPeopleIframe').setAttribute('src',null);
        document.getElementById('clickedTechnoIframe').setAttribute('src',null);

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
        document.getElementById('clickedEnvironmentIframeDescription').style.fontFamily = 'fantasy';
      
        //delay in display iframe
        setTimeout(function(){
          document.getElementById('clickedEnvironmentIframe').style.opacity = 1;
          document.getElementById('clickedPeopleIframe').style.opacity = 0;
          document.getElementById('clickedTechnoIframe').style.opacity = 0;          
          console.log('environemnt');
        },1000);

      }); 

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

//Left Right arrow appear
document.getElementById('demo').addEventListener('mouseenter',function(){
  document.getElementsByClassName('signs')[0].style.display = 'block';
  document.getElementsByClassName('signs')[1].style.display = 'block';
});

document.getElementById('demo2').addEventListener('mouseenter',function(){
  document.getElementsByClassName('signs2')[0].style.display = 'block';
  document.getElementsByClassName('signs2')[1].style.display = 'block';
});

document.getElementById('demo3').addEventListener('mouseenter',function(){
  document.getElementsByClassName('signs3')[0].style.display = 'block';
  document.getElementsByClassName('signs3')[1].style.display = 'block';
});

document.getElementById('demo').addEventListener('mouseleave',function(){
  document.getElementsByClassName('signs')[0].style.display = 'none';
  document.getElementsByClassName('signs')[1].style.display = 'none';  
});

document.getElementById('demo2').addEventListener('mouseleave',function(){
  document.getElementsByClassName('signs2')[0].style.display = 'none';
  document.getElementsByClassName('signs2')[1].style.display = 'none';  
});

document.getElementById('demo3').addEventListener('mouseleave',function(){
  document.getElementsByClassName('signs3')[0].style.display = 'none';
  document.getElementsByClassName('signs3')[1].style.display = 'none';  
});

//staartlplay button remove
document.getElementById('demo').addEventListener('mouseleave',function(){
  document.getElementById('staartlPlay').remove();
});

document.getElementById('demo2').addEventListener('mouseleave',function(){
  document.getElementById('staartlPlay').remove();
});

document.getElementById('demo3').addEventListener('mouseleave',function(){
  document.getElementById('staartlPlay').remove();
});

//carousel height
// document.getElementById('demo').style.height = '250px';
// document.getElementById('demo').style.overflowY = 'hidden';
// document.getElementById('demo2').style.height = '250px';
// document.getElementById('demo2').style.overflowY = 'hidden';
// document.getElementById('demo3').style.height = '250px';
// document.getElementById('demo3').style.overflowY = 'hidden';

document.getElementById('clickedTechnoVid').style.display = 'none';
document.getElementById('clickedPeopleVid').style.display = 'none';
document.getElementById('clickedEnvironmentVid').style.display = 'none';
document.getElementById('clickedfieldarrowTechno').style.display = 'none';
document.getElementById('clickedfieldarrowPeople').style.display = 'none';
document.getElementById('clickedfieldarrowEnvironment').style.display = 'none';

document.getElementById('closeModal').addEventListener('click',function(){
  document.getElementById('modalBox').setAttribute('src',null);
});

var topvideocontainer = document.getElementById('topVideos');
var main = document.getElementsByClassName('big')[0];
var mini = document.getElementsByClassName('mini')[0];

// topvideocontainer.style.height = '90vh';

// main.style.height = '90vh';
// mini.style.height = '90vh';

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
});

document.getElementById('hindi').addEventListener('click',function(){
  location.reload();
});


