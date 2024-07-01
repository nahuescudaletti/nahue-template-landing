"use client"
import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataPaymentMethods } from './PaymentMethods.data'
import Image from 'next/image'
import { CtaDark } from '../CtaDark'
import { getBasePath } from '@/utils/utils'

export function PaymentsMethods() {
    return (
        <div className="relative py-20 md:py-40" id="newsletter">
            <CtaDark />
        </div>
    )
}
