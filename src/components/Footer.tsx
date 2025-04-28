import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-200 py-8 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A showcase of my work, skills, and experience as a developer. 
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="/experience" className="hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:your-email@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">your-email@example.com</p>
          </div>
        </div>

        <div className="border-t border-dark-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center mt-4 sm:mt-0">
            Built with <Heart size={14} className="mx-1 text-accent" /> by Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;