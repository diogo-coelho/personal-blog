import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner () {
	return (
		<div className={styles.banner}>
			<div className={styles.apresentacao}>
				<h1 className={styles.titulo}>Olá, mundo!</h1>
				<p className={styles.paragrafo}>
					Lorem Ipsum depois eu preencho isso aqui
				</p>
			</div>

			<div className={styles.imagens}>
				<img className={styles.circyloColorido} src={circuloColorido} aria-hidden="true" />
				<img className={styles.minhaFoto} src="https://github.com/diogo-coelho.png" alt="Minha foto pessoal" />
			</div>
		</div>
	)
}