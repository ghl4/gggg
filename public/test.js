const string= `
.skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}
.nose{
    border: 10px solid #000;
    border-color: #000 transparent transparent transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 8px;
    
    background:#000;
    top: -18px;
    left: -10px;
    border-radius: 10px 10px 0 0;
}
.eye{
    position: absolute;
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background:#2e2e2e ;
}
.eye::before{
    content: '';
    display: block;
    border: 2px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    position: relative;
    top: 2px;
    left: 4px;
    border-radius:50% ;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{   
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border: 3px solid #000;
    height: 30px;
    width: 102px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg)translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform: rotate(15deg)translateX(55px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .down{
    height: 180px;
    width: 100%;
    position: absolute;
    top: 5px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 100px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    border: 1px solid #ff485f;
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face{
    position:absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}
`
let time = 100

const run = ()=>{
    n=n+1
    if(n>string.length){
        window.clearInterval(id)
        return
    }  
    demo2.innerHTML=string.substring(0,n)
    demo.innerText=string.substring(0,n)
    demo.scrollTop=demo.scrollHeight
}

let n=1;
demo2.innerHTML=string.substring(0,n)
demo.innerText=string.substring(0,n)

const play = ()=>{
    return setInterval(run,time)
}
const pause=()=>{
    window.clearInterval(id)
}
const slow=()=>{
    pause()
    time=300
    id = play()
}
const normal=()=>{
    pause()
    time=100
    id = play()
}
const fast=()=>{
    pause()
    time=0
    id = play()
}
let id = play()
btnPause.onclick=()=>{
    pause()
}
btnPlay.onclick=()=>{
    id = play()
}
btnSlow.onclick=slow
btnNormal.onclick=normal
btnFast.onclick=fast