import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

export function InteractiveDemo() {
  const [inputText, setInputText] = useState(
    "Apple Inc. was founded by Steve Jobs in Cupertino, California. The company is now led by Tim Cook and is headquartered in Silicon Valley."
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasProcessed, setHasProcessed] = useState(false);
  const [copied, setCopied] = useState(false);

  const entities = [
    { text: "Apple Inc.", type: "ORGANIZATION", start: 0, end: 10, confidence: 0.98, linkedEntity: "Apple Inc. (Q312)" },
    { text: "Steve Jobs", type: "PERSON", start: 26, end: 36, confidence: 0.95, linkedEntity: "Steve Jobs (Q19837)" },
    { text: "Cupertino", type: "LOCATION", start: 40, end: 49, confidence: 0.92, linkedEntity: "Cupertino, California (Q47265)" },
    { text: "California", type: "LOCATION", start: 51, end: 61, confidence: 0.94, linkedEntity: "California (Q99)" },
    { text: "Tim Cook", type: "PERSON", start: 92, end: 100, confidence: 0.96, linkedEntity: "Tim Cook (Q7803)" },
    { text: "Silicon Valley", type: "LOCATION", start: 123, end: 137, confidence: 0.89, linkedEntity: "Silicon Valley (Q163820)" }
  ];

  const entityColors = {
    PERSON: "bg-blue-100 text-blue-800 border-blue-300",
    ORGANIZATION: "bg-green-100 text-green-800 border-green-300",
    LOCATION: "bg-purple-100 text-purple-800 border-purple-300"
  };

  const processText = async () => {
    setIsProcessing(true);
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setHasProcessed(true);
  };

  const resetDemo = () => {
    setHasProcessed(false);
    setIsProcessing(false);
  };

  const copyResults = async () => {
    const results = entities.map(entity => 
      `${entity.text} (${entity.type}) -> ${entity.linkedEntity}`
    ).join('\n');
    
    try {
      await navigator.clipboard.writeText(results);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const renderHighlightedText = () => {
    if (!hasProcessed) return inputText;

    let result = inputText;
    const sortedEntities = [...entities].sort((a, b) => b.start - a.start);
    
    sortedEntities.forEach(entity => {
      const before = result.substring(0, entity.start);
      const entityText = result.substring(entity.start, entity.end);
      const after = result.substring(entity.end);
      
      result = before + 
        `<span class="px-2 py-1 rounded border ${entityColors[entity.type as keyof typeof entityColors]} font-medium cursor-pointer transition-all hover:shadow-md" title="${entity.linkedEntity}">${entityText}</span>` + 
        after;
    });
    
    return result;
  };

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try Named Entity Linking in real-time. Enter your text and see how entities are identified and linked.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Input Text
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter your text here..."
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-3">
                  <button
                    onClick={processText}
                    disabled={isProcessing || !inputText.trim()}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>{isProcessing ? 'Processing...' : 'Process Text'}</span>
                  </button>
                  <button
                    onClick={resetDemo}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Reset</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  {inputText.length} characters
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Results
                </label>
                {hasProcessed && (
                  <button
                    onClick={copyResults}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Results'}</span>
                  </button>
                )}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 min-h-32">
                {isProcessing ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-3 text-gray-600">Analyzing entities...</span>
                  </div>
                ) : hasProcessed ? (
                  <div
                    className="text-gray-900 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedText() }}
                  />
                ) : (
                  <div className="text-gray-500 text-center py-8">
                    Click "Process Text" to see entity linking in action
                  </div>
                )}
              </div>

              {hasProcessed && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Entity Legend</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">PERSON</span>
                      <span className="text-sm text-gray-600">People and individuals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">ORGANIZATION</span>
                      <span className="text-sm text-gray-600">Companies and institutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">LOCATION</span>
                      <span className="text-sm text-gray-600">Places and geographical locations</span>
                    </div>
                  </div>
                </div>
              )}

              {hasProcessed && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Detected Entities</h4>
                  <div className="space-y-2">
                    {entities.map((entity, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-medium text-gray-900">{entity.text}</span>
                            <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${entityColors[entity.type as keyof typeof entityColors]}`}>
                              {entity.type}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">Confidence: {(entity.confidence * 100).toFixed(0)}%</div>
                            <div className="text-xs text-gray-500">{entity.linkedEntity}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}