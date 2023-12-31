import Image from "next/image";

async function getCurrentYear() {
    const year = new Date().getFullYear();

    return year;
}

export default async function Footer() {
    const year = await getCurrentYear();

    return (
        <footer className="bg-white mt-5">
            <div
                className="mx-auto max-w-screen-xl space-y-4 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8"
            >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Image src="/logo.svg" alt="logo" width={120} height={50} />


                    <ul className="mt-2 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="https://github.com/LifeguardSystem"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">GitHub</span>

                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
                >
                    <div>
                        <p className="font-medium text-gray-900">Product</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="https://github.com/LifeguardSystem/lifeguard/blob/main/README.md" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/LifeguardSystem" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    Examples
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/LifeguardSystem" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <p className="text-sm text-center text-gray-500">
                    &copy; {year}. Life Guard. All rights reserved.
                </p>
            </div>
        </footer>
    )
}