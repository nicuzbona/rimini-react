import { useReducer } from "react";

const defaultState = {
  isLoggedIn: false,
  glass: {
    position: [[0, 0.6, 0]],
    currentOption: {
      id: 1,
      name: "Milk Glass",
      imgSrc: "./images/glass/glass_milk.png",
      price: 10,
    },
    materials: {
      "1": {
        // milk glass
        top: {
          color: "white",
          opacity: 0.4,
          roughness: 0.1,
          metalness: 0.1,
          reflectivity: 1.2,
          textureLink: "/includes/objects/assets/textures/glass_imp4.jpg",
          textureRepeat: [2, 2],
          doubleSide: true,
        },
        sides: {
          color: "black",
          opacity: 0.7,
          roughness: 1,
          metalness: 1,
          reflectivity: 1.7,
          textureLink: "/includes/objects/assets/textures/glass_imp4.jpg",
          textureRepeat: [0.5, 5],
          doubleSide: false,
        },
      },
      "2": {
        // extra clear glass
        top: {
          color: "#ffffff",
          opacity: 0.1,
          roughness: 0,
          metalness: 0.8,
          reflectivity: 4,
          textureLink: false,
          textureRepeat: [4, 4],
          doubleSide: true,
        },
        sides: {
          color: "green",
          opacity: 0.3,
          roughness: 0.1,
          metalness: 0.2,
          reflectivity: 1.7,
          textureLink: false,
          textureRepeat: [0.5, 5],
          doubleSide: false,
        },
      },
      "3": {
        // float glass
        top: {
          color: "white",
          opacity: 0.14,
          roughness: 0.1,
          metalness: 0.6,
          reflectivity: 0.7,
          textureLink: "/includes/objects/assets/textures/glass_imp7.png",
          textureRepeat: [2, 2],
          doubleSide: true,
        },
        sides: {
          color: "black",
          opacity: 0.9,
          roughness: 0.1,
          metalness: 0.2,
          reflectivity: 1.7,
          textureLink: "/includes/objects/assets/textures/glass_imp7.png",
          textureRepeat: [0.5, 5],
          doubleSide: false,
        },
      },
      "4": {
        // float glass
        top: {
          color: "white",
          opacity: 0.14,
          roughness: 0.1,
          metalness: 0.6,
          reflectivity: 0.7,
          textureLink: "/includes/objects/assets/textures/glass_imp7.png",
          textureRepeat: [2, 2],
          doubleSide: true,
        },
        sides: {
          color: "black",
          opacity: 0.9,
          roughness: 0.1,
          metalness: 0.2,
          reflectivity: 1.7,
          textureLink: "/includes/objects/assets/textures/glass_imp7.png",
          textureRepeat: [0.5, 5],
          doubleSide: false,
        },
      },
      "5": {
        // optiwhite satinatio glass
        top: {
          color: "#ffffff",
          opacity: 0.6,
          roughness: 0.3,
          metalness: 0.25,
          reflectivity: 0,
          textureLink: "/includes/objects/assets/textures/glass_imp3.jpg",
          textureRepeat: [5, 5],
          doubleSide: true,
        },
        sides: {
          color: "#ffffff",
          opacity: 0.4,
          roughness: 0.3,
          metalness: 0.2,
          reflectivity: 2,
          textureLink: "/includes/objects/assets/textures/glass_imp3.jpg",
          textureRepeat: [5, 5],
          doubleSide: false,
        },
      },
      "6": {
        // smoked glass
        top: {
          color: "#222",
          opacity: 0.9,
          roughness: 0.65,
          metalness: 1,
          reflectivity: 1,
          textureLink: "/includes/objects/assets/textures/glass_imp5.png",
          textureRepeat: [10, 10],
          doubleSide: true,
        },
        sides: {
          color: "#222",
          opacity: 0.9,
          roughness: 0.3,
          metalness: 1,
          reflectivity: 4,
          textureLink: "/includes/objects/assets/textures/glass_imp5.png",
          textureRepeat: [1, 1],
          doubleSide: false,
        },
      },
    },
  },
  legs: {
    position: [
      [5, -1, 2.5], // front right
      [-5, -1, 2.5], // front left
      [5, -1, -2.5], // back right
      [-5, -1, -2.5], // back left
    ],
    currentOption: {
      id: 1,
      name: "Beech Hearthwood",
      imgSrc: "./images/legs/legs_beech_hearthwood.png",
      price: 11,
    },
    textures: {
      "1": {
        src: "/includes/objects/assets/textures/wood/wenge_oak.jpg",
      },
      "2": {
        src: "/includes/objects/assets/textures/wood/bianco_oak.jpg",
      },
      "3": {
        src: "/includes/objects/assets/textures/wood/cherry.png",
      },
      "4": {
        src: "/includes/objects/assets/textures/wood/wenge_oak.jpg",
      },
      "5": {
        src: "/includes/objects/assets/textures/wood/wenge_oak.jpg",
      },
      "6": {
        src: "/includes/objects/assets/textures/wood/natural_beech.png",
      },
      "7": {
        src: "/includes/objects/assets/textures/wood/natural_oak.jpg",
      },
      "8": {
        src: "/includes/objects/assets/textures/wood/rustic_oak.jpg",
      },
      "9": {
        src: "/includes/objects/assets/textures/wood/wenge_oak.jpg",
      },
      "10": {
        src: "/includes/objects/assets/textures/wood/walnut_hw.png",
      },
      "11": {
        src: "/includes/objects/assets/textures/wood/walnut.jpg",
      },
      "12": {
        src: "/includes/objects/assets/textures/wood/wenge_oak.jpg", // true
      },
      "13": {
        src: "/includes/objects/assets/textures/wood/wild_oak.jpg",
      },
    },
  },
  applications: {
    position: {
      bottom: [
        [5, -2.5, 2.5], // front right
        [-5, -2.5, 2.5], // front left
        [5, -2.5, -2.5], // back right
        [-5, -2.5, -2.5], // back left
      ],
      top: [
        [5, 0.5001, 2.5], // front right
        [-5, 0.5001, 2.5], // front left
        [5, 0.5001, -2.5], // back right
        [-5, 0.5001, -2.5], // back left
      ],
    },
    currentOption: {
      id: 1,
      name: "Brilliant Gold Finish",
      imgSrc: "./images/applications/application_brilliant_gold_finish.png",
      price: 12,
    },
    materials: {
      "1": {
        // Brilliant Gold Finish
        color: "#ebb61a",
        roughness: 0.1,
        metalness: 0.3,
        reflectivity: 1.2,
      },
      "2": {
        // Brilliant Gold Painted
        color: "#bf9c2e",
        roughness: 1,
        metalness: 0,
        reflectivity: 0.5,
      },
      "3": {
        // Golden Painted
        color: "#c4a74d",
        roughness: 1,
        metalness: 0,
        reflectivity: 0.5,
      },
      "4": {
        // High Chrome
        color: "silver",
        roughness: 0,
        metalness: 0.3,
        reflectivity: 1.2,
      },
      "5": {
        // High Gloss Chorme Finish
        color: "silver",
        roughness: 0.1,
        metalness: 0.2,
        reflectivity: 1.2,
      },
      "6": {
        // Titanium Painted
        color: "#a6a6a6",
        roughness: 1,
        metalness: 0,
        reflectivity: 0.5,
      },
    },
  },
  ornament: {
    position: [
      [5, 0.5251, 2.5], // front right
      [-5, 0.5251, 2.5], // front left
      [5, 0.5251, -2.5], // back right
      [-5, 0.5251, -2.5], // back left
    ],
  },
};

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    case "UPDATE_GLASS":
      return { ...state, glass: { ...state.glass, currentOption: payload } };
    case "UPDATE_LEGS":
      return { ...state, legs: { ...state.legs, currentOption: payload } };
    case "UPDATE_APPLICATIONS":
      return {
        ...state,
        applications: { ...state.applications, currentOption: payload },
      };
    default:
      return { state };
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, defaultState);

  return { globalState, globalDispatch };
};

export default useGlobalState;
