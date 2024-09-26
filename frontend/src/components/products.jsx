import { useEffect, useState } from "react";
import { fetchStartups } from "../services/api";

const ProductCard = ({
  image,
  brand,
  description,
  fundingGoal,
  amountRaised,
}) => {
  const progressPercentage = (amountRaised / fundingGoal) * 100;

  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-4">
      <a href="#" className="block">
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
            <p className="text-gray-500 text-xs">
              Funding Goal: ${fundingGoal}
            </p>
            <p className="text-gray-500 text-xs">
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

          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Contribute Now
          </button>
        </div>
      </a>
    </div>
  );
};

const ProductGrid = () => {
  // const products = [
  //   {
  //     id: 1,
  //     image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=TechNova",
  //     brand: "TechNova",
  //     description:
  //       "A cutting-edge AI startup revolutionizing the tech industry.",
  //     fundingGoal: 50000,
  //     amountRaised: 20000,
  //   },
  //   {
  //     id: 2,
  //     brand: "EcoEnergy",
  //     description: "Providing affordable, sustainable energy solutions.",
  //     image: "https://via.placeholder.com/150/008000/FFFFFF?text=EcoEnergy",
  //     fundingGoal: 75000,
  //     amountRaised: 30000,
  //   },
  //   {
  //     id: 3,
  //     brand: "Healthify",
  //     description: "A healthcare platform connecting patients and doctors.",
  //     image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Healthify",
  //     fundingGoal: 60000,
  //     amountRaised: 45000,
  //   },
  //   {
  //     id: 4,
  //     brand: "EduVerse",
  //     description:
  //       "Creating immersive learning experiences using virtual reality.",
  //     image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=EduVerse",
  //     fundingGoal: 100000,
  //     amountRaised: 70000,
  //   },
  //   {
  //     id: 5,
  //     brand: "GreenGro",
  //     description:
  //       "Dedicated to urban farming and fresh produce accessibility.",
  //     image: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=GreenGro",
  //     fundingGoal: 30000,
  //     amountRaised: 15000,
  //   },
  // ];
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
        console.log("error: ", err);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    getStartups();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
          <a href="#" className="font-semibold text-indigo-600">
            <span aria-hidden="true" className="absolute inset-0" />
            Browse more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
