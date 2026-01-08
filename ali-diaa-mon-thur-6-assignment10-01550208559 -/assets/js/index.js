dark= document.getElementById("html")
var defaultindex = Number(document.querySelectorAll("[data-index]")[0].attributes[1].nodeValue)
darkButton = document.querySelector("#theme-toggle-button")
var nextbtn=document.querySelector("#next-testimonial")
var previousbtn=document.querySelector("#prev-testimonial")
function adddark(){
    if (dark.classList=="dark"){
        dark.classList.remove("dark")
    }else{
        dark.classList.add("dark")
    }
}
darkButton.addEventListener("click" , adddark)



function next(){
    defaultindex+=1
   
    
    if (defaultindex=== document.querySelectorAll("[data-index]").length ){
        defaultindex=0
    }

    for (let i = 0 ; i < document.querySelectorAll("[data-index]").length  ; i++) {


    if (defaultindex === i) {
       document.querySelectorAll("[data-index]")[defaultindex].classList.add("scale-125")
       document.querySelectorAll("[data-index]")[defaultindex].classList.add("bg-accent")
       document.querySelectorAll("[data-index]")[defaultindex].classList.remove("bg-slate-400")
       document.querySelectorAll("[data-index]")[defaultindex].classList.remove("dark:bg-slate-600")
       
    }else{
         document.querySelectorAll("[data-index]")[i].classList.remove("scale-125")
         document.querySelectorAll("[data-index]")[i].classList.remove("bg-accent")
         document.querySelectorAll("[data-index]")[i].classList.add("bg-slate-400")
    }
        
    }
     

    slide()
}
function previous(){
    defaultindex-=1
   
    
    if (defaultindex === -1 ){
        defaultindex= document.querySelectorAll("[data-index]").length -1
    }
    
    

    for (let i = 0 ; i < document.querySelectorAll("[data-index]").length  ; i++) {


    if (defaultindex === i) {
       document.querySelectorAll("[data-index]")[defaultindex].classList.add("scale-125")
       document.querySelectorAll("[data-index]")[defaultindex].classList.add("bg-accent")
       document.querySelectorAll("[data-index]")[defaultindex].classList.remove("bg-slate-400")
       document.querySelectorAll("[data-index]")[defaultindex].classList.remove("dark:bg-slate-600")
       
    }else{
         document.querySelectorAll("[data-index]")[i].classList.remove("scale-125")
         document.querySelectorAll("[data-index]")[i].classList.remove("bg-accent")
         document.querySelectorAll("[data-index]")[i].classList.add("bg-slate-400")
    }
        
    }
     
 slide()
}


 nextbtn.addEventListener("click" , next )
 previousbtn.addEventListener("click" , previous)



var carsoulbuttons = document.querySelector("[role='tablist']")



carsoulbuttons.addEventListener("click" , function(e){


defaultindex = Number(e.target.attributes[1].nodeValue )

  for (let i = 0 ; i < document.querySelectorAll("[data-index]").length  ; i++) {


    if (defaultindex === i) {
       document.querySelectorAll("[data-index]")[defaultindex].classList.add("scale-125")
       document.querySelectorAll("[data-index]")[defaultindex].classList.add("bg-accent")
       document.querySelectorAll("[data-index]")[defaultindex].classList.remove("bg-slate-400")
       document.querySelectorAll("[data-index]")[defaultindex].classList.remove("dark:bg-slate-600")
       
    }else{
         document.querySelectorAll("[data-index]")[i].classList.remove("scale-125")
         document.querySelectorAll("[data-index]")[i].classList.remove("bg-accent")
         document.querySelectorAll("[data-index]")[i].classList.add("bg-slate-400")
    }
    
        
    }
 slide()

})


var slider = document.getElementById("testimonials-carousel")



function slide(){
if (defaultindex === 0) {
    slider.style.transform = `translateX(${0}%)` ; 
}else if (defaultindex===1) {
    slider.style.transform =  `translateX(${33.337}%)`
}else if (defaultindex===2) {
    slider.style.transform =  `translateX(${66.667}%)`
}else if (defaultindex===3){
    slider.style.transform =  `translateX(${100}%)`
}

}




window.addEventListener("scroll" , function(e){
    
})


var links = document.querySelectorAll('[role="menuitem"]')
var current = "";

var gear = document.querySelector("#settings-toggle")



