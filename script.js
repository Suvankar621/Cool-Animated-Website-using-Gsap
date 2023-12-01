var tl=gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"0% 90%",
    end:"50% 50%",
    scroller:".carosoul",
    scrub:true,
    

    
}})
tl.to("#p,#bg1,svg",{
    backgroundColor: '#6200e2',
    strokeDashoffset:390,
})
//text animation
tl.to(".page1-text",{
  y:-50,
  duration:1,
  delay:1,
  opacity:0
})
tl.from(".page2-text",{
  display:"block",
  y:50,
  duration:1,
  delay:1,
  opacity:0
  })
 tl.from(".page2 .img21",{
    display:"block",
    y:500,
    duration:5,
    delay:1,
    opacity:0,
    scrub:true,
    stagger:1
    })
    
tl.from(".page2 .img22",{
        display:"block",
        y:-500,
        duration:5,
        delay:1,
        opacity:0,
        scrub:true,
        stagger:1
        })
        
                
 




tl.to("#bg2",{
    backgroundColor: '#2b0064',
    strokeDashoffset:390,
})
//page 2
var tl2=gsap.timeline({scrollTrigger:{
    trigger:".page3",
    start:"0% 90%",
    end:"50% 50%",
    scroller:".carosoul",
    scrub:true,
  
    
}})
tl2.to("#p,#bg1,svg",{
    backgroundColor: '#1a003b',
    strokeDashoffset:330,
})
tl2.to("#bg2",{
    backgroundColor: '#2b0064',
    strokeDashoffset:330,
})
tl2.to(".page2-text",{
    y:-50,
    duration:1,
    delay:1,
    opacity:0
  })
  tl2.from(".page3-text",{
    display:"block",
    y:50,
    duration:1,
    delay:1,
    opacity:0
    })


    tl2.from(".page3 .img31",{
        display:"block",
        y:500,
        duration:5,
        delay:1,
        opacity:0,
        scrub:true,
        stagger:1
        })
        
    tl2.from(".page3 .img32",{
            display:"block",
            y:-500,
            duration:5,
            delay:1,
            opacity:0,
            scrub:true,
            stagger:1
            })
//page 3
var tl3=gsap.timeline({scrollTrigger:{
    trigger:".page4",
    start:"0% 90%",
    end:"50% 50%",
    scroller:".carosoul",
    scrub:true,

    
}})
tl3.to("#p,#bg1,svg",{
    backgroundColor: '#000000',
    strokeDashoffset:280,
})
tl3.to("#bg2",{
    backgroundColor: '#1a1a1a',
    strokeDashoffset:280,
})

tl3.to(".page3-text",{
    y:-50,
    duration:1,
    delay:1,
    opacity:0
  })
  tl3.from(".page4-text",{
    display:"block",
    y:50,
    duration:1,
    delay:1,
    opacity:0
    })



    tl3.from(".page4 .img41",{
        display:"block",
        y:500,
        duration:5,
        delay:1,
        opacity:0,
        scrub:true,
        stagger:1
        })
        
    tl3.from(".page4 .img42",{
            display:"block",
            y:-500,
            duration:5,
            delay:1,
            opacity:0,
            scrub:true,
            stagger:1
            })
//page 4
var tl4=gsap.timeline({scrollTrigger:{
    trigger:".page5",
    start:"0% 90%",
    end:"50% 50%",
    scroller:".carosoul",
    scrub:true,

    
}})
tl4.to("#p,#bg1,svg",{
    backgroundColor: '#0051ff',
    strokeDashoffset:230,
})
tl4.to("#bg2",{
    backgroundColor: '#00c8ff',
    strokeDashoffset:230,
})

tl4.to(".page4-text",{
    y:-50,
    duration:1,
    delay:1,
    opacity:0
  })
  tl4.from(".page5-text",{
    display:"block",
    y:50,
    duration:1,
    delay:1,
    opacity:0
    })


    tl4.from(".page5 img",{
        display:"block",
        y:500,
        duration:5,
        delay:1,
        opacity:0,
        scrub:true,
        stagger:1
        })
        
    tl4.from(".page5 .img",{
            display:"block",
            y:-500,
            duration:5,
            delay:1,
            opacity:0,
            scrub:true,
            stagger:1
            })
//page 5
var tl5=gsap.timeline({scrollTrigger:{
    trigger:".page6",
    start:"0% 90%",
    end:"50% 50%",
    scroller:".carosoul",
    scrub:true,

    
}})
tl5.to("#p,#bg1,svg",{
    backgroundColor: '#2f00ff',
    strokeDashoffset:180,
})
tl5.to("#bg2",{
    backgroundColor: '#2f00ff',
    strokeDashoffset:180,
})

tl5.to(".page5-text",{
    y:-50,
    duration:1,
    delay:1,
    opacity:0
  })
  tl5.from(".page6-text",{
    display:"block",
    y:50,
    duration:1,
    delay:1,
    opacity:0
    })


    
    tl5.from(".page6 img",{
        display:"block",
        y:500,
        duration:5,
        delay:1,
        opacity:0,
        scrub:true,
        stagger:1
        })
        
    tl5.from(".page6 .img",{
            display:"block",
            y:-500,
            duration:5,
            delay:1,
            opacity:0,
            scrub:true,
            stagger:1
            })
//page 5
var tl6=gsap.timeline({scrollTrigger:{
    trigger:".page7",
    start:"0% 90%",
    end:"50% 50%",
    scroller:".carosoul",
    scrub:true,

    
}})
tl6.to("#p,#bg1,svg",{
    backgroundColor: '#008d3d',
    strokeDashoffset:125,
})
tl6.to("#bg2",{
    backgroundColor: '#00ff6e',
    strokeDashoffset:125,
})
tl6.to(".page6-text",{
    y:-50,
    duration:1,
    delay:1,
    opacity:0
  })
  tl6.from(".page7-text",{
    display:"block",
    y:50,
    duration:1,
    delay:1,
    opacity:0
    })

    tl6.from(".page7 #img7",{
        display:"block",
        y:500,
        duration:5,
        delay:1,
        opacity:0,
        scrub:true,
        stagger:1
        })
        
    tl6.from(".page7 #img72",{
            display:"block",
            y:-500,
            duration:5,
            delay:1,
            opacity:0,
            scrub:true,
            stagger:1
            })
         
           



