const navList=[...document.querySelectorAll(".nav__list li a")],topButton=document.querySelector(".top-button"),clearClass=()=>{navList.forEach(t=>t.classList.remove("active"))};navList.forEach(t=>{t.addEventListener("click",t=>{navList.forEach(t=>t.classList.remove("active")),t.target.classList.toggle("active")})});let h=window.innerHeight;const position=window.addEventListener("scroll",()=>{h=window.innerHeight,window.pageYOffset>h?topButton.style.display="block":topButton.style.display="none"}),scrollToTop=()=>{const t=document.documentElement.scrollTop;if(t>0){let o=16;o=t>30?16:32,window.requestAnimationFrame(scrollToTop),window.scrollTo(0,t-t/o)}};topButton.addEventListener("click",()=>{scrollToTop()});