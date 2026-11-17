
/* =====================================================
   INDIAN CROP INFORMATION PORTAL
   File: crops.js
   Hindi + English Agriculture Database
   Total: 36 Unique Crops
===================================================== */

const crops = [

/* =====================================================
   1. CEREAL CROPS - अनाज वाली फसलें
===================================================== */

{
 id: 1,
 category: "cereal",
 name: {hi:"धान",en:"Rice"},
 botanicalName: "Oryza sativa L.",
 diseases: [
  {hi:"ब्लास्ट रोग, जीवाणु झुलसा, भूरा धब्बा रोग",en:"Blast, Bacterial Leaf Blight, Brown Spot"},
  {hi:"शीथ ब्लाइट, फाल्स स्मट",en:"Sheath Blight, False Smut"}
 ],
 pests: [
  {hi:"तना छेदक, पत्ती मोड़क, गंधी बग",en:"Stem Borer, Leaf Folder, Gundhi Bug"},
  {hi:"ब्राउन प्लांट हॉपर",en:"Brown Plant Hopper"}
 ],
 climate: {
  hi:"गर्म एवं आर्द्र जलवायु, पर्याप्त वर्षा और पानी की उपलब्धता।",
  en:"Warm and humid climate with adequate rainfall and water availability."
 },
 temperature: {
  hi:"लगभग 20–35°C",
  en:"Approximately 20–35°C"
 },
 varieties: {
  hi:"सांबा महसूरी, स्वर्णा, पूसा बासमती 1121, IR-64",
  en:"Samba Mahsuri, Swarna, Pusa Basmati 1121, IR-64"
 },
 origin: {
  hi:"एशिया; चीन और दक्षिण-पूर्व एशिया प्रमुख प्रारंभिक घरेलूकरण क्षेत्र माने जाते हैं।",
  en:"Asia; China and Southeast Asia are major proposed early domestication regions."
 },
 chromosome: {
  hi:"2n = 24",
  en:"2n = 24"
 },
 image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600"
},

{
 id: 2,
 category: "cereal",
 name: {hi:"गेहूँ",en:"Wheat"},
 botanicalName: "Triticum aestivum L.",
 diseases: [
  {hi:"पीला रतुआ, भूरा रतुआ, काला रतुआ",en:"Yellow Rust, Brown Rust, Stem Rust"},
  {hi:"करनाल बंट, पाउडरी मिल्ड्यू",en:"Karnal Bunt, Powdery Mildew"}
 ],
 pests: [
  {hi:"दीमक, माहू, आर्मीवर्म",en:"Termites, Aphids, Armyworm"},
  {hi:"एफिड",en:"Aphids"}
 ],
 climate: {
  hi:"ठंडी एवं शुष्क जलवायु; पकने के समय साफ और गर्म मौसम।",
  en:"Cool and dry climate; clear and warm weather during maturity."
 },
 temperature: {
  hi:"बुवाई के समय लगभग 20–25°C; दाना भरने के समय लगभग 20–25°C",
  en:"Approximately 20–25°C at sowing and during grain filling."
 },
 varieties: {
  hi:"HD 2967, HD 3086, DBW 187, PBW 343",
  en:"HD 2967, HD 3086, DBW 187, PBW 343"
 },
 origin: {
  hi:"दक्षिण-पश्चिम एशिया का उपजाऊ अर्धचंद्र क्षेत्र।",
  en:"Fertile Crescent of Southwest Asia."
 },
 chromosome: {
  hi:"2n = 42 (ब्रेड गेहूँ); ड्यूरम गेहूँ 2n = 28",
  en:"2n = 42 (Bread wheat); Durum wheat 2n = 28"
 },
 image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600"
},

{
 id: 3,
 category: "cereal",
 name: {hi:"मक्का",en:"Maize"},
 botanicalName: "Zea mays L.",
 diseases: [
  {hi:"तना सड़न, पत्ती झुलसा, डाउनी मिल्ड्यू",en:"Stalk Rot, Leaf Blight, Downy Mildew"},
  {hi:"टर्सिकम लीफ ब्लाइट",en:"Turcicum Leaf Blight"}
 ],
 pests: [
  {hi:"फॉल आर्मीवर्म, तना छेदक, शूट फ्लाई",en:"Fall Armyworm, Stem Borer, Shoot Fly"},
  {hi:"मक्का का एफिड",en:"Corn Aphid"}
 ],
 climate: {
  hi:"गर्म एवं धूप वाली जलवायु; जल निकास वाली उपजाऊ मिट्टी।",
  en:"Warm and sunny climate with fertile, well-drained soil."
 },
 temperature: {
  hi:"लगभग 21–30°C",
  en:"Approximately 21–30°C"
 },
 varieties: {
  hi:"गंगा-5, HQPM-1, विवेक QPM-9, डेक्कन 103",
  en:"Ganga-5, HQPM-1, Vivek QPM-9, Deccan 103"
 },
 origin: {
  hi:"मेक्सिको और मध्य अमेरिका।",
  en:"Mexico and Central America."
 },
 chromosome: {
  hi:"2n = 20",
  en:"2n = 20"
 },
 image: "https://images.unsplash.com/photo-1601593768795-4b8e9e6c7b1c?w=600"
},

{
 id: 4,
 category: "cereal",
 name: {hi:"ज्वार",en:"Sorghum"},
 botanicalName: "Sorghum bicolor (L.) Moench",
 diseases: [
  {hi:"ग्रेन मोल्ड, एन्थ्रेक्नोज, डाउनी मिल्ड्यू",en:"Grain Mold, Anthracnose, Downy Mildew"},
  {hi:"स्मट रोग",en:"Smut"}
 ],
 pests: [
  {hi:"शूट फ्लाई, तना छेदक, एफिड",en:"Shoot Fly, Stem Borer, Aphids"},
  {hi:"ग्रेन मिज",en:"Sorghum Midge"}
 ],
 climate: {
  hi:"गर्म एवं अर्धशुष्क जलवायु; सूखा सहन करने वाली फसल।",
  en:"Warm and semi-arid climate; drought-tolerant crop."
 },
 temperature: {
  hi:"लगभग 25–32°C",
  en:"Approximately 25–32°C"
 },
 varieties: {
  hi:"CSH-16, CSV-15, CSV-27, मालदांडी",
  en:"CSH-16, CSV-15, CSV-27, Maldandi"
 },
 origin: {
  hi:"अफ्रीका, विशेषकर उत्तर-पूर्वी अफ्रीका।",
  en:"Africa, particularly northeastern Africa."
 },
 chromosome: {
  hi:"2n = 20",
  en:"2n = 20"
 },
 image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600"
},

{
 id: 5,
 category: "cereal",
 name: {hi:"बाजरा",en:"Pearl Millet"},
 botanicalName: "Cenchrus americanus (L.) Morrone",
 diseases: [
  {hi:"डाउनी मिल्ड्यू, एरगॉट, स्मट",en:"Downy Mildew, Ergot, Smut"},
  {hi:"ब्लास्ट",en:"Blast"}
 ],
 pests: [
  {hi:"शूट फ्लाई, तना छेदक, दीमक",en:"Shoot Fly, Stem Borer, Termites"},
  {hi:"एफिड",en:"Aphids"}
 ],
 climate: {
  hi:"गर्म एवं शुष्क जलवायु; कम वर्षा वाले क्षेत्रों के लिए उपयुक्त।",
  en:"Hot and dry climate; suitable for low-rainfall regions."
 },
 temperature: {
  hi:"लगभग 25–35°C",
  en:"Approximately 25–35°C"
 },
 varieties: {
  hi:"HHB 67 Improved, ICTP 8203, RHB 177, ICMV 221",
  en:"HHB 67 Improved, ICTP 8203, RHB 177, ICMV 221"
 },
 origin: {
  hi:"पश्चिमी अफ्रीका के साहेल क्षेत्र।",
  en:"Sahel region of West Africa."
 },
 chromosome: {
  hi:"2n = 14",
  en:"2n = 14"
 },
 image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"
},

{
 id: 6,
 category: "cereal",
 name: {hi:"जौ",en:"Barley"},
 botanicalName: "Hordeum vulgare L.",
 diseases: [
  {hi:"पीला रतुआ, पाउडरी मिल्ड्यू, स्मट",en:"Stripe Rust, Powdery Mildew, Smut"},
  {hi:"नेट ब्लॉच",en:"Net Blotch"}
 ],
 pests: [
  {hi:"माहू, दीमक, आर्मीवर्म",en:"Aphids, Termites, Armyworm"},
  {hi:"जौ का एफिड",en:"Barley Aphid"}
 ],
 climate: {
  hi:"ठंडी एवं शुष्क जलवायु; कम वर्षा में भी अच्छी पैदावार।",
  en:"Cool and dry climate; performs well under relatively low rainfall."
 },
 temperature: {
  hi:"लगभग 12–25°C",
  en:"Approximately 12–25°C"
 },
 varieties: {
  hi:"RD 2552, RD 2035, DWRB 123, BH 902",
  en:"RD 2552, RD 2035, DWRB 123, BH 902"
 },
 origin: {
  hi:"उपजाऊ अर्धचंद्र क्षेत्र, पश्चिमी एशिया।",
  en:"Fertile Crescent of Western Asia."
 },
 chromosome: {
  hi:"2n = 14",
  en:"2n = 14"
 },
 image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"
},


/* =====================================================
   2. PULSE CROPS - दलहनी फसलें
===================================================== */

{
 id: 7,
 category: "pulse",
 name: {hi:"चना",en:"Chickpea"},
 botanicalName: "Cicer arietinum L.",
 diseases: [
  {hi:"उकठा रोग, Ascochyta झुलसा, जड़ सड़न",en:"Fusarium Wilt, Ascochyta Blight, Root Rot"},
  {hi:"स्टंट रोग",en:"Stunt Disease"}
 ],
 pests: [
  {hi:"चना फली छेदक, कटुआ कीट, माहू",en:"Gram Pod Borer, Cutworm, Aphids"},
  {hi:"सेमीलूपर",en:"Semilooper"}
 ],
 climate: {
  hi:"ठंडी एवं शुष्क जलवायु; अधिक नमी से रोग बढ़ सकते हैं।",
  en:"Cool and dry climate; excessive moisture may increase diseases."
 },
 temperature: {
  hi:"लगभग 20–25°C",
  en:"Approximately 20–25°C"
 },
 varieties: {
  hi:"JG 11, JG 14, Pusa 372, Pusa 256, GNG 2144",
  en:"JG 11, JG 14, Pusa 372, Pusa 256, GNG 2144"
 },
 origin: {
  hi:"दक्षिण-पूर्वी तुर्की और निकटवर्ती पश्चिमी एशिया।",
  en:"Southeastern Turkey and adjoining Western Asia."
 },
 chromosome: {
  hi:"2n = 16",
  en:"2n = 16"
 },
 image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600"
},

{
 id: 8,
 category: "pulse",
 name: {hi:"अरहर",en:"Pigeon Pea"},
 botanicalName: "Cajanus cajan (L.) Millsp.",
 diseases: [
  {hi:"उकठा रोग, बांझपन मोजेक, फाइटोफ्थोरा झुलसा",en:"Fusarium Wilt, Sterility Mosaic, Phytophthora Blight"},
  {hi:"जड़ सड़न",en:"Root Rot"}
 ],
 pests: [
  {hi:"फली छेदक, फली मक्खी, प्लूम मॉथ",en:"Pod Borer, Pod Fly, Plume Moth"},
  {hi:"माहू",en:"Aphids"}
 ],
 climate: {
  hi:"गर्म अर्धशुष्क एवं उष्णकटिबंधीय जलवायु।",
  en:"Warm, semi-arid and tropical climate."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"Asha (ICPL 87119), UPAS 120, Pusa 2001, Maruti",
  en:"Asha (ICPL 87119), UPAS 120, Pusa 2001, Maruti"
 },
 origin: {
  hi:"भारतीय उपमहाद्वीप; भारत को प्रमुख विविधता एवं घरेलूकरण केंद्र माना जाता है।",
  en:"Indian subcontinent; India is considered a major center of diversity and domestication."
 },
 chromosome: {
  hi:"2n = 22",
  en:"2n = 22"
 },
 image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600"
},

{
 id: 9,
 category: "pulse",
 name: {hi:"मूंग",en:"Green Gram / Mung Bean"},
 botanicalName: "Vigna radiata (L.) R. Wilczek",
 diseases: [
  {hi:"पीला मोजेक, पाउडरी मिल्ड्यू, Cercospora धब्बा",en:"Yellow Mosaic, Powdery Mildew, Cercospora Leaf Spot"},
  {hi:"एन्थ्रेक्नोज",en:"Anthracnose"}
 ],
 pests: [
  {hi:"सफेद मक्खी, थ्रिप्स, माहू",en:"Whitefly, Thrips, Aphids"},
  {hi:"फली छेदक",en:"Pod Borer"}
 ],
 climate: {
  hi:"गर्म एवं शुष्क जलवायु; खरीफ और जायद दोनों मौसमों में उगाई जाती है।",
  en:"Warm and relatively dry climate; grown during Kharif and summer seasons."
 },
 temperature: {
  hi:"लगभग 25–35°C",
  en:"Approximately 25–35°C"
 },
 varieties: {
  hi:"पूसा विशाल, सम्राट, IPM 02-3, SML 668",
  en:"Pusa Vishal, Samrat, IPM 02-3, SML 668"
 },
 origin: {
  hi:"भारतीय उपमहाद्वीप।",
  en:"Indian subcontinent."
 },
 chromosome: {
  hi:"2n = 22",
  en:"2n = 22"
 },
 image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600"
},

{
 id: 10,
 category: "pulse",
 name: {hi:"उड़द",en:"Black Gram"},
 botanicalName: "Vigna mungo (L.) Hepper",
 diseases: [
  {hi:"पीला मोजेक, पत्ती धब्बा, पाउडरी मिल्ड्यू",en:"Yellow Mosaic, Leaf Spot, Powdery Mildew"},
  {hi:"उकठा रोग",en:"Wilt"}
 ],
 pests: [
  {hi:"सफेद मक्खी, माहू, थ्रिप्स",en:"Whitefly, Aphids, Thrips"},
  {hi:"फली छेदक",en:"Pod Borer"}
 ],
 climate: {
  hi:"गर्म एवं आर्द्र जलवायु; अच्छी जल निकासी वाली मिट्टी।",
  en:"Warm and humid climate with well-drained soil."
 },
 temperature: {
  hi:"लगभग 25–35°C",
  en:"Approximately 25–35°C"
 },
 varieties: {
  hi:"T-9, PU-31, Pant U-31, LBG 752",
  en:"T-9, PU-31, Pant U-31, LBG 752"
 },
 origin: {
  hi:"भारतीय उपमहाद्वीप।",
  en:"Indian subcontinent."
 },
 chromosome: {
  hi:"2n = 22",
  en:"2n = 22"
 },
 image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600"
},

{
 id: 11,
 category: "pulse",
 name: {hi:"मसूर",en:"Lentil"},
 botanicalName: "Lens culinaris Medik.",
 diseases: [
  {hi:"उकठा रोग, रतुआ, Ascochyta झुलसा",en:"Wilt, Rust, Ascochyta Blight"},
  {hi:"जड़ सड़न",en:"Root Rot"}
 ],
 pests: [
  {hi:"माहू, कटुआ कीट, फली छेदक",en:"Aphids, Cutworms, Pod Borer"},
  {hi:"दीमक",en:"Termites"}
 ],
 climate: {
  hi:"ठंडी एवं शुष्क जलवायु; फसल पकते समय शुष्क मौसम।",
  en:"Cool and dry climate with dry weather during maturity."
 },
 temperature: {
  hi:"लगभग 18–25°C",
  en:"Approximately 18–25°C"
 },
 varieties: {
  hi:"मसूर 8, IPL 316, KLS 218, Pusa Masoor 5",
  en:"Masoor 8, IPL 316, KLS 218, Pusa Masoor 5"
 },
 origin: {
  hi:"निकट पूर्व और पश्चिमी एशिया।",
  en:"Near East and Western Asia."
 },
 chromosome: {
  hi:"2n = 14",
  en:"2n = 14"
 },
 image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600"
},


/* =====================================================
   3. OILSEED CROPS - तिलहनी फसलें
===================================================== */

{
 id: 12,
 category: "oilseed",
 name: {hi:"सोयाबीन",en:"Soybean"},
 botanicalName: "Glycine max (L.) Merr.",
 diseases: [
  {hi:"पीला मोजेक, चारकोल सड़न, रस्ट",en:"Yellow Mosaic, Charcoal Rot, Rust"},
  {hi:"जीवाणु झुलसा",en:"Bacterial Blight"}
 ],
 pests: [
  {hi:"तना मक्खी, गर्डल बीटल, तंबाकू की इल्ली",en:"Stem Fly, Girdle Beetle, Tobacco Caterpillar"},
  {hi:"सेमीलूपर",en:"Semilooper"}
 ],
 climate: {
  hi:"गर्म एवं नम जलवायु; जलभराव से फसल को नुकसान।",
  en:"Warm and humid climate; waterlogging is harmful."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"JS 335, JS 9560, NRC 37, RVS 2001-4",
  en:"JS 335, JS 9560, NRC 37, RVS 2001-4"
 },
 origin: {
  hi:"पूर्वी एशिया, विशेषकर चीन।",
  en:"East Asia, particularly China."
 },
 chromosome: {
  hi:"2n = 40",
  en:"2n = 40"
 },
 image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=600"
},

{
 id: 13,
 category: "oilseed",
 name: {hi:"सरसों",en:"Indian Mustard"},
 botanicalName: "Brassica juncea (L.) Czern. & Coss.",
 diseases: [
  {hi:"अल्टरनेरिया झुलसा, सफेद रतुआ, तुलासिता",en:"Alternaria Blight, White Rust, Downy Mildew"},
  {hi:"स्क्लेरोटिनिया तना सड़न",en:"Sclerotinia Stem Rot"}
 ],
 pests: [
  {hi:"माहू, पेंटेड बग, सरसों की आरा मक्खी",en:"Mustard Aphid, Painted Bug, Mustard Sawfly"},
  {hi:"डायमंड बैक मॉथ",en:"Diamondback Moth"}
 ],
 climate: {
  hi:"ठंडी एवं शुष्क जलवायु; फूल आने और दाना भरने पर अधिक गर्मी नुकसानदायक।",
  en:"Cool and dry climate; excessive heat during flowering and seed filling is harmful."
 },
 temperature: {
  hi:"लगभग 10–25°C",
  en:"Approximately 10–25°C"
 },
 varieties: {
  hi:"वरुणा, पूसा बोल्ड, RH 749, गिरिराज, NRCHB 101",
  en:"Varuna, Pusa Bold, RH 749, Giriraj, NRCHB 101"
 },
 origin: {
  hi:"मध्य एशिया और आसपास के क्षेत्र।",
  en:"Central Asia and adjoining regions."
 },
 chromosome: {
  hi:"2n = 36 (भारतीय सरसों)",
  en:"2n = 36 (Indian mustard)"
 },
 image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600"
},

{
 id: 14,
 category: "oilseed",
 name: {hi:"सूरजमुखी",en:"Sunflower"},
 botanicalName: "Helianthus annuus L.",
 diseases: [
  {hi:"डाउनी मिल्ड्यू, अल्टरनेरिया, रस्ट",en:"Downy Mildew, Alternaria, Rust"},
  {hi:"सफेद सड़न",en:"White Rot"}
 ],
 pests: [
  {hi:"हेड बोरर, तंबाकू की इल्ली, दीमक",en:"Head Borer, Tobacco Caterpillar, Termites"},
  {hi:"एफिड",en:"Aphids"}
 ],
 climate: {
  hi:"समशीतोष्ण से उपोष्णकटिबंधीय जलवायु; पर्याप्त धूप आवश्यक।",
  en:"Temperate to subtropical climate; adequate sunlight is essential."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"मार्डन, KBSH-44, DRSH-1, सूर्या",
  en:"Morden, KBSH-44, DRSH-1, Surya"
 },
 origin: {
  hi:"उत्तरी अमेरिका।",
  en:"North America."
 },
 chromosome: {
  hi:"2n = 34",
  en:"2n = 34"
 },
 image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600"
},

{
 id: 15,
 category: "oilseed",
 name: {hi:"मूंगफली",en:"Groundnut / Peanut"},
 botanicalName: "Arachis hypogaea L.",
 diseases: [
  {hi:"टिक्का रोग, रस्ट, कॉलर रॉट",en:"Tikka Leaf Spot, Rust, Collar Rot"},
  {hi:"स्टेम रॉट",en:"Stem Rot"}
 ],
 pests: [
  {hi:"लीफ माइनर, माहू, दीमक",en:"Leaf Miner, Aphids, Termites"},
  {hi:"रेड हेयरी कैटरपिलर",en:"Red Hairy Caterpillar"}
 ],
 climate: {
  hi:"गर्म एवं अपेक्षाकृत शुष्क जलवायु; हल्की भुरभुरी मिट्टी उपयुक्त।",
  en:"Warm and relatively dry climate; light and friable soil is suitable."
 },
 temperature: {
  hi:"लगभग 25–30°C",
  en:"Approximately 25–30°C"
 },
 varieties: {
  hi:"JL 24, TAG 24, GG 20, ICGV 91114",
  en:"JL 24, TAG 24, GG 20, ICGV 91114"
 },
 origin: {
  hi:"दक्षिण अमेरिका।",
  en:"South America."
 },
 chromosome: {
  hi:"2n = 40",
  en:"2n = 40"
 },
 image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=600"
},

{
 id: 16,
 category: "oilseed",
 name: {hi:"तिल",en:"Sesame"},
 botanicalName: "Sesamum indicum L.",
 diseases: [
  {hi:"फाइलोडी, फ्यूजेरियम उकठा, पत्ती धब्बा",en:"Phyllody, Fusarium Wilt, Leaf Spot"},
  {hi:"बैक्टीरियल ब्लाइट",en:"Bacterial Blight"}
 ],
 pests: [
  {hi:"तिल की पत्ती लपेटक, फली छेदक, जैसिड",en:"Sesame Leaf Roller, Capsule Borer, Jassids"},
  {hi:"सफेद मक्खी",en:"Whitefly"}
 ],
 climate: {
  hi:"गर्म जलवायु; कम से मध्यम वर्षा और अच्छी जल निकासी।",
  en:"Warm climate with low to moderate rainfall and good drainage."
 },
 temperature: {
  hi:"लगभग 25–35°C",
  en:"Approximately 25–35°C"
 },
 varieties: {
  hi:"RT 46, GT 10, TKG 22, TMV 7",
  en:"RT 46, GT 10, TKG 22, TMV 7"
 },
 origin: {
  hi:"अफ्रीका और भारतीय उपमहाद्वीप; घरेलूकरण का सटीक केंद्र विवादित है।",
  en:"Africa and the Indian subcontinent; the exact domestication center is debated."
 },
 chromosome: {
  hi:"2n = 26",
  en:"2n = 26"
 },
 image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=600"
},

{
 id: 17,
 category: "oilseed",
 name: {hi:"अलसी",en:"Linseed / Flax"},
 botanicalName: "Linum usitatissimum L.",
 diseases: [
  {hi:"रतुआ, उकठा रोग, अल्टरनेरिया झुलसा",en:"Rust, Wilt, Alternaria Blight"},
  {hi:"कॉलर रॉट",en:"Collar Rot"}
 ],
 pests: [
  {hi:"फली छेदक, एफिड, कटुआ कीट",en:"Capsule Borer, Aphids, Cutworms"},
  {hi:"जैसिड",en:"Jassids"}
 ],
 climate: {
  hi:"ठंडी एवं शुष्क जलवायु; जलभराव से नुकसान।",
  en:"Cool and dry climate; waterlogging is harmful."
 },
 temperature: {
  hi:"लगभग 15–25°C",
  en:"Approximately 15–25°C"
 },
 varieties: {
  hi:"सुशीला, शारदा, T-397, Shekhar",
  en:"Sushila, Sharda, T-397, Shekhar"
 },
 origin: {
  hi:"निकट पूर्व और भूमध्यसागरीय क्षेत्र।",
  en:"Near East and Mediterranean region."
 },
 chromosome: {
  hi:"2n = 30",
  en:"2n = 30"
 },
 image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600"
},


/* =====================================================
   4. COMMERCIAL CROPS - व्यावसायिक फसलें
===================================================== */

{
 id: 18,
 category: "commercial",
 name: {hi:"गन्ना",en:"Sugarcane"},
 botanicalName: "Saccharum officinarum L. (commercial hybrids)",
 diseases: [
  {hi:"लाल सड़न, कंडुआ, विल्ट, घासीय प्ररोह",en:"Red Rot, Smut, Wilt, Grassy Shoot"},
  {hi:"पोका बोइंग",en:"Pokkah Boeng"}
 ],
 pests: [
  {hi:"अगेती तना छेदक, पायरिला, दीमक",en:"Early Shoot Borer, Pyrilla, Termites"},
  {hi:"टॉप बोरर, व्हाइट ग्रब",en:"Top Borer, White Grub"}
 ],
 climate: {
  hi:"उष्णकटिबंधीय एवं उपोष्णकटिबंधीय गर्म और आर्द्र जलवायु।",
  en:"Warm and humid tropical to subtropical climate."
 },
 temperature: {
  hi:"लगभग 20–35°C",
  en:"Approximately 20–35°C"
 },
 varieties: {
  hi:"Co 0238, Co 86032, Co 0118, CoLk 94184",
  en:"Co 0238, Co 86032, Co 0118, CoLk 94184"
 },
 origin: {
  hi:"न्यू गिनी को गन्ने के प्रारंभिक घरेलूकरण का प्रमुख केंद्र माना जाता है।",
  en:"New Guinea is considered a major center of early sugarcane domestication."
 },
 chromosome: {
  hi:"प्रजाति एवं संकर के अनुसार बदलती है; Saccharum officinarum में सामान्यतः 2n = 80, व्यावसायिक संकरों में संख्या परिवर्तनशील।",
  en:"Varies by species and hybrid; commonly 2n = 80 in Saccharum officinarum, while commercial hybrids are variable."
 },
 image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=600"
},

{
 id: 19,
 category: "commercial",
 name: {hi:"कपास",en:"Cotton"},
 botanicalName: "Gossypium hirsutum L.",
 diseases: [
  {hi:"बैक्टीरियल ब्लाइट, फ्यूजेरियम विल्ट, अल्टरनेरिया",en:"Bacterial Blight, Fusarium Wilt, Alternaria Leaf Spot"},
  {hi:"कपास पत्ती मरोड़ विषाणु रोग",en:"Cotton Leaf Curl Virus Disease"}
 ],
 pests: [
  {hi:"गुलाबी सुंडी, अमेरिकन सुंडी, सफेद मक्खी",en:"Pink Bollworm, American Bollworm, Whitefly"},
  {hi:"जैसिड, थ्रिप्स",en:"Jassids, Thrips"}
 ],
 climate: {
  hi:"गर्म जलवायु; पकने के समय साफ और शुष्क मौसम।",
  en:"Warm climate with clear and dry weather during boll opening."
 },
 temperature: {
  hi:"लगभग 21–30°C",
  en:"Approximately 21–30°C"
 },
 varieties: {
  hi:"DCH 32, MCU 5, Suraj, Bunny Bt, RCH 2",
  en:"DCH 32, MCU 5, Suraj, Bunny Bt, RCH 2"
 },
 origin: {
  hi:"कपास की विभिन्न प्रजातियों के स्वतंत्र घरेलूकरण केंद्र अफ्रीका, एशिया और अमेरिका में हैं।",
  en:"Different cotton species were independently domesticated in Africa, Asia and the Americas."
 },
 chromosome: {
  hi:"2n = 52 (G. hirsutum); देसी द्विगुणित कपास में 2n = 26",
  en:"2n = 52 (G. hirsutum); diploid desi cotton has 2n = 26"
 },
 image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600"
},

{
 id: 20,
 category: "commercial",
 name: {hi:"जूट",en:"Jute"},
 botanicalName: "Corchorus olitorius L. / Corchorus capsularis L.",
 diseases: [
  {hi:"तना सड़न, जड़ सड़न, पत्ती धब्बा",en:"Stem Rot, Root Rot, Leaf Spot"},
  {hi:"मोजेक",en:"Mosaic"}
 ],
 pests: [
  {hi:"जूट सेमीलूपर, हेयरी कैटरपिलर, स्टेम वीविल",en:"Jute Semilooper, Hairy Caterpillar, Stem Weevil"},
  {hi:"माइट",en:"Mites"}
 ],
 climate: {
  hi:"गर्म, आर्द्र एवं अधिक वर्षा वाली जलवायु।",
  en:"Warm, humid and high-rainfall climate."
 },
 temperature: {
  hi:"लगभग 24–35°C",
  en:"Approximately 24–35°C"
 },
 varieties: {
  hi:"JRO 204, JRO 524, JRC 321, JRC 7447",
  en:"JRO 204, JRO 524, JRC 321, JRC 7447"
 },
 origin: {
  hi:"भारतीय उपमहाद्वीप और दक्षिण-पूर्व एशिया।",
  en:"Indian subcontinent and Southeast Asia."
 },
 chromosome: {
  hi:"2n = 14 (दोनों प्रमुख प्रजातियों में)",
  en:"2n = 14 (in both major species)"
 },
 image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=600"
},

{
 id: 21,
 category: "commercial",
 name: {hi:"आलू",en:"Potato"},
 botanicalName: "Solanum tuberosum L.",
 diseases: [
  {hi:"अगेती झुलसा, पछेती झुलसा, काला पपड़ी रोग",en:"Early Blight, Late Blight, Black Scurf"},
  {hi:"जीवाणु मुरझान",en:"Bacterial Wilt"}
 ],
 pests: [
  {hi:"आलू का पतंगा, एफिड, सफेद लट",en:"Potato Tuber Moth, Aphids, White Grub"},
  {hi:"कटुआ कीट",en:"Cutworm"}
 ],
 climate: {
  hi:"ठंडी जलवायु; कंद बनने के समय मध्यम तापमान उपयुक्त।",
  en:"Cool climate; moderate temperatures are suitable during tuber formation."
 },
 temperature: {
  hi:"लगभग 15–25°C",
  en:"Approximately 15–25°C"
 },
 varieties: {
  hi:"कुफरी ज्योति, कुफरी चंद्रमुखी, कुफरी पुखराज, कुफरी बादशाह",
  en:"Kufri Jyoti, Kufri Chandramukhi, Kufri Pukhraj, Kufri Badshah"
 },
 origin: {
  hi:"दक्षिण अमेरिका के एंडीज पर्वतीय क्षेत्र, विशेषकर पेरू और बोलीविया।",
  en:"Andean region of South America, especially Peru and Bolivia."
 },
 chromosome: {
  hi:"2n = 48",
  en:"2n = 48"
 },
 image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600"
},

{
 id: 22,
 category: "commercial",
 name: {hi:"तम्बाकू",en:"Tobacco"},
 botanicalName: "Nicotiana tabacum L.",
 diseases: [
  {hi:"ब्लैक शैंक, मोच्चा, लीफ कर्ल, डाउनी मिल्ड्यू",en:"Black Shank, Damping-off, Leaf Curl, Downy Mildew"},
  {hi:"बैक्टीरियल विल्ट",en:"Bacterial Wilt"}
 ],
 pests: [
  {hi:"तंबाकू की इल्ली, एफिड, सफेद मक्खी",en:"Tobacco Caterpillar, Aphids, Whitefly"},
  {hi:"थ्रिप्स",en:"Thrips"}
 ],
 climate: {
  hi:"गर्म एवं हल्की शुष्क जलवायु; मिट्टी का प्रकार गुणवत्ता को प्रभावित करता है।",
  en:"Warm and moderately dry climate; soil type affects leaf quality."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"FCV - Kanchan, Siri, Abirami, VT 1158",
  en:"FCV - Kanchan, Siri, Abirami, VT 1158"
 },
 origin: {
  hi:"अमेरिका, विशेषकर मध्य एवं दक्षिण अमेरिका।",
  en:"The Americas, particularly Central and South America."
 },
 chromosome: {
  hi:"2n = 48",
  en:"2n = 48"
 },
 image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=600"
},


/* =====================================================
   5. MEDICINAL / SPECIAL CROPS - औषधीय फसलें
===================================================== */

{
 id: 23,
 category: "medicinal",
 name: {hi:"मशरूम",en:"Mushroom"},
 botanicalName: "Agaricus bisporus (Common Button Mushroom)",
 diseases: [
  {hi:"वेट बबल, ड्राई बबल, ग्रीन मोल्ड",en:"Wet Bubble, Dry Bubble, Green Mold"},
  {hi:"कोबवेब रोग",en:"Cobweb Disease"}
 ],
 pests: [
  {hi:"मशरूम मक्खी, माइट, नेमाटोड",en:"Sciarid Flies, Mites, Nematodes"},
  {hi:"फोरिड मक्खी",en:"Phorid Flies"}
 ],
 climate: {
  hi:"नियंत्रित तापमान और अधिक आर्द्रता वाला स्वच्छ वातावरण; कम्पोस्ट एवं नमी जरूरी।",
  en:"Clean, controlled-temperature and humid environment; compost and moisture are essential."
 },
 temperature: {
  hi:"बटन मशरूम में केसिंग के बाद फलन के लिए सामान्यतः लगभग 14–18°C",
  en:"For button mushroom fruiting, generally around 14–18°C after casing."
 },
 varieties: {
  hi:"A-15, S-11, U-3, NBS-5 (उत्पादन स्ट्रेन)",
  en:"A-15, S-11, U-3, NBS-5 (production strains)"
 },
 origin: {
  hi:"यूरोप और उत्तरी अमेरिका में प्राकृतिक रूप से पाया जाता है; खेती विश्वभर में होती है।",
  en:"Naturally found in Europe and North America; cultivated worldwide."
 },
 chromosome: {
  hi:"Agaricus bisporus में n = 8; जीवन चक्र में केंद्रक अवस्था के अनुसार गणना अलग हो सकती है।",
  en:"Agaricus bisporus has n = 8; counts depend on nuclear stage in its life cycle."
 },
 image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=600"
},

{
 id: 24,
 category: "medicinal",
 name: {hi:"पुदीना",en:"Mint"},
 botanicalName: "Mentha arvensis L. (Indian Mint)",
 diseases: [
  {hi:"पत्ती धब्बा, रस्ट, पाउडरी मिल्ड्यू",en:"Leaf Spot, Rust, Powdery Mildew"},
  {hi:"जड़ सड़न",en:"Root Rot"}
 ],
 pests: [
  {hi:"पत्ती खाने वाली इल्ली, माइट, एफिड",en:"Leaf-Eating Caterpillars, Mites, Aphids"},
  {hi:"कटुआ कीट",en:"Cutworms"}
 ],
 climate: {
  hi:"समशीतोष्ण से उपोष्णकटिबंधीय जलवायु; पर्याप्त नमी एवं धूप।",
  en:"Temperate to subtropical climate with adequate moisture and sunlight."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"कोशी, शिवालिक, हिमालय, CIM-Kranti",
  en:"Kosi, Shivalik, Himalaya, CIM-Kranti"
 },
 origin: {
  hi:"भारतीय पुदीना का संबंध एशिया से है; Mentha वंश का प्राकृतिक विस्तार यूरोप और एशिया में है।",
  en:"Indian mint is associated with Asia; the Mentha genus is native across Europe and Asia."
 },
 chromosome: {
  hi:"Mentha arvensis में सामान्यतः 2n = 96",
  en:"Usually 2n = 96 in Mentha arvensis"
 },
 image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=600"
},

{
 id: 25,
 category: "medicinal",
 name: {hi:"तुलसी",en:"Holy Basil"},
 botanicalName: "Ocimum tenuiflorum L. (Syn. Ocimum sanctum)",
 diseases: [
  {hi:"पत्ती धब्बा, डाउनी मिल्ड्यू, जड़ सड़न",en:"Leaf Spot, Downy Mildew, Root Rot"},
  {hi:"फ्यूजेरियम विल्ट",en:"Fusarium Wilt"}
 ],
 pests: [
  {hi:"माहू, सफेद मक्खी, पत्ती खाने वाली इल्ली",en:"Aphids, Whitefly, Leaf-Eating Caterpillars"},
  {hi:"थ्रिप्स",en:"Thrips"}
 ],
 climate: {
  hi:"गर्म उष्णकटिबंधीय जलवायु; पर्याप्त धूप और अच्छी जल निकासी।",
  en:"Warm tropical climate with adequate sunlight and good drainage."
 },
 temperature: {
  hi:"लगभग 20–35°C",
  en:"Approximately 20–35°C"
 },
 varieties: {
  hi:"राम तुलसी, कृष्ण तुलसी, श्याम तुलसी, CIM-Ayu",
  en:"Rama Tulsi, Krishna Tulsi, Shyama Tulsi, CIM-Ayu"
 },
 origin: {
  hi:"भारतीय उपमहाद्वीप और दक्षिण-पूर्व एशिया।",
  en:"Indian subcontinent and Southeast Asia."
 },
 chromosome: {
  hi:"2n = 32 (सामान्यतः)",
  en:"2n = 32 (commonly)"
 },
 image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600"
},


/* =====================================================
   6. HORTICULTURAL CROPS - बागवानी फसलें
===================================================== */

{
 id: 26,
 category: "horticulture",
 name: {hi:"आम",en:"Mango"},
 botanicalName: "Mangifera indica L.",
 diseases: [
  {hi:"एन्थ्रेक्नोज, पाउडरी मिल्ड्यू, डाइबैक",en:"Anthracnose, Powdery Mildew, Dieback"},
  {hi:"बैक्टीरियल ब्लैक स्पॉट",en:"Bacterial Black Spot"}
 ],
 pests: [
  {hi:"आम का भुनगा, फल मक्खी, मिलीबग",en:"Mango Hopper, Fruit Fly, Mealybug"},
  {hi:"स्टेम बोरर",en:"Stem Borer"}
 ],
 climate: {
  hi:"उष्ण एवं उपोष्णकटिबंधीय जलवायु; फूल आने पर शुष्क मौसम लाभकारी।",
  en:"Tropical and subtropical climate; dry weather during flowering is beneficial."
 },
 temperature: {
  hi:"लगभग 24–30°C",
  en:"Approximately 24–30°C"
 },
 varieties: {
  hi:"दशहरी, लंगड़ा, चौसा, अल्फांसो, केसर, आम्रपाली",
  en:"Dashehari, Langra, Chausa, Alphonso, Kesar, Amrapali"
 },
 origin: {
  hi:"भारतीय उपमहाद्वीप, विशेषकर भारत और म्यांमार क्षेत्र।",
  en:"Indian subcontinent, particularly the India-Myanmar region."
 },
 chromosome: {
  hi:"2n = 40",
  en:"2n = 40"
 },
 image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600"
},

{
 id: 27,
 category: "horticulture",
 name: {hi:"केला",en:"Banana"},
 botanicalName: "Musa spp.",
 diseases: [
  {hi:"पनामा विल्ट, सिगाटोका, बंची टॉप",en:"Panama Wilt, Sigatoka, Banana Bunchy Top"},
  {hi:"बैक्टीरियल विल्ट",en:"Bacterial Wilt"}
 ],
 pests: [
  {hi:"राइजोम वीविल, छद्म तना वीविल, नेमाटोड",en:"Rhizome Weevil, Pseudostem Weevil, Nematodes"},
  {hi:"थ्रिप्स",en:"Thrips"}
 ],
 climate: {
  hi:"गर्म एवं आर्द्र उष्णकटिबंधीय जलवायु; पाला नुकसानदायक।",
  en:"Warm and humid tropical climate; frost is harmful."
 },
 temperature: {
  hi:"लगभग 20–35°C",
  en:"Approximately 20–35°C"
 },
 varieties: {
  hi:"ग्रैंड नैन, ड्वार्फ कैवेंडिश, रोबस्टा, नेयपूवन, पूवन",
  en:"Grand Naine, Dwarf Cavendish, Robusta, Ney Poovan, Poovan"
 },
 origin: {
  hi:"दक्षिण-पूर्व एशिया और पश्चिमी प्रशांत क्षेत्र।",
  en:"Southeast Asia and the western Pacific region."
 },
 chromosome: {
  hi:"2n = 22, 33 या 44; जीनोम एवं प्लॉइडी पर निर्भर।",
  en:"2n = 22, 33 or 44; depends on genome and ploidy."
 },
 image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600"
},

{
 id: 28,
 category: "horticulture",
 name: {hi:"सेब",en:"Apple"},
 botanicalName: "Malus domestica Borkh.",
 diseases: [
  {hi:"एप्पल स्कैब, पाउडरी मिल्ड्यू, कैंकर",en:"Apple Scab, Powdery Mildew, Canker"},
  {hi:"फायर ब्लाइट",en:"Fire Blight"}
 ],
 pests: [
  {hi:"एप्पल वूल्ली एफिड, फल छेदक, माइट",en:"Woolly Apple Aphid, Codling Moth, Mites"},
  {hi:"स्केल कीट",en:"Scale Insects"}
 ],
 climate: {
  hi:"ठंडी समशीतोष्ण जलवायु; कई किस्मों को शीतकालीन शीतलन अवधि चाहिए।",
  en:"Cool temperate climate; many cultivars require winter chilling."
 },
 temperature: {
  hi:"सक्रिय वृद्धि के लिए लगभग 15–24°C; आवश्यकता किस्म पर निर्भर।",
  en:"Approximately 15–24°C for active growth; requirements vary by cultivar."
 },
 varieties: {
  hi:"रॉयल डिलीशियस, रेड डिलीशियस, गोल्डन डिलीशियस, अन्ना",
  en:"Royal Delicious, Red Delicious, Golden Delicious, Anna"
 },
 origin: {
  hi:"मध्य एशिया, विशेषकर कजाकिस्तान का क्षेत्र।",
  en:"Central Asia, particularly the Kazakhstan region."
 },
 chromosome: {
  hi:"2n = 34",
  en:"2n = 34"
 },
 image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600"
},

{
 id: 29,
 category: "horticulture",
 name: {hi:"टमाटर",en:"Tomato"},
 botanicalName: "Solanum lycopersicum L.",
 diseases: [
  {hi:"अगेती झुलसा, पछेती झुलसा, बैक्टीरियल विल्ट",en:"Early Blight, Late Blight, Bacterial Wilt"},
  {hi:"लीफ कर्ल विषाणु रोग",en:"Tomato Leaf Curl Virus Disease"}
 ],
 pests: [
  {hi:"फल छेदक, सफेद मक्खी, लीफ माइनर",en:"Fruit Borer, Whitefly, Leaf Miner"},
  {hi:"थ्रिप्स",en:"Thrips"}
 ],
 climate: {
  hi:"हल्की ठंडी से गर्म जलवायु; अत्यधिक गर्मी में फल सेट प्रभावित होता है।",
  en:"Mild cool to warm climate; excessive heat affects fruit setting."
 },
 temperature: {
  hi:"लगभग 18–27°C",
  en:"Approximately 18–27°C"
 },
 varieties: {
  hi:"पूसा रूबी, अर्का रक्षक, अर्का विकास, अर्का अभेद",
  en:"Pusa Ruby, Arka Rakshak, Arka Vikas, Arka Abha"
 },
 origin: {
  hi:"दक्षिण अमेरिका के एंडीज क्षेत्र; बाद में मेक्सिको में इसका विकास और घरेलूकरण हुआ।",
  en:"Andean region of South America; later developed and domesticated in Mexico."
 },
 chromosome: {
  hi:"2n = 24",
  en:"2n = 24"
 },
 image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600"
},

{
 id: 30,
 category: "horticulture",
 name: {hi:"प्याज",en:"Onion"},
 botanicalName: "Allium cepa L.",
 diseases: [
  {hi:"पर्पल ब्लॉच, डाउनी मिल्ड्यू, बेसल रॉट",en:"Purple Blotch, Downy Mildew, Basal Rot"},
  {hi:"स्टेमफिलियम ब्लाइट",en:"Stemphylium Blight"}
 ],
 pests: [
  {hi:"थ्रिप्स, प्याज की मक्खी, कटुआ कीट",en:"Onion Thrips, Onion Fly, Cutworm"},
  {hi:"माइट",en:"Mites"}
 ],
 climate: {
  hi:"हल्की ठंडी अवस्था में वृद्धि और पकने के समय शुष्क मौसम।",
  en:"Cool conditions for vegetative growth and dry weather during bulb maturity."
 },
 temperature: {
  hi:"लगभग 13–25°C",
  en:"Approximately 13–25°C"
 },
 varieties: {
  hi:"भीमा सुपर, भीमा शक्ति, नासिक रेड, अर्का कल्याण",
  en:"Bhima Super, Bhima Shakti, Nasik Red, Arka Kalyan"
 },
 origin: {
  hi:"मध्य एशिया और ईरान-अफगानिस्तान क्षेत्र।",
  en:"Central Asia and the Iran-Afghanistan region."
 },
 chromosome: {
  hi:"2n = 16",
  en:"2n = 16"
 },
 image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=600"
},

{
 id: 31,
 category: "horticulture",
 name: {hi:"मिर्च",en:"Chilli Pepper"},
 botanicalName: "Capsicum annuum L.",
 diseases: [
  {hi:"एन्थ्रेक्नोज, डाइबैक, पत्ती मरोड़ विषाणु रोग",en:"Anthracnose, Dieback, Leaf Curl Virus Disease"},
  {hi:"फाइटोफ्थोरा ब्लाइट",en:"Phytophthora Blight"}
 ],
 pests: [
  {hi:"थ्रिप्स, माइट, एफिड, फल छेदक",en:"Thrips, Mites, Aphids, Fruit Borer"},
  {hi:"सफेद मक्खी",en:"Whitefly"}
 ],
 climate: {
  hi:"गर्म एवं अपेक्षाकृत शुष्क जलवायु; पाला और जलभराव हानिकारक।",
  en:"Warm and relatively dry climate; frost and waterlogging are harmful."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"पूसा ज्वाला, काशी अनमोल, अर्का मेघना, ब्याडगी",
  en:"Pusa Jwala, Kashi Anmol, Arka Meghana, Byadgi"
 },
 origin: {
  hi:"मध्य एवं दक्षिण अमेरिका।",
  en:"Central and South America."
 },
 chromosome: {
  hi:"2n = 24",
  en:"2n = 24"
 },
 image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600"
},

{
 id: 32,
 category: "horticulture",
 name: {hi:"हल्दी",en:"Turmeric"},
 botanicalName: "Curcuma longa L.",
 diseases: [
  {hi:"पत्ती धब्बा, पत्ती झुलसा, राइजोम सड़न",en:"Leaf Spot, Leaf Blotch, Rhizome Rot"},
  {hi:"बैक्टीरियल विल्ट",en:"Bacterial Wilt"}
 ],
 pests: [
  {hi:"राइजोम स्केल, शूट बोरर, लीफ रोलर",en:"Rhizome Scale, Shoot Borer, Leaf Roller"},
  {hi:"नेमाटोड",en:"Nematodes"}
 ],
 climate: {
  hi:"गर्म एवं आर्द्र उष्णकटिबंधीय जलवायु; आंशिक छाया और पर्याप्त वर्षा।",
  en:"Warm and humid tropical climate with partial shade and adequate rainfall."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"सुगुना, सुदर्शन, प्रतिभा, सलेम, राजेंद्र सोनिया",
  en:"Suguna, Sudarshan, Pratibha, Salem, Rajendra Sonia"
 },
 origin: {
  hi:"दक्षिण एवं दक्षिण-पूर्व एशिया; भारत इसका प्रमुख विविधता केंद्र है।",
  en:"South and Southeast Asia; India is a major center of diversity."
 },
 chromosome: {
  hi:"2n = 63 (प्रचलित रिपोर्ट)",
  en:"2n = 63 (commonly reported)"
 },
 image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f1?w=600"
},

{
 id: 33,
 category: "horticulture",
 name: {hi:"धनिया",en:"Coriander"},
 botanicalName: "Coriandrum sativum L.",
 diseases: [
  {hi:"पाउडरी मिल्ड्यू, स्टेम गॉल, उकठा रोग",en:"Powdery Mildew, Stem Gall, Wilt"},
  {hi:"बैक्टीरियल ब्लाइट",en:"Bacterial Blight"}
 ],
 pests: [
  {hi:"माहू, धनिया एफिड, कटुआ कीट",en:"Aphids, Coriander Aphid, Cutworm"},
  {hi:"थ्रिप्स",en:"Thrips"}
 ],
 climate: {
  hi:"ठंडी एवं शुष्क जलवायु; फूल आने पर अधिक गर्मी हानिकारक।",
  en:"Cool and dry climate; excessive heat during flowering is harmful."
 },
 temperature: {
  hi:"लगभग 15–25°C",
  en:"Approximately 15–25°C"
 },
 varieties: {
  hi:"पंत हरितमा, RCr-436, अजमेर धनिया-1, हिसार सुगंध",
  en:"Pant Haritma, RCr-436, Ajmer Coriander-1, Hisar Sugandh"
 },
 origin: {
  hi:"भूमध्यसागरीय क्षेत्र और पश्चिमी एशिया।",
  en:"Mediterranean region and Western Asia."
 },
 chromosome: {
  hi:"2n = 22",
  en:"2n = 22"
 },
 image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=600"
},

{
 id: 34,
 category: "horticulture",
 name: {hi:"अदरक",en:"Ginger"},
 botanicalName: "Zingiber officinale Roscoe",
 diseases: [
  {hi:"सॉफ्ट रॉट, बैक्टीरियल विल्ट, पत्ती धब्बा",en:"Soft Rot, Bacterial Wilt, Leaf Spot"},
  {hi:"फ्यूजेरियम विल्ट",en:"Fusarium Wilt"}
 ],
 pests: [
  {hi:"शूट बोरर, राइजोम स्केल, नेमाटोड",en:"Shoot Borer, Rhizome Scale, Nematodes"},
  {hi:"रूट ग्रब",en:"Root Grub"}
 ],
 climate: {
  hi:"गर्म एवं आर्द्र जलवायु; आंशिक छाया और अच्छी जल निकासी।",
  en:"Warm and humid climate with partial shade and good drainage."
 },
 temperature: {
  hi:"लगभग 20–30°C",
  en:"Approximately 20–30°C"
 },
 varieties: {
  hi:"रियो-डी-जेनेरो, सुप्रभा, सुरभि, IISR वरदा, महिमा",
  en:"Rio-de-Janeiro, Suprabha, Surabhi, IISR Varada, Mahima"
 },
 origin: {
  hi:"दक्षिण-पूर्व एशिया।",
  en:"Southeast Asia."
 },
 chromosome: {
  hi:"2n = 22",
  en:"2n = 22"
 },
 image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600"
},

{
 id: 35,
 category: "horticulture",
 name: {hi:"गुलाब",en:"Rose"},
 botanicalName: "Rosa spp.",
 diseases: [
  {hi:"पाउडरी मिल्ड्यू, ब्लैक स्पॉट, डाउनी मिल्ड्यू",en:"Powdery Mildew, Black Spot, Downy Mildew"},
  {hi:"डाइबैक",en:"Dieback"}
 ],
 pests: [
  {hi:"एफिड, थ्रिप्स, माइट, लीफ हॉपर",en:"Aphids, Thrips, Mites, Leafhoppers"},
  {hi:"रेड स्केल",en:"Red Scale"}
 ],
 climate: {
  hi:"हल्की ठंडी से समशीतोष्ण जलवायु; पर्याप्त धूप और हवा का संचार।",
  en:"Mild cool to temperate climate with adequate sunlight and air circulation."
 },
 temperature: {
  hi:"लगभग 15–28°C",
  en:"Approximately 15–28°C"
 },
 varieties: {
  hi:"हाइब्रिड टी, फ्लोरिबंडा, ग्रैंडिफ्लोरा, पॉलिएंथा",
  en:"Hybrid Tea, Floribunda, Grandiflora, Polyantha"
 },
 origin: {
  hi:"गुलाब की जंगली प्रजातियों का उद्गम मुख्यतः उत्तरी गोलार्ध में एशिया, यूरोप और उत्तरी अमेरिका में हुआ।",
  en:"Wild rose species originated mainly across Asia, Europe and North America in the Northern Hemisphere."
 },
 chromosome: {
  hi:"प्रजाति के अनुसार परिवर्तनशील; सामान्य मूल संख्या x = 7, 2n = 14 से 2n = 42 तक।",
  en:"Variable by species; basic number x = 7, with 2n ranging from 14 to 42."
 },
 image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600"
},

{
 id: 36,
 category: "horticulture",
 name: {hi:"गेंदा",en:"Marigold"},
 botanicalName: "Tagetes erecta L. / Tagetes patula L.",
 diseases: [
  {hi:"अल्टरनेरिया पत्ती धब्बा, डाइबैक, फाइटोफ्थोरा सड़न",en:"Alternaria Leaf Spot, Dieback, Phytophthora Rot"},
  {hi:"पाउडरी मिल्ड्यू",en:"Powdery Mildew"}
 ],
 pests: [
  {hi:"एफिड, थ्रिप्स, लीफ माइनर, माइट",en:"Aphids, Thrips, Leaf Miner, Mites"},
  {hi:"कटुआ कीट",en:"Cutworms"}
 ],
 climate: {
  hi:"उष्ण एवं उपोष्णकटिबंधीय जलवायु; पर्याप्त धूप आवश्यक।",
  en:"Tropical and subtropical climate; adequate sunlight is essential."
 },
 temperature: {
  hi:"लगभग 18–30°C",
  en:"Approximately 18–30°C"
 },
 varieties: {
  hi:"पूसा नारंगी गेंदा, पूसा बसंती गेंदा, अफ्रीकन येलो, फ्रेंच ड्वार्फ",
  en:"Pusa Narangi Gainda, Pusa Basanti Gainda, African Yellow, French Dwarf"
 },
 origin: {
  hi:"मेक्सिको और मध्य अमेरिका।",
  en:"Mexico and Central America."
 },
 chromosome: {
  hi:"Tagetes erecta में सामान्यतः 2n = 24",
  en:"Usually 2n = 24 in Tagetes erecta"
 },
 image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600"
}

];


