import React from "react";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  return (
    <React.Fragment>
        <div
            id="home"
            style={{
            backgroundImage:
                "linear-gradient(62deg, #eef7fb 0 50%, #48afde 0% 100%)",
            minHeight: "500px",
            maxHeight: "1200px",
            height: "100%",
            width: "100%",
            }}
            >
            <div className="container m-auto">

                <div className="grid grid-cols-12">

                    <div className="bg-white flex flex-col justify-center 
                    col-span-12 md:col-span-5 md:bg-transparent">

                        <div className="container m-auto">

                            <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                                <p className=
                                    {`text-[#47aede] text-3xl md:text-base lg:text-2xl ${hind.className}`}
                                    > Hello!
                                </p>
                                <h1 className="text-[#223740] ">
                                   
                                </h1>

                            </div>

                        </div>

                    </div>

                </div>
            
            </div>
        </div>
    </React.Fragment>
  );
}
