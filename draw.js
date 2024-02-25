let on = false,
    saveR = [],
    st,
    tt = false,
    can = document.getElementById("canvas"),
    span = document.getElementById("span"),
    rc = document.getElementById("rc"),
    ic = document.getElementById("ic"),
    c = document.querySelectorAll(".controll"),
    v = ic.value,
    er = document.getElementById("er"),
    download = document.getElementById("download"),
    span2 = document.getElementById("span2"),
    cc = document.getElementById("cc"),
    line = can.getContext("2d"),
  /*  logX = new Array, logY = new Array, */ ray = new Array(),
    rayc = new Array(),
    w,
    change = () => {
        w = rc.value;
        line.lineWidth = w;
        // off();
    };
line.strokeStyle = v;
line.lineWidth = rc.value;

class liner {
    constructor(x, y) {
        this.logX = new Array();
        this.logY = new Array();

        this.l = rc.value;
        this.c = v;
    }
    log = (x, y) => {
        this.logX.push(x);
        this.logY.push(y);
    };
    color = () => {
        line.lineWidth = this.l;
        line.strokeStyle = this.c;
    };
    rct = () => {
        this.color();
        line.beginPath();
        for (let i = 0; i < this.logX.length; i++) {
            line.lineTo(this.logX[i], this.logY[i]);
            line.lineTo(this.logX[i], this.logY[i]);
        }
        line.stroke();
    };
}

class cleaned {
    constructor(cln1, cln2, cln3, cln4) {
        this.cln1 = cln1;
        this.cln2 = cln2;
        this.cln3 = cln3;
        this.cln4 = cln4;
    }

    clean = () => {
        line.clearRect(this.cln1, this.cln2, this.cln3, this.cln4);
    };
}

let onn = (e) => {
    if (tt) {
        // line.fillStyle = ic.value;
        // words.push(new word(load, e.layerX, e.layerY, ic.value));
        ray.push(new word(load, e.layerX, e.layerY, ic.value));
        setTimeout(() => {
            ray.pop();
        }, 10);
        tt = false;
    }

    console.log("log >> Draw");
    let x = Math.floor(e.layerX),
        y = Math.floor(e.layerY);
    line.beginPath();
    line.strokeStyle = v;
    line.lineTo(x, y);
    // line.lineTo(x+1, y+1);
    line.lineWidth = rc.value;
    on = true;

    ray.push(new liner(x, y));
    ray[ray.length - 1].log(x, y);

    draw(e);
},
    off = () => {
        on = false;
        // st = false;
        st = ray.length;
        three();
    };
can.width = window.innerWidth;
can.height = window.innerHeight;
line.strokeStyle = "white";
// line.lineWidth = 1;

