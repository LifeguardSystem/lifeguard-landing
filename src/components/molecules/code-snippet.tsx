export default function CodeSnippet({ code }: TCodeSnippet) {

    const lines = code.split('\n')

    return (
        <div className="col-span-1 relative backdrop-blur-sm bg-white/30 w-full border rounded-2xl xl:text-lg border-white/40">
            <pre className="text-gray-800 text-sm flex items-baseline  min-h-full h-full  leading-8">
                <div className="px-5 text-gray-400 hidden md:block">
                    {lines.map((_, index) => {
                        return (
                            <><code className="block">{index}</code></>
                        )
                    })}
                </div>
                <div className="border-l border-white/80 h-full pl-5 py-5">
                    {lines.map((line) => {
                        return line === "" ?
                            <code className="block">{" "}</code> :
                            <code className="block">{line}</code>
                    })}
                </div>
            </pre>
        </div>
    )
}

type TCodeSnippet = {
    code: string
}