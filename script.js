let currentLang = 'hi';
let currentCategory = 'all';

const cropsData = [
    // 1. CEREAL / UDYAN CROPS (खाद्यान्न फसलें)
    {
        category: 'cereal',
        catName: { hi: 'खाद्यान्न फसल', en: 'Cereal Crop' },
        name: { hi: 'धान (Paddy/Rice)', en: 'Paddy / Rice' },
        bn: 'Oryza sativa',
        chromosome: '2n = 24',
        origin: { hi: 'दक्षिण-पूर्व एशिया (भारत-बर्मा)', en: 'South-East Asia (Indo-Burma)' },
        climate: { hi: 'गर्म एवं आर्द्र (उष्णकटिबंधीय)', en: 'Hot and Humid (Tropical)' },
        temp: { hi: '21°C - 37°C', en: '21°C - 37°C' },
        varieties: { hi: 'पूसा बासमती-1, IR-64, जया, रत्ना, स्वर्णा', en: 'Pusa Basmati-1, IR-64, Jaya, Ratna, Swarna' },
        diseases: { hi: 'खैरा रोग (Zn की कमी), झुलसा (Blast), जीवाणु पत्ती अंगमारी', en: 'Khaira (Zn deficiency), Blast, Bacterial Leaf Blight' },
        pests: { hi: 'तना छेदक, गंधी बग, भूरा फुदका (BPH)', en: 'Stem Borer, Gundhi Bug, Brown Plant Hopper' }
    },
    {
        category: 'cereal',
        catName: { hi: 'खाद्यान्न फसल', en: 'Cereal Crop' },
        name: { hi: 'गेहूँ (Wheat)', en: 'Wheat' },
        bn: 'Triticum aestivum',
        chromosome: '2n = 42 (Hexaploid)',
        origin: { hi: 'दक्षिण-पश्चिम एशिया (तुर्की)', en: 'South-West Asia (Turkey)' },
        climate: { hi: 'शीतोष्ण एवं शुष्क (रबी)', en: 'Temperate and Dry (Rabi)' },
        temp: { hi: '15°C - 25°C', en: '15°C - 25°C' },
        varieties: { hi: 'HD-2967, लोक-1, सोनालिका, कल्याण सोना, DBW-187', en: 'HD-2967, Lok-1, Sonalika, Kalyan Sona, DBW-187' },
        diseases: { hi: 'गेरुआ (काला, भूरा, पीला रतुआ), करनाल बंट, अनावृत कंडवा', en: 'Rust (Black, Brown, Yellow), Karnal Bunt, Loose Smut' },
        pests: { hi: 'दीमक, माहू (Aphid), गुझिया वीविल', en: 'Termite, Aphid, Gujhia Weevil' }
    },
    {
        category: 'cereal',
        catName: { hi: 'खाद्यान्न फसल', en: 'Cereal Crop' },
        name: { hi: 'मक्का (Maize)', en: 'Maize' },
        bn: 'Zea mays',
        chromosome: '2n = 20',
        origin: { hi: 'मध्य अमेरिका (मेक्सिको)', en: 'Central America (Mexico)' },
        climate: { hi: 'उष्ण एवं उपोष्णकटिबंधीय', en: 'Tropical and Sub-tropical' },
        temp: { hi: '21°C - 30°C', en: '21°C - 30°C' },
        varieties: { hi: 'गंगा-5, शक्तिमान-1, विक्रम, पूसा विवेक', en: 'Ganga-5, Shaktiman-1, Vikram, Pusa Vivek' },
        diseases: { hi: 'पत्ती झुलसा, तुलासिता (Downy Mildew), तना सड़न', en: 'Leaf Blight, Downy Mildew, Stalk Rot' },
        pests: { hi: 'तना छेदक (Chilo partellus), फॉल आर्मीवर्म', en: 'Stem Borer, Fall Armyworm' }
    },
    {
        category: 'cereal',
        catName: { hi: 'खाद्यान्न फसल', en: 'Cereal Crop' },
        name: { hi: 'ज्वार (Sorghum)', en: 'Sorghum' },
        bn: 'Sorghum bicolor',
        chromosome: '2n = 20',
        origin: { hi: 'अफ्रीका (इथियोपिया)', en: 'Africa (Ethiopia)' },
        climate: { hi: 'गर्म एवं अर्ध-शुष्क', en: 'Warm and Semi-arid' },
        temp: { hi: '26°C - 32°C', en: '26°C - 32°C' },
        varieties: { hi: 'CSH-1, CSH-9, CSV-15, पूसा चरी', en: 'CSH-1, CSH-9, CSV-15, Pusa Chari' },
        diseases: { hi: 'कंडवा (Grain Smut), एन्थ्रेक्नोज, अर्गट', en: 'Grain Smut, Anthracnose, Ergot' },
        pests: { hi: 'प्ररोह मक्खी (Shoot Fly), तना छेदक', en: 'Shoot Fly, Stem Borer' }
    },
    {
        category: 'cereal',
        catName: { hi: 'खाद्यान्न फसल', en: 'Cereal Crop' },
        name: { hi: 'बाजरा (Pearl Millet)', en: 'Pearl Millet' },
        bn: 'Pennisetum glaucum',
        chromosome: '2n = 14',
        origin: { hi: 'पश्चिम अफ्रीका', en: 'West Africa' },
        climate: { hi: 'गर्म एवं शुष्क (सूखा सहिष्णु)', en: 'Hot and Dry (Drought tolerant)' },
        temp: { hi: '25°C - 35°C', en: '25°C - 35°C' },
        varieties: { hi: 'HHB-67, पूसा मोती, राज-171, ICMH-451', en: 'HHB-67, Pusa Moti, Raj-171, ICMH-451' },
        diseases: { hi: 'हरित बाली रोग (Green Ear), अर्गट, कंडवा', en: 'Green Ear Disease, Ergot, Smut' },
        pests: { hi: 'सफेद लट (White Grub), टिड्डा', en: 'White Grub, Grasshopper' }
    },
    {
        category: 'cereal',
        catName: { hi: 'खाद्यान्न फसल', en: 'Cereal Crop' },
        name: { hi: 'जौ (Barley)', en: 'Barley' },
        bn: 'Hordeum vulgare',
        chromosome: '2n = 14',
        origin: { hi: 'इथियोपिया एवं दक्षिण-पूर्व एशिया', en: 'Ethiopia & South-East Asia' },
        climate: { hi: 'शीत एवं शुष्क', en: 'Cool and Dry' },
        temp: { hi: '12°C - 22°C', en: '12°C - 22°C' },
        varieties: { hi: 'ज्योति, रत्ना, RD-2552, डोलमा', en: 'Jyoti, Ratna, RD-2552, Dolma' },
        diseases: { hi: 'आवृत कंडवा (Covered Smut), धारीदार रोग, रतुआ', en: 'Covered Smut, Stripe Disease, Rust' },
        pests: { hi: 'माहू (Aphid), दीमक', en: 'Aphid, Termite' }
    },

    // 2. PULSE CROPS (दलहनी फसलें)
    {
        category: 'pulse',
        catName: { hi: 'दलहनी फसल', en: 'Pulse Crop' },
        name: { hi: 'चना (Chickpea)', en: 'Chickpea' },
        bn: 'Cicer arietinum',
        chromosome: '2n = 14, 16',
        origin: { hi: 'दक्षिण-पश्चिम एशिया', en: 'South-West Asia' },
        climate: { hi: 'शीतोष्ण एवं शुष्क', en: 'Temperate and Dry' },
        temp: { hi: '15°C - 25°C', en: '15°C - 25°C' },
        varieties: { hi: 'पूसा-256, अवरोधी, विशाल, काबुली-1', en: 'Pusa-256, Avrodhi, Vishal, Kabuli-1' },
        diseases: { hi: 'उकठा रोग (Wilt), एस्कोकाइटा अंगमारी', en: 'Fusarium Wilt, Ascochyta Blight' },
        pests: { hi: 'फली छेदक (Helicoverpa armigera), कटुआ कीट', en: 'Pod Borer, Cutworm' }
    },
    {
        category: 'pulse',
        catName: { hi: 'दलहनी फसल', en: 'Pulse Crop' },
        name: { hi: 'अरहर (Pigeon Pea)', en: 'Pigeon Pea' },
        bn: 'Cajanus cajan',
        chromosome: '2n = 22',
        origin: { hi: 'अफ्रीका / भारत', en: 'Africa / India' },
        climate: { hi: 'गर्म एवं आर्द्र (उष्णकटिबंधीय)', en: 'Warm and Humid (Tropical)' },
        temp: { hi: '20°C - 30°C', en: '20°C - 30°C' },
        varieties: { hi: 'UPAS-120, प्रभात, बहार, मालवीय चमत्कार', en: 'UPAS-120, Prabhat, Bahar, Malviya Chamatkar' },
        diseases: { hi: 'उकठा रोग (Wilt), बांझपन मोजेक (Sterility Mosaic)', en: 'Wilt, Sterility Mosaic' },
        pests: { hi: 'फली मक्खी, फली छेदक, प्लम मॉथ', en: 'Pod Fly, Pod Borer, Plume Moth' }
    },
    {
        category: 'pulse',
        catName: { hi: 'दलहनी फसल', en: 'Pulse Crop' },
        name: { hi: 'मूंग (Green Gram)', en: 'Green Gram' },
        bn: 'Vigna radiata',
        chromosome: '2n = 22',
        origin: { hi: 'भारत', en: 'India' },
        climate: { hi: 'गर्म एवं अर्ध-शुष्क', en: 'Hot and Semi-arid' },
        temp: { hi: '25°C - 35°C', en: '25°C - 35°C' },
        varieties: { hi: 'पूसा बैसाखी, सम्राट, विराट, टाइप-44', en: 'Pusa Baisakhi, Samrat, Virat, Type-44' },
        diseases: { hi: 'पीला मोजेक वायरस (YMV), चूर्णिल आसिता', en: 'Yellow Mosaic Virus (YMV), Powdery Mildew' },
        pests: { hi: 'सफेद मक्खी (Whitefly), फली छेदक', en: 'Whitefly, Pod Borer' }
    },
    {
        category: 'pulse',
        catName: { hi: 'दलहनी फसल', en: 'Pulse Crop' },
        name: { hi: 'उड़द (Black Gram)', en: 'Black Gram' },
        bn: 'Vigna mungo',
        chromosome: '2n = 22',
        origin: { hi: 'भारत', en: 'India' },
        climate: { hi: 'गर्म एवं आर्द्र', en: 'Warm and Humid' },
        temp: { hi: '25°C - 35°C', en: '25°C - 35°C' },
        varieties: { hi: 'पंत उड़द-31, टी-9, शेखर-2, उत्तरा', en: 'Pant Urd-31, T-9, Shekhar-2, Uttara' },
        diseases: { hi: 'पीला मोजेक, पत्ती धब्बा (Cercospora)', en: 'Yellow Mosaic, Cercospora Leaf Spot' },
        pests: { hi: 'सफेद मक्खी, जैसिड (हरा फुदका)', en: 'Whitefly, Jassids' }
    },
    {
        category: 'pulse',
        catName: { hi: 'दलहनी फसल', en: 'Pulse Crop' },
        name: { hi: 'मसूर (Lentil)', en: 'Lentil' },
        bn: 'Lens culinaris',
        chromosome: '2n = 14',
        origin: { hi: 'मिस्र / दक्षिण-पश्चिम एशिया', en: 'Egypt / South-West Asia' },
        climate: { hi: 'ठंडी एवं शुष्क (रबी)', en: 'Cool and Dry (Rabi)' },
        temp: { hi: '15°C - 25°C', en: '15°C - 25°C' },
        varieties: { hi: 'पंत मसूर-5, शिवालिक, मल्लिका, गरिमा', en: 'Pant Masoor-5, Shivalik, Mallika, Garima' },
        diseases: { hi: 'रतुआ (Rust), उकठा (Wilt)', en: 'Rust, Wilt' },
        pests: { hi: 'माहू (Aphid), फली छेदक', en: 'Aphid, Pod Borer' }
    },

    // 3. OILSEED CROPS (तिलहनी फसलें)
    {
        category: 'oilseed',
        catName: { hi: 'तिलहनी फसल', en: 'Oilseed Crop' },
        name: { hi: 'सोयाबीन (Soybean)', en: 'Soybean' },
        bn: 'Glycine max',
        chromosome: '2n = 40',
        origin: { hi: 'चीन', en: 'China' },
        climate: { hi: 'गर्म एवं नम', en: 'Warm and Moist' },
        temp: { hi: '25°C - 30°C', en: '25°C - 30°C' },
        varieties: { hi: 'JS-335, JS-95-60, अहिल्या, इंदिरा सोया-9', en: 'JS-335, JS-95-60, Ahilya, Indira Soya-9' },
        diseases: { hi: 'पीला मोजेक, चारकोल सड़न, बैक्टीरियल पस्ट्यूल', en: 'Yellow Mosaic, Charcoal Rot, Bacterial Pustule' },
        pests: { hi: 'गर्डल बीटल (Girdle Beetle), बिहार रोमिल सुंडी', en: 'Girdle Beetle, Bihar Hairy Caterpillar' }
    },
    {
        category: 'oilseed',
        catName: { hi: 'तिलहनी फसल', en: 'Oilseed Crop' },
        name: { hi: 'सरसों (Mustard)', en: 'Mustard' },
        bn: 'Brassica juncea',
        chromosome: '2n = 36',
        origin: { hi: 'चीन / भारत', en: 'China / India' },
        climate: { hi: 'शीतोष्ण एवं शुष्क', en: 'Temperate and Dry' },
        temp: { hi: '15°C - 25°C', en: '15°C - 25°C' },
        varieties: { hi: 'पूसा बोल्ड, वरुणा (T-59), क्रांति, गिरिराज', en: 'Pusa Bold, Varuna (T-59), Kranti, Giriraj' },
        diseases: { hi: 'सफेद रतुआ (White Rust), अल्टरनेरिया अंगमारी', en: 'White Rust, Alternaria Blight' },
        pests: { hi: 'चेपा/माहू (Mustard Aphid), आरा मक्खी', en: 'Mustard Aphid, Sawfly' }
    },
    {
        category: 'oilseed',
        catName: { hi: 'तिलहनी फसल', en: 'Oilseed Crop' },
        name: { hi: 'सूरजमुखी (Sunflower)', en: 'Sunflower' },
        bn: 'Helianthus annuus',
        chromosome: '2n = 34',
        origin: { hi: 'उत्तरी अमेरिका (मेक्सिको)', en: 'North America (Mexico)' },
        climate: { hi: 'समशीतोष्ण एवं उष्ण (प्रकाश निष्प्रभावी)', en: 'Temperate & Tropical (Photo-insensitive)' },
        temp: { hi: '20°C - 28°C', en: '20°C - 28°C' },
        varieties: { hi: 'मॉडर्न, ज्वालामुखी, KBSH-1, सूर्या', en: 'Morden, Jwalamukhi, KBSH-1, Surya' },
        diseases: { hi: 'सिर सड़न (Head Rot), अल्टरनेरिया झुलसा', en: 'Head Rot, Alternaria Blight' },
        pests: { hi: 'हरा फुदका, तंबाकू सुंडी', en: 'Leafhopper, Tobacco Caterpillar' }
    },
    {
        category: 'oilseed',
        catName: { hi: 'तिलहनी फसल', en: 'Oilseed Crop' },
        name: { hi: 'मूंगफली (Groundnut)', en: 'Groundnut' },
        bn: 'Arachis hypogaea',
        chromosome: '2n = 40',
        origin: { hi: 'दक्षिण अमेरिका (ब्राजील)', en: 'South America (Brazil)' },
        climate: { hi: 'गर्म एवं अर्ध-शुष्क', en: 'Warm and Semi-arid' },
        temp: { hi: '25°C - 30°C', en: '25°C - 30°C' },
        varieties: { hi: 'ज्योति, गिरनार-2, कौशल, चंद्रा', en: 'Jyoti, Girnar-2, Kaushal, Chandra' },
        diseases: { hi: 'टिक्का रोग (Tikka Leaf Spot), कॉलर सड़न, रोजेट वायरस', en: 'Tikka Disease, Collar Rot, Rosette Virus' },
        pests: { hi: 'सफेद लट (White Grub), पत्ती सुरंगक', en: 'White Grub, Leaf Miner' }
    },
    {
        category: 'oilseed',
        catName: { hi: 'तिलहनी फसल', en: 'Oilseed Crop' },
        name: { hi: 'तिल (Sesame)', en: 'Sesame' },
        bn: 'Sesamum indicum',
        chromosome: '2n = 26',
        origin: { hi: 'दक्षिण-पश्चिम अफ्रीका / भारत', en: 'South-West Africa / India' },
        climate: { hi: 'गर्म एवं शुष्क', en: 'Hot and Dry' },
        temp: { hi: '25°C - 35°C', en: '25°C - 35°C' },
        varieties: { hi: 'प्रगति, शेखर, टी-4, आरटी-351', en: 'Pragati, Shekhar, T-4, RT-351' },
        diseases: { hi: 'फिलोडी (Phyllody - माइकोप्लाज्मा), पत्ती धब्बा', en: 'Phyllody, Leaf Spot' },
        pests: { hi: 'फली एवं पत्ती लपेटक (Leaf Webber)', en: 'Leaf Webber and Capsule Borer' }
    },
    {
        category: 'oilseed',
        catName: { hi: 'तिलहनी फसल', en: 'Oilseed Crop' },
        name: { hi: 'अलसी (Linseed)', en: 'Linseed' },
        bn: 'Linum usitatissimum',
        chromosome: '2n = 30',
        origin: { hi: 'भूमध्यसागरीय क्षेत्र', en: 'Mediterranean Region' },
        climate: { hi: 'शीत एवं शुष्क (रबी)', en: 'Cool and Dry (Rabi)' },
        temp: { hi: '15°C - 22°C', en: '15°C - 22°C' },
        varieties: { hi: 'नीलम, गरिमा, श्वेता, पार्वती', en: 'Neelam, Garima, Shweta, Parvati' },
        diseases: { hi: 'रतुआ (Rust), उकठा (Wilt), चूर्णिल आसिता', en: 'Rust, Wilt, Powdery Mildew' },
        pests: { hi: 'कल्ली मक्खी (Bud Fly)', en: 'Linseed Bud Fly' }
    },

    // 4. COMMERCIAL CROPS (व्यावसायिक फसलें)
    {
        category: 'commercial',
        catName: { hi: 'व्यावसायिक फसल', en: 'Commercial Crop' },
        name: { hi: 'गन्ना (Sugarcane)', en: 'Sugarcane' },
        bn: 'Saccharum officinarum',
        chromosome: '2n = 80',
        origin: { hi: 'न्यू गिनी / भारत', en: 'New Guinea / India' },
        climate: { hi: 'उष्ण एवं उपोष्णकटिबंधीय', en: 'Tropical and Sub-tropical' },
        temp: { hi: '25°C - 32°C', en: '25°C - 32°C' },
        varieties: { hi: 'Co-0238, CoS-767, CoJ-64, कोlk-94184', en: 'Co-0238, CoS-767, CoJ-64, CoLk-94184' },
        diseases: { hi: 'लाल सड़न (Red Rot), कंडवा (Smut), ग्रासी शूट', en: 'Red Rot, Smut, Grassy Shoot' },
        pests: { hi: 'चोटी छेदक (Top Borer), पायरिला, सफेद मक्खी', en: 'Top Borer, Pyrilla, Whitefly' }
    },
    {
        category: 'commercial',
        catName: { hi: 'व्यावसायिक फसल', en: 'Commercial Crop' },
        name: { hi: 'कपास (Cotton)', en: 'Cotton' },
        bn: 'Gossypium hirsutum',
        chromosome: '2n = 52 (Tetraploid)',
        origin: { hi: 'भारत एवं मध्य अमेरिका', en: 'India & Central America' },
        climate: { hi: 'गर्म एवं अर्ध-शुष्क (पाला रहित)', en: 'Warm and Semi-arid (Frost-free)' },
        temp: { hi: '21°C - 30°C', en: '21°C - 30°C' },
        varieties: { hi: 'H-4 (पहली संकर), सुविन, वरलक्ष्मी, बीटी कॉटन', en: 'H-4 (First Hybrid), Suvin, Varalaxmi, Bt Cotton' },
        diseases: { hi: 'ब्लैक आर्म (जीवाणु अंगमारी), उकठा, पत्ती मोड़क', en: 'Black Arm (Bacterial Blight), Wilt, Leaf Curl' },
        pests: { hi: 'गुलाबी सुंडी (Pink Bollworm), सफेद मक्खी, जैसिड', en: 'Pink Bollworm, Whitefly, Jassid' }
    },
    {
        category: 'commercial',
        catName: { hi: 'व्यावसायिक फसल', en: 'Commercial Crop' },
        name: { hi: 'जूट (Jute)', en: 'Jute' },
        bn: 'Corchorus capsularis',
        chromosome: '2n = 14',
        origin: { hi: 'भारत-बर्मा क्षेत्र', en: 'Indo-Burma Region' },
        climate: { hi: 'अत्यधिक गर्म एवं आर्द्र', en: 'Hot and Very Humid' },
        temp: { hi: '24°C - 35°C', en: '24°C - 35°C' },
        varieties: { hi: 'JRO-524 (नवीन), JRC-212, सोनाली', en: 'JRO-524 (Navin), JRC-212, Sonali' },
        diseases: { hi: 'तना सड़न (Stem Rot), जड़ सड़न', en: 'Stem Rot, Root Rot' },
        pests: { hi: 'जूट सेमीलूपर, बिहार रोमिल सुंडी', en: 'Jute Semilooper, Bihar Hairy Caterpillar' }
    },
    {
        category: 'commercial',
        catName: { hi: 'व्यावसायिक फसल', en: 'Commercial Crop' },
        name: { hi: 'आलू (Potato)', en: 'Potato' },
        bn: 'Solanum tuberosum',
        chromosome: '2n = 48',
        origin: { hi: 'दक्षिण अमेरिका (पेरू)', en: 'South America (Peru)' },
        climate: { hi: 'शीतोष्ण एवं ठंडा', en: 'Temperate and Cool' },
        temp: { hi: '15°C - 20°C (कंद निर्माण हेतु)', en: '15°C - 20°C (for tuberization)' },
        varieties: { hi: 'कुफरी ज्योति, कुफरी चंद्रमुखी, कुफरी चिप्सोना-1', en: 'Kufri Jyoti, Kufri Chandramukhi, Kufri Chipsona-1' },
        diseases: { hi: 'पछेती झुलसा (Late Blight), अगेती झुलसा, ब्लैक हार्ट', en: 'Late Blight, Early Blight, Black Heart' },
        pests: { hi: 'आलू कंद शलभ (Tuber Moth), माहू (Aphid)', en: 'Potato Tuber Moth, Aphid' }
    },
    {
        category: 'commercial',
        catName: { hi: 'व्यावसायिक फसल', en: 'Commercial Crop' },
        name: { hi: 'तम्बाकू (Tobacco)', en: 'Tobacco' },
        bn: 'Nicotiana tabacum',
        chromosome: '2n = 48',
        origin: { hi: 'दक्षिण अमेरिका', en: 'South America' },
        climate: { hi: 'उष्ण एवं उपोष्णकटिबंधीय', en: 'Tropical and Sub-tropical' },
        temp: { hi: '20°C - 27°C', en: '20°C - 27°C' },
        varieties: { hi: 'आनंद-2, कंचन, जयश्री, भवानी स्पेशल', en: 'Anand-2, Kanchan, Jayasri, Bhavani Special' },
        diseases: { hi: 'टोबैको मोजेक वायरस (TMV), आर्द्र गलन (Damping Off)', en: 'Tobacco Mosaic Virus (TMV), Damping Off' },
        pests: { hi: 'तंबाकू सुंडी (Spodoptera litura), माहू', en: 'Tobacco Caterpillar, Aphid' }
    },

    // 5. MEDICINAL CROPS (औषधीय फसलें)
    {
        category: 'medicinal',
        catName: { hi: 'औषधीय फसल', en: 'Medicinal Crop' },
        name: { hi: 'मशरूम (Mushroom)', en: 'Mushroom' },
        bn: 'Agaricus bisporus (Button)',
        chromosome: 'n = 12 (Haploid nuclei)',
        origin: { hi: 'यूरोप (फ्रांस)', en: 'Europe (France)' },
        climate: { hi: 'नियंत्रित आर्द्र एवं ठंडा (इनडोर)', en: 'Controlled Humid and Cool (Indoor)' },
        temp: { hi: '14°C - 18°C (फलन हेतु)', en: '14°C - 18°C (for fruiting)' },
        varieties: { hi: 'सफेद बटन, ढींगरी (Oyster), दूधिया (Milky)', en: 'White Button, Oyster, Milky Mushroom' },
        diseases: { hi: 'ग्रीन मोल्ड, ड्राई बबल, वेट बबल', en: 'Green Mold, Dry Bubble, Wet Bubble' },
        pests: { hi: 'फोरिड मक्खी, सियारिड मक्खी, माइट्स', en: 'Phorid Fly, Sciarid Fly, Mites' }
    },
    {
        category: 'medicinal',
        catName: { hi: 'औषधीय फसल', en: 'Medicinal Crop' },
        name: { hi: 'पुदीना (Mint / Mentha)', en: 'Mint / Mentha' },
        bn: 'Mentha arvensis',
        chromosome: '2n = 96',
        origin: { hi: 'भूमध्यसागरीय क्षेत्र / जापान', en: 'Mediterranean Region / Japan' },
        climate: { hi: 'उपोष्णकटिबंधीय एवं समशीतोष्ण', en: 'Sub-tropical and Temperate' },
        temp: { hi: '20°C - 30°C', en: '20°C - 30°C' },
        varieties: { hi: 'कोसी, हिमालय, शिवालिक, गोमती', en: 'Kosi, Himalaya, Shivalik, Gomti' },
        diseases: { hi: 'रतुआ (Rust), चूर्णिल आसिता, स्टोलन सड़न', en: 'Rust, Powdery Mildew, Stolon Rot' },
        pests: { hi: 'रोमिल सुंडी, पत्ती लपेटक', en: 'Hairy Caterpillar, Leaf Roller' }
    },
    {
        category: 'medicinal',
        catName: { hi: 'औषधीय फसल', en: 'Medicinal Crop' },
        name: { hi: 'तुलसी (Holy Basil)', en: 'Holy Basil (Tulsi)' },
        bn: 'Ocimum tenuiflorum',
        chromosome: '2n = 32, 36',
        origin: { hi: 'भारत', en: 'India' },
        climate: { hi: 'उष्ण एवं उपोष्णकटिबंधीय', en: 'Tropical and Sub-tropical' },
        temp: { hi: '20°C - 35°C', en: '20°C - 35°C' },
        varieties: { hi: 'सिम-सौम्या, रामा तुलसी, श्यामा तुलसी', en: 'CIM-Saumya, Rama Tulsi, Shyama Tulsi' },
        diseases: { hi: 'चूर्णिल आसिता, जड़ सड़न (Root Rot)', en: 'Powdery Mildew, Root Rot' },
        pests: { hi: 'पत्ती लपेटक (Leaf Folder), सफेद मक्खी', en: 'Leaf Folder, Whitefly' }
    },

    // 6. HORTICULTURE CROPS (बागवानी फसलें)
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (फल)', en: 'Horticulture (Fruit)' },
        name: { hi: 'आम (Mango)', en: 'Mango' },
        bn: 'Mangifera indica',
        chromosome: '2n = 40',
        origin: { hi: 'भारत-बर्मा क्षेत्र', en: 'Indo-Burma Region' },
        climate: { hi: 'उष्ण एवं उपोष्णकटिबंधीय', en: 'Tropical and Sub-tropical' },
        temp: { hi: '24°C - 30°C', en: '24°C - 30°C' },
        varieties: { hi: 'अल्फांसो, दशहरी, लंगड़ा, आम्रपाली, मल्लिका', en: 'Alphonso, Dasheri, Langra, Amrapali, Mallika' },
        diseases: { hi: 'गुच्छा रोग (Malformation), चूर्णिल आसिता, ब्लैक टिप', en: 'Mango Malformation, Powdery Mildew, Black Tip' },
        pests: { hi: 'आम का फुदका (Hopper), मिली बग, फल मक्खी', en: 'Mango Hopper, Mealy Bug, Fruit Fly' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (फल)', en: 'Horticulture (Fruit)' },
        name: { hi: 'केला (Banana)', en: 'Banana' },
        bn: 'Musa paradisiaca',
        chromosome: '2n = 33 (Triploid)',
        origin: { hi: 'दक्षिण-पूर्व एशिया', en: 'South-East Asia' },
        climate: { hi: 'गर्म एवं आर्द्र (उष्णकटिबंधीय)', en: 'Warm and Humid (Tropical)' },
        temp: { hi: '20°C - 35°C', en: '20°C - 35°C' },
        varieties: { hi: 'ग्रैंड नैन (G-9), रोबस्टा, पूवन, ड्वार्फ कैवेंडिश', en: 'Grand Naine (G-9), Robusta, Poovan, Dwarf Cavendish' },
        diseases: { hi: 'पनामा विल्ट, सिगाटोका पत्ती धब्बा, बंची टॉप', en: 'Panama Wilt, Sigatoka Leaf Spot, Bunchy Top' },
        pests: { hi: 'प्रकंद घुन (Rhizome Weevil), माहू', en: 'Rhizome Weevil, Aphid' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (फल)', en: 'Horticulture (Fruit)' },
        name: { hi: 'सेब (Apple)', en: 'Apple' },
        bn: 'Malus domestica',
        chromosome: '2n = 34',
        origin: { hi: 'मध्य एशिया (कजाकिस्तान)', en: 'Central Asia (Kazakhstan)' },
        climate: { hi: 'शीतोष्ण (ठंडी जलवायु)', en: 'Temperate (Cold Climate)' },
        temp: { hi: '15°C - 21°C (फलन), <7°C चिलिंग', en: '15°C - 21°C (fruiting), <7°C chilling' },
        varieties: { hi: 'रॉयल डिलीशियस, रेड डिलीशियस, गोल्डन डिलीशियस', en: 'Royal Delicious, Red Delicious, Golden Delicious' },
        diseases: { hi: 'एप्पल स्कैब (Scab), फायर ब्लाइट, चूर्णिल आसिता', en: 'Apple Scab, Fire Blight, Powdery Mildew' },
        pests: { hi: 'वूली एप्पल एफिड, सैन जोस स्केल, कॉडलिंग मॉथ', en: 'Woolly Apple Aphid, San Jose Scale, Codling Moth' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (सब्जी)', en: 'Horticulture (Vegetable)' },
        name: { hi: 'टमाटर (Tomato)', en: 'Tomato' },
        bn: 'Solanum lycopersicum',
        chromosome: '2n = 24',
        origin: { hi: 'दक्षिण अमेरिका (पेरू)', en: 'South America (Peru)' },
        climate: { hi: 'गर्म एवं समशीतोष्ण', en: 'Warm and Temperate' },
        temp: { hi: '20°C - 25°C', en: '20°C - 25°C' },
        varieties: { hi: 'पूसा रूबी, अर्का रक्षक, अर्का विकास, रोमा', en: 'Pusa Ruby, Arka Rakshak, Arka Vikas, Roma' },
        diseases: { hi: 'पत्ती मोड़क (Leaf Curl), अगेती व पछेती झुलसा', en: 'Leaf Curl Virus, Early & Late Blight' },
        pests: { hi: 'फल छेदक (Fruit Borer), सफेद मक्खी', en: 'Fruit Borer, Whitefly' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (सब्जी)', en: 'Horticulture (Vegetable)' },
        name: { hi: 'प्याज (Onion)', en: 'Onion' },
        bn: 'Allium cepa',
        chromosome: '2n = 16',
        origin: { hi: 'मध्य एशिया', en: 'Central Asia' },
        climate: { hi: 'शीतोष्ण एवं हल्का गर्म', en: 'Temperate and Mild Warm' },
        temp: { hi: '15°C - 25°C', en: '15°C - 25°C' },
        varieties: { hi: 'पूसा रेड, नासिक रेड (N-53), एग्रीफाउंड डार्क रेड', en: 'Pusa Red, Nasik Red (N-53), Agrifound Dark Red' },
        diseases: { hi: 'बैंगनी धब्बा (Purple Blotch), मृदुरोमिल आसिता', en: 'Purple Blotch, Downy Mildew' },
        pests: { hi: 'थ्रिप्स (Thrips), प्याज की मक्खी', en: 'Onion Thrips, Onion Maggot' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (सब्जी/मसाला)', en: 'Horticulture (Spice)' },
        name: { hi: 'मिर्च (Chilli)', en: 'Chilli' },
        bn: 'Capsicum annuum',
        chromosome: '2n = 24',
        origin: { hi: 'मेक्सिको (दक्षिण अमेरिका)', en: 'Mexico (South America)' },
        climate: { hi: 'गर्म एवं आर्द्र', en: 'Warm and Humid' },
        temp: { hi: '20°C - 30°C', en: '20°C - 30°C' },
        varieties: { hi: 'पूसा ज्वाला, भाग्यलक्ष्मी, काशी अनमोल', en: 'Pusa Jwala, Bhagyalakshmi, Kashi Anmol' },
        diseases: { hi: 'पत्ती मोड़क (Leaf Curl), एन्थ्रेक्नोज (डाईबैक)', en: 'Leaf Curl, Anthracnose (Die-back)' },
        pests: { hi: 'थ्रिप्स, माइट्स (Mites), सफेद मक्खी', en: 'Thrips, Mites, Whitefly' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (मसाला)', en: 'Horticulture (Spice)' },
        name: { hi: 'हल्दी (Turmeric)', en: 'Turmeric' },
        bn: 'Curcuma longa',
        chromosome: '2n = 63 (Triploid)',
        origin: { hi: 'दक्षिण-पूर्व एशिया (भारत)', en: 'South-East Asia (India)' },
        climate: { hi: 'गर्म एवं आर्द्र', en: 'Hot and Humid' },
        temp: { hi: '20°C - 30°C', en: '20°C - 30°C' },
        varieties: { hi: 'सुगंधम, रोमा, सुवर्णा, राजेंद्र सोनिया', en: 'Sugandham, Roma, Suvarna, Rajendra Sonia' },
        diseases: { hi: 'प्रकंद सड़न (Rhizome Rot), पत्ती धब्बा', en: 'Rhizome Rot, Leaf Spot' },
        pests: { hi: 'प्रकंद शल्क कीट (Rhizome Scale), तना छेदक', en: 'Rhizome Scale, Shoot Borer' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (मसाला)', en: 'Horticulture (Spice)' },
        name: { hi: 'धनिया (Coriander)', en: 'Coriander' },
        bn: 'Coriandrum sativum',
        chromosome: '2n = 22',
        origin: { hi: 'भूमध्यसागरीय क्षेत्र', en: 'Mediterranean Region' },
        climate: { hi: 'शीतोष्ण एवं शुष्क (रबी)', en: 'Temperate and Dry (Rabi)' },
        temp: { hi: '15°C - 25°C', en: '15°C - 25°C' },
        varieties: { hi: 'पंत हरितमा, हिसार आनंद, राजेंद्र स्वाति', en: 'Pant Haritima, Hisar Anand, Rajendra Swati' },
        diseases: { hi: 'तना पिटिका (Stem Gall), चूर्णिल आसिता', en: 'Stem Gall, Powdery Mildew' },
        pests: { hi: 'माहू (Aphid), सफेद मक्खी', en: 'Aphid, Whitefly' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (मसाला)', en: 'Horticulture (Spice)' },
        name: { hi: 'अदरक (Ginger)', en: 'Ginger' },
        bn: 'Zingiber officinale',
        chromosome: '2n = 22',
        origin: { hi: 'दक्षिण-पूर्व एशिया', en: 'South-East Asia' },
        climate: { hi: 'गर्म एवं आर्द्र', en: 'Warm and Humid' },
        temp: { hi: '20°C - 28°C', en: '20°C - 28°C' },
        varieties: { hi: 'सुप्रभा, सुरुचि, वरदा, रियो-डी-जनेरियो', en: 'Suprabha, Suruchi, Varada, Rio-de-Janeiro' },
        diseases: { hi: 'मृदु सड़न (Soft Rot), जीवाणु उकठा', en: 'Soft Rot, Bacterial Wilt' },
        pests: { hi: 'तना छेदक (Shoot Borer), प्रकंद मक्खी', en: 'Shoot Borer, Rhizome Fly' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (पुष्प)', en: 'Horticulture (Flower)' },
        name: { hi: 'गुलाब (Rose)', en: 'Rose' },
        bn: 'Rosa indica',
        chromosome: '2n = 14, 21, 28',
        origin: { hi: 'उत्तरी गोलार्ध (एशिया/यूरोप)', en: 'Northern Hemisphere (Asia/Europe)' },
        climate: { hi: 'समशीतोष्ण एवं हल्का ठंडा', en: 'Temperate and Mild Cool' },
        temp: { hi: '15°C - 28°C', en: '15°C - 28°C' },
        varieties: { hi: 'पूसा मोहित, ग्लैडिएटर, सुपर स्टार, ताजमहल', en: 'Pusa Mohit, Gladiator, Super Star, Taj Mahal' },
        diseases: { hi: 'डाईबैक (Die-back), काला धब्बा, चूर्णिल आसिता', en: 'Die-back, Black Spot, Powdery Mildew' },
        pests: { hi: 'थ्रिप्स, माहू, रेड स्केल', en: 'Thrips, Aphid, Red Scale' }
    },
    {
        category: 'horticulture',
        catName: { hi: 'बागवानी (पुष्प)', en: 'Horticulture (Flower)' },
        name: { hi: 'गेंदा (Marigold)', en: 'Marigold' },
        bn: 'Tagetes erecta (African)',
        chromosome: '2n = 24',
        origin: { hi: 'मेक्सिको', en: 'Mexico' },
        climate: { hi: 'समशीतोष्ण एवं उष्ण', en: 'Temperate and Tropical' },
        temp: { hi: '15°C - 30°C', en: '15°C - 30°C' },
        varieties: { hi: 'पूसा नारंगी गेंदा, पूसा बसंती गेंदा, क्राउन ऑफ गोल्ड', en: 'Pusa Narangi Gainda, Pusa Basanti Gainda, Crown of Gold' },
        diseases: { hi: 'आर्द्र गलन (Damping Off), पत्ती धब्बा', en: 'Damping Off, Leaf Spot' },
        pests: { hi: 'माइट्स (Red Spider Mite), कली छेदक', en: 'Red Spider Mite, Bud Borer' }
    }
];

const labels = {
    hi: {
        bn: 'वानस्पतिक नाम (B.N.):',
        chr: 'गुणसूत्र (2n):',
        origin: 'उत्पत्ति स्थान:',
        climate: 'जलवायु:',
        temp: 'तापमान:',
        varieties: 'प्रमुख किस्में:',
        diseases: 'प्रमुख रोग:',
        pests: 'प्रमुख कीट:'
    },
    en: {
        bn: 'Botanical Name (B.N.):',
        chr: 'Chromosome (2n):',
        origin: 'Origin:',
        climate: 'Climate:',
        temp: 'Temperature:',
        varieties: 'Varieties:',
        diseases: 'Major Diseases:',
        pests: 'Major Pests:'
    }
};

function renderCrops(data) {
    const container = document.getElementById('cropsContainer');
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = `<p style="text-align:center; grid-column: 1/-1; font-size:1.2rem;">
            ${currentLang === 'hi' ? 'कोई फसल नहीं मिली।' : 'No crops found.'}
        </p>`;
        return;
    }

    const lbl = labels[currentLang];

    data.forEach(crop => {
        const card = document.createElement('div');
        card.className = 'crop-card';
        card.innerHTML = `
            <div class="card-header">
                <h3>${crop.name[currentLang]}</h3>
                <span class="badge">${crop.catName[currentLang]}</span>
            </div>
            <div class="card-body">
                <div class="info-row"><span class="info-label">${lbl.bn}</span> <span class="bn-text">${crop.bn}</span></div>
                <div class="info-row"><span class="info-label">${lbl.chr}</span> ${crop.chromosome}</div>
                <div class="info-row"><span class="info-label">${lbl.origin}</span> ${crop.origin[currentLang]}</div>
                <div class="info-row"><span class="info-label">${lbl.climate}</span> ${crop.climate[currentLang]}</div>
                <div class="info-row"><span class="info-label">${lbl.temp}</span> ${crop.temp[currentLang]}</div>
                <div class="info-row"><span class="info-label">${lbl.varieties}</span> ${crop.varieties[currentLang]}</div>
                <div class="info-row"><span class="info-label">${lbl.diseases}</span> ${crop.diseases[currentLang]}</div>
                <div class="info-row"><span class="info-label">${lbl.pests}</span> ${crop.pests[currentLang]}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    
    // Update UI Texts
    document.getElementById('lang-toggle').innerText = currentLang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें';
    document.getElementById('sub-title').innerText = currentLang === 'hi' ? '| कृषि विज्ञान' : '| Agriculture Encyclopedia';
    document.getElementById('hero-heading').innerText = currentLang === 'hi' ? 'सभी प्रमुख फसलों की संपूर्ण वैज्ञानिक जानकारी' : 'Complete Scientific Information of Major Crops';
    document.getElementById('hero-desc').innerText = currentLang === 'hi' ? 'वानस्पतिक नाम, रोग, कीट, जलवायु, तापमान, किस्में, उत्पत्ति स्थान और गुणसूत्र संख्या' : 'Botanical Name, Diseases, Pests, Climate, Temperature, Varieties, Origin & Chromosome Number';
    document.getElementById('searchInput').placeholder = currentLang === 'hi' ? 'फसल का नाम खोजें (जैसे: धान, Wheat, आम)...' : 'Search crop name (e.g., Paddy, गेहूँ, Mango)...';
    document.getElementById('footer-text').innerText = currentLang === 'hi' ? '© 2026 KrishiVigyan Portal | कृषि छात्रों एवं किसानों के लिए समर्पित' : '© 2026 KrishiVigyan Portal | Dedicated to Agriculture Students & Farmers';

    // Update Category Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.innerText = btn.getAttribute(`data-${currentLang}`);
    });

    filterCrops();
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    filterCrops();
}

function filterCrops() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = cropsData.filter(crop => {
        const matchesCategory = currentCategory === 'all' || crop.category === currentCategory;
        const matchesSearch = crop.name.hi.toLowerCase().includes(query) || 
                              crop.name.en.toLowerCase().includes(query) || 
                              crop.bn.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    renderCrops(filtered);
}

// Initial Render
renderCrops(cropsData);
