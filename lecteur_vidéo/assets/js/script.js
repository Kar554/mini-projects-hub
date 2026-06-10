let video=document.querySelector("video");
let bntPause=document.querySelector(".btnPause");
let currentBar=document.querySelector(".range-bar input");
let volumeBar=document.querySelector(".range-vol input");
let file=document.getElementById("file");
let videoIcon=document.querySelector(".icon-video-center");
function pause(){
    if(video.paused){
        videoIcon.style.display="none";
        bntPause.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5V19M16 5V19" stroke="Currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
        video.play();
    }
    else{
        videoIcon.style.display="block";
        bntPause.innerHTML=`
       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="Currentcolor" stroke-width="2" stroke-linejoin="round"></path> </g></svg>`
        video.pause();
    }
}
video.addEventListener("click",function(){
    pause();
})
video.addEventListener("loadedmetadata",function(){
    currentBar.max=video.duration;
    
})
currentBar.addEventListener("input",function(){
    video.currentTime=currentBar.value;
})
video.addEventListener("timeupdate",function(){
    currentBar.value=video.currentTime;
})

volumeBar.addEventListener("input",function(){
    video.volume=volumeBar.value;
})
// function volshow(){
//     volumeBar.classList.toggle("show");
//     volumeBar.style.display=
//     volumeBar.style.display === "none" ? "block" : "none";
// }
function volshow() {
    volumeBar.value = 
        volumeBar.value === 0 ? 1 : 0;
}
function full(){
    video.requestFullscreen();
}
file.addEventListener("change",function(){
   video.src=URL.createObjectURL(file.files[0]);
   console.log(file.files);
})