

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 shadow-md fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personalized Learning</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-indigo-500">Features</a>
            <a href="#about" className="hover:text-indigo-500">About</a>
            <a href="#contact" className="hover:text-indigo-500">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Animation */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 animate-updown">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Personalized Learning Journey</h1>
          <p className="text-lg mb-8">A platform where users can add YouTube links and start their personalized learning journey.</p>
          <a href="#features" className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 animate-updown">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-4">Daily Reminders</h3>
              <p className="text-gray-600">Stay on track with daily reminders to keep your learning consistent and organized.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-4">Daily Streaks</h3>
              <p className="text-gray-600">Keep track of your learning progress with a daily streak system to motivate yourself.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-4">YouTube Video Summaries</h3>
              <p className="text-gray-600">Get concise summaries for each video to help you retain important information.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-4">Take Notes</h3>
              <p className="text-gray-600">Easily take notes during your learning process to refer back to later.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-4">Certificates of Completion</h3>
              <p className="text-gray-600">Earn certificates after completing 70-80% of a course and scoring at least 80% on a test.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-4">AI Assistant</h3>
              <p className="text-gray-600">Get help solving difficulties with an AI assistant tailored to your learning needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-16 text-center animate-updown">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Learning Journey?</h2>
        <p className="text-lg mb-8">Join now and begin learning your way!</p>
        <a href="/signup" className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800">Sign Up</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center animate-updown">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">About the Developer</h2>
          <p className="text-lg">This platform was built by [Your Name], a passionate developer working to create personalized learning experiences for everyone. With a background in web development, I aim to help learners improve their skills at their own pace.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-200 text-center animate-updown">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <p className="text-lg">Have questions or need assistance? Reach out to us!</p>
          <p className="mt-4">Email: <a href="mailto:support@learningplatform.com" className="text-indigo-500">support@learningplatform.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2025 Personalized Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