var buttonweb = document.querySelector('[data-filter="web"]')
var buttonapp = document.querySelector('[data-filter="app"]')
var buttondesign = document.querySelector('[data-filter="design"]')
var buttonecom = document.querySelector('[data-filter="ecommerce"]')
var buttonall= document.querySelector('[data-filter="all"]')
var removearr = [ "hover:bg-slate-100" ,  "dark:hover:bg-slate-700" , "bg-white" ,  "dark:bg-slate-800" ,  "text-slate-600" ,  "dark:text-slate-300" ,  "border" ,  "border-slate-301" ,  "dark:border-slate-700"]
var arr =  ["hover:shadow-lg" ,  "hover:shadow-primary/50"  , "active" ,  'bg-linear-to-r' ,  "from-primary" ,  'to-secondary' ,  'text-white' ,  "shadow-lg" ,  "shadow-primary/50" ]



var sections = document.querySelectorAll("section");



window.addEventListener("scroll", function () {

  for (var i = 0; i < sections.length; i++) {
 
   
    if (window.scrollY >= sections[i].offsetTop  ) {
        
      current = sections[i].id;


    }

  }
  for (var j = 0; j < links.length; j++) {
    links[j].classList.remove("active");

    if (links[j].getAttribute("href") === "#" + current) {
      links[j].classList.add("active");
    }
  }
  if ("#" + current === "#hero-section" ) {
    document.querySelector("#scroll-to-top").classList.replace("visible","invisible")
    document.querySelector("#scroll-to-top").classList.replace("opacity-100","opacity-0")

  }else {
        document.querySelector("#scroll-to-top").classList.replace("invisible" , "visible")
            document.querySelector("#scroll-to-top").classList.replace("opacity-0" , "opacity-100")
            
  }
  document.querySelector("#scroll-to-top").addEventListener("click" , function(){
  window.scrollTo({
    top: sections[0].offsetTop ,
   
  });
  })
 

})

buttonall.addEventListener("click" , function () {




for (let index = 0; index < removearr.length; index++) {
    buttonall.classList.remove(removearr[index])
    
    buttonall.classList.add(arr[index])
    
}
removebuttonweb()
removebuttonapp()
removebuttondesign()
removebuttonecom()
var allcards = document.querySelectorAll('[data-category]')
for (let i = 0; i < allcards.length; i++) {
    allcards[i].style.display = `block`
      
    
    allcards[i].style.opacity = `1`
    allcards[i].style.transition = `opacity 0.3s , transform 0.3s`
    allcards[i].style.transform = `scale(1)`
    
    
    
}
})
buttonweb.addEventListener("click" , function () {




for (let index = 0; index < removearr.length; index++) {
    buttonweb.classList.remove(removearr[index])
    
    buttonweb.classList.add(arr[index])
    
}
removebuttonall()
removebuttonapp()
removebuttondesign()
removebuttonecom()

var allcards = document.querySelectorAll('[data-category]')
var webcards = document.querySelectorAll('[data-category="web"]')
for (let i = 0; i < allcards.length; i++) {
    allcards[i].style.display = `none`
      allcards[i].style.transform = `0.3s`
    
    allcards[i].style.opacity = `0`
    allcards[i].style.transition = `opacity 0.3s`
    allcards[i].style.transform = `scale(0.8)`

    
    
}
for (let j = 0; j < webcards.length; j++) {
 webcards[j].style.display = `block`
     webcards[j].style.transform = `0.3s`
     webcards[j].style.opacity = `1`
    webcards[j].style.transition = `opacity 0.3s`
    webcards[j].style.transform = `scale(1)`
    
}
})
buttonapp.addEventListener("click" , function () {




for (let index = 0; index < removearr.length; index++) {
    buttonapp.classList.remove(removearr[index])
    
    buttonapp.classList.add(arr[index])
    
}
removebuttonall()
removebuttonweb()
removebuttondesign()
removebuttonecom()
var allcards = document.querySelectorAll('[data-category]')
var appcards = document.querySelectorAll('[data-category="app"]')
for (let i = 0; i < allcards.length; i++) {

   
 allcards[i].style.display = `none`
    allcards[i].style.transform = `0.3s`
    
    allcards[i].style.opacity = `0`
    allcards[i].style.transition = `opacity 0.3s`
    allcards[i].style.transform = `scale(0.8)`
    
    
}
for (let j = 0; j < appcards.length; j++) {
    appcards[j].style.display = `block`
    appcards[j].style.transform = `0.3s`
    appcards[j].style.opacity = `1`
    appcards[j].style.transition = `opacity 0.3s`
    appcards[j].style.transform = `scale(1)`
    
    
}
})
buttondesign.addEventListener("click" , function () {
    
    
    
    
    for (let index = 0; index < removearr.length; index++) {
        buttondesign.classList.remove(removearr[index])
        
        buttondesign.classList.add(arr[index])
        
    }
    removebuttonall()
    removebuttonapp()
    removebuttonweb()
    removebuttonecom()
    var allcards = document.querySelectorAll('[data-category]')
    var designcards = document.querySelectorAll('[data-category="design"]')
    for (let i = 0; i < allcards.length; i++) {
        allcards[i].style.display = `none`
        allcards[i].style.transform = `0.3s`
        
        allcards[i].style.opacity = `0`
        allcards[i].style.transition = `opacity 0.3s`
    allcards[i].style.transform = `scale(0.8)`
    
    
    
}
for (let j = 0; j < designcards.length; j++) {
    designcards[j].style.display = `block`
    designcards[j].style.transform = `0.3s`
    designcards[j].style.opacity = `1`
    designcards[j].style.transition = `opacity 0.3s`
    designcards[j].style.transform = `scale(1)`
    
}
})
buttonecom.addEventListener("click" , function () {
    
    
    
    
    for (let index = 0; index < removearr.length; index++) {
        buttonecom.classList.remove(removearr[index])
        
        buttonecom.classList.add(arr[index])
        
    }
    removebuttonall()
    removebuttonapp()
    removebuttondesign()
    removebuttonweb()
    var allcards = document.querySelectorAll('[data-category]')
    var ecomcards = document.querySelectorAll('[data-category="ecommerce"]')
    for (let i = 0; i < allcards.length; i++) {
        allcards[i].style.display = `none`
        allcards[i].style.transform = `0.3s`
        
        allcards[i].style.opacity = `0`
        allcards[i].style.transition = `opacity 0.3s`
        allcards[i].style.transform = `scale(0.8)`
        
        
        
    }
    for (let j = 0; j < ecomcards.length; j++) {
        ecomcards[j].style.display = `block`
        ecomcards[j].style.transform = `0.3s`
        ecomcards[j].style.opacity = `1`
        ecomcards[j].style.transition = `opacity 0.3s`
        ecomcards[j].style.transform = `scale(1)`
        
    }
})



