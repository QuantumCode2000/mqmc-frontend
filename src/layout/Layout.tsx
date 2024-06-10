import { Outlet } from "react-router-dom";
import CustomSidebar from "../components/customs/CustomSidebar/CustomSidebar";
import { useState } from "react";

const Layout = () => {
  const [title, setTitle] = useState(null);
  return (
    <>
      <CustomSidebar setTitle={setTitle} />
      <div className="p-4 sm:ml-[40rem]">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-28">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-md2 font-semibold text-black text-6xl">
                  {title}
                </h2>
              </div>
              <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default ">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
