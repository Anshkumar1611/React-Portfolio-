import React from "react";
import Images from "../../../assets/images";
import Rectangular from "../buttons/Rectangular";
import { FaTelegramPlane, FaGithubSquare } from "react-icons/fa";

const projects = [
  {
    pic: Images.axar,
    name: "Axar Constructions",
    description:
      "An Australian Construction Company Website fully functional and ready to use for company.",
    site: "https://axar-ansh-kumar.netlify.app/",
    code: "https://github.com/Anshkumar1611/Axar",
  },
  {
    pic: Images.cocktails,
    name: "Cocktails",
    description:
      "A Website for getting your drinks and information of the ingridients used for making the drink",
    site: "https://stellar-froyo-3e69e0.netlify.app/",
    code: "https://github.com/Anshkumar1611/Cocktails",
  },
  {
    pic: Images.loremIpsum,
    name: "Paragraph Generator",
    description:
      "A Web Page to generate text of paragraphs. It generates random text paragraphs for random text use.",
    site: "https://keen-caramel-8ebe98.netlify.app/",
    code: "https://github.com/Anshkumar1611/Lorem-Ipsum-generator",
  },
  {
    pic: Images.expenseTracker,
    name: "Expense Tracker",
    description:
      "An app to keep track of your income and expenditure .It helps you to keep eye on your monthly expenses.",
    site: "https://iridescent-raindrop-d1d348.netlify.app/",
    code: "https://github.com/Anshkumar1611/Expense-Tracker-App",
  },
];
function ProjectCard() {
  return (
    <div className="flex flex-wrap justify-between place-content-center gap-y-8 sm:gap-y-12">
      {projects.map((project, index) => {
        return (
          <div className="flex w-[30rem] h-[18rem] relative rounded-xl border-2 border-dimBlue hover:border-secondary overflow-hidden">
            <img
              src={project.pic}
              alt="project"
              className="object-cover w-[100%] h-auto rounded-xl opacity-70 block"
              key={index}
            />
            <div className="opacity-0 hover:opacity-100 absolute inset-x-0 bottom-0 w-[100%] h-0 hover:h-[100%] transition-all flex cursor-pointer justify-center bg-gray-gradient rounded-xl items-center ">
              <div className="flex flex-col gap-8 px-14 ">
                <div className="flex flex-col gap-2 items-center">
                  <p className="font-semibold text-lg text-secondary">
                    {project.name}
                  </p>
                  <p>{project.description}</p>
                </div>
                <div className="flex flex-row justify-evenly  w-full">
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Rectangular
                      title={"view"}
                      icon={<FaTelegramPlane size={20} />}
                    />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Rectangular
                      title={"code"}
                      icon={<FaGithubSquare size={20} />}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
