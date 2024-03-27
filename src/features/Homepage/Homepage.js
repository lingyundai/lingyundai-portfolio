import content from "../../common/content.json";

export default function Homepage() {
    return (
        <div>
            <div class="flex justify-center items-center bg-zinc-800 
                    w-screen min-w-fit h-screen bg-cover">
                    <header class="text-white font-interLight text-lg px-4 text-wrap">
                        {content.Introduction.map((line, i) => (
                            <div key={i}>
                                {line}
                            </div>
                        ))}
                    </header>
            </div>
        </div>
    )
}