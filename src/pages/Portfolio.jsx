import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Work.module.css";

export default function Portfolio() {
	return (
		<main className={styles.workPage}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAbout}>
						<h1>
							You&apos;re welcome <br></br>to
							<span className={styles.workPageh1Color}>
								{" "}wander.
							</span>
						</h1>
						<p>
							Welcome to my portfolio site; thank you for visiting. There are three paths to explore. Development, Digital Illustration and Fine Arts. Development is largely websites and components I have developed.
Digital illustration has digital drawings/concepts and animations. Fine arts has an assortment of traditionally created paintings, sketches and illustrations.<br></br>
							<br></br>
							Relax, take your time among what path(s) you choose.
						</p>
					</div>
					<div className={styles.bannerContainer}>
						<Link reloadDocument to={"/development"}>
							<div className={styles.dev}>
								<h2>Development</h2>
							</div>
						</Link>
						<Link reloadDocument to={"/digitalIllustration"}>
							<div className={styles.pixelArt}>
								<h2>Digital Illustration</h2>
							</div>
						</Link>
						<Link reloadDocument to={"/fineArts"}>
							<div className={styles.fineArts}>
								<h2>Fine Arts</h2>
							</div>
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
}
