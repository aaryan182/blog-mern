import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to know more about the owner?
            </h2>
            <p className='text-white-200 my-2'>
                Checkout my portfolio!!
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="http://tinyurl.com/ymkhco7b" target='_blank' rel='noopener noreferrer'>
                    Aaryan Bajaj
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.turing.com/blog/wp-content/uploads/2023/07/Tips-for-Developing-a-Strong-Software-Engineer-Portfolio-scaled.jpg" />
        </div>
    </div>
  )
}