function removebuttonall(){
    for (let index = 0; index < removearr.length; index++) {
        buttonall.classList.remove(arr[index])
        buttonall.classList.add(removearr[index])
        
        
    }
}
function removebuttonapp(){
    for (let index = 0; index < removearr.length; index++) {
        buttonapp.classList.add(removearr[index])
        
        buttonapp.classList.remove(arr[index])
        
    }
}
function removebuttonweb(){
    for (let index = 0; index < removearr.length; index++) {
        buttonweb.classList.add(removearr[index])
        
        buttonweb.classList.remove(arr[index])
        
    }
}
function removebuttondesign(){
    for (let index = 0; index < removearr.length; index++) {
        buttondesign.classList.add(removearr[index])
        
        buttondesign.classList.remove(arr[index])
        
    }
}
function removebuttonecom(){
    for (let index = 0; index < removearr.length; index++) {
        buttonecom.classList.add(removearr[index])
        
        buttonecom.classList.remove(arr[index])
        
    }
}


gear.addEventListener("click" , function(){
    gear.style.right= ` 20rem`
    document.querySelector("#settings-sidebar").classList.remove("translate-x-full")
})


document.querySelector("#close-settings").addEventListener("click" , function(){
    gear.style.right= `0px`
    document.querySelector("#settings-sidebar").classList.add("translate-x-full")
    
})
var data$font = document.querySelectorAll("[data-font]")
document.querySelector('[role="radiogroup"]').addEventListener("click" , function(e){
    console.log(e.target.getAttribute("data-font"))
    for (let index = 0; index < data$font.length; index++) {
        
        if ((e.target.getAttribute("data-font"))=== data$font[index].getAttribute("data-font")) {
            
            data$font[index].classList.add("border-primary")
            data$font[index].classList.add("dark:bg-slate-800")
            data$font[index].classList.add("active")
            data$font[index].classList.add("bg-slate-50")
            data$font[index].classList.remove("border-slate-200")
            data$font[index].classList.remove("dark:border-slate-700")
            
        }else if ((e.target.getAttribute("data-font"))=== null) {
        console.log("sebha zay ma heyaaaaaa")
        }
        
        else{
            data$font[index].classList.remove("border-primary")
            
            data$font[index].classList.remove("dark:bg-slate-800")
            data$font[index].classList.remove("active")
            data$font[index].classList.remove("bg-slate-50")
            data$font[index].classList.add("border-slate-200")
            data$font[index].classList.add("dark:border-slate-700")
        }
        
        
    }
    if ((e.target.getAttribute("data-font"))=== "alexandria") {
        document.querySelector("body").classList.add("font-alexandria")
        document.querySelector("body").classList.remove("font-tajawal")
        document.querySelector("body").classList.remove("font-cairo")
    }else if ((e.target.getAttribute("data-font")) === "cairo") {
        document.querySelector("body").classList.remove("font-alexandria")
        document.querySelector("body").classList.remove("font-tajawal")
        document.querySelector("body").classList.add("font-cairo")
    }else if ((e.target.getAttribute("data-font")) === "tajawal") {
        document.querySelector("body").classList.remove("font-alexandria")
   document.querySelector("body").classList.add("font-tajawal")
   document.querySelector("body").classList.remove("font-cairo")
   
}
})
var datacolor = document.querySelectorAll("[title]")
document.querySelector("#theme-colors-grid").addEventListener("click", function(e){
   
    for (let index = 0; index < datacolor.length; index++) {
        
   if ((e.target.getAttribute("title"))=== datacolor[index].getAttribute("title")) {  

          

    datacolor[index].classList.add("ring-2")
    datacolor[index].classList.add("ring-primary")
    datacolor[index].classList.add("ring-offset-2")
    datacolor[index].classList.add("ring-offset-white")
    datacolor[index].classList.add("dark:ring-offset-slate-900")

   }else if(e.target.getAttribute("id")===("theme-colors-grid")){
console.log(" sebha zay ma heya")




   }else{
    datacolor[index].classList.remove("ring-2")
    datacolor[index].classList.remove("ring-primary")
    datacolor[index].classList.remove("ring-offset-2")
    datacolor[index].classList.remove("ring-offset-white")
    datacolor[index].classList.remove("dark:ring-offset-slate-900")
   }

   if((e.target.getAttribute("data-primary"))=== datacolor[index].getAttribute("data-primary")){
   
    document.querySelector("html").style.setProperty("--color-primary", datacolor[index].getAttribute("data-primary"))
     document.querySelector("html").style.setProperty("--color-secondary", datacolor[index].getAttribute("data-secondary")) 

   }





}






})



