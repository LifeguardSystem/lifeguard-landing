
'use client'

export default function OpenAi() {


    return (
        <div className="container mx-auto py-10 relative">
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-1 relative backdrop-blur-sm bg-white/30 w-full border rounded-2xl xl:text-lg border-white/40 p-5 flex flex-col gap-4">
                    <div className="col-span-1 relative  bg-white/60 border rounded-lg rounded-ee-none xl:text-lg  max-w-sm self-end">
                        <p className="text-xs p-2 text-black">
                            Are any pods not running?
                        </p>
                    </div>
                    <div className="col-span-1 relative backdrop-blur-sm bg-blue-500 border rounded-lg rounded-es-none xl:text-lg border-blue-100 max-w-sm">
                        <p className="text-xs p-2">
                            There are 1 pod(s) not running:
                            <br />
                            1. gallery-7474d49d68-x120n:
                            <br />
                            The root cause of this error is that the file /file/not/exists.log does not exist. The tail command is trying to read the file, butit
                            . cannot find it because it does not exist.
                        </p>
                    </div>
                </div>
                <div className="col-span-2">
                    <h5 className="text-black/90 font-semibold text-xl">Open AI</h5>
                    <p className="text-sm text-black/60 mt-2">We use the OpenAI API to generate an explanation of the root cause of a given trace.</p>
                    <p className="text-sm text-black/60 mt-2">A complete example can be found in this validation. In this example the function pods_validation investigates de problem in the events of pods or in the pods logs and put problem in the details of validation_response. The action in the lifeguard-openai plugins use the tracebacks to generate the explanation.</p>
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
        </div >
    )
}