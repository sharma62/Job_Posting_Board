import './style.css'

export default function Input(props) {
  return (
    <>
      <div className="">
        <input 
          type={props.type}
          name={props.name}
          id={props.id} 
          autocomplete={props.name}
          required
          className={`block ${props.class_icon} w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-5 -outline-offset-10 outline-gray-300 placeholder:text-gray-400 focus:outline-20 focus:-outline-offset-20 focus:outline-indigo-600 sm:text-sm/6`}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}
