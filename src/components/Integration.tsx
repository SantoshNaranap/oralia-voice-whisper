
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Integration = () => {
  const [copied, setCopied] = useState(false);
  
  const codeSnippet = `<script>
  (function(o,r,a,l,i){o.OraliaConfig=o.OraliaConfig||{};
  o.OraliaConfig.apiKey='YOUR_API_KEY';
  l=r.createElement('script');l.async=1;l.src=a;
  i=r.getElementsByTagName('script')[0];i.parentNode.insertBefore(l,i);
  })(window,document,'https://cdn.oralia.ai/widget.js');
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integrate" className="section">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Integration, <br/>Powerful Results
          </h2>
          <p className="text-gray-600 mb-6">
            Adding Oralia to your website is as simple as copying and pasting a single code snippet. No complex setup, no development expertise required.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="mr-3 mt-1 bg-oralia/10 p-1 rounded-full text-oralia">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Works with any website platform - WordPress, Shopify, Wix, or custom-built sites</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 bg-oralia/10 p-1 rounded-full text-oralia">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Automatically learns your website content and structure</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 bg-oralia/10 p-1 rounded-full text-oralia">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Customizable appearance to match your brand</span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 mt-1 bg-oralia/10 p-1 rounded-full text-oralia">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Detailed analytics dashboard to track user interactions</span>
            </li>
          </ul>
          <Button className="bg-oralia hover:bg-oralia-dark text-white">Start Free Trial</Button>
        </div>
        
        <div className="md:w-1/2">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <button 
                className={`text-xs py-1 px-3 rounded border ${copied 
                  ? 'bg-green-500 text-white border-green-600' 
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'}`}
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto whitespace-pre-wrap">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
