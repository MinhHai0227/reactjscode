import { useEffect, useState } from "react";
import ComicCart from "./ComicCart";

function ComicList({comic}){
    
    const[comics, setComics] = useState([]);
    
    useEffect(() => {
        if(comic && comic.length > 0){
            setComics(comic);
        }
    },[comic])

    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5 p-4">
            {comics && comics.length && comics.map((cm,index) => (
            <ComicCart key={index} item={cm} />
            ))}
     </div>
    );
}
export default ComicList