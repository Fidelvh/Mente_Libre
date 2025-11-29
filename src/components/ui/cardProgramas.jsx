import { Link } from "react-router-dom";

export default function CardPrograma({ title, description, image, link, reverse }) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center my-10 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover rounded-xl shadow-lg"
      />

      <div>
        <h3 className="text-2xl font-bold text-indigo-300">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>

        <Link
          to={link}
          className="inline-block mt-4 px-6 py-2 border border-indigo-400 text-indigo-300 rounded-lg hover:bg-indigo-500 hover:text-white transition"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
