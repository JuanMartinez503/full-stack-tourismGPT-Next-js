import Link from 'next/link';
const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl text-shadow font-medium text-primary'>GPT Tourism</h1>
          <p className='py-6 text-lg leading-loose'>
            GPT Tourism: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
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