const printOutCheck = document.getElementById("debug-print")

const numberFields = [
    document.getElementById("num-in-1"),
    document.getElementById("num-in-2")
]

const debugLog = (...toLog) => {
    if (!printOutCheck.checked){
        return;
    }
    console.log(...toLog)
}

const funkyMaths = (a, b) => {
    const outElement = document.getElementById("panel-out")
    a = numberFields[0].value;
    b = numberFields[1].value;
    outElement.innerText = `${a} times ${b} is ${a*b}`
}

const initNumFields = () => {
    for (let i = 0; i < numberFields.length; i++){
        numberFields[i].onchange = (val) => debugLog(
            `id: "${val.currentTarget.id}",\nvalue: ${val.target.value}`
        )
    }
}

const initClikkButton = () => {
    document.getElementById("clikker").onclick = () => funkyMaths();
}

initNumFields();
initClikkButton();
