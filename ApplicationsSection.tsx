import React from 'react';
import { Search, MessageSquare, TrendingUp, Shield, BookOpen, Globe } from 'lucide-react';

interface ApplicationsSectionProps {
  onNavigate: (section: string) => void;
}

export function ApplicationsSection({ onNavigate }: ApplicationsSectionProps) {
  const applications = [
    {
      icon: Search,
      title: "Semantic Search",
      description: "Enhanced search engines that understand entity relationships and context",
      benefits: [
        "More accurate search results",
        "Entity-based query expansion",
        "Knowledge graph integration"
      ],
      examples: [
        "Google Knowledge Panels",
        "Bing Entity Search",
        "Enterprise search systems"
      ],
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Chatbots & Virtual Assistants",
      description: "AI assistants that can understand and reason about entities in conversations",
      benefits: [
        "Context-aware responses",
        "Entity disambiguation",
        "Factual accuracy"
      ],
      examples: [
        "Voice assistants",
        "Customer service bots",
        "Knowledge-based QA systems"
      ],
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Content Analytics",
      description: "Automated analysis of documents and media for business intelligence",
      benefits: [
        "Entity-based insights",
        "Trend analysis",
        "Competitive intelligence"
      ],
      examples: [
        "News monitoring",
        "Social media analysis",
        "Market research"
      ],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Compliance & Risk",
      description: "Automated detection of entities for regulatory compliance and risk assessment",
      benefits: [
        "Automated screening",
        "Risk assessment",
        "Regulatory compliance"
      ],
      examples: [
        "Anti-money laundering",
        "Sanctions screening",
        "Know Your Customer (KYC)"
      ],
      color: "red"
    },
    {
      icon: BookOpen,
      title: "Content Enrichment",
      description: "Automatically linking content to external knowledge sources",
      benefits: [
        "Enhanced user experience",
        "Contextual information",
        "Knowledge discovery"
      ],
      examples: [
        "Wikipedia linking",
        "News article enhancement",
        "Educational content"
      ],
      color: "orange"
    },
    {
      icon: Globe,
      title: "Knowledge Graphs",
      description: "Building and maintaining large-scale knowledge graphs from text",
      benefits: [
        "Automated knowledge extraction",
        "Graph construction",
        "Data integration"
      ],
      examples: [
        "Google Knowledge Graph",
        "Microsoft Satori",
        "Enterprise knowledge bases"
      ],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
      orange: "bg-orange-100 text-orange-600",
      teal: "bg-teal-100 text-teal-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Named Entity Linking powers modern applications and transforms how we interact with information
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(app.color)} flex items-center justify-center mb-4`}>
                <app.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {app.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {app.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Examples
                  </h4>
                  <ul className="space-y-1">
                    {app.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industry Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Named Entity Linking is transforming industries by enabling machines to understand and 
              reason about the real-world entities mentioned in text, leading to more intelligent and 
              context-aware applications.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.4B</div>
              <div className="text-sm text-gray-600">NLP market size by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Reduction in manual annotation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10x</div>
              <div className="text-sm text-gray-600">Faster knowledge extraction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-sm text-gray-600">Automated processing accuracy</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our interactive demo to see Named Entity Linking in action, or dive deeper into the 
            technical concepts and implementation details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('demo')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Try the Demo
            </button>
            <button 
              onClick={() => onNavigate('concepts')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}