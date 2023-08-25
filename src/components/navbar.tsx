const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="w-full mx-auto flex justify-end">
        <div className="flex items-center">
          <div className="relative w-10 h-10 bg-gray-300 rounded-full mr-4 cursor-pointer">
            <div className="absolute w-3 h-3 -top-1 -right-1 bg-[#5CCC5A] rounded-full m-1 "></div>
          </div>
          <h1 className="text-white mr-5">Hello User</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
