import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {ReactNode} from 'react'
import Styles from './Template.module.scss';
type MyComponentProps = {
  children: ReactNode;
};
const Template: React.FC<MyComponentProps> = ({children}) => {
  return (
    <>
    <Header />
    <main className={Styles.main}>
    {children}
    </main>
    <Footer />
    </>
  )
}


export default Template