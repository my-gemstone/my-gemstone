/* Crystal Journal: 41 extra library crystals. Loads after the main script. */
(function(){
var R=[
'Blue apatite|Phosphate|blue|Focus,Calm|Clear thinking and steady motivation.|Sodalite,Clear quartz|Throat|5|Smoke or moonlight|Mineral,Phosphate|Vitreous|White|Ca5(PO4)3(F,Cl,OH)|blue',
'Azurite|Copper carbonate|blue|Focus,Calm|Deep insight and a quiet, curious mind.|Lapis lazuli,Malachite|Third eye|3.5 to 4|Smoke or moonlight; avoid water|Mineral,Copper carbonate|Vitreous|Light blue|Cu3(CO3)2(OH)2|blue',
'Chrysocolla|Silicate|blue|Calm,Healing|Gentle calm for speech and emotions.|Blue lace agate,Amazonite|Throat, Heart|2 to 4|Smoke or moonlight; avoid water|Mineral,Silicate|Vitreous to waxy|Light blue|Copper silicate|blue,green',
'Chrysoprase|Chalcedony|green|Love,Healing|Light-hearted joy and emotional renewal.|Green aventurine,Rose quartz|Heart|6.5 to 7|Water or moonlight|Gem,Chalcedony variety|Waxy|White|SiO2|green',
'Dumortierite|Silicate|blue|Calm,Focus|Patience and orderly thinking.|Sodalite,Lapis lazuli|Throat, Third eye|7|Smoke or moonlight|Mineral,Silicate|Vitreous|White|Aluminum borosilicate|blue,purple',
'Hemimorphite|Silicate|blue|Calm,Healing|Soft, cooling calm and optimism.|Larimar,Celestite|Throat|4.5 to 5|Moonlight; avoid water|Mineral,Silicate|Vitreous|White|Zn4Si2O7(OH)2·H2O|blue,white',
'Variscite|Phosphate|green|Calm,Healing|Peaceful renewal and ease with change.|Prehnite,Green aventurine|Heart|3.5 to 4.5|Moonlight; avoid water|Mineral,Phosphate|Waxy|White|AlPO4·2H2O|green',
'Serpentine|Silicate|green|Calm,Healing|Slow, steady grounding and renewal.|Moss agate,Green aventurine|Heart|2.5 to 5|Smoke or moonlight|Mineral,Silicate|Waxy to silky|White|Mg3Si2O5(OH)4|green',
'Fuchsite|Mica|green|Healing,Abundance|Gentle growth with a green sparkle.|Green aventurine,Moss agate|Heart|2 to 3|Smoke or moonlight; avoid water|Mineral,Mica|Pearly|White|Chromium mica|green',
'Epidote|Epidote|green|Healing,Abundance|Hope and quiet energy.|Unakite,Green aventurine|Heart|6 to 7|Smoke or moonlight|Mineral,Silicate|Vitreous|Grey|Ca2(Al,Fe)3(SiO4)3(OH)|green',
'Seraphinite|Chlorite|green|Healing,Calm|Soft, angelic calm and renewal.|Selenite,Prehnite|Heart|2 to 2.5|Moonlight or smoke; avoid water|Mineral,Chlorite|Silky|Green|Clinochlore|green',
'Green apatite|Phosphate|green|Healing,Focus|Fresh motivation and clear intentions.|Green aventurine,Blue apatite|Heart|5|Smoke or moonlight|Mineral,Phosphate|Vitreous|White|Ca5(PO4)3(F,Cl,OH)|green',
'Blue calcite|Carbonate|blue|Calm,Sleep|Cool, peaceful calm for rest.|Celestite,Angelite|Throat|3|Smoke or moonlight; avoid water|Mineral,Carbonate|Vitreous|White|CaCO3|blue',
'Ocean jasper|Jasper|green|Calm,Healing|Gentle joy and ease; a soft mood-lifter.|Moss agate,Aquamarine|Heart|6.5 to 7|Water or moonlight|Mineral,Quartz variety|Waxy|White|SiO2|green,white,brown',
'Strawberry quartz|Quartz|pink|Love,Healing|Warm affection and gentle joy.|Rose quartz,Clear quartz|Heart|7|Moonlight or smoke|Gem,Quartz variety|Vitreous|White|SiO2|pink,red',
'Rubellite|Tourmaline|pink|Love,Courage|Vibrant heart energy and warmth.|Rose quartz,Garnet|Heart|7 to 7.5|Smoke or moonlight|Gem,Tourmaline|Vitreous|White|Complex borosilicate|pink,red',
'Watermelon tourmaline|Tourmaline|pink|Love,Healing|Balance of heart and calm.|Rose quartz,Green aventurine|Heart|7 to 7.5|Smoke or moonlight|Gem,Tourmaline|Vitreous|White|Complex borosilicate|pink,green',
'Orange calcite|Carbonate|orange|Abundance,Courage|Bright creativity and cheer.|Carnelian,Citrine|Sacral|3|Smoke or sunlight; avoid water|Mineral,Carbonate|Vitreous|White|CaCO3|orange',
'Fire agate|Chalcedony|orange|Courage,Protection|Warm, shimmering confidence. Often imitated; buy from a trusted seller.|Carnelian,Red jasper|Root, Sacral|6.5 to 7|Water or smoke|Gem,Chalcedony variety|Waxy|White|SiO2|brown,orange,red',
'Mookaite|Jasper|red|Courage,Protection|Steady, earthy stamina and calm.|Red jasper,Yellow jasper|Root|6.5 to 7|Water or smoke|Mineral,Quartz variety|Waxy|White|SiO2|red,yellow,brown',
'Spinel|Spinel|red|Courage,Healing|Renewed energy after hard times.|Garnet,Ruby|Root, Heart|7.5 to 8|Water or moonlight|Gem,Spinel|Vitreous|White|MgAl2O4|red,pink',
'Pink opal|Hydrated silica|pink|Love,Calm|Soft, soothing heart calm.|Rose quartz,Rhodonite|Heart|5.5 to 6.5|Smoke or moonlight; avoid heat|Gem,Hydrated silica|Waxy|White|SiO2·nH2O|pink',
'Cherry quartz|Quartz|red|Love,Courage|Playful warmth and spark. Usually glass or dyed quartz.|Rose quartz,Carnelian|Heart|5 to 7|Smoke or moonlight|Gem,Quartz variety|Vitreous|White|SiO2|red,pink',
'Lemon quartz|Quartz|yellow|Focus,Abundance|Sunny clarity and a light mind.|Citrine,Clear quartz|Solar plexus|7|Smoke or moonlight|Gem,Quartz variety|Vitreous|White|SiO2|yellow',
'Topaz|Topaz|yellow|Abundance,Focus|Warm confidence and clear goals.|Citrine,Sunstone|Solar plexus|8|Water or moonlight|Gem,Topaz|Vitreous|White|Al2SiO4(F,OH)2|yellow,orange,blue',
'Golden calcite|Carbonate|yellow|Abundance,Calm|Warm, soothing optimism.|Citrine,Amber|Solar plexus|3|Smoke or sunlight; avoid water|Mineral,Carbonate|Vitreous|White|CaCO3|yellow',
'Petrified wood|Quartz|brown|Protection,Calm|Slow strength and deep roots.|Smoky quartz,Banded agate|Root|6.5 to 7|Water or earth|Gem,Fossil quartz|Waxy|White|SiO2|brown,grey',
'Picture jasper|Jasper|brown|Calm,Protection|Landscape calm and grounding.|Banded agate,Moss agate|Root|6.5 to 7|Water or earth|Mineral,Quartz variety|Waxy|White|SiO2|brown,yellow',
'Dalmatian jasper|Jasper|white|Calm,Courage|Playful, grounded joy.|Smoky quartz,Banded agate|Root|6.5 to 7|Water or earth|Mineral,Quartz variety|Waxy|White|SiO2|white,black,brown',
'Leopardskin jasper|Jasper|orange|Calm,Courage|Steady inner strength.|Red jasper,Tiger\u2019s eye|Root|6.5 to 7|Water or earth|Mineral,Quartz variety|Waxy|White|SiO2|orange,brown,black',
'Septarian|Carbonate|brown|Calm,Protection|Patience and gentle grounding.|Banded agate,Smoky quartz|Root, Solar plexus|3.5 to 5|Smoke or earth; avoid water|Rock,Concretion|Waxy|White|Calcite and aragonite|brown,yellow',
'Rainbow obsidian|Volcanic glass|black|Protection,Healing|Protective, with a colorful inner sheen.|Obsidian,Labradorite|Root|5 to 5.5|Smoke or earth|Rock,Volcanic glass|Vitreous|White|Mostly SiO2|black,purple,green',
'Mahogany obsidian|Volcanic glass|brown|Protection,Courage|Grounded strength and release.|Obsidian,Red jasper|Root|5 to 5.5|Smoke or earth|Rock,Volcanic glass|Vitreous|White|Mostly SiO2|brown,black',
'Nuummite|Amphibole|black|Protection,Focus|Deep, grounded insight.|Labradorite,Black tourmaline|Root, Third eye|5.5 to 6|Smoke or moonlight|Rock,Amphibole|Metallic|Grey|Amphibole mix|black,orange,blue',
'Pietersite|Quartz|brown|Courage,Focus|Bold change and a clear vision.|Tiger\u2019s eye,Labradorite|Throat, Third eye|6.5 to 7|Smoke or moonlight|Gem,Quartz variety|Silky|White|SiO2|brown,blue',
'Lava stone|Volcanic rock|black|Calm,Protection|Earthy grounding; often used with scents.|Black tourmaline,Obsidian|Root|2 to 3|Smoke or earth|Rock,Volcanic rock|Dull|Grey|Basalt|black,grey',
'Magnetite|Iron oxide|black|Protection,Focus|Strong grounding and focus.|Hematite,Black tourmaline|Root|5.5 to 6.5|Smoke or earth; avoid water|Mineral,Iron oxide|Metallic|Black|Fe3O4|black,grey',
'Herkimer diamond|Quartz|white|Focus,Healing|Sparkling clarity and calm.|Clear quartz,Amethyst|Crown, Third eye|7|Water, smoke or moonlight|Gem,Quartz variety|Vitreous|White|SiO2|white',
'Phantom quartz|Quartz|white|Focus,Healing|Layers of growth and patience.|Clear quartz,Smoky quartz|Crown|7|Water, smoke or moonlight|Gem,Quartz variety|Vitreous|White|SiO2|white,green',
'Tourmalinated quartz|Quartz|white|Protection,Focus|Clarity with a protective edge.|Clear quartz,Black tourmaline|Root, Crown|7|Smoke or moonlight|Gem,Quartz variety|Vitreous|White|SiO2|white,black',
'Moldavite|Tektite|green|Healing,Courage|Strong change and fresh starts. Often imitated; buy from a trusted seller.|Clear quartz,Labradorite|Heart, Crown|5.5 to 6|Smoke or moonlight|Gem,Tektite glass|Vitreous|White|Natural glass|green'
];
var have={};LB.forEach(function(x){have[x.name.toLowerCase()]=1});
R.forEach(function(l){var a=l.split('|');if(have[a[0].toLowerCase()])return;
LB.push({name:a[0],type:a[1],color:a[2],intents:a[3].split(','),meaning:a[4],pairs:a[5].split(','),chakra:a[6],hardness:a[7],cleanse:a[8],tags:a[9].split(','),luster:a[10],streak:a[11],formula:a[12],colors:a[13].split(',')})});
/* French names and a few type words */
var FN={'Blue apatite':'Apatite bleue','Azurite':'Azurite','Chrysocolla':'Chrysocolle','Chrysoprase':'Chrysoprase','Dumortierite':'Dumortiérite','Hemimorphite':'Hémimorphite','Variscite':'Variscite','Serpentine':'Serpentine','Fuchsite':'Fuchsite','Epidote':'Épidote','Seraphinite':'Séraphinite','Green apatite':'Apatite verte','Blue calcite':'Calcite bleue','Ocean jasper':'Jaspe océan','Strawberry quartz':'Quartz fraise','Rubellite':'Rubellite','Watermelon tourmaline':'Tourmaline pastèque','Orange calcite':'Calcite orange','Fire agate':'Agate de feu','Mookaite':'Mookaïte','Spinel':'Spinelle','Pink opal':'Opale rose','Cherry quartz':'Quartz cerise','Lemon quartz':'Quartz citron','Topaz':'Topaze','Golden calcite':'Calcite dorée','Petrified wood':'Bois pétrifié','Picture jasper':'Jaspe paysage','Dalmatian jasper':'Jaspe dalmatien','Leopardskin jasper':'Jaspe peau de léopard','Septarian':'Septaria','Rainbow obsidian':'Obsidienne arc-en-ciel','Mahogany obsidian':'Obsidienne acajou','Nuummite':'Nuummite','Pietersite':'Pietersite','Lava stone':'Pierre de lave','Magnetite':'Magnétite','Herkimer diamond':'Diamant d\u2019Herkimer','Phantom quartz':'Quartz fantôme','Tourmalinated quartz':'Quartz tourmaliné','Moldavite':'Moldavite','Chlorite':'Chlorite','Amphibole':'Amphibole','Spinel':'Spinelle','Topaz':'Topaze','Tektite':'Tectite','Volcanic rock':'Roche volcanique','Copper silicate':'Silicate de cuivre'};
for(var k in FN)if(!Object.prototype.hasOwnProperty.call(D,k))D[k]=FN[k];
/* Wikipedia photo titles for names Wikipedia files under another title */
var W={'Blue apatite':'Apatite','Green apatite':'Apatite','Blue calcite':'Calcite','Orange calcite':'Calcite','Golden calcite':'Calcite','Ocean jasper':'Jasper','Picture jasper':'Jasper','Dalmatian jasper':'Jasper','Leopardskin jasper':'Jasper','Strawberry quartz':'Quartz','Cherry quartz':'Quartz','Lemon quartz':'Quartz','Phantom quartz':'Quartz','Tourmalinated quartz':'Quartz','Rubellite':'Tourmaline','Watermelon tourmaline':'Tourmaline','Pink opal':'Opal','Rainbow obsidian':'Obsidian','Mahogany obsidian':'Obsidian','Lava stone':'Basalt','Seraphinite':'Clinochlore','Septarian':'Septarium','Magnetite':'Magnetite','Petrified wood':'Petrified wood'};
for(var j in W)if(!WT[j])WT[j]=W[j];
if(typeof V!=='undefined'&&V==='lib')libList();
})();
