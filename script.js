const words = [
    {
        word:'needle',
        hint: "A thin and sharp metal pin"
    },
    {
        word:'canvas',
        hint: "Piece of fabric for oil painting"
    },
    {
        word:'exchange',
        hint: "The act of trading"
    },
    {
        word:'expert',
        hint: "Person with extensive knowledge"
    },
    {
        word:'statement',
        hint: "A declaration oƒsomething"
    },
    {
        word:'second',
        hint: "One-sixtirth of a minute"
    },
    {
        word:'library',
        hint: "Place containing collection if books"
    },
    {
        word:'pocket',
        hint: "A bag for carrying small items"
    },
    {
        word:'comfort',
        hint: "A pleasant feeling of relaxation"
    },
    {
        word:'tongue',
        hint: "The muscular organ of mouth"
    },
    {
        word:'expansion',
        hint: "The process of increase or grow"
    },
    {
        word:'country',
        hint: "A politically identified region"
    },
    {
        word:'group',
        hint: "A number of objects or persons"
    },
    { word: 'flower', hint: 'Blossom of a plant' },
  { word: 'laptop', hint: 'Portable personal computer' },
  { word: 'chocolate', hint: 'Sweet brown treat' },
  { word: 'microscope', hint: 'Device to see small objects' },
  { word: 'universe', hint: 'All existing matter and space' },
  { word: 'library', hint: 'Place with books' },
  { word: 'galaxy', hint: 'A system of millions of stars' },
  { word: 'engine', hint: 'Machine that converts power into motion' },
  { word: 'butterfly', hint: 'Insect with colorful wings' },
  { word: 'pencil', hint: 'Writing instrument with graphite' },
  { word: 'refrigerator', hint: 'Appliance for keeping food cold' },
  { word: 'dolphin', hint: 'Intelligent marine mammal' },
  { word: 'mountain', hint: 'A large natural elevation of the earth\'s surface' },
  { word: 'language', hint: 'System of communication' },
  { word: 'telephone', hint: 'Device for voice communication' },
  { word: 'journal', hint: 'Daily record of news and events' },
  { word: 'jungle', hint: 'Dense forest' },
  { word: 'harmony', hint: 'Combination of musical notes' },
  { word: 'pyramid', hint: 'Structure with a triangular base' },
  { word: 'planet', hint: 'Celestial body orbiting a star' },
  { word: 'electricity', hint: 'Form of energy resulting from charged particles' },
  { word: 'diamond', hint: 'Hardest natural material' },
  { word: 'virus', hint: 'Microscopic infectious agent' },
  { word: 'software', hint: 'Programs used by a computer' },
  { word: 'satellite', hint: 'Object that orbits a planet' },
  { word: 'ocean', hint: 'Vast body of salt water' },
  { word: 'calendar', hint: 'Chart of days, weeks, and months' },
  { word: 'rainbow', hint: 'Arc of colors in the sky' },
  { word: 'kangaroo', hint: 'Marsupial from Australia' },
  { word: 'volcano', hint: 'Mountain with molten rock' },
  { word: 'astronaut', hint: 'Person who travels in space' },
  { word: 'telescope', hint: 'Instrument for viewing distant objects' },
  { word: 'guitar', hint: 'Stringed musical instrument' },
  { word: 'parachute', hint: 'Device for slowing descent' },
  { word: 'railway', hint: 'Track for trains' },
  { word: 'bicycle', hint: 'Two-wheeled vehicle powered by pedals' },
  { word: 'forest', hint: 'Large area covered with trees' },
  { word: 'waterfall', hint: 'Stream of water dropping over a cliff' },
  { word: 'sunflower', hint: 'Tall plant with a large yellow flower' },
  { word: 'desert', hint: 'Arid land with little rainfall' },
  { word: 'hurricane', hint: 'Intense tropical storm' },
  { word: 'chameleon', hint: 'Lizard known for changing color' },
  { word: 'satellite', hint: 'Artificial body placed in orbit' },
  { word: 'rainforest', hint: 'Dense forest with high rainfall' },
  { word: 'vaccine', hint: 'Substance for immunity against diseases' },
  { word: 'ecosystem', hint: 'Community of interacting organisms' },
  { word: 'tornado', hint: 'Violently rotating windstorm' },
  { word: 'snowflake', hint: 'Ice crystal that falls from the sky' },
  { word: 'whisper', hint: 'Speaking softly without vocal cords' },
  { word: 'compass', hint: 'Instrument for direction finding' },
  { word: 'oxygen', hint: 'Gas essential for respiration' },
  { word: 'puzzle', hint: 'Game to test ingenuity' },
  { word: 'eclipse', hint: 'Obscuring of one celestial body by another' },
  { word: 'gravity', hint: 'Force that attracts objects toward each other' },
  { word: 'museum', hint: 'Building for preserving artifacts' },
  { word: 'bacteria', hint: 'Microscopic single-celled organisms' },
  { word: 'symphony', hint: 'Extended musical composition' },
  { word: 'insect', hint: 'Small arthropod animal' },
  { word: 'optics', hint: 'Study of light and vision' },
  { word: 'fossil', hint: 'Preserved remains of ancient organisms' },
  { word: 'robot', hint: 'Machine capable of carrying out complex actions' },
  { word: 'antique', hint: 'Object of considerable age' },
  { word: 'meteor', hint: 'Small body entering Earth\'s atmosphere' },
  { word: 'sculpture', hint: 'Art of carving or modeling figures' },
  { word: 'earthquake', hint: 'Sudden shaking of the ground' },
  { word: 'renaissance', hint: 'Period of revival of art and learning' },
  { word: 'equator', hint: 'Imaginary line around Earth' },
  { word: 'allergy', hint: 'Immune system reaction to foreign substances' },
  { word: 'microwave', hint: 'Appliance for heating food' },
  { word: 'surgery', hint: 'Medical procedure involving an incision' },
  { word: 'encyclopedia', hint: 'Comprehensive reference work' },
  { word: 'submarine', hint: 'Watercraft capable of underwater operation' },
  { word: 'conductor', hint: 'Person who directs an orchestra' },
  { word: 'thermometer', hint: 'Instrument for measuring temperature' },
  { word: 'kaleidoscope', hint: 'Optical instrument with mirrors' },
  { word: 'zeppelin', hint: 'Rigid airship' },
  { word: 'compromise', hint: 'Agreement reached by mutual concessions' },
  { word: 'quarantine', hint: 'Isolation to prevent disease spread' },
  { word: 'galvanize', hint: 'Stimulate into action' },
  { word: 'topography', hint: 'Detailed mapping of the surface features' },
  { word: 'biodiversity', hint: 'Variety of life in the world' },
  { word: 'algorithm', hint: 'Step-by-step procedure for calculations' },
  { word: 'hydrogen', hint: 'Lightest and most abundant element' },
  { word: 'antioxidant', hint: 'Substance that inhibits oxidation' },
  { word: 'geography', hint: 'Study of Earth\'s physical features' },
  { word: 'philosophy', hint: 'Study of fundamental nature of knowledge' },
  { word: 'biography', hint: 'Account of someone\'s life' },
  { word: 'hologram', hint: 'Three-dimensional image formed by light' },
  { word: 'spectrum', hint: 'Range of different colors or frequencies' },
  { word: 'photosynthesis', hint: 'Process by which plants make food' },
  { word: 'quantum', hint: 'Discrete quantity of energy' },
  { word: 'molecule', hint: 'Group of atoms bonded together' },
  { word: 'genetics', hint: 'Study of heredity' },
  { word: 'xylophone', hint: 'Musical instrument with wooden bars' },
  { word: 'choreography', hint: 'Art of designing dance movements' },
  { word: 'satire', hint: 'Use of humor to criticize' },
  { word: 'monsoon', hint: 'Seasonal wind in South Asia' },
  { word: 'astronomy', hint: 'Study of celestial objects' },
  { word: 'paleontology', hint: 'Study of fossils' },
  { word: 'archaeology', hint: 'Study of human history through excavation' },
  { word: 'pesticide', hint: 'Substance used to kill pests' },
  { word: 'biodegradable', hint: 'Capable of being decomposed by bacteria' },
  { word: 'banana', hint: 'A yellow fruit' },
  { word: 'guitar', hint: 'A musical instrument with strings' },
  { word: 'castle', hint: 'A large building where kings and queens live' },
  { word: 'puzzle', hint: 'A game to solve or fit pieces together' },
  { word: 'rocket', hint: 'A vehicle that flies into space' },
  { word: 'pirate', hint: 'A sailor who steals on the sea' },
  { word: 'button', hint: 'A small object used to fasten clothes' },
  { word: 'kitten', hint: 'A baby cat' },
  { word: 'zebra', hint: 'A striped animal' },
  { word: 'jacket', hint: 'Clothing to keep warm' },
  { word: 'donkey', hint: 'An animal similar to a horse' },
  { word: 'bottle', hint: 'A container for liquids' },
  { word: 'cookie', hint: 'A sweet baked treat' },
  { word: 'dancer', hint: 'A person who dances' },
  { word: 'pencil', hint: 'Tool used for writing or drawing' },
  { word: 'spider', hint: 'An eight-legged creature' },
  { word: 'bamboo', hint: 'A plant that pandas eat' },
  { word: 'parrot', hint: 'A colorful bird that can mimic sounds' },
  { word: 'jungle', hint: 'A dense forest' },
  { word: 'throne', hint: 'A royal seat for a king or queen' },
  { word: 'bridge', hint: 'Structure built over water' },
  { word: 'violet', hint: 'A purple flower' },
  { word: 'pickle', hint: 'A sour cucumber' },
  { word: 'scooter', hint: 'A two-wheeled vehicle' },
  { word: 'dragon', hint: 'A mythical fire-breathing creature' },
  { word: 'carrot', hint: 'An orange vegetable' },
  { word: 'jigsaw', hint: 'A type of puzzle' },
  { word: 'cowboy', hint: 'A person who herds cattle' },
  { word: 'apples', hint: 'A red or green fruit (plural)' },
  { word: 'rocket', hint: 'A vehicle that flies into space' },
  { word: 'safari', hint: 'An expedition to observe animals' },
  { word: 'circus', hint: 'A show with acrobats and clowns' },
  { word: 'gloves', hint: 'Clothing for hands' },
  { word: 'bicycle', hint: 'A two-wheeled vehicle powered by pedals' },
  { word: 'cabinet', hint: 'A piece of furniture with shelves' },
  { word: 'tunnel', hint: 'An underground passage' },
  { word: 'hamster', hint: 'A small pet rodent' },
  { word: 'garden', hint: 'A place to grow plants' },
  { word: 'rocket', hint: 'A vehicle that travels into space' },
  { word: 'napkin', hint: 'Cloth or paper used while eating' },
  { word: 'penguin', hint: 'A flightless bird that lives in cold regions' },
  { word: 'cowbell', hint: 'A bell hung around a cow’s neck' },
  { word: 'whistle', hint: 'A small device that makes a high sound' },
  { word: 'pajamas', hint: 'Clothes worn for sleeping' },
  { word: 'balloon', hint: 'A rubber bag filled with air or gas' },
  { word: 'puzzle', hint: 'A game to test ingenuity' },
  { word: 'sweater', hint: 'Clothing to keep warm' },
  { word: 'sandbox', hint: 'A box filled with sand for children to play' },
  { word: 'snowman', hint: 'A figure made of snow' },
  { word: 'popcorn', hint: 'A snack made from corn kernels' },
  { word: 'jewelry', hint: 'Decorative items worn on the body' },
  { word: 'balloon', hint: 'A rubber bag that can be filled with air' },
  { word: 'library', hint: 'Place with many books' },
  { word: 'unicorn', hint: 'A mythical horse with a horn' },
  { word: 'rainbow', hint: 'An arc of colors in the sky' },
  { word: 'diamond', hint: 'A precious stone' },
  { word: 'tractor', hint: 'A powerful vehicle used in farms' },
  { word: 'airplane', hint: 'A flying vehicle' },
  { word: 'sunrise', hint: 'When the sun appears in the morning' },
  { word: 'caramel', hint: 'Burnt sugar candy' },
  { word: 'goggles', hint: 'Protective eyewear' },
  { word: 'sandbox', hint: 'A box of sand for children to play in' },
  { word: 'necklace', hint: 'Jewelry worn around the neck' },
  { word: 'blossom', hint: 'A flower or bloom' },
  { word: 'crystal', hint: 'A clear, transparent mineral' },
  { word: 'blanket', hint: 'A warm cover for a bed' },
  { word: 'snorkel', hint: 'A breathing tube for underwater swimming' },
  { word: 'baggage', hint: 'Luggage or bags' },
  { word: 'feather', hint: 'A bird’s plume' },
  { word: 'picture', hint: 'A visual representation' },
  { word: 'biscuit', hint: 'A small baked bread' },
  { word: 'hotdog', hint: 'A sausage in a bun' },
  { word: 'skateboard', hint: 'A board with wheels for riding' },
  { word: 'treasure', hint: 'Valuable items like gold and jewels' },
  { word: 'elephant', hint: 'A large animal with a trunk' },
  { word: 'fountain', hint: 'A water feature' },
  { word: 'iceberg', hint: 'A large floating mass of ice' },
  { word: 'jacket', hint: 'Clothing to keep warm' },
  { word: 'lantern', hint: 'A portable light source' },
  { word: 'scooter', hint: 'A small two-wheeled vehicle' },
  { word: 'raincoat', hint: 'Clothing to stay dry in the rain' },
  { word: 'firefly', hint: 'A glowing insect' },
  { word: 'island', hint: 'Land surrounded by water' },
  { word: 'captain', hint: 'Leader of a ship or team' },
  { word: 'gingerbread', hint: 'A type of spiced cookie' },
  { word: 'marshmallow', hint: 'A soft, sweet treat' },
  { word: 'monster', hint: 'A scary creature' },
  { word: 'whistle', hint: 'A small device that makes a high-pitched sound' },
  { word: 'rainbow', hint: 'An arc of colors seen in the sky' },
  { word: 'mystery', hint: 'Something that is unknown or puzzling' },
  { word: 'pyramid', hint: 'A structure with triangular sides' },
  { word: 'caramel', hint: 'A sweet, sticky substance' },
  { word: 'fishing', hint: 'Catching fish as a hobby or sport' },
  { word: 'giraffe', hint: 'A tall animal with a long neck' },
  { word: 'painter', hint: 'A person who paints pictures' },
  { word: 'notebook', hint: 'A book for writing notes' },
  { word: 'seaside', hint: 'The area near the sea' },
  { word: 'bicycle', hint: 'A vehicle with two wheels' },
  { word: 'snowflake', hint: 'A tiny, unique ice crystal' },
  { word: 'traffic', hint: 'Vehicles moving on a road' },
  { word: 'picnic', hint: 'An outdoor meal' },

];





