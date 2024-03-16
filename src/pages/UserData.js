//components:
import Onboarding from "../components/shared/Onboarding";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//images:
import FitPeople from "assets/images/fitPeople.jpeg";
import Dashboard from "./DataConfirm";
import { useData } from "components/hooks/DataContext";
import Woman from "assets/images/secondWomen.jpeg";
import Fragrances from "assets/images/fragrances.jpeg";
import Family from "assets/images/family.jpeg";

const UserData = () => {
  const {
    name,
    handleNameChange,
    category,
    handleOptionChange,
    sex,
    handleSexChange,
    selectedDate,
    handleDateChange,
    age,
  } = useData();

  const UserName = () => {
    return (
      <div className="">
        <label className="text-xl"> What is you first name</label>
        <input
          placeholder="type your name..."
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mt-6 w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:ring-0 focus:outline-none focus:border-secondary-sage"
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
      { text: "Home-decorations", value: 4 },

    ];

    return (
      <div className="flex flex-col">
        <label className="text-xl"> Thanks {name}! Now your categorys.</label>
        <p className="text-sm mt-2">
          Select one option that is better in your case.
        </p>
        {answers.map((answer) => (
          <label
            className="mt-4 border border-black p-4 w-full"
            key={answer.value}
          >
            <input
              type="radio"
              name="category"
              value={answer.text}
              checked={category === answer.text}
              onChange={() => handleOptionChange(answer.text)}
            />
            {answer.text}
          </label>
        ))}
      </div>
    );
  };

  const PersonalData = () => {
    return (
      <div className="flex flex-col">
        <label className="text-xl">Select sex:</label>
        <div className="flex gap-x-8">
          <label className="inline-flex items-center mt-2">
            <input
              type="radio"
              value="male"
              checked={sex === "male"}
              onChange={handleSexChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="radio"
              value="female"
              checked={sex === "female"}
              onChange={handleSexChange}
              className="form-radio h-5 w-5 text-pink-600"
            />
            <span className="ml-2">Female</span>
          </label>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DemoItem label="Insert Your Birthday">
                <DatePicker
                  label="Insert Your Birthday"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <p>
          my name is {name} I want {category} I am a {sex} and I am {age} years
        </p>
      </div>
    );
  };

  const elements = [
    { image: Woman, description: UserName() },
    { image: FitPeople, description: Category() },
    // { image: FitPeople, description: PersonalData() },
  ];
  return (
    <div>
      <Onboarding elements={elements} />
      {/* <Dashboard/> */}
    </div>
  );
};
export default UserData;
