import { Twitter, Instagram } from 'lucide-react';
export const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-[#1a1a1a] py-16">
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
                        Hinge in the headlines.
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        See our press releases, media coverage, and press kits.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                        Visit our newsroom
                    </button>
                </div>
            </section>
            <hr className='ml-[250px] mr-[250px] mb-[40px]'/>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Index</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Mission</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Labs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Safe Dating Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Trust & Safety</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Your Privacy Choices</a></li>
              </ul>
            </div>
            
            <div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {currentYear} Hinge Inc.</p>
            <button className="mt-4 md:mt-0 text-gray-400 hover:text-white">
              English (UK)
            </button>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;