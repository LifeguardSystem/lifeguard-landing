export default function Badge({ text }: TBadge) {
    return (
        <span className="inline-flex items-center rounded-full bg-gray-10 px-4 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-600/10">
            {text}
        </span>
    )
}

type TBadge = {
    text: string
}

