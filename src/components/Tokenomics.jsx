"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { tokenomicsData } from "@/data/tokenomicsData";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    labels: tokenomicsData.map((item) => item.label),
    datasets: [
      {
        label: "Token Allocation",
        data: tokenomicsData.map((item) => item.percentage),
        backgroundColor: [
          "#FFD700",
          "#1e293b",
          "#0ea5e9",
          "#9333ea",
          "#f43f5e",
          "#10b981",
        ],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section id="tokenomics" className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-gold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tokenomics
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px]">
            <Pie data={data} options={options} />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white/10 p-5 rounded-lg border border-gold"
              >
                <h3 className="text-xl font-bold text-gold mb-1">{item.label}</h3>
                <p className="text-base text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
