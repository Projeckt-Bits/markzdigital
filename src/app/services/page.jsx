import React from "react";
import NavBar from "../components/navbar/page";
import styles from "./services.module.scss";

const servicesData = [
  {
    title: "Ad Management",
    description:
      "Optimize your ad campaigns with tailored strategies to maximize ROI.",
    link: "/services/ad-management",
    image: "/images/ad-management.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with data-driven digital marketing strategies.",
    link: "/services/digital-marketing",
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "Web Design",
    description:
      "Create stunning, user-friendly websites that captivate your audience.",
    link: "/services/web-design",
    image: "/images/web-design.jpg",
  },
  {
    title: "Web Development",
    description:
      "Get robust and scalable web solutions customized to your needs.",
    link: "/services/web-development",
    image: "/images/web-development.jpg",
  },
  {
    title: "Lead Generation",
    description: "Generate quality leads to fuel your business growth.",
    link: "/services/lead-generation",
    image: "/images/lead-generation.jpg",
  },
  {
    title: "SEO Design",
    description:
      "Boost your website's visibility with our expert SEO services.",
    link: "/services/seo-design",
    image: "/images/seo-design.jpg",
  },
  {
    title: "Content Creation",
    description: "Engage your audience with high-quality, compelling content.",
    link: "/services/content-creation",
    image: "/images/content-creation.jpg",
  },
  {
    title: "Social Media Management",
    description: "Build your brand presence across social media platforms.",
    link: "/services/social-media-management",
    image: "/images/social-media-management.jpg",
  },
];

function Services() {
  return (
    <>
      <NavBar />
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.fadeIn}>Our Services</h1>
            <p className={styles.fadeIn}>
              Explore the wide range of services we offer to help grow your
              business.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {servicesData.map((service, index) => (
              <div
                className={`${styles.card} ${styles.slideIn}`}
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.cardImage}
                />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href={service.link} className={styles.button}>
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
