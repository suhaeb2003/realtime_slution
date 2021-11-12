function showGigs(){
           document.querySelector("#gigsCreate").style.display="block";
           document.querySelector("#profile_section").style.display="none";
           
}
function openAbout(){
          document.querySelector("#about").style.display="block";
          document.querySelector("#home").style.display="none";
}
function openHome(){
          document.querySelector("#home").style.display="block";
          document.querySelector("#gigs").style.display="none";
          document.querySelector("#gigsCreate").style.display="none";
          document.querySelector("#profile_section").style.display="none";
          document.querySelector("#about").style.display="none";
}
function OpenSection(){
          document.querySelector("#profile_section").style.display="block";
          document.querySelector("#gigs").style.display="none";
          document.querySelector("#gigsCreate").style.display="none";
          document.querySelector("#home").style.display="none";
          document.querySelector("#about").style.display="none";
}

// gig section design
function openGigs(){
          document.querySelector("#gigs").style.display="block";
          document.querySelector("#home").style.display="none";
          document.querySelector("#profile_section").style.display="none";
          document.querySelector("#about").style.display="none";
}
function closePresent(){
          document.querySelector("#request").style.display="block";
          document.querySelector("#aproval").style.display="none";
          document.querySelector("#modification").style.display="none";
          document.querySelector("#paused").style.display="none";
          document.querySelector("#draft").style.display="none";
          document.querySelector("#denied").style.display="none";

}
// request modification
function openModi(){
          document.querySelector("#modification").style.display="block";
          document.querySelector("#aproval").style.display="none";
          document.querySelector("#request").style.display="none";
          document.querySelector("#paused").style.display="none";
          document.querySelector("#draft").style.display="none";
          document.querySelector("#denied").style.display="none";

}
// MODIFICATION DIV
function openDraft(){
          document.querySelector("#draft").style.display="block";
          document.querySelector("#modification").style.display="none";
          document.querySelector("#paused").style.display="none";
          document.querySelector("#aproval").style.display="none";
          document.querySelector("#denied").style.display="none";
          

}
// DENIED DIV FUNCITON
function openDenied(){
          document.querySelector("#denied").style.display="block";
          document.querySelector("#draft").style.display="none";
          document.querySelector("#paused").style.display="none";
          document.querySelector("#modification").style.display="none";
          document.querySelector("#aproval").style.display="none";
}
// PAUSED DIV FUNCTION
function openPaused(){
          document.querySelector("#paused").style.display="block";
          document.querySelector("#denied").style.display="none";
          document.querySelector("#modification").style.display="none";
          document.querySelector("#aproval").style.display="none";
          document.querySelector("#draft").style.display="none";
  
}

function openPresent(){
          document.querySelector("#aproval").style.display="block";
          document.querySelector("#paused").style.display="none";
          document.querySelector("#denied").style.display="none";
          document.querySelector("#modification").style.display="none";
          document.querySelector("#request").style.display="none";
}

// GLEARY CREATE DESIGN
function openOverview(){
          document.querySelector("#overview").style.display="block";
          document.querySelector("#publish").style.display="none";
          document.querySelector("#pricing").style.display="none";
         
}
function openPricing(){
          document.querySelector("#pricing").style.display="block";
          document.querySelector("#overview").style.display="none";
          document.querySelector("#publish").style.display="none";
       
}

function openPublish(){
          document.querySelector("#publish").style.display="block";
          document.querySelector("#overview").style.display="none";
          document.querySelector("#pricing").style.display="none";
}
// ABOUT ME SICTION VIEWS HERE
function about_overview(){
          document.querySelector("#about_overview").style.display="block";
          document.querySelector("#shop").style.display="none";
          document.querySelector("#collection").style.display="none";
          document.querySelector("#likes").style.display="none";
}
function shop(){
          document.querySelector("#shop").style.display="block";
          document.querySelector("#about_overview").style.display="none";
          document.querySelector("#likes").style.display="none";
          document.querySelector("#collection").style.display="none";
}

function likes(){
          document.querySelector("#likes").style.display="block";
          document.querySelector("#shop").style.display="none";
          document.querySelector("#about_overview").style.display="none";
          document.querySelector("#collection").style.display="none";
}
function collection(){
          document.querySelector("#collection").style.display="block";
          document.querySelector("#shop").style.display="none";
          document.querySelector("#about_overview").style.display="none";
          document.querySelector("#likes").style.display="none";
}
