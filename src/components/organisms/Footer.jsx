import { Contact } from "../data/Contact";

const Footer = () => {
  return (
    <footer className="bg-slate-900 p-4 w-full flex flex-col items-center h-80 sm:h-60">
      <div className="textH3 h-full flex flex-col items-center gap-2">
        <h3 id="contact">Contact Me</h3>
        <div className="w-full justify-between h-30 flex flex-col items-center sm:flex-row gap-2">
          {Contact.map((item) => {
            return (
              <div className="w-70 flex items-center  sm:flex-row justify-between items-center border-solid border-1 border-white w-40 h-20 p-2 ">
                <a
                  key={item.id}
                  target="_blank"
                  href={item.link}
                  className="hover flex justify-between items-center w-full bg-gray-50 text-black"
                >
                  <img src={item.img} alt={item.name} className="w-10" />{" "}
                  {item.icon} {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <p>&copy; 2026 Rara Angellica Stefani Putri</p>
    </footer>
  );
};

export default Footer;
