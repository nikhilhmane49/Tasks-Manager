// LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="px-6 py-6 md:px-12 lg:px-24 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg
              className="w-12 h-12 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-4xl font-bold text-gray-800 tracking-tight">
              TaskFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors text-lg"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-indigo-600 transition-colors text-lg"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-indigo-600 transition-colors text-lg"
            >
              Pricing
            </a>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 text-indigo-600 border-2 border-indigo-600 rounded-lg 
                       hover:bg-indigo-50 transition-colors duration-200 text-lg"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                       transition-colors duration-200 text-lg"
            >
              Create Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-indigo-600"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-indigo-600"
              >
                Pricing
              </a>
              <button
                onClick={() => navigate("/login")}
                className="w-full py-2 text-indigo-600 border-2 border-indigo-600 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/create-account")}
                className="w-full py-2 bg-indigo-600 text-white rounded-lg"
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 lg:py-40 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Manage Tasks Together,
              <br />
              <span className="text-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Achieve More
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline your team's workflow with our collaborative task
              manager. Create, assign, and track tasks effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                className="px-10 py-5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 
                         transition-all duration-200 text-xl font-semibold transform hover:scale-105"
              >
                Start Free Trial
              </button>
              <button
                className="px-10 py-5 border-2 border-indigo-600 text-indigo-600 rounded-xl 
                         hover:bg-indigo-50 transition-all duration-200 text-xl font-semibold transform hover:scale-105"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Task Creation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Create and organize tasks with detailed descriptions and due
                dates.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Team Collaboration
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Work together seamlessly with your team members on shared tasks.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Progress Tracking
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Monitor task progress and team performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How it Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Create Your Workspace
              </h3>
              <p className="text-lg text-gray-600">
                Set up your team workspace in minutes and invite your
                colleagues.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Add Your Tasks</h3>
              <p className="text-lg text-gray-600">
                Create tasks, set deadlines, and assign them to team members.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Track Progress</h3>
              <p className="text-lg text-gray-600">
                Monitor progress, collaborate in real-time, and achieve your
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="text-white">
              <div className="text-5xl font-bold mb-4">10K+</div>
              <div className="text-xl text-indigo-100">Active Users</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-4">50K+</div>
              <div className="text-xl text-indigo-100">Tasks Completed</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-4">99%</div>
              <div className="text-xl text-indigo-100">Satisfaction Rate</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-4">24/7</div>
              <div className="text-xl text-indigo-100">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;