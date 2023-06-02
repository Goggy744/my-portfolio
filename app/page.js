import Head from 'next/head';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsDiscord, BsTwitter, BsGithub, BsMailbox2} from 'react-icons/bs';
import Image from 'next/image';
import room from '../public/room.png';
import wolf from '../public/wolf.png';
import tiger from '../public/tiger.png';
import landscape1 from '../public/landscape1.png';
import landscape2 from '../public/landscape2.png';
import anime1 from '../public/anime1.png';
import anime2 from '../public/anime2.png';
import pencils from '../public/pencils.png';
import avatar from '../public/avatar.png';
import website1 from '../public/website1.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hugo Barthelemy Portfolio</title>
        <meta name="description" content=''></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>

      <main>
        <section className='first-section min-h-screen min-w-fit'>
          <nav className='flex justify-between p-3'>
            <h1 className='text-xl'>Artistic Dev</h1>
            <button className='cursor-pointer text-3xl'> <AiOutlineMenu /></button>
          </nav>
          <div className='flex-row p-10 text-center'>
            <h1 className='text-3xl pt-5  text-primary-rose font-outfit font-black tracking-wide'>
            Unleash Your Online Potential With Custom Web Design
            </h1>
            <h3 className='text-base text-secondary-rose font-outfit'>
            As a solo developer, I bring your website to life from concept to launch, creating custom solutions that helps you achieve your business goals and grow your online presence.
            </h3>
            <button className='bg-primary-rose text-white p-2 my-5 rounded-lg font-outfit font-black tracking-wider'>
            Get in touch
            </button>
          </div>
          <div className='roomImage relative mx-auto w-72 h-72'>
            <Image src={room} layout='fill' objectFit='cover'></Image>
          </div>
          
        </section>
        <section className='min-h-screen min-w-fit'>
        <h2 className='text-xl text-secondary-rose text-center mb-5'>
        I offer services about
        </h2>
        <div className='flex justify-center'>
          <h2 className='text-xl font-black flex gap-5'>
            <span className='text-primary-rose underline'>
            Web Design
            </span>
            <span className='text-disabled'>
            AI Imagery
            </span>
          </h2>
        </div>
        <div className='relative w-10/12 h-62 mx-auto my-8'>
          <Image src={website1}></Image>
        </div>
        <div className='px-10 text-center'>
          <p className='text-secondary-rose'>
          <span className='text-primary-rose'>
          A minimalist and gamified flashcard web application 
          </span> 
          - the fun way to learn and remember! Create decks of digital flashcards with ease, and customise them with text.Study in game-like modes that challenge and engage you, and earn points as you progress.
          </p>
          <div className='flex justify-around my-5'>
            <div className='h-28 w-28 mt-3'>
            <Image className='mx-0' src={pencils}></Image>
            </div>
            <button className='bg-primary-rose text-white rounded-lg h-10 w-28 p-2 my-6'>Want Yours ?</button>
            <div className='h-28 w-28 mt-3'>
            <Image className='mx-2' src={avatar}></Image>
            </div>
          </div>
        </div>
        </section>
        <section className='min-h-screen min-w-fit'>
          <h2 className='text-xl text-secondary-rose text-center mb-5'>
          But also
          </h2>
          <div className='flex justify-center'>
            <h2 className='text-xl font-black flex gap-5'>
              <span className='text-disabled'>
              Web Design
              </span>
              <span className='text-primary-rose underline'>
              AI Imagery
              </span>
            </h2>
          </div>
          <div className='flex justify-center gap-5 my-8'>
            <div className='h-44 w-44'>
              <Image src={wolf}></Image>
            </div>
            <div className='h-44 w-44'>
              <Image src={tiger}></Image>
            </div>
          </div>
          <p className='text-center text-secondary-rose px-10'>
          <span className='text-primary-rose'>Colourful Portrait of Animal</span>
          - I can generate any of your ideals portrait of animals or mythical creatures
          </p>
          <div className='flex justify-center gap-5 my-8'>
            <div className='h-44 w-44'>
              <Image src={anime1}></Image>
            </div>
            <div className='h-44 w-44'>
              <Image src={anime2}></Image>
            </div>
          </div>
          <p className='text-center text-secondary-rose px-10'>
          <span className='text-primary-rose'>Colourful Portrait of Animal</span>
          - I can generate any of your ideals portrait of animals or mythical creatures
          </p>
          <div className='flex justify-center gap-5 my-8'>
            <div className='h-44 w-44'>
              <Image src={landscape1}></Image>
            </div>
            <div className='h-44 w-44'>
              <Image src={landscape2}></Image>
            </div>
          </div>
          <p className='text-center text-secondary-rose px-10'>
          <span className='text-primary-rose'>Colourful Portrait of Animal</span>
          - I can generate any of your ideals portrait of animals or mythical creatures
          </p>
        </section>
        <section className='min-h-screen min-w-fit'>
          <h2 className='text-2xl text-secondary-rose text-center pt-20 pr-20 pl-20'>About me</h2>
          <div className='text-center p-5'>
            <h1 className='text-3xl text-primary-rose'>Hi,</h1>
            <h1 className='text-2xl text-secondary-rose'><span className='text-primary-rose'>I am Hugo Barthelemy aka</span> Artistic Dev</h1>
            <p className='text-secondary-rose p-2'>
            I am a 19-year-old student currently pursuing a Bachelor's degree in Computer Science at the university. I've been honing my programming skills for 3+ years, be it web development, 2d game development or automation script. I approach every project with enthusiasm and a keen eye for detail, ensuring that my work is always of the highest quality.
            </p>
          </div>
          <div className='flex justify-center gap-10'>
            <button className='bg-primary-rose text-white rounded-lg h-10 p-2 my-5'>Get in touch</button>
            <button className='bg-primary-rose text-white rounded-lg h-10 p-2 my-5'>See resume</button>
          </div>
          <div className='flex justify-center gap-10 text-3xl text-primary-rose mt-8'>
            <a href="#"> <BsDiscord /> </a>
            <a href="#"> <BsTwitter /> </a>
            <a href="#"> <BsGithub /> </a>
          </div>
        </section>
        <section className='min-h-screen min-w-fit'>
          <h1 className='text-center text-primary-rose text-3xl p-3'>
          Don't Wait, Reach Out Today and Let's Get Started!
          </h1>
          <div className='bg-primary-rose flex items-center justify-around h-14 w-56 text-center rounded-lg m-auto my-3'>
            <BsMailbox2 className='text-3xl' />
            <div className='flex-row text-white'>
              <p>Mail me at</p>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className='bg-primary-rose flex items-center justify-around h-14 w-56 text-center rounded-lg m-auto my-3'>
            <BsDiscord className='text-3xl' />
            <div className='flex-row text-white'>
              <p>Contact me at</p>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className='bg-primary-rose flex items-center justify-around h-14 w-56 text-center rounded-lg m-auto my-3'>
            <BsTwitter className='text-3xl' />
            <div className='flex-row text-white'>
              <p>Write me at</p>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className='flex justify-center my-10'>
            <form action="" className='flex-row w-72 text-center'>
              <input className='rounded-md p-2 my-2 w-60 bg-slate-900 bg-opacity-70' type="text" placeholder='Full Name'/>
              <input className='rounded-md p-2 my-2 w-60 bg-slate-900 bg-opacity-70' type="email" placeholder='Email Address*'/>
              <textarea className='rounded-md p-2 my-2 h-48 w-72 bg-slate-900 bg-opacity-70' placeholder='Tell me about your project*'/>
              <button className='rounded-md bg-primary-rose p-2 w-20' type="submit">Send</button>
            </form>
          </div>
          
        </section>
      </main>
    </div>
  )
}
