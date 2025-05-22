import { useState, useRef } from "react";
import { PropTypes } from "prop-types";
import GalleryData from "../data/GalleryData";
import styles from "../components/GalleryList.module.css";

function GalleryList() {
	return (
		<div className={styles.gallery}>
			<div className={styles.overlayNone}>
				{GalleryData.map((gallery) => (
					<Gallery galleryObj={gallery} key={gallery.name} />
				))}
			</div>
		</div>
	);
}

function Gallery({ galleryObj }) {
	const [isOpenModal, setIsOpenModal] = useState(null);

	Gallery.propTypes = {
		galleryObj: PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			imagePath: PropTypes.bool.isRequired,
		}),
	};
	const myRef = useRef(null);

	const executeScroll = () => {
		const returnScroll = document.body.scrollHeight / 2;
		// console.log(returnScroll);
		const test = document.getElementById("box");
		let testBox = test.getBoundingClientRect();
		let testBoxHeight = testBox.height;
		console.log(testBox);
		console.log(returnScroll);
		let testPreview = returnScroll - testBoxHeight;
		console.log(testPreview);
		let testAgain = returnScroll - window.scrollY;
		console.log(testAgain);
		let finalExam = returnScroll + testAgain;
		console.log(finalExam);
		test.scrollIntoView({ top: returnScroll, behavior: 'smooth', block: 'center'});
    // window.scrollTo({ top: testAgain, behavior: "smooth" });

// test.scrollIntoView({ behavior: 'smooth', block: 'center' });
// its currently centering div placement before it clicks open. need to find a way to center it AFTER modal opens
	}

	return (
		<div id="box"
			onClick={() => setIsOpenModal(!isOpenModal)}
			className={`${isOpenModal ? styles["overlay"] : styles["overlayNone"]}`}
		>
			<div
				className={`${
					isOpenModal
						? styles["modalBackground"]
						: styles["modalBackgroundNone"]
				}`}
				ref={myRef}
				onClick={executeScroll}


			>
				<img
					src={galleryObj.imagePath}
					alt={galleryObj.name}
					className={`${
						isOpenModal ? styles["galleryPrevModal"] : styles["galleryPrev"]
					}`}
				/>
				<div
					className={`${isOpenModal ? styles["modalText"] : styles["none"]}`}
				>
					<h2 className={`${isOpenModal ? styles["modalh2"] : styles["none"]}`}>
						{galleryObj.name}
					</h2>
					<p className={`${isOpenModal ? styles["modalp"] : styles["none"]}`}>
						{galleryObj.description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default GalleryList;
