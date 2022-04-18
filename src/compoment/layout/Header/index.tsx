import * as React from 'react';
import DehazeIcon from "@mui/icons-material/Dehaze";
import logo from "../../../assets/apis_logo.png";
import './index.css'

export default function Header({openMenu}:{openMenu:any}) {
  return (
    
    <div className="topBox">
    <div className="IconBox">
      <DehazeIcon  onClick={()=>{
          openMenu()
      }} className="Icon"></DehazeIcon>
    </div>
    <div className="logoImg">
      <img src={logo} alt="" />
    </div>
  </div>
  );
}7
