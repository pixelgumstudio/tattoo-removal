


export default function Section({children}: {children: React.ReactNode}) {


  return (
    <section className="w-full px-4 md:px-6 lg:px-10 py-12">
      <div className="w-full max-w-[1152px] mx-auto">
        {children}
      </div>
    </section>
  );
}
