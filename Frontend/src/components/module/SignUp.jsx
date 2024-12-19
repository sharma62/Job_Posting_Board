import Input from "./Input";


export default function SignUp() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>
          <p className="text-center pt-5">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">            
            <Input placeholder="name" type="name" name="name" id="name" class_icon="icon icon-user" />
            <Input placeholder="Phone no" type="number" name="phone" id="phone" class_icon="icon icon-phone" />
            <Input placeholder="Company Name" type="text" name="company" id="company" class_icon="icon icon-user" />
            <Input placeholder="Company Email" type="email" name="company-mail" id="company" class_icon="icon icon-team" />

            <p className="mt-10 text-center text-sm/6 text-gray-500 capitalize ">
              by clicking on proceed you will accept our
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500 px-1"
              >
                Terms 
              </a>
              &
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500 px-1"
              >
                Conditions
              </a>
            </p>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Proceed
              </button>
             <div className="text-end p-2"> Already Have an Account ? <a href="" className="text-blue-500">Sign In</a></div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
