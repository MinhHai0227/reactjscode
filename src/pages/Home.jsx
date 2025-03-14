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
            <ComicList comic={listComic.data} />
        </div>
    )
}

export default Home;