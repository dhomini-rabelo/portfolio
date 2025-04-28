import { Briefcase } from "lucide-react";

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "Ph.D in Computer Science",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "OXBYKES",
        time: "08/2024 - PRESENT",
        description: `• E-commerce web development using agile methodology, building the front-end with React and Next. Back-end with Typescript and Express, in addition to other tools like Docker, Postgres, Git, etc.

• Significantly increased company revenue by creating key functionalities, such as selling bicycles that were currently rented. Furthermore, I facilitated and improved sales and rental processes, which included the creation of a new plan model.

• Developed dozens of new functionalities and features to improve workflows, increase security, and facilitate processes for customers, sellers, and system administrators, always maintaining high-quality, well-written, readable, and easily maintainable code.

• Removed bugs through refactoring and the creation of very verbose code, aiming to clearly define how the system should function and ensure that business rules are applied.

• Resolved many security issues in the project, such as data being returned incorrectly or processes and functionalities with serious errors. I was also responsible for adding identity verification to the system, bringing greater confidence to our sellers.

• Worked very closely with the company director, which enabled me to contribute to the initial planning of new functionalities in the project, taking into account current behavior, practicality, better user experience, and a solid solution that will remain in the system for a long time.

• Worked closely with the support team, making corrections, improving the administration system, answering questions, and collecting feedback whenever necessary.`,
      },
      {
        company: "ASTRA TECHNOLOGIES",
        time: "09/2023 - 08/2024",
        description: ` • Worked on 2 projects using agile methodology. One involved web and mobile development, building front-end and mobile
 with React, React Native, SAAS, Redux, etc. Back-end with Python in a serverless application, along with other AWS tools.
 The other is web-only, and we used Node for the back-end and Next for the front-end; this project is in its initial stage.
 • Developed the data backup system for all the most important tables, using AWS services such as Dynamo, S3, SQS, and
 Lambdas. Analyzing data structures, service costs, and optimizing queries with indexes.
 • Helped improve and enhance the high code standardization we have in the system, where the code does not bear
 anyone's mark. The high code standardization helped us immensely increase demand delivery, both in development speed
 and in the number of sequential feature approvals without the need for corrections.
 • To achieve a high delivery quantity, high code quality is also necessary. I achieved this by identifying development
 standards, business rules, how administrators (Superior Industries) and clients used the system, that is, understanding the
 domain of the application (DDD). This helps build more maintainable, semantic, and performant software.
 • I also applied my domain knowledge by creating semantic tests developed with TDD.
 • Developed hundreds of tests for our lambdas, often testing large lambdas that involved a significant amount of data and
 complexity, which really took me to another level in test creation and development.
 • Developed a very important integration/feature in the company's V2 system that was presented at a technology fair.
 • In this company, effective communication is necessary; we have presentations a few times a year, and I presented once.`,
      },
      {
        company: "INSPECTO AGRI",
        time: "05/2022 - 09/2023",
        description: ` • Web development using agile methodology, building front-end with HTML, CSS, JavaScript, and jQuery. Back-end with
 Python, using the frameworks Django and Django Rest Framework, along with other tools like Docker, Postgres, Git, etc.
 • I joined the company when the system was in a very early stage and was able to develop features that helped bring in
 dozens of clients, as well as improve, refactor, and maintain existing features.
• Worked on integrating with various third-party systems to create features. For this, I was responsible for designing the
 functionality from start to finish, creating domains, objects, protocols, workflows, and data structures, as well as how the
 layout would be designed based on this, considering the user's experience and needs. Some integrations required meetings
 with external companies.
 • With the arrival of new clients, I worked on some mass data migrations, handling over 20,000 records. Some clients had an
 enormous amount of data, so I adapted several components to work with pagination, such as selects, tables, and Kanban,
 using pure JavaScript which required more complex logic. I also created and optimized dozens of queries on the back-end.
 • For large features, I coordinated a team, creating, assigning, and assisting with tasks, always in a friendly environment
 where everyone was aware of the client's needs, and consistently presenting results, planning, and showing next steps to
 the superior.
 • Dealt with extremely complex domains, large data structures, many entities, laws, and much more, needing to learn from
 domain experts within my company and others. This was extremely important for my professional development and
 knowledge in DDD.`,
      },
      {
        company: "FREENLANCER PROJECT",
        time: "12/2021 - 03/2022",
        description: ` • Development of a website with forms, several pages, an authentication system, and administration using technologies such as
 Django, HTML, CSS, JavaScript, and Python. The website is hosted on Heroku with a custom domain.`,
      },
      {
        company: "PERSONAL PROJECTS",
        time: "07/2018 - PRESENT",
        description: ` •  I create projects to train, practice and improve my programming skills and the technologies I use. My projects are available on
 my Github profile. You can access one of my projects in section below.`,
      },
    ],
  },
];

const Experience = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section id="experiences" className="py-12 xl:py-24">
      <div className="container flex flex-col gap-y-6 xl:px-24">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Experiences
        </h2>
        <div className="flex gap-x-4 items-center text-[22px] text-primary">
          <Briefcase />
          <h4 className="capitalize font-medium">History</h4>
        </div>
        <div className="flex flex-col gap-y-8">
          {getData(qualificationData, "experience").data.map((item, index) => {
            const { company, time, description } = item;
            return (
              <div className="flex gap-x-8 w-full" key={index}>
                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]"></div>
                </div>
                <div>
                  <div className="font-semibold text-xl leading-none mb-2">
                    {company}
                  </div>
                  <div className="text-lg leading-none text-muted-foreground mb-4">
                    {time}
                  </div>
                  <div className="text-base font-medium text-justify flex flex-col gap-y-4">
                    {description
                      .split("•")
                      .slice(1)
                      .map((item, index) => {
                        return <p key={index}> • {item}</p>;
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
