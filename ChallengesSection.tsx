import React from 'react';
import { AlertTriangle, Users, Globe, Zap } from 'lucide-react';

export function ChallengesSection() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Ambiguity Resolution",
      description: "Handling cases where the same name refers to multiple entities",
      examples: [
        "Apple (company) vs Apple (fruit)",
        "Paris (France) vs Paris (Texas)",
        "Michael Jordan (athlete) vs Michael Jordan (professor)"
      ],
      solutions: [
        "Context-aware disambiguation",
        "Machine learning models",
        "Graph-based ranking algorithms"
      ],
      color: "red"
    },
    {
      icon: Users,
      title: "Entity Variations",
      description: "Managing different surface forms and aliases for the same entity",
      examples: [
        "IBM vs International Business Machines",
        "NYC vs New York City vs The Big Apple",
        "JFK vs John F. Kennedy vs John Fitzgerald Kennedy"
      ],
      solutions: [
        "Comprehensive alias databases",
        "String similarity algorithms",
        "Fuzzy matching techniques"
      ],
      color: "blue"
    },
    {
      icon: Globe,
      title: "Cross-lingual Linking",
      description: "Linking entities across different languages and scripts",
      examples: [
        "London (English) vs Londres (French) vs ロンドン (Japanese)",
        "Deutschland (German) vs Germany (English)",
        "طوكيو (Arabic) vs Tokyo (English)"
      ],
      solutions: [
        "Multilingual knowledge bases",
        "Cross-lingual embeddings",
        "Unicode normalization"
      ],
      color: "green"
    },
    {
      icon: Zap,
      title: "Scale & Performance",
      description: "Processing large volumes of text while maintaining accuracy",
      examples: [
        "Real-time news processing",
        "Social media stream analysis",
        "Large document collections"
      ],
      solutions: [
        "Efficient indexing structures",
        "Parallel processing",
        "Optimized algorithms"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 text-red-600 border-red-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="challenges" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Challenges & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the key challenges in Named Entity Linking and how modern systems address them
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-lg border ${getColorClasses(challenge.color)}`}>
                  <challenge.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Common Examples
                  </h4>
                  <ul className="space-y-2">
                    {challenge.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Solution Approaches
                  </h4>
                  <ul className="space-y-2">
                    {challenge.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Research Frontiers
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Current research in Named Entity Linking focuses on pushing the boundaries of accuracy, 
              efficiency, and applicability across diverse domains and languages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Neural Approaches
              </h4>
              <p className="text-gray-600 text-sm">
                Deep learning models that understand context and semantics for better entity disambiguation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Multilingual Systems
              </h4>
              <p className="text-gray-600 text-sm">
                Cross-lingual entity linking that works seamlessly across different languages and scripts
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Domain Adaptation
              </h4>
              <p className="text-gray-600 text-sm">
                Specialized systems for specific domains like biomedical, legal, or scientific literature
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}