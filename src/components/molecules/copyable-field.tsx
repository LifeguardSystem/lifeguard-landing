export default function CopyableField({ content }: CopyableFieldProps) {
    return (
        <div className="hidden md:inline-flex items-center backdrop-blur-sm rounded-lg bg-gray-10 pl-5 pr-2 py-2 text-sm font-medium font-mono text-gray-500 ring-1 ring-inset ring-white/70 bg-white/20 box-border">
            {content}
            <span className="text-xs bg-white/40 px-2 py-2 ml-4 backdrop-blur-sm rounded-md cursor-pointer box-border" onClick={() => navigator.clipboard.writeText(content)}>
                copy
            </span>
        </div>
    )
}

type CopyableFieldProps = {
    content: string
}