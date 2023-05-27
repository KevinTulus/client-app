function Navbar(props) {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.logout();
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Where My Angkot
            </span>
          </div>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              onClick={handleOnClick}
            >
              {props.getToken() != "" ? "Sign out" : "Sign in"}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
