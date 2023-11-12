import AppLayout from '/components/AppLayout/AppLayout';
import PageHeading from '/components/PageHeading';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialSkype } from "react-icons/ti"
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si"
import { ImDownload } from "react-icons/im"
import ExperienceList from '../components/JSON/ExperienceList';
import { AiOutlineLine } from 'react-icons/ai';

const stacks = [
  {
    skill: 'HTML',
  },
  {
    skill: 'CSS',
  },
  {
    skill: 'JavaScript',
  },
  {
    skill: 'JQuery',
  },
  {
    skill: 'React JS',
  },
  {
    skill: 'Next JS',
  },
  {
    skill: 'Tailwind CSS',
  },
  {
    skill: 'Bootstrap',
  },
  {
    skill: 'Material UI',
  },
  {
    skill: 'Tailwind Material',
  },
  {
    skill: 'AntDesign',
  },
  {
    skill: 'GitHub',
  },
  {
    skill: 'GitLab',
  },
  {
    skill: 'BitBucket',
  },
  {
    skill: 'ESLint',
  },
  {
    skill: 'Jira',
  },
  {
    skill: 'Trello',
  },
  {
    skill: 'Redux',
  },
  {
    skill: 'Redux-Toolkit',
  },
  {
    skill: 'Axios',
  },
  {
    skill: 'Node JS',
  },
  {
    skill: 'MongoDB',
  },
  {
    skill: 'Figma',
  },
]

