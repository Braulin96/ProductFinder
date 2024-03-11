import FitPeople from "../assets/images/fitPeople.jpeg";

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
          <div className="mt-12 flex justify-between gap-x-4">
            <div className="w-64 h-72 rounded-lg flex flex-col relative overflow-hidden border-gray-100 shadow-md ">
              <div
                className="my-auto h-full flex"
                style={{
                  backgroundImage: `url(${FitPeople})`,
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="bg-blue-500 w-full py-2 px-8">
                <p >
                  Ready for some Wins?  Start tracking, it is easy!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
