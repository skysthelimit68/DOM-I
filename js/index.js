const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//setting all nav items
let navItems = document.querySelectorAll("nav a");
for(let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent["nav"]["nav-item-" + (i+1)];
}

//setting up cta H1 
let ctaH1 = document.querySelector(".cta .cta-text h1");

//splitting cta H1 into an array w/o spaces
ctaH1Array = siteContent["cta"]["h1"].split(" ");
for(let i = 0; i < ctaH1Array.length; i++) {
  ctaH1.innerText += ctaH1Array[i];
  ctaH1.innerText += (i == ctaH1Array.length-1)? "": "\r\n";
}

//setting up button
let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

//setting up cta image
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src",siteContent["cta"]["img-src"]);

//get an array of key names from siteContent["main-content"]
let mainContentKeys = Object.getOwnPropertyNames(siteContent["main-content"]);

//get an array of all h4 tags from main-content, and set initial counter
let mainContentH4 = document.querySelectorAll(".main-content .text-content h4");
let mainH4Count = 0;

//get an array of all p tags from main-content and set initial counter
let mainContentContent = document.querySelectorAll(".main-content .text-content p");
let mainContentCount = 0;

//get an array of all img tags from main-content and set initial counter
let mainContentImg = document.querySelectorAll(".main-content img");
let mainImgCount = 0;

//setup loop to iterate each keys in siteContent["main-content"]
for(let i = 0; i < mainContentKeys.length; i++) {
  //if the key contains the phrase h4, set h4 at specific mainH4Count to key's value;
  if(mainContentKeys[i].includes("h4")) {
    mainContentH4[mainH4Count].innerText = siteContent["main-content"][mainContentKeys[i]];
    mainH4Count++;
  }   
  //if the key contains the phrase content, set p at specific mainContentCount to key's value;
    else if (mainContentKeys[i].includes("content")) {
    mainContentContent[mainContentCount].innerText = siteContent["main-content"][mainContentKeys[i]];
    mainContentCount++;
  } 
    //if the key contains the phrase img-src, set img at specific mainContentCount to key's value;
    else if (mainContentKeys[i].includes("img-src")) {
    mainContentImg[mainImgCount].setAttribute("src", siteContent["main-content"][mainContentKeys[i]]);
    mainImgCount++;
  }
}

//get an array of key names from siteContent["contact"]
let contactKeys = Object.getOwnPropertyNames(siteContent["contact"]);

//get an array of all h4 elements from contact and set initial counter
let contactH4 = document.querySelectorAll(".contact h4");
let contactH4Count = 0;

//get an array of all p elements from contact and set initial counter
let contactP = document.querySelectorAll(".contact p");
let contactPCount = 0;

//setup loop to iterate each in siteContent["contact"]
for(let i = 0; i < contactKeys.length; i++) {
  //if the key contains the phrase h4, set h4 at specific contactH4Count to key's value;
  if(contactKeys[i].includes("h4")){
    contactH4[contactH4Count].textcontent = siteContent["contact"][contactKeys[i]];
    contactH4Count++;
  } 
    //else set p tag at specific contactPCount to keys' value
    else {
    contactP[contactPCount].textContent = siteContent["contact"][contactKeys[i]];
    contactPCount++;
  }
}

//setting up footer;
let footerCR = document.querySelector("footer p");
footerCR.textContent = siteContent["footer"]["copyright"];