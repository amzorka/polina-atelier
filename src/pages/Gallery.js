import chessp from '../images/Gallery/ChessTable/prev.png'
import chess1 from '../images/Gallery/ChessTable/1.png'
import chess2 from '../images/Gallery/ChessTable/2.png'
import chess3 from '../images/Gallery/ChessTable/3.png'
import chess4 from '../images/Gallery/ChessTable/4.png'

import deskp from '../images/Gallery/ScarletDesk/prev.png'
import desk1 from '../images/Gallery/ScarletDesk/1.png'
import desk2 from '../images/Gallery/ScarletDesk/2.png'
import desk3 from '../images/Gallery/ScarletDesk/3.png'
import desk4 from '../images/Gallery/ScarletDesk/4.png'

import mirrorp from '../images/Gallery/WhiteMirror/prev.png'
import mirror1 from '../images/Gallery/WhiteMirror/1.png'
import mirror2 from '../images/Gallery/WhiteMirror/2.png'

import tablep from '../images/Gallery/GreenTable/prev.png'
import table1 from '../images/Gallery/GreenTable/1.png'
import table2 from '../images/Gallery/GreenTable/2.png'
import table3 from '../images/Gallery/GreenTable/3.png'
import table4 from '../images/Gallery/GreenTable/4.png'

import poufp from '../images/Gallery/SnowPouf/prev.png'
import pouf1 from '../images/Gallery/SnowPouf/1.png'
import pouf2 from '../images/Gallery/SnowPouf/2.png'
import pouf3 from '../images/Gallery/SnowPouf/3.png'

import standp from '../images/Gallery/CrimsonNightstand/prev.png'
import stand1 from '../images/Gallery/CrimsonNightstand/1.png'
import stand2 from '../images/Gallery/CrimsonNightstand/2.png'
import stand3 from '../images/Gallery/CrimsonNightstand/3.png'

import consolep from '../images/Gallery/EbonyConsole/prev.png'
import console1 from '../images/Gallery/EbonyConsole/1.png'
import console2 from '../images/Gallery/EbonyConsole/2.png'
import console3 from '../images/Gallery/EbonyConsole/3.png'

import chestp from '../images/Gallery/BronzeChest/prev.png'
import chest1 from '../images/Gallery/BronzeChest/1.png'
import chest2 from '../images/Gallery/BronzeChest/2.png'
import chest3 from '../images/Gallery/BronzeChest/3.png'

import shelfp from '../images/Gallery/SnowShelf/prev.png'
import shelf1 from '../images/Gallery/SnowShelf/1.png'
import shelf2 from '../images/Gallery/SnowShelf/2.png'

import sinkp from '../images/Gallery/MidnightSink/prev.png'
import sink1 from '../images/Gallery/MidnightSink/1.png'
import sink2 from '../images/Gallery/MidnightSink/2.png'
import sink3 from '../images/Gallery/MidnightSink/3.png'
import sink4 from '../images/Gallery/MidnightSink/4.png'

import cubep from '../images/Gallery/IvoryCube/prev.png'
import cube1 from '../images/Gallery/IvoryCube/1.png'
import cube2 from '../images/Gallery/IvoryCube/2.png'

import breezep from '../images/Gallery/SeaBreeze/prev.png'
import breeze1 from '../images/Gallery/SeaBreeze/1.png'
import breeze2 from '../images/Gallery/SeaBreeze/2.png'

import wardrobep from '../images/Gallery/MilkWardrobe/prev.png'
import wardrobe1 from '../images/Gallery/MilkWardrobe/1.png'
import wardrobe2 from '../images/Gallery/MilkWardrobe/2.png'

import gwp from '../images/Gallery/GlassWardrobe/prev.png'
import gw1 from '../images/Gallery/GlassWardrobe/1.png'
import gw2 from '../images/Gallery/GlassWardrobe/2.png'


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Gallery.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MenuDark from '../components/MenuDark';
import ProjectModal from '../components/ProjectModal';


