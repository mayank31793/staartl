var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data[0].techno[0].videotitle);
    console.log(data[0].people[0].videotitle);

  for(var i=0;i<data[0].techno.length;i++){
    var item = document.createElement('div');
    item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');
    // item.style.position = 'absolute';
    // item.style.display = 'inline-block';
    // item.style.float = 'left';

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src','./assets/square.png');
    itemImage.setAttribute('class','thumbnail');

    item.appendChild(itemImage);
    technoRow.appendChild(item);
  }

  for(var i=0;i<data[0].people.length;i++){
    var item = document.createElement('div');
    item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src','./assets/square.png');
    itemImage.setAttribute('class','thumbnail');

    item.appendChild(itemImage);
    peopleRow.appendChild(item);
  }

  for(var i=0;i<data[0].environment.length;i++){
    var item = document.createElement('div');
    item.setAttribute('class','col=xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center technoVideo');

    var itemImage = document.createElement('img');
    itemImage.setAttribute('src','./assets/square.png');
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

document.getElementById('technovid').addEventListener('mouseover',function(){
  this.innerHTML += `
    <div id="rightArrow">
      <svg height="80" width="30">
        <polygon points="0,0 0,80 30,40" style="fill:#181819;stroke:purple;stroke-width:0" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  `;
  document.getElementById('rightArrow').style.position = 'relative';
  document.getElementById('rightArrow').style.top = '0px';
  document.getElementById('rightArrow').style.right = '0px';
  document.getElementById('rightArrow').style.display = 'inline';
});

document.getElementById('technovid').addEventListener('mouseout',function(){
  document.getElementById('rightArrow').style.display = 'none';
});

var technoRow = document.getElementById('technoRow');
var peopleRow = document.getElementById('peopleRow');
var environmentRow = document.getElementById('environmentRow');

