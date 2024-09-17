import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Ryan Davis',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+012 345 6789',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'youremail@email.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 10 Mar, 1998',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Master on Computer Science',
  },
  {
    icon: <HomeIcon size={20} />,
    text: '321 Blue Avenue, NY, USA',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Example University',
        qualification: 'Bachelor of Science',
        years: '2015 - 2018',
      },
      {
        university: 'Another University',
        qualification: 'Master of Arts',
        years: '2019 - 2021',
      },
      {
        university: 'Yet Another University',
        qualification: 'Ph.D in Computer Science',
        years: '2021 - 2025',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'ABC Inc.',
        role: 'Software Engineer',
        years: '2018 - 2020',
      },
      {
        company: 'XYZ Corporation',
        role: 'Senior Developer',
        years: '2020 - 2022',
      },
      {
        company: 'Tech Innovators',
        role: 'Lead Developer',
        years: '2022 - Present',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

const About = () => {
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto px-40'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='grid grid-cols-1 px-16 xl:grid-cols-5 xl:px-0 gap-x-8'>
          <div
            className='col-span-3'
          >
            <h3 className='h3 mb-4 text-center'>
              Introduction
            </h3>
            <p className='text-justify py-4'>
              I started programming in 2018 in technical high school, and I have been working as a programmer since the end of 2021. I have
              always been passionate about technology and programming, initially fascinated by the power that programming alone gives us,
              and later by the way we design, build, and maintain software, applying the necessary business rules and impacting our client's
              life. I am also driven by challenges, work, and goals, and I am constantly developing myself with projects and courses to become
              a more well-qualified and prepared professional, in addition to adding knowledge to my team.
            </p>
            <div className='flex flex-col gap-y-2'>
              <div className='text-primary'>Languages</div>
              <div className='border-b border-border'></div>
              <div>
                English, Portuguese.
              </div>
            </div>
          </div>
          <div className='col-span-2 text-justify'>
            <h3 className='h3 mb-4 text-center'>
              Skills
            </h3>
            <div className='border-b border-border mb-4'></div>
            <div>
              <strong className='text-foreground pr-1 inline-block'>Client Side:</strong>
              <span className='subtitle'>
                Javascript, Typescript, React, React Native, Next, Axios, Zod, Zustand, react-hook-form,
                Tailwind, and Styled-components.
              </span>
            </div>
            <div>
              <strong className='text-foreground pr-1 inline-block'>Server Side:</strong>
              <span className='subtitle'>
                Python, Typescript, Node, Nest, Express, Flask, FastAPI, Django, Redis, Mongo, Postgres, Pytest, Jest, Docker,
                and AWS (DynamoDB, SQS, Cognito, Lambda, etc.).
              </span>
            </div>
            <div>
              <strong className='text-foreground pr-1 inline-block'>Concepts:</strong>
              <span className='subtitle'>
                Clean Code, SOLID, Design Patterns, DDD, Clean
                Arch, and TDD.
              </span>
            </div>
            <div>
              <strong className='text-foreground pr-1 inline-block'>Soft Skills:</strong>
              <span className='subtitle'>
                Adaptability, Agile methodology, Analytical thinking, Communication, Fast learning, High code standardization,
                Organization, Proactivity, and Team management.
              </span>
            </div>
            {/* <Tabs defaultValue='skills'> */}
            {/* <TabsList className='w-full mx-auto grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
              </TabsList> */}
            {/* tabs content */}
            {/* <div className='text-lg mt-4 xl:mt-8'> */}
            {/* personal */}
            {/* <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, French, Spanish, Italian</div>
                    </div>
                  </div>
                </TabsContent> */}
            {/* qualifications */}
            {/* skills */}
            {/* <div className='text-center xl:text-left'> */}
            {/* skills */}
            {/* <div className='mb-16'> */}
            {/* <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                  <div className='border-b border-border mb-4'></div> */}
            {/* skill list */}
            {/* <div>
                    {getData(skillData, 'skills').data.map(
                      (item, index) => {
                        const { name } = item;
                        return (
                          <div
                            className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='font-medium'>{name}</div>
                          </div>
                        );
                      }
                    )}
                  </div> */}
            {/* </div> */}
            {/* tools */}
            {/* <div>
                  <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                    Tools
                  </h4>
                  <div className='border-b border-border mb-4'></div>
                  <div className='flex gap-x-8 justify-center xl:justify-start'>
                    {getData(skillData, 'tools').data.map((item, index) => {
                      const { imgPath } = item;
                      return (
                        <div key={index}>
                          <Image
                            src={imgPath}
                            width={48}
                            height={48}
                            alt=''
                            priority
                          />
                        </div>
                      );
                    })}
                  </div>
                </div> */}
            {/* </div> */}
            {/* <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
