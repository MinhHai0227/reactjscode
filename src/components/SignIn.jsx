import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-[calc(100vh-168px)] lg:min-h-[calc(100vh-124px)] justify-center items-center px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-center text-2xl font-bold mb-6">Đăng Nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <input 
              type="text"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="border rounded-md p-3 w-full "
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          
          <div className='mb-4'>
            <input 
              type="password" 
              id='password'
              {...register("password", { required: "Password is required" })}
              placeholder="Mật khẩu" 
              className="border rounded-md p-3 w-full "
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-amber-500 text-white p-3 rounded-md hover:bg-amber-600 transition"
          >
            Đăng Nhập
          </button>
        </form>
        <span className='flex justify-center p-1 mt-2 text-gray-400'><p>Bạn chưa có tài khoản ?</p> <Link className='hover:text-black duration-200 ml-1' to='/regiter'>Đăng kí</Link></span>
        <div className='flex justify-between gap-3 mt-6'>
          <button className='flex items-center bg-amber-50 shadow-sm p-1 w-full rounded-md hover:bg-amber-100'>
            <i className="fa-brands fa-square-facebook text-4xl text-sky-600"></i>
            <span className='ml-1'>Facebook Login</span>
          </button>
          <button className='flex items-center bg-amber-50 shadow-sm p-1 w-full rounded-md hover:bg-amber-100'>
          <i className="fa-brands fa-google text-4xl text-sky-600"></i>
            <span className='ml-1'>Google Login</span>
          </button>
        </div>
      </div>
    </div>
  );
}
