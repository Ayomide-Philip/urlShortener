export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526]">
      <div className="container mx-auto max-w-xl p-8">
        {" "}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
          {children}
        </div>
      </div>
    </div>
  );
}
