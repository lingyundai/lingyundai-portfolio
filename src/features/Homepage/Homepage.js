import content from "../../common/content.json"

export default function Homepage() {

    return (
        <div>
            <div class="flex items-center bg-zinc-800
                    w-screen min-w-fit h-screen bg-cover flex-wrap px-5">
                    <header class="text-slate-100 font-nunitoRegular text-2xl">
                        {content.Introduction1}
                        <h1 class="text-slate-100 font-nunitoLight text-lg">
                        {content.Introduction2.map((line, i) => (
                                <div key={i}>
                                    {line}
                                </div>
                            ))}
                        </h1>
                    </header>
            </div>
        </div>
    )
}