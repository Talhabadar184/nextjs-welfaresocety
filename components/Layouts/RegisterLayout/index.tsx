const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <main className="relative z-10 flex-grow pt-0">
        {children}
      </main>
    </div>
  );
};

export default RegisterLayout;
