const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d;e.disabled=!1,t.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(d),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.0d70f43f.js.map