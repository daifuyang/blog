import { EyeIcon, HandThumbUpIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

import Categories from "@/components/categories";

export default function Home() {

  const categories = [
    {
      name: "css",
      children: [{ name: "tailwind" }]
    },
    {
      name: "react",
      children: [{ name: "umijs" }, { name: "nextjs" }]
    },
    {
      name: "node"
    },
    {
      name: "golang"
    },
    {
      name: "others"
    }
  ];

  return (
    <div className="flex">
      <div className="relative w-48">
        <div className="sticky top-20">
          <h3 className="py-1 pl-2 font-semibold text-slate-900">分类</h3>
          <Categories data={categories} />
        </div>
      </div>
      <div className="flex-1 mx-4 bg-white">
        <div className="relative">
          <ul className="flex items-center h-14 px-3 pl-8 space-x-6 text-base border-slate-200 border-b">
            <li className="hover:text-cyan-500 cursor-pointer">最新</li>
            <li className="hover:text-cyan-500 cursor-pointer">热门</li>
          </ul>
          {/* list */}
          <div className="relative px-5">
            {new Array(10).fill(1).map((_, key) => (
              <div key={key} className="py-4 border-b border-slate-100">
                <div className="flex items-center">
                  <div className="flex-1 flex flex-col">
                    <a className="text-base font-semibold text-slate-800 hover:text-cyan-500 hover:underline" href="">
                      C 语言函数完全指南：创建、调用、参数传递、返回值解析
                    </a>
                    <div className="mt-4 text-sm text-slate-700 leading-normal line-clamp-2">
                      C语言中的函数函数是一段代码块，只有在被调用时才会运行。您可以将数据（称为参数）传递给函数。函数用于执行某些操作，它们对于重用代码很重要：定义一次代码，并多次使用。预定义函数事实证明，您已经知道什么是函数了例如，main()是一个函数，用于执行代码，pri
                    </div>
                  </div>
                  {key % 2 == 0 && (
                    <div className="ml-6 w-[7.5rem] h-[5rem]">
                      <img
                        className="w-full h-full rounded-md object-cover"
                        src="https://img-hello-world.oss-cn-beijing.aliyuncs.com/imgs/2afb00b22db1a10a2712fb8a7f580135.png"
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <div className="flex mt-4 space-x-6">
                  <span className="flex items-center text-sm">
                    <EyeIcon className="h-4 w-4" />
                    <span className="ml-1">10</span>
                  </span>
                  <span className="flex items-center text-sm">
                    <HandThumbUpIcon className="h-4 w-4" />
                    <span className="ml-1">10</span>
                  </span>
                  <span className="flex items-center text-sm">
                    <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
                    <span className="ml-1">10</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-80">
        {/* 测试10条数据 */}
        {new Array(10).fill(0).map((_, index) => (
          <div key={index} className="bg-white px-5 py-3 mb-4">
            hello {index}
          </div>
        ))}
      </div>
    </div>
  );
}
