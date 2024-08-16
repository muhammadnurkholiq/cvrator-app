import React from "react";

export default function ResumeTemplate1() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Jane Smith</h1>
        <p className="text-lg text-gray-600">
          Email: jane.smith@example.com | Phone: (987) 654-3210
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
          Skills
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Proficient in JavaScript, React, and Node.js</li>
          <li>Strong understanding of RESTful APIs and GraphQL</li>
          <li>Experienced in Agile methodologies and Scrum</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
          Projects
        </h2>
        <div className="mt-2">
          <h3 className="text-xl font-semibold text-gray-800">Project Alpha</h3>
          <p className="text-gray-600">2021 - Present</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Developed a scalable web application using React and Node.js.
            </li>
            <li>Implemented CI/CD pipelines to streamline deployment.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">Project Beta</h3>
          <p className="text-gray-600">2020 - 2021</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Led the development of a mobile app for e-commerce.</li>
            <li>Integrated third-party payment systems and APIs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
