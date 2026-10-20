var APP_DATA = {
  "scenes": [
    {
      "id": "0-si",
      "name": "si",
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
      "faceSize": 225,
      "initialViewParameters": {
        "yaw": 0.272085585959168,
        "pitch": -0.7351647836105997,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.6717605504537048,
          "pitch": -0.10162857346030663,
          "rotation": 0,
          "target": "1-no"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2863468836547405,
          "pitch": -0.8440165069242198,
          "title": "Walking City",
          "text": "It´s walking!!! and citying!!!"
        }
      ]
    },
    {
      "id": "1-no",
      "name": "no",
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
      "faceSize": 225,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.286072634093685,
          "pitch": -0.012982990914094827,
          "rotation": 0,
          "target": "0-si"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
