import Tag from "./Tag";

export default function ProjectCard({ data }) {
  return (
    <a
      style={{
        backgroundImage: `url(${data.image})`,
        aspectRatio: "16 / 9", // Enforce 16:9 ratio
        minHeight: "0", // Prevent overflow
      }}
      className={`w-full bg-no-repeat bg-cover bg-center text-center ${
        !data.link && "cursor-default"
      }`}
      href={data.link}
      target={data.link && "_blank"}
    >
      <div className="opacity-0 p-6 h-full w-full hover:opacity-100 flex items-center flex-col justify-around bg-blue-500 bg-opacity-70">
        <p className="font-title text-3xl">{data.name}</p>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {data.tags.map((tag, index) => (
            <Tag data={tag} key={index} />
          ))}
        </div>
      </div>
    </a>
  );
}
