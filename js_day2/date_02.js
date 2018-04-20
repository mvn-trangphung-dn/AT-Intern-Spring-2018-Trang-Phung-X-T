var url_default = 'https://www.youtube.com/embed/zsWLgD8X-eE';
var videosList = [
    {
        id: 1,
       url: 'https://www.youtube.com/embed/zsWLgD8X-eE',
        title: 'Hồi Ức - Phan Mạnh Quỳnh | Tập 7 Trại Sáng Tác 24H | Sing My Song - Bài Hát Hay Nhất 2016 [Official]'
    },
    {
        id: 2,
        url: 'https://www.youtube.com/embed/yrgoecQwsPg',
        title: 'Việt Nam Những Chuyến Đi - Vicky Nhung| Tập 7 Trại Sáng Tác 24H|Sing My Song'
    },
     {
        id: 3,
        url: 'https://www.youtube.com/embed/KhJRacnGz2U',
        title: 'Hương À - Nguyễn Đình Khương | Tập 3 Sing My Song - Bài Hát Hay Nhất 2018'
    },
     {
        id: 4,
        url: 'https://www.youtube.com/embed/vqiYI2V56XM',
        title: 'Cứ Yêu Đi - Đức Phúc ft Hòa Minzy (OST 100 Ngày Bên Em) Bài Hát Hay Nhất 2016 [Official]'
    },
     {
        id: 5,
        url: 'https://www.youtube.com/embed/KhJRacnGz2U',
        title: 'Hương À - Nguyễn Đình Khương | Tập 3 Sing My Song - Bài Hát Hay Nhất 2018'
    },
     {
        id: 6,
        url: 'https://www.youtube.com/embed/Z8av3gSa6YQ',
        title: 'Chí Phèo - Bùi Công Nam | Tập 7 Trại Sáng Tác 24H | Sing My Song - Bài Hát Hay Nhất 2016 [Official]'
    },
     {
        id: 7,
        url: 'https://www.youtube.com/embed/zsWLgD8X-eE',
        title: 'Hồi Ức - Phan Mạnh Quỳnh | Tập 7 Trại Sáng Tác 24H | Sing My Song - Bài Hát Hay Nhất 2016 [Official]'
    },
     {
        id: 8,
        url: 'https://www.youtube.com/embed/yrgoecQwsPg',
        title: 'Việt Nam Những Chuyến Đi - Vicky Nhung| Tập 7 Trại Sáng Tác 24H|Sing My Song - Bài Hát Hay Nhất 2016  '        
    },
     {
        id: 9,
        url: 'https://www.youtube.com/embed/7VqwpM5bCU8',
        title: 'Cha Già Rồi Đúng Không?" - Phạm Hồng Phước | Tập 6 Trại Sáng Tác 24H | Sing My Song 2016'
    },
     {
        id: 10,
        url: 'https://www.youtube.com/embed/6F8fyz5B7F4',
        title: 'Vỡ Tan - Trịnh Thăng Bình | Tập 4 | Sing My Song - Bài Hát Hay Nhất 2016 [Official]'
    },
]
var id = 0;
var i = 0;
len =videosList.length;

function init() {
  url_video = localStorage.getItem("my-video") || url_default;
  i =  localStorage.getItem("my-video-id") || id;
  document.getElementById("video_id").setAttribute("src", url_video);

  for (let i = 0; i < len; i++) {
    var divLi = document.createElement("li");
    divLi.setAttribute("id", "video-item" + i);
    document.getElementById("my-list-video").appendChild(divLi);
  }
  for (let i = 0; i < len; i++) {
    item_list = document.getElementsByTagName("li")[i];
    var ifr = document.createElement("iframe");
    ifr.setAttribute("class", "video-item");
    ifr.setAttribute("src", videosList[i].url);
    item_list.appendChild(ifr);
    
    var div_content = document.createElement("content-video");
    var element_title = document.createElement("p");
    var title = document.createTextNode(videosList[i].title);
    element_title.appendChild(title);
    item_list.appendChild(div_content);
    div_content.appendChild(element_title);
  }
  document.getElementById("video-item" + i).style.color = "blue";
}

function initEventListener() {
  for (let i = 0; i < len; i++) {
    document.getElementById("video" + i).addEventListener("click", function() {
      loadVideoItem(i);
    });
  }
}
  
function loadVideoItem(i) {
  url_video = videosList[i].url;
  i = videosList[i].id - 1;
  document.getElementById("video_id").setAttribute("src", url_video);
  localStorage.setItem("my-video", url_video);
  localStorage.setItem("my-video-id", i);
}

function back() {
  if (i <= 0)  {
    alert('too far!');
    return;
  } else {
    i--;
    loadVideoItem(i);
    document.getElementById("video-item" + (i + 1) ).style.color = "black";
    document.getElementById("video-item" + i).style.color = "blue";
  }
}

function next() {
  if (i >= len-1) {
    alert('too far!');
    return;
  } else {
    i++;
    loadVideoItem(i);
    document.getElementById("video-item" + (i - 1) ).style.color = "black";
    document.getElementById("video-item" + i).style.color = "blue";
  }
}

init();
initEventListener();

