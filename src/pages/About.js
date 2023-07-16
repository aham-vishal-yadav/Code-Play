import React from "react";
import {
    FaEnvelopeOpenText,
    FaMapMarkerAlt,
    FaLinkedin,
    FaRegCalendarAlt,
    FaGithub,
} from "react-icons/fa";



const About = () => {
    return (
        <>
            <section>
                <div
                    className=" px-4 sm:px-5 md:px-10 lg:px-20 min-h-screen"
                    style={{
                        background: 'linear-gradient(to left, rgb(254, 240, 138), rgb(251, 207, 232), rgb(244, 114, 182))'
                    }}

                >
                    <div data-aos="fade">
                        <div className="py-12">
                            {/* Page Title */}
                            <h2 className="after-effect after:left-52 mt-12 lg:mt-0 text-3xl ">
                                About Me
                            </h2>
                            <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                                <div className="col-span-12 md:col-span-4">
                                    {/* personal images for about page  */}
                                    <img
                                        className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                                        src="https://img.lovepik.com/element/40128/7461.png_1200.png"
                                        alt=""
                                        style={{
                                            mixBlendMode: "multiply"

                                            // Apply the desired blend mode here
                                        }}
                                    />
                                </div>
                                <div className="col-span-12 md:col-span-8 space-y-2.5">
                                    {/* About me information */}
                                    <div className="md:mr-12 xl:mr-16">
                                        <h3 className="text-4xl font-medium dark:text-green mb-2.5">
                                            Who am i?
                                        </h3>
                                        <div className="text-2xl font-bold   ">Vishal Yadav</div>
                                        <p className="text-gray-lite dark:text-color-910 leading-7">
                                            I'm a passionate Full Stack Developer based in India, specializing in web and app development.
                                            My goal is to create innovative solutions and deliver exceptional user experiences.
                                        </p>
                                        <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                                            I thrive on solving complex problems and turning them into elegant and efficient applications.
                                            With a keen eye for design, I strive to create visually appealing and intuitive interfaces.
                                        </p>
                                    </div>

                                    {/* personal information */}
                                    <div>
                                        <h3 className="text-4xl font-medium my-5 dark:text-white">
                                            Personal Info
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex">
                                                <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                    <FaLinkedin />
                                                </span>
                                                <div className="space-y-1">
                                                    <p className="text-xs text-gray-lite dark:text-color-910">
                                                        LinkedIn
                                                    </p>
                                                    <a href="https://www.linkedin.com/in/ahamvishalyadav/" target="_blank"><h6 className="font-medium dark:text-white">
                                                        Connect on linkedin
                                                    </h6></a>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                    <FaMapMarkerAlt />
                                                </span>
                                                <div className="space-y-1">
                                                    <p className="text-xs text-gray-lite dark:text-color-910">
                                                        Location
                                                    </p>
                                                    <h6 className="font-medium dark:text-white">
                                                        Delhi NCR
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                    <FaEnvelopeOpenText />
                                                </span>
                                                <div className="space-y-1">
                                                    <p className="text-xs text-gray-lite dark:text-color-910">
                                                        Email
                                                    </p>
                                                    <h6 className="font-medium dark:text-white">
                                                        vishalzoned@gmail.com
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                    <FaGithub />
                                                </span>
                                                <div className="space-y-1">
                                                    <p className="text-xs text-gray-lite dark:text-color-910">
                                                        Github
                                                    </p>
                                                    <h6 className="font-medium dark:text-white">
                                                        <a href="https://github.com/aham-vishal-yadav">Browse</a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End personal information */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
