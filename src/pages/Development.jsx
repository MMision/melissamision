import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

export default function Development() {
	return (
			<main className={styles.workPageGrid}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAboutGrid}>
						<h1>
							<span className={styles.workPageh1Color}>Development </span>
							pieces
						</h1>
						<p>
							I enjoy working on projects that engage and immerse audiences to interact with a webpage. I&apos;m fluent in javaScript (vanilla and React), PHP, CSS/SASS and HTML structure. I have experience developing in Wordpress, Shopify and Contently.
						</p>
					</div>
					<GalleryList />
				</section>
			</div>
		</main>
	);
}
