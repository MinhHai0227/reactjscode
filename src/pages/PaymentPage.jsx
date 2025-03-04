import { useState } from "react";
import Price from "../components/Price";

function PaymentLayout(){
    const[SelectPrice, setSelectPrice] = useState("");

    const handSelectPrice = (price) => {
        setSelectPrice(price.toLocaleString("vi-VN"));
    }

    return(
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-168px)] lg:min-h-[calc(100vh-124px)]">
                <p className="text-center p-3 text-xl font-semibold text-amber-500">Nạp xu</p>
                <ul className="p-3">
                    <li className="font-semibold">Lưu ý: </li>
                    <li>Xu <i className="fa-solid fa-coins mr-1 text-amber-500"></i> là đơn vị tiền tệ ảo tại TruyenDocViet </li>
                    <li>Xu không thể trao đổi và trao đổi ngược lại thành VND</li>
                </ul>
                <div className="block  lg:flex gap-5 mt-6">
                    <div className="lg:w-6/10">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-2">
                        <Price price={10000} coin={100} onSelect={handSelectPrice}/>
                        <Price price={20000} coin={210} onSelect={handSelectPrice}/>
                        <Price price={50000} coin={530} onSelect={handSelectPrice}/>
                        <Price price={100000} coin={1100} onSelect={handSelectPrice}/>
                        <Price price={200000} coin={2200} onSelect={handSelectPrice}/>
                        <Price price={500000} coin={5600} onSelect={handSelectPrice}/>
                    </div>
                        
                    </div>
                    <div className="lg:w-4/10 p-2">
                    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
                        <span className="text-2xl font-semibold text-gray-900 block mb-4">Thanh Toán</span>
                            <form action="" className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Giá</label>
                                    <input 
                                        className="w-full border border-gray-300 rounded-md p-2 " 
                                        type="text" 
                                        value={SelectPrice}
                                        disabled
                                    />
                                </div>
                                {/* <div>
                                    <label className="block text-gray-700 font-medium mb-1">Mã giảm giá</label>
                                    <input 
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:border-amber-400" 
                                        type="text" 
                                        placeholder="Nhập giá giảm"
                                    />
                                </div> */}
                                <div className="text-lg font-semibold text-gray-800">
                                    Tổng tiền: <span className="text-amber-500">{SelectPrice || 0} VND</span>
                                </div>
                                <button 
                                    className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-200"
                                >
                                    Xác nhận thanh toán
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default PaymentLayout;