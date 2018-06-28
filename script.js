var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data[0].techno[0].videotitle);
    console.log(data[0].people[0].videotitle);

  // for(var i=0;i<data[0].techno.length;i++){
  //   var item = document.createElement('div');
  //   item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');

  //   var itemImage = document.createElement('img');
  //   itemImage.setAttribute('src',data[0].techno[i].thumbnail);
  //   itemImage.setAttribute('class','thumbnail');

  //   item.appendChild(itemImage);
  //   technoRow.appendChild(item);
  // }

  var divCarousel,imgCarousel;

  for(var i=0;i<data[0].techno.length;i++){

    if((i)%3 == 0){

      divCarousel = document.createElement('div');
      divCarousel.setAttribute('class','carousel-item');
      divCarousel.setAttribute('id',i);      

      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',data[0].techno[i].thumbnail);
      imgCarousel.setAttribute('id',i);
      imgCarousel.style.width = '32vw';
      imgCarousel.style.height = '180px'; 

      divCarousel.appendChild(imgCarousel);
      technoCarouselDiv.appendChild(divCarousel);
      console.log('inside techno multiple 3',data[0].techno[i].thumbnail);

    }

    else{
      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',data[0].techno[i].thumbnail);
      imgCarousel.setAttribute('id',i);
      imgCarousel.style.width = '32vw';
      imgCarousel.style.height = '180px';

      divCarousel.appendChild(imgCarousel);
      console.log('inside techno not multiple 3',data[0].techno[i].thumbnail);
    }

    if(i==0){
      divCarousel.setAttribute('class','carousel-item active');
    }

  }  

  for(var i=0;i<data[0].people.length;i++){
    // var item = document.createElement('div');
    // item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');

    // var itemImage = document.createElement('img');
    // itemImage.setAttribute('src',data[0].people[i].thumbnail);
    // itemImage.setAttribute('class','thumbnail');

    // item.appendChild(itemImage);
    // peopleRow.appendChild(item);

    if((i)%3 == 0){

      divCarousel = document.createElement('div');
      divCarousel.setAttribute('class','carousel-item');
      divCarousel.setAttribute('id',i); 

      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',data[0].people[i].thumbnail);
      imgCarousel.setAttribute('id',i);
      imgCarousel.style.width = '32vw';
      imgCarousel.style.height = '180px';      

      divCarousel.appendChild(imgCarousel);
      peopleCarouselDiv.appendChild(divCarousel);
      console.log('inside techno multiple 3',data[0].people[i].thumbnail);

    }

    else{
      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',data[0].people[i].thumbnail);
      imgCarousel.setAttribute('id',i);
      imgCarousel.style.width = '32vw';
      imgCarousel.style.height = '180px';

      divCarousel.appendChild(imgCarousel);
      console.log('inside techno not multiple 3',data[0].people[i].thumbnail);
    }

    if(i==0){
      divCarousel.setAttribute('class','carousel-item active');
    }

  }

  for(var i=0;i<data[0].environment.length;i++){
    // var item = document.createElement('div');
    // item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');

    // var itemImage = document.createElement('img');
    // itemImage.setAttribute('src',data[0].environment[i].thumbnail);
    // itemImage.setAttribute('class','thumbnail');

    // item.appendChild(itemImage);
    // environmentRow.appendChild(item);

    if((i)%3 == 0){

      divCarousel = document.createElement('div');
      divCarousel.setAttribute('class','carousel-item');
      divCarousel.setAttribute('id',i); 

      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',data[0].environment[i].thumbnail);
      imgCarousel.setAttribute('id',i);
      imgCarousel.style.width = '32%';
      imgCarousel.style.height = '180px';

      divCarousel.appendChild(imgCarousel);
      environmentCarouselDiv.appendChild(divCarousel);
      console.log('inside techno multiple 3',data[0].environment[i].thumbnail);

    }

    else{
      imgCarousel = document.createElement('img');
      imgCarousel.setAttribute('src',data[0].environment[i].thumbnail);
      imgCarousel.setAttribute('id',i);
      imgCarousel.style.width = '32vw';
      imgCarousel.style.height = '180px';

      divCarousel.appendChild(imgCarousel);
      console.log('inside techno not multiple 3',data[0].environment[i].thumbnail);
    }

    if(i==0){
      divCarousel.setAttribute('class','carousel-item active');
    }

  }    

  }
};

xhttp.open("GET", "videodata.json", true);
xhttp.send();

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

closeLanguageBox

document.getElementById('closeLanguageBox').addEventListener('click',function(){
  document.getElementById('languagesAvailable').style.display = 'none';
});

document.getElementById('english').addEventListener('click',function(){
  document.getElementById('language').innerHTML = 'English';  
});

document.getElementById('hindi').addEventListener('click',function(){
  document.getElementById('language').innerHTML = 'हिन्दी';  
});