let draw = (e) => {
    if (on) {
        let x = Math.floor(e.layerX),
            y = Math.floor(e.layerY),
            x1 = x,
            y1 = y;
        /*  logX.push(x);
                logY.push(y); */

        ray[ray.length - 1].log(x, y);

        line.lineTo(x, y);
        // line.lineTo(x, y);
        // line.lineTo(x+1, y+1);
        line.stroke();
    }
},
    cl = () => {
        console.log("log >> Clean");
        ray = new Array();
        line.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

function bg() {
    for (let i = 0; i < rayc.length; i++) {
        rayc[i].clean();
    }
    if (cc.title == "Light mood") {
        line.clearRect(0, 0, window.innerWidth, window.innerHeight);
        cc.src = "img/Dark.png";
        cc.title = "Dark mood";
        can.style.backgroundColor = "wheat";
        line.strokeStyle = "black";
        line.strokeStyle = v;

        two();
    } else {
        for (let i = 0; i < rayc.length; i++) {
            rayc[i].clean();
        }
        line.clearRect(0, 0, window.innerWidth, window.innerHeight);
        cc.src = "img/light.png";
        can.style.backgroundColor = "black";
        cc.title = "Light mood";
        line.strokeStyle = v;

        three();
    }
}
let rect = () => {
    line.fillStyle = can.style.backgroundColor;
    line.rect(0, 0, can.width, can.height);
    line.fill();
},
    two = () => {
        line.clearRect(0, 0, window.innerWidth, window.innerHeight);
        rect("wheat");
        for (let i = 0; i < ray.length; i++) {
            ray[i].rct();
        }
    },
    three = () => {
        line.clearRect(0, 0, window.innerWidth, window.innerHeight);
        rect("black");
        for (let i = 0; i < ray.length; i++) {
            ray[i].rct();
        }
    },
    permit = false,
    fin = false;
function erase2(e) {
    if (permit == true) {
        span.style.left = e.layerX - span.offsetWidth / 2 + "px";
        span.style.top = e.layerY - span.offsetHeight / 2 + "px";
    } else {
        permit = false;
    }
}

let final = (e) => {
    if (fin) {
        rayc.push(
            new cleaned(
                span.offsetLeft,
                span.offsetTop,
                span.offsetWidth,
                span.offsetHeight
            )
        );
        line.clearRect(
            span.offsetLeft,
            span.offsetTop,
            span.offsetWidth,
            span.offsetHeight
        );
    }
};

let box = () => {
    fin = true;
    span.style.backgroundColor = "rgba(245, 222, 179, 0.795)";
};
let down = () => {
    fin = false;
    span.style.backgroundColor = "rgba(245, 222, 179, 0.200)";
};

let color = () => {
    v = ic.value;
    line.strokeStyle = v;
    two();
},
    ccl = (a) => {
        for (let i = 0; i < ray[a].logX.length; i++) {
            line.lineWidth = ray[a].l;
            line.clearRect(
                ray[a].logX[i] - (ray[a].l - 1) / 1.8,
                ray[a].logY[i] - (ray[a].l - 1) / 1.8 - 1,
                ray[a].l + 2,
                ray[a].l
            );
        }
    },
    set = (x) => {
        line.lineCap = "round";
        line.lineJoin = "round";
        can.style.backgroundColor = "black";

        span2.style.left = can.width / 2 - span2.offsetWidth / 2 + "px";
        span2.style.bottom = can.height + "px";
        span2.style.top = can.height - span2.offsetHeight + "px";

        download.style.left = can.width / 2 - download.offsetWidth / 2 + "px";
        span2.style.top = can.height - download.offsetHeight + "px";

        document.body.style.height = can.height + "px";
        document.body.style.width = can.width + "px";
        set2(x);
    },
    set2 = (x) => {
        if (x == 1) {
            c[x].style.left = can.width - c[x].offsetWidth + "px";
            c[x].style.top = "0";
        }
        if (x == 2) {
            c[x].style.left = "0";
            c[x].style.top = can.height - c[x].offsetHeight + "px";
        }
        if (x == 3) {
            c[x].style.left = can.width - c[x].offsetWidth + "px";
            c[x].style.top = can.height - c[x].offsetHeight + "px";
        }
        setTimeout(() => {
            if (x < c.length - 1) {
                set2(++x);
            }
        }, 200);
    };

function save() {
    let x = 0,
        y = 0;
    line.beginPath();
    line.strokeStyle = v;
    line.lineTo(x, y);
    // line.lineTo(x+1, y+1);
    line.lineWidth = rc.value;
    on = true;

    ray.push(new liner(x, y));
    ray[ray.length - 1].log(x, y);
    off();

    line.fill();

    let MyElement = document.getElementById("can");
    let filename = prompt("File Name");
    if (filename != null) {
        let element = document.createElement("a");
        let uri = can.toDataURL("image/png", 1);
        element.setAttribute("href", uri);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
    }
    document.body.removeChild(element);
}

class word {
    constructor(load, x, y, c) {
        this.string = load;
        this.x = x;
        this.y = y;
        this.color = c;
        this.size = rc.value;
    }
    rct = () => {
        line.font = `${this.size + "em"} Papyrus`;
        line.fillStyle = this.color;
        line.fillText(this.string, this.x, this.y);
    };
}

// let words = new Array;

let time = (load) => {
    let path = {
        undo: () => {
            if (ray.length != 0) {
                saveR.push(ray[ray.length - 1]);
                ray.pop();
                three();
            } else {
                console.log("Nothing to undo");
            }
        },
        redo: () => {
            if (saveR.length != 0) {
                ray.push(saveR[saveR.length - 1]);
                saveR.pop();
                three();
            } else {
                console.log("Nothing to redo");
            }
        },
    };
    path[load]();
},
    playF = (i) => {
        if (i <= st - 1) {
            time("redo");
            setTimeout(() => {
                playF((i = i + 1));
            }, 60);
        }
    },
    playB = (i) => {
        if (i <= st - 1) {
            time("undo");
            setTimeout(() => {
                playB((i = i + 1));
            }, 60);
        }
    },
    load;
text = () => {
    load = prompt("Write Here");
    tt = true;
};

let chh = (x) => {
    if (x > 0) {
        setTimeout(() => {
            bg();
            console.log(">> bg", x);
            chh((x = x - 1));
        }, 300);
    }
},
    shortcuts = (e) => {
        console.log(e.key, e.ctrlKey)

        // 
        e.ctrlKey == true
            ? e.key.toLowerCase() == "z"
                ? time("undo")
                : null
            : null;

        e.ctrlKey == true
            ? e.key.toLowerCase() == "y"
                ? time("redo")
                : null
            : null;
        // 
        e.key.toLowerCase() == "-"
            ? rc.value = String(Number(rc.value) - 1)
            : null

        e.key.toLowerCase() == "+"
            ? rc.value = String(Number(rc.value) + 1)
            : null
        // 

        e.key.toLowerCase() == "t"
            ? text()
            : null
    };

window.addEventListener("load", (document.body.style.opacity = "1"));
