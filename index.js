/* get the hex clean value*/
const colorPicker = document.getElementById('color-picker').value
let colorPickerClean = colorPicker.slice(1)

/* get the scheme mode */
const mode = document.querySelector('select').value

/* get information of hex value
fetch(`https://www.thecolorapi.com/id?hex=${colorPicker}`)
    .then(res => res.json())
    .then(data => console.log(data))*/
    
/*get the scheme format

fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => console.log(data))*/
    
/*Render color section*/
    
function renderColors(data){
    let colors =[]
    let html = " "
        for(color of data.colors){
            html +=
            `<div class="color-stripe" style="background:${color.hex.value}"id="first-color">
            <p id='color-name'>${color.hex.value}</p>
            </div> `
        }  
        document.getElementById('color-section').innerHTML = html
}

fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerClean}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        colors = data.hex
        renderColors(data)})
        
/*store good color on colorpicker*/

document.getElementById('color-picker').addEventListener('change', changeColor)
function changeColor(event) {
    let newColor = event.target.value 
    console.log(newColor)
}

/*change scheme when btn clicked*/  

 document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault()
   
    const colorPicker = document.getElementById('color-picker').value
    const mode = document.querySelector('select').value
    const data ={
        hex: `${colorPicker.slice(1)}`,
        mode: `${mode}`
        }
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.slice(1)}&mode=${mode}&count=5`, {
        headers: {
            "content-type":"application/json"
                 }    
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderColors(data)
    })
})
   

