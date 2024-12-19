import cuvLogo from "../../assets/logo.74bda650.svg";
export default function Navigation() {
  return (
    <>
      <nav className="flex p-5 shadow-md justify-between">
        <div class="flex-none w-64 ...">
          <img src={cuvLogo} alt="" />
         </div>
        <div class="w-14 text-right text-sm">
          <a href="">Contact</a>
        </div>
      </nav>
    </>
  );
}
