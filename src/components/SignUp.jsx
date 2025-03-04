import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex  min-h-[calc(100vh-168px)] lg:min-h-[calc(100vh-124px)] justify-center items-center px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-center text-2xl font-bold mb-6">Đăng Kí</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
            <input 
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="border rounded-md p-3 w-full "
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

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
            Đăng Kí
          </button>
        </form>
        <span className='flex justify-center p-1 mt-2 text-gray-400'><p>Bạn đã có tài khoản ?</p> <Link className='hover:text-black duration-200 ml-1' to='/login'>Đăng nhập</Link></span>
        
      </div>
    </div>
  );
}
export default SignUp;
