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
    <div className="sm:w-64 min-w-64 w-full h-72 rounded-lg flex flex-col relative overflow-hidden border-gray-100 shadow-md">
      <div
        className="my-auto h-full flex"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="bg-blue-500 w-full px-8 h-16  my-auto flex text-center justify-center">
        <p className="my-auto">{description}</p>
      </div>
    </div>
  );
};

const Welcome = () => {
  return (
    <div className="my-auto h-full bg-blue-500 py-32 flex">
      <div className="max-w-7xl bg-red-500 w-full text-white h-full mx-auto flex my-auto">
        <div className="m-auto text-center w-full">
          <p>
            Welcome to <br />
            <span className="text-primary-blue text-2xl font-semibold">
              My Fitness Grow
            </span>
          </p>
          <div className="mt-12 flex justify-center flex-wrap w-full md:px-24 gap-x-12 px-8 gap-y-8">
            {welcomeData.map((data, index) => (
              <Module
                key={index}
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
