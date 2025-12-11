import styles from "./Card.module.css";
import image from "../../assets/images/image-equilibrium.jpg";
import iconEth from "../../assets/images/icon-ethereum.svg";
import avatar from "../../assets/images/image-avatar.png";
import clock from "../../assets/images/icon-clock.svg";

export default function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.card__imageWrap}>
        <img
          src={image}
          alt="Equilibrium"
          className={styles.card__image}
          loading="lazy"
        />
      </div>

      <div className={styles.card__body}>
        <h1 className={styles.card__title}>Equilibrium #3429</h1>
        <p className={styles.card__desc}>
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className={styles.card__meta}>
          <div className={styles.card__price}>
            <img
              src={iconEth}
              alt=""
              className={styles.card__icon__eth}
              aria-hidden="true"
            />
            <span className={styles.card__priceValue}>0.041 ETH</span>
          </div>

          <div className={styles.card__time}>
            <img
              src={clock}
              alt=""
              className={styles.card__icon__clock}
              aria-hidden="true"
            />
            <time dateTime="2025-12-14">3 days left</time>
          </div>
        </div>

        <div className={styles.card__divider} />

        <div className={styles.card__creator}>
          <img
            src={avatar}
            alt="Jules Wyvern"
            className={styles.card__avatar}
          />
          <div className={styles.card__creatorText}>
            <span className={styles.card__by}>Creation of</span>
            <span className={styles.card__creatorName}>Jules Wyvern</span>
          </div>
        </div>
      </div>
    </article>
  );
}
