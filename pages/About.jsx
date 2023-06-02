import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialSkype } from "react-icons/ti"
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si"
import { ImDownload } from "react-icons/im"
import ExperienceList from './About/ExperienceList';
import { MdWork } from "react-icons/md"
import { AiOutlineLine } from 'react-icons/ai';
import SkillCircle from '@/components/SkillCircle';

const About = () => {

  return (
    <AppLayout container={true}>
      <PageHeading title={"About"} titleSpan={"me"} backHeading={"Who i am"} />


      {/* About Section */}
      <div className='sm:pb-20 pb-8'>
        <div className='w-full flex lg:flex-row flex-col items-start'>
          <div className='w-full lg:w-1/2'>
            <h2 className='uppercase text-3xl font-bold'>personal info</h2>
            <div className='mt-8'>
              <p className='font-regular text-gray-400 flex items-center my-4'>Name: &nbsp; <span className='text-white'>Numan Khalil</span></p>
              <p className='font-regular text-gray-400 flex items-center my-4'>WhatsApp: &nbsp; <span className='text-white'>+92-334-495-2763</span></p>
              <p className='font-regular text-gray-400 flex items-center my-4'>Email: &nbsp; <span className='text-white'>numankhalil27@gmail.com</span></p>
              <p className='font-regular text-gray-400 flex items-center my-4'>Nationality: &nbsp; <span className='text-white'>Pakistani</span></p>
            </div>

            {/* Social */}

            <div className='xl:w-1/2 md:w-2/3 w-full lg:mx-0 mx-auto'>
              <h2 className='uppercase text-2xl font-bold lg:text-left text-center'>social</h2>
              <div className='border hover:border-amber-500 transition-all duration-300 my-2 py-4 flex items-center justify-around rounded-xl'>
                <Link className='text-gray-500 hover:scale-125 hover:text-[#00aff0] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <TiSocialSkype className='text-3xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-[#0072b1] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <TiSocialLinkedin className='text-4xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-white transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <TiSocialGithub className='text-4xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-[#4267B2] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <TiSocialFacebook className='text-4xl' />
                </Link>
              </div>
            </div>

            {/* Freelance */}
            <div className='xl:w-1/2 md:w-2/3 lg:mt-5 mt-8 lg:mb-0 mb-12 lg:mx-0 mx-auto'>
              <h2 className='uppercase text-2xl font-bold lg:text-left text-center'>freelance</h2>
              <div className='border hover:border-amber-500 transition-all duration-300 my-2 py-2 flex items-center justify-around rounded-xl'>
                <Link className='text-gray-500 hover:scale-125 hover:text-[#0caa00] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <SiUpwork className='text-3xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-[#1DBF73] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <SiFiverr className='text-5xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-[#29B2FE] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <SiFreelancer className='text-5xl' />
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/2 md:px-4 px-0 mx-auto'>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-8'>
              <div className='border rounded-xl flex flex-col justify-center pl-4 pb-3'>
                <h1 class="text-amber-500 font-bold text-8xl flex">2 <span className='-ml-2 -mt-4'>+</span> </h1>
                <h5 className='text-xl font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> years of experience</h5>
              </div>
              <div className='border rounded-xl flex flex-col justify-center pl-4 pb-3'>
                <h1 class="text-amber-500 font-bold text-8xl flex">20 <span className='-ml-2 -mt-4'>+</span> </h1>
                <h5 className='text-xl font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> completed projects</h5>
              </div>
              <div className='border rounded-xl flex flex-col justify-center pl-4 pr-4 pb-3'>
                <h1 class="text-amber-500 font-bold text-8xl flex">7<span className='-mt-4'>+</span> </h1>
                <h5 className='text-xl font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> happy clients </h5>
              </div>
              <div className='border rounded-xl flex flex-col justify-center pl-4 pr-4 pb-3'>
                <h1 class="text-amber-500 font-bold text-8xl flex">7<span className='-mt-4'>+</span> </h1>
                <h5 className='text-xl font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> happy clients </h5>
              </div>
            </div>
            <div className='d-flex py-10'>
              <div className='group hover:bg-amber-500 transition-all duration-700 relative border-2 mx-auto border-amber-500 py-1.5 rounded-full cursor-pointer w-64'>
                <button className='flex items-center justify-center pl-4 py-1.5 font-bold text-lg'>
                  Download Resume
                </button>
                <span className='bg-amber-500 p-4 rounded-full text-xl absolute right-0 top-0 transition-all duration-300 transform scale-100'>
                  <ImDownload />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='sm:pb-16 pb-28'>
        <h2 className='uppercase text-3xl font-bold text-center'>skills and expertise</h2>

        <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-16 gap-y-16'>

          {/* <div className='flex flex-col items-center justify-center'>
            <div className='skill_item hover:border-amber-500 transition-all duration-400 rounded-full w-32 h-32 flex items-center justify-center'>
              80%
            </div>
            <h3 className='mt-3'>HTML</h3>
          </div> */}

          <SkillCircle title="HTML" percentage={100} />
          <SkillCircle title="CSS" percentage={90} />
          <SkillCircle title="javascript" percentage={80} />
          <SkillCircle title="jquery" percentage={70} />
          <SkillCircle title="react js" percentage={85} />
          <SkillCircle title="next js" percentage={75} />
          <SkillCircle title="bootstrap" percentage={100} />
          <SkillCircle title="tailwind css" percentage={95} />
          <SkillCircle title="material ui" percentage={85} />
        </div>
      </div>


      {/* Resume*/}
      <div className='sm:pb-32 sm:mt-8 pb-28'>
        <h2 className='uppercase text-3xl font-bold text-center'>experience & education</h2>

        <div className='mt-16 grid lg:grid-cols-2 gird-cols-1 lg:px-0 px-2 gap-y-16'>
          {ExperienceList.map((item) => (
              <div className='w-full relative resume_item flex items-start'>
                <div className='bg-amber-500 z-30 p-3 -ml-4 rounded-full flex items-center justify-center'>
                  {item.icon}
                </div>
                <div className='sm:ml-6 ml-3 flex flex-col justify-end lg:pr-6 px-0'>
                  <div className='bg-gray-900 w-fit px-2 py-1 rounded-xl mb-3'>
                    <p className='uppercase text-xs font-semibold'>{item.tenure}</p>
                  </div>
                  <div className='w-full'>
                    <h2 className='uppercase sm:text-xl text-lg  font-bold mb-1'>{item.designation}</h2>
                    <p className='font-normal italic sm:text-sm text-xs pb-2 text-gray-400'>{item.company}</p>
                    <p className='sm:text-base text-sm mb-0'>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </AppLayout>
  );
};

export default About;
