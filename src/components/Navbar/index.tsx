import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const navs = [{ name: "推荐" }, { name: "专栏" }, { name: "教程" }, { name: "课程" }];

  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="flex items-center max-w-screen-xl mx-auto h-[3.75rem]">
        <div className="w-[7.5rem] text-2xl	text-center">logo</div>
        <div className="flex-1 mx-48">
          <nav className="flex items-center justify-between">
            <ul className="flex space-x-8 ml-4">
              {navs.map((nav) => (
                <li key={nav.name}>{nav.name}</li>
              ))}
            </ul>
            <div className="flex">
              <span className="relative text-slate-500">
                <span className="absolute z-10 top-1/2 -translate-y-2/4 left-3.5">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </span>
                <input
                  className="w-56 bg-[#f2f6f9] pl-10 pr-4 py-1 rounded-md outline-cyan-500"
                  placeholder="探索我的博客"
                />
              </span>
            </div>
          </nav>
        </div>
        <div className="flex justify text-slate-900 space-x-2 ml-4">
          <a href="">登录</a>
          <span className="border-l border-slate-900/15 my-1"></span>
          <a href="">注册</a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
