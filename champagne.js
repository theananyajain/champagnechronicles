function arr() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

arr();

function searchGrow() {
  let search = document.querySelector("#search");
  let signup = document.querySelector("#signup");
  let searchtext = document.querySelector("#searchtext");

  search.onclick = function () {
    signup.classList.toggle("active");
    searchtext.classList.toggle("active");
    search.classList.toggle("active");
  };
}
searchGrow();

var tl = gsap.timeline();

tl.to(
  "#glass",
  {
    bottom: "13%",
  },
  "a"
);
tl.from("#links", {
  opacity: 0,
  duration: 0.8,
  marginTop: "2%",
});
const div = document.querySelector("#glass");
tl.set(glass, { boxShadow: "300px 2px  #93a256", duration: 1, delay: -1 });

tl.from("#head", {
  opacity: 0,
  duration: 1,
  delay: 0.1,
});
tl.from("#para", {
  opacity: 0,
  duration: 1,
  delay: -.7,
});
tl.to("#explore", {
  opacity: 1,
  delay : -.5,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 0%",
    end: "bottom -150%",
    pin: true,
    // markers: true,
    scrub: 2,
  },
});

tl2.from("#white>h2", {
  x: 1080,
  duration: 3,
});
tl2.to(
  "#white",
  {
    duration: 3,
    y: -500,
  },
  "anim"
);

tl2.to(
  "#bigimg",
  {
    scale: 1.2,
    duration: 3,
    width: "40%",
  },
  "anim"
);
tl2.to("#greencir", {
  delay : 1,
  right: "45%",
  opacity:1,
},"-anim");

const greencir = document.querySelector("#greencir");
tl2.set(greencir, { boxShadow: "120px 2px  #93a256", duration: 1 , delay : .5,});

tl2.to("#greentext>h3", {
  duration: 3,
  delay : 1.5,
  expo : Power3,
  right: "6%",
});
tl2
.to("#page2",{
  pin: true,
  duration : 2,
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger : "#page3",
    scroller : "#main",
    start : "top 0%",
    end : "bottom -130%",
    pin : true,
    // markers : true,
    scrub : 1,
  }
})
tl3.to("#texttrain",{
  left : "-18%",
  duration : 2,
},"page3")
tl3
.to("#p3box1",{
  left : '20%',
  duration : 2,
  expo: Power3,
},"page3")
tl3
.to("#p3box2",{
  left : '40%',
  duration : 2,
  expo: Power3,
},"page3")
tl3
.to("#p3box1",{
  duration : 2,
  scale : 1,
  left  : "0",
  expo: Power3,
},"page3left")
tl3
.to("#p3box2",{
  scale : 1,
  duration : 2,
  left  : "25%",
  expo: Power3,
},"page3left")
tl3
.to("#texttrain",{
  duration : 2,
  top  : "2.5%",
  expo: Power3,
},"page3left")
tl3
.to("#grbox",{
  duration : 3,
  width : "30vw",
  top  : "20%",
  opacity:1,
  expo: Power3,
},"page3left")
tl3
.from("#grbox>h3",{
  duration : 3,
})
tl3
.to("#p3box1",{
  duration : 2,
  scale : 1.5,
  top : "-110%",
},"scale")
tl3
.to("#texttrain",{
  duration : 2,
  top : "-20%",
},"scale")
tl3
.to("#grbox",{
  top : "-90%",
},"scale")
tl3
.to("#p3box2",{
  duration : 2,
  scale : 1.4,
  top : "10%"
},"scale")
tl3
.to("#p3box2",{
  duration : 4,
  scale : 1.4,
 left : "-60%"
},"pa4")
tl3
.to("#page4",{
  duration : 2,
  top : "10%",
  opacity : 1,
})
tl3
.to("#foxa",{
  duration : 2,
  left: "3%",
  opacity : 1,
},"fox")
tl3
.to("#foxb",{
  duration : 2,
  top : "33.5%",
  opacity : 1,
},"fox")
tl3
.to("#foxc",{
  duration : 2,
  top : "34%",
  opacity : 1,
},"fox")
tl3
.to("#foxd",{
  duration : 2,
  left : "75%",
  opacity : 1,
},"fox")
tl3
.to("#page4",{
  duration : 2,
  pin : true,
})
tl3
.to("#page4",{
  duration : 4,
  left : "-85%",
  delay : 5,
})
tl3
.to("#foxa,#foxb,#foxc,#foxd",{
  duration : 2,
  left : "120%",
  opacity:0,
  stagger : 1.5,
})
tl3
.to("#pa6big",{
  duration : 2,
  top : "10%",
  delay : 1,
})
tl3
.to("#pa6s1",{
  duration : 2,
  top : "4%",
  delay : -1,
})
tl3
.to("#pa6s2",{
  duration : 2,
  top : "50%",
  delay : -1,
})
tl3
.to("#pa6s3",{
  duration : 2,
  top : "30%",
  delay : -1,
})
tl3
.to("#pa6big",{
  duration : 2,
  top : "-90%",
  delay : '2',
  stagger : 1,
},"lala")
tl3
.to("#pa6s1,#pa6s2,#pa6s3",{
  duration : 2,
  top : "-80%",
  delay : '2',
  stagger : 2,
  opacity :0,
},"lala")
tl3
.to("#p7img1",{
  duration : 1,
  top : "10%",
  delay : 3,
  opacity :1,
},"lala")
tl3
.to("#p7img2",{
  duration : 1,
  top : "40%",
  delay : -1.8,
  opacity :1,
})
tl3
.to("#p7img3",{
  duration : 1,
  top : "22%",
  delay : -1.8,
  opacity :1,
})
tl3
.to("#p7img4",{
  duration : 1,
  top : "43%",
  delay : -1.8,
  opacity :1,
})
tl3.to("#p7img1,#p7img2,#p7img3,#p7img4",{
  top : "-80%",
  duration : 2,
  delay : 3,
  opacity : 0,
})
tl3
.to("#foothead>h1",{
  top : "0%",
  opacity : 1,
  duration : 2,
  delay : 1,
})
tl3
.to("#footer",{
  top : "20%",
  opacity : 1,
  duration : 2,
  delay : -.7,
})

