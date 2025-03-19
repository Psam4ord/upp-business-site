import React from "react";

const Footer =()=>{
return(
    <div className=" flex flex-col min-h-screen bg-gray-800 text-white " > 
        footer
        <hr className="h-2 bg-black w-full px-2"/>
        <div className=""> 
Welcoming Ideas For Your Brands

<ul>
    <li>FAQ</li>
    <li>Support</li>

</ul>

<ul>
    <li>X(Twitter)</li>
    <li>Instagram</li>
    <li>Tiktok</li>
    <li>Whatsapp</li>

</ul>

<ul>

   <li  className="">Services</li>
   <li  className="">About Us</li> 
   <li  className=" "> Contact</li> 

</ul>

<span>
    <p>&#64; 2025 All rights reserved</p>
    <p>Terms Of Use</p>
    <p>Privacy Policy</p>
</span>

            </div>

        </div>
    )
}

export default Footer;