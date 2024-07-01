import Image from "next/image";
import { Reveal } from "../Reveal";
import { dataFooter, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";
import { getBasePath } from "@/utils/utils";

export function Footer() {
    return (
        <footer className="w-full md:py-10 text-white mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="md:w-1/5 mb-4 md:mb-0 md:mr-6">
                        <Image src={`${getBasePath()}/assets/PE_logo_white_1_.svg`} width={200} height={40} alt="Logo Bank" />
                    </div>
                    <div className="flex flex-col md:flex-row md:w-4/5 justify-around items-center md:gap-24">
                        {dataFooter.map(({ id, name, idLink }) => (
                            <div key={id} className="text-gray-300 text-base md:text-lg lg:text-xl mb-4 md:mb-0">
                                <a href={idLink}>
                                    {name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-[#3F3E45] border-[1px] my-7" />

                <div className="items-center justify-between md:flex">
                    <div className="my-3 text-xs md:text-lg">
                        <Reveal>
                            ProEdge a space to create. All Rights Reserved.
                        </Reveal>
                    </div>
                    <div className="flex gap-5 items-center">
                        {footerSocialNetworks.map(({ id, icon, link }) => (
                            <Link key={id} href={link} className="text-2xl">
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
