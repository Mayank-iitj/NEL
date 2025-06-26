import React, { useState } from 'react';
import { ChevronRight, FileText, Search, Link, CheckCircle } from 'lucide-react';

export function PipelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      icon: FileText,
      title: "Text Preprocessing",
      description: "Clean and prepare the input text for analysis",
      details: [
        "Tokenization - Break text into individual words/tokens",
        "Sentence segmentation - Identify sentence boundaries",
        "Text normalization - Handle capitalization, punctuation",
        "Language detection - Identify the text language"
      ],
      color: "blue"
    },
    {
      icon: Search,
      title: "Entity Recognition",
      description: "Identify and classify named entities in the text",
      details: [
        "Named Entity Recognition (NER) - Find entity mentions",
        "Entity type classification - Classify as PERSON, ORG, LOC, etc.",
        "Boundary detection - Determine exact entity spans",
        "Confidence scoring - Assign confidence levels"
      ],
      color: "teal"
    },
    {
      icon: Link,
      title: "Candidate Generation",
      description: "Generate potential entity candidates from knowledge bases",
      details: [
        "String matching - Find similar entity names",
        "Alias lookup - Check alternative names and variations",
        "Fuzzy matching - Handle spelling variations",
        "Ranking - Score candidates by similarity"
      ],
      color: "purple"
    },
    {
      icon: CheckCircle,
      title: "Entity Disambiguation",
      description: "Select the most appropriate entity from candidates",
      details: [
        "Context analysis - Examine surrounding text context",
        "Feature extraction - Extract relevant features",
        "Machine learning - Apply trained disambiguation models",
        "Final linking - Connect to knowledge base entities"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string, active: boolean = false) => {
    const colors = {
      blue: active ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600",
      teal: active ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-600",
      purple: active ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600",
      orange: active ? "bg-orange-600 text-white" : "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="pipeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NEL Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the step-by-step process of Named Entity Linking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pipeline Steps */}
          <div className="space-y-6">
            {pipelineSteps.map((step, index) => (
              <div
                key={index}
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'border-blue-300 bg-blue-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeStep === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`p-3 rounded-lg ${getColorClasses(step.color, activeStep === index)}`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${
                    activeStep === index ? 'rotate-90 text-blue-600' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-lg ${getColorClasses(pipelineSteps[activeStep].color, true)}`}>
                {React.createElement(pipelineSteps[activeStep].icon, { className: "h-6 w-6" })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {pipelineSteps[activeStep].title}
                </h3>
                <p className="text-gray-600">
                  Step {activeStep + 1} of {pipelineSteps.length}
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {pipelineSteps[activeStep].description}
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Components:
            </h4>
            <ul className="space-y-3">
              {pipelineSteps[activeStep].details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Pipeline Progress</div>
              <div className="flex space-x-1">
                {pipelineSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full flex-1 transition-colors ${
                      index <= activeStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pipeline Performance
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">~10ms</div>
                <div className="text-sm text-gray-600">Processing time per sentence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Entity recognition accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">Linking accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Languages supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}