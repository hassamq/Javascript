class Color{
    constructor(r,g,b){
        this.r=r;
        this.g=g;
        this.b=b;
    }
    rgb(){
        const{r,g,b}=this;
        return `rgb(${r},${g},${b})`;
    }
    rgba(a=1){
        const{r,g,b}=this;
    return `rgb(${r},${g},${b},${a})`;
    }
    hex(){
        const{r,g,b}=this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}


const color1 = new Color();
const color2 = new Color(255,255,255);