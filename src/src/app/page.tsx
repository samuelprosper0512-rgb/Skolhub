export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Skolhub</h1>
        <p className="text-gray-600 mb-8 text-lg">
          The complete school platform built for Nigeria.
        </p>
        <div className="bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg inline-block mb-8">
          Platform is Live!
        </div>
        <p className="text-sm text-gray-400">
          Student, Staff, Attendance, and Fee management coming soon.
        </p>
      </div>
    </div>
  );
}
