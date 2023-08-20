import React, { useRef, useState } from "react";
import "../css/Navbar.css"
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"
import { AppShell, Navbar, Header } from "@mantine/core"

export default  function NavigationBar  ({ children })  {
    const [isGreen, setIsGreen] = useState(true);
    const ref = useRef(null)

    const handleGreenChange = () => {
        setIsGreen(!isGreen);
    };

    const handleBarButton = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        console.log(ref.current.id)
    }


    return (
      <>
      <div class="nav z-10">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title" >
      <a href="/">Serene Scene</a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    {/* <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
    <a href="/login">Login</a>
    <a href="/signup">Signup</a>
  </div>
</div>
{children}
</>
    );
};

// export default function NavigationBar({ children }) {

//   return (
//     <AppShell
//       padding="md"
//       // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
//       header={<Header height={60} p="xs">{/* Header content */}
//       </Header>}
//       styles={(theme) => ({

//       })}
//     >
//       {/* Your application here */}
//       {children}
//     </AppShell>
//   )
// }

// export default Navbar;
