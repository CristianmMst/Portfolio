import{r as c}from"./index.0d5c5f21.js";import{j as e,L as t}from"./jsx-runtime.d60b5b29.js";const r=()=>{const[a,i]=c.useState(!1),s=()=>{i(!a)};return e.jsxs("nav",{className:"navbar",children:[e.jsx("div",{className:"menu-mobile",onClick:s,children:e.jsx("i",{className:"fa-solid fa-bars",style:{fontSize:"35px",padding:"10px"}})}),e.jsxs("ul",{className:`nav ${a?"menu-mobile_active":""}`,children:[e.jsx("li",{className:"item",children:e.jsx(t,{activeClass:"active",onClick:s,to:"home",spy:!0,smooth:!0,duration:1e3,children:"Inicio"})}),e.jsx("li",{className:"item",children:e.jsx(t,{activeClass:"active",onClick:s,to:"about",spy:!0,smooth:!0,duration:1e3,children:"Sobre mí"})}),e.jsx("li",{className:"item",children:e.jsx(t,{activeClass:"active",onClick:s,to:"projects",spy:!0,smooth:!0,duration:1e3,children:"Proyectos"})}),e.jsx("li",{className:"item",children:e.jsx(t,{activeClass:"active",onClick:s,to:"skills",spy:!0,smooth:!0,duration:1e3,children:"Habilidades"})}),e.jsx("li",{className:"item",children:e.jsx(t,{activeClass:"active",onClick:s,to:"contact",spy:!0,smooth:!0,duration:1e3,children:"Contacto"})})]})]})};export{r as default};