const wordText = document.querySelector('.word'),
hintText = document.querySelector(".hint span"),
refreshBtn = document.querySelector('.refresh-word'),
checkBtn = document.querySelector('.check-word'),
timeText = document.querySelector('.time b'),
inputField = document.querySelector('input');

let correctWord , timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer= setInterval(()=>{
    if (maxTime > 0){
        maxTime--;
        return timeText.innerText = maxTime;
    }
    clearInterval(timer);
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
    },1000);
};

const initGame = ()=>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split('');

    for(let i = wordArray.length-1 ; i>0 ; i--){
        let j = Math.floor(Math.random() * (i+1));

        [wordArray[i],wordArray[j]]= [wordArray[j],wordArray[i]];
    }
    wordText.innerText = wordArray.join('');
    hintText.innerText= randomObj.hint;
    correctWord= randomObj.word.toLocaleLowerCase();
    inputField.value='';
    inputField.setAttribute("maxlength",correctWord.length);
};

initGame();

const checkWord = ()=>{
    let userField = inputField.value.toLocaleLowerCase();

    if(!userField) return alert(`Please enter to word`);
    if(userField !== correctWord) return alert(`oops ${userField} is not a correct word`);
    alert(`congrats! ${userField.toUpperCase()} is a correct word`);
    initGame();
};
refreshBtn.addEventListener('click',initGame);

checkBtn.addEventListener('click',checkWord);

