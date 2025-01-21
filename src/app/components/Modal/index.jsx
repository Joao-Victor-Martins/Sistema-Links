import styles from './Modal.module.css'
import LinkContact from '../LinkContact'

import Image from 'next/image'
import Link from 'next/link'

import LineHeader from '@/../../public/Line.svg'
import Monara from '@/../../public/MONARA.png'
import MariaVitoria from '@/../../public/MARIAVITORIA.jpeg'
import Francimaria from '@/../../public/FRANCIMARIA.png'
import Kalunga from '@/../../public/KALUNGA.png'
import Valquiria from '@/../../public/VALQUIRIA.jpeg'


export default function Modal({ titleModal, logoModal, urlLogoRedirect, textMenssage }) {
    return (
        <section className={styles.modal}>
            <div className={styles.container_geral}>
                <div className={styles.container_interno_one}>
                    <Link href={urlLogoRedirect}>
                        <Image className={styles.logo_image} src={logoModal} alt='Logo' />
                    </Link>
                    <h1>{titleModal}</h1>
                    <Image src={LineHeader} alt='Line of Header' />
                    <p>{textMenssage}</p>
                </div>
                <div className={styles.container_interno_two}>
                    <LinkContact 
                    linkAtendente={"https://wa.me/558396810138?text=Ol%C3%A1,%20Gostaria%20de%20Falar%20com%20Monara"} 
                    imageAtendente={Monara} 
                    nomeAtendente={"Monara"}
                    />
                    <LinkContact 
                    linkAtendente={"https://wa.me/558398880168?text=Ol%C3%A1,%20Gostaria%20de%20Falar%20com%20Maria%20Vitoria"} 
                    imageAtendente={MariaVitoria} 
                    nomeAtendente={"Maria Vitória"}
                    />
                    <LinkContact 
                    linkAtendente={"https://wa.me/558398910087?text=Ol%C3%A1,%20Gostaria%20de%20Falar%20com%20Francimaria"} 
                    imageAtendente={Francimaria} 
                    nomeAtendente={"Francimária"}
                    />
                    <LinkContact 
                    linkAtendente={"https://wa.me/558398910084?text=Ol%C3%A1,%20Gostaria%20de%20Falar%20com%20Kalunga"} 
                    imageAtendente={Kalunga} 
                    nomeAtendente={"Kalunga"}
                    />
                    <LinkContact 
                    linkAtendente={"https://wa.me/558398910094?text=Ol%C3%A1,%20Gostaria%20de%20Falar%20com%20Valquiria"} 
                    imageAtendente={Valquiria} 
                    nomeAtendente={"Valquiria"}
                    />
                </div>
            </div>
        </section>
    )
}