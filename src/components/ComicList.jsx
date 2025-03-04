import ComicCart from "./ComicCart";

function ComicList(){
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5 p-4">
            <ComicCart/>
            <ComicCart/>
            <ComicCart/>
            <ComicCart/>
            <ComicCart/>
            <ComicCart/>
           
        </div>
    );
}
export default ComicList