const projects = [
  {
    index: 0,
    title: "CHESS TABLE",
    description: "THIS CHESS SET WAS INSPIRED BY THE ABSTRACT SCULPTURES OF CONSTANTIN BRANCUSI.",
    images: [ chessp, chess1, chess2, chess3, chess4]
  },
  {
    index: 1,
    title: "SCARLET DESK",
    description: "THE COMBINATION OF GLOSSY DEEP RED AND DELICATE TEXTILE TEXTURE IN TONE CREATES A SPECIALCONTRAST EFFECT.",
    images: [ deskp, desk1, desk2, desk3, desk4]
  },
  {
    index: 2,
    title: "WHITE MIRROR",
    description: "",
    images: [ mirrorp, mirror1, mirror2 ]
  },
  {
    index: 3,
    title: "GREEN TABLE",
    description: "THE BALANCED COLOR INSIDE THE DRAWERS COMPLEMENTS THE BODY, CREATING A SENSE OF THOUGHTFUL DESIGN.",
    images: [ tablep, table1, table2, table3, table4]
  },
  {
    index: 4,
    title: "SNOW POUF",
    description: "STAINED OAK VENEER, PATINA BRASS STRIP AND WARM WHITE TEXTILES CREATE THE FEELING OF A THING WITH HISTORY.",
    images: [ poufp, pouf1, pouf2, pouf3]
  },
  {
    index: 5,
    title: "CRIMSON NIGHTSTAND",
    description: "FILLED WITH VELVET STRIP TEXTURES, BRASS TRIM AND UNIQUE HAND-CRAFTED RELIEF.",
    images: [ standp, stand1, stand2, stand3]
  },
  {
    index: 6,
    title: "EBONY CONSOLE",
    description: "",
    images: [ consolep, console1, console2, console3]
  },
  {
    index: 7,
    title: "BRONZE CHEST",
    description: "A COMBINATION OF NATURAL AMERICAN WALNUT AND DEEP BURGUNDY IN GLOSS, EMPHASIZED BY TEXTILE INSERTS.",
    images: [ chestp, chest1, chest2, chest3]
  },
  {
    index: 8,
    title: "SNOW SHELF",
    description: "",
    images: [ shelfp, shelf1, shelf2]
  },
  {
    index: 9,
    title: "MIDNIGHT SINK",
    description: "THE SHADE OF THE STAINED EUCALYPTUS WAS CAREFULLY SELECTED, THE ALUMINUM ENDS EMPHASIZE THE DEPTH OF THE VENEER.",
    images: [ sinkp, sink1, sink2, sink3, sink4]
  },
  {
    index: 10,
    title: "IVORY CUBE",
    description: "A PERFECTLY CALIBRATED TABLE MADE OF ARTIFICIAL STONE, WITH INVISIBLE JOINTS OF THE MATERIAL.",
    images: [ cubep, cube1, cube2]
  },
  {
    index: 11,
    title: "SEA BREEZE",
    description: "",
    images: [ breezep, breeze1, breeze2]
  },
  {
    index: 12,
    title: "MILK WARDROBE",
    description: "NATURAL SELENITE OF A DELICATE PEACH SHADE IN A BRASS FRAME.",
    images: [ wardrobep, wardrobe1, wardrobe2]
  },
  {
    index: 13,
    title: "GLASS WARDROBE",
    description: "THE PLAY OF LIGHT AND DICHROIC GLASS CREATES THE EFFECT OF RAINBOW GRADIENT LIGHTING.",
    images: [ gwp, gw1, gw2]
  },
];

  function Gallery() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
  
    const openModal = (project) => {
      setCurrentProject(project);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    return (
      <div className="gallery-page">
        <div className="gallery-header">
          <MenuDark />
        </div>
        <div className="gallery-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(project)}
            >
              <img src={project.images[0]} alt={t(`gallery.projects[${project.index}].title`)} />
            </div>
          ))}
        </div>
  
        <ProjectModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          project={currentProject}
        />
  
        <footer className="gallery-footer">
          <p>{t('gallery.footer')}</p>
        </footer>
      </div>
    );
  }
  
  export default Gallery;