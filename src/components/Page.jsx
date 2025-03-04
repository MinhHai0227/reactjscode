import { Link } from "react-router-dom";

function Page(){
    return(
        
            <ul className="flex justify-center items-center gap-2 p-1">
            <li>
                <Link className="shadow-xl bg-gray-200 text-gray-700 hover:text-white hover:bg-amber-500 duration-150 flex size-11 rounded-3xl justify-center items-center text-xl">&laquo;</Link>
            </li>
            <li>
                <Link className="shadow-xl bg-gray-200 text-gray-700 hover:text-white hover:bg-amber-500 duration-150 flex size-11 rounded-3xl justify-center items-center text-xl">1</Link>
            </li>
            <li>
                <Link className="shadow-xl bg-gray-200 text-gray-700 hover:text-white hover:bg-amber-500 duration-150 flex size-11 rounded-3xl justify-center items-center text-xl">2</Link>
            </li>
            <li>
                <Link className="shadow-xl bg-gray-200 text-gray-700 hover:text-white hover:bg-amber-500 duration-150 flex size-11 rounded-3xl justify-center items-center text-xl">3</Link>
            </li>
           
            <li>
                <Link className="shadow-2xl bg-gray-200 text-gray-700 hover:text-white hover:bg-amber-500 duration-150 flex size-11 rounded-3xl justify-center items-center text-xl"> &raquo;</Link>
            </li>   
        </ul>
       
    )
}
export default Page;