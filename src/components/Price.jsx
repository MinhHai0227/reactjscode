function Price({price = 0,coin = 0, onSelect}){
    return(
        <div className=" flex flex-col text-center pt-5 gap-2 rounded-xl bg-amber-50 shadow">
            <span className="text-xl font-semibold p-3">{price.toLocaleString("vi-VN")} VND/{coin}<i className="fa-solid fa-coins mr-1 text-amber-500"></i></span>
            <button onClick={() => onSelect(price)} className="cursor-pointer bg-amber-500 p-2 mt-4 text-white hover:bg-amber-400 duration-200">Mua Ngay</button>
        </div>
    )
}
export default Price