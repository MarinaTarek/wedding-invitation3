import "./Envelope.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Envelope({ onFinish }) {

    useEffect(() => {

        const timer = setTimeout(() => {
            onFinish();
        }, 2800);

        return () => clearTimeout(timer);

    }, [onFinish]);

    return (

        <section className="envelope-page">

            <div className="envelope">

                {/* Wax Seal */}
                <div className="wax-seal">
                    <span>M&H</span>
                </div>

                <motion.div
                    className="letter"
                    initial={{ y: 120 }}
                    animate={{ y: -110 }}
                    transition={{
                        delay: .9,
                        duration: 1.2
                    }}
                >

                    <h2>Wedding Invitation</h2>

                    <p>Maryam & Ahmed</p>

                </motion.div>

                <motion.div
                    className="flap"
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -180 }}
                    transition={{
                        duration: .8
                    }}
                />

                <div className="body" />

            </div>

        </section>

    );

}