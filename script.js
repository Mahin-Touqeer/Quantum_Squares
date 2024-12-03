let boxes = document.querySelectorAll(".boxes");
let One = document.querySelector(".One");
let Two = document.querySelector(".Two");
let counting = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let red = `https://cdn-icons-png.flaticon.com/512/2913/2913604.png`;
let blue = `https://cdn-icons-png.flaticon.com/512/3654/3654759.png`;
let createP = function (color) {
    let img = document.createElement("img");
    img.src = `${color}`;
    img.style.width = "17vh";
    img.style.top = "0px";
    img.style.position = "absolute";
    return img;
};
let splitAndAdd = function (num, colors) {
    if (num >= 0) {
        if (boxes[num].children.length == 1) {
            appendChildFunc(boxes[num], colors);
            console.log(`added a new layer`);
            counting--;
        } else if (boxes[num].children[1].classList == red) {
            appendChildFunc(boxes[num], red);
            console.log(`added a new layer`);
            counting--;
        } else if (boxes[num].children[1].classList == blue) {
            appendChildFunc(boxes[num], blue);
            console.log(`added a new layer`);
            counting--;
        }
    }
};
let collapse = function (box_no, colors) {
    let img = box_no.children;
    let index;
    for (let i = 0; i <= 2; i++) {
        img[1].remove();
    }
    for (let j = 0; j <= 24; j++) {
        if (box_no == boxes[j]) {
            index = j;
        }
    }
    let x = index + 1;
    y = index - 1;
    m = index + 5;
    n = index - 5;
    if (index == 4 || index == 9 || index == 14 || index == 19) {
        splitAndAdd(y, colors);
        splitAndAdd(m, colors);
        splitAndAdd(n, colors);
    } else if (index == 5 || index == 10 || index == 15 || index == 20) {
        splitAndAdd(x, colors);
        splitAndAdd(m, colors);
        splitAndAdd(n, colors);
    } else {
        splitAndAdd(x, colors);
        splitAndAdd(y, colors);
        splitAndAdd(m, colors);
        splitAndAdd(n, colors);
    }
};
let appendChildFunc = function (box_no, colors) {
    let layers = parseInt(box_no.children[0].innerText);
    if (box_no.children.length == 1) {
        let img = createP(colors);
        img.classList.add(colors.toString());
        box_no.appendChild(img);
        counting++;
        console.log(counting);
        box_no.children[0].innerText = `${layers + 1}`;
    } else if (box_no.children.length > 3) {
        collapse(box_no, colors);
        box_no.children[0].innerText = `0`;
        counting++;
        if (colors == red) {
            playerOneScore += 1;
            One.innerText = `Player One Score : ${playerOneScore}`;
        } else {
            playerTwoScore += 1;
            Two.innerText = `Player Two Score : ${playerTwoScore}`;
        }
    } else if (box_no.children[1].classList == colors.toString()) {
        let img = createP(colors);
        box_no.appendChild(img);
        box_no.children[0].innerText = `${layers + 1}`;
        counting++;
        console.log(counting);
    } else {
        alert("wrong Box");
    }
};
let func = function (box_no) {
    if (counting % 2 == 0) {
        appendChildFunc(box_no, red);
    } else {
        appendChildFunc(box_no, blue);
    }
};
boxes[0].addEventListener("click", () => {
    func(boxes[0]);
});
boxes[1].addEventListener("click", () => {
    func(boxes[1]);
});
boxes[2].addEventListener("click", () => {
    func(boxes[2]);
});
boxes[3].addEventListener("click", () => {
    func(boxes[3]);
});
boxes[4].addEventListener("click", () => {
    func(boxes[4]);
});
boxes[5].addEventListener("click", () => {
    func(boxes[5]);
});
boxes[6].addEventListener("click", () => {
    func(boxes[6]);
});
boxes[7].addEventListener("click", () => {
    func(boxes[7]);
});
boxes[8].addEventListener("click", () => {
    func(boxes[8]);
});
boxes[9].addEventListener("click", () => {
    func(boxes[9]);
});
boxes[10].addEventListener("click", () => {
    func(boxes[10]);
});
boxes[11].addEventListener("click", () => {
    func(boxes[11]);
});
boxes[12].addEventListener("click", () => {
    func(boxes[12]);
});
boxes[13].addEventListener("click", () => {
    func(boxes[13]);
});
boxes[14].addEventListener("click", () => {
    func(boxes[14]);
});
boxes[15].addEventListener("click", () => {
    func(boxes[15]);
});
boxes[16].addEventListener("click", () => {
    func(boxes[16]);
});
boxes[17].addEventListener("click", () => {
    func(boxes[17]);
});
boxes[18].addEventListener("click", () => {
    func(boxes[18]);
});
boxes[19].addEventListener("click", () => {
    func(boxes[19]);
});
boxes[20].addEventListener("click", () => {
    func(boxes[20]);
});
boxes[21].addEventListener("click", () => {
    func(boxes[21]);
});
boxes[22].addEventListener("click", () => {
    func(boxes[22]);
});
boxes[23].addEventListener("click", () => { func(boxes[23]); });
boxes[24].addEventListener("click", () => { func(boxes[24]); });


