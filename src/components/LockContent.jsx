import { Link } from 'react-router-dom';
import vip from '../assets/vip.svg'
import { useState } from 'react';

function LockContent({xu}){
    const [isHideShow, setIsHideShow] = useState({
        category1 : false,
        category2 : false,
    })
    
    const toggleHideShow = (category) => {
        setIsHideShow((prevState) => ({
          ...prevState,
          [category]: !prevState[category],
        }));
    };

    const totalxu = 100;

    return(
        <div className='flex flex-col items-center p-3 relative'>
            <img className='size-14' src={vip} alt="" />
            <p>Chương này là chương VIP, để xem nội dung bạn cần <span className='font-semibold text-orange-500'>5 xu</span></p>
            <div className='flex flex-col text-white my-10 space-y-3 '>
                <button onClick={() => toggleHideShow('category1')} className='bg-amber-500 px-5 rounded-sm py-2 cursor-pointer text-center'>
                    <i className="fa-solid fa-check mr-1"></i>
                    Mua Chap Này
                </button>
                <Link to='/payment' className='bg-amber-500 rounded-sm py-2 text-center'>
                    <i className="fa-solid fa-coins mr-1"></i>
                    Nạp Xu
                </Link>
                
            </div>
            <p>Truyện sẽ mở khóa vào <span className='font-semibold'>22:30 27/02/2015</span> </p>
            
            {isHideShow.category1 && (
                <div className='absolute bg-[rgba(0,0,0,0.7)] inset-0 flex items-center justify-center'>
                    <div className='bg-white shadow-xl text-center rounded-sm'>
                        { totalxu > xu ? (
                            <div className='p-3'>
                                <div className='p-3'>
                                    <span className='text-lg px-5 py-3 shadow'>Mua Chương Giá 5 <i className="fa-solid fa-coins mr-1 text-amber-500"></i></span>
                                    <p className='my-2 p-2'>Bạn chắc chắn</p>
                                </div>
                                <div className='flex'>
                                    <button onClick={() => toggleHideShow('category1')} className='bg-gray-200 w-full py-2 cursor-pointer hover:bg-gray-100'>Bỏ Qua</button>
                                    <button className='bg-gray-200 w-full py-2 cursor-pointer hover:bg-gray-100 text-amber-500'>OK</button>
                                </div>
                            </div>
                        ):
                        (
                            <div className="p-4 bg-red-100 rounded-md">
                                <p>Bạn không có đủ xu!</p>
                                <button onClick={() => toggleHideShow('category1')} className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md">Đóng</button>
                            </div>
                        )
                        }
                    </div>
                </div>
            )}
            
        </div>
    );
}
export default LockContent;