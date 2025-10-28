import { useState, useEffect } from "react";

const ADMIN_PIN = "4321"; // 🔒 You can change this anytime

export default function Inbox() {
  const [enteredPin, setEnteredPin] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch messages only after authentication
  useEffect(() => {
    if (authenticated) {
      setLoading(true);
      fetch("/api/messages")
        .then((res) => res.json())
        .then((data) => {
          setMessages(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching messages:", err);
          setLoading(false);
          setError("Failed to load messages.");
        });
    }
  }, [authenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (enteredPin === ADMIN_PIN) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect PIN. Try again.");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl w-80">
          <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
            🔐 Admin Access
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter PIN"
              value={enteredPin}
              onChange={(e) => setEnteredPin(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-center tracking-widest text-lg"
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Access Inbox
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ✅ Show Inbox after login
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📬 Message Inbox</h1>
        <button
          onClick={() => setAuthenticated(false)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="overflow-x-auto bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6">
        {loading ? (
          <p className="text-gray-500 text-center py-10">Loading messages...</p>
        ) : error ? (
          <p className="text-red-500 text-center py-10">{error}</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            No messages yet — check back later!
          </p>
        ) : (
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Phone</th>
                <th className="border p-3 text-left">Message</th>
                <th className="border p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="border p-3">{msg.name}</td>
                  <td className="border p-3">{msg.email}</td>
                  <td className="border p-3">{msg.phone || "-"}</td>
                  <td className="border p-3">{msg.message}</td>
                  <td className="border p-3">
                    {new Date(msg.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
