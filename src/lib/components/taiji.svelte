<div class="taiji-wrap shadow-lg">
    <div class="taiji">
        <div></div>
        <div></div>
    </div>
</div>

<style>
.taiji-wrap{
    width: 40%;
    height: 40%;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: transparent;
}
@-webkit-keyframes taijiR{
    0%{-webkit-transform: rotate(0deg);}
    100%{-webkit-transform: rotate(360deg);}
}
@-moz-keyframes taijiR{
    0%{-moz-transform: rotate(0deg);}
    100%{-moz-transform: rotate(360deg);}
}
@keyframes taijiR{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
@-ms-keyframes taijiR{
    0%{-ms-transform: rotate(0deg);}
    100%{-ms-transform: rotate(360deg);}
}   
.taiji{
    position: relative;
    width: 36px;
    height: 36px;
    border: 0px solid black;
    overflow: hidden;
    -webkit-animation: taijiR 5s linear infinite;
    -moz-animation: taijiR 5s linear infinite;
    -ms-animation: taijiR 5s linear infinite;
    animation: taijiR 5s linear infinite;
}
.taiji,
.taiji > div:before,
.taiji > div:after{
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
}   
.taiji > div{
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: currentcolor;
}
.taiji > div:first-of-type{
    left: 0;
    color: #FFFFFF;
}
.taiji > div:last-of-type{
    right: 0;
    color: #000000;
}
.taiji > div:before,
.taiji > div:after{
    position: absolute;
    content: '';
    background: currentcolor;
}
.taiji > div:before{
    width: 100%;
    height: 50%;
    z-index: 1;
}
.taiji > div:first-of-type::before{
    top: 0;
    left: 50%;
}
.taiji > div:last-of-type::before{
    bottom: 0;
    right: 50%;
}
.taiji > div:after{
    width: 25%;
    height: 12.5%;
    z-index: 2;
}
.taiji > div:first-of-type::after{
    bottom: 18.75%;
    right: -12.5%;
}
.taiji > div:last-of-type::after{
    top: 18.75%;
    left: -12.5%;
}
</style>