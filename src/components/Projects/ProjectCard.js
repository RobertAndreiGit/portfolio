import Tag from "./Tag";

export default function ProjectCard({ data }) {
  const hasLink = data.link;
  
  const CardContent = () => (
    <>
      <div
        style={{
          backgroundImage: `url(${data.image})`,
          aspectRatio: "16 / 9",
        }}
        className="w-full bg-no-repeat bg-cover bg-center relative overflow-hidden"
      >
        {hasLink ? (
          <>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 ease-out"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </div>
      <div className={`p-4 transition-colors duration-300 ${
        hasLink ? 'group-hover:bg-gray-50' : 'group-hover:bg-white'
      }`}>
        <h3 className={`font-title text-xl font-bold mb-2 transition-colors duration-300 ${
          hasLink 
            ? 'text-gray-800 group-hover:text-blue-600' 
            : 'text-gray-700 group-hover:text-gray-900'
        }`}>{data.name}</h3>
        {data.description && (
          <p className={`text-sm mb-3 leading-relaxed transition-colors duration-300 ${
            hasLink 
              ? 'text-gray-600 group-hover:text-gray-700' 
              : 'text-gray-500 group-hover:text-gray-600'
          }`}>{data.description}</p>
        )}
        <div className="flex flex-row flex-wrap gap-2 transition-all duration-300">
          {data.tags.map((tag, index) => (
            <Tag data={tag} key={index} hasProjectLink={hasLink} />
          ))}
        </div>  
      </div>
    </>
  );

  if (hasLink) {
    return (
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out group transform-gpu hover:shadow-2xl hover:-translate-y-1 cursor-pointer block"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out group transform-gpu hover:shadow-xl hover:bg-gray-50 cursor-default">
      <CardContent />
    </div>
  );
}
