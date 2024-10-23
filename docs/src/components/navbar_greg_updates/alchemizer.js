export default { alchemize }

const planetInfo = {'Sun': {'Dignity Effect': {'Leo': 1,
                                               'Aries': 2,
                                               'Aquarius': -1,
                                               'Libra': -2},
                            'Elements': ['Fire', 'Fire'],
                            'Alchemy': {'Spirit': 1,
                                        'Essence': 0,
                                        'Matter': 0,
                                        'Substance': 0},
                            'Diurnal Base Element': 'Fire',
                            'Nocturnal Base Element': ''},
                    'Moon': {'Dignity Effect': {'Cancer': 1,
                                                'Taurus': 2,
                                                'Capricorn': -1,
                                                'Scorpio': -2},
                             'Elements': ['Water', 'Water'],
                             'Alchemy': {'Spirit': 0,
                                         'Essence': 1,
                                         'Matter': 1,
                                         'Substance': 0},
                             'Diurnal Base Element': 'Water',
                             'Nocturnal Base Element': ''},
                    'Mercury': {'Dignity Effect': {'Gemini': 1, 
                                                   'Virgo': 3,
                                                   'Sagittarius': 1, 
                                                   'Pisces': -3},
                                'Elements': ['Air', 'Earth'],
                                'Alchemy': {'Spirit': 1,
                                            'Essence': 0,
                                            'Matter': 0,
                                            'Substance': 1},
                                'Diurnal Base Element': 'Earth',
                                'Nocturnal Base Element': 'Air'},
                    'Venus': {'Dignity Effect': {'Libra': 1, 
                                                 'Taurus': 1,
                                                 'Pisces': 2, 
                                                 'Aries': -1,
                                                 'Scorpio': -1,
                                                 'Virgo': -2},
                              'Elements': ['Water', 'Earth'],
                              'Alchemy': {'Spirit': 0,
                                          'Essence': 1,
                                          'Matter': 1,
                                          'Substance': 0},
                              'Diurnal Base Element': 'Water',
                              'Nocturnal Base Element': 'Earth'},
                    'Mars': {'Dignity Effect': {'Aries': 1,
                                                'Scorpio': 1, 
                                                'Capricorn': 2,
                                                'Taurus': -1,
                                                'Libra': -1,
                                                'Cancer': -2},
                             'Elements': ['Fire', 'Water'],
                             'Alchemy': {'Spirit': 0,
                                         'Essence': 1,
                                         'Matter': 1,
                                         'Substance': 0},
                             'Diurnal Base Element': 'Fire',
                             'Nocturnal Base Element': 'Water'},
                    'Jupiter': {'Dignity Effect': {'Pisces': 1,
                                                   'Sagittarius': 1,
                                                   'Cancer': 2,
                                                   'Gemini': -1,
                                                   'Virgo': -1,
                                                   'Capricorn': -2},
                                'Elements': ['Air', 'Fire'],
                                'Alchemy': {'Spirit': 1,
                                            'Essence': 1,
                                            'Matter': 0,
                                            'Substance': 0},
                                'Diurnal Base Element': 'Air',
                                'Nocturnal Base Element': 'Fire'},
                    'Saturn': {'Dignity Effect': {'Aquarius': 1,
                                                  'Capricorn': 1,
                                                  'Libra': 2,
                                                  'Cancer': -1,
                                                  'Leo': -1,
                                                  'Aries': -2},
                               'Elements': ['Air', 'Earth'],
                               'Alchemy': {'Spirit': 1,
                                           'Essence': 0,
                                           'Matter': 1,
                                           'Substance': 0},
                               'Diurnal Base Element': 'Air',
                               'Nocturnal Base Element': 'Earth'},
                    'Uranus': {'Dignity Effect': {'Aquarius': 1,
                                                  'Scorpio': 2,
                                                  'Taurus': -3},
                               'Elements': ['Water', 'Air'],
                               'Alchemy': {'Spirit': 0,
                                           'Essence': 1,
                                           'Matter': 1,
                                           'Substance': 0},
                               'Diurnal Base Element': 'Water',
                               'Nocturnal Base Element': 'Air'},
                    'Neptune': {'Dignity Effect': {'Pisces': 1,
                                                   'Cancer': 2,
                                                   'Virgo': -1,
                                                   'Capricorn': -2},
                                'Elements': ['Water', 'Water'],
                                'Alchemy': {'Spirit': 0,
                                            'Essence': 1,
                                            'Matter': 0,
                                            'Substance': 1},
                                'Diurnal Base Element': 'Water',
                                'Nocturnal Base Element': 'Water'},
                    'Pluto': {'Dignity Effect': {'Scorpio': 1,
                                                 'Leo': 2,
                                                 'Taurus': -1,
                                                 'Aquarius': -2},
                              'Elements': ['Earth', 'Water'],
                              'Alchemy': {'Spirit': 0,
                                          'Essence': 1,
                                          'Matter': 1,
                                          'Substance': 0},
                              'Diurnal Base Element': 'Earth',
                              'Nocturnal Base Element': 'Water'},
                    'Ascendant': {'Diurnal Base Element': 'Earth',
                                  'Nocturnal Base Element': 'Earth'}};

