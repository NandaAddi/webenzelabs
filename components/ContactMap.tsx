"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -30, name: "Malang", coordinates: [112.6326, -7.9666] }
];

export default function ContactMap() {
  return (
    <div className="w-full h-full bg-slate-50 relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
          center: [118, -2] // Center on Indonesia
        }}
        className="w-full h-full"
      >
        <ZoomableGroup center={[118, -2]} zoom={1} maxZoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#c1dcffff"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: "#c1dcffff",
                      outline: "none"
                    },
                    hover: {
                      fill: "#91baf0ff",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#91baf0ff",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates as [number, number]}>
              <motion.g
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {/* Pulsing Aura */}
                <motion.circle
                  r={12}
                  fill="#0a2b53ff"
                  fillOpacity={0.2}
                  stroke="#0a2b53ff"
                  strokeWidth={1}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <circle r={4} fill="#0a2b53ff" stroke="#fff" strokeWidth={2} />
              </motion.g>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fill: "#475569",
                  fontSize: "12px",
                  fontWeight: "bold",
                  pointerEvents: "none"
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none border border-slate-100/50 rounded-[3rem]">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-80" />
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent opacity-40" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent opacity-40" />
      </div>
    </div>
  );
}


