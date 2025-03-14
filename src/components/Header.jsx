import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import logo1 from '../assets/talatade.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { fetchAllCate } from '../redux/slices/categorySlice';


const Header = () => {
  const [isHideShow, setIsHideShow] = useState({
    category1 : false,
    category2 : false,
    category3 : false,
  })

  const toggleHideShow = (category) => {
    setIsHideShow((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const [isVisible, setIsVisible] = useState({
    showhide1 : false,
    showhide2 : false,
  });

  const toggleVisible = (showhie) => {
    setIsVisible({
      showhide1: showhie === "showhide1" ? !isVisible.showhide1 : false,
      showhide2: showhie === "showhide2" ? !isVisible.showhide2 : false,
    });
  }

  const dispatch = useDispatch();

  const isLogin = useSelector(state => state.auth.isLogin);

  const category = useSelector(state => state.category.listCata);

  useEffect(() => {
    dispatch(fetchAllCate());
  },[dispatch])
  

  return (
    <header>
      <div className="tren">
        <div className=" max-w-7xl mx-auto h-full flex justify-between items-center p-3">
          <div className="logo flex items-center gap-3">
            <Link to="/" className='flex items-center gap-1'>
              <img className='size-9' src={logo} alt="Logo Truyendocviet" />
              <span className=' uppercase hidden lg:block'>truyendocviet</span>
            </Link>
            <button className='border-1 border-amber-500 rounded-full size-11 flex justify-center text-amber-500 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
          </button>
          </div>

          <div className="hidden lg:block top_search lg:w-md relative">
            <input className='border-1 border-amber-200 rounded-full h-11 w-full pl-5 pr-11' type="text" placeholder='Bạn muốn tìm truyện gì ?'/>
            <button className='absolute right-3 top-2.5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>

          <div className="login">

          {isLogin ? 
          (
            <ul className='flex gap-2  items-center justify-between'>
              <li onClick={() => toggleVisible('showhide1')} className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-gray-600">
                <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                </svg>
                {isVisible.showhide1 && (
                  <div className='absolute right-0 top-10 max-h-64 overflow-y-auto bg-gray-200 z-10 w-80 p-3 rounded-b-xl'>
                    <ul className='space-y-2'>
                      <li className='shadow px-2 py-1 rounded-sm'>                     
                        <p className='font-semibold text-gray-800'>QQ vừa trả lời bình luận của bạn</p>
                        <span className='text-xs text-gray-500'>
                            <i class="fa-solid fa-clock"></i>
                            16:46 27/02/2025
                        </span>                     
                      </li>    
                    </ul>
                  </div>
                )
                }
              </li>
              <li onClick={() => toggleVisible('showhide2')} className='relative'>
                <img className='object-cover bg-transparent size-11 rounded-3xl' src={logo1} alt="" />
                {isVisible.showhide2 && (
                    <div className='absolute right-0 top-14 z-10 bg-gray-200 p-3 rounded-sm w-60'>
                      <ul>
                        <li className='hover:shadow p-2 rounded-sm'>
                          <Link to='/info' className='hover:text-amber-500'>Thông Tin</Link>
                        </li>
                        <li className='hover:shadow p-2 rounded-sm'>
                          <Link to='/payment' className='hover:text-amber-500'>Nạp Xu</Link>
                        </li>
                        <li className='hover:shadow p-2 rounded-sm'>
                          <button onClick={() => dispatch(logout())}  className='hover:text-amber-500 cursor-pointer'>Đăng Xuất</button>
                        </li>
                      </ul>
                    </div>
                )
                }
              </li>
            </ul>
          ):(
            <ul className='flex gap-2 items-center text-white'>
              <li><Link to="/register" className='uppercase bg-amber-500  rounded-md  shadow px-2.5 py-1.5'>đăng kí</Link></li>
              <li><Link to="/login" className='uppercase bg-amber-500  rounded-md shadow px-2.5 py-1.5 '>đăng nhập</Link></li>
            </ul>         
          )
          }
          </div>

          
        </div>

        <div className="moble_search max-w-7xl mx-auto px-3">
          <div className="lg:hidden  relative">
              <input className='border-1 border-amber-200 rounded-full h-11 w-full pl-5 pr-11' type="text" placeholder='Bạn muốn tìm truyện gì ?'/>
              <button className='absolute right-3 top-2.5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
          </div>
        </div>
      </div>

      <div className="duoi bg-amber-500 text-white relative">
        <div className="max-w-7xl mx-auto flex items-center gap-4 mt-2 text-base">
          <span className='hover:bg-amber-400 p-3'><Link to="/" className='py-3'>Trang chủ</Link> </span>
          <ul className='gap-4 lg:flex hidden'>
            <li className='hover:bg-amber-400 p-3 flex items-center cursor-pointer group'>
              <span>Thể Loại</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-0.5 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              <div className='hidden group-hover:block z-10 absolute bg-gray-100 w-full right-0 top-12 shadow-2xs cursor-default'>
                <div className='max-w-7xl mx-auto text-black'>
                  <div className='my-5 grid grid-cols-8 gap-4 px-3 '>  
                    {
                      category.length > 0 && category.map((cate) => (
                        <p key={cate.category_id} ><Link className='hover:text-amber-500 transition-colors duration-200' to={`/the-loai/${cate.category_id}`}> {cate.name} </Link></p>
                      ) )
                    }
                    
                  </div>
                </div>
              </div>
            </li>
            <li className='hover:bg-amber-400 p-3 flex items-center cursor-pointer group'>
              <span>Xếp Hạng</span>            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-0.5 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              <div className='hidden group-hover:block absolute bg-gray-100 w-full right-0 top-12 shadow-2xs cursor-default'>
                <div className='max-w-7xl mx-auto text-black'>
                  <div className='my-5 grid grid-cols-8 gap-4 px-3'>
                    <p ><a className='hover:text-amber-500 transition-colors duration-200' href="">Action</a></p>
                    <p><a href="">Action</a></p>
                    <p><a href="">Action</a></p>
                    <p><a href="">Action</a></p>
                    <p><a href="">Action</a></p>
                    <p><a href="">Action</a></p>
                    <p><a href="">Action</a></p>
                    <p><a href="">Action</a></p>
                  </div>
                </div>
              </div>
            </li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Con Gái</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Con Trai</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Lịch Sử</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Theo dõi</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Fanpage</a></li>
          </ul>
          <div onClick={() => toggleHideShow('category3')} className='ml-auto lg:hidden'>
            {isHideShow.category3 ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>            
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )  }
            
          </div>
        </div>
      </div>
      
      {isHideShow.category3 &&
      <div className="mobie lg:hidden bg-amber-500 text-white">
        <ul className='gap-4'>
            <li onClick={() => toggleHideShow('category1')} className='items-center cursor-pointer'>
              <div className='flex items-center hover:bg-amber-400 p-3 '>
                <span>Thể Loại</span>
                {isHideShow.category1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-0.5 size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-0.5 size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                )}
              </div>
              {isHideShow.category1 &&
              <div className='bg-gray-100 cursor-default text-black mt-1 p-3 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4'>
                
                {
                  category.length > 0 && category.map((cate) => (
                    <p key={cate.category_id}><Link className='hover:text-amber-500 transition-colors duration-200' to={`/the-loai/${cate.category_id}`}>{cate.name}</Link></p>
                  ))
                }
              </div>
              }
            </li>
            <li onClick={() => toggleHideShow('category2')} className='items-center cursor-pointer'>
              <div className='flex items-center hover:bg-amber-400 p-3 '>
                <span>Xếp hạng</span>
                {isHideShow.category2 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-0.5 size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-0.5 size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                )}
              </div>
              {isHideShow.category2 &&
              <div className='bg-gray-100 cursor-default text-black mt-1 p-3 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4'>
                <p ><a className='hover:text-amber-500 transition-colors duration-200' href="">Action</a></p>
                <p><a href="">Action</a></p>
                <p><a href="">Action</a></p>
                <p><a href="">Action</a></p>
                <p><a href="">Action</a></p>
                <p><a href="">Action</a></p>
                <p><a href="">Action</a></p>
                <p><a href="">Action</a></p>
                <p><a href="">Action</a></p>
                
              </div>
              }
            </li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Con Gái</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Con Trai</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Lịch Sử</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Theo dõi</a></li>
            <li className='hover:bg-amber-400 p-3'><a className='py-3' href="/">Fanpage</a></li>
        </ul>
      </div> 
      } 
      
    </header>
  );
};

export default Header;
