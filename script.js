var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data[0].techno[0].videotitle);
    console.log(data[0].people[0].videotitle);

  for(var i=0;i<data[0].techno.length;i++){
    var item = document.createElement('div');
    // item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');
    item.setAttribute('class','technoVideo');

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src',data[0].techno[i].thumbnail);
    itemImage.setAttribute('class','thumbnail');
    itemImage.setAttribute('id',i);
    itemImage.setAttribute('href','#demo');
    itemImage.setAttribute('data-toggle','collapse');
    // document.getElementById('collapsableDivTechno').setAttribute('src',data[0].techno[i].link);
    itemImage.addEventListener('click',function(){
      console.log(this);
      var selected = this.getAttribute('id');
      document.getElementById('collapsableDivTechno').setAttribute('src',data[0].techno[selected].link);
      document.getElementById('demo').setAttribute('class','in');
    });

    item.appendChild(itemImage);
    technoRow.appendChild(item);
  }

  for(var i=0;i<data[0].people.length;i++){
    var item = document.createElement('div');
    item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src',data[0].people[i].thumbnail);
    itemImage.setAttribute('class','thumbnail');

    item.appendChild(itemImage);
    peopleRow.appendChild(item);
  }

  for(var i=0;i<data[0].environment.length;i++){
    var item = document.createElement('div');
    item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src',data[0].environment[i].thumbnail);
    itemImage.setAttribute('class','thumbnail');

    item.appendChild(itemImage);
    environmentRow.appendChild(item);
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

// document.getElementById('technovid').addEventListener('mouseenter',function(){
//   document.getElementById('rightArrow').style.display = 'inline';
// });

// document.getElementById('technovid').addEventListener('mouseleave',function(){
//   document.getElementById('rightArrow').style.display = 'none';
// });

var technoRow = document.getElementById('technoRow');
var peopleRow = document.getElementById('peopleRow');
var environmentRow = document.getElementById('environmentRow');

