import React from "react";
import BGIMG1 from "../../../images/BGIMG_1.png";
import {
  FaNetworkWired,
  FaInternetExplorer,
  FaSatelliteDish,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const myStyle2 = {
    backgroundImage: `url(${BGIMG1})`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={myStyle2} className="lg:mb-0 md:mb-10 mb-10">
      <div className="w-full lg:h-screen flex flex-col justify-center items-start">
        <div className="flex items-center ml-8 mb-20 lg:mt-0 md:mt-10 mt-10">
          <div className="w-2 h-20 bg-[#4C8FFF] mr-2"></div>
          <div>
            <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold">Our Services & Features</h1>
            <h1 className="lg:text-2xl md:text-2xl text-lg">
              Join today to take advantage of IRIT's great features.
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center gap-12 grid-cols-1 pl-8 pr-8">
          <div className="  mx-auto flex flex-col justify-center items-center text-center">
            <FaNetworkWired className="lg:text-8xl md:text-6xl text-7xl text-[#4C8FFF] mb-4" />
            <h1 className="text-2xl font-semibold mb-2">
              Information Technology Network Services
            </h1>
            <p className="text-justify">
              Information Technology (IT) Network Services refer to the various
              technologies and services used to manage and maintain computer
              networks. These networks can include local area networks (LANs),
              wide area networks (WANs), and wireless networks.IT Network
              Services cover a wide range of functions, including network design
              and implementation, network security,
            </p>
          </div>
          <div className="  mx-auto  flex flex-col justify-center items-center text-center">
            <FaInternetExplorer className="lg:text-8xl md:text-6xl text-7xl text-[#4C8FFF] mb-4" />
            <h1 className="text-2xl font-semibold mb-2">
              Internal Communication Network Installation & Maintenance
            </h1>
            <p className="text-justify">
              Internal Communication Network Installation and Maintenance refers
              to the process of designing, implementing, and maintaining a
              communication network within an organization. This network
              connects employees and departments within an organization and
              facilitates the flow of information and collaboration.
            </p>
          </div>
          <div className=" mx-auto  flex flex-col justify-center items-center text-center">
            <FaSatelliteDish className="lg:text-8xl md:text-6xl text-7xl text-[#4C8FFF] mb-4" />
            <h1 className="text-2xl font-semibold mb-2">
              Satellite Receiving Equipment Installation & Maintenance
            </h1>
            <p className="text-justify">
              Satellite receiving equipment installation and maintenance refer
              to the process of setting up and maintaining equipment that
              receives signals from satellites. This equipment is used to
              provide services such as satellite television, satellite internet,
              and satellite phone services.
            </p>
          </div>
          <div className=" mx-auto  flex flex-col justify-center items-center text-center">
            <FaTools className="lg:text-8xl md:text-6xl text-7xl text-[#4C8FFF] mb-4" />
            <h1 className="text-2xl font-semibold mb-2">
              Wired & Wireless Communication Systems Installation
            </h1>
            <p className="text-justify">
              Wired and wireless communication systems installation refer to the
              process of setting up and configuring communication networks that
              use wired or wireless connections. These networks can include
              local area networks (LANs), wide area networks (WANs), and
              wireless networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
