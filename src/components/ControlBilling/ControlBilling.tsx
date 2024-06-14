"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"

export function ControlBilling() {
    return (
        <div className="p-4 py-20 md:py-40">
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-6 md:p-8">
                    <Image src="/assets/control-business.png" alt="Control Business" width="580" height={411} className="w-full h-auto" />
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            Lorem, ipsum dolor. <br />
                            Lorem, ipsum
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia porro corporis eligendi deserunt dolores vero? Corrupti nisi eveniet incidunt dignissimos amet voluptate, consectetur numquam? Asperiores perspiciatis voluptatem accusamus est.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
