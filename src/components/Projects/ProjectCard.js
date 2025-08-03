import Tag from "./Tag";

export default function ProjectCard({ data }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <a
        style={{
          backgroundImage: `url(${data.image})`,
          aspectRatio: "16 / 9",
        }}
        className={`w-full bg-no-repeat bg-cover bg-center block ${
          !data.link && "cursor-default"
        }`}
        href={data.link}
        target={data.link && "_blank"}
      >
        <span className="sr-only">{data.name}</span>
        </a>
      <div className="p-4">
        <h3 className="font-title text-xl font-bold text-gray-800 mb-2">{data.name}</h3>
        {data.description && (
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{data.description}</p>
        )}
        <div className="flex flex-row flex-wrap gap-2">
          {data.tags.map((tag, index) => (
            <Tag data={tag} key={index} />
          ))}
        </div>  
      </div>
    </div>
  );
}
