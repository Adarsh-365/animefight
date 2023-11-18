function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./ezgif-frame-001.jpg
     ./ezgif-frame-002.jpg
     ./ezgif-frame-003.jpg
     ./ezgif-frame-004.jpg
     ./ezgif-frame-005.jpg
     ./ezgif-frame-006.jpg
     ./ezgif-frame-007.jpg
     ./ezgif-frame-008.jpg
     ./ezgif-frame-009.jpg
     ./ezgif-frame-010.jpg
     ./ezgif-frame-011.jpg
     ./ezgif-frame-012.jpg
     ./ezgif-frame-013.jpg
     ./ezgif-frame-014.jpg
     ./ezgif-frame-015.jpg
     ./ezgif-frame-016.jpg
     ./ezgif-frame-017.jpg
     ./ezgif-frame-018.jpg
     ./ezgif-frame-019.jpg
     ./ezgif-frame-020.jpg
     ./ezgif-frame-021.jpg
     ./ezgif-frame-022.jpg
     ./ezgif-frame-023.jpg
     ./ezgif-frame-024.jpg
     ./ezgif-frame-025.jpg
     ./ezgif-frame-026.jpg
     ./ezgif-frame-027.jpg
     ./ezgif-frame-028.jpg
     ./ezgif-frame-029.jpg
     ./ezgif-frame-030.jpg
     ./ezgif-frame-031.jpg
     ./ezgif-frame-032.jpg
     ./ezgif-frame-033.jpg
     ./ezgif-frame-034.jpg
     ./ezgif-frame-035.jpg
     ./ezgif-frame-036.jpg
     ./ezgif-frame-037.jpg
     ./ezgif-frame-038.jpg
     ./ezgif-frame-039.jpg
     ./ezgif-frame-040.jpg
     ./ezgif-frame-041.jpg
     ./ezgif-frame-042.jpg
     ./ezgif-frame-043.jpg
     ./ezgif-frame-044.jpg
     ./ezgif-frame-045.jpg
     ./ezgif-frame-046.jpg
     ./ezgif-frame-047.jpg
     ./ezgif-frame-048.jpg
     ./ezgif-frame-049.jpg
     ./ezgif-frame-050.jpg
     ./ezgif-frame-051.jpg
     ./ezgif-frame-052.jpg
     ./ezgif-frame-053.jpg
     ./ezgif-frame-054.jpg
     ./ezgif-frame-055.jpg
     ./ezgif-frame-056.jpg
     ./ezgif-frame-057.jpg
     ./ezgif-frame-058.jpg
     ./ezgif-frame-059.jpg
     ./ezgif-frame-060.jpg
     ./ezgif-frame-061.jpg
     ./ezgif-frame-062.jpg
     ./ezgif-frame-063.jpg
     ./ezgif-frame-064.jpg
     ./ezgif-frame-065.jpg
     ./ezgif-frame-066.jpg
     ./ezgif-frame-067.jpg
     ./ezgif-frame-068.jpg
     ./ezgif-frame-069.jpg
     ./ezgif-frame-070.jpg
     ./ezgif-frame-071.jpg
     ./ezgif-frame-072.jpg
     ./ezgif-frame-073.jpg
     ./ezgif-frame-074.jpg
     ./ezgif-frame-075.jpg
     ./ezgif-frame-076.jpg
     ./ezgif-frame-077.jpg
     ./ezgif-frame-078.jpg
     ./ezgif-frame-079.jpg
     ./ezgif-frame-080.jpg
     ./ezgif-frame-081.jpg
     ./ezgif-frame-082.jpg
     ./ezgif-frame-083.jpg
     ./ezgif-frame-084.jpg
     ./ezgif-frame-085.jpg
     ./ezgif-frame-086.jpg
     ./ezgif-frame-087.jpg
     ./ezgif-frame-088.jpg
     ./ezgif-frame-089.jpg
     ./ezgif-frame-090.jpg
     ./ezgif-frame-091.jpg
     ./ezgif-frame-092.jpg
     ./ezgif-frame-093.jpg
     ./ezgif-frame-094.jpg
     ./ezgif-frame-095.jpg
     ./ezgif-frame-096.jpg
     ./ezgif-frame-097.jpg
     ./ezgif-frame-098.jpg
     ./ezgif-frame-099.jpg
     ./ezgif-frame-100.jpg
     ./ezgif-frame-101.jpg
     ./ezgif-frame-102.jpg
     ./ezgif-frame-103.jpg
     ./ezgif-frame-104.jpg
     ./ezgif-frame-105.jpg
     ./ezgif-frame-106.jpg
     ./ezgif-frame-107.jpg
     ./ezgif-frame-108.jpg
     ./ezgif-frame-109.jpg
     ./ezgif-frame-110.jpg
     ./ezgif-frame-111.jpg
     ./ezgif-frame-112.jpg
     ./ezgif-frame-113.jpg
     ./ezgif-frame-114.jpg
     ./ezgif-frame-115.jpg
     ./ezgif-frame-116.jpg
     ./ezgif-frame-117.jpg
     ./ezgif-frame-118.jpg
     ./ezgif-frame-119.jpg
     ./ezgif-frame-120.jpg
     ./ezgif-frame-121.jpg
     ./ezgif-frame-122.jpg
     ./ezgif-frame-123.jpg
     ./ezgif-frame-124.jpg
     ./ezgif-frame-125.jpg
     ./ezgif-frame-126.jpg
     ./ezgif-frame-127.jpg
     ./ezgif-frame-128.jpg
     ./ezgif-frame-129.jpg
     ./ezgif-frame-130.jpg
     ./ezgif-frame-131.jpg
     ./ezgif-frame-132.jpg
     ./ezgif-frame-133.jpg
     ./ezgif-frame-134.jpg
     ./ezgif-frame-135.jpg
     ./ezgif-frame-136.jpg
     ./ezgif-frame-137.jpg
     ./ezgif-frame-138.jpg
     ./ezgif-frame-139.jpg
     ./ezgif-frame-140.jpg
     ./ezgif-frame-141.jpg
     ./ezgif-frame-142.jpg
     ./ezgif-frame-143.jpg
     ./ezgif-frame-144.jpg
     ./ezgif-frame-145.jpg
     ./ezgif-frame-146.jpg
     ./ezgif-frame-147.jpg
     ./ezgif-frame-148.jpg
     ./ezgif-frame-149.jpg
     ./ezgif-frame-150.jpg
     ./ezgif-frame-151.jpg
     ./ezgif-frame-152.jpg
     ./ezgif-frame-153.jpg
     ./ezgif-frame-154.jpg
     ./ezgif-frame-155.jpg
     ./ezgif-frame-156.jpg
     ./ezgif-frame-157.jpg
     ./ezgif-frame-158.jpg
     ./ezgif-frame-159.jpg
     ./ezgif-frame-160.jpg
     ./ezgif-frame-161.jpg
     ./ezgif-frame-162.jpg
     ./ezgif-frame-163.jpg
     ./ezgif-frame-164.jpg
     ./ezgif-frame-165.jpg
     ./ezgif-frame-166.jpg
     ./ezgif-frame-167.jpg
     ./ezgif-frame-168.jpg
     ./ezgif-frame-169.jpg
     ./ezgif-frame-170.jpg
     ./ezgif-frame-171.jpg
     ./ezgif-frame-172.jpg
     ./ezgif-frame-173.jpg
     ./ezgif-frame-174.jpg
     ./ezgif-frame-175.jpg
     ./ezgif-frame-176.jpg
     ./ezgif-frame-177.jpg
     ./ezgif-frame-178.jpg
     ./ezgif-frame-179.jpg
     ./ezgif-frame-180.jpg
     ./ezgif-frame-181.jpg
     ./ezgif-frame-182.jpg
     ./ezgif-frame-183.jpg
     ./ezgif-frame-184.jpg
     ./ezgif-frame-185.jpg
     ./ezgif-frame-186.jpg
     ./ezgif-frame-187.jpg
     ./ezgif-frame-188.jpg
     ./ezgif-frame-189.jpg
     ./ezgif-frame-190.jpg
     ./ezgif-frame-191.jpg
     ./ezgif-frame-192.jpg
     ./ezgif-frame-193.jpg
     ./ezgif-frame-194.jpg
     ./ezgif-frame-195.jpg
     ./ezgif-frame-196.jpg
     ./ezgif-frame-197.jpg
     ./ezgif-frame-198.jpg
     ./ezgif-frame-199.jpg
     ./ezgif-frame-200.jpg
     ./ezgif-frame-201.jpg
     ./ezgif-frame-202.jpg
     ./ezgif-frame-203.jpg
     ./ezgif-frame-204.jpg
     ./ezgif-frame-205.jpg
     ./ezgif-frame-206.jpg
     ./ezgif-frame-207.jpg
     ./ezgif-frame-208.jpg
     ./ezgif-frame-209.jpg
     ./ezgif-frame-210.jpg
     ./ezgif-frame-211.jpg
     ./ezgif-frame-212.jpg
     ./ezgif-frame-213.jpg
     ./ezgif-frame-214.jpg
     ./ezgif-frame-215.jpg
     ./ezgif-frame-216.jpg
     ./ezgif-frame-217.jpg
     ./ezgif-frame-218.jpg
     ./ezgif-frame-219.jpg
     ./ezgif-frame-220.jpg
     ./ezgif-frame-221.jpg
     ./ezgif-frame-222.jpg
     ./ezgif-frame-223.jpg
     ./ezgif-frame-224.jpg
     ./ezgif-frame-225.jpg
     ./ezgif-frame-226.jpg
     ./ezgif-frame-227.jpg
     ./ezgif-frame-228.jpg
     ./ezgif-frame-229.jpg
     ./ezgif-frame-230.jpg
     ./ezgif-frame-231.jpg
     ./ezgif-frame-232.jpg
     ./ezgif-frame-233.jpg
     ./ezgif-frame-234.jpg
     ./ezgif-frame-235.jpg
     ./ezgif-frame-236.jpg
     ./ezgif-frame-237.jpg
     ./ezgif-frame-238.jpg
     ./ezgif-frame-239.jpg
     ./ezgif-frame-240.jpg
     ./ezgif-frame-241.jpg
     ./ezgif-frame-242.jpg
     ./ezgif-frame-243.jpg
     ./ezgif-frame-244.jpg
     ./ezgif-frame-245.jpg
     ./ezgif-frame-246.jpg
     ./ezgif-frame-247.jpg
     ./ezgif-frame-248.jpg
     ./ezgif-frame-249.jpg
     ./ezgif-frame-250.jpg
     ./ezgif-frame-251.jpg
     ./ezgif-frame-252.jpg
     ./ezgif-frame-253.jpg
     ./ezgif-frame-254.jpg
     ./ezgif-frame-255.jpg
     ./ezgif-frame-256.jpg
     ./ezgif-frame-257.jpg
     ./ezgif-frame-258.jpg
     ./ezgif-frame-259.jpg
     ./ezgif-frame-260.jpg
     ./ezgif-frame-261.jpg
     ./ezgif-frame-262.jpg
     ./ezgif-frame-263.jpg
     ./ezgif-frame-264.jpg
     ./ezgif-frame-265.jpg
     ./ezgif-frame-266.jpg
     ./ezgif-frame-267.jpg
     ./ezgif-frame-268.jpg
     ./ezgif-frame-269.jpg
     ./ezgif-frame-270.jpg
     ./ezgif-frame-271.jpg
     ./ezgif-frame-272.jpg
     ./ezgif-frame-273.jpg
     ./ezgif-frame-274.jpg
     ./ezgif-frame-275.jpg
     ./ezgif-frame-276.jpg
     ./ezgif-frame-277.jpg
     ./ezgif-frame-278.jpg
     ./ezgif-frame-279.jpg
     ./ezgif-frame-280.jpg
     ./ezgif-frame-281.jpg
     ./ezgif-frame-282.jpg
     ./ezgif-frame-283.jpg
     ./ezgif-frame-284.jpg
     ./ezgif-frame-285.jpg
     ./ezgif-frame-286.jpg
     ./ezgif-frame-287.jpg
     ./ezgif-frame-288.jpg
     ./ezgif-frame-289.jpg
     ./ezgif-frame-290.jpg
     ./ezgif-frame-291.jpg
     ./ezgif-frame-292.jpg
     ./ezgif-frame-293.jpg
     ./ezgif-frame-294.jpg
     ./ezgif-frame-295.jpg
     ./ezgif-frame-296.jpg
     ./ezgif-frame-297.jpg
     ./ezgif-frame-298.jpg
     ./ezgif-frame-299.jpg
     ./ezgif-frame-300.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})