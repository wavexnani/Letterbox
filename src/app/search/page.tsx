export default function SearchPage() {
    return(
        <div>
            <div className="relative mx-44 to-5% mt-10 w-3/4 h-10 rounded-2xl bg-white">
                <input type="text" className="absolute top-0 w-full  h-10 rounded-2xl text-black bg-white"/>
                <button className="absolute right-0 w-fit rounded-2xl font-bold h-10 bg-amber-300 pt-1 px-6 pb-1">Search</button>
            </div> 
        </div>
    );
}
