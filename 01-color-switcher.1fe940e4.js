!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");colorInterval=null,t.disabled=!1,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,colorInterval=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(colorInterval)}))}();
//# sourceMappingURL=01-color-switcher.1fe940e4.js.map