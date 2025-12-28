import HierarchyHero from '../../Components/HierarchyHero';

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden">

      {/* Premium Cinematic Hero */}
      <HierarchyHero
        title="Contact Us"
        subtitle="We're here to help you innovate"
        backgroundImage="/contacthero.jpg"
      />

      {/* Page Content */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default ContactLayout;
