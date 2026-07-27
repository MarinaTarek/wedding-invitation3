import "./Gallery.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import bride from "../assets/images/bride.jpg";
import groom from "../assets/images/groom.jpg";
import church from "../assets/images/church.jpg";
import hero from "../assets/hero.png";

const images = [
  bride,
  groom,
  church,
  hero,
  bride,
  church
];

export default function Gallery() {

  const [selected, setSelected] = useState(null);

  return (

    <section className="gallery">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Moments
      </motion.h2>

      <p className="gallery-subtitle">
        Every picture tells a part of our story.
      </p>

      <div className="gallery-grid">

        {images.map((img, index) => (

          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(img)}
          >

            <img src={img} alt="" />

          </motion.div>

        ))}

      </div>

      <AnimatePresence>

        {selected && (

          <motion.div
            className="lightbox"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.img
              src={selected}
              alt=""
              initial={{ scale: .8 }}
              animate={{ scale: 1 }}
              exit={{ scale: .8 }}
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );
}