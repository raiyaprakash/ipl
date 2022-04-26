"use strict";(self.__cfswpl__=self.__cfswpl__||[]).push([[565],{1565:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(2547),n=r(2700);const s=r(4500).iv`
  width: 100%;
  height: 10rem;
  overflow: hidden;
  padding-left: 1rem;

  g.axes {
    stroke: rgb(255 255 255 / 0.8);
  }

  path {
    stroke: rgb(255 255 255 / 0.8) !important;
  }

  .Cursor > div:first-of-type {
    background: rgb(255 50 50 / 0.8) !important;
  }
`,l=({data:e})=>{const t=(0,a.useMemo)((()=>({showPoints:!1})),[]),r=(0,a.useMemo)((()=>[{primary:!0,type:"time",position:"bottom"},{type:"linear",position:"left"}]),[]);return a.createElement(a.Fragment,null,e.length>1&&a.createElement("div",{className:s},a.createElement(n.Chart,{data:[{data:e,label:"Estimated Bandwidth"}],series:t,axes:r,secondaryCursor:{render:({value:e})=>a.createElement("span",null,(null!==e&&void 0!==e?e:0).toFixed(2))},primaryCursor:{render:({value:e})=>a.createElement("span",null,new Date(e).toLocaleTimeString())}})))}}}]);
