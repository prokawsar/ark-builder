import{c as r}from"./config.0YLVYb42.js";const a=()=>{var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}},o=()=>{let e=!1;return a()&&"theme"in localStorage?e=localStorage.theme==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches?e=!0:e=r.theme==="dark",e},l=(e,t=!0)=>(e?(document.documentElement.classList.add("dark"),t&&(localStorage.theme="dark")):(document.documentElement.classList.remove("dark"),t&&(localStorage.theme="light")),e),c=()=>l(!o());export{o as i,l as s,c as t};
