import React from 'react';
import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import { MdDoneAll, MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialSkype } from 'react-icons/ti';
import IMAGES from '@/assets/images';

const Contact = () => {

	return (
		<>
			<AppLayout container={true}>
				<PageHeading titleSpan={"contact"} title={"my"} backHeading={"get in touch"} />

				<div className='h-full xl:pb-8 lg:pb-16 pb-32'>

					<div className='flex lg:flex-row flex-col'>

						<div className='w-full lg:w-1/2 flex flex-col justify-center'>
							<div className='mb-10 xl:w-2/3 xl:px-0 md:pr-5'>
								<h2 className='sm:text-xl text-gray-900 text-base sm:tracking-wider font-medium'>Ready to transform your vision into reality? Reach out and let's create something amazing!</h2>
							</div>
							<div className='flex flex-col justify-start sm:tracking-wider'>
								<div className='flex items-center'>
									<Image className='mr-4 sm:w-12 w-10' src={IMAGES.PHONE} alt="phone" />
									<div>
										<p className='font-bold text-[#0C3A53] sm:text-base text-sm'>Call Me</p>
										<h6 className='text-gray-900 sm:text-lg text-base'>+92-334-4952763</h6>
									</div>
								</div>
								<div className='flex items-center mt-4'>
									<Image className='mr-4 sm:w-12 w-10' src={IMAGES.MAIL} alt="phone" />
									<div>
										<p className='font-bold text-[#0C3A53] sm:text-base text-sm'>Email</p>
										<h6 className='text-gray-900 sm:text-lg text-base'>numankhalil27@gmail.com</h6>
									</div>
								</div>
							</div>


							<div className='py-4 flex items-center sm:justify-start justify-around mt-10 lg:mb-0 mb-12'>
								<Link className='text-black hover:text-white transition-all duration-300 bg-gray-900 hover:bg-[#0EBBB2] rounded-full p-2.5' target='_blank'
									href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialSkype className='text-2xl text-white' />
								</Link>
								<Link className='text-black hover:text-white transition-all duration-300 sm:mx-2 bg-gray-900 hover:bg-[#0EBBB2] rounded-full p-2.5' target='_blank'
									href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialLinkedin className='text-2xl text-white' />
								</Link>
								<Link className='text-black hover:text-white transition-all duration-300 sm:mr-2 bg-gray-900 hover:bg-[#0EBBB2] rounded-full p-2.5' target='_blank'
									href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialGithub className='text-2xl text-white' />
								</Link>
								<Link className='text-black hover:text-white transition-all duration-300 bg-gray-900 hover:bg-[#0EBBB2] rounded-full p-2.5' target='_blank'
									href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialFacebook className='text-2xl text-white' />
								</Link>

							</div>

						</div>

						<div className='w-full lg:w-1/2 '>

							<form className="">
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label className="block mb-1 font-semibold text-gray-900" htmlFor="name">Name</label>
										<input className="w-full bg-transparent text-gray-900 border-b-4 border-[#0EBBB2] px-2 py-1" id="name" type="text" placeholder="" />
									</div>
									<div className="w-full md:w-1/2 px-3">
										<label className="block mb-1 font-semibold text-gray-900" htmlFor="email">Email</label>
										<input className="w-full text-gray-900 bg-transparent border-b-4 border-[#0EBBB2] px-2 py-1" id="email" type="email" placeholder="" />
									</div>
								</div>
								<div className="mb-6">
									<label className="block mb-1 font-semibold text-gray-900" htmlFor="subject">Subject</label>
									<input className="w-full text-gray-900 bg-transparent border-b-4 border-[#0EBBB2] px-2 py-1" id="subject" type="text" placeholder="" />
								</div>
								<div className="mb-6">
									<label className="block mb-1 font-semibold text-gray-900" htmlFor="message">Message</label>
									<textarea className="appearance-none text-gray-900 w-full bg-transparent border-b-4 border-[#0EBBB2] px-2 py-1" id="message" rows="6" placeholder=""></textarea>
								</div>

								<div className='flex items-center justify-center group transition-all duration-200 relative border-b-4 border-[#0EBBB2] hover:bg-[#0EBBB2] hover:border-[#0EBBB2] rounded py-1 cursor-pointer md:w-64 w-full'>
									<button type='button' className='flex items-center justify-center pl-4 sm:py-1 font-bold group-hover:text-white text-gray-900 text-lg'>
										Submit
									</button>
									<MdDoneAll className='ml-3 group-hover:text-white text-2xl text-gray-900' />
								</div>

							</form>

						</div>
					</div>
				</div>
			</AppLayout>
		</>
	);
};

export default Contact;
