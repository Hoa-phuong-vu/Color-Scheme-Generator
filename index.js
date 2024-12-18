
const mode = document.getElementById('color-scheme')
const seed = document.getElementById('seed-color')

document.getElementById('button').addEventListener('click', function(){
    let seed1 = seed.value.replace('#', '')
    console.log(seed1)
    document.getElementById('display').innerHTML = '';
    fetch(" https://www.thecolorapi.com/scheme?" + new URLSearchParams({
        hex: seed1, 
        mode: mode.value,
        count: 5
    })
    )
            .then(res => res.json())
            .then(data => {
    
                for (let color of data.colors){
                    document.getElementById('display').innerHTML += `
                    <div id="block">
                        <h1 style="background-color:${color.hex.value};"></h1>
                        <p>${color.hex.value}</p>
                    </div>`
                }
                    
        })
  
})

