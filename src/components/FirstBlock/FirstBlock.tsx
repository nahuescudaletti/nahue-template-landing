"use client";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";

export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40" id="aboutus">
            <BackgroundRadialRight />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <Reveal>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center font-montserrat">
                                <span className="block degradedBlue bg-Orange">
                                    About us
                                </span>
                            </h1>
                        </Reveal>
                        <Reveal>
                            <p className="max-w-md mt-6 text-base md:text-xl font-light font-montserrat tracking-wide text-center md:text-left">
                                ProEdge "a space to create" was founded by Nahir Cosachov and
                                Francisco Quiroga after more than three years in digital
                                product sales and management. Their mission is to provide
                                clients with not just an experience, but also a long-term
                                professional relationship built on trust and results.
                            </p>
                        </Reveal>
                    </div>
                    <div className="md:col-span-1 grid grid-cols-1 gap-8">
                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6">
                                    <Reveal>
                                        <h3 className="text-xl md:text-3xl font-semibold">Mission</h3>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-sm md:text-base">
                                            To provide innovative digital solutions that empower our
                                            clients, helping them achieve their goals and exceed
                                            their expectations.
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </MotionTransition>
                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6">
                                    <Reveal>
                                        <h3 className="text-xl md:text-3xl font-semibold">Vision</h3>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-sm md:text-base">
                                            To be the global leader in digital solutions, recognized
                                            for our innovation, quality, and commitment to our
                                            clients' success.
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </MotionTransition>
                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6">
                                    <Reveal>
                                        <h3 className="text-xl md:text-3xl font-semibold">Values</h3>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-sm md:text-base">
                                            At ProEdge, we act with honesty and ethics, fostering
                                            creativity and constant improvement. We strive for the
                                            highest quality and exceed our clients' expectations. We
                                            value collaboration and build long-term, trust-based
                                            relationships, guided by our commitment to tangible
                                            results. These values are the essence of ProEdge.
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </MotionTransition>
                    </div>
                </div>
            </div>
        </div>
    );
}
