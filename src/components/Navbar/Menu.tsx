const Menu = (props: any) => {
  const { data, level = 0 } = props;
  const className = level > 0 ? 'ml-4' : '';
  return (
    <ul className={className}>
      {data.map((item: any, index: number) => {
        const { children } = item;
        return (
          <li className="my-1.5" key={index}>
            <a
              className="hover:text-black relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-gray-600"
              href=""
            >
              {item.name}
            </a>
            {children?.length > 0 && <Menu level={level + 1} data={children} />}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
