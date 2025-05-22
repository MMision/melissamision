import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
// import ButtonLoad from "../components/ButtonLoad";

export default function Homepage() {
	// const loadButton = () => {
	// 	alert("Hello!");
	// };

	return (
		<main className={styles.homepage}>
			<PageNav />
			<section>
				<h1>
					<span className="homePageHeaderh1Spacing">Let&apos;s create</span>
					<br />
					<span className="homePageHeaderh1">something </span>
					<span className="highlightWord">captivating.</span>
				</h1>
				<Link to="/portfolio">
					<button className="button-btnStyle">
						{/* <ButtonLoad /> */}
						<div className={styles.btnText}>projects</div>
					</button>
				</Link>
			</section>
		</main>
	);
}
