import "./Countdown.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {

    const weddingDate = new Date("2026-08-09T19:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {

        const timer = setInterval(() => {

            const now = new Date().getTime();

            const distance = weddingDate - now;

            setTimeLeft({

                days: Math.floor(distance / (1000 * 60 * 60 * 24)),

                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),

                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),

                seconds: Math.floor((distance % (1000 * 60)) / 1000)

            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <motion.section

            className="countdown"

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: .8 }}

        >

            <p className="count-small">

                Counting the Days

            </p>

            <h2>

                Until Our Wedding

            </h2>

            <div className="count-grid">

  {[
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ].map((item, index) => (

    <motion.div
      key={item.label}
      className="time-box"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <h3>{String(item.value ?? 0).padStart(2, "0")}</h3>
      <span>{item.label}</span>
    </motion.div>

  ))}

</div>

        </motion.section>

    );

}