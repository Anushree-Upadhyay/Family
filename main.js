
var reasons = [
    "Dad",
    "Me",
    "Mom",
  "Sister",
    "Dog",
  "Rabbit",
  ];
  var images = [ "https://us.123rf.com/450wm/colorfuelstudio/colorfuelstudio2104/colorfuelstudio210400150/167735158-young-good-looking-father-holding-hand-and-walk-with-kid.jpg?ver=6",
    "https://image.shutterstock.com/image-vector/little-girl-show-agreement-thumb-260nw-1901196016.jpg"
                 ,"https://thumbs.dreamstime.com/b/happy-cute-kids-boy-girl-hug-mom-168504734.jpg", "https://cdn.xxl.thumbs.canstockphoto.com/young-good-looking-woman-doing-arm-crossed-pose-with-confident-eps-vector_csp91618987.jpg" ,"https://cdn2.vectorstock.com/i/1000x1000/23/81/clip-art-animal-dog-dog-body-position-sitting-vector-25502381.jpg","https://img.freepik.com/free-vector/white-rabbit-cartoon-white-background_1308-66612.jpg?w=2000"
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  
  
  