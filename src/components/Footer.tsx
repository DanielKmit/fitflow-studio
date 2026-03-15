export default function Footer() {
  return (
    <footer className="bg-sage-dark text-white/60 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-3">
              FitFlow <span className="text-gold">Studio</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-sm">
              A sanctuary for movement, mindfulness, and community. Located in
              the heart of the city, offering classes for every body and every
              level.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Studio Hours
            </h4>
            <div className="space-y-2 text-sm">
              <p>Mon–Fri: 6:00 AM – 9:30 PM</p>
              <p>Saturday: 7:00 AM – 6:00 PM</p>
              <p>Sunday: 8:00 AM – 4:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p>42 Serenity Lane</p>
              <p>Bratislava, Slovakia</p>
              <p className="text-gold hover:text-gold-light transition-colors">
                hello@fitflowstudio.com
              </p>
              <p>+421 2 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} FitFlow Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
