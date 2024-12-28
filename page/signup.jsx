import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight, Github, Twitter } from "lucide-react";

function FormInput({ label, icon: Icon, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type={type}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          {...props}
        />
      </div>
    </div>
  );
}

function SocialButton({ icon: Icon, label }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-yellow-50 transition-colors"
    >
      <Icon className="h-5 w-5 mr-2" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.name,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (data.msg === "User was created succesfully") {
        alert("Account created successfully!");
      } else {
        setErrorMessage("Error creating account.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Create an account</h1>
            <p className="text-gray-600">Start your 30-day free trial</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <FormInput
                label="Full Name"
                icon={User}
                placeholder="ABC XYZ"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <FormInput
                label="Email address"
                icon={Mail}
                type="email"
                placeholder="anyone@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <FormInput
                label="Password"
                icon={Lock}
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center group"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {errorMessage && (
              <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
            )}

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton icon={Github} label="Github" />
              <SocialButton icon={Twitter} label="Twitter" />
            </div>

            <p className="text-center text-sm text-gray-600 mt-8">
              Already have an account?{" "}
              <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Sign in
              </a>
            </p>
          </form>
        </div>
        
        <div className="hidden md:block bg-cover bg-center bg-no-repeat">
            <img src="https://images.pexels.com/photos/5383861/pexels-photo-5383861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
