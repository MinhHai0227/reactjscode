import { useDispatch, useSelector } from "react-redux";
import ComicList from "../components/ComicList";
import { useEffect } from "react";
import { fetchAllComic } from "../redux/slices/comicSlice";


function Home(){

    const disPatch = useDispatch();
    const listComic = useSelector(state => state.comic.data);

    useEffect(() => {      
        disPatch(fetchAllComic())       
    },[disPatch])


    return(
        <div className="max-w-7xl mx-auto">
            <h2 className="max-w-7xl mt-7 mx-auto px-4 py-3 text-red-600 text-2xl font-bold italic font-serif tracking-wide">
      * Truyện Hay
    </h2>
            <ComicList comic={listComic.data} />
        </div>
    )
}

export default Home;