const About = () => {

  return (
    <AppLayout container={true}>
      <PageHeading title={"About"} titleSpan={"me"} backHeading={"Who i am"} />


      {/* About Section */}
      <div className='sm:pb-20 pb-8'>
        <div className='w-full flex lg:flex-row flex-col items-start'>
          <div className='w-full lg:w-1/2'>
            <h2 className='uppercase text-3xl font-bold text-gray-900'>personal info</h2>
            <div className='mt-8'>
              <p className='font-regular text-gray-900 flex items-center my-4'>Name: &nbsp; <span className='text-teal-900 text-lg font-semibold'>Numan Khalil</span></p>
              <p className='font-regular text-gray-900 flex items-center my-4'>WhatsApp: &nbsp; <span className='text-teal-900 text-lg font-semibold'>+92-334-495-2763</span></p>
              <p className='font-regular text-gray-900 flex items-center my-4'>Email: &nbsp; <span className='text-teal-900 text-lg font-semibold'>numankhalil27@gmail.com</span></p>
              <p className='font-regular text-gray-900 flex items-center my-4'>Nationality: &nbsp; <span className='text-teal-900 text-lg font-semibold'>Pakistani</span></p>
            </div>

            {/* Social */}

            <div className='xl:w-1/2 md:w-2/3 w-full lg:mx-0 mx-auto'>
              <h2 className='uppercase text-2xl font-bold text-gray-900 lg:text-left text-center'>
                social & freelance</h2>
              <div className='hover:border-[#0EBBB2] border-transparent border-2 shadow-2xl transition-all duration-300 my-2 py-4 flex items-center justify-around rounded-xl'>
                <Link className='text-gray-500 hover:scale-125 hover:text-[#00aff0] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <TiSocialSkype className='text-3xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-[#0072b1] transition-all duration-300' target='_blank' href="https://www.linkedin.com/in/numan-khalil-4836b851/">
                  <TiSocialLinkedin className='text-4xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-teal-900 transition-all duration-300' target='_blank' href="https://github.com/numan27?tab=repositories">
                  <TiSocialGithub className='text-4xl' />
                </Link>

                {/* <Link className='text-gray-500 hover:scale-125 hover:text-[#4267B2] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <TiSocialFacebook className='text-4xl' />
                </Link> */}

                <Link className='text-gray-500 hover:scale-125 hover:text-[#0caa00] transition-all duration-300' target='_blank' href="https://www.upwork.com/freelancers/~0179ed5683d6d65fc3">
                  <SiUpwork className='text-3xl' />
                </Link>
              </div>
            </div>

            {/* Freelance */}
            {/* <div className='xl:w-1/2 md:w-2/3 lg:mt-5 mt-8 lg:mb-0 mb-12 lg:mx-0 mx-auto'>
              <h2 className='uppercase text-2xl font-bold text-gray-900 lg:text-left text-center'>freelance</h2>
              <div className='hover:border-[#0EBBB2] border-transparent border-2 shadow-2xl transition-all duration-300 my-2 py-2 flex items-center justify-around rounded-xl'>
              

                <Link className='text-gray-500 hover:scale-125 hover:text-[#1DBF73] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <SiFiverr className='text-5xl' />
                </Link>

                <Link className='text-gray-500 hover:scale-125 hover:text-[#29B2FE] transition-all duration-300' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
                  <SiFreelancer className='text-5xl' />
                </Link>
              </div>
            </div> */}
          </div>

          <div className='w-full md:w-1/2 md:px-4 px-0 mx-auto'>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-8'>
              <div className='shadow-2xl hover:border-[#0EBBB2] border-transparent border-2 rounded-xl flex flex-col justify-center pl-4 pb-3'>
                <h1 class="text-[#0EBBB2] font-bold text-8xl flex">3 <span className='-ml-2 -mt-4'>+</span> </h1>
                <h5 className='text-xl text-black font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> years of experience</h5>
              </div>
              <div className='shadow-2xl hover:border-[#0EBBB2] border-transparent border-2 rounded-xl flex flex-col justify-center pl-4 pb-3'>
                <h1 class="text-[#0EBBB2] font-bold text-8xl flex">20 <span className='-ml-2 -mt-4'>+</span> </h1>
                <h5 className='text-xl text-black font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> Upwork Projects</h5>
              </div>
              <div className='shadow-2xl hover:border-[#0EBBB2] border-transparent border-2 rounded-xl flex flex-col justify-center pl-4 pr-4 pb-3'>
                <h1 class="text-[#0EBBB2] font-bold text-8xl flex">12<span className='-mt-4'>+</span> </h1>
                <h5 className='text-xl text-black font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> Professional Projects </h5>
              </div>
              <div className='shadow-2xl hover:border-[#0EBBB2] border-transparent border-2 rounded-xl flex flex-col justify-center pl-4 pr-4 pb-3'>
                <h1 class="text-[#0EBBB2] font-bold text-8xl flex">10<span className='-mt-4'>+</span> </h1>
                <h5 className='text-xl text-black font-semibold uppercase flex'><AiOutlineLine className='text-7xl -mt-6' /> WordPress Projects </h5>
              </div>
            </div>
            <div className='d-flex py-10'>
              <div className='group hover:bg-[#0EBBB2] transition-all duration-700 relative border-2 mx-auto border-[#0EBBB2] py-1.5 rounded-xl cursor-pointer w-64'>
                <button className='flex items-center justify-center group-hover:text-white text-[#0EBBB2] pl-4 py-1.5 font-bold text-lg'>
                  Download Resume
                </button>
                <span className='bg-[#0EBBB2] p-4 rounded-xl text-xl absolute right-0 top-0 transition-all duration-300 transform scale-100'>
                  <ImDownload />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='sm:pb-16 pb-28'>
        <h2 className='uppercase text-3xl font-bold text-center text-gray-900'>skills and expertise</h2>

        <div className="shadow-2xl rounded-xl pt-16 pb-8 sm:px-8 px-4 px-0">
          <div className='flex sm:justify-start justify-center flex-wrap items-center mb-6'>
            {stacks.map((data) => (
              <div className='custom_shadow group hover:bg-[#0EBBB2] cursor-pointer transition duration-500 sm:w-fit w-full py-1 px-6 rounded-lg mb-4 mx-3'>
                <h3 className='text-xl font-semibold group-hover:text-white text-[#0EBBB2]'>{data.skill}</h3>
              </div>
            ))}
          </div>

          {/* <div className='border border-b border-r-0 border-l-0 border-[#0C3A53] border-double'>
            <div className='border border-[#0C3A53] border-r-0 border-l-0 border-2 mt-0.5'></div>
          </div>

          <div className='mt-12 flex sm:justify-start justify-center flex-wrap items-center'>
            {skills.map((item) => (
              <div className='border border-[#0C3A53] group hover:bg-[#0C3A53] border-5 cursor-pointer transition duration-500 sm:w-fit w-full py-1 px-6 rounded-lg mb-4 mx-3'>
                <h3 className='text-lg group-hover:text-white font-bold text-[#0C3A53]'>{item.skill}</h3>
              </div>
            ))}
          </div> */}
        </div>
      </div>


      {/* Resume*/}
      <div className='sm:pb-32 sm:mt-8 pb-28'>
        <h2 className='uppercase text-3xl font-bold text-gray-900 text-center'>experience & education</h2>

        <div className='mt-16 grid lg:grid-cols-2 gird-cols-1 lg:px-0 px-2 gap-y-16'>
          {ExperienceList.map((item) => (
            <div className='w-full relative resume_item flex items-start'>
              <div className='bg-[#0EBBB2] z-30 p-3 -ml-4 rounded-full flex items-center justify-center'>
                {item.icon}
              </div>
              <div className='sm:ml-6 ml-3 flex flex-col justify-end lg:pr-6 px-0'>
                <div className='bg-[#0C3A53] w-fit px-2 py-1 rounded-lg mb-3'>
                  <p className='uppercase text-xs font-semibold'>{item.tenure}</p>
                </div>
                <div className='w-full'>
                  <h2 className='uppercase sm:text-xl text-lg text-[#0C3A53] font-bold mb-1'>{item.designation}</h2>
                  <p className='font-semibold italic sm:text-sm text-xs pb-2 text-gray-600'>{item.company}</p>
                  <p className='sm:text-lg text-gray-800 text-base mt-2 mb-0'>{item.desc}</p>
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
