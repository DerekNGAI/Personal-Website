const CustomSection = ({ children, className, id }) => (
  <section id={id} className={`h-full w-full snap-start overflow-hidden ${className} pt-[10vh]`}>
    {children}
  </section>
);

export default CustomSection;
