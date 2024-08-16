export default function ResumeTemplate3() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Emily Davis</h1>
        <p className="text-lg text-gray-600">
          Email: emily.davis@example.com | Phone: (111) 222-3333
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
          Achievements
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Employee of the Year - XYZ Corp, 2022</li>
          <li>Top Innovator Award - DEF Tech Conference, 2021</li>
          <li>Patent Holder - Novel Blockchain Technology, 2020</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
          Interests
        </h2>
        <p className="text-gray-700 mt-2">
          Passionate about blockchain technology, AI advancements, and
          sustainable tech solutions. In my free time, I enjoy hiking, playing
          chess, and volunteering at local tech workshops.
        </p>
      </div>
    </div>
  );
}
