// a file to hold our declaration of global variable in order to reduce clutter in our main file

// variables relating to the sounds
let caughtSound = ['sounds/catch/creatureGrowl.wav', 'sounds/catch/groan.wav', 'sounds/catch/scaryRoar.wav'];
let thunderNoises = ['sounds/thunder1.wav', 'sounds/thunder2.wav', 'sounds/thunder3.wav', 'sounds/thunder4.wav',];
let heartbeatAudio = new Audio('sounds/heartbeat.wav');
let winSounds = ['sounds/gameOver/win.mp3', 'sounds/gameOver/win2.wav'];


// variables used for the rain sound and the wind affecting the campfire
let wind = 0;
let rain = 8;

// various timers used throughout the game
let windTimer = 0;
let currentTime = 0;
let timer = 0;
let timerThunder = 0;
let gameTime = 0;


// track monster spawn and whether the player is caught
let spawningIn = true;
let caught = false;

// used for the monster and level specifications 
let distance = 25;
let monsterSpeed = .08;
let stamina = 100;
let maxStamina = 100;
let fitness = .5;
let increment = 2;
let level = "easy";

// trackers for the gamestate
let gamePaused = false;
let inJumpscare = false;
let spotLightOn = false;
let gameState = 0;

// used for the stars, lives, and thunder
let starsCollected = 0;
let lives = 3;
let x = 0;
let y = 50;
let scales;
let maxThunder = 0;
let lightness = 0;
let k = .02;

// used for the jumpscares and positioning of monsters
let jumpscare1;
let jumpscare2;
let jumpscareLookAt;
let jumpscarePositions = [];
let previousPos = [];


// variables for the particles used when the starshards explode
let movementSpeeds = 40;
let totalObjects = 500;
let objectSize = 10;
let colors = [0xFF0FFF, 0xCCFF00, 0xFF000F, 0x996600, 0xFFFFFF, 0xcbbeb5, 0x9003ff, 0x6d9bc3,
    0x87a96b, 0x520520, 0xeaa315, 0x327572, 0xb8888d, 0xcc77dd, 0xbcd4e6, 0xfe6f5e, 0x318ce7, 0xa2a2d0];
let dirs = [];
let parts = [];


// smoke variable
let smokeParticles;
let smokeTexture;
let smokeMaterial;
let smokeGeo
let storm;


// used for movement and rotation management of the monster
let speed = 2;
let delta;


// used in movement and collision
let hit = false;
let moving = false;
let starHit = -1;

let intersection = null;

// arrays used 
let trees = [];
let spheres = [];
let worldItems = [];
let starShards = [];
let heartArray = [];
let movingStarShard = [];
let starXDirs = [];
let starZDirs = [];
let prettyStars = [];
let shootingStars = [];



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


// used for the flashlight 
let light;

// used in the end of game animations for a win
let shibaCounter = 0;
let shiba;
let dog;
let endStar;
let number = 0;



// variables used for the campfires
let fireColors = [0xff0000, 0xFFA500];
let pCount = 200;
let heightLimit = 35;
let spawnSpread = 5;
let sidewaysSpread = .02;
let minPSize = .1;
let maxPSize = 4;
let overallSpeed = 4;
let verticalFade = 5;
let overallFade = .1;
let timeStep = 50;

