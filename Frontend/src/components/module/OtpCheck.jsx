
export default function Form() {
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
                  
            <div className="">
              <input
                placeholder="Email OTP"
                type="email"
                name="company-mail"
                id="company"
                autocomplete="company-mail"
                required
                className="block icon icon-mail w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-5 -outline-offset-5 outline-gray-300 placeholder:text-gray-400 focus:outline-20 focus:-outline-offset-20 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <div className="">
              <input
                placeholder="Mobile OTP"
                type="phone"
                name="phone"
                id="phone"
                autocomplete="current-phone"
                required
                className="block icon icon-phone w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-5 -outline-offset-5 outline-gray-300 placeholder:text-gray-400 focus:outline-20 focus:-outline-offset-20 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <p className="mt-10 text-center text-sm/6 text-gray-500 capitalize ">
              by clicking on proceed you will accept our
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Terms 
              </a>
              &
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Conditions
              </a>
            </p>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Proceed
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
