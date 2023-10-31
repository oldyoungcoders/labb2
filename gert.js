// DASGAL NO1


var seconds = +prompt("Cekund oruulna uu?");
alert("Sekund ni " + seconds + " bol " + Math.floor(seconds/60) + " minut " + seconds%60 + " sekund baina");


// DASGAL NO2


var seconds = +prompt("Cekund oruulna uu?");
alert("Sekund ni " + seconds + " bol " + Math.floor(seconds/3600) + " cag " + "0" + " minut " + (seconds%60) +" sekund baina .");


// DASGAL NO3


var minutes = +prompt("Minut oruulna uu?");
var seconds = +prompt("Cekund oruulna uu?");
alert("Chinii songoson minute bolon secondiig zuvhun second luu shiljuuleh um bol "+(minutes*60+seconds)+" sekund baina");


// DASGAL NO4


var hours = +prompt("Cag oruulna uu?");
var minutes = +prompt("Minut oruulna uu?");
var seconds = +prompt("Cekund oruulna uu?");
alert("Chinii songoson cag bolon minut bolon secondiig zuvhun second luu shiljuuleh um bol "+(hours*3600+minutes*60+seconds)+" sekund baina");


// DASGAL NO5


var hours = +prompt("Cag oruulna uu?");
alert("Cag ni " + hours + " bol " + Math.floor(hours/24) + " udur " + hours%24 + " cag baina");


// DASGAL NO6


var sar = +prompt("Sar oruulna uu?");
alert("Sar ni " + sar + " bol " + Math.floor(sar/12) + " jil " + sar%12 + " sar baina");


// DASGAL NO7


var jil = +prompt("Jil oruulna uu?");
var sar = +prompt("Sar oruulna uu?");
alert("Chinii songoson jil bolon sariig zuvhun sar luu shiljuuleh um bol hariu ni: "+(jil*12+sar)+"sar baina");