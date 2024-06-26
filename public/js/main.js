const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
    event.preventDefault();
    const cityval = cityname.value;
    if (cityval === "") {
        city_name.innerText = `Please write city name`;
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=431828870cbebe8a263a6f68fe1347f5`
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            //temp_status.innerText = arrdata[0].weather[0].main;
            const tempStatus = arrdata[0].weather[0].main;
            if (tempStatus == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud'' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove("data_hide");
        } catch {
            city_name.innerText = `Please enter valid city name`;
            datahide.classList.add("data_hide");
        }
    }
}

submitbtn.addEventListener("click", getInfo);