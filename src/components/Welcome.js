import FitPeople from "../assets/images/fitPeople.jpeg";
import FitWoman from "../assets/images/fitWoman.webp";

const welcomeData = [
  {
    image: FitPeople,
    description: "Ready for some Wins? Start tracking, it is easy!",
  },
  {
    image: FitWoman,
    description: "second message!",
  },
  {
    image: FitPeople,
    description: "Third message",
  },
];

const Module = ({ backgroundImage, description }) => {
  return (
    <div className="w-64 h-72 rounded-lg flex flex-col relative overflow-hidden border-gray-100 shadow-md">
      <div
        className="my-auto h-full flex"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="bg-blue-500 w-full py-2 px-8">
        <p>{description}</p>
      </div>
    </div>
  );
};

const Welcome = () => {
  return (
    <div
      className="my-auto h-full bg-blue-500 "
      style={{ height: "100vh", maxHeight: "800px" }}
    >
      <div className="max-w-7xl bg-red-500 w-full text-white h-full mx-auto flex">
        <div className="m-auto text-center">
          <p>
            Welcome to <br />
            <span className="text-primary-blue text-2xl font-semibold">
              My Fitness Grow
            </span>
          </p>
          <div className="mt-12 flex justify-between gap-x-24">
            {welcomeData.map((data, index) => (
              <Module
                backgroundImage={data.image}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
