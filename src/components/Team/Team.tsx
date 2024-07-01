"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Team() {
    return (
        <div className="relative p-8 md:pt-20" id="testimonios">
            <BackgroundRadialLeft />
            <div className="grid max-w-6xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 font-montserrat">
                        Meet our team.
                    </h2>
                </Reveal>
            </div>

            <Slide />
        </div>
    )
}
