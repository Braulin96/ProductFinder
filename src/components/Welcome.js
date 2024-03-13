//components:
import { Link } from "react-router-dom";
//images:
import FitPeople from "assets/images/fitPeople.jpeg";
import FitWoman from "assets/images/fitWoman.webp";

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

      <div className="bg-white w-full px-8 h-16  my-auto flex text-center justify-center">
        <p className="my-auto text-secondary-gray">{description}</p>
      </div>
    </div>
  );
};

const Welcome = () => {
  return (
    <div className="my-auto h-full bg-tertiary-gray lg:py-32 md:py-24 sm:py-12 py-8 flex text-secondary-gray">
      <div className="max-w-7xl w-full h-full mx-auto flex my-auto">
        <div className="m-auto text-center w-full">
          <p className="text-2xl">
            Welcome to <br />
            <span className="text-4xl font-semibold">
              My Fitness <span className="text-primary-blue">Grow</span>
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
          <div className="px-8 mt-12">
            <Link
              to="contact"
              className="bg-primary-blue rounded-lg sm:w-64 min-w-64 w-full py-1.5 text-white font-semibold text-lg"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
