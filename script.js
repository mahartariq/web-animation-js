

window.addEventListener("load",function(){

    var ship = document.getElementById("boat").animate([
        {transform:"translateX(1200%)"}
    ],{
        duration:55000,
        iterations:Infinity
    })


    var cloud1 = document.getElementById("cloud1").animate([
        {transform:"translateX(-1110%)"}
    ],{
        duration:35000,
        iterations:Infinity
    })

    var cloud2 = document.getElementById("cloud2").animate([
        {transform:"translateX(-1210%)"}
    ],{
        duration:23000,
        iterations:Infinity
    })
    var cloud3 = document.getElementById("cloud3").animate([
        {transform:"translateX(-1310%)"}
    ],{
        duration:31000,
        iterations:Infinity
    })



    document.getElementById("sun").animate([{
        transform:"scale(1.3,1.3)",
    }],{
        duration:4000,
        iterations:Infinity,
        direction:"alternate",
        easing:"ease-in-out"
    })


    var tree = document.getElementById("tree").animate([{
        transform:"translateX(-2400%)",
    }],{
        duration:49000,
        iterations:Infinity,
    })

    
    document.getElementById("cycle").animate([
        {transform:"translateX(40px)"}
    ],{
        duration:4000,
        iterations:Infinity,
        direction:"alternate",
        easing:"ease-in-out"
    })
    const goFaster =()=>{
        cloud1.playbackRate *= 1.1;
        cloud2.playbackRate *= 1.1;        
        cloud3.playbackRate *= 1.1;
        tree.playbackRate *= 1.1;
    }
    



    setInterval(function () {
        if(cloud1.playbackRate> 0.4){
            cloud1.playbackRate *= 0.9;
            console.log(cloud1.playbackRate);
            cloud2.playbackRate *= 0.9;
            console.log(cloud2.playbackRate);
            cloud3.playbackRate *=0.9;
            console.log(cloud3.playbackRate);
            tree.playbackRate *=0.9;
            console.log(tree.playbackRate);
        }
    },3000)
    






    document.addEventListener("click", goFaster);
})