const signInfo = {"Aries": {"Major Tarot Card": "The Emperor",
                            "Minor Tarot Cards": {"1st Decan": "2 of Wands",
                                                  "2nd Decan": "3 of Wands",
                                                  "3rd Decan": "4 of Wands"},
                            "Decan Effects": {"1st Decan": ["Mars"],
                                              "2nd Decan": ["Sun"],
                                              "3rd Decan": ["Venus"]},
                            "Degree Effects": {"Mercury": [15, 21],
                                               "Venus": [7, 14],
                                               "Mars": [22, 26],
                                               "Jupiter": [1, 6],
                                               "Saturn": [27, 30]},
                            "Ruler": "Mars",
                            "Modality": "Cardinal"},
                  "Taurus": {"Major Tarot Card": "The Heirophant",
                             "Minor Tarot Cards": {"1st Decan": "5 of Pentacles",
                                                   "2nd Decan": "6 of Pentacles",
                                                   "3rd Decan": "7 of Pentacles"},
                             "Decan Effects": {"1st Decan": ["Mercury"],
                                               "2nd Decan": ["Moon"],
                                               "3rd Decan": ["Saturn"]},
                             "Degree Effects": {"Mercury": [9, 15],
                                                "Venus": [1, 8],
                                                "Mars": [27, 30],
                                                "Jupiter": [16, 22],
                                                "Saturn": [23, 26]},
                             "Ruler": "Venus",
                             "Modality": "Fixed"},
                  "Gemini": {"Major Tarot Card": "The Lovers",
                             "Minor Tarot Cards": {"1st Decan": "8 of Swords",
                                                   "2nd Decan": "9 of Swords",
                                                   "3rd Decan": "10 of Swords"},
                             "Decan Effects": {"1st Decan": ["Jupiter"],
                                               "2nd Decan": ["Mars"],
                                               "3rd Decan": ["Uranus", "Sun"]},
                             "Degree Effects": {"Mercury": [1, 7],
                                                "Venus": [15, 20],
                                                "Mars": [26, 30],
                                                "Jupiter": [8, 14],
                                                "Saturn": [22, 25]},
                             "Ruler": "Mercury",
                             "Modality": "Mutable"},
                  "Cancer": {"Major Tarot Card": "The Chariot",
                             "Minor Tarot Cards": {"1st Decan": "2 of Cups",
                                                   "2nd Decan": "3 of Cups",
                                                   "3rd Decan": "4 of Cups"},
                             "Decan Effects": {"1st Decan": ["Venus"],
                                               "2nd Decan": ["Mercury", "Pluto"],
                                               "3rd Decan": ["Neptune", "Moon"]},
                             "Degree Effects": {"Mercury": [14, 20],
                                                "Venus": [21, 27],
                                                "Mars": [1, 6],
                                                "Jupiter": [7, 13],
                                                "Saturn": [28, 30]},
                             "Ruler": "Moon",
                             "Modality": "Cardinal"},
                  "Leo": {"Major Tarot Card": "Strength",
                          "Minor Tarot Cards": {"1st Decan": "5 of Wands",
                                                "2nd Decan": "6 of Wands",
                                                "3rd Decan": "7 of Wands"},
                          "Decan Effects": {"1st Decan": ["Saturn"],
                                            "2nd Decan": ["Jupiter"],
                                            "3rd Decan": ["Mars"]},
                          "Degree Effects": {"Mercury": [7, 13],
                                             "Venus": [14, 19],
                                             "Mars": [26, 30],
                                             "Jupiter": [20, 25],
                                             "Saturn": [1, 6]},
                          "Ruler": "Sun",
                          "Modality": "Fixed"},
                  "Virgo": {"Major Tarot Card": "The Hermit",
                            "Minor Tarot Cards": {"1st Decan": "8 of Pentacles",
                                                  "2nd Decan": "9 of Pentacles",
                                                  "3rd Decan": "10 of Pentacles"},
                             "Decan Effects": {"1st Decan": ["Mars", "Sun"],
                                               "2nd Decan": ["Venus"],
                                               "3rd Decan": ["Mercury"]},
                             "Degree Effects": {"Mercury": [1, 7],
                                                "Venus": [8, 13],
                                                "Mars": [25, 30],
                                                "Jupiter": [14, 18],
                                                "Saturn": [19, 24]},
                             "Ruler": "Mercury",
                             "Modality": "Mutable"},
                  "Libra": {"Major Tarot Card": "Justice",
                            "Minor Tarot Cards": {"1st Decan": "2 of Swords",
                                                  "2nd Decan": "3 of Swords",
                                                  "3rd Decan": "4 of Swords"},
                            "Decan Effects": {"1st Decan": ["Moon"],
                                              "2nd Decan": ["Saturn", "Uranus"],
                                              "3rd Decan": ["Jupiter"]},
                            "Degree Effects": {"Mercury": [20, 24],
                                               "Venus": [7, 11],
                                               "Mars": [],
                                               "Jupiter": [12, 19],
                                               "Saturn": [1, 6]},
                            "Ruler": "Venus",
                            "Modality": "Cardinal"},
                  "Scorpio": {"Major Tarot Card": "Death",
                              "Minor Tarot Cards": {"1st Decan": "5 of Cups",
                                                    "2nd Decan": "6 of Cups",
                                                    "3rd Decan": "7 of Cups"},
                              "Decan Effects": {"1st Decan": ["Pluto"],
                                                "2nd Decan": ["Neptune", "Sun"],
                                                "3rd Decan": ["Venus"]},
                              "Degree Effects": {"Mercury": [22, 27],
                                                 "Venus": [15, 21],
                                                 "Mars": [1, 6],
                                                 "Jupiter": [7, 14],
                                                 "Saturn": [28, 30]},
                              "Ruler": "Mars",
                              "Modality": "Fixed"},
                  "Sagittarius": {"Major Tarot Card": "Temperance",
                                  "Minor Tarot Cards": {"1st Decan": "8 of Wands",
                                                        "2nd Decan": "9 of Wands",
                                                        "3rd Decan": "10 of Wands"},
                                  "Decan Effects": {"1st Decan": ["Mercury"],
                                                    "2nd Decan": ["Moon"],
                                                    "3rd Decan": ["Saturn"]},
                                  "Degree Effects": {"Mercury": [15, 20],
                                                     "Venus": [9, 14],
                                                     "Mars": [],
                                                     "Jupiter": [1, 8],
                                                     "Saturn": [21, 25]},
                                  "Ruler": "Jupiter",
                                  "Modality": "Mutable"},
                  "Capricorn":  {"Major Tarot Card": "The Devil",
                                 "Minor Tarot Cards": {"1st Decan": "2 of Pentacles",
                                                       "2nd Decan": "3 of Pentacles",
                                                       "3rd Decan": "4 of Pentacles"},
                                 "Decan Effects": {"1st Decan": ["Jupiter"],
                                                   "2nd Decan": [],
                                                   "3rd Decan": ["Sun"]},
                                 "Degree Effects": {"Mercury": [7, 12],
                                                   "Venus": [1, 6],
                                                   "Mars": [],
                                                   "Jupiter": [13, 19],
                                                   "Saturn": [26, 30]},
                                 "Ruler": "Saturn",
                                 "Modality": "Cardinal"},
                  "Aquarius":  {"Major Tarot Card": "The Star",
                                "Minor Tarot Cards": {"1st Decan": "5 of Swords",
                                                      "2nd Decan": "6 of Swords",
                                                      "3rd Decan": "7 of Swords"},
                                "Decan Effects": {"1st Decan": ["Uranus"],
                                                  "2nd Decan": ["Mercury"],
                                                  "3rd Decan": ["Moon"]},
                                "Degree Effects": {"Mercury": [],
                                                   "Venus": [13, 20],
                                                   "Mars": [26, 30],
                                                   "Jupiter": [21, 25],
                                                   "Saturn": [1, 6]},
                                "Ruler": "Saturn",
                                "Modality": "Fixed"},
                  "Pisces":  {"Major Tarot Card": "The Moon",
                              "Minor Tarot Cards": {"1st Decan": "8 of Cups",
                                                    "2nd Decan": "9 of Cups",
                                                    "3rd Decan": "10 of Cups"},
                              "Decan Effects": {"1st Decan": ["Saturn", "Neptune", "Venus"],
                                                "2nd Decan": ["Jupiter"],
                                                "3rd Decan": ["Pisces", "Mars"]},
                              "Degree Effects": {"Mercury": [15, 20],
                                                 "Venus": [1, 8],
                                                 "Mars": [21, 26],
                                                 "Jupiter": [9, 14],
                                                 "Saturn": [27, 30]},
                              "Ruler": "Jupiter",
                              "Modality": "Mutable"}};



