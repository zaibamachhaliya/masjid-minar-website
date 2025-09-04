import styles from "../../styles/WorkPage.module.css";



function WorkVideoContainer() {
    return (
        <section className={styles.workvideos}>
            <div className={styles.workVideoContainer}>
                <div className={styles.workVideo}>
                    <div className={styles.gridItem}>
                        <iframe src="https://www.youtube.com/embed/hnsx9ml83xg" title="Factory of Harmain Minar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className={styles.gridItem}>
                        <iframe src="https://www.youtube.com/embed/-Iz2H2baF3c" title="Masjid Minar Erected By Harmain Minar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className={styles.gridItem}>
                        <iframe src="https://www.youtube.com/embed/8uro6EDoX2Q" title="Harmain Masjid Minar Work" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className={styles.gridItem}>
                        <iframe src="https://www.youtube.com/embed/uLGKOxh2hI4" title="Lighting Minar by Harmain Minar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkVideoContainer;