import React from 'react';
import AppLayout from '@/components/AppLayout/AppLayout';
import PageHeading from '@/components/PageHeading';
import { MdDoneAll, MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialSkype } from 'react-icons/ti';

const Contact = () => {

	return (
		<>
			<AppLayout container={true}>
				<PageHeading titleSpan={"contact"} title={"my"} backHeading={"get in touch"} />

				<div className='h-full'>

					<div className='flex lg:flex-row flex-col'>

						<div className='w-full lg:w-1/2 flex flex-col justify-center'>

							<div className='flex flex-col justify-start'>
								<div className='flex items-center'>
									<span>
									<MdEmail className='text-3xl mr-3 text-black p-1 bg-amber-500' />
									</span>
									<h6 className='text-white text-lg'>numankhalil27@gmail.com</h6>
								</div>
								<div className='text-amber-500 flex items-center my-6'>
									<FaPhoneSquareAlt className='text-5xl mr-3' />
									<h6 className='text-white text-lg'>+92-334-4952763</h6>
								</div>

							</div>


							<div className='py-4 flex items-center mt-12 lg:mb-0 mb-12'>
								<Link className='text-black hover:text-white transition-all duration-300 bg-amber-500 rounded p-1' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialSkype className='text-4xl' />
								</Link>

								<Link className='text-black hover:text-white transition-all duration-300 bg-amber-500 rounded p-1 mx-4' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialLinkedin className='text-4xl' />
								</Link>

								<Link className='text-black  hover:text-white transition-all duration-300 bg-amber-500 rounded p-1 mr-4' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialGithub className='text-4xl' />
								</Link>

								<Link className='text-black  hover:text-white transition-all duration-300 bg-amber-500 rounded p-1' target='_blank' href="https://join.skype.com/invite/yblBq8pr0JzM">
									<TiSocialFacebook className='text-4xl' />
								</Link>
							</div>


						</div>

						<div className='w-full lg:w-1/2 '>

							<form className="">
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label className="block mb-1" htmlFor="name">Name</label>
										<input className="w-full bg-transparent border-b  px-2 py-1" id="name" type="text" placeholder="" />
									</div>
									<div className="w-full md:w-1/2 px-3">
										<label className="block mb-1" htmlFor="email">Email</label>
										<input className="w-full bg-transparent border-b border-gray-300 focus:border-amber-500 px-2 py-1" id="email" type="email" placeholder="" />
									</div>
								</div>
								<div className="mb-6">
									<label className="block mb-1" htmlFor="subject">Subject</label>
									<input className="w-full bg-transparent border-b border-gray-300 focus:border-amber-500 px-2 py-1" id="subject" type="text" placeholder="" />
								</div>
								<div className="mb-6">
									<label className="block mb-1" htmlFor="message">Message</label>
									<textarea className="appearance-none w-full bg-transparent border-b border-gray-300 focus:border-amber-500 px-2 py-1" id="message" rows="6" placeholder=""></textarea>
								</div>

								<div className='flex items-center justify-center transition-all duration-200 relative border-b hover:bg-amber-500 hover:border-amber-500 rounded  py-1.5  cursor-pointer md:w-64 w-full'>
									<button type='button' className='flex items-center justify-center pl-4 py-1.5 font-bold text-lg'>
										Submit
									</button>
									<MdDoneAll className='ml-3 text-2xl' />
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
