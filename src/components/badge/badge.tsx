
export default function Badge(props: BadgeType) {
    return (<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {props.text}
    </span>)
}

type BadgeType = {
    text: string
}