/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { robotoCondensed } from "../styles/fonts";

// type
import { UserData } from "@/app/types/user-data";

const ResumeTemplate1: React.FC<{ dataUser: UserData }> = ({ dataUser }) => {
  return (
    <div
      className={`${robotoCondensed.className} h-[100%] w-[100%] robomax-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col gap-5`}
    >
      {/* section 1 - identity */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-medium text-center">{dataUser?.name}</p>
          <div className="grid grid-cols-12 text-center">
            <div className="text-md col-span-4">{dataUser?.phone}</div>
            <div className="text-md col-span-4">{dataUser?.email}</div>
            <div className="text-md col-span-4">{dataUser?.address}</div>
          </div>
        </div>
      </div>

      {/* section 2 - information */}
      <div className="grid grid-cols-12 gap-5">
        {/* side left */}
        <div className="col-span-7">
          {/* content side left */}
          <div className="flex flex-col gap-5">
            {/* section summary */}
            <div className="flex flex-col h-[100%] justify-center">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-md font-semibold">Summary</p>
                  <div className="border-t-4 border-b-2 border-gray-300"></div>
                </div>
                <p className="text-sm font-normal text-justify">
                  {dataUser?.summary}
                </p>
              </div>
            </div>

            {/* section experience */}
            <div className="flex flex-col h-[100%] justify-center ">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-md font-semibold">Experience</p>
                  <div className="border-t-4 border-b-2 border-gray-300"></div>
                </div>
                {/* list experience */}
                <div className="w-[100%] flex flex-col gap-2">
                  {dataUser?.experience?.map((item, key) => (
                    <div className="flex flex-col" key={key}>
                      <p className="text-md">{item?.company}</p>
                      <div className="w-[100%] flex flex-row justify-between">
                        <div className="w-[80%]">
                          <p className="text-md text-blue-500">{item?.title}</p>
                        </div>
                        <div className="w-[20%] text-right">
                          <p className="text-sm">{item?.duration}</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-4 text-sm">
                        {item?.description?.split(",")?.map((item, key) => (
                          <li key={key} className="text-justify">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* section certification */}
            {dataUser?.certifications?.length > 0 && (
              <div className="flex flex-col h-[100%] justify-center ">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-md font-semibold">Certification</p>
                    <div className="border-t-4 border-b-2 border-gray-300"></div>
                  </div>
                  {/* list certification */}
                  <div className="w-[100%] flex flex-col gap-2">
                    {dataUser?.certifications?.map((item, key) => (
                      <div className="flex flex-col" key={key}>
                        <div className="w-[100%] flex flex-row justify-between">
                          <div className="w-[90%]">
                            <p className="text-md text-blue-500">
                              {item?.title}
                            </p>
                          </div>
                          <div className="w-[10%] text-right">
                            <p className="text-sm">{item?.year}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* side right  */}
        <div className="col-span-5">
          {/* content side right */}
          <div className="flex flex-col gap-5">
            {/* section education */}
            <div className="flex flex-col h-[100%] justify-center ">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-md font-semibold">Education</p>
                  <div className="border-t-4 border-b-2 border-gray-300"></div>
                </div>
                {/* list education */}
                <div className="w-[100%] flex flex-col gap-2">
                  {dataUser?.education?.map((item, key) => (
                    <div className="flex flex-col" key={key}>
                      <p className="text-md font-normal">{item?.degree}</p>
                      <div className="w-[100%] flex flex-row justify-between">
                        <div className="w-[70%]">
                          <p className="text-md text-blue-500">
                            {item?.institution}
                          </p>
                        </div>
                        <div className="w-[30%] flex items-center justify-end">
                          <p className="text-sm">{item?.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* section skills */}
            <div className="flex flex-col h-[100%] justify-center ">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-md font-semibold">Skills</p>
                  <div className="border-t-4 border-b-2 border-gray-300"></div>
                </div>
                {/* list skill */}
                <div className="w-[100%] flex flex-col gap-2">
                  {dataUser?.skills
                    ?.sort((a, b) => {
                      if (a.title < b.title) {
                        return -1;
                      }
                      if (a.title > b.title) {
                        return 1;
                      }
                      return 0;
                    })
                    ?.map((item, key) => (
                      <div className="flex flex-col" key={key}>
                        <p className="text-md text-blue-500">{item?.title}</p>
                        <p className="text-sm text-justify">
                          {item?.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate1;
