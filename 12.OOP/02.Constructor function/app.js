console.log('js connected');

function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
}

Color.prototype.rgb=function(){
    const{r,g,b}=this;
    return `rgb(${r},${g},${b})`;
};

Color.prototype.rgba=function(a=1){
    const{r,g,b}=this;
    return `rgb(${r},${g},${b},${a})`;
};

Color.prototype.hex=function(){
    const{r,g,b}=this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const color1 =new Color(0,0,0);
console.log(color1.rgb());
console.log(color1.hex());

const color2 = new Color(255,156,146);
console.log(color2.rgb());
console.log(color2.hex());
