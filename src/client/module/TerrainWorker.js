// Generated by CoffeeScript 2.5.1
var State, TerrainManager, handlers, terrain;

import {
  CellTerrain
} from './CellTerrain.js';

TerrainManager = class TerrainManager {
  constructor(options) {
    this.toxelSize = options.toxelSize;
    this.q = 1 / this.toxelSize;
    this.blocks = options.blocks;
    this.blocksMapping = options.blocksMapping;
    this.cellSize = options.cellSize;
    this.models = options.models;
    this.cellTerrain = new CellTerrain({
      cellSize: this.cellSize
    });
    console.log("WORKER: TerrainManager started!");
  }

  getToxel(x, y) {
    var x1, x2, y1, y2;
    x -= 1;
    y -= 1;
    x1 = this.q * x;
    y1 = 1 - this.q * y - this.q;
    x2 = this.q * x + this.q;
    y2 = 1 - this.q * y;
    return [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];
  }

  vec3(x, y, z) {
    if (typeof x === "string") {
      x = parseInt(x);
    }
    if (typeof y === "string") {
      y = parseInt(y);
    }
    if (typeof z === "string") {
      z = parseInt(z);
    }
    return `${x}:${y}:${z}`;
  }

  genBlockFace(type, voxel) {
    var blockName, e, toxX, toxY, uv;
    try {
      blockName = this.blocks[voxel]["faces"][type];
      toxX = this.blocksMapping[blockName]["x"];
      toxY = this.blocksMapping[blockName]["y"];
    } catch (error) {
      e = error;
      toxX = this.blocksMapping["debug"]["x"];
      toxY = 28 - this.blocksMapping["debug"]["y"];
    }
    uv = this.getToxel(toxX, toxY);
    switch (type) {
      case "pz":
        return [
          {
            pos: [-0.5,
          -0.5,
          0.5],
            norm: [0,
          0,
          1],
            uv: uv[0]
          },
          {
            pos: [0.5,
          -0.5,
          0.5],
            norm: [0,
          0,
          1],
            uv: uv[2]
          },
          {
            pos: [-0.5,
          0.5,
          0.5],
            norm: [0,
          0,
          1],
            uv: uv[1]
          },
          {
            pos: [-0.5,
          0.5,
          0.5],
            norm: [0,
          0,
          1],
            uv: uv[1]
          },
          {
            pos: [0.5,
          -0.5,
          0.5],
            norm: [0,
          0,
          1],
            uv: uv[2]
          },
          {
            pos: [0.5,
          0.5,
          0.5],
            norm: [0,
          0,
          1],
            uv: uv[3]
          }
        ];
      case "nx":
        return [
          {
            pos: [0.5,
          -0.5,
          0.5],
            norm: [1,
          0,
          0],
            uv: uv[0]
          },
          {
            pos: [0.5,
          -0.5,
          -0.5],
            norm: [1,
          0,
          0],
            uv: uv[2]
          },
          {
            pos: [0.5,
          0.5,
          0.5],
            norm: [1,
          0,
          0],
            uv: uv[1]
          },
          {
            pos: [0.5,
          0.5,
          0.5],
            norm: [1,
          0,
          0],
            uv: uv[1]
          },
          {
            pos: [0.5,
          -0.5,
          -0.5],
            norm: [1,
          0,
          0],
            uv: uv[2]
          },
          {
            pos: [0.5,
          0.5,
          -0.5],
            norm: [1,
          0,
          0],
            uv: uv[3]
          }
        ];
      case "nz":
        return [
          {
            pos: [0.5,
          -0.5,
          -0.5],
            norm: [0,
          0,
          -1],
            uv: uv[0]
          },
          {
            pos: [-0.5,
          -0.5,
          -0.5],
            norm: [0,
          0,
          -1],
            uv: uv[2]
          },
          {
            pos: [0.5,
          0.5,
          -0.5],
            norm: [0,
          0,
          -1],
            uv: uv[1]
          },
          {
            pos: [0.5,
          0.5,
          -0.5],
            norm: [0,
          0,
          -1],
            uv: uv[1]
          },
          {
            pos: [-0.5,
          -0.5,
          -0.5],
            norm: [0,
          0,
          -1],
            uv: uv[2]
          },
          {
            pos: [-0.5,
          0.5,
          -0.5],
            norm: [0,
          0,
          -1],
            uv: uv[3]
          }
        ];
      case "px":
        return [
          {
            pos: [-0.5,
          -0.5,
          -0.5],
            norm: [-1,
          0,
          0],
            uv: uv[0]
          },
          {
            pos: [-0.5,
          -0.5,
          0.5],
            norm: [-1,
          0,
          0],
            uv: uv[2]
          },
          {
            pos: [-0.5,
          0.5,
          -0.5],
            norm: [-1,
          0,
          0],
            uv: uv[1]
          },
          {
            pos: [-0.5,
          0.5,
          -0.5],
            norm: [-1,
          0,
          0],
            uv: uv[1]
          },
          {
            pos: [-0.5,
          -0.5,
          0.5],
            norm: [-1,
          0,
          0],
            uv: uv[2]
          },
          {
            pos: [-0.5,
          0.5,
          0.5],
            norm: [-1,
          0,
          0],
            uv: uv[3]
          }
        ];
      case "py":
        return [
          {
            pos: [0.5,
          0.5,
          -0.5],
            norm: [0,
          1,
          0],
            uv: uv[0]
          },
          {
            pos: [-0.5,
          0.5,
          -0.5],
            norm: [0,
          1,
          0],
            uv: uv[2]
          },
          {
            pos: [0.5,
          0.5,
          0.5],
            norm: [0,
          1,
          0],
            uv: uv[1]
          },
          {
            pos: [0.5,
          0.5,
          0.5],
            norm: [0,
          1,
          0],
            uv: uv[1]
          },
          {
            pos: [-0.5,
          0.5,
          -0.5],
            norm: [0,
          1,
          0],
            uv: uv[2]
          },
          {
            pos: [-0.5,
          0.5,
          0.5],
            norm: [0,
          1,
          0],
            uv: uv[3]
          }
        ];
      case "ny":
        return [
          {
            pos: [0.5,
          -0.5,
          0.5],
            norm: [0,
          -1,
          0],
            uv: uv[0]
          },
          {
            pos: [-0.5,
          -0.5,
          0.5],
            norm: [0,
          -1,
          0],
            uv: uv[2]
          },
          {
            pos: [0.5,
          -0.5,
          -0.5],
            norm: [0,
          -1,
          0],
            uv: uv[1]
          },
          {
            pos: [0.5,
          -0.5,
          -0.5],
            norm: [0,
          -1,
          0],
            uv: uv[1]
          },
          {
            pos: [-0.5,
          -0.5,
          0.5],
            norm: [0,
          -1,
          0],
            uv: uv[2]
          },
          {
            pos: [-0.5,
          -0.5,
          -0.5],
            norm: [0,
          -1,
          0],
            uv: uv[3]
          }
        ];
    }
  }

  genCellGeo(cellX, cellY, cellZ) {
    var _this, addFace, addGeo, geo, i, j, k, l, m, n, normals, pos, positions, ref, ref1, ref2, uvs, voxel;
    positions = [];
    normals = [];
    uvs = [];
    _this = this;
    addFace = function(type, pos, voxel) {
      var faceVertex, l, len, vertex;
      faceVertex = _this.genBlockFace(type, voxel);
      for (l = 0, len = faceVertex.length; l < len; l++) {
        vertex = faceVertex[l];
        vertex.pos[0] += pos[0];
        vertex.pos[1] += pos[1];
        vertex.pos[2] += pos[2];
        positions.push(...vertex.pos);
        normals.push(...vertex.norm);
        uvs.push(...vertex.uv);
      }
    };
    addGeo = function(geo, pos) {
      var i, l, norm, posi, ref, uv;
      posi = geo.position.array;
      norm = geo.normal.array;
      uv = geo.uv.array;
      for (i = l = 0, ref = posi.length - 1; (0 <= ref ? l <= ref : l >= ref); i = 0 <= ref ? ++l : --l) {
        positions.push(posi[i] + pos[i % 3]);
      }
      normals.push(...norm);
      uvs.push(...uv);
    };
    for (i = l = 0, ref = this.cellSize - 1; (0 <= ref ? l <= ref : l >= ref); i = 0 <= ref ? ++l : --l) {
      for (j = m = 0, ref1 = this.cellSize - 1; (0 <= ref1 ? m <= ref1 : m >= ref1); j = 0 <= ref1 ? ++m : --m) {
        for (k = n = 0, ref2 = this.cellSize - 1; (0 <= ref2 ? n <= ref2 : n >= ref2); k = 0 <= ref2 ? ++n : --n) {
          pos = [cellX * this.cellSize + i, cellY * this.cellSize + j, cellZ * this.cellSize + k];
          voxel = this.getVoxel(...pos);
          if (voxel) {
            if (this.blocks[voxel] === void 0 || this.blocks[voxel].isBlock) {
              if (!(this.blocks[this.getVoxel(pos[0] + 1, pos[1], pos[2])] === void 0 || this.blocks[this.getVoxel(pos[0] + 1, pos[1], pos[2])].isBlock)) {
                addFace("nx", pos, voxel);
              }
              if (!(this.blocks[this.getVoxel(pos[0] - 1, pos[1], pos[2])] === void 0 || this.blocks[this.getVoxel(pos[0] - 1, pos[1], pos[2])].isBlock)) {
                addFace("px", pos, voxel);
              }
              if (!(this.blocks[this.getVoxel(pos[0], pos[1] - 1, pos[2])] === void 0 || this.blocks[this.getVoxel(pos[0], pos[1] - 1, pos[2])].isBlock)) {
                addFace("ny", pos, voxel);
              }
              if (!(this.blocks[this.getVoxel(pos[0], pos[1] + 1, pos[2])] === void 0 || this.blocks[this.getVoxel(pos[0], pos[1] + 1, pos[2])].isBlock)) {
                addFace("py", pos, voxel);
              }
              if (!(this.blocks[this.getVoxel(pos[0], pos[1], pos[2] + 1)] === void 0 || this.blocks[this.getVoxel(pos[0], pos[1], pos[2] + 1)].isBlock)) {
                addFace("pz", pos, voxel);
              }
              if (!(this.blocks[this.getVoxel(pos[0], pos[1], pos[2] - 1)] === void 0 || this.blocks[this.getVoxel(pos[0], pos[1], pos[2] - 1)].isBlock)) {
                addFace("nz", pos, voxel);
              }
            } else {
              geo = this.models[this.blocks[voxel].model];
              addGeo(geo, pos);
            }
          }
        }
      }
    }
    return {positions, normals, uvs};
  }

  setVoxel(voxelX, voxelY, voxelZ, value) {
    this.cellTerrain.setVoxel(voxelX, voxelY, voxelZ, value);
  }

  getVoxel(voxelX, voxelY, voxelZ) {
    return this.cellTerrain.getVoxel(voxelX, voxelY, voxelZ);
  }

};

addEventListener("message", function(e) {
  var fn;
  fn = handlers[e.data.type];
  if (!fn) {
    throw new Error('no handler for type: ' + e.data.type);
  }
  fn(e.data.data);
});

State = {
  init: null,
  world: {}
};

terrain = null;

handlers = {
  init: function(data) {
    State.init = data;
    terrain = new TerrainManager({
      models: data.models,
      blocks: data.blocks,
      blocksMapping: data.blocksMapping,
      toxelSize: data.toxelSize,
      cellSize: data.cellSize
    });
  },
  setVoxel: function(data) {
    return terrain.setVoxel(...data);
  },
  genCellGeo: function(data) {
    return postMessage({
      cell: terrain.genCellGeo(...data),
      info: data
    });
  },
  setCell: function(data) {
    return terrain.cellTerrain.cells[`${data[0]}:${data[1]}:${data[2]}`] = data[3];
  }
};
