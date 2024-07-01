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
                                    lorem
                                </span>
                            </h1>
                        </Reveal>
                        <Reveal>
                            <p className="max-w-md mt-6 text-base md:text-xl font-light font-montserrat tracking-wide text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum eos rem magnam eius cumque alias atque doloremque. Beatae accusamus nostrum debitis nemo sequi, vitae fuga ducimus repellendus? Ipsum nesciunt sint accusamus dolor maiores natus odio! In dolorum quod odit.
                            </p>
                        </Reveal>
                    </div>
                    <div className="md:col-span-1 grid grid-cols-1 gap-8">
                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6">
                                    <Reveal>
                                        <h3 className="text-xl md:text-3xl font-semibold">lorem</h3>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-sm md:text-base">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, assumenda. Expedita debitis blanditiis ratione at cum architecto hic consectetur dolores.
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </MotionTransition>
                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6">
                                    <Reveal>
                                        <h3 className="text-xl md:text-3xl font-semibold">lorem</h3>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-sm md:text-base">
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus aliquam placeat labore magnam ab corporis ea molestiae laboriosam velit doloremque quae deleniti minima cupiditate, totam vitae impedit explicabo unde aspernatur quos harum accusantium! Nulla impedit iste et laborum enim.
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </MotionTransition>
                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6">
                                    <Reveal>
                                        <h3 className="text-xl md:text-3xl font-semibold">lorem</h3>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-sm md:text-base">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, molestiae recusandae reprehenderit, repudiandae quas cumque omnis illo quo hic soluta eius dolorum sapiente consectetur labore. Culpa, ab aspernatur repellendus atque sapiente veniam odit soluta, itaque impedit maxime esse iusto ad!
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
