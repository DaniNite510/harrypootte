window.addEventListener('DOMContentLoaded', getHarryxOpter);

async function getHarryxOpter()
{
    const response = await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json');
    console.log(response)

    const data = await response.json();
    console.log(data)
}

function displayHarryOppter(data){
    console.log(`data a displayHarryPotterbe: ${data}`)
}
