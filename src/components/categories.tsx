const Categories = (props: any) => {
  const { data, level = 0 } = props;
  const className = level > 0 ? "ml-4" : "";
  return (
    <ul className={className}>
      {data.map((item: any, index: number) => {
        const { children } = item;
        return (
          <li className="my-1.5" key={index}>
            <a
              className="relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-gray-600 hover:text-cyan-500"
              href=""
            >
              {item.name}
            </a>
            {children?.length > 0 && <Categories level={level + 1} data={children} />}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
