'use client'

import CopyableField from "@/components/molecules/copyable-field"




export default function Hero() {

    const code = `import lifeguard_mongodb

from lifeguard.settings import SettingsManager
from lifeguard.auth import BASIC_AUTH_METHOD

PLUGINS = [lifeguard_mongodb]

def setup(lifeguard_context):
    lifeguard_context.auth_method = BASIC_AUTH_METHOD
    lifeguard_context.users = [
            {
                "username": "user", 
                "password": "pass"
            }
    ]`

    const lines = code.split('\n')

    return (
        <section className="container mx-auto relative flex items-center">
            <div className="grid grid-cols-2 py-24 gap-20">
                <div className="col-span-1 flex flex-col items-start gap-8">
                    <span className="inline-flex items-center rounded-full bg-gray-10 px-4 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-600/10">
                        We announce version 1.4.1 🎉
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-900 ">An Opined Monitoring And Self Healing System
                    </h1>
                    <h2 className="text-md md:text-lg text-gray-900">Quickly create scripts to perform validations to monitor systems, applications or infrastructure. Easily take action when behavior changes or when a problem is detected!</h2>

                    <div className="flex gap-4 justify-center">
                        <CopyableField content="pip install lifeguard" />
                    </div>
                </div>

                <div className="col-span-1 relative backdrop-blur-sm bg-white/30 w-full border rounded-2xl xl:text-lg border-white/40">
                    <pre className="text-gray-800 text-sm flex items-baseline  min-h-full h-full  leading-8">
                        <div className="px-5 text-gray-400 hidden md:block">
                            {lines.map((line, index) => {
                                return (
                                    <><code className="block">{index}</code></>
                                )
                            })}
                        </div>
                        <div className="border-l border-white/80 h-full pl-5 py-5">
                            {lines.map((line) => {
                                return line === "" ? <><code className="block">{" "}</code></> : <><code className="block">{line}</code></>

                            })}
                        </div>
                    </pre>
                </div>

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

