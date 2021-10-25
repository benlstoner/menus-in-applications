var pages=["home","about","interact"];

function createNav(){
    var nav=document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg){
        var button=document.createElement("button");
        button.innerHTML=pg;
        button.addEventListener("click",function(){
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg==="home"){
        homePage()
    }else if(pg==="about"){
        aboutPage()
    }else{
        interact()
    }
}

function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    var name=document.createElement("h3");
    header.innerHTML="About Me";
    name.innerHTML="Ben";
    wrapper.appendChild(header);
    wrapper.appendChild(name);
}

function interact(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";

    var header=document.createElement("h1");
    header.innerHTML="Interact!";

    var increaseButton=document.createElement("button");
    increaseButton.innerHTML="Increase";

    var number = 0;
    var num=document.createElement("h3");
    num.innerHTML=number;
    increaseButton.addEventListener("click", function(){
        num.innerHTML="";
        number=(number+1);
        num.innerHTML=number;
    })
    wrapper.appendChild(header);
    wrapper.appendChild(increaseButton);
    wrapper.appendChild(num);
}

createNav();
createWrapper();
navigate("home");