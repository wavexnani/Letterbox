export default function SearchPage() {
    return(
        <div className="min-h-screen bg-black text-white">
            <div className="relative">
                <input type="text" className=" mx-44 mt-6 w-3/4 h-8 rounded-2xl bg-white"/>
                <button className="absolute w-fit bg-amber-300 pt-1 px-2 pb-1">Search</button>
            </div> 
        </div>
    );
}
