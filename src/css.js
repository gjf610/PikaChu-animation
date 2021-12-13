const string = `
#html {
  background-color: #f4dc26;
}

.face {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  transform: translateY(80px);
}
.nose {
  position: relative;
  top: 145px;
  left: 50%;
  width: 100px;
  border: 10px solid;
  margin-left: -10px;
  z-index: 10;
  width: 0px;
  height: 0px;
  border-top-color: black;
  border-right-color: transparent;
  border-bottom: none;
  border-left-color: transparent;
}

.yuan {
  position: absolute;
  top: -16px;
  left: -10px;
  width: 20px;
  height: 6px;
  border-radius: 50%;
  border-radius: 14px 14px 0 0;
  background: black;
}
.eye {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #232222;
  border-radius: 50%;
}

.eye.right {
  transform: translateX(-10px);
}
.eye.left {
  transform: translateX(110px);
}
.shine {
  position:absolute;
  right: 10px; 
  top: 20px;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-color: #FFF;
  border-radius: 50%;
}

.shine.left {
  transform: translateX(-40px);
}

.blink {
  visibility: hidden;
  position: absolute;
  width: 100px;  
  height: 50px;
  border-radius: 50%;
  border-top: 10px solid #232222;
  top: 30px; left: -40px;
}

.blush {
  position: absolute;
  top: 0;
  width: 80px;
  height:80px;
  border-radius: 50%;
  margin: 120px; 
  background-color: #e92929;
  opacity: 0.5;
}

.blush.left {
  transform: translateX(-155px);
}

.blush.right {
  transform: translateX(135px);
}

.mouth {
  position: absolute;
  top: 200px; 
  left: 90px;
  width: 130px;  
  height: 20px;
  border-radius: 0% 0% 100% 100%;
  border-bottom: 4px solid;
}

.face:hover > .blink {
  visibility: visible;
}
.face:hover > .eye.right {
  visibility: hidden;
}
@keyframes wave {
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
`
export default string