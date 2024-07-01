// Importa los componentes necesarios y estilos
import Image from "next/image";
import { dataTestimonials } from "./Testimonials.data";
import clsx from "clsx";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"; // Importa BackgroundRadialLeft aquí
import { BackgroundRadialRight } from "../BackgroundRadialRight";

// Definición de TestimonialType
interface TestimonialType {
    avatarImg: string;
    name: string;
    heading: string;
    description: string;
    bgColor: string;
    textColor: string;
    className?: string;
}

export default function Testimonials() {
    return (
        <div className="relative px-6 py-20 md:py-40">
            <BackgroundRadialLeft />
            <BackgroundRadialRight />
            <div className="flex flex-col items-center justify-center">
                <p className="text-lg text-center font-montserrat">Testimonials</p>
                <h1 className="text-xl md:text-4xl font-semibold text-center mb-10 font-montserrat">Reach your goals just like them</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] relative z-10">
                    {dataTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                            className={testimonial.className}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TestimonialCard(props: TestimonialType) {
    return (
        <div
            style={{ backgroundColor: props.bgColor, color: props.textColor }}
            className={clsx(
                "p-6 rounded-lg h-auto flex flex-col gap-4 max-w-[400px] md:max-w-none",
                props.className
            )}
        >
            {/* Avatar and name */}
            <section className="flex items-center gap-4">
                <div className="relative w-10 h-10 md:w-20 md:h-20">
                    <Image
                        src={props.avatarImg}
                        alt="profile-img"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <div className="text-sm font-semibold">{props.name}</div>
                    <p className="text-[10px] opacity-50">Verified Graduate</p>
                </div>
            </section>

            <h3 className="font-semibold text-base md:text-lg">{props.heading}</h3>
            <p className="text-xs md:text-sm opacity-70 leading-relaxed">
                “{props.description}”
            </p>
        </div>
    );
}