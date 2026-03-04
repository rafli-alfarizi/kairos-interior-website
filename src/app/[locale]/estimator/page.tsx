"use client";

import { useState } from "react";

export default function Estimator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    roomType: "",
    areaSize: "",
    style: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <main className="flex-1 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">Cost Estimator</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Get a rough estimate for your interior design project in just a few clicks.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
              <span className={step >= 1 ? "text-blue-600" : ""}>Property</span>
              <span className={step >= 2 ? "text-blue-600" : ""}>Room</span>
              <span className={step >= 3 ? "text-blue-600" : ""}>Details</span>
              <span className={step >= 4 ? "text-blue-600" : ""}>Result</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Steps */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What type of property is this?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Apartment", "House", "Office", "Retail"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleSelect("propertyType", type)}
                    className={`p-6 border-2 rounded-2xl text-lg font-semibold transition-all shadow-sm hover:shadow-md ${
                      formData.propertyType === type
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-blue-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Which room needs designing?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Living Room", "Bedroom", "Kitchen", "Bathroom", "Full House", "Other"].map((room) => (
                  <button
                    key={room}
                    onClick={() => handleSelect("roomType", room)}
                    className={`p-4 border-2 rounded-2xl text-center font-medium transition-all shadow-sm hover:shadow-md ${
                      formData.roomType === room
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-blue-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Tell us more details</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Area Size (sqm)</label>
                <input
                  type="number"
                  value={formData.areaSize}
                  onChange={(e) => handleSelect("areaSize", e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition text-lg"
                  placeholder="e.g. 50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Style</label>
                <select
                  value={formData.style}
                  onChange={(e) => handleSelect("style", e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition text-lg bg-white"
                >
                  <option value="">Select a style...</option>
                  <option value="minimalist">Minimalist</option>
                  <option value="modern">Modern Contemporary</option>
                  <option value="industrial">Industrial</option>
                  <option value="classic">Classic / Traditional</option>
                  <option value="scandinavian">Scandinavian</option>
                </select>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Estimated Range</h2>
              <div className="text-5xl font-black text-blue-600 mb-6 bg-blue-50 py-6 rounded-2xl border border-blue-100 shadow-inner">
                Rp 50M - Rp 120M
              </div>
              <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                This is a rough estimate based on standard market rates for a {formData.style || "standard"} {formData.roomType || "space"}. 
                For a precise quotation, please contact our sales team.
              </p>
              <a href="/contact" className="inline-block bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Get Precise Quote
              </a>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 flex justify-between items-center pt-6 border-t border-gray-100">
            {step > 1 && step < 4 ? (
              <button
                onClick={prevStep}
                className="text-gray-600 font-medium hover:text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 3 && (
              <button
                onClick={nextStep}
                disabled={step === 1 && !formData.propertyType || step === 2 && !formData.roomType}
                className="bg-gray-900 text-white font-bold px-10 py-3 rounded-xl hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md"
              >
                Next Step
              </button>
            )}
            
            {step === 3 && (
              <button
                onClick={nextStep}
                disabled={!formData.areaSize || !formData.style}
                className="bg-blue-600 text-white font-bold px-10 py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg hover:shadow-xl"
              >
                Calculate Estimate
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
