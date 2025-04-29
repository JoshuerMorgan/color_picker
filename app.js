let colorValue=document.getElementById("color-input")
let modeType = document.getElementById("dropdown")


let newHtmlInput =""

function apiInteractor( ){
    let str = colorValue.value
 
    str = str.substring(1);
    console.log(str)
    
 
    fetch(`https://www.thecolorapi.com/scheme?hex=${str}&mode=${modeType.value.toLowerCase()}&count=5`, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            const {colors, image, hex} = data
            console.log(colors)
            console.log(data)
            
                for (let i=0; i< colors.length; i++){
                     newHtmlInput = `
                     <div >
                     <div class="block">
                        <div id="color0" class="color-block" ></div>
                        <div id="color1" class="color-block" ></div>
                        <div id="color2" class="color-block" ></div>
                        <div id="color3" class="color-block" ></div>
                        <div id="color4" class="color-block" ></div>
                     </div>
                    
                     <div class="block">
                        <h3 id="hexVal0" class="hex-block"></h3>
                        <h3 id="hexVal1" class="hex-block"></h3>
                        <h3 id="hexVal2" class="hex-block"></h3>
                        <h3 id="hexVal3" class="hex-block"></h3>
                        <h3 id="hexVal4" class="hex-block"></h3>
                     </div>
                     </div>
                    
                    `
                    document.getElementById("section1").innerHTML = newHtmlInput
                    document.getElementById("hexVal0").innerHTML += `${colors[0].hex.value}`
                    document.getElementById("hexVal1").innerHTML += `${colors[1].hex.value}`
                    document.getElementById("hexVal2").innerHTML += `${colors[2].hex.value}`
                    document.getElementById("hexVal3").innerHTML += `${colors[3].hex.value}`
                    document.getElementById("hexVal4").innerHTML += `${colors[4].hex.value}`

                    document.getElementById("color0").style.backgroundColor = `${colors[0].hex.value}`;
                    document.getElementById("color1").style.backgroundColor = `${colors[1].hex.value}`;
                    document.getElementById("color2").style.backgroundColor = `${colors[2].hex.value}`;
                    document.getElementById("color3").style.backgroundColor = `${colors[3].hex.value}`;
                    document.getElementById("color4").style.backgroundColor = `${colors[4].hex.value}`;
                }
    
           
        })
        
}

document.getElementById('submit-btn').addEventListener("click", ()=>{
    apiInteractor()
    // colorPrinter()
    console.log(colorValue.value)
    console.log(modeType.value)
  
    
})


