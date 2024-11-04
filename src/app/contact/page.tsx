import React from "react";
import Contactform from "../form/page";
import { FaGithub , FaLinkedin} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url(form.png)" }}>

      <div className="h-[60%] w-[60%] relative bg-cover bg-center rounded-xl border border-white" 
        style={{ backgroundImage: "url(bg.jpg)" }}>

        <div className="absolute left-20 bottom-16 w-[70%]">
            <Contactform/>
        </div>
                
        <div className="ml-36 mt-72 text-gray-50 text-center  flex space-x-6" >

          <a href="https://github.com/MinalSaleem" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline text-3xl flex items-center">
            <FaGithub/>Github
          </a>

          <a href="https://www.linkedin.com/in/minalsaleem"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-3xl flex items-center">
              <FaLinkedin/>Linkedin
          </a>

        </div>

      </div>

    </div>
  );
};

export default Contact;