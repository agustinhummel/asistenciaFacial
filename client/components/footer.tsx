


const Footer = () => {
  return (
    <div className="pt-20 w-full bg-main-color" id="footer">
    <div className="min-h-[10vh] px-5 py-8 mx-auto flex items-center text-center  sm:flex-row flex-col">
      <p className="text-sm text-light-color sm:ml-4 sm:pl-4  sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © {new Date().getFullYear()} Asistencia Facial 
      </p>
    </div>
  </div>
  );
};

export default Footer;
