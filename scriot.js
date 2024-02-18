var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers:true,
}})

tl.to("#fanta", {
    top: "120%",
    left: "10%",
    rotation: 360,
}, orange);
tl.to("#orange-slice", {
    top: "160%",
    left: "35%"
}, orange)
tl.to("#orange", {
    top: "150%",
    left: "80%",
    zIndex: 99
}, orange)


tl.to("#leaf", {
    top: "120%",
    left: "5%",
    rotation: 110,
    zIndex: 99
}, orange)

tl.to("#leaf-2", {
    top: "110%",
    rotation: 80,
    left: "80%",
    zIndex: 99
}, orange)




var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers:true,
}})

tl2.from(".lemon1", {
    top: "100%",
    rotate:-"90deg",
    left: "0",
    rotation: 360,
},'ca');

tl2.from("#cocacola", {
    top: "150%",
    rotate:-"90deg",
    left: "0",
    rotation: 360,
}, 'ca');

tl2.from(".lemon2", {
    top: "100%",
    rotate:-"90deg",
    right: "0",
    rotation: 360,
}, 'ca');

tl2.from("#dew", {
    top: "150%",
    rotate:-"90deg",
    right: "0",
    rotation: 360,
}, 'ca');

tl2.to("#fanta", {
    top: "218%",
    left: "35%",
    width: "30%",
    rotation: 360,
}, 'ca');

tl2.to("#orange-slice", {
    top: "210%",
    left: "45%",
    rotation: 360,
}, 'ca');





if(window.innerWidth < 768) { // Adjust values for devices with width less than 768 pixels
    tl.to("#fanta", { top: "100%", left: "0%", rotation: 360 }, orange);
    tl.to("#orange-slice", { top: "130%", left: "20%" }, orange);
    tl.to("#orange", { top: "120%", left: "60%", zIndex: 99 }, orange);
    tl.to("#leaf", { top: "100%", left: "2%", rotation: 110, zIndex: 99 }, orange);
    tl.to("#leaf-2", { top: "90%", rotation: 80, left: "70%", zIndex: 99 }, orange);
    
    tl2.to("#fanta", { top: "210%", left: "40%", width: "20%", rotation: 360 }, 'ca');
    tl2.to("#orange-slice", { top: "180%", left: "30%", rotation: 360 }, 'ca');
     
}