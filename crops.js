
// ==========================================
// 1. HORTICULTURE CATEGORY NAMES
// ==========================================

const horticultureCategories = {
    fruit: { hi: 'फल वाली फसल', en: 'Fruit Crop' },
    vegetable: { hi: 'सब्जी वाली फसल', en: 'Vegetable Crop' },
    flower: { hi: 'फूल वाली फसल', en: 'Flower Crop' },
    spice: { hi: 'मसाले वाली फसल', en: 'Spice Crop' },
    plantation: { hi: 'बागान वाली फसल', en: 'Plantation Crop' },
    medicinal: { hi: 'औषधीय फसल', en: 'Medicinal Crop' }
};

// ==========================================
// 2. OLD CROPS CATEGORY UPDATE
// ==========================================

const categoryUpdate = {
    'Mango': 'fruit',
    'Banana': 'fruit',
    'Apple': 'fruit',

    'Tomato': 'vegetable',
    'Onion': 'vegetable',
    'Potato': 'vegetable',

    'Chilli': 'spice',
    'Turmeric': 'spice',
    'Coriander': 'spice',
    'Ginger': 'spice',

    'Rose': 'flower',
    'Marigold': 'flower'
};

cropsData.forEach(crop => {
    const newCategory = categoryUpdate[crop.name.en];

    if (newCategory) {
        crop.category = newCategory;
        crop.catName = horticultureCategories[newCategory];
    }
});

// ==========================================
// 3. NEW CROP DATA HELPER
// ==========================================

const makeCrop = (
    category,
    hi,
    en,
    bn,
    chromosome,
    origin,
    climate,
    temp,
    varieties,
    diseases,
    pests
) => ({
    category,
    catName: horticultureCategories[category],
    name: { hi, en },
    bn,
    chromosome,
    origin,
    climate,
    temp,
    varieties,
    diseases,
    pests
});

// ==========================================
// 4. NEW HORTICULTURE CROPS
// ==========================================

