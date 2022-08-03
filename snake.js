let space = document.getElementById('snake'),
snake = space.getContext('2d');

space.height = .96 * window.innerHeight;
space.width = .96 * window.innerWidth;

snake.strokeStyle = 'goldenrod';
snake.lineWidth = '3';
snake.lineCap = "round";
snake.lineJoin = "round";

let x = 20, y = 10;
class cobra{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    shape = () => {
        snake.beginPath()
        snake.lineTo((100+this.x), 40+this.y);
        snake.lineTo((90+this.x), 70+this.y);
        snake.lineTo(100+this.x, 60+this.y);
        snake.lineTo(110+this.x, 70+this.y);
        // snake.lineTo(100+this.x, 40+this.y);
        
        snake.closePath()
        snake.stroke();
    }
}

// let one = new cobra();

// one.shape();
let them = new Array;

function duplicate() {
    for(let i = 0; i<1; i++){
        them.push(new cobra(x, y));
        y = y + 30
    }
    for(let i = 0; i < them.length; i++){
        them[i].shape()
    }
}
duplicate();
let direct = 'ArrowRight', on = true, prev,
direction = {
    'ArrowRight': () => {
        for(let i = 0; i < them.length; i++){
            them[i].x += 2
        }},
    'ArrowUp': () => { 
        for(let i = 0; i < them.length; i++){
            them[i].y -= 2
        }},
    'ArrowDown': () => {  
        for(let i = 0; i < them.length; i++){
            them[i].y += 2
        }},
    'ArrowLeft': () => {  
        for(let i = 0; i < them.length; i++){
            them[i].x -= 2
        }} 
},
move = (e) => {
    if(direction[e.key]){
        direct = e.key;
        console.log(e.key);
    }
    if(e.key == ' ') {
        if(on == false){
            on = true;
            direct = prev;
            console.log('> Play');
        animate()
        }else{
            console.log('> Pause');
            on = false
        };
    }
   /*  direction[e.key]();
    snake.clearRect(0, 0, space.width, space.height);

    for(let i = 0; i < them.length; i++){
        them[i].shape()
    } */
},
animate = () => {
    if(on){

        for(let x = 0; x < them.length; x++){
            if(them[x].x == -84){
                them[x].x *= -1
            }
        }
        
        if(direction[direct]){
            direction[direct]()
        }
        direction[direct]();
        snake.clearRect(0, 0, space.width, space.height);
        for(let i = 0; i < them.length; i++){
            them[i].shape()
        }
            prev = direct;
            requestAnimationFrame(animate)
        }
}
animate();