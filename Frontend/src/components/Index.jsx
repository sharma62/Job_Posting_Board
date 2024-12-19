import Nav from "./module/Navigation";
import SignUp from "./module/SignUp";

const Signup = () => {
  return (
    <>
      <Nav />
      <div className="md:container md:m-auto grid p-1 sm:grid-cols-1 md:grid-cols-2  ">
        <div className="align-baseline m-auto ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a
            consequatur nisi aut eum similique dolore sed commodi quidem!
            Numquam, ad enim.
          </p>
        </div>
        <div className="">
          
          <SignUp />
         </div>
      </div>
    </>
  );
};

export default Signup;
