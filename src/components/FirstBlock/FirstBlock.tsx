"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Lorem as
                            <span className="block degradedBlue bg-Orange">
                                Lorem, ipsum.
                            </span>
                            Lorem surt
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi reprehenderit doloremque iure veritatis optio, id maxime dignissimos itaque necessitatibus, minima ut nisi iusto atque ducimus aliquid libero perferendis
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-OrangeRadial">Empieza ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/tazas.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
