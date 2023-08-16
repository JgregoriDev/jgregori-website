import Presentation from '@/components/Presentation/Presentation';
import SocialmediaNav from '@/components/SocialmediaNav';
import Tech from '@/components/Tech';
import TimeLine from '@/components/Timeline';
import Template from '@/pages/Template';
import Style from "./Home.module.scss";
import About from '@/components/About';
const Home: React.FC = () => {
  return (
    <Template>
      <Presentation></Presentation>
      <section className={Style.container}>
      <aside className={Style.container__aside}>
        <SocialmediaNav />
      </aside>
      <div className={Style.container__main}>
        <TimeLine />
        <About />
        <Tech />
      </div>
      <div className={Style.container__lside}></div>
      </section>
    </Template>
  )
}

export default Home