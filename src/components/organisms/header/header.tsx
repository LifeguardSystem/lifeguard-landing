import Image from "next/image";
import Badge from "../badge/badge";

export default function Header() {
    return (
        <nav className="h-16 flex bg-white border-b-[1px] border-gray-200 backdrop-blur-sm">
            <div className="container flex mx-auto justify-start text-black text-sm">
                <ul className="flex gap-10 items-center  w-full">
                    <li>
                        <Image src="/logo.svg" alt="logo" width={120} height={50} />
                    </li>
                    <li>
                        <a href="#">Documentation</a>
                    </li>
                    <li>
                        <a href="#">Examples</a>
                    </li>
                    <li className="flex-1">
                        <a href="#">Github</a>
                    </li>
                    <li>
                        <Badge text="v1.4.0" />
                    </li>
                </ul>
            </div>
        </nav >
    );
}
