/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { robotoCondensed } from "../styles/fonts";

export default function ResumeTemplate1() {
  return (
    <div
      className={`${robotoCondensed.className} grid grid-cols-12 robomax-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg gap-3`}
    >
      {/* side left */}
      <div className="col-span-7">
        {/* content side left */}
        <div className="flex flex-col gap-2">
          {/* section 1 */}
          <div className="flex flex-col h-[100%] justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-medium text-center">Jane Doe</p>
              <div className="grid grid-cols-12 text-center">
                <div className="text-md col-span-4">+62 81234567890</div>
                <div className="text-md col-span-4">janedoe@gmail.com</div>
                <div className="text-md col-span-4">Bengaluru</div>
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="flex flex-col h-[100%] justify-center">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-md font-semibold">Summary</p>
                <div className="border-t-4 border-b-2 border-gray-300"></div>
              </div>
              <p className="text-sm font-normal">
                I am a web developer having expertise in frontend development
                and exposure to back- end development. I design and develop web
                applications using the latest technologies to deliver the
                product with quality code.
              </p>
            </div>
          </div>

          {/* section 3 */}
          <div className="flex flex-col h-[100%] justify-center ">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-md font-semibold">Experience</p>
                <div className="border-t-4 border-b-2 border-gray-300"></div>
              </div>
              {/* list experience */}
              <div className="w-[100%] flex flex-col gap-2">
                {/* item 1 */}
                <div className="flex flex-col">
                  <p className="text-md">Company 1</p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">
                      Senior Software Developer
                    </p>
                    <p className="text-sm">Apr 2021 - present</p>
                  </div>
                  <ul className="list-disc pl-4 text-sm">
                    <li>
                      Use my extensive experience with front end development to
                      define the structure and components for the project,
                      making sure they are reusable
                    </li>
                    <li>
                      Keep the code quality high reviewing code from other
                      developers and suggesting improvements
                    </li>
                    <li>
                      Interact with the designer to suggest changes and to make
                      sure the view he has about the design is translated into
                      actual functionality
                    </li>
                    <li>
                      E-commerce maintenance with Fastcommerce, a Brazilian
                      e-commerce platform
                    </li>
                  </ul>
                </div>
                {/* item 2 */}
                <div className="flex flex-col">
                  <p className="text-md">Company 2</p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">Software Developer</p>
                    <p className="text-sm">Jun 2015 - Dec 2017</p>
                  </div>
                  <ul className="list-disc pl-4 text-sm">
                    <li>
                      Develop web applications based on Sharepoint, Drupal 8 and
                      Episerver
                    </li>
                    <li>
                      Lead a team of 10 front end developers, giving support to
                      the client's multicultural team, providing feedback,
                      clarifying requirements and helping with technical
                      questions
                    </li>
                    <li>
                      Keep the Project Manager and the IT Leads updated on the
                      overall progress of the projects and manage the tasks
                      distributed to the team
                    </li>
                    <li>
                      Keep the code and the features implemented by the other
                      developers in accordance to the requirements
                    </li>
                  </ul>
                </div>
                {/* item 3 */}
                <div className="flex flex-col">
                  <p className="text-md">Company 3</p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">Trainee Developer</p>
                    <p className="text-sm">Aug 2011 - May 2015</p>
                  </div>
                  <ul className="list-disc pl-4 text-sm">
                    <li>
                      Design easy user interfaces and great user experiences for
                      the digital platforms of small companies
                    </li>
                    <li>
                      Wordpress development, including themes creation or
                      customization, custom plugins development and training
                    </li>
                    <li>
                      E-commerce maintenance with Fastcommerce, a Brazilian
                      e-commerce platform
                    </li>
                    <li>
                      E-commerce development with Magento, customizing
                      preexisting themes
                    </li>
                    <li>
                      Integrate external services such as payment services,
                      delivery, etc into Magento solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className="flex flex-col h-[100%] justify-center ">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-md font-semibold">Certification</p>
                <div className="border-t-4 border-b-2 border-gray-300"></div>
              </div>
              {/* list experience */}
              <div className="w-[100%] flex flex-col gap-2">
                {/* item 1 */}
                <div className="flex flex-col">
                  <p className="text-md font-normal">
                    Certificate of exceptional bug finder
                  </p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">XYZ client</p>
                    <p className="text-sm">Nov 2014</p>
                  </div>
                  <ul className="list-disc pl-4 text-sm">
                    <li>Recognition zero defect delivery</li>
                  </ul>
                </div>
                {/* item 1 */}
                <div className="flex flex-col">
                  <p className="text-md font-normal">
                    Certificate of best frontend developer
                  </p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">XYZ client</p>
                    <p className="text-sm">Nov 2016</p>
                  </div>
                  <ul className="list-disc pl-4 text-sm">
                    <li>
                      Awarded for exceptional improvements made to improve user
                      experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* side right  */}
      <div className="col-span-5">
        {/* content side right */}
        <div className="flex flex-col gap-2">
          {/* section 1 */}
          <div className="flex flex-col h-[100%] justify-center items-end">
            <div className="w-20 h-20 relative">
              <Image
                src="/images/mark.jpg"
                alt="User Avatar"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>

          {/* section 2 */}
          <div className="flex flex-col h-[100%] justify-center ">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-md font-semibold">Education</p>
                <div className="border-t-4 border-b-2 border-gray-300"></div>
              </div>
              {/* list experience */}
              <div className="w-[100%] flex flex-col gap-2">
                {/* item 1 */}
                <div className="flex flex-col">
                  <p className="text-md font-normal">MS - Cloud technology</p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">MIT, University</p>
                    <p className="text-sm">Jan 2014 -Jan 2016</p>
                  </div>
                </div>
                {/* item 2 */}
                <div className="flex flex-col">
                  <p className="text-md font-normal">
                    B.Tech (VTU) - Computer Science
                  </p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">NMAMIT, Nitte</p>
                    <p className="text-sm">Jan 2010 -Jan 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className="flex flex-col h-[100%] justify-center ">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-md font-semibold">Skills</p>
                <div className="border-t-4 border-b-2 border-gray-300"></div>
              </div>
              {/* list experience */}
              <div className="w-[100%] flex flex-col gap-2">
                {/* item 1 */}
                <div className="flex flex-col">
                  <p className="text-md font-normal">Company XYZ</p>
                  <div className="w-[100%] flex flex-row items-center justify-between">
                    <p className="text-md text-blue-500">Organizer</p>
                    <p className="text-sm">Jan 2012 -Jan 2013</p>
                  </div>
                  <p className="text-sm">
                    Organized several hackthons & monthly meetup to improve the
                    community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
