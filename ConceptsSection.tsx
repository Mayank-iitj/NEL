import React from 'react';
import { BookOpen, Target, Network, Zap } from 'lucide-react';

export function ConceptsSection() {
  const concepts = [
    {
      icon: Target,
      title: "Named Entity Recognition (NER)",
      description: "The first step in entity linking - identifying and classifying named entities such as persons, organizations, locations, and other types in text.",
      color: "blue",
      details: [
        "Identifies entity boundaries",
        "Classifies entity types",
        "Uses machine learning models",
        "Foundation for linking process"
      ]
    },
    {
      icon: Network,
      title: "Entity Disambiguation",
      description: "Resolving which specific entity a mention refers to when multiple entities share the same name or similar surface forms.",
      color: "teal",
      details: [
        "Handles ambiguous mentions",
        "Uses contextual information",
        "Leverages knowledge graphs",
        "Improves accuracy significantly"
      ]
    },
    {
      icon: BookOpen,
      title: "Knowledge Bases",
      description: "Structured repositories of entities and their relationships, such as Wikipedia, Wikidata, or domain-specific databases.",
      color: "purple",
      details: [
        "Stores entity information",
        "Maintains relationships",
        "Provides canonical forms",
        "Enables semantic search"
      ]
    },
    {
      icon: Zap,
      title: "Linking Algorithms",
      description: "Advanced algorithms that combine lexical similarity, context analysis, and graph-based methods to perform accurate entity linking.",
      color: "orange",
      details: [
        "String similarity metrics",
        "Context-aware matching",
        "Graph-based ranking",
        "Machine learning approaches"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="concepts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Concepts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the fundamental components that make Named Entity Linking possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${getColorClasses(concept.color)}`}>
                  <concept.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {concept.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {concept.description}
                  </p>
                  <ul className="space-y-2">
                    {concept.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Named Entity Linking Matters
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
              Named Entity Linking transforms unstructured text into structured, machine-readable knowledge. 
              It enables applications to understand not just what entities are mentioned, but exactly which 
              real-world entities they refer to, opening up possibilities for advanced semantic search, 
              knowledge discovery, and intelligent information systems.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Accuracy in modern systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600">Entities in major KBs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Languages supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}