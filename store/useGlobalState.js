import { useReducer } from "react";

const defaultState = {
  login: {
    isLoggedIn: false,
    profile: {},
  },
  tablePosition: [0, -0.6393, 0],
  glass: {
    scale: [10, 0.1, 7.5],
    position: [[0, 1.4018000000000002, 0]],
    currentOption: {
      id: 1,
      name: "Milk Glass",
      imgSrc: "./images/glass/glass_milk.png",
      price: 19,
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
          textureRepeat: [1, 1],
          doubleSide: true,
        },
        sides: {
          color: "green",
          opacity: 0.3,
          roughness: 0.1,
          metalness: 0.2,
          reflectivity: 1.7,
          textureLink: false,
          textureRepeat: [1, 1],
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
    scale: [0.5, 2.6, 0.5],
    position: [
      [3.3333333333333335, 0, 2.5],
      [-3.3333333333333335, 0, 2.5],
      [3.3333333333333335, 0, -2.5],
      [-3.3333333333333335, 0, -2.5],
    ],
    currentOption: {
      id: 1,
      name: "Beech Hearthwood",
      imgSrc: "./images/legs/legs_beech_hearthwood.png",
      price: 19,
    },
    textures: {
      "1": {
        src: "/includes/objects/assets/textures/wood/beech_hearthwood.jpg",
      },
      "2": {
        src: "/includes/objects/assets/textures/wood/bianco_oak.jpg",
      },
      "3": {
        src: "/includes/objects/assets/textures/wood/cherry.jpg",
      },
      "4": {
        src: "/includes/objects/assets/textures/wood/chrome.jpg",
      },
      "5": {
        src: "/includes/objects/assets/textures/wood/nickel.jpg",
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
        src: "/includes/objects/assets/textures/wood/titanium_painted.jpg",
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
        [3.3333333333333335, -1.35, 2.5],
        [-3.3333333333333335, -1.35, 2.5],
        [3.3333333333333335, -1.35, -2.5],
        [-3.3333333333333335, -1.35, -2.5],
      ],
      top: [
        [3.3333333333333335, 1.30135, 2.5],
        [-3.3333333333333335, 1.30135, 2.5],
        [3.3333333333333335, 1.30135, -2.5],
        [-3.3333333333333335, 1.30135, -2.5],
      ],
    },
    currentOption: {
      id: 1,
      name: "Brilliant Gold Finish",
      imgSrc: "./images/applications/application_brilliant_gold_finish.png",
      price: 59,
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
      [3.3333333333333335, 1.327, 2.5],
      [-3.3333333333333335, 1.327, 2.5],
      [3.3333333333333335, 1.327, -2.5],
      [-3.3333333333333335, 1.327, -2.5],
    ],
  },
  length: {
    currentOption: {
      value: 200,
    },
  },
  width: {
    currentOption: {
      value: 150,
    },
  },
  height: {
    currentOption: {
      value: 100,
    },
  },
  floor: {
    currentOption: {
      id: "1",
    },
    textures: {
      "1": {
        repeatCount: 5,
        src: "/includes/objects/floor/optimized_larice_texture.jpg",
      },
      "2": {
        repeatCount: 15,
        src: "/includes/objects/floor/granite.jpg",
      },
      "3": {
        repeatCount: 15,
        src: "/includes/objects/floor/floor_1.png",
      },
      "4": {
        repeatCount: 4,
        src: "/includes/objects/floor/white_tiles.jpg",
      },
      "5": {
        repeatCount: 13,
        src: "/includes/objects/floor/floor.jpg",
      },

      "6": {
        repeatCount: 31,
        src: "/includes/objects/floor/floor_2.jpg",
      },

      "7": {
        repeatCount: 15,
        src: "/includes/objects/floor/stones.png",
      },
    },
  },
  price: {
    basePrice: 179,
    total: 0,
  },
};

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        login: {
          ...state.login,
          isLoggedIn: true,
          profile: { ...payload },
        },
      };
    case "LOGOUT":
      return {
        ...state,
        login: { ...state.login, isLoggedIn: false, profile: {} },
      };
    case "UPDATE_GLASS":
      return { ...state, glass: { ...state.glass, currentOption: payload } };
    case "UPDATE_LEGS":
      return { ...state, legs: { ...state.legs, currentOption: payload } };
    case "UPDATE_APPLICATIONS":
      return {
        ...state,
        applications: { ...state.applications, currentOption: payload },
      };
    case "UPDATE_LENGTH":
      return {
        ...state,
        length: {
          ...state.length,
          currentOption: { ...state.length.currentOption, value: payload },
        },
        legs: {
          ...state.legs,
          position: [
            Object.assign([], state.legs.position[0], { [0]: payload / 60 }),
            Object.assign([], state.legs.position[1], { [0]: -payload / 60 }),
            Object.assign([], state.legs.position[2], { [0]: payload / 60 }),
            Object.assign([], state.legs.position[3], { [0]: -payload / 60 }),
            // [(state.legs.position[1][0] = -payload / 60)],
            // [(state.legs.position[2][0] = payload / 60)],
            // [(state.legs.position[3][0] = -payload / 60)],
          ],
        },
        applications: {
          ...state.applications,
          position: {
            bottom: [
              Object.assign([], state.applications.position.bottom[0], {
                [0]: payload / 60,
              }),
              Object.assign([], state.applications.position.bottom[1], {
                [0]: -payload / 60,
              }),
              Object.assign([], state.applications.position.bottom[2], {
                [0]: payload / 60,
              }),
              Object.assign([], state.applications.position.bottom[3], {
                [0]: -payload / 60,
              }),
            ],
            top: [
              Object.assign([], state.applications.position.top[0], {
                [0]: payload / 60,
              }),
              Object.assign([], state.applications.position.top[1], {
                [0]: -payload / 60,
              }),
              Object.assign([], state.applications.position.top[2], {
                [0]: payload / 60,
              }),
              Object.assign([], state.applications.position.top[3], {
                [0]: -payload / 60,
              }),
            ],
          },
        },
        ornament: {
          ...state.ornament,
          position: [
            Object.assign([], state.ornament.position[0], {
              [0]: payload / 60,
            }),
            Object.assign([], state.ornament.position[1], {
              [0]: -payload / 60,
            }),
            Object.assign([], state.ornament.position[2], {
              [0]: payload / 60,
            }),
            Object.assign([], state.ornament.position[3], {
              [0]: -payload / 60,
            }),
          ],
        },
        glass: {
          ...state.glass,
          scale: Object.assign([], state.glass.scale, {
            [0]: (payload / 60) * 3,
          }),
        },
      };
    case "UPDATE_WIDTH":
      return {
        ...state,
        width: {
          ...state.width,
          currentOption: { ...state.width.currentOption, value: payload },
        },
        legs: {
          ...state.legs,
          position: [
            Object.assign([], state.legs.position[0], { [2]: payload / 60 }),
            Object.assign([], state.legs.position[1], { [2]: payload / 60 }),
            Object.assign([], state.legs.position[2], { [2]: -payload / 60 }),
            Object.assign([], state.legs.position[3], { [2]: -payload / 60 }),
            // [(state.legs.position[1][0] = -payload / 60)],
            // [(state.legs.position[2][0] = payload / 60)],
            // [(state.legs.position[3][0] = -payload / 60)],
          ],
        },
        applications: {
          ...state.applications,
          position: {
            bottom: [
              Object.assign([], state.applications.position.bottom[0], {
                [2]: payload / 60,
              }),
              Object.assign([], state.applications.position.bottom[1], {
                [2]: payload / 60,
              }),
              Object.assign([], state.applications.position.bottom[2], {
                [2]: -payload / 60,
              }),
              Object.assign([], state.applications.position.bottom[3], {
                [2]: -payload / 60,
              }),
            ],
            top: [
              Object.assign([], state.applications.position.top[0], {
                [2]: payload / 60,
              }),
              Object.assign([], state.applications.position.top[1], {
                [2]: payload / 60,
              }),
              Object.assign([], state.applications.position.top[2], {
                [2]: -payload / 60,
              }),
              Object.assign([], state.applications.position.top[3], {
                [2]: -payload / 60,
              }),
            ],
          },
        },
        ornament: {
          ...state.ornament,
          position: [
            Object.assign([], state.ornament.position[0], {
              [2]: payload / 60,
            }),
            Object.assign([], state.ornament.position[1], {
              [2]: payload / 60,
            }),
            Object.assign([], state.ornament.position[2], {
              [2]: -payload / 60,
            }),
            Object.assign([], state.ornament.position[3], {
              [2]: -payload / 60,
            }),
          ],
        },
        glass: {
          ...state.glass,
          scale: Object.assign([], state.glass.scale, {
            [2]: (payload / 60) * 3,
          }),
        },
      };
    case "UPDATE_HEIGHT":
      return {
        ...state,
        height: {
          ...state.height,
          currentOption: { ...state.height.currentOption, value: payload },
        },
        legs: {
          ...state.legs,
          scale: Object.assign([], state.legs.scale, {
            [1]: (payload / 60) * 1.3,
          }),
        },
        applications: {
          ...state.applications,
          position: {
            bottom: [
              Object.assign([], state.applications.position.bottom[0], {
                [1]: -(((payload / 60) * 1.3) / 2) - 0.05,
              }),
              Object.assign([], state.applications.position.bottom[1], {
                [1]: -(((payload / 60) * 1.3) / 2) - 0.05,
              }),
              Object.assign([], state.applications.position.bottom[2], {
                [1]: -(((payload / 60) * 1.3) / 2) - 0.05,
              }),
              Object.assign([], state.applications.position.bottom[3], {
                [1]: -(((payload / 60) * 1.3) / 2) - 0.05,
              }),
            ],
            top: [
              Object.assign([], state.applications.position.top[0], {
                [1]: ((payload / 60) * 1.3) / 2 + 0.00135,
              }),
              Object.assign([], state.applications.position.top[1], {
                [1]: ((payload / 60) * 1.3) / 2 + 0.00135,
              }),
              Object.assign([], state.applications.position.top[2], {
                [1]: ((payload / 60) * 1.3) / 2 + 0.00135,
              }),
              Object.assign([], state.applications.position.top[3], {
                [1]: ((payload / 60) * 1.3) / 2 + 0.00135,
              }),
            ],
          },
        },
        ornament: {
          ...state.ornament,
          position: [
            Object.assign([], state.ornament.position[0], {
              [1]: ((payload / 60) * 1.3) / 2 + 0.027,
            }),
            Object.assign([], state.ornament.position[1], {
              [1]: ((payload / 60) * 1.3) / 2 + 0.027,
            }),
            Object.assign([], state.ornament.position[2], {
              [1]: ((payload / 60) * 1.3) / 2 + 0.027,
            }),
            Object.assign([], state.ornament.position[3], {
              [1]: ((payload / 60) * 1.3) / 2 + 0.027,
            }),
          ],
        },
        glass: {
          ...state.glass,
          position: [
            Object.assign([], state.glass.position[0], {
              [1]: ((payload / 60) * 1.3) / 2 + 0.1018,
            }),
          ],
        },
        tablePosition: Object.assign([], state.tablePosition, {
          [1]: ((payload / 60) * 1.3) / 2 - 1.9393,
        }),
      };
    case "UPDATE_FLOOR":
      return { ...state, floor: { ...state.floor, currentOption: payload } };
    case "UPDATE_PRICE":
      return { ...state, price: { ...state.price, total: payload } };
    default:
      return { state };
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, defaultState);

  return { globalState, globalDispatch };
};

export default useGlobalState;
