function getABC() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    return {a, b, c};
}


function calculateQuadratic() {
    const {a, b, c} = getABC();
    const res = document.getElementById("quadraticResult");
    const dir = document.getElementById("directionResult");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        res.textContent = "Введите корректные значения для a, b, c.";
        dir.textContent = "";
        return;
    }

    let result;
    const D = b ** 2 - 4 * a * c;

    if (a === 0) {
        result = "a = 0 → не квадратное уравнение.";
        dir.textContent = "Параболу построить нельзя.";
    } else if (D < 0) {
        result = "Корней нет (D < 0)";
        dir.textContent = a > 0 ? "Ветви направлены вверх." : "Ветви направлены вниз.";
    } else if (D === 0) {
        const x = -b / (2 * a);
        result = `Один корень: x = ${x}`;
        dir.textContent = a > 0 ? "Ветви направлены вверх." : "Ветви направлены вниз.";
    } else {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        result = `Два корня: x₁ = ${x1}, x₂ = ${x2}`;
        dir.textContent = a > 0 ? "Ветви направлены вверх." : "Ветви направлены вниз.";
    }

    res.textContent = result;
}


function calculateF1() {
    const {a, b} = getABC();
    if (isNaN(a) || isNaN(b)) return;
    const res = 8 * a - (b ** 2) / 9;
    document.getElementById("functionResult").textContent = `8a - b²/9 = ${res}`;
}

function calculateF2() {
    const {a, b} = getABC();
    if (isNaN(a) || isNaN(b)) return;
    const res = 5 * a + (b ** 2) / 64;
    document.getElementById("functionResult").textContent = `5a + b²/64 = ${res}`;
}

function calculateF3() {
    const {a, b} = getABC();
    if (isNaN(a) || isNaN(b)) return;
    const res = 4 * (b + a) - a ** 2;
    document.getElementById("functionResult").textContent = `4(b + a) - a² = ${res}`;
}

function calculateF4() {
    const {a, b} = getABC();
    if (isNaN(a) || isNaN(b)) return;
    const res = 4 * ((a ** 2) / 4 - b);
    document.getElementById("functionResult").textContent = `4(a²/4 - b) = ${res}`;
}


function runTest() {
    let output = "";

    let a = 2, b = 5, c = 3;
    let D = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    output += `1) Корни: a=${a}, b=${b}, c=${c} → x₁ = ${x1}, x₂ = ${x2}\n`;


    a = 3;
    b = 4;
    const f1 = 8 * a - b ** 2 / 9;
    const f2 = 5 * a + b ** 2 / 64;
    const f3 = 4 * (b + a) - a ** 2;
    const f4 = 4 * ((a ** 2) / 4 - b);
    output += `2) a=${a}, b=${b}:\n`;
    output += `   8a - b²/9 = ${f1}\n`;
    output += `   5a + b²/64 = ${f2}\n`;
    output += `   4(b+a) - a² = ${f3}\n`;
    output += `   4(a²/4 - b) = ${f4}`;

    document.getElementById("testResult").textContent = output;
}