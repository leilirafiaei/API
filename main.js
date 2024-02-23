
document.addEventListener('DOMContentLoaded',() =>{
;
getData(document.getElementById('location_city').value) 

});

//geting city from user
document.getElementById('submit').addEventListener('click', () => {
    getData( document.getElementById('location_city').value);
  });


// async/await
async function getData(city) {
    try {
        const waether = await fetch( `http://api.weatherapi.com/v1/current.json?key=3950eedc7dba476eb44172323241402&q=${city}&aqi=no` );
        const MainData = await waether.json();

        console.log( MainData );

        
        // const select_city = document.getElementById("select_city");

        // location.innerHTML = `location : ${MainData.location.name} <p>CurrentWeather : ${MainData.current.condition.text} </p>`;

        const current = document.getElementById("current");

        current.innerHTML = `current weather : ${MainData.current.temp_c} &deg C`;

        const feelsLike = document.getElementById("feelsLike");

        feelsLike.innerHTML = `feelsLike : ${MainData.current.feelslike_c} &deg C`;

        const icon = document.getElementById("icon");

        icon.innerHTML = `<p>${MainData.current.condition.text} </p> <img src="${MainData.current.condition.icon}">`;


        const humadity = document.getElementById("humadity");

        humadity.innerHTML = `humadity : ${MainData.current.humidity} %`;



        

    } catch( error ) {
        // console.warn( "Nope: " + error );
        console.warn( `Nope: ${error}` );
    }
}
