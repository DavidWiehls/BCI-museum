var APP_DATA = {
  "scenes": [
    {
      "id": "0-bci-museum",
      "name": "BCI museum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 672,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3192549240657954,
          "pitch": 0.13899866795155447,
          "rotation": 0.7853981633974483,
          "target": "1-bci-museum-2-pano"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bci-museum-2-pano",
      "name": "Bci Museum 2 pano",
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
          "yaw": 1.3124718201219583,
          "pitch": 0.24682690598043067,
          "rotation": 5.497787143782138,
          "target": "0-bci-museum"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BCI Museum Digital Twin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