const newHorticultureCrops = [

    // --------------------------------------
    // A. FRUIT CROPS (फल वाली फसलें)
    // --------------------------------------

    makeCrop('fruit', 'अमरूद (Guava)', 'Guava',
        'Psidium guajava', '2n = 22',
        {hi:'उष्णकटिबंधीय अमेरिका',en:'Tropical America'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय',en:'Tropical and Sub-tropical'},
        {hi:'23°C - 28°C',en:'23°C - 28°C'},
        {hi:'इलाहाबाद सफेदा, ललित, श्वेता, अर्का मृदुला',en:'Allahabad Safeda, Lalit, Shweta, Arka Mridula'},
        {hi:'उकठा रोग, फल सड़न, एन्थ्रेक्नोज',en:'Wilt, Fruit Rot, Anthracnose'},
        {hi:'फल मक्खी, छाल खाने वाला कीट',en:'Fruit Fly, Bark Eating Caterpillar'}
    ),

    makeCrop('fruit', 'पपीता (Papaya)', 'Papaya',
        'Carica papaya', '2n = 18',
        {hi:'मध्य अमेरिका (मैक्सिको)',en:'Central America (Mexico)'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'22°C - 30°C',en:'22°C - 30°C'},
        {hi:'पूसा डिलीशियस, पूसा नन्हा, रेड लेडी-786',en:'Pusa Delicious, Pusa Nanha, Red Lady-786'},
        {hi:'पपाया रिंग स्पॉट वायरस, जड़ सड़न, एन्थ्रेक्नोज',en:'Papaya Ringspot Virus, Root Rot, Anthracnose'},
        {hi:'माहू, सफेद मक्खी, मिली बग',en:'Aphid, Whitefly, Mealybug'}
    ),

    makeCrop('fruit', 'संतरा (Orange)', 'Orange',
        'Citrus sinensis', '2n = 18',
        {hi:'दक्षिण-पूर्व एशिया',en:'South-East Asia'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय',en:'Tropical and Sub-tropical'},
        {hi:'15°C - 30°C',en:'15°C - 30°C'},
        {hi:'नागपुर संतरा, कूर्ग, मौसमी',en:'Nagpur Orange, Coorg, Mosambi'},
        {hi:'सिट्रस कैंकर, गमोसिस, हरित रोग',en:'Citrus Canker, Gummosis, Citrus Greening'},
        {hi:'सिट्रस सिल्ला, लीफ माइनर, मिली बग',en:'Citrus Psylla, Leaf Miner, Mealybug'}
    ),

    makeCrop('fruit', 'नींबू (Lemon)', 'Lemon',
        'Citrus limon', '2n = 18',
        {hi:'दक्षिण एवं दक्षिण-पूर्व एशिया',en:'South and South-East Asia'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय',en:'Tropical and Sub-tropical'},
        {hi:'20°C - 30°C',en:'20°C - 30°C'},
        {hi:'प्रमालिनी, विक्रम, कागजी नींबू',en:'Pramalini, Vikram, Kagzi Lime'},
        {hi:'सिट्रस कैंकर, गमोसिस, एन्थ्रेक्नोज',en:'Citrus Canker, Gummosis, Anthracnose'},
        {hi:'लीफ माइनर, सिल्ला, माहू',en:'Leaf Miner, Psylla, Aphid'}
    ),

    makeCrop('fruit', 'अनार (Pomegranate)', 'Pomegranate',
        'Punica granatum', '2n = 16',
        {hi:'ईरान एवं आसपास का क्षेत्र',en:'Iran and adjoining regions'},
        {hi:'उष्ण एवं शुष्क',en:'Tropical and Arid'},
        {hi:'25°C - 35°C',en:'25°C - 35°C'},
        {hi:'भगवा, गणेश, मृदुला, अरक्ता',en:'Bhagwa, Ganesh, Mridula, Arakta'},
        {hi:'जीवाणु झुलसा, फल सड़न',en:'Bacterial Blight, Fruit Rot'},
        {hi:'फल छेदक, तितली, मिली बग',en:'Fruit Borer, Butterfly, Mealybug'}
    ),

    makeCrop('fruit', 'अंगूर (Grapes)', 'Grapes',
        'Vitis vinifera', '2n = 38',
        {hi:'पश्चिम एशिया एवं भूमध्यसागरीय क्षेत्र',en:'West Asia and Mediterranean Region'},
        {hi:'शुष्क एवं अर्ध-शुष्क',en:'Dry and Semi-arid'},
        {hi:'15°C - 35°C',en:'15°C - 35°C'},
        {hi:'थॉम्पसन सीडलेस, अनाब-ए-शाही, शरद सीडलेस',en:'Thompson Seedless, Anab-e-Shahi, Sharad Seedless'},
        {hi:'डाउनी मिल्ड्यू, पाउडरी मिल्ड्यू, एन्थ्रेक्नोज',en:'Downy Mildew, Powdery Mildew, Anthracnose'},
        {hi:'मिली बग, थ्रिप्स, लीफ हॉपर',en:'Mealybug, Thrips, Leaf Hopper'}
    ),

    makeCrop('fruit', 'कटहल (Jackfruit)', 'Jackfruit',
        'Artocarpus heterophyllus', '2n = 56',
        {hi:'भारत एवं दक्षिण-पूर्व एशिया',en:'India and South-East Asia'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'22°C - 35°C',en:'22°C - 35°C'},
        {hi:'सिंगापुर, गुलाबी, खाजा',en:'Singapore, Pink, Khaja'},
        {hi:'फल सड़न, तना सड़न, एन्थ्रेक्नोज',en:'Fruit Rot, Stem Rot, Anthracnose'},
        {hi:'फल छेदक, तना छेदक, मिली बग',en:'Fruit Borer, Stem Borer, Mealybug'}
    ),

    makeCrop('fruit', 'अनानास (Pineapple)', 'Pineapple',
        'Ananas comosus', '2n = 50',
        {hi:'दक्षिण अमेरिका (ब्राजील)',en:'South America (Brazil)'},
        {hi:'उष्ण एवं आर्द्र',en:'Tropical and Humid'},
        {hi:'22°C - 32°C',en:'22°C - 32°C'},
        {hi:'क्यू, क्वीन, मॉरिशस, MD-2',en:'Kew, Queen, Mauritius, MD-2'},
        {hi:'हृदय सड़न, फल सड़न',en:'Heart Rot, Fruit Rot'},
        {hi:'मिली बग, स्केल कीट',en:'Mealybug, Scale Insect'}
    ),

    makeCrop('fruit', 'आँवला (Indian Gooseberry)', 'Indian Gooseberry',
        'Phyllanthus emblica', '2n = 28',
        {hi:'भारत',en:'India'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय',en:'Tropical and Sub-tropical'},
        {hi:'20°C - 35°C',en:'20°C - 35°C'},
        {hi:'NA-7, NA-10, कृष्णा, कंचन',en:'NA-7, NA-10, Krishna, Kanchan'},
        {hi:'फल सड़न, रतुआ, पत्ती धब्बा',en:'Fruit Rot, Rust, Leaf Spot'},
        {hi:'फल छेदक, छाल खाने वाला कीट',en:'Fruit Borer, Bark Eating Caterpillar'}
    ),

    // --------------------------------------
    // B. VEGETABLE CROPS (सब्जी वाली फसलें)
    // --------------------------------------

    makeCrop('vegetable', 'लहसुन (Garlic)', 'Garlic',
        'Allium sativum', '2n = 16',
        {hi:'मध्य एशिया',en:'Central Asia'},
        {hi:'शीतोष्ण एवं हल्की ठंडी',en:'Temperate and Cool'},
        {hi:'12°C - 25°C',en:'12°C - 25°C'},
        {hi:'जी-1, जी-41, एग्रीफाउंड व्हाइट',en:'G-1, G-41, Agrifound White'},
        {hi:'बैंगनी धब्बा, बेसल रॉट, सफेद सड़न',en:'Purple Blotch, Basal Rot, White Rot'},
        {hi:'थ्रिप्स, माइट्स',en:'Thrips, Mites'}
    ),

    makeCrop('vegetable', 'गाजर (Carrot)', 'Carrot',
        'Daucus carota', '2n = 18',
        {hi:'मध्य एशिया',en:'Central Asia'},
        {hi:'शीतोष्ण एवं ठंडी',en:'Temperate and Cool'},
        {hi:'15°C - 25°C',en:'15°C - 25°C'},
        {hi:'पूसा केसर, नैंटिस, पूसा मेघाली',en:'Pusa Kesar, Nantes, Pusa Meghali'},
        {hi:'अल्टरनेरिया झुलसा, बैक्टीरियल सॉफ्ट रॉट',en:'Alternaria Blight, Bacterial Soft Rot'},
        {hi:'एफिड, रूट फ्लाई',en:'Aphid, Root Fly'}
    ),

    makeCrop('vegetable', 'मूली (Radish)', 'Radish',
        'Raphanus sativus', '2n = 18',
        {hi:'भूमध्यसागरीय एवं एशियाई क्षेत्र',en:'Mediterranean and Asian Region'},
        {hi:'शीत एवं समशीतोष्ण',en:'Cool and Temperate'},
        {hi:'10°C - 25°C',en:'10°C - 25°C'},
        {hi:'पूसा चेतकी, पूसा हिमानी, जापानी व्हाइट',en:'Pusa Chetki, Pusa Himani, Japanese White'},
        {hi:'अल्टरनेरिया, सफेद रतुआ',en:'Alternaria, White Rust'},
        {hi:'मस्टर्ड सॉ फ्लाई, एफिड',en:'Mustard Sawfly, Aphid'}
    ),

    makeCrop('vegetable', 'शकरकंद (Sweet Potato)', 'Sweet Potato',
        'Ipomoea batatas', '2n = 90',
        {hi:'मध्य एवं दक्षिण अमेरिका',en:'Central and South America'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'21°C - 30°C',en:'21°C - 30°C'},
        {hi:'श्री कनका, श्री रत्ना, पूसा सफेद',en:'Sree Kanaka, Sree Ratna, Pusa Safed'},
        {hi:'काला सड़न, जड़ सड़न',en:'Black Rot, Root Rot'},
        {hi:'स्वीट पोटेटो वीविल, व्हाइट ग्रब',en:'Sweet Potato Weevil, White Grub'}
    ),

    makeCrop('vegetable', 'चुकन्दर (Beetroot)', 'Beetroot',
        'Beta vulgaris', '2n = 18',
        {hi:'भूमध्यसागरीय क्षेत्र',en:'Mediterranean Region'},
        {hi:'शीतोष्ण एवं ठंडी',en:'Temperate and Cool'},
        {hi:'15°C - 25°C',en:'15°C - 25°C'},
        {hi:'डेट्रॉइट डार्क रेड, क्रिमसन ग्लोब',en:'Detroit Dark Red, Crimson Globe'},
        {hi:'सर्कोस्पोरा पत्ती धब्बा, डाउनी मिल्ड्यू',en:'Cercospora Leaf Spot, Downy Mildew'},
        {hi:'एफिड, लीफ माइनर',en:'Aphid, Leaf Miner'}
    ),

    makeCrop('vegetable', 'बैंगन (Brinjal)', 'Brinjal',
        'Solanum melongena', '2n = 24',
        {hi:'भारत एवं दक्षिण-पूर्व एशिया',en:'India and South-East Asia'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'22°C - 30°C',en:'22°C - 30°C'},
        {hi:'पूसा पर्पल लॉन्ग, पूसा हाइब्रिड-6, अर्का निधि',en:'Pusa Purple Long, Pusa Hybrid-6, Arka Nidhi'},
        {hi:'फोमोप्सिस झुलसा, जीवाणु उकठा',en:'Phomopsis Blight, Bacterial Wilt'},
        {hi:'फल एवं तना छेदक, जैसिड, सफेद मक्खी',en:'Shoot and Fruit Borer, Jassid, Whitefly'}
    ),

    makeCrop('vegetable', 'भिंडी (Okra)', 'Okra',
        'Abelmoschus esculentus', '2n = 130',
        {hi:'अफ्रीका',en:'Africa'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'25°C - 35°C',en:'25°C - 35°C'},
        {hi:'अर्का अनामिका, परभनी क्रांति, पूसा सावनी',en:'Arka Anamika, Parbhani Kranti, Pusa Sawani'},
        {hi:'पीला शिरा मोजेक, चूर्णिल आसिता',en:'Yellow Vein Mosaic, Powdery Mildew'},
        {hi:'जैसिड, सफेद मक्खी, फल छेदक',en:'Jassid, Whitefly, Fruit Borer'}
    ),

    makeCrop('vegetable', 'फूलगोभी (Cauliflower)', 'Cauliflower',
        'Brassica oleracea var. botrytis', '2n = 18',
        {hi:'भूमध्यसागरीय क्षेत्र',en:'Mediterranean Region'},
        {hi:'शीत एवं समशीतोष्ण',en:'Cool and Temperate'},
        {hi:'15°C - 25°C',en:'15°C - 25°C'},
        {hi:'पूसा अर्ली सिंथेटिक, पूसा दीपाली, स्नोबॉल-16',en:'Pusa Early Synthetic, Pusa Deepali, Snowball-16'},
        {hi:'ब्लैक रॉट, डाउनी मिल्ड्यू, ब्लैक लेग',en:'Black Rot, Downy Mildew, Black Leg'},
        {hi:'डायमंड बैक मॉथ, कैबेज बटरफ्लाई, एफिड',en:'Diamondback Moth, Cabbage Butterfly, Aphid'}
    ),

    makeCrop('vegetable', 'मटर (Pea)', 'Pea',
        'Pisum sativum', '2n = 14',
        {hi:'भूमध्यसागरीय एवं निकट पूर्व',en:'Mediterranean and Near East'},
        {hi:'ठंडी एवं शुष्क',en:'Cool and Dry'},
        {hi:'10°C - 25°C',en:'10°C - 25°C'},
        {hi:'आर्किल, बोनविले, आजाद पी-1',en:'Arkel, Bonneville, Azad P-1'},
        {hi:'चूर्णिल आसिता, उकठा, रतुआ',en:'Powdery Mildew, Wilt, Rust'},
        {hi:'माहू, फली छेदक',en:'Aphid, Pod Borer'}
    ),

    makeCrop('vegetable', 'पालक (Spinach)', 'Spinach',
        'Spinacia oleracea', '2n = 12',
        {hi:'मध्य एवं दक्षिण-पश्चिम एशिया',en:'Central and South-West Asia'},
        {hi:'शीत एवं ठंडी',en:'Cool and Cold'},
        {hi:'10°C - 25°C',en:'10°C - 25°C'},
        {hi:'ऑल ग्रीन, पूसा ज्योति, पूसा हरित',en:'All Green, Pusa Jyoti, Pusa Harit'},
        {hi:'डाउनी मिल्ड्यू, लीफ स्पॉट',en:'Downy Mildew, Leaf Spot'},
        {hi:'एफिड, लीफ माइनर',en:'Aphid, Leaf Miner'}
    ),

    makeCrop('vegetable', 'लौकी (Bottle Gourd)', 'Bottle Gourd',
        'Lagenaria siceraria', '2n = 22',
        {hi:'अफ्रीका',en:'Africa'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'25°C - 35°C',en:'25°C - 35°C'},
        {hi:'पूसा नवीन, पूसा संदेश, नरेंद्र रश्मि',en:'Pusa Naveen, Pusa Sandesh, Narendra Rashmi'},
        {hi:'पाउडरी मिल्ड्यू, डाउनी मिल्ड्यू',en:'Powdery Mildew, Downy Mildew'},
        {hi:'फल मक्खी, रेड पंपकिन बीटल',en:'Fruit Fly, Red Pumpkin Beetle'}
    ),

    makeCrop('vegetable', 'करेला (Bitter Gourd)', 'Bitter Gourd',
        'Momordica charantia', '2n = 22',
        {hi:'भारत एवं दक्षिण-पूर्व एशिया',en:'India and South-East Asia'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'25°C - 35°C',en:'25°C - 35°C'},
        {hi:'पूसा विशेष, अर्का हरित, प्रिया',en:'Pusa Vishesh, Arka Harit, Priya'},
        {hi:'डाउनी मिल्ड्यू, पाउडरी मिल्ड्यू, मोजेक',en:'Downy Mildew, Powdery Mildew, Mosaic'},
        {hi:'फल मक्खी, एफिड, रेड पंपकिन बीटल',en:'Fruit Fly, Aphid, Red Pumpkin Beetle'}
    ),

    makeCrop('vegetable', 'कद्दू (Pumpkin)', 'Pumpkin',
        'Cucurbita moschata', '2n = 40',
        {hi:'मध्य एवं दक्षिण अमेरिका',en:'Central and South America'},
        {hi:'गर्म एवं आर्द्र',en:'Warm and Humid'},
        {hi:'20°C - 30°C',en:'20°C - 30°C'},
        {hi:'अर्का चंदन, पूसा विश्वास, अंबिली',en:'Arka Chandan, Pusa Vishwas, Ambili'},
        {hi:'डाउनी मिल्ड्यू, पाउडरी मिल्ड्यू',en:'Downy Mildew, Powdery Mildew'},
        {hi:'रेड पंपकिन बीटल, फल मक्खी',en:'Red Pumpkin Beetle, Fruit Fly'}
    ),

    // --------------------------------------
    // C. FLOWER CROPS (फूल वाली फसलें)
    // --------------------------------------

    makeCrop('flower', 'चमेली (Jasmine)', 'Jasmine',
        'Jasminum sambac', '2n = 26',
        {hi:'भारत एवं दक्षिण-पूर्व एशिया',en:'India and South-East Asia'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय',en:'Tropical and Sub-tropical'},
        {hi:'20°C - 30°C',en:'20°C - 30°C'},
        {hi:'मदनबन, गुंडुमल्ली, रामबनम',en:'Madanban, Gundumalli, Ramban'},
        {hi:'पत्ती धब्बा, उकठा, कली सड़न',en:'Leaf Spot, Wilt, Bud Rot'},
        {hi:'मिली बग, कली छेदक, लीफ वेबber',en:'Mealybug, Bud Borer, Leaf Webber'}
    ),

    makeCrop('flower', 'गुलदाउदी (Chrysanthemum)', 'Chrysanthemum',
        'Chrysanthemum morifolium', '2n = 54',
        {hi:'चीन एवं पूर्वी एशिया',en:'China and East Asia'},
        {hi:'समशीतोष्ण एवं हल्की ठंडी',en:'Temperate and Mild Cool'},
        {hi:'15°C - 25°C',en:'15°C - 25°C'},
        {hi:'चंद्रमा, पूसा सेंट, पूसा अनुराधा',en:'Chandrama, Pusa Cent, Pusa Anuradha'},
        {hi:'लीफ स्पॉट, रतुआ, पाउडरी मिल्ड्यू',en:'Leaf Spot, Rust, Powdery Mildew'},
        {hi:'एफिड, थ्रिप्स, लीफ माइनर',en:'Aphid, Thrips, Leaf Miner'}
    ),

    makeCrop('flower', 'कमल (Lotus)', 'Lotus',
        'Nelumbo nucifera', '2n = 16',
        {hi:'एशिया',en:'Asia'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय',en:'Tropical and Sub-tropical'},
        {hi:'20°C - 35°C',en:'20°C - 35°C'},
        {hi:'स्थानीय गुलाबी कमल, सफेद कमल',en:'Local Pink Lotus, White Lotus'},
        {hi:'पत्ती धब्बा, पत्ती सड़न',en:'Leaf Spot, Leaf Rot'},
        {hi:'एफिड, लीफ माइनर, जलीय कीट',en:'Aphid, Leaf Miner, Aquatic Insects'}
    ),

    // --------------------------------------
    // D. SPICE CROPS (मसाले वाली फसलें)
    // --------------------------------------

    makeCrop('spice', 'जीरा (Cumin)', 'Cumin',
        'Cuminum cyminum', '2n = 14',
        {hi:'भूमध्यसागरीय एवं पश्चिम एशिया',en:'Mediterranean and West Asia'},
        {hi:'शीत एवं शुष्क',en:'Cool and Dry'},
        {hi:'15°C - 25°C',en:'15°C - 25°C'},
        {hi:'आरजेड-19, आरजेड-209, जीसी-4',en:'RZ-19, RZ-209, GC-4'},
        {hi:'उकठा, झुलसा, चूर्णिल आसिता',en:'Wilt, Blight, Powdery Mildew'},
        {hi:'एफिड, माइट्स',en:'Aphid, Mites'}
    ),

    makeCrop('spice', 'काली मिर्च (Black Pepper)', 'Black Pepper',
        'Piper nigrum', '2n = 52',
        {hi:'भारत (पश्चिमी घाट)',en:'India (Western Ghats)'},
        {hi:'गर्म एवं अत्यधिक आर्द्र',en:'Warm and Very Humid'},
        {hi:'23°C - 32°C',en:'23°C - 32°C'},
        {hi:'पन्नियूर-1, श्रीकारा, पंचमी',en:'Panniyur-1, Sreekara, Panchami'},
        {hi:'फाइटोफ्थोरा फुट रॉट, क्विक विल्ट',en:'Phytophthora Foot Rot, Quick Wilt'},
        {hi:'पोलू बीटल, स्केल कीट',en:'Pollu Beetle, Scale Insect'}
    ),

    makeCrop('spice', 'इलायची (Cardamom)', 'Cardamom',
        'Elettaria cardamomum', '2n = 48',
        {hi:'भारत के पश्चिमी घाट',en:'Western Ghats of India'},
        {hi:'ठंडी एवं आर्द्र',en:'Cool and Humid'},
        {hi:'15°C - 25°C',en:'15°C - 25°C'},
        {hi:'मालाबार, मैसूर, वझुक्का',en:'Malabar, Mysore, Vazhukka'},
        {hi:'कैंप्टोड्रोमस रोग, कत्ती रोग',en:'Katte Disease, Capsule Rot'},
        {hi:'थ्रिप्स, शूट बोरर',en:'Thrips, Shoot Borer'}
    ),

    makeCrop('spice', 'लौंग (Clove)', 'Clove',
        'Syzygium aromaticum', '2n = 22',
        {hi:'इंडोनेशिया (मालुकु द्वीप)',en:'Indonesia (Maluku Islands)'},
        {hi:'उष्ण एवं आर्द्र',en:'Tropical and Humid'},
        {hi:'20°C - 30°C',en:'20°C - 30°C'},
        {hi:'स्थानीय चयनित किस्में',en:'Local Selected Types'},
        {hi:'लीफ ब्लाइट, डाईबैक',en:'Leaf Blight, Dieback'},
        {hi:'स्केल कीट, स्टेम बोरर',en:'Scale Insect, Stem Borer'}
    ),

    // --------------------------------------
    // E. PLANTATION CROPS (बागान वाली फसलें)
    // --------------------------------------

    makeCrop('plantation', 'चाय (Tea)', 'Tea',
        'Camellia sinensis', '2n = 30',
        {hi:'चीन एवं दक्षिण-पूर्व एशिया',en:'China and South-East Asia'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय, आर्द्र',en:'Tropical and Sub-tropical, Humid'},
        {hi:'18°C - 30°C',en:'18°C - 30°C'},
        {hi:'असम, चाइना, कंबोड',en:'Assam, China, Cambod'},
        {hi:'ब्लिस्टर ब्लाइट, रेड रस्ट',en:'Blister Blight, Red Rust'},
        {hi:'टी मॉस्किटो बग, लूपर कैटरपिलर',en:'Tea Mosquito Bug, Looper Caterpillar'}
    ),

    makeCrop('plantation', 'कॉफी (Coffee)', 'Coffee',
        'Coffea arabica', '2n = 44',
        {hi:'इथियोपिया',en:'Ethiopia'},
        {hi:'उष्ण एवं छायादार',en:'Tropical and Shaded'},
        {hi:'15°C - 28°C',en:'15°C - 28°C'},
        {hi:'एस-795, केंट, चंद्रगिरि',en:'S-795, Kent, Chandragiri'},
        {hi:'कॉफी लीफ रस्ट, बेरी डिजीज',en:'Coffee Leaf Rust, Berry Disease'},
        {hi:'कॉफी बेरी बोरर, व्हाइट स्टेम बोरर',en:'Coffee Berry Borer, White Stem Borer'}
    ),

    makeCrop('plantation', 'नारियल (Coconut)', 'Coconut',
        'Cocos nucifera', '2n = 32',
        {hi:'दक्षिण-पूर्व एशिया एवं प्रशांत क्षेत्र',en:'South-East Asia and Pacific Region'},
        {hi:'उष्ण एवं आर्द्र',en:'Tropical and Humid'},
        {hi:'27°C - 32°C',en:'27°C - 32°C'},
        {hi:'वेस्ट कोस्ट टॉल, ईस्ट कोस्ट टॉल, चौघाट ऑरेंज ड्वार्फ',en:'West Coast Tall, East Coast Tall, Chowghat Orange Dwarf'},
        {hi:'बड रॉट, लीफ रॉट, स्टेम ब्लीडिंग',en:'Bud Rot, Leaf Rot, Stem Bleeding'},
        {hi:'राइनोसेरस बीटल, रेड पाम वीविल',en:'Rhinoceros Beetle, Red Palm Weevil'}
    ),

    makeCrop('plantation', 'रबर (Rubber)', 'Rubber',
        'Hevea brasiliensis', '2n = 36',
        {hi:'ब्राजील (अमेजन क्षेत्र)',en:'Brazil (Amazon Region)'},
        {hi:'गर्म एवं अत्यधिक आर्द्र',en:'Warm and Very Humid'},
        {hi:'25°C - 35°C',en:'25°C - 35°C'},
        {hi:'RRII-105, RRIM-600, GT-1',en:'RRII-105, RRIM-600, GT-1'},
        {hi:'पिंक डिजीज, पाउडरी मिल्ड्यू, एब्स्ट्रैक्ट ब्लाइट',en:'Pink Disease, Powdery Mildew, Abnormal Leaf Fall'},
        {hi:'स्केल कीट, मिली बग',en:'Scale Insect, Mealybug'}
    ),

    makeCrop('plantation', 'काजू (Cashew)', 'Cashew',
        'Anacardium occidentale', '2n = 42',
        {hi:'ब्राजील (दक्षिण अमेरिका)',en:'Brazil (South America)'},
        {hi:'उष्ण एवं शुष्क',en:'Tropical and Dry'},
        {hi:'24°C - 32°C',en:'24°C - 32°C'},
        {hi:'वेंगुर्ला-4, वेंगुर्ला-7, उल्लाल-1',en:'Vengurla-4, Vengurla-7, Ullal-1'},
        {hi:'एन्थ्रेक्नोज, टी मॉस्किटो बग से क्षति',en:'Anthracnose, Tea Mosquito Bug Damage'},
        {hi:'टी मॉस्किटो बग, स्टेम एवं रूट बोरर',en:'Tea Mosquito Bug, Stem and Root Borer'}
    ),

    makeCrop('plantation', 'सुपारी (Arecanut)', 'Arecanut',
        'Areca catechu', '2n = 32',
        {hi:'मलय द्वीपसमूह एवं दक्षिण-पूर्व एशिया',en:'Malay Archipelago and South-East Asia'},
        {hi:'उष्ण एवं आर्द्र',en:'Tropical and Humid'},
        {hi:'20°C - 35°C',en:'20°C - 35°C'},
        {hi:'मंगलोर, सुमंगला, श्रीवर्धन',en:'Mangalore, Sumangala, Srivardhan'},
        {hi:'महाली रोग, कोलेटोट्रिकम फल सड़न',en:'Mahali Disease, Colletotrichum Fruit Rot'},
        {hi:'रेड पाम वीविल, स्पिंडल बग',en:'Red Palm Weevil, Spindle Bug'}
    ),

    // --------------------------------------
    // F. MEDICINAL CROPS (औषधीय फसलें)
    // --------------------------------------

    makeCrop('medicinal', 'अश्वगंधा (Ashwagandha)', 'Ashwagandha',
        'Withania somnifera', '2n = 48',
        {hi:'भारत एवं भूमध्यसागरीय क्षेत्र',en:'India and Mediterranean Region'},
        {hi:'शुष्क एवं अर्ध-शुष्क',en:'Arid and Semi-arid'},
        {hi:'20°C - 35°C',en:'20°C - 35°C'},
        {hi:'जवाहर अश्वगंधा-20, पनर-1',en:'Jawahar Ashwagandha-20, PNR-1'},
        {hi:'अल्टरनेरिया पत्ती धब्बा, जड़ सड़न',en:'Alternaria Leaf Spot, Root Rot'},
        {hi:'माहू, माइट्स',en:'Aphid, Mites'}
    ),

    makeCrop('medicinal', 'एलोवेरा (Aloe Vera)', 'Aloe Vera',
        'Aloe vera', '2n = 14',
        {hi:'अरब प्रायद्वीप',en:'Arabian Peninsula'},
        {hi:'गर्म एवं शुष्क',en:'Hot and Dry'},
        {hi:'20°C - 35°C',en:'20°C - 35°C'},
        {hi:'IC111271, IC111269, स्थानीय किस्में',en:'IC111271, IC111269, Local Varieties'},
        {hi:'एन्थ्रेक्नोज, जड़ सड़न',en:'Anthracnose, Root Rot'},
        {hi:'मिली बग, स्केल कीट',en:'Mealybug, Scale Insect'}
    ),

    makeCrop('medicinal', 'लेमनग्रास (Lemongrass)', 'Lemongrass',
        'Cymbopogon flexuosus', '2n = 20',
        {hi:'भारत एवं दक्षिण-पूर्व एशिया',en:'India and South-East Asia'},
        {hi:'उष्ण एवं उपोष्णकटिबंधीय',en:'Tropical and Sub-tropical'},
        {hi:'20°C - 30°C',en:'20°C - 30°C'},
        {hi:'प्रगति, कावेरी, कृष्णा',en:'Pragati, Cauvery, Krishna'},
        {hi:'लीफ ब्लाइट, रस्ट',en:'Leaf Blight, Rust'},
        {hi:'स्टेम बोरर, दीमक',en:'Stem Borer, Termite'}
    )

];

// ==========================================
// 5. ADD NEW CROPS TO MAIN CROPS DATA
// ==========================================

cropsData.push(...newHorticultureCrops);

// ==========================================
// 6. CATEGORY FILTER LIST
// ==========================================

const allCategories = [
    { id: 'cereal', name: {hi:'खाद्यान्न फसल',en:'Cereal Crop'} },
    { id: 'pulse', name: {hi:'दलहनी फसल',en:'Pulse Crop'} },
    { id: 'oilseed', name: {hi:'तिलहनी फसल',en:'Oilseed Crop'} },
    { id: 'commercial', name: {hi:'व्यावसायिक फसल',en:'Commercial Crop'} },
    { id: 'medicinal', name: {hi:'औषधीय फसल',en:'Medicinal Crop'} },
    { id: 'fruit', name: {hi:'फल वाली फसल',en:'Fruit Crop'} },
    { id: 'vegetable', name: {hi:'सब्जी वाली फसल',en:'Vegetable Crop'} },
    { id: 'flower', name: {hi:'फूल वाली फसल',en:'Flower Crop'} },
    { id: 'spice', name: {hi:'मसाले वाली फसल',en:'Spice Crop'} },
    { id: 'plantation', name: {hi:'बागान वाली फसल',en:'Plantation Crop'} }
];

// ==========================================
// 7. CHECK TOTAL CROPS
// ==========================================

console.log('Total Crops:', cropsData.length);
console.log('New Crops Added:', newHorticultureCrops.length);

console.log(
    'Category Wise Count:',
    allCategories.map(cat => ({
        category: cat.name.hi,
        count: cropsData.filter(crop => crop.category === cat.id).length
    }))
);
