import content from "../../common/content.json";

export default function Homepage() {
    return (
        <div>
            <div class="flex">
                <div class="bg-zinc-800 w-screen h-screen bg-cover">
                    <header class="text-white">
                        {content.Introduction}
                    </header>
                </div>
            </div>
        </div>
    )
}