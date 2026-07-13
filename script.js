// Animated Counter

function animateValue(id,start,end,duration){

let obj=document.getElementById(id);

let range=end-start;

let current=start;

let increment=end>start?1:-1;

let step=Math.abs(Math.floor(duration/range));

let timer=setInterval(()=>{

current+=increment;

obj.innerHTML=current;

if(current==end){

clearInterval(timer);

}

},step);

}

animateValue("records",0,18542,1500);
animateValue("fir",0,324,1200);
animateValue("wanted",0,78,1000);
animateValue("accuracy",0,91,1200);

// Digital Clock

function updateClock(){

let now=new Date();

document.getElementById("clock").innerHTML=
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// Search Criminal

function searchCriminal(){

let input=document.getElementById("search").value.toUpperCase();

let table=document.getElementById("criminalTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[0];

if(td){

let txt=td.textContent;

tr[i].style.display=
txt.toUpperCase().indexOf(input)>-1?
"":"none";

}

}

}

// Live Alerts Rotation

const alerts=[

"🔴 Armed Robbery - Salt Lake",

"🟠 Cyber Fraud - Howrah",

"🟢 Dum Dum Safe",

"🔴 Missing Child - Park Circus",

"🟠 Drug Activity - Barrackpore",

"🔴 Vehicle Theft - New Town"

];

let i=0;

setInterval(()=>{

document.getElementById("liveAlert").innerHTML=alerts[i];

i=(i+1)%alerts.length;

},2500);
// =======================
// AI Crime Hotspot Map
// =======================

var map = L.map('map').setView([22.5726,88.3639],11);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap'
}
).addTo(map);

// High Risk
L.circle([22.5726,88.3639],{
color:'red',
fillColor:'red',
fillOpacity:0.5,
radius:900
})
.addTo(map)
.bindPopup("<b>Kolkata</b><br>High Crime Risk");

// Medium
L.circle([22.5958,88.2636],{
color:'orange',
fillColor:'orange',
fillOpacity:0.5,
radius:700
})
.addTo(map)
.bindPopup("<b>Howrah</b><br>Medium Risk");

// Safe
L.circle([22.6240,88.4400],{
color:'green',
fillColor:'green',
fillOpacity:0.5,
radius:600
})
.addTo(map)
.bindPopup("<b>Salt Lake</b><br>Safe Zone");