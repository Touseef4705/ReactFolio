import "../App.css"
import "../Css Component/tools.css"

function Tools() {
    return (
        <div className="tools">
            <h1 className="dream_font text-5xl mt-5 ml-10 underline text-center"><span className="text-green-500 underline">Tools</span> I Use</h1>
            <div className="tools_box">
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/tools/windows.png" className="h-16 w-16" alt="" />
                    <b>VS Code</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/tools/social.png" className="h-16 w-16" alt="" />
                    <b>Git</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/tools/github.png" className="h-16 w-16" alt="" />
                    <b>GitHub</b>
                </div>
                <div className="h-32 w-40 bg-gray-100 text-black flex flex-col justify-center items-center rounded-md">
                    <img src="/tools/bleach.png" className="h-16 w-16" alt="" />
                    <b>Vercel</b>
                </div>
            </div>
        </div>
    )
}

export default Tools;