function createElementObject () {
    var elementObject = new Object();
    elementObject['Fire'] = 0;
    elementObject['Water'] = 0;
    elementObject['Air'] = 0;
    elementObject['Earth'] = 0;
    return(elementObject);
}

function combineElementObjects (element_object_1, element_object_2) {
    var combined_object = createElementObject();
    combined_object['Fire'] = element_object_1['Fire'] + element_object_2['Fire'];
    combined_object['Water'] = element_object_1['Water'] + element_object_2['Water'];
    combined_object['Air'] = element_object_1['Air'] + element_object_2['Air'];
    combined_object['Earth'] = element_object_1['Earth'] + element_object_2['Earth'];
    return(combined_object);
}

function getAbsoluteElementValue(element_object) {
    var absolute_value = 0;
    absolute_value += element_object['Fire'];
    absolute_value += element_object['Water'];
    absolute_value += element_object['Air'];
    absolute_value += element_object['Earth'];
    return(absolute_value);
}

async function alchemize(astrologyInfo) {
    const metadata = new Object();
    metadata.name = "Alchm NFT";
    metadata.description = "Alchm is unlike any other NFT collection on Earth. Just like people, no two Alchm NFTs are the same, and there is no limit on how many can exist. Your Alchm NFT has no random features, and is completely customized and unique to you. By minting, you gain permanent access to limitless information about your astrology and identity through our sites and apps.";
    metadata.attributes = [];
    var alchmInfo = {'Major Arcana': {'Sun': "",
                                      'Rising': ""}, 
                     'Minor Arcana': {},
                     'Alchemy Effects': {},
                     'Chart Ruler': '',
                     'Total Dignity Effect': createElementObject(),
                     'Total Decan Effect': createElementObject(),
                     'Total Degree Effect': createElementObject(),
                     'Total Aspect Effect': createElementObject(),
                     'Total Placement Effect': createElementObject(),
                     'Total Effect Value': createElementObject(),
                     '# Cardinal': 0,
                     '# Fixed': 0,
                     '# Mutable': 0,
                     '% Cardinal': 0,
                     '% Fixed': 0,
                     '% Mutable': 0,
                     'Signs': {
                        "Aries": {},
                        "Taurus": {},
                        "Gemini": {},
                        "Cancer": {},
                        "Leo": {},
                        "Virgo": {},
                        "Libra": {},
                        "Scorpio": {},
                        "Sagittarius": {},
                        "Capricorn": {},
                        "Aquarius": {},
                        "Pisces": {}},
                     'Planets': {
                        "Sun": {},
                        "Moon": {},
                        "Mercury": {},
                        "Venus": {},
                        "Mars": {},
                        "Jupiter": {},
                        "Saturn": {},
                        "Uranus": {},
                        "Neptune": {},
                        "Pluto": {},
                        "Ascendant": {}}
                     };
    //use other properties from horoscope besides .CelestialBodies like .Ascendant or .Aspects
    var planet, sign, house;
    var entry, trait_type, value;
    var sun_sign;
    var rising_sign = astrologyInfo.Ascendant['label'];
    alchmInfo['Major Arcana']['Rising'] = signInfo[rising_sign]['Major Tarot Card'];
    var astrologyInfoIndex = 0;
    while (astrologyInfoIndex < 11) {
        if (astrologyInfoIndex === 10) {
            //!!!!!!! use other endings to horoscope like .Ascendant and .Aspects
            entry = astrologyInfo.Ascendant 
        } else {
            entry = astrologyInfo['all'][astrologyInfoIndex];
        }
        planet = entry['label'];
        alchmInfo['Planets'][planet]['Total Effect'] = createElementObject();

        //Sign
        sign = entry['Sign']['label'];
        alchmInfo['Planets'][planet]["Sign"] = sign;
        if (planet === 'Sun') {
            trait_type = '"Sign" (Sun Sign)';
            sun_sign = sign;
            alchmInfo['Major Arcana']['Sun'] = signInfo[sun_sign]['Major Tarot Card'];
            alchmInfo['Chart Ruler'] = signInfo[sun_sign]['Ruler'];
            //metadata.image = imageDict[sign];
        } else {
            trait_type = planet + " Sign";
        }
        value = sign;
        metadata.attributes.push({"trait_type": trait_type, "value": value});


        //House
        house = entry['House']['label'];
        alchmInfo['Planets'][planet]["House"] = house;
        trait_type = planet + " House";
        value = house;
        metadata.attributes.push({"trait_type": trait_type, "value": value});


        //Modality
        const modality = signInfo[sign]['Modality']
        alchmInfo['Planets'][planet]['Sign Modality'] = modality;
        alchmInfo['# ' + modality] += 1;
        

        //Dignity Effect
        var dignity_effect = createElementObject();
        const dignity_effect_value = planetInfo[planet]["Dignity Effect"][sign];
        if (dignity_effect_value) {
            if (Math.abs(dignity_effect_value) === 1 || Math.abs(dignity_effect_value) === 3) {
                dignity_effect[signInfo[sign]['Element']] = 1 * (dignity_effect_value / Math.abs(dignity_effect_value));
            }
            if (Math.abs(dignity_effect_value) > 1) {
                var planet_element_index = 0;
                const planet_elements = planetInfo[planet]['Elements'];
                while (planet_element_index < planet_elements.length) {
                    dignity_effect[planet_elements[planet_element_index]] += (1 * (dignity_effect_value / Math.abs(dignity_effect_value)));
                    planet_element_index += 1;
                }
            }
        }
        alchmInfo['Planets'][planet]['Dignity Effect'] = dignity_effect;
        alchmInfo['Planets'][planet]['Total Effect'].combineElementObjects(alchmInfo['Planets'][planet]['Total Effect'], dignity_effect);
        alchmInfo['Total Dignity Effect'] = combineElementObjects(alchmInfo['Total Dignity Effect'], dignity_effect);


        //Degree & Decan Calculation
        const degree = astrologyInfo[planet.toLowerCase()]['ChartPosition']['Horizon']['ArcDegreesFormatted30'].split('°')[0];
        var decan_value, decan_string;
        if (degree.length === 1) {
            decan_value = 1;
            decan_string = "1st Decan";
        } else {
            decan_value = Number(degree[0]) + 1;
            if (decan_value > 3) {
                decan_value = 3;
            }
            if (decan_value === 2) {
                decan_string = "2nd Decan";
            } else {
                decan_string = "3rd Decan";
            }
        }
        alchmInfo[planet]['Degree'] = degree;
        alchmInfo[planet]['Decan'] = decan_string;


        //Minor Arcana
        if (sign === sun_sign) {
            const minorArcana = signInfo[sun_sign]['Minor Tarot Cards'][decan_string];
            alchmInfo['Minor Arcana'] = minorArcana;
            console.log("Minor Arcana: ", minorArcana);
        }


        //Decan Specific Placement Effect
        decan_effect = createElementObject();
        planet_index = 0;
        while (planet_index < signInfo[sign]['Decan Effects'].length) {
            if (planet === signInfo[sign]['Decan Effects'][decan_string][planet_index]) {
                decan_effect[signInfo[sign]['Element']] += 1;
            }
            planet_index += 1;
        }
        alchmInfo['Planets'][planet]['Decan Effect'] = decan_effect;
        alchmInfo['Planets'][planet]['Total Effect'].combineElementObjects(alchmInfo['Planets'][planet]['Total Effect'], decan_effect);
        alchmInfo['Total Decan Effect'] = combineElementObjects(alchmInfo['Total Decan Effect'], decan_effect);


        //Degree Specific Placement Effect
        var degree_effect = createElementObject();
        if (signInfo[sign]['Degree Effects'][planet]) {
            degree_minimum = signInfo[sign]['Degree Effects'][planet][0];
            degree_maximum = signInfo[sign]['Degree Effects'][planet][1];
            if (degree >= degree_minimum && degree < degree_maximum) {
                degree_effect[signInfo[sign]['Element']] += 1;
            }
        }
        alchmInfo['Planets'][planet]['Degree Effect'] = degree_effect;
        alchmInfo['Planets'][planet]['Total Effect'].combineElementObjects(alchmInfo['Planets'][planet]['Total Effect'], degree_effect);
        alchmInfo['Total Degree Effect'] = combineElementObjects(alchmInfo['Total Degree Effect'], degree_effect);
        

        //Placement Effect
        var placement_effect = createElementObject();
        var placement_effect_value = 0;
        planet_element_index = 0;
        while (planet_element_index < planetInfo[planet]['Elements'].length) {
            if (planetInfo[planet]['Elements'][planet_element_index] === signInfo[sign]['Element'] && placement_effect_value === 0) {
                placement_effect[signInfo[sign]['Element']] += 1;
                placement_effect_value = 1;
            }
        }
        if (placement_effect_value === 0) {
            placement_effect[signInfo[sign]['Element']] -= 1;
            placement_effect_value = -1;
        }
        alchmInfo['Planets'][planet]['Placement Effect'] = placement_effect;
        alchmInfo['Planets'][planet]['Total Effect'].combineElementObjects(alchmInfo['Planets'][planet]['Total Effect'], placement_effect);
        alchmInfo['Total Placement Effect'] = combineElementObjects(alchmInfo['Total Placement Effect'], placement_effect);


        //Diurnal and Nocturnal Elements
        alchmInfo['Planets'][planet]['Diurnal Element'] = signInfo['Element'] + ' in ' + planetInfo[planet]['Diurnal Base Element'];
        alchmInfo['Planets'][planet]['Nocturnal Element'] = signInfo['Element'] + ' in ' + planetInfo[planet]['Nocturnal Base Element'];


        //Alchemy Values
        //always last
        var total_effect_multiplier = getAbsoluteElementValue(alchmInfo['Planets'][planet]['Total Effect']);
        alchmInfo[planet]['Total Effect Multiplier'] = total_effect_multiplier;
        var alchemy_values = planetInfo[planet]['Alchemy'];
        if (alchemy_values['Spirit']) {
            alchemy_values['Spirit'] *= total_effect_multiplier;
            alchmInfo['Alchemy Effects']['Total Spirit'] += total_effect_multiplier;
            alchemy_values['Day Alchemy'] = {'Spirit': total_effect_multiplier}
        }
        if (alchemy_values['Essence']) {
            alchemy_values['Essence'] *= total_effect_multiplier;
            alchmInfo['Alchemy Effects']['Total Essence'] += total_effect_multiplier;
            if (alchemy_values['Spirit']) {
                alchemy_values['Night Alchemy'] = {'Essence': total_effect_multiplier}
                alchmInfo['Alchemy Effects']['Total Night Essence'] += total_effect_multiplier;
            } else {
                alchemy_values['Day Alchemy'] = {'Essence': total_effect_multiplier}
                alchmInfo['Alchemy Effects']['Total Day Essence'] += total_effect_multiplier;
            }
        }
        if (alchemy_values['Matter']) {
            alchemy_values['Matter'] *= total_effect_multiplier;
            alchmInfo['Alchemy Effects']['Total Matter'] += total_effect_multiplier;
            alchemy_values['Night Alchemy'] = {'Matter': total_effect_multiplier}
        }
        if (alchemy_values['Substance']) {
            alchemy_values['Substance'] *= total_effect_multiplier;
            alchmInfo['Alchemy Effects']['Total Substance'] += total_effect_multiplier;
            alchemy_values['Night Alchemy'] = {'Substance': total_effect_multiplier}
        }
        alchmInfo[planet]['Alchemy Effects'] = alchemy_values;


        astrologyInfoIndex+=1;
    }
    

    
    //*** Move this into astrologyInfoLoop
    

    //Aspect
    //Square (90 degrees), Trine (120 degrees), Opposition (180 degrees) & Conjunction (same sign)
    //code that adds planets to respective lists using astrologyInfo
    //use horoscope.Aspects!!!!!!!!!!!!!! or .Ascendant
    alchmInfo['Planets'][planet]['Aspect Effects']['Total'] = createElementObject();
    var conjunction_effect = createElementObject();
    var conjunction_list = [planet];
    conjunction_list.push(conjunction_planet);
    alchmInfo['Planets'][planet]['Aspect Effects']['Conjunction'][conjunction_planet] = conjunction_effect;
    alchmInfo['Planets'][planet]['Aspect Effects']['Total'] = combineElementObjects(alchmInfo['Planets'][planet]['Aspect Effects']['Total'], conjunction_effect);
    if (conjunction_list.lenght > 0) {
        alchmInfo['Conjunctions'].push(conjunction_list);
    };
    alchmInfo['Squares'].push(square_list);
    alchmInfo['Trines'].push(trine_list);
    alchmInfo['Oppositions'].push(opposition_list);
    alchmInfo['Total Aspect Effect'] += conjunction_effect; //sum of all aspect effects



    

    

    

    
    // --- after loop ---

    //Totals
    alchmInfo['Total Effect Value'] = combineElementObjects(alchmInfo['Total Dignity Effect'], alchmInfo['Total Effect Value']);
    alchmInfo['Total Effect Value'] = combineElementObjects(alchmInfo['Total Decan Effect'], alchmInfo['Total Effect Value']);
    alchmInfo['Total Effect Value'] = combineElementObjects(alchmInfo['Total Degree Effect'], alchmInfo['Total Effect Value']);
    alchmInfo['Total Effect Value'] = combineElementObjects(alchmInfo['Total Aspect Effect'], alchmInfo['Total Effect Value']);
    alchmInfo['Total Effect Value'] = combineElementObjects(alchmInfo['Total Placement Effect'], alchmInfo['Total Effect Value']);
    console.log('Total Effect Value: ', alchmInfo['Total Effect Value'])

    alchmInfo['Total Chart Absolute Effect'] = getAbsoluteElementValue(alchmInfo['Total Effect Value']); //sum of Total Effect Multipliers regardless of element

    alchmInfo['Alchemy Effects']['A #'] = alchmInfo['Alchemy Effects']['Total Spirit'] + alchmInfo['Alchemy Effects']['Total Essence'] + alchmInfo['Alchemy Effects']['Total Matter'] + alchmInfo['Alchemy Effects']['Total Substance'];

    
    //Modality Percentages    
    alchmInfo['% Cardinal'] = alchmInfo['# Cardinal'] / 11;
    alchmInfo['% Fixed'] = alchmInfo['# Fixed'] / 11;
    alchmInfo['% Mutable'] = alchmInfo['# Mutable'] / 11;


    //Heat, Entropy & Reactivity
    const fire = alchmInfo['Total Effect Value']['Fire'];
    const water = alchmInfo['Total Effect Value']['Water'];
    const air = alchmInfo['Total Effect Value']['Air'];
    const earth = alchmInfo['Total Effect Value']['Earth'];
    const spirit = alchmInfo['Alchemy Effects']['Total Spirit'];
    const essence = alchmInfo['Alchemy Effects']['Total Essence'];
    const matter = alchmInfo['Alchemy Effects']['Total Matter'];
    const substance = alchmInfo['Alchemy Effects']['Total Substance'];

    alchmInfo['Heat'] = (spirit^2 + fire^2) / (substance + essence + matter + water + air + earth)^2;
    alchmInfo['Entropy'] = (spirit^2 + substance^2 + fire^2 + air^2) / (essence + matter + earth + water)^2;
    alchmInfo['Reactivity'] = (spirit^2 + substance^2 + essence^2 + fire^2 + air^2 + water^2) / (matter + earth)^2



    //***Stellium stuff


    console.log(alchmInfo);


    
}