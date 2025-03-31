import logo from "../assets/8.jpg";

function Content({ chapterimg }) {
  return (
    <>
      {chapterimg &&
        chapterimg.map((item, index) => (
          <div key={index}>
            <img className="object-fill h-full w-full" src={item} alt={item} />
          </div>
        ))}
    </>
  );
}
export default Content;
