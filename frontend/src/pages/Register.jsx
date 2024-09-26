import { useState } from "react";
import { createStartup } from "../services/api";

export default function Register() {
  const [startupData, setStartupData] = useState({
    // image: "",
    brand: "",
    description: "",
    fundingGoal: 0,
    amountRaised: 0,
  });
  console.log(startupData);
  // https://robohash.org/

  const submitHandler = async (e) => {
    e.preventDefault();
    // setStartupData({ ...startupData, image: startupData.brand });
    try {
      const data = await createStartup(startupData);
      console.log("data:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-40 pb-20 p-2">
      <form onSubmit={submitHandler} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Brand
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="xdCoder"
            required
            onChange={(e) =>
              setStartupData({ ...startupData, brand: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="description"
            required
            onChange={(e) =>
              setStartupData({ ...startupData, description: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Funding Goal
          </label>
          <input
            type="number"
            id="fundinggoal"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="25000"
            required
            onChange={(e) =>
              setStartupData({ ...startupData, fundingGoal: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
