function generator(matLen, gr, grEat, pre, em, gc, gec, w) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pre; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < em; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < gc; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }

    }for (let i = 0; i < gec; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }

    }
    for (let i = 0; i < w; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }

    }
    return matrix;
}

let side = 15;

let matrix = generator(30, 550, 60, 10, 1, 1,1, 1);

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let energyMinuserArr = []
let grassCreaterArr = []
let grassEaterCreaterArr = []
let wall = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            } else if (matrix[y][x] == 3) {
                let prE = new Predator(x, y)
                predatorArr.push(prE)
            } else if (matrix[y][x] == 4) {
                let eM = new EnergyMinuser(x, y)
                energyMinuserArr.push(eM)
            } else if (matrix[y][x] == 5) {
                let gC = new GrassCreater(x, y)
                grassCreaterArr.push(gC)
            }else if (matrix[y][x] == 6) {
                let geC = new GrassEaterCreater(x, y)
                grassEaterCreaterArr.push(geC)
            }
            else if (matrix[y][x] == 7) {
                let geC = new wall(x, y)
               wall.push(geC)
            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
            } else if (matrix[y][x] == 2) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('blue')
            } else if (matrix[y][x] == 4) {
                fill('black')
            } else if (matrix[y][x] == 5) {
                fill('white')
            }else if (matrix[y][x] == 6) {
                fill('navy blue')
            }
            else if (matrix[y][x] == 7) {
                fill('brown')
            }
            rect(x * side, y * side, side, side)
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in grassCreaterArr) {
        grassCreaterArr[i].move()
        if (grassArr.length < 10) {
            grassCreaterArr[i].grassCreate()
        }

    }for (let i in grassEaterCreaterArr) {
        grassEaterCreaterArr[i].move()
        if (grassArr.length > 700) {
            grassEaterCreaterArr[i].grassEaterCreate()
        }

    }

}

