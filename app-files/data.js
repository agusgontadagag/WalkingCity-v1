var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "FRENTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2442570780506834,
          "pitch": 0.15945290294905234,
          "rotation": 0,
          "target": "1-fondo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2988116144530473,
          "pitch": -0.7577461901346059,
          "title": "Walking City",
          "text": "It´s a city that can walk"
        },
        {
          "yaw": -0.35227084104844053,
          "pitch": 0.28854190047614914,
          "title": "Patiruedas",
          "text": "Patas cuyos extremos o \"manos\" pueden convertirse en ruedas para circular por terrenos mas llanos"
        }
      ]
    },
    {
      "id": "1-fondo",
      "name": "FONDO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5445690971260664,
          "pitch": 0.09956264127192327,
          "rotation": 0,
          "target": "0-frente"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.580342426067797,
          "pitch": -0.03287343635895823,
          "title": "Sol",
          "text": "A 5.500 °C desde 4.600.000.000 AD"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
