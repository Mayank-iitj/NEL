import React from 'react';
import { Brain, Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center space-x-3 mb-4 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">NEL Platform</h3>
                <p className="text-gray-400 text-sm">Named Entity Linking</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A comprehensive educational platform for understanding Named Entity Linking, 
              featuring interactive demos, detailed explanations, and real-world applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('concepts')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Concepts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('demo')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Interactive Demo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pipeline')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Pipeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('applications')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Applications
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Datasets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NEL Platform. Educational content for Named Entity Linking.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}