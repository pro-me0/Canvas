let aud, c, time = 1000, t = 0, show = [], body, check, truth;
function all(){
    document.querySelector('.prompt').style.visibility = 'visible';
    document.querySelector('.prompt').style.display = 'block';
}
let beg = () => {
    truth = true;
    beep = document.getElementById("beep");
    cat = document.getElementById("cat");
    c = document.querySelector('.input').value;
    if (c == null | c == undefined) {
        inn();
    };
    if (c != '') {
    let body = document.getElementById("body");
    body.style.visibility='visible'
        init(c);
    }else{
        alert('You must enter a number');
        all()
    };
};
let on=0;
function add(){
	if (on){
		init(1)
	}
}

function init(s) {
	
    for (let i = 0; i < s; i++) {
        let pre = document.createElement("span");
        document.body.appendChild(pre);
        show.push(pre);
    };
    write(0);
};
let write = (i)=> {
    for (var i = 0; i < show.length; i++) {
        show[i].innerText = (Math.random() * 20).toFixed(2);
        show[i].setAttribute("onclick", "still(this, event)");
    };
    pos();
    test();
    count();
};
let grow, mate;
let pos = () => {
    if (truth) {
        for (var i = 0; i < show.length; i++) {
            if (!(show[i] == check)) {
                show[i].style.left = Math.floor(Math.random() * (window.innerWidth - show[i].offsetWidth)) + "px";
                show[i].style.top = Math.floor(Math.random() * (window.innerHeight - show[i].offsetHeight)) + "px";
                if (check) {
                    if (show[i].style.backgroundColor == check.style.backgroundColor) {
                        show[i].style.backgroundColor = 'rgba(0, 102, 255, 0.3)';
                    };
                };
            };  
        };
        size();
        setTimeout(function() {
            pos();
        }, time);
    };
    };
    let play = {
		cat: ()=>{
            cat.play();
			// return;
		},
		beep:() => {
            beep.play();
			// return;
		}
	};
let size = () =>{
    let r=(Math.random());
    let me = show[(r*(show.length-1)).toFixed()];
    if (!(me.style.fontSize == '2.49em')) {
        me.style.fontSize = '2.49em';
    };
        setTimeout(()=>{
            me.style.fontSize = 'initial';
        }, 1000);
    
};
function test () {
    if (truth) {
        for (var i = 0; i < show.length; i++) {
            show[i].innerText = (Math.random() * 20).toFixed(2);
        };
        setTimeout(()=> test(), t);
    };
};
let ct = 0;
let still = (me, e) => {
    e.stopPropagation();
    if (check != me) {
        play.cat();
        check = me;
        me.style.backgroundColor = 'rgba(38, 151, 57, 0.3)';
        me.style.left = (e.clientX - (.5 * me.offsetWidth)) + "px";
        me.style.top = (e.clientY - (.5 * me.offsetHeight)) + "px";
        me.style.zIndex = -1;
        me.removeAttribute("onclick");
        count();
    };
};
let start = function() {
    if (!truth) {
        let body = document.getElementById("body");
    document.getElementById('sm').innerText = 'Play Again';/* 
    document.getElementById('sm').style.fontSize = '2vw';
    document.getElementById('silly').style.fontSize = '2vw'; */
    document.getElementById('silly').style.display='block';
        body.style.filter = "blur(2px)";
        for(let i=0; i< show.length; i++){
            show[i].setAttribute('class', 'bl')
        }
    document.querySelector('.prompt').style.display = 'block';
    };
};
let count = function() {
    document.getElementById("rem").innerText = 'Remaining: ' + (show.length - ct) +';';
    document.getElementById("cot").innerText = 'Caught: ' + ct++ +';';
    if ((ct - 1) == show.length) {
        truth = false;
        start();
    };
};
let dull = () => {
    let body = document.getElementById("body");
    document.querySelector('.prompt').style.display = 'none';
    for (let i = 0; i < show.length; i++) {
        document.body.removeChild(show[i]);
    };
    ct = 0;
    show=[];
    body.style.filter = "initial";
    play.beep();
    validate();
	// return;
};
function inn() {
    let pre = document.createElement("span");
    document.querySelector('.prompt').style.display = 'none';
    pre.innerText = "GOOD BYE 👋";
    pre.setAttribute('id', 'bye');
    document.body.innerHTML = '';
    document.body.appendChild(pre);
    pre.style.fontSize = '4em';
    pre.style.left = ((.5*window.innerWidth) - (.5*pre.offsetWidth)) + "px";
    pre.style.top = ((.5*window.innerHeight) - (.5*pre.offsetHeight)) + 'px';
	// return;
};

let del = (x)=>{
    for (let i = 0; i < x; i++) {
        body.removeChild(show[i]);
    };
	show=show.slice(x)
}
// let me=0;
// let rem = ()=>{
		// setTimeout(()=>{
			// me=1;
		// },70)
	// if (me){
			// del(1)
	// }
// }


validate = () => {
    console.log(document.body.querySelector('.input').value);
    beg();
}