var defaulbtn= document.querySelector("#reset-settings")
defaulbtn.addEventListener("click" , function(){
    document.querySelector("html").style.setProperty("--color-primary", "#6366f1")
    document.querySelector("html").style.setProperty("--color-secondary", "#8b5cf6")
        datacolor[0].classList.add("ring-2")
    datacolor[0].classList.add("ring-primary")
    datacolor[0].classList.add("ring-offset-2")
    datacolor[0].classList.add("ring-offset-white")
    datacolor[0].classList.add("dark:ring-offset-slate-900")
    for (let index = 1; index < datacolor.length; index++) {
    datacolor[index].classList.remove("ring-2")
    datacolor[index].classList.remove("ring-primary")
    datacolor[index].classList.remove("ring-offset-2")
    datacolor[index].classList.remove("ring-offset-white")
    datacolor[index].classList.remove("dark:ring-offset-slate-900")
        
    }


    document.querySelector("body").classList.add("font-tajawal")
    document.querySelector("body").classList.remove("font-alexandria")
    document.querySelector("body").classList.remove("font-cairo")
       data$font[1].classList.add("border-primary")
            data$font[1].classList.add("dark:bg-slate-800")
            data$font[1].classList.add("active")
            data$font[1].classList.add("bg-slate-50")
            data$font[1].classList.remove("border-slate-200")
            data$font[1].classList.remove("dark:border-slate-700")
   
                data$font[0].classList.remove("border-primary")
            
            data$font[0].classList.remove("dark:bg-slate-800")
            data$font[0].classList.remove("active")
            data$font[0].classList.remove("bg-slate-50")
            data$font[0].classList.add("border-slate-200")
            data$font[0].classList.add("dark:border-slate-700")
                data$font[2].classList.remove("border-primary")
            
            data$font[2].classList.remove("dark:bg-slate-800")
            data$font[2].classList.remove("active")
            data$font[2].classList.remove("bg-slate-50")
            data$font[2].classList.add("border-slate-200")
            data$font[2].classList.add("dark:border-slate-700")
                gear.style.right= `0px`
    document.querySelector("#settings-sidebar").classList.add("translate-x-full")

})










