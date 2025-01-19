import Modal from "./components/Modal"
import styles from './page.module.css'

import Logo from '@/../../public/LOGO DINIZ.png';

export default function Home() {
  return (
    <main className={styles.container_geral}>
      <Modal
        titleModal="Ótica Diniz - SB"
        logoModal={Logo}
        urlLogoRedirect="https://www.instagram.com/oticadinizsb/"
        textMenssage="Fale com uma de nossas atendentes" />
    </main>

  );
}
