import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { Skill_data } from "../constants";
import TechnologiesProvider from "../components/ui/TechnologiesProvider";

const Experience = () => {
  useEffect(() => {
    document.title = "Portfolio | Experience";
  }, []);

  return (
    <section
      id="experience"
      className="bg-white dark:bg-black w-full h-screen pt-28 max-sm:pt-72"
    >
      <div className="max-w-screen-lg mx-auto p-4 text-black dark:text-white">
        {/* Header */}
        <div className="text-left">
          <p className="text-4xl font-bold border-b-4 border-black dark:border-white inline">
            Experience
          </p>
          <p className="py-6">Technologies I have worked with</p>
        </div>

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-7 items-center">
          {Skill_data.map((image, index) => (
            <TechnologiesProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              skillName={image.skill_name}
            />
          ))}
        </div>

        {/* Testimonials Section */}
        {/* <div className="mt-8">
        <h3 className="text-3xl font-bold text-left">Testimonials</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonials.map(({ id, name, avatar, feedback }) => (
            <div
              key={id}
              className="flex items-start gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <Image
                src={avatar}
                alt={`${name}'s avatar`}
                width={60}
                height={60}
                className="rounded-full object-cover"
                unoptimized
              />
              <div>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  {feedback}
                </p>
                <p className="mt-4 font-semibold text-right text-gray-900 dark:text-gray-100">
                  — {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Experience;
