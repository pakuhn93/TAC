import styles from './home.module.css';

export default function Home(){
    // Header Navigation
    const navHeader = [
        {
            text: "Tabletop Adventuring Club, LLC (TAC)",
            url: "/TAC"
        },
    ];

    // Primary Navigation
    const navPrimary = [
        {
            text: "Announcements UPDATED",
            url: "/TAC/announcements"
        },
    ];

    // Announcement Information
    const navAnnouncements = [
        {
            title: "Announcement One",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eleifend congue. Nullam sed viverra lorem, ut accumsan justo. In hendrerit libero ipsum, ut vehicula elit tempor et. Praesent semper vulputate lectus non convallis. Cras finibus, dolor quis hendrerit placerat, nibh ipsum imperdiet orci, non bibendum libero sapien quis massa. Quisque vulputate accumsan nisi nec bibendum. Phasellus lobortis, odio sit amet sagittis suscipit, nulla enim aliquet risus, eu elementum tellus magna sed dolor. Donec tristique tincidunt blandit. In id aliquet tellus. Proin accumsan pellentesque congue. Aliquam pellentesque eu diam id imperdiet.
            
            Cras vestibulum enim id nunc auctor, nec pretium mauris ullamcorper. Curabitur lacus tellus, malesuada eu rutrum id, consectetur malesuada odio. Donec volutpat orci nec libero semper, nec ultricies quam volutpat. Suspendisse vel felis eget lectus congue fermentum. In vitae fermentum ante. Morbi ac ipsum libero. Morbi laoreet porttitor bibendum. Cras vulputate imperdiet sapien, ut scelerisque justo dictum ac. Phasellus efficitur, lacus iaculis consectetur consequat, nulla quam tincidunt dolor, ut convallis quam sapien luctus velit. Donec posuere diam vitae ligula aliquet pharetra. Integer ex massa, consequat vel nisi ut, consectetur egestas tellus. Etiam vitae tellus vel turpis egestas commodo vel nec est. Nullam at dolor nec est feugiat varius.`,
            url: "/TAC",
            image: "",
        },
        {
            title: "Announcement Two",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eleifend congue. Nullam sed viverra lorem, ut accumsan justo. In hendrerit libero ipsum, ut vehicula elit tempor et. Praesent semper vulputate lectus non convallis. Cras finibus, dolor quis hendrerit placerat, nibh ipsum imperdiet orci, non bibendum libero sapien quis massa. Quisque vulputate accumsan nisi nec bibendum. Phasellus lobortis, odio sit amet sagittis suscipit, nulla enim aliquet risus, eu elementum tellus magna sed dolor. Donec tristique tincidunt blandit. In id aliquet tellus. Proin accumsan pellentesque congue. Aliquam pellentesque eu diam id imperdiet.
            
            Cras vestibulum enim id nunc auctor, nec pretium mauris ullamcorper. Curabitur lacus tellus, malesuada eu rutrum id, consectetur malesuada odio. Donec volutpat orci nec libero semper, nec ultricies quam volutpat. Suspendisse vel felis eget lectus congue fermentum. In vitae fermentum ante. Morbi ac ipsum libero. Morbi laoreet porttitor bibendum. Cras vulputate imperdiet sapien, ut scelerisque justo dictum ac. Phasellus efficitur, lacus iaculis consectetur consequat, nulla quam tincidunt dolor, ut convallis quam sapien luctus velit. Donec posuere diam vitae ligula aliquet pharetra. Integer ex massa, consequat vel nisi ut, consectetur egestas tellus. Etiam vitae tellus vel turpis egestas commodo vel nec est. Nullam at dolor nec est feugiat varius.`,
            url: "/TAC",
            image: "",
        },
        {
            title: "Announcement Three",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eleifend congue. Nullam sed viverra lorem, ut accumsan justo. In hendrerit libero ipsum, ut vehicula elit tempor et. Praesent semper vulputate lectus non convallis. Cras finibus, dolor quis hendrerit placerat, nibh ipsum imperdiet orci, non bibendum libero sapien quis massa. Quisque vulputate accumsan nisi nec bibendum. Phasellus lobortis, odio sit amet sagittis suscipit, nulla enim aliquet risus, eu elementum tellus magna sed dolor. Donec tristique tincidunt blandit. In id aliquet tellus. Proin accumsan pellentesque congue. Aliquam pellentesque eu diam id imperdiet.
            
            Cras vestibulum enim id nunc auctor, nec pretium mauris ullamcorper. Curabitur lacus tellus, malesuada eu rutrum id, consectetur malesuada odio. Donec volutpat orci nec libero semper, nec ultricies quam volutpat. Suspendisse vel felis eget lectus congue fermentum. In vitae fermentum ante. Morbi ac ipsum libero. Morbi laoreet porttitor bibendum. Cras vulputate imperdiet sapien, ut scelerisque justo dictum ac. Phasellus efficitur, lacus iaculis consectetur consequat, nulla quam tincidunt dolor, ut convallis quam sapien luctus velit. Donec posuere diam vitae ligula aliquet pharetra. Integer ex massa, consequat vel nisi ut, consectetur egestas tellus. Etiam vitae tellus vel turpis egestas commodo vel nec est. Nullam at dolor nec est feugiat varius.`,
            url: "/TAC",
            image: "",
        },
        {
            title: "Announcement Four",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eleifend congue. Nullam sed viverra lorem, ut accumsan justo. In hendrerit libero ipsum, ut vehicula elit tempor et. Praesent semper vulputate lectus non convallis. Cras finibus, dolor quis hendrerit placerat, nibh ipsum imperdiet orci, non bibendum libero sapien quis massa. Quisque vulputate accumsan nisi nec bibendum. Phasellus lobortis, odio sit amet sagittis suscipit, nulla enim aliquet risus, eu elementum tellus magna sed dolor. Donec tristique tincidunt blandit. In id aliquet tellus. Proin accumsan pellentesque congue. Aliquam pellentesque eu diam id imperdiet.
            
            Cras vestibulum enim id nunc auctor, nec pretium mauris ullamcorper. Curabitur lacus tellus, malesuada eu rutrum id, consectetur malesuada odio. Donec volutpat orci nec libero semper, nec ultricies quam volutpat. Suspendisse vel felis eget lectus congue fermentum. In vitae fermentum ante. Morbi ac ipsum libero. Morbi laoreet porttitor bibendum. Cras vulputate imperdiet sapien, ut scelerisque justo dictum ac. Phasellus efficitur, lacus iaculis consectetur consequat, nulla quam tincidunt dolor, ut convallis quam sapien luctus velit. Donec posuere diam vitae ligula aliquet pharetra. Integer ex massa, consequat vel nisi ut, consectetur egestas tellus. Etiam vitae tellus vel turpis egestas commodo vel nec est. Nullam at dolor nec est feugiat varius.`,
            url: "/TAC",
            image: "",
        },
        {
            title: "Announcement Five",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eleifend congue. Nullam sed viverra lorem, ut accumsan justo. In hendrerit libero ipsum, ut vehicula elit tempor et. Praesent semper vulputate lectus non convallis. Cras finibus, dolor quis hendrerit placerat, nibh ipsum imperdiet orci, non bibendum libero sapien quis massa. Quisque vulputate accumsan nisi nec bibendum. Phasellus lobortis, odio sit amet sagittis suscipit, nulla enim aliquet risus, eu elementum tellus magna sed dolor. Donec tristique tincidunt blandit. In id aliquet tellus. Proin accumsan pellentesque congue. Aliquam pellentesque eu diam id imperdiet.
            
            Cras vestibulum enim id nunc auctor, nec pretium mauris ullamcorper. Curabitur lacus tellus, malesuada eu rutrum id, consectetur malesuada odio. Donec volutpat orci nec libero semper, nec ultricies quam volutpat. Suspendisse vel felis eget lectus congue fermentum. In vitae fermentum ante. Morbi ac ipsum libero. Morbi laoreet porttitor bibendum. Cras vulputate imperdiet sapien, ut scelerisque justo dictum ac. Phasellus efficitur, lacus iaculis consectetur consequat, nulla quam tincidunt dolor, ut convallis quam sapien luctus velit. Donec posuere diam vitae ligula aliquet pharetra. Integer ex massa, consequat vel nisi ut, consectetur egestas tellus. Etiam vitae tellus vel turpis egestas commodo vel nec est. Nullam at dolor nec est feugiat varius.`,
            url: "/TAC",
            image: "",
        },
        {
            title: "Announcement Six",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eleifend congue. Nullam sed viverra lorem, ut accumsan justo. In hendrerit libero ipsum, ut vehicula elit tempor et. Praesent semper vulputate lectus non convallis. Cras finibus, dolor quis hendrerit placerat, nibh ipsum imperdiet orci, non bibendum libero sapien quis massa. Quisque vulputate accumsan nisi nec bibendum. Phasellus lobortis, odio sit amet sagittis suscipit, nulla enim aliquet risus, eu elementum tellus magna sed dolor. Donec tristique tincidunt blandit. In id aliquet tellus. Proin accumsan pellentesque congue. Aliquam pellentesque eu diam id imperdiet.
            
            Cras vestibulum enim id nunc auctor, nec pretium mauris ullamcorper. Curabitur lacus tellus, malesuada eu rutrum id, consectetur malesuada odio. Donec volutpat orci nec libero semper, nec ultricies quam volutpat. Suspendisse vel felis eget lectus congue fermentum. In vitae fermentum ante. Morbi ac ipsum libero. Morbi laoreet porttitor bibendum. Cras vulputate imperdiet sapien, ut scelerisque justo dictum ac. Phasellus efficitur, lacus iaculis consectetur consequat, nulla quam tincidunt dolor, ut convallis quam sapien luctus velit. Donec posuere diam vitae ligula aliquet pharetra. Integer ex massa, consequat vel nisi ut, consectetur egestas tellus. Etiam vitae tellus vel turpis egestas commodo vel nec est. Nullam at dolor nec est feugiat varius.`,
            url: "/TAC",
            image: "",
        },
    ]

    // Secondary Navigation
    const navSecondary = [
        {
            text: "Game Signup",
            url: "/TAC/gamesignup",
            info: "Sign up for a game."
        },
        {
            text: "Information",
            url: "/TAC/information",
            info: "Information about our organization."
        },
        {
            text: "Lore",
            url: "/TAC/lore",
            info: "Uncover the lore of Primordia."
        },
        {
            text: "Map",
            url: "/TAC/map",
            info: "View the map of Primordia."
        },
        {
            text: "Merch",
            url: "/TAC/merch",
            info: "Check out our merch."
        },
    ];

    // Footer Navigation
    const navFooter = [
        {
            text: "Footer",
            url: "/TAC",
        },
        {
            text: "Footer",
            url: "/TAC",
        },
        {
            text: "Footer",
            url: "/TAC",
        },
        {
            text: "Footer",
            url: "/TAC",
        },
    ];

    return (
        <>
            {/* Header Container */}
            <section className={styles.contHeader}>
                {
                    navHeader.map((btn, index) => {
                        return (
                            <a href={btn.url} key={`btnHeader_${index}`} className={styles.btnHeader}>
                                {btn.text != undefined ? `${btn.text}` : "Loading..."}
                            </a>
                        );
                    })
                }
            </section>

            {/* Body Container */}
            <section className={styles.contMain}>

                {/* Left Container */}
                <section className={styles.contLeft}>

                    {/* Announcements Header */}
                    {
                        navPrimary.map((element, index) => {
                            return (
                                <a key={`btnPrimary_${index}`}className={styles.btnPrimary} href={element.url}>
                                    {element.text}
                                </a>
                            );
                        })
                    }

                    {/* Announcements Container */}
                    <section className={styles.contAnnouncements}>
                        {
                            navAnnouncements.map((announcement, index) => {
                                return (
                                    <>
                                        <div key={`announcement_${index}`} className={styles.announcement}>
                                            <a className={styles.announcementHeader} href={announcement.url}>
                                                {announcement.title}
                                            </a>
                                            <p className={styles.announcementContent}>
                                                {announcement.content}
                                            </p>
                                            <hr></hr>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </section>
                </section>

                {/* Right Container */}
                <div className={styles.contRight}>
                    {
                        navSecondary.map((btn, index) => {
                            return (
                                <a href={btn.url} key={`btnSecondary_${index}`}className={styles.btnSecondary} style={{height:`${Math.round((1/navSecondary.length)*100)}%`}}>
                                    {`${btn.text}`}
                                </a>
                            );
                        })
                    }
                </div>
            </section>

            {/* Footer Container*/}
            <footer className={styles.contFooter}>
                <div className={styles.contFooterLeft}>
                    <p className={styles.textFooter}>
                        Some sort of copyright text or something.
                    </p>
                    <p className={styles.textFooter}>
                        Special thanks to all my friends and stuff.
                    </p>
                </div>

                <div className={styles.contFooterRight}>
                    {
                        navFooter.map((btn, index) => {
                            return (
                                <a href={btn.url} key={`btnFooter_${index}`} className={styles.btnFooter}>
                                    {`${btn.text}`}
                                </a>
                            );
                        })
                    }
                </div>
            </footer>
        </>
    );
}