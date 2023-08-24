'use client'

import { useState } from "react"

export default function About() {
    const pluginCode = `import lifeguard_mongodb
    
PLUGINS = [
    lifeguard_mongodb,
    # other plugins
]

# You can execute code in the lifeguard startup process
def setup(_lifeguard_context):
    pass`

    const validationCode = `from lifeguard import NORMAL, PROBLEM, change_status
from lifeguard.actions.database import save_result_into_database
from lifeguard.http_client import get
from lifeguard.logger import lifeguard_logger as logger
from lifeguard.validations import ValidationResponse, validation

@validation(
    "check if pudim is alive",
    actions=[save_result_into_database],
    schedule={"every": {"minutes": 1}},
)

def pudim_is_alive():
    status = NORMAL
    result = requests.get("http://pudim.com.br")
    logger.info("pudim status code: %s", result.status_code)

    if result.status_code != 200:
        status = change_status(status, PROBLEM)

    return ValidationResponse(
        status,
        {status: result.status_code},
    )
    `

    const deployCode = `$ lifeguard -d

Name			        Description			            Value
----------------------	----------------------------	-------
LIFEGUARD_SERVER_PORT	Lifeguard server port number	5567
LIFEGUARD_DIRECTORY	    Location of validations 	    .
LIFEGUARD_LOG_LEVEL	    Sets the core log level		    INFO`

    const [code, setCode] = useState(pluginCode)




    const makeLines = (code: string) => {
        return code.split('\n')
    }

    return (
        <div>
            <div className="container mx-auto py-5 pb-20">
                <div className="grid grid-cols-2 gap-5 ">
                    <div className="col-span-1 relative backdrop-blur-sm bg-white/30 w-full border rounded-2xl xl:text-lg border-white/40">
                        <pre className="text-gray-800 text-sm flex items-baseline  min-h-full h-full  leading-8">
                            <div className="px-5 text-gray-400 hidden md:block">
                                {makeLines(code).map((line, index) => {
                                    return (
                                        <><code className="block">{index}</code></>
                                    )
                                })}
                            </div>
                            <div className="border-l border-white/80 h-full pl-5 py-5">
                                {makeLines(code).map((line) => {
                                    return line === "" ? <><code className="block">{" "}</code></> : <><code className="block">{line}</code></>

                                })}
                            </div>
                        </pre>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="backdrop-blur-sm bg-white/10 w-full border rounded-md xl:text-lg border-white/40 p-4 flex gap-4 items-center border-box col-span-1 cursor-pointer" onClick={() => setCode(pluginCode)}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#111827" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>
                            <div>
                                <h5 className="text-black/90 font-semibold text-md">Plugins Based</h5>
                                <p className="text-sm text-black/60">Like other frameworks, Lifeguard was built with mechanisms that facilitate the creation of plugins, separating what is essential from what is optional. Example: The core must know when or not to notify, but we don't need to load the MS Teams notification routines if we are going to use Google Chat.</p>
                            </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 w-full border rounded-md xl:text-lg border-white/40 p-4 flex gap-4 items-center border-box col-span-1 cursor-pointer" onClick={() => setCode(validationCode)}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#111827" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                </svg>

                            </div>
                            <div>
                                <h5 className="text-black/90 font-semibold text-md">Proactive Validations</h5>
                                <p className="text-sm text-black/60">Most monitoring systems work reactively, like the Grafana Alertmanager solution, that is, based on things (in many cases, errors) that have already happened that alerts are triggered. Lifeguard's focus is on making it easy to create proactive validations that can look for errors and send easily understandable alerts.</p>
                            </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/10 w-full border rounded-md xl:text-lg border-white/40 p-4 flex gap-4 items-center border-box col-span-1 cursor-pointer" onClick={() => setCode(deployCode)}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#111827" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>


                            </div>
                            <div>
                                <h5 className="text-black/90 font-semibold text-md">Deploy and Scale Easily</h5>
                                <p className="text-sm text-black/60">Lifeguard consists of two fundamental elements. A web server that provides some APIs where you can provide a GUI (the GUI also works based on plugins) and a queue, or queues, to perform validations. Both can run together or not and can scale independently as needed. Validations can be performed on specific instances of queues. This organization makes it much easier to scale resources depending on the type of use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )

}