/* Dark mode toggle*/


var CountryApi="https://restcountries.com/v2/all";
async function getData(Api) {
   const response= await fetch(Api);
   if (!response.ok) throw new Error("Could not fetch countries");
       if (response) {
          document.getElementById("loading").innerHTML = "Loading....";
              }
      const data = await response.json();
           if (data) {
    document.getElementById("loading").innerHTML = "";
              }
        for (var i = 0; i < data.length; i++) {
      var objArray = data[i];
           console.log(objArray);
        /*var img = document.getElementById("img");
        var para = document.getElementById("contName");
        var popu = document.getElementById("popu");
        var region= document.getElementById("region");
        var capital = document.getElementById("capital");
         img.src=[objArray.flag];

        img.style.width="100%";
        var pp = [objArray.name];
        para.innerText=pp;
        var popul=[objArray.population];
        popu.innerHTML=popul;
        region.innerHTML=[objArray.region];
        capital.innerHTML=[objArray.capital];
        */

var parent=document.getElementById("parent");
var container=document.createElement("div");
var countryDiv=document.createElement("div");
countryDiv.classList.add('country');
var imageDiv=document.createElement("div");
var flag = document.createElement("img");
imageDiv.classList.add("item");
imageDiv.appendChild(flag);
        var country = document.createElement("h4");
        country.setAttribute("class", "countryName");
        var population = document.createElement("h5");
        var region= document.createElement("h5");
        var capital = document.createElement("h5");
        var container=document.createElement("div");
        flag.src=[objArray.flag];
        flag.style.width="100%";
        country.innerText= [objArray.name];
        population.innerText='Population:'+' '+[ objArray.population];
        region.innerText='Region:'+' '+[objArray.region];
        region.setAttribute("class", 'countryRegion');
        if(objArray.capital!=''){
        capital.innerText='Capital:'+' '+[objArray.capital];
        }
        else{
          if(capital.innerHTML='')
          capital.innerText='No Capital';
        }
countryDiv.appendChild(imageDiv);
countryDiv.appendChild(country);
countryDiv.appendChild(population);
countryDiv.appendChild(region);
countryDiv.appendChild(capital);
container.appendChild(countryDiv);
parent.appendChild(container);
}
 

ReturnSearch = () => {
  var country = document.querySelectorAll(".country");
  for (var i = 0; i < country.length; i++) {
    var x = document.querySelectorAll(".countryName");

    var searchvalue = document.querySelector(".search").value.toUpperCase();
    for (var i = 0; i < x.length; i++) {
      var textvalue = x[i].textContent || x[i].innerText;
      if (textvalue.toUpperCase().indexOf(searchvalue) >= 0) {
        x[i].style.display = "block";
        country[i].style.display = "block";
       document.getElementById('loading').innerHTML=''; 
      }
      else {
        x[i].style.display = "none";
        country[i].style.display = "none";
        document.getElementById('loading').innerHTML=''
      }
    }
  }
}
var countryRegion;
showFilter=()=>{
  for (var i = 0; i < data.length; i++) {
  var objArray = data[i];
  var region2=objArray.region;
}
  
 document.querySelector(".list").classList.toggle("show");
 
 var list= document.querySelector(".list");
 var children=list.getElementsByTagName("p");
 for(var i=0; i<children.length; i++){
   /*All country*/
   children[0].onclick=function(){
     var country = document.querySelectorAll(".country");
     for (var i = 0; i < country.length; i++) {
     country[i].style.display="block";
   }
   }
   /*asia*/
   children[1].onclick=()=>{
     var country = document.querySelectorAll(".country");
     var x=document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
      
        if (textvalue=='Region: Asia'){
          country[i].style.display = "block";
         
        }
    else{
      country[i].style.display="none";
     
      }
      }
    }
  }
 

/*Africa*/
children[2].onclick=()=>{
     var country = document.querySelectorAll(".country");
     var x=document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
      
        if (textvalue=='Region: Africa'){
          country[i].style.display = "block";
         
        }
    else{
      country[i].style.display="none";
      }
      }
    }
    /*Antarctic*/
    children[3].onclick = () => {
      var country = document.querySelectorAll(".country");
      var x = document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
    
        if (textvalue == 'Region: Antarctic') {
          country[i].style.display = "block";
    
        }
        else {
          country[i].style.display = "none";
        }
      }
    }
    /*Antarctic Occean*/
    children[4].onclick = () => {
      var country = document.querySelectorAll(".country");
      var x = document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
    
       if (textvalue == 'Region: Antarctic Ocean') {
          country[i].style.display = "block";
    
        }
        else {
          country[i].style.display = "none";
        }
      }
    }
    /*America*/
children[5].onclick=()=>{
     var country = document.querySelectorAll(".country");
     var x=document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
      
        if (textvalue=='Region: Americas'){
          country[i].style.display = "block";
         
        }
    else{
      country[i].style.display="none";
      }
      }
    }
    /*Europe*/
children[6].onclick=()=>{
     var country = document.querySelectorAll(".country");
     var x=document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
      
        if (textvalue=='Region: Europe'){
          country[i].style.display = "block";
         
        }
    else{
      country[i].style.display="none";
      }
      }
    }
    /*Oceania*/
children[7].onclick=()=>{
     var country = document.querySelectorAll(".country");
     var x=document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
      
        if (textvalue=='Region: Oceania'){
          country[i].style.display = "block";
         
        }
    else{
      country[i].style.display="none";
      }
      }
    }
    /*Polar*/
children[8].onclick=()=>{
     var country = document.querySelectorAll(".country");
     var x=document.querySelectorAll(".countryRegion");
      for (var i = 0; i < x.length; i++) {
        var textvalue = x[i].textContent || x[i].innerText;
      
        if (textvalue=='Region: Polar'){
          country[i].style.display = "block";
          
        }
    else{
      country[i].style.display="none";
      }
      }
    }
  }

}


getData(CountryApi);
     