<div class="universe-wrap">
    <div class="universe">
        <div></div>
        <div></div>
    </div>
</div>

<style>
.universe-wrap{
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
@-webkit-keyframes UniverseR{
    0%{-webkit-transform: rotate(0deg);}
    100%{-webkit-transform: rotate(360deg);}
}
@-moz-keyframes UniverseR{
    0%{-moz-transform: rotate(0deg);}
    100%{-moz-transform: rotate(360deg);}
}
@keyframes UniverseR{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
@-ms-keyframes UniverseR{
    0%{-ms-transform: rotate(0deg);}
    100%{-ms-transform: rotate(360deg);}
}   
.universe{
    position: relative;
    width: 36px;
    height: 36px;
    border: 1px solid #e5e5e5;
    overflow: hidden;
    -webkit-animation: UniverseR 5s linear infinite;
    -moz-animation: UniverseR 5s linear infinite;
    -ms-animation: UniverseR 5s linear infinite;
    animation: UniverseR 5s linear infinite;
}
.universe,
.universe > div:before,
.universe > div:after{
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
}   
.universe > div{
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: currentcolor;
}
.universe > div:first-of-type{
    left: 0;
    color: #FFFFFF;
}
.universe > div:last-of-type{
    right: 0;
    color: #000000;
}
.universe > div:before,
.universe > div:after{
    position: absolute;
    content: '';
    background: currentcolor;
}
.universe > div:before{
    width: 100%;
    height: 50%;
    z-index: 1;
}
.universe > div:first-of-type::before{
    top: 0;
    left: 50%;
}
.universe > div:last-of-type::before{
    bottom: 0;
    right: 50%;
}
.universe > div:after{
    width: 25%;
    height: 12.5%;
    z-index: 2;
}
.universe > div:first-of-type::after{
    bottom: 18.75%;
    right: -12.5%;
}
.universe > div:last-of-type::after{
    top: 18.75%;
    left: -12.5%;
}
</style>