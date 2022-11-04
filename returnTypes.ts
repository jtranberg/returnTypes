const addNums = (x: number, y: number): number => {        //number is an anotation
    return x + y;
}

addNums(5,5);

function rando(num: number) {
    if(Math.random()< 0.5) {
        return num.toString();
    }
    return num;
}

const add = (x: number, y:number): number  => {
return x+y;
}

const colors = ["red", "blue", "green"];
colors.map(color => {                               //typescript infers this is a string
    return color.toUpperCase()
})