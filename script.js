/* ==========================================
        DARSHANA SETHIA PORTFOLIO
========================================== */


/* ===============================
      SCROLL REVEAL ANIMATION
================================ */

const sections = document.querySelectorAll("section");

const reveal = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

sections.forEach(section=>{

section.classList.add("hidden");

reveal.observe(section);

});


/* ===============================
      NAVBAR SHADOW
================================ */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.style.boxShadow="0 8px 25px rgba(0,0,0,.18)";

}

else{

navbar.style.boxShadow="0 8px 25px rgba(0,0,0,.10)";

}

});


/* ===============================
      ACTIVE NAV LINKS
================================ */

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-180;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/* ===============================
      PROFILE IMAGE EFFECT
================================ */

const profile=document.querySelector(".profile img");

profile.addEventListener("mouseover",()=>{

profile.style.transform="scale(1.06) rotate(2deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1) rotate(0deg)";

});


/* ===============================
      COUNTER ANIMATION
================================ */

const counters=document.querySelectorAll(".counter");

const speed=150;

counters.forEach(counter=>{

const animate=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(animate,15);

}

else{

counter.innerText=target;

}

}

animate();

});


/* ===============================
      BACK TO TOP BUTTON
================================ */

const button=document.createElement("button");

button.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

button.id="topButton";

document.body.appendChild(button);

button.style.position="fixed";

button.style.bottom="30px";

button.style.right="30px";

button.style.width="50px";

button.style.height="50px";

button.style.borderRadius="50%";

button.style.border="none";

button.style.background="#0D7377";

button.style.color="white";

button.style.cursor="pointer";

button.style.display="none";

button.style.fontSize="18px";

button.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

button.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

button.style.display="block";

}

else{

button.style.display="none";

}

});

button.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ===============================
      BUTTON HOVER
================================ */

button.addEventListener("mouseover",()=>{

button.style.transform="scale(1.1)";

button.style.background="#095C5F";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

button.style.background="#0D7377";

});


/* ===============================
      PORTFOLIO CARD EFFECT
================================ */

const cards=document.querySelectorAll(".portfolio div");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


/* ===============================
      SMOOTH SCROLL
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

function showPortfolio(type){

const content=document.getElementById("portfolioContent");

if(type==="anchoring"){

content.innerHTML=`

<h2>Event Anchoring</h2>

<div class="gallery">

<img src="images/abvk1.jpeg" alt="ABVK Event 1">

<img src="images/abvk2.jpeg" alt="ABVK Event 2">

</div>

<div class="description">

<p>

Mentored and trained school students for formal and cultural anchoring events, helping them develop confidence, stage presence, voice modulation, and effective communication skills.

</p>

<ul>

<li>Trained 30+ students.</li>

<li>Annual Day preparation.</li>

<li>Prize Distribution ceremonies.</li>

<li>Formal and cultural event hosting.</li>

<li>Confidence-building through practical stage activities.</li>

</ul>

</div>

`;

}

else if(type==="events"){

content.innerHTML=`

<h2>Event Highlights</h2>

<!-- ================= ROBOFIESTA ================= -->

<div class="gallery">

    <img src="images/robo1.jpeg">
    <img src="images/robo2.jpeg">
    <img src="images/robo3.jpeg">
    <img src="images/robo4.jpeg">
    <img src="images/robo6.jpeg">

</div>

<div class="description">

<h3>Robofiesta 2025</h3>

<ul>

<li>National Level Technical Fest conducted at RVITM.</li>

<li>Anchored the inauguration, main event and valedictory ceremony.</li>

<li>Led the Speakers Team as the Head of the committee.</li>

<li>Honoured with a memento for leadership and contribution.</li>

</ul>

</div>

<!-- ================= SAMBHRAM ================= -->

<div class="gallery">

    <img src="images/sambhram1.jpeg">
    <img src="images/sambhram2.jpeg">
    <img src="images/sambhram3.jpeg">
    <img src="images/sambhrampre1.jpeg">
    <img src="images/sambhrampre2.jpeg">
    <img src="images/sambhrampre3.jpeg">

</div>

<div class="description">

<h3>Sambhram Cultural Fest</h3>

<ul>

<li>Anchored multiple events across Sambhram 2024, 2025 and 2026.</li>

<li>Hosted cultural programmes with large student audiences.</li>

<li>Conducted formal stage announcements and guest introductions.</li>

<li>Managed stage flow and audience engagement throughout the events.</li>

</ul>

</div>

<div class="description">

<h3>Other Experiences</h3>

<ul>

<li>Orientation & Induction Programmes.</li>

<li>Guest Lectures.</li>

<li>Prize Distribution Ceremonies.</li>

<li>Technical Workshops.</li>

<li>Public Speaking Sessions.</li>

<li>Master of Ceremonies.</li>

</ul>

</div>
`;

}
}
