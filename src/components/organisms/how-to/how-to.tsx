
'use client'

import CopyableField from "@/components/molecules/copyable-field"

export default function HowTo() {
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
        <div className="container mx-auto py-10 pt-20 relative">
            <div className="grid grid-cols-2 gap-10">
                <div className="col-span-1">
                    <h5 className="text-black/90 font-semibold text-xl">Starting a project</h5>
                    <p className="text-sm text-black/60 my-4">To start a project, you need to install the Lifeguard package using pip:</p>
                    <CopyableField content="pip install lifeguard" />
                    <p className="text-sm text-black/60 my-4">Create a new directory and create a main settings file used for Lifeguard:</p>
                    <CopyableField content="mkdir myproject && cd myproject" />
                    <p className="text-sm text-black/60 my-4">The -g parameter will create a new file called lifeguard_settings.py with the initial structure. The example in the right side is a example.</p>
                    <CopyableField content="lifeguard init -g" />
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
                className="absolute -bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl right-0 "
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
        </div >
    )
}