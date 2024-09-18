import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden px-4'>
          <Image
            className='absolute bottom-0 shadow-2xl px-4 pt-4 block rounded-t-[40px] object-contain'
            src={project.image}
            fill
            sizes='(min-width: 1024px) 500px, (min-width: 640px) 400px'
            alt=''
            priority
          />
          {/* btn links */}
          <div className='flex gap-x-4'>
            {
              project.link && (
                <Link
                  target='_blank'
                  href={project.link}
                  className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                >
                  <Link2Icon className='text-white' />
                </Link>
              )
            }
            <Link
              target='_blank'
              href={project.github}
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <Github className='text-white' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className='h4 mb-1 text-center'>{project.name}</h4>
        <p className='text-muted-foreground text-lg text-center'>{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
