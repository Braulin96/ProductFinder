//components:
import Onboarding from "components/shared/Onboarding";
//images:
import { useData } from "components/hooks/DataContext";
import Woman from "assets/images/womanCategory.jpeg";
import Man from "assets/images/man.jpeg";

const Questions = () => {
  const { name, handleNameChange, category, handleOptionChange } = useData();

  const UserName = () => {
    return (
      <div className="text-secondary-gray">
        <label className="text-xl animate-fade animate-duration-[1s] animate-delay-[1s]">
          What is your first name?
        </label>
        <input
          placeholder="type your name..."
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mt-6 w-full rounded-lg border-2 border-tertiary-brown px-4 py-1.5 focus:ring-0 focus:outline-none focus:border-primary-blue animate-fade animate-duration-[1s] animate-delay-[1.4s]"
        />
      </div>
    );
  };

  const Category = () => {
    const answers = [
      { text: "Smartphones", value: 0 },
      { text: "Laptops", value: 1 },
      { text: "Fragrances", value: 2 },
      { text: "Skincare", value: 3 },
      { text: "Groceries", value: 4 },
      { text: "Home-decoration", value: 5 },
    ];

    return (
      <div className="flex flex-col text-secondary-gray">
        <label className="text-xl"> Thank you, {name}!</label>
        <p className="text-sm mt-2">
          Select the category of product that you are looking for.
        </p>
        {answers.map((answer) => (
          <button
            className={`mt-4 px-3 py-1.5 w-full rounded-lg border-2 border-tertiary-brown transition-all duration-700 ${
              category === answer.text
                ? "bg-primary-blue text-white"
                : "bg-white text-secondary-gray"
            }`}
            key={answer.value}
            onClick={() => handleOptionChange(answer.text)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    );
  };

  const elements = [
    { image: Man, description: UserName() },
    { image: Woman, description: Category() },
  ];
  return <Onboarding elements={elements} />;
};
export default Questions;
