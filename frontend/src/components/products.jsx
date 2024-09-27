import { useEffect, useState } from "react";
import { fetchStartups } from "../services/api";
import Loader from "./Loading";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({
  startupId,
  image,
  brand,
  description,
  fundingGoal,
  amountRaised,
}) => {
  let progressPercentage = (amountRaised / fundingGoal) * 100;
  if (progressPercentage > 100) {
    progressPercentage = 100;
  }
  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-4">
      {/* <Link href="#" className="block"> */}
        <img
          src={image}
          alt={brand}
          className="h-52 w-full object-cover rounded-t-xl"
        />
        <div className="px-4 py-3">
          <span className="text-lg font-bold text-black truncate block capitalize">
            {brand}
          </span>
          <p className="text-gray-600 text-sm">{description}</p>

          <div className="my-3">
            <p className="text-gray-900 text-sm font-semibold">
              Funding Goal: ${fundingGoal}
            </p>
            <p className="text-blue-500 text-sm font-semibold">
              Amount Raised: ${amountRaised}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-right text-xs text-gray-500">
              {progressPercentage.toFixed(0)}% funded
            </p>
          </div>

          <Link to="/payment" state={{ startupId, brand }}>
            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Contribute Now
            </button>
          </Link>
        </div>
      {/* </Link> */}
    </div>
  );
};

const ProductGrid = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStartups = async () => {
      try {
        const data = await fetchStartups();
        setStartups(data); // Set the startups in state
      } catch (err) {
        setError("Failed to fetch startups");
        toast.error("An error occured in fetching api");
        console.log("error: ", err);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    getStartups();
  }, []);

  if (loading)
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="w-full h-[80vh] flex justify-center items-center text-center">
        <p className="text-red-500 text-3xl">Oops: {String(error)}</p>
      </div>
    );

  return (
    <div className="text-center p-10 pt-32">
      <h1 className="font-bold text-4xl mb-4">Top Startups in India in 2024</h1>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {startups.map((startup) => (
          <ProductCard
            key={startup._id}
            startupId={startup._id}
            image={startup.image}
            brand={startup.brand}
            description={startup.description}
            amountRaised={startup.amountRaised}
            fundingGoal={startup.fundingGoal}
          />
        ))}
      </section>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Check the full list of amazing startups.{" "}
          <Link to="#" className="font-semibold text-indigo-600">
            <span aria-hidden="true" className="absolute inset-0" />
            Browse more <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
