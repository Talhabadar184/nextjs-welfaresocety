import HierarchyHero from '../../Components/HierarchyHero';

interface HierarchyLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  hideOverlay?: boolean;
}

const HierarchyLayout = ({ children, title, subtitle, backgroundImage = "/g3.jpg", hideOverlay = false }: HierarchyLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
3
      {/* Premium Cinematic Hero with About Animations */}
      <HierarchyHero
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        hideOverlay={hideOverlay}
      />

      {/* Page Content */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default HierarchyLayout;

