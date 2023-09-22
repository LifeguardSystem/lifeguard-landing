import Image from "next/image";
import Badge from "../organisms/badge/badge";

async function getLastTag() {
    const res = await fetch('https://api.github.com/repos/LifeguardSystem/lifeguard/tags')

    if (!res.ok) {
        throw new Error('Failed to fetch last tag')
    }

    return res.json()
}

export default async function Header() {
    const data = await getLastTag()

    const lastTag = data[0].name ?? 'v0.0.0'

    return (
        <nav className="h-16 flex bg-white border-b-[1px] border-gray-200 backdrop-blur-sm">
            <div className="container flex mx-auto justify-start text-black text-sm">
                <ul className="flex gap-10 items-center  w-full">
                    <li>
                        <Image src="/logo.svg" alt="logo" width={120} height={50} />
                    </li>
                    <li>
                        <a href="https://github.com/LifeguardSystem/lifeguard/blob/main/README.md" target="_blank">Documentation</a>
                    </li>
                    <li>
                        <a href="https://github.com/LifeguardSystem" target="_blank">Examples</a>
                    </li>
                    <li className="flex-1">
                        <a href="https://github.com/LifeguardSystem" target="_blank">Github</a>
                    </li>
                    <li>
                        <Badge text={lastTag} />
                    </li>
                </ul>
            </div>
        </nav >
    );
}
