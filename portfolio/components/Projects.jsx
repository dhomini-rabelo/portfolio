'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/projects/ecommerce.png',
    category: 'FULLSTACK',
    name: 'Remotely.io',
    description: 'Ecommerce Website',
    link: 'https://remotely-store.vercel.app',
    github: 'https://github.com/dhomini-rabelo/remotely-store',
  },
  {
    image: '/projects/gptcuts.png',
    category: 'FULLSTACK',
    name: 'GPTCuts',
    description: 'Shortcuts for chat GPT',
    link: 'http://gpt-cuts.s3-website-us-east-1.amazonaws.com/',
    github: 'https://github.com/dhomini-rabelo/gptcuts',
  },
  {
    image: '/projects/chat.png',
    category: 'FULLSTACK',
    name: 'Talky',
    description: 'Real time Chat',
    github: 'https://github.com/dhomini-rabelo/chat',
  },
  {
    image: '/projects/ignite-call.png',
    category: 'FULLSTACK',
    name: 'Ignite Call',
    description: 'Scheduling meetings',
    github: 'https://github.com/dhomini-rabelo/Ignite-Call',
  },
  {
    image: '/projects/ignite-shop.png',
    category: 'FULLSTACK',
    name: 'Ignite Shop',
    description: 'Ecommerce with Next',
    github: 'https://github.com/dhomini-rabelo/Estudos-Ignite-React-004',
  },
  {
    image: '/projects/github-blog.png',
    category: 'FULLSTACK',
    name: 'Github Blog',
    description: 'Blog with Github API',
    github: 'https://github.com/dhomini-rabelo/Estudos-Ignite-React-003?tab=readme-ov-file#projeto-do-curso-feito-individualmente',
  },
  {
    image: '/projects/coffee-delivery.png',
    category: 'FULLSTACK',
    name: 'Coffee Delivery',
    description: 'Coffee Shop with delivery',
    github: 'https://github.com/dhomini-rabelo/Estudos-Ignite-React-002?tab=readme-ov-file#projeto-do-curso-feito-individualmente',
  },
  {
    image: '/projects/code-portal.PNG',
    category: 'FULLSTACK',
    name: 'Code Portal',
    description: 'Blog',
    github: 'https://github.com/dhomini-rabelo/Blog',
  },
  {
    image: '/projects/roquet-q.PNG',
    category: 'FULLSTACK',
    name: 'Roquet.Q',
    description: 'Ask questions in real time',
    github: 'https://github.com/dhomini-rabelo/Roquet-q',
  },
  {
    image: '/projects/rest-full-control.png',
    category: 'API',
    name: 'Rest Full Control',
    description: 'Run queries in the API',
    github: 'https://github.com/dhomini-rabelo/Rest-Full-Control',
  },
  {
    image: '/projects/product-system.png',
    category: 'API',
    name: 'Product System',
    description: 'Product management',
    github: 'https://github.com/dhomini-rabelo/Product-System',
  },
  {
    image: '/projects/employees.PNG',
    category: 'API',
    name: 'Employee Management',
    description: 'Manage your employees',
    github: 'https://github.com/dhomini-rabelo/Employee-Management',
  },
];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section
      id='projects'
      className='container mx-auto mt-40'>
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        My Projects
      </h2>
      {/* tabs */}
      <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
        <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
          {categories.map((category, index) => {
            return (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'
              >
                {category}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {/* tabs content */}
        <div className='text-lg xl:mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filteredProjects.map((project, index) => {
            return (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </section>
    // </section>
  );
};

export default Projects;
