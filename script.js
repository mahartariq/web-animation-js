

window.addEventListener("load",function(){

    document.getElementById("boat").animate([
        {transform:"translateX(1200%)"}
    ],{
        duration:55000,
        iterations:Infinity
    })


    document.getElementById("cloud1").animate([
        {transform:"translateX(-1110%)"}
    ],{
        duration:35000,
        iterations:Infinity
    })
    document.getElementById("cloud2").animate([
        {transform:"translateX(-1210%)"}
    ],{
        duration:23000,
        iterations:Infinity
    })
    document.getElementById("cloud3").animate([
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


    document.getElementById("tree").animate([{
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
})