import { Link } from "react-router-dom";
const CustomSidebarOptions = ({ setTitle, opciones, isSidebarActive }) => {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-[40rem] h-screen pt-32 transition-transform ${
        isSidebarActive ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          {opciones.map((opcion, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={() => setTitle(opcion.text)}
                  to={opcion.to}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group w-full h-32"
                >
                  <div className="flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 text-6xl">
                    {opcion.icon}
                  </div>
                  <div className="flex-1 ms-3 whitespace-nowrap text-4xl pl-10">
                    {opcion.text}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default CustomSidebarOptions;
