import react from '../assets/react.svg'
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import css from '../assets/css.png'
const Icon = () => {
  return (
    <div>
    <section>
 <div className="md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center p-10">
 <div className="w-24 md:w-30 xl:w-36">
  <img src={react} alt="React logo" className="w-full h-auto" />
</div>

<div className="w-24 md:w-30 xl:w-36">
  <img src={html} alt="React logo" className="w-full h-auto" />
</div>

<div className="w-24 md:w-30 xl:w-36">
  <img src={javascript} alt="React logo" className="w-full h-auto" />
</div>

<div className="w-24 md:w-30 xl:w-36">
  <img src={tailwind} alt="React logo" className="w-full h-auto" />
</div>

<div className="w-24 md:w-30 xl:w-36">
  <img src={css} alt="React logo" className="w-full h-auto" />
</div>

 </div>
</section>
 </div>
  )
}

export default Icon