/* =====================================================
   GLOBAL DATABASE EXPORT
===================================================== */

// Make crop database available to script.js

window.crops = crops;

// Total crop count

window.totalCrops = crops.length;

// Crop categories

window.cropCategories = [
 {
  id: "cereal",
  name: {hi:"अनाज वाली फसलें",en:"Cereal Crops"},
  icon: "🌾",
  description: {
   hi:"धान, गेहूँ, मक्का और अन्य अनाज।",
   en:"Rice, wheat, maize and other cereal crops."
  }
 },
 {
  id: "pulse",
  name: {hi:"दलहनी फसलें",en:"Pulse Crops"},
  icon: "🫘",
  description: {
   hi:"प्रोटीन युक्त दलहन फसलें।",
   en:"Protein-rich pulse crops."
  }
 },
 {
  id: "oilseed",
  name: {hi:"तिलहनी फसलें",en:"Oilseed Crops"},
  icon: "🌻",
  description: {
   hi:"तेल उत्पादन करने वाली फसलें।",
   en:"Crops cultivated for edible and industrial oils."
  }
 },
 {
  id: "commercial",
  name: {hi:"व्यावसायिक फसलें",en:"Commercial Crops"},
  icon: "🏭",
  description: {
   hi:"व्यापार एवं उद्योग में उपयोग होने वाली फसलें।",
   en:"Crops used in trade and industry."
  }
 },
 {
  id: "medicinal",
  name: {hi:"औषधीय एवं विशेष फसलें",en:"Medicinal & Special Crops"},
  icon: "🌿",
  description: {
   hi:"औषधीय, सुगंधित एवं विशेष कृषि उत्पाद।",
   en:"Medicinal, aromatic and special agricultural products."
  }
 },
 {
  id: "horticulture",
  name: {hi:"बागवानी फसलें",en:"Horticultural Crops"},
  icon: "🍎",
  description: {
   hi:"फल, सब्जियाँ, मसाले एवं फूल।",
   en:"Fruits, vegetables, spices and flowers."
  }
 }
];

console.log("Crop Database Loaded Successfully!");
console.log("Total Crops:", crops.length);
window.crops = crops;
window.totalCrops = crops.length;

console.log("कुल फसलें:", crops.length);
