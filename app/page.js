import Link from 'next/link';
const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl text-shadow font-medium text-primary'>Tourism GPT</h1>
          <p className='py-6 text-lg leading-loose'>
          Tourism GPT: Elevate your language experience with an AI companion powered by OpenAI. Whether it's enriching your conversations, crafting compelling content, or exploring the world of tourism, we've got you covered!
          </p>
          <Link href='/chat' className='btn btn-primary '>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;