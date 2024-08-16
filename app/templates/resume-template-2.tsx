export default function ResumeTemplate2() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Michael Johnson</h1>
        <p className="text-lg text-gray-600">
          Email: michael.johnson@example.com | Phone: (555) 123-4567
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
          Certifications
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Certified Scrum Master (CSM) - Scrum Alliance</li>
          <li>AWS Certified Solutions Architect - Amazon Web Services</li>
          <li>Google Professional Cloud Architect - Google Cloud</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
          Education
        </h2>
        <p className="text-gray-700 mt-2">
          <strong>Master of Business Administration (MBA)</strong> - ABC
          University (2015 - 2017)
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Bachelor of Science in Information Technology</strong> - DEF
          University (2010 - 2014)
        </p>
      </div>
    </div>
  );
}
