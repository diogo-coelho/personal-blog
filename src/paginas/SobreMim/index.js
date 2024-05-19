import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

export default function SobreMim () {
	return (
		<PostModelo
			fotoCapa={fotoCapa}
			titulo="Sobre mim"
		>
			<h3 className={styles.subtitulo}>Olá, eu sou o Diogo!</h3>
			<p className={styles.paragrafo}></p>
			<p className={styles.paragrafo}></p>
			<p className={styles.paragrafo}></p>
			<p className={styles.paragrafo}></p>
			<p className={styles.paragrafo}></p>
			<p className={styles.paragrafo}></p>
		</PostModelo>
	)
}