var audio;
let caughtSound = ['sounds/catch/creatureGrowl.wav', 'sounds/catch/groan.wav', 'sounds/catch/scaryRoar.wav'];
let closeSound = ['sounds/close/roar.wav', 'sounds/close/close1.wav', 'sounds/close/close2.wav', 'sounds/close/close3.wav'];
let loseSounds = ['sounds/gameOver/lose1.wav', 'sounds/gameOver/lose2.wav'];
let thunderNoises = ['sounds/thunder1.wav', 'sounds/thunder2.wav', 'sounds/thunder3.wav', 'sounds/thunder4.wav',];
let heartbeatAudio = new Audio('sounds/heartbeat.wav');
let winSounds = ['sounds/gameOver/win.mp3', 'sounds/gameOver/win2.wav'];


 
let wind = 0;
let spawningIn = true;
let windTimer = 0;
let currentTime = 0;
let shootingStars = [];
let caught = false;
let distance = 25;
let timer = 0;
let monsterSpeed = .08;
let stamina = 100;
let maxStamina = 100;
let fitness = .5;
let gameTime = 0;
let increment = 2;
let level = "easy";
let gamePaused = false;
let gameState = 0;
let starsCollected = 0;
let lives = 3;
let spotLightOn = false;
let gameOverBool = false;
let x = 0;
let y = 50;
let scales;
let timerThunder = 0;
let maxThunder = 0;
let timerFlicker=0;
let maxFlicker = .5;
let lightness = 0;
let k = .02;
let jumpscare1;
let jumpscare2;
let inJumpscare = false;
let jumpscareLookAt;
let jumpscarePositions = [];
let playEndMusic = false;

 // particles 
 let movementSpeeds = 40;
 let totalObjects = 500;
 let objectSize = 10;
 let colors = [0xFF0FFF, 0xCCFF00, 0xFF000F, 0x996600, 0xFFFFFF, 0xcbbeb5, 0x9003ff, 0x6d9bc3,
     0x87a96b, 0x520520, 0xeaa315, 0x327572, 0xb8888d, 0xcc77dd, 0xbcd4e6, 0xfe6f5e, 0x318ce7, 0xa2a2d0];
 let dirs = [];
 let parts = [];


 // smoke 
 let smokeParticles;
 let smokeTexture;
 let smokeMaterial;
 let smokeGeo
 let storm;



 // used for movement and rotation management
 let speed = 2;
 let delta;

 // used for the head bobbing effect
 let change = 0;
 let sinwave = 0;
 let displacement = 0;

 // used for the cursor placement
 let toggle = 0;

 // used in movement and collision
 let hit = false;
 let moving = false;
 let starHit = -1;

 let intersection = null;


 let trees = [];
 let spheres = [];
 let worldItems = [];
 let starShards = [];
 let heartArray = [];
 let movingStarShard = [];
 let starXDirs = [];
 let starZDirs = [];
 let prettyStars = [];


 // used in movement and collision
 let movement;
 let oldCamera;

 // geometries, materials, and meshes
 let worldGeom;
 let worldMat;
 let world;

 let waterGeom;
 let waterMat;
 let water;

 let terrainGeom;
 let terrainMat;
 let terrain;

 let terrainShadowMat;
 let terrainShadow;

 let cursorGeom;
 let cursorMat;
 let cursor;


 let moon;

  //Colors for sky/sun/moon
  let moonColor = [0xdde2e5];
  let skyColors = [0x000608, 0x072f41, 0x094f6d, 0x436e91, 0x5e88b8, 0x7998bb];

  let spotLight, lightTarget;

  let shibaCounter=0;
  let shiba;
  let endStar;
  let number=0;
  let dog;
  let light;
  let rain = 8;



  let fireColors = [0xff0000, 0xFFA500];
  // position of campfire


  // count of fire particles
  let pCount = 200;

  // height limit for the campfire
  let heightLimit = 35;
  //let heightLimit2 = 50;

  // how far on either side the particle can spawn 
  let spawnSpread = 5;

  let sidewaysSpread = .02;

  // min and max particle size
  let minPSize = .1;
  let maxPSize = 4;

  // speed of the particles as a whole
  let overallSpeed = 4;

  // rate that points disappear (baseline, used in combination with size later)
  let verticalFade = 5;
  // the rate that the fire goes out at 
  let overallFade = .1; //.1;
  let timeStep = 50;

  //let campFires = [];