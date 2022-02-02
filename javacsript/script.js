var watch=document.getElementById("red_watch");

var blackwatch=document.getElementById("black_btn");
blackwatch.addEventListener('click',function(){
    watch.src="/images/Black Watch.png";
});

var redwatch=document.getElementById('red_btn');
redwatch.addEventListener('click',function(){
    watch.src="/images/Red Watch.png";
});

var bluewatch=document.getElementById('blue_btn');
bluewatch.addEventListener('click',function(){
    watch.src="/images/Blue Watch.png";
});

var purplewatch=document.getElementById('purple_btn');
purplewatch.addEventListener('click',function(){
    watch.src="/images/Purple Watch.png";
});

var timeChange=document.getElementById("time_btn");
timeChange.addEventListener('click', function startTime(){
    heartText.style.display='none';
    var currentDate= new Date();
    let h=currentDate.getHours();
    let m=currentDate.getMinutes();
    let s=currentDate.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById("time").innerHTML=h+":"+m+":"+s;
    //setTimeout(startTime,1000);
    function checkTime(i){
        if(i<10){i="0"+i};
        return i;
    }
})

var heartBeat=document.getElementById("heartrate_btn");
var heartText=document.getElementById("heart");
heartBeat.addEventListener('click',function(){
    document.getElementById("time").innerHTML='<i id="sun" class="fas fa-heartbeat"></i>';
    document.getElementById("heart").innerHTML="78";
    document.getElementById("heart").style.display='block';
})
