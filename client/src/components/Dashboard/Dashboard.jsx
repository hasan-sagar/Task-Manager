import React from "react";
import { useEffect } from "react";
import { DashboardStat } from "../../apiRequest/APIRequest";
import { useSelector } from "react-redux";

export default function Dashboard() {
  useEffect(() => {
    DashboardStat();
  }, []);
  const DashboardData = useSelector((state) => state.statistics.value);

  return (
    <section className="pt-10 pb-12 lg:pt-[120px] lg:pb-[90px] text-center">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          {DashboardData.length ? DashboardData.map((data, i) => (
            <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Task {data._id}
                </h4>
                <p className="text-teal-400">{data.sum}</p>
              </div>
            </div>
            </>
          )):(
            <>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Task Status
                </h4>
                <p className="text-teal-400">Add New Data</p>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}