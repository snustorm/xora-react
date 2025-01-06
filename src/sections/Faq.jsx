import React from 'react'
import { Element } from 'react-scroll'
import { faq } from '../constants'
import FaqItem from '../componenets/FaqItem'

const Faq = () => {

    const halflength = Math.floor(faq.length / 2);

  return (
    <section>
        <Element name="faq" className="relative">
            <div className="container relative z-2 py-28">
                <div>
                    <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">Curiosity didn't kill the cat, it gave it answers.</h3>
                    <p className="body-1 max-lg:max-w-sm">You'v got questions, we've got the answer.</p>
                </div>

                <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0
                    -z-1 bg-s2"/>

                <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1 mt-20">
                    <div className="container flex gap-10 max-lg:block">
                        <div className="rounded-half absolute -top-10 left-[calc(50%-40px)]
                            z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
                            <img
                                src="/images/faq-logo.svg"
                                alt = "logo"
                                className="size-1/2"
                            />
                        </div>

                        <div className="relative flex-1 pt-24">
                                {faq.slice(0, halflength).map((item, index) => (
                                    <FaqItem key={faq.id} item={item} index={index}></FaqItem>
                                ))}
                        </div>
                        <div className="relative flex-1 lg:pt-24">
                                {faq.slice(halflength).map((item, index) => (
                                    <FaqItem key={faq.id} item={item} index={halflength + index}></FaqItem>
                                ))}
                        </div>
                    </div>
                    <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5
                        bg-s2 max-lg:hidden" />
                    </div>
            </div>
        </Element>
    </section>
  )
}

export default Faq