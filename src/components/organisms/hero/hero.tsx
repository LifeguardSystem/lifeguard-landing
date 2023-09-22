'use client'

import CodeSnippet from "@/components/molecules/code-snippet"
import CopyableField from "@/components/molecules/copyable-field"
import Badge from "@/components/atoms/badge"
import { authExample } from "@/examples"


export default function Hero() {

    return (
        <section className="container mx-auto relative flex items-center">
            <div className="grid grid-cols-2 py-24 gap-20">
                <div className="col-span-1 flex flex-col items-start gap-8">
                    <Badge text="We announce a new version! 🎉" />
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-900 ">An Opined Monitoring And Self Healing System</h1>
                    <h2 className="text-md md:text-lg text-gray-900">Quickly create scripts to perform validations to monitor systems, applications or infrastructure. Easily take action when behavior changes or when a problem is detected!</h2>
                    <div className="flex gap-4 justify-center">
                        <CopyableField content="pip install lifeguard" />
                    </div>
                </div>
                <CodeSnippet code={authExample} />
            </div>

            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8080] to-[#fcfa89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -bottom-20 -z-10 transform-gpu overflow-hidden blur-3xl right-0 "
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8080] to-[#fcfa89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </section>
    )
}

