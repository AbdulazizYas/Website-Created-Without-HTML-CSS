
//Here is Declaring The Variables
  var header     = document.createElement("header"),
      content    = document.createElement("div"),
      container  = document.createElement("div"),
      nav        = document.createElement("nav"),
      logo       = document.createElement("div"),
      yasTxt     = document.createElement("span"),
      navList    = document.createElement("ul"),
      listItmHom = document.createElement("li"),
      listItmArt = document.createElement("li"),
      listItmAbt = document.createElement("li"),
      listItmCnt = document.createElement("li"),
      //listItmTxt = document.createTextNode(),
      slider     = document.createElement("div"),
      sliderText = document.createElement("p"),
      sliderTxtN = document.createTextNode("A Created Website only From Vanilla JavaScript"),
      artclsDiv  = document.createElement("div"),
      heading    = document.createElement("h1"),
      artcl1     = document.createElement("article"),
      artcl2     = document.createElement("article"),
      artcl3     = document.createElement("article"),
      footer     = document.createElement("footer");

//              Appending Children

  document.body.appendChild(content);

    content.appendChild(header);

      header.appendChild(nav);
        nav.appendChild(logo);
          logo.appendChild(yasTxt);
        nav.appendChild(navList);
          navList.appendChild(listItmHom);
          navList.appendChild(listItmArt);
          navList.appendChild(listItmAbt);
          navList.appendChild(listItmCnt);

      header.appendChild(slider);
        slider.appendChild(sliderText);
          sliderText.appendChild(sliderTxtN);

    content.appendChild(artclsDiv);
        artclsDiv.appendChild(heading);
        artclsDiv.appendChild(artcl1);
        artclsDiv.appendChild(artcl2);
        artclsDiv.appendChild(artcl3);

    content.appendChild(footer);
//////////////////////////////////////////////
// Typing The Elements Texts and content
 yasTxt.textContent = "Yas";
 logo.textContent       = "Abdulaziz"+yasTxt.textContent;
 listItmHom.textContent = "Home";
 listItmArt.textContent = "Articles";
 listItmAbt.textContent = "About us";
 listItmCnt.textContent = "Contact us";
 heading.textContent    = "JavaScript Project";
 artcl1.textContent     = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

 artcl2.textContent     = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

 artcl3.textContent     = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

 footer.innerHTML     = "CopyRights &copy; AbdulazizYas";
 ////////////////////////////////////////////////////////
 //  Styling the Website & the Elements
 var mainColor = "#1e3141";

 document.body.style.margin = "0";
 document.body.style.padding = "0";
 document.body.style.textAlign = "center";
 document.body.style.fontFamily = "'Baloo Paaji 2'";

 header.style.width ="100%";
 header.style.height ="445px";

 nav.style.height = "34px";
 nav.style.width = "100%";
 nav.style.backgroundColor = mainColor;
 nav.style.color = "white";
 nav.style.padding = "25px";
 nav.style.fontSize = "18px";
 nav.style.overflow = "hidden";
 nav.style.boxShadow ="-4px 10px 8px 3px " + mainColor;
 nav.style.position = "fixed";
 nav.style.zIndex = "4";

 logo.style.float = "left";
 logo.style.lineHeight = "34px";
 logo.style.fontSize = "30px";
 logo.style.textShadow = "5px 5px 2px  #202020";

 navList.style.listStyleType = "none";
 navList.style.float = "right";
 navList.style.lineHeight = "34px";
 navList.style.margin = "0";

 Object.assign(listItmHom.style,{
   float:"left",
   marginRight:"60px",
   cursor: "pointer",
 });
 Object.assign(listItmArt.style,{
   float:"left",
   marginRight:"60px",
   cursor: "pointer",
 });
 Object.assign(listItmAbt.style,{
   float:"left",
   marginRight:"60px",
   cursor: "pointer"
 });
 Object.assign(listItmCnt.style,{
   float:"right",
   margin:" 0 30px 0 70px",
   cursor: "pointer",
   backgroundColor:"#fbfbfb",
   color: mainColor,
   padding:"2px 10px",
   borderRadius:"20px",
   lineHeight: "30px"
 });

 var i;
 for(i = 0; i < navList.children.length - 1; i += 1){
   navList.children[i].onmouseover = function () {
     this.style.fontSize = "20px";
     this.style.transition = "font-size .1s ease-in";
   }
   navList.children[i].onmouseout = function () {
     this.style.fontSize = "18px";
   }
 }

 navList.children[3].style.boxShadow = "-5px 3px 1px #222";
 navList.children[3].onmouseover = function () {
   this.style.backgroundColor = "#49545d";
   this.style.color = "white";
   this.style.boxShadow = "0 0 8px 3px #e2e2e2";
   this.style.transition = "all .25s ease-in";
 }
 navList.children[3].onmouseout = function () {
   this.style.backgroundColor = "white";
   this.style.color = mainColor;
   this.style.boxShadow = "-5px 3px 1px #222";
 }

 slider.style.background = "url('https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg')";
 slider.style.backgroundSize = "cover";
 slider.style.height = "100%";
 slider.style.position = "relative";
 slider.style.top = "78px";

 sliderText.style.position = "absolute";
 sliderText.style.top = "calc(50% - 2.75em)";
 sliderText.style.left = "219px";
 sliderText.style.color = "#fbfbfb";
 sliderText.style.fontSize = "2.75em";
 sliderText.style.textShadow = "3px 3px 4px  #202020";
 sliderText.style.borderTop = "5px solid " + mainColor;
 sliderText.style.borderBottom = "5px solid " + mainColor;
 //sliderText.style.cssText = "top:50%;left:50%;";

 artclsDiv.style.position = "relative";
 artclsDiv.style.backgroundColor = "#e2e2e2";
 artclsDiv.style.padding = "50px";
 artclsDiv.style.top = "80px";
 artclsDiv.style.boxShadow = "0 -12px 8px 3px #e2e2e2";
 artclsDiv.style.zIndex = "2";

 heading.style.fontSize = "3.0em";
 heading.style.letterSpacing = "10px";
 heading.style.backgroundColor = mainColor;
 heading.style.color = "white";
 heading.style.borderRadius = "40px 40px 0 0";
 heading.style.boxShadow = "0 3px 6px #222";

 Object.assign(artcl1.style,{
   textAlign:"justify",
   fontSize:"1.75em",
   marginBottom:"40px",
   textIndent: "50px",
   padding:"25px",
   textShadow: "0 0 6px #BBB"
 });
 Object.assign(artcl2.style,{
   textAlign:"justify",
   fontSize:"1.75em",
   marginBottom:"40px",
   textIndent: "50px",
   padding:"25px",
   textShadow: "0 0 6px #BBB"
 });
 Object.assign(artcl3.style,{
   textAlign:"justify",
   fontSize:"1.75em",
   marginBottom:"30px",
   textIndent: "50px",
   padding:"30px",
   textShadow: "0 0 6px #BBB"
 });

 footer.style.position = "relative";
 footer.style.zIndex = "3";
 footer.style.backgroundColor = mainColor;
 footer.style.padding = "20px";
 footer.style.top = "80px";
 footer.style.fontSize = "1.3em";
 footer.style.color = "white";
 footer.style.letterSpacing = "5px";
 footer.style.boxShadow = "0 -5px 6px 15px " + mainColor;
