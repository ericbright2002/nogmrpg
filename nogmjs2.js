/*jslint devel: true */

//Inside a Large Structure Locations
var indoorArray = [
	'A jail cell in the dungeon seems like it can accommodate a few prisoners at a time.',
	'A wide hallway has several large doors branching off of it.',
	'An office with a desk, a map on the wall, and is that a plan laying out on the table?',
	'A medium oval room has some boxes for storage and a few chairs.',
	'The grated floor in this room has a warm breeze blowing up through it.',
	'An auditorium that can hold a moderate audience and has a grand stage on which to perform.',
	'A small oval room has a fireplace and a comfy chair.  A place for reflection perhaps?',
	'A small square room.  The perfect dungeon tile.',
	'This alchemical workshop has seen its share of wild experiments.',
	'Why is it called a sitting room?  Because nothing but chairs fill the room.',
	'An art gallery room has paintings, sculptures, and statues for the viewer\'s pleasure.',
	'A grand dome above is open to permit the telescope a view.  Astronomical observatory.  Yum.',
	'A hallway.  Yup.  Just a hallway in a building.  Nothing fancy here.',
	'A medium circular room.  How did they curve the stones so perfectly?',
	'The room has floor to ceiling book shelves.  It\'s quite an impressive library room.',
	'Your standard torture chamber.  An iron maiden, poker, and buckets of paint to watch dry.',
	'A large pantry holds assorted dried goods.',
	'This fancy bedroom is surely for the owner of this place.',
	'A circular room with a bottomless pit below.  How did they get this in a castle?',
	'The Waste Disposal Room is just a fancy term for a bathroom with muck chutes leading outside.',
	'An open air shaft leads up and looks to be an exit route from the structure for a winged beast of substantial size.',
	'An armory holds a cache of weapons both new and old.',
	'A small circular room.  Note there are no corners in this room.',
	'This shrine room looks like it\'s used for ceremonies as well as for personal reflection.',
	'A ceremonial room for the cultural traditions is amply supplied with relics.',
	'A large room with bunks and storage.  It appears to be a barracks.',
	'A beautifully carved fountain is the center piece of this room.',
	'A storage room with shelves and large crates looks like it could be part of a warehouse.',
	'A large square room.  Just a square.  Four walls of the same length set at 90 degree angles.',
	'The stables in this structure house several horses.',
	'A large oval room has small rivulets of water running along both long sides of the room.',
	'An opulent throne room with plenty of space for an audience in the balcony and floor sections.',
	'A large T-shaped room.  Perhaps the side wings are used for ceremonies?',
	'A statue stands in the middle of the room, and balconies can be accessed by twin stair cases.',
	'Chains hang regularly around this room.  Perhaps it was a meat locker at one time.',
	'This tower room is the base of a round tower and has stairs going up the rest of the way.',
	'This wizard\'s magical chamber has arcane symbols, spell books, and spell components scattered about.',
	'A great U-shaped room hides one part of the room from the other.  Are they connected somehow?',
	'Why is this well masoned room covered in 4 inch square holes on the floor?',
	'A viewing chamber allows you to see into the next room without being seen yourself.',
	'A circular room contains a well ejecting prismatic light.  What powers this and what\'s it for?',
	'A pool of steaming water stands in the middle of this bathing room.',
	'A well maintained and tastefully done crypt.',
	'A large rectangular room looks like it will eventually serve a worthy purpose.',
	'A medium rectangular room.  Probably a sitting room.  Why build something so basic?',
	'A drawbridge over a moat may seem out of place here, but it\'s an effective defense measure.',
	'This room houses only a single item: a large stone oval with shimmering light inside.  A portal?',
	'The kitchen is a bustle of activity at nearly any time of the day.',
	'A lush, open-air garden stands in the midst of this structure.  There\'s even a fish pond.',
	'A small rectangular room.  Maybe it\'s for storage or maybe it\'s just a random basic room in a castle.',
	'The dining hall is large enough to accommodate guests.  Flagons are scattered across the great table.',
	'A large circular room with pillars to support the high ceiling.  Is that an opening up there?',
	'The grand staircase room is meant to impress visitors while still getting them to the next floor.',
	'An open courtyard in this structure signifies the wealth of the builders.',
	'A narrow hallway, only 5 ft across, would make a scuffle troublesome.',
	'A hallway with a low ceiling seems to be a defensive measure in this structure.',
	'Guest quarters are cozy and more than adequate.  There\'s even a nice view out the window.',
	'This room is a guard post and checkpoint for passing into more sensitive areas of the structure.',
	'The council room has a large table with many chairs and a single row of benches around the walls.',
	'A medium square room.  Also a perfect dungeon tile.'
];

//Small Structure Locations
var cityArray = [
	'Thank goodness.  A healer\'s temple will come in handy some day.',
	'A pavilion looks to be a perfect spot for a picnic or afternoon gathering.',
	'The city wall is a point of pride for the town who takes time and care for its upkeep.',
	'The School for the Magically Talented claims to make wizards of anyone (who has the money).',
	'The local law enforcement office has a small jail cell for those frequent overnight visitors.',
	'This grain mill runs from the power of the river next to it.',
	'A military training grounds has dummies, blunted swords, and recruits a plenty.',
	'A magic store called The Magic Zone has all your wizarding needs taken care of.',
	'A pile of rocky rubble in the middle of town.  It looks like an old guard tower fell or was destroyed.',
	'The smell from this bakery is enchanting.  Hopefully there\'s some sweet bread fresh from the oven.',
	'This ruined fort has obviously seen better days.',
	'A warehouse holds many things for many different vendors.',
	'A general store!  It even looks like it\'s conveniently owned by a Ma and Pop.',
	'The proud guild hall of the such-and-such guild.',
	'This gambling establishment has recently gained in popularity.',
	'There\'s always room at this inn.  The attached bar is also nice.',
	'A shanty house could be a front for criminals or the home of a family in desperate need.',
	'This building appears to be the basic home of a resident.',
	'Every town has a town square, and this town is no exception.',
	'A religious temple stands here with acolytes coming and going.',
	'Fields of crops look to be well tended.  Perhaps there is a farmhouse nearby.',
	'This farmhouse looks well used but well loved.  A barn with horses stands next to it.',
	'A smithy.  Why is the blacksmith more respected than the armorer?  Simple: horseshoes.',
	'The fishery can be smelled all across town, but it\'s held in high esteem for the variety of fish there.',
	'Was that a school bell?  Several local kids fly out the doors of the one room schoolhouse.',
	'The weapon smith specializes in swords, but has a workspace for other weapon types as well.',
	'This narrow road shows poor planning when the town was being built.',
	'This wide road is where the heaviest traffic is.  Large carts rumble down it bore by oxen or horses.',
	'This common stable is for use by visitors to the town.  It also houses some horses for sale.',
	'The tannery always smells bad, but people do love their leather.',
	'The local bar is a hot spot for bards and bar flies.  Sample the local brew at your own risk.',
	'The barn here must belong to a local farmer.',
	'If the lady walking out of this tailor\'s shop is any indication, you might try paint by number clothes instead.',
	'A lumber mill churns out large logs for buildings and smaller pieces for furniture.',
	'A town meeting is not currently in session, but the worn benches and call to order bell appear well used in this town hall.',
	'A log cabin that could be a residence.',
	'This cemetery is for town residents.  The headstones read like a history book.',
	'There must have been a fire recently because only a shell of the former house is left here.',
	'The extravagance of the decor leads you to believe a high lord lives in this house.',
	'A small wooden fort looks to be one of the first outposts built in this place.',
	'A small shrine is more like a hut to a long forgotten deity, but a candle still burns inside.',
	'The alchemist\'s shop claims to turn lead into gold.  They demonstrate by painting rocks yellow.',
	'A small stone fort looks little better than a watch tower.',
	'The armorer\'s shop can mend dents and provides a nice selection for the price.',
	'This library contains many books of varied topics from across the world.',
	'The stone mason\'s shop can work with stone of all sizes and grains.',
	'The local butcher\'s shop offers a surprising selection of spiced meats.',
	'A windmill not only mills grain but also pumps water for the local population.',
	'The docks are busy loading up the few ships in the harbor.',
	'Ah, the darkened back alley.  You wondered where the local thieves ran to.',
	'The treasury also functions as a bank for the local population.',
	'A small hut where the local hermit lives is said to contain...well, the hermit.',
	'The granary is the main repository of food stores for the town.',
	'The Merchant\'s Association is housed in this building.  They make rules to govern fair transactions.',
	'Fire cooked sausages, exotic fruits, and even monkeys are for sale in this open air market.',
	'A museum dedicated to goat herding and its accoutrements.  The owner is so glad to see a fellow enthusiast.',
	'A half wall that has half crumbled may have been used as a defensive point at some time in history.',
	'Being a member of this gym and spa is a mark of high stature in this society.',
	'The watchtower is the perfect sentry position for this area.',
	'The courthouse is where the local brand of justice is dealt out.'
];

//Cavern Room Locations
var caveArray = [
	'Several small geysers continually pour forth water and then shoot huge blasts of water up to the ceiling.',
	'A small circular cavern.  It is dark, round, and underground.',
	'A huge circular pit has a single stone pedestal sticking up in the center.',
	'A partial cave-in blocks a previous exit from this room.  Is that something shiny in the rubble?',
	'An underground waterfall is always cool.  But where there\'s water, there\'s life.  Who\'s here?',
	'A sloped tunnel and slight increase in heat makes you hope you won\'t slip down this old lava tube.',
	'Crystals grow all around in this cavern throwing their color about randomly in your torchlight.',
	'The low ceiling in this cavern makes everyone hunch over.  Everyone except kobolds that is.',
	'The walls of this medium-sized cavern leak some kind of liquid.  Hope that it\'s just water.',
	'A staircase chiseled into the cavern wall leads high above.',
	'A stone bridge sprawls over a scary chasm.  YOU SHALL (not) PASS!',
	'A small square cavern, or at least as square as a cave forms naturally.',
	'A ceremonial room underground must be more dangerous than a ceremonial room in a castle, right?',
	'A large open cavern with many stalactites hanging from the ceiling.  Something may lurk up there.',
	'This armory holds many old and decayed weapons and armor.  There is high humidity in this cave.',
	'A crude jail cell utilizes thick stalactites and stalagmites that have grown together.',
	'A large open cavern with many stalagmites protruding from the floor.',
	'A rickety elevator going further down is little better than a bucket on a pulley.',
	'A medium-sized open cavern with a few holes in the roof letting in distant light.',
	'A small rectangular cavern room has been rough hewn from the rocks walls.',
	'A crude office has a stone table in the center of the room.',
	'A medium rectangular cavern room has been rough hewn from the rock walls.',
	'A medium circular cavern.  It is dark, round, and underground.',
	'A large circular cavern.  Just like small or medium, only large in size.',
	'The underground pit of light holds a luminescent liquid brightly shining and casting shadows.',
	'A large cavern room has medium sized holes in the ground periodically.  Will the floor hold weight?',
	'Someone definitely lives in this cave because you\'ve found the midden.  That\'s a dung and trash heap.',
	'A mine shaft in the cave?  Someone is digging deep, but why?',
	'Slick much covers the uneven, rocky ground making for difficult terrain to cross.',
	'A large rectangular cavern room has been rough hewn from the rock walls.',
	'This underground shrine has a poorly hewn symbol carved directly into the rock wall.',
	'Grooves line the floor with tiny veins of a thick liquid running through them.',
	'A small oval cavern seems to have formed from running water long ago, but water is no longer here.',
	'The underground barracks is definitely dark enough for people to sleep, but the snoring echoes.',
	'A narrow tunnel that loos like a kobold\'s favorite spot for trapping the big folk.',
	'Hot springs bubble up into little pools before running through a crack in the cavern wall.',
	'A large square cavern, but these rock walls were definitely shaped by someone or something.',
	'A bottomless pit with narrow ledges around it.  There may be handholds on the wall as well.',
	'A kitchen of sorts has an oven carved into the wall with a natural crack providing the chimney.',
	'An open air shaft seems like it could lead straight up and out of this cavern complex.',
	'The path narrows and the room opens to a chasm with a narrow ledge the only way forward.',
	'An underground river is tempting to follow unless there\'s no air after it goes under those rocks.',
	'A large stone table stands in the center of this barren cavern.  Is that a crack down the middle?',
	'The burial chamber has beds cut into rock walls for a myriad of skeletons now at rest.',
	'This tunnel is hard to traverse due to the constant wavy mini-hills that you have to scramble over.',
	'A medium oval-shaped cavern was chiseled out in a long ago mining expedition.',
	'Multiple layers exist all in the same cave here, but getting between the floors will be tough.',
	'Huge stalagmites have been hollowed out as homes for the local underground denizens.',
	'A pool of hot springs seems to come up from tiny cracks in the rocks.',
	'A torture chamber with one of its instruments being the uncomfortable bed made of lumpy rocks.',
	'A large tunnel easily fits three men across, but something has been scratching both sides simultaneously.',
	'An underground lake always has a decrepit row boat on the shore and an island in the middle.',
	'Huge stalactites have been hollowed out as homes for the local underground denizens.',
	'The smoothness of these walls can only have been made by lava.  Hopefully it\'s not still an active lava tube.',
	'A medium-sized square cavern, but these rock walls were definitely shaped by someone or something.',
	'Well, you thought you\'d seen it all, but here\'s an underground sunless mushroom farm.  Crazy.',
	'This looks like the sleeping quarters of someone.  A mat lies on the stone floor.',
	'A small storage room with crates of mushrooms, water barrels, and ale.',
	'This large room looks like a gathering place by the amount of mats, rocks, and other random seats.',
	'A maze-like cavern was formed by large wyrms tunneling back and forth in the area.'
];

//Outdoor Area Locations
var outdoorArray = [
	'A steep incline with loose rock makes it difficult to climb.  One step back for every two steps up.',
	'A steep incline of solid rock.  While footing is stable, a fight here would be awkward.',
	'The edge of this cliff snuck up on you.  It is a long drop, but maybe you could climb it.',
	'A cave entrance large enough to walk through yawns in front of you.  This is opposed to most real cave entrances that are a tiny hole in the ground.',
	'You\'ve reached the summit of the mountain.  The view is spectacular from up here.',
	'You\'ve reached the top of a rocky ridge.  You could travel across the ridge or make your way down.',
	'You\'ve reached the top of a plateau with much effort.  This is an easily defended place.',
	'Switch backs in the mountains just seem inefficient when you could climb straight up the side, but your legs will thank you later.',
	'A snowy field stretches before you.  Did something move yonder or was it just the swirling snow?',
	'The snowy woods are even harder to see in.  Large snow clumps fall from trees randomly.',
	'Large rocks protrude from the ground covered by snow.  It\'s the perfect spot for an ambush.',
	'Sand.  You just see sand.  Deserts are so lovely.  Wait!  Is that a cactus!  Nope.  Just a mirage.',
	'A giant sink hole with a glimmering pool of water far below.  Dare you dive without your goggles?',
	'A rope bridge?  That can\'t be dangerous at all, you think as it sways in the wind with some of the wooden planks hanging only by a thread.',
	'A gorge is just another name for a chasm or ravine.  A flowing river runs far below at the bottom of the gorge.',
	'Giant rocky spires twist up from the ground.  They could be climbed, but it would be tricky.',
	'Large rocks protrude from the ground blocking line of sight but providing a vantage point if you climb.',
	'A tranquil pond with willow trees may hide something sinister.  Nope, you\'re just paranoid.',
	'The tall grass on the open plains blow in the wind concealing the natural predators.',
	'A giant tree stretches far up into the sky.  Is it inhabited?  Is it natural?',
	'Strange.  Holes are randomly dug into the earth here.  They\'re bigger than a fox\'s hole.  Could it be badgers or something worse?',
	'A natural stone bridge crosses a small ravine with a river running under it.',
	'The swamp is teeming with life.  Too bad the muck is hard to walk through and smells so bad.',
	'Across the large lake, you can barely see the other side.',
	'Large standing stones beg the question of how those large, flat stones got upright in the first place.',
	'A large fallen statue lies forgotten beneath the undergrowth of the forest.',
	'A dried river bed meanders through the brush.',
	'A waterfall tumbles down hundreds of feet to a cascading pool below.',
	'A river runs swift and deep, but is that a ford up ahead?',
	'A creek runs sluggish and shallow.  A large tree has fallen across it and looks like a good place to cross.',
	'A sparsely wooded patch within the forest provides more line of sight but still gives some cover.',
	'Stairs appear to have grown up and around this giant tree.  What\'s up there?',
	'Large trees have been hollowed out.  What is inside of them?',
	'A clearing in the forest seems significant as no trees have been cut.  It\'s just a natural clearing which makes you think it may not be natural at all.',
	'A lush valley in the middle of the forest.  The densely wooded trees have given way to more exotic plant-life.',
	'This hilltop in the forest is protected by natural stone formations.',
	'Rope bridges connect treetop to treetop in this area.  It\'s either a treetop village or an elaborately built guard post in the forest.',
	'House are built or grown directly in the treetops.  You even hear the sounds of every day life filtering down through the leaves.',
	'A tight circle of trees protects the hidden grove within.  It is as if the trees were deliberately planted to be guardians of this inner, sacred circle.',
	'The trees are densely packed in these woods.  It provides excellent cover but is hard to move through.',
	'A little hut stands in the middle of the otherwise all natural terrain.  A crazy hermit probably lives here.',
	'A small stone fort stands out in this otherwise wild environment.',
	'A small wooden fort may be the only safe haven in the wilderness for miles.',
	'A log cabin in the middle of the woods with smoke coming from the chimney begs for investigation.  Who\'s home?',
	'An old windmill stands at the top of a hill in this forest.  Poor planning or did the forest encroach?',
	'A field of exotic crops rests with great trees interspersed.  If elves farmed, you\'d get this place.',
	'A homestead in the wilderness must belong to someone who wished to leave society behind.',
	'A ruined fort that nature has reclaimed has a large tree that runs up through the center of the fort.',
	'Small watch towers were scattered throughout this wilderness.  This is one of them.',
	'Rolling hills cover this area as far as the eye can see.  It looks to be good grazing land for herds of livestock.',
	'This cliff face is intimidating enough, but there appear to be dwellings carved into it as well.  Who would live in the side of a cliff?',
	'Huge stone rings jut forth from the land.  It\'s like the ribs of some colossal beast petrified here.',
	'The open field is covered only with short grass, weeds, and thorns.',
	'Flat topped, rocky spires spread across a vast chasm.  Can you jump across from spire to spire?  What happens if it\'s too windy?',
	'This area of the forest is dense with underbrush.  There are lots of places to hide here.',
	'Graveyards are creepy, but a graveyard in the middle of the wilderness?  Seriously?  That\'s extra creepy.',
	'Quicksand covers the area, but you don\'t see any animal remains within it.  What has eaten all the victims?',
	'A floating island hangs high above in the sky with roots and vines hanging down to the earth.',
	'This huge and ancient tree has been hollowed out with room enough for a whole village inside.  Who calls this home?',
	'This patch of earth has been strip-mined leaving a large, stratified, multi-layered hole in the earth.'
];

// Possible Number of Exits in a Linear Building
var linearExits = [
    'No additional exits',
    'No additional exits',
    'No additional exits',
    'No additional exits',
    '1 additional exit',
    '1 additional exit',
    '1 additional exit',
    '1 additional exit',
    '2 additional exits',
    '3 additional exits'
];

// Possible Number of Exits in a Branching Building
var branchExits = [
    'No additional exits',
    'No additional exits',
    'No additional exits',
    '1 additional exit',
    '1 additional exit',
    '1 additional exit',
    '2 additional exits',
    '2 additional exits',
    '2 additional exits',
    '3 additional exits'
];

// Possible Number of Exits in a Sprawling Building
var sprawlExits = [
    'No additional exits',
    'No additional exits',
    '1 additional exit',
    '1 additional exit',
    '2 additional exits',
    '2 additional exits',
    '3 additional exits',
    '3 additional exits'
];

// No Way Chances of Getting Yes
var nwYes = [
    'No and',
    'No and',
    'No and',
    'No and',
    'No and',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but'
];

// Very Unlikely Chances of Getting Yes
var vuYes = [
    'No and',
    'No and',
    'No and',
    'No and',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes'
];

// Unlikely Chances of Getting Yes
var unYes = [
    'No and',
    'No and',
    'No and',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes',
    'Yes',
    'Yes'
];

// Slightly Unlikely Chances of Getting Yes
var suYes = [
    'No and',
    'No and',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes'
];

// Even Odds Chances of Getting Yes
var evYes = [
    'No and',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes and'
];

// Slightly Likely Chances of Getting Yes
var slYes = [
    'No',
    'No',
    'No',
    'No',
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes and',
    'Yes and'
];

// Likely Chances of Getting Yes
var liYes = [
    'No',
    'No',
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes and',
    'Yes and',
    'Yes and'
];

// Very Likely Chances of Getting Yes
var vlYes = [
    'No',
    'No',
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes and',
    'Yes and',
    'Yes and',
    'Yes and'
];

// For Sure Chances of Getting Yes
var fsYes = [
    'No but',
    'No but',
    'Yes but',
    'Yes but',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    'Yes and',
    'Yes and',
    'Yes and',
    'Yes and',
    'Yes and'
];

// Array of Random Event Types
var reTypeArray = [
	'Positive for NPC',
	'Negative for NPC',
	'Meet New NPC',
	'Positive for 1 PC',
	'Negative for 1 PC',
	'Positive for All PCs',
	'Negative for All PCs',
	'Help Short Term Goal',
	'Hurt Short Term Goal',
	'Help Long Term Goal',
	'Hurt Long Term Goal',
	'News from Afar',
	'News from an NPC',
	'News from the Villain',
	'Setting Event',
	'You are Attacked',
	'Help Short Term Goal',
	'Hurt Short Term Goal',
	'Help Short Term Goal',
	'Hurt Short Term Goal'
];

// Array of Tension Builders
var tensionArray = [
	'Whether a whispered message in the wind, a frantic messenger, or ill-fated letter, bad news arrives from afar.',
	'Two people who should be friends suddenly have a wedge thrust between them.  Their personal feelings may impair their judgment.',
	'Someone who is normally decisive becomes skittish.  What has them on edge?',
	'The wrong person shows up at the wrong time.',
	'A grave misfortune is foreshadowed.  Will it come to pass?',
	'An important item has gone missing.',
	'An unintended consequence of a past actions comes back to haunt you.',
	'An ally leaves the party suddenly.',
	'The antagonist knows one of your weaknesses and attempts to exploit it.',
	'An ability you have always relied upon is suddenly becoming unreliable.',
	'You are offered a bribe to give up your quest.  Who is paying for the bribe?',
	'An ally betrays the cause.',
	'An odd symbol begins to show up in many places.  This can\'t be a coincidence.',
	'An ally has been captured.',
	'The weather turns nasty.',
	'An authority figure that was once trusted is revealed to be corrupt.',
	'An ally is cursed.',
	'A dark secret makes its way to light.',
	'You are faced with a choice between the lesser of two evils.',
	'The antagonist receives intel on your next move.  How did he receive the information?',
	'An old foe who you thought was defeated returns to harass you.',
	'You have found someone who probably has important information for your quest.  The catch: the language he speaks is completely unknown.',
	'You and your allies have been implicated in a crime related to the quest.',
	'An unexpected guardian is at your next objective, impeding your progress.',
	'Someone has been impersonating you and giving you a bad reputation.',
	'Innocent lives are now in danger because of your actions.',
	'You find out that the next place you need to go is considered off limits by local custom.  Going there could cause friction.',
	'A new ally appears, but they think they know best and want to take charge of your actions.',
	'It\'s a trap, and the only way to escape is to work with your adversary!',
	'You lose significant support for your cause.',
	'Someone or something is late.',
	'An ally suddenly becomes uncooperative.',
	'Misinformation leads you to an unexpected outcome.'
];

// Difficulty Array
var difficultyArray = [
    'Trivial',
    'Easy',
    'Easy',
    'Moderate',
    'Moderate',
    'Moderate',
    'Hard',
    'Hard',
    'Hard',
    'Insane'
];

// Arrays for More Details
var adjArray = [
    'Acceptable',
	'Hypocritical',
	'Militaristic',
	'Tense',
	'Lucky',
	'Achievable',
	'New',
	'Mistrusting',
	'Dominating',
	'Similar',
	'Adolescent',
	'Impressive',
	'Mundane',
	'Delaying',
	'Needed',
	'Adorable',
	'Independent',
	'Trying',
	'Worthy',
	'Proposed',
	'Angry',
	'Infatuating',
	'Massive',
	'Praising',
	'Opulent',
	'Annoying',
	'Informative',
	'Intolerant',
	'Projecting',
	'Poor',
	'Artistic',
	'Insecure',
	'Trusting',
	'Separate',
	'Hilarious',
	'Atoning',
	'Inspirational',
	'False',
	'Stolen',
	'Funny',
	'Beautiful',
	'Authentic',
	'Exciting',
	'Breaking',
	'Tortorous',
	'Believable',
	'Intelligent',
	'Victorious',
	'Possessive',
	'Empowered',
	'Family',
	'Jealous',
	'Active',
	'Healing',
	'Destructive',
	'Brave',
	'Joyful',
	'Disputed',
	'Beneficial',
	'Chaotic',
	'Brilliant',
	'Just',
	'Rich',
	'Delayed',
	'Social',
	'Charitable',
	'Kind',
	'Careless',
	'Planned',
	'Unchecked',
	'Calm',
	'Knowledgable',
	'Same',
	'Stopped',
	'Determined',
	'Childlike',
	'Lawful',
	'Negligent',
	'Expecting',
	'Defensive',
	'Comfortable',
	'Old',
	'Technical',
	'Returned',
	'Offensive',
	'Communicating',
	'Lonely',
	'Passionate',
	'Immitated',
	'Steady',
	'Compassionate',
	'Losing',
	'Magical',
	'Bureaucractic',
	'Erratic',
	'Conflicting',
	'Loving',
	'Difficult',
	'Struggling',
	'Slow',
	'Confusing',
	'Loyal',
	'Attractive',
	'Busy',
	'Quick',
	'Connecting',
	'Mature',
	'Controllable',
	'Worn',
	'Orderly',
	'Cooperating',
	'Memorable',
	'Illusionary',
	'Imminent',
	'Unchanging',
	'Courageous',
	'Miserable',
	'Portable',
	'Postponed',
	'Changing',
	'Creative',
	'Moral',
	'Dangerous',
	'Exposed',
	'Eloquent',
	'Cruel',
	'Natural',
	'Pursuing',
	'Advised',
	'Impervious',
	'Cultured',
	'Prophetic',
	'Animalistic',
	'Haggard',
	'Healthy',
	'Curious',
	'Painful',
	'Punishing',
	'Competitive',
	'Sickly',
	'Dead',
	'Patient',
	'Guiding',
	'Celebrated',
	'Adaptable',
	'Deceiving',
	'Peaceful',
	'Transforming',
	'Ill',
	'Understandable',
	'Dedicated',
	'Proper',
	'Overthrowing',
	'Developed',
	'Treasured',
	'Depressed',
	'Perseverant',
	'Famous',
	'Hungry',
	'Insightful',
	'Devoted',
	'Pleasant',
	'Oppressive',
	'Traveled',
	'Backwards',
	'Dexterous',
	'Powerful',
	'Changed',
	'Attentive',
	'Helpful',
	'Doubtful',
	'Prideful',
	'Attainable',
	'Blocked',
	'Protective',
	'Dream-like',
	'Arrogant',
	'Beginning',
	'Harmful',
	'Repaired',
	'Learned',
	'Redeeming',
	'Aggressive',
	'Debasing',
	'Obtained',
	'Egotistical',
	'Romantic',
	'Triumphant',
	'Adjourning',
	'Consulted',
	'Enthusiastic',
	'Reliable',
	'Opportunistic',
	'Murderous',
	'Documented',
	'Envious',
	'Vengeful',
	'Authoratative',
	'Experienced',
	'Improved',
	'Eternal',
	'Sad',
	'Allied',
	'Disruptive',
	'Led',
	'Exhausted',
	'Sane',
	'Adversarial',
	'Suffering',
	'Negotiated',
	'Failed',
	'Self-respecting',
	'Evil',
	'Wishful',
	'Performed',
	'Fair',
	'Sensitive',
	'Good',
	'Tactical',
	'Demonstrative',
	'Faithful',
	'Shameful',
	'Persecuting',
	'Betraying',
	'Expanded',
	'Frightening',
	'Organized',
	'Increasing',
	'Agreeable',
	'Reduced',
	'Emotional',
	'Skillfull',
	'Decreasing',
	'Mental',
	'Honorable',
	'Free',
	'Sorrowfull',
	'War-like',
	'Abusive',
	'Excellent',
	'Friendly',
	'Strict',
	'Abandoned',
	'Unfortunate',
	'Rewarding',
	'Frustrated',
	'Submissive',
	'Innocent',
	'Found',
	'Coordinating',
	'Thankful',
	'Successful',
	'Inquiring',
	'Burdensome',
	'Justified',
	'Grief-stricken',
	'Sympathetic',
	'Antagonising',
	'Attached',
	'Hesitant',
	'Growing',
	'Talented',
	'Spiritual',
	'Intriguing',
	'Influential',
	'Happy',
	'Thoughtful',
	'Moving',
	'Open',
	'Experimental',
	'Hateful',
	'Thrilling',
	'Wasteful',
	'Closed',
	'Tired',
	'Heroic',
	'True',
	'Releasing',
	'Rumored',
	'Combative',
	'Honest',
	'Wise',
	'Energetic',
	'Ruinous',
	'Identifying',
	'Hopeful',
	'Anxious',
	'Judging',
	'Wounded',
	'Solved',
	'Humble',
	'Divisive',
	'Balanced',
	'Extravagant',
	'Simulated',
	'Timely',
	'Refused',
	'Deserted',
	'Tricky',
	'Clear'
];

var nounArray = [
    'Humor',
	'Refusal',
	'Desertion',
	'Trick',
	'Clarity',
	'Acceptance',
	'Hyposcrisy',
	'Military',
	'Tension',
	'Luck',
	'Achievement',
	'Idea',
	'Mistrust',
	'Domination',
	'Representative',
	'Adolescence',
	'Impression',
	'Boredom',
	'Pause',
	'Arrival',
	'Adoration',
	'Independence',
	'Trials',
	'Worth',
	'Proposal',
	'Anger',
	'Infatuation',
	'Masses',
	'Praise',
	'Opulence',
	'Annoyance',
	'Information',
	'Intolerance',
	'Influence',
	'Poverty',
	'Artistry',
	'Insecurity',
	'Trust',
	'Separation',
	'Frivolity',
	'Atonement',
	'Inspiration',
	'Lies',
	'Exploration',
	'Experiment',
	'Beauty',
	'Integrity',
	'Excitement',
	'Break',
	'Resolution',
	'Belief',
	'Intelligence',
	'Victory',
	'Possessions',
	'Justification',
	'Belonging',
	'Jealousy',
	'Activity',
	'Heal',
	'Destruction',
	'Bravery',
	'Joy',
	'Dispute',
	'Benefit',
	'Chaos',
	'Brilliance',
	'Justice',
	'Riches',
	'Delay',
	'Society',
	'Charity',
	'Kindness',
	'Carelessness',
	'Plan',
	'Relationship',
	'Calm',
	'Knowledge',
	'Status quo',
	'Ending',
	'Progress',
	'Childhood',
	'Law',
	'Neglect',
	'Expectations',
	'Determination',
	'Comfort',
	'Liberty',
	'Technology',
	'Return',
	'Offense',
	'Communication',
	'Loneliness',
	'Passion',
	'Immitation',
	'Defense',
	'Compassion',
	'Loss',
	'Magic',
	'Bureaucracy',
	'Action',
	'Conflict',
	'Love',
	'Hard work',
	'Struggle',
	'Authority',
	'Confusion',
	'Loyalty',
	'Attraction',
	'Business',
	'Obstacle',
	'Connection',
	'Maturity',
	'Control',
	'Path',
	'Order',
	'Cooperation',
	'Memory',
	'Illusions',
	'News',
	'Disorder',
	'Courage',
	'Misery',
	'Portals',
	'Factor',
	'Discord',
	'Creativity',
	'Morality',
	'Danger',
	'Exposition',
	'Speech',
	'Cruelty',
	'Nature',
	'Pursuit',
	'Advice',
	'Wealth',
	'Culture',
	'Omen',
	'Animals',
	'Plot',
	'Health',
	'Curiosity',
	'Pain',
	'Punishment',
	'Competition',
	'Disease',
	'Death',
	'Patience',
	'Guide',
	'Celebration',
	'Adaptation',
	'Deceit',
	'Peace',
	'Transformation',
	'Illness',
	'Understanding',
	'Dedication',
	'Penance',
	'Coup',
	'Development',
	'Treasure',
	'Depression',
	'Perseverance',
	'Fame',
	'Food',
	'Insight',
	'Devotion',
	'Pleasure',
	'Oppression',
	'Travel',
	'Regression',
	'Dexterity',
	'Power',
	'Change',
	'Attention',
	'Assistance',
	'Doubt',
	'Pride',
	'Goals',
	'Blockade',
	'Protection',
	'Dreams',
	'Principle',
	'Beginning',
	'Harm',
	'Abolishment',
	'Education',
	'Redemption',
	'Fight',
	'Debasement',
	'Finish',
	'Ego',
	'Romance',
	'Triumph',
	'Opportunity',
	'Consultation',
	'Enthusiasm',
	'Reliance',
	'Reality',
	'Murder',
	'Document',
	'Envy',
	'Revenge',
	'Violation',
	'Investment',
	'Improvement',
	'Eternity',
	'Sadness',
	'Allies',
	'Disruption',
	'Leader',
	'Exhaustion',
	'Sanity',
	'Enemy',
	'Torture',
	'Negotiation',
	'Failure',
	'Self-respect',
	'Evil',
	'Wish',
	'Performance',
	'Fairness',
	'Sensitvity',
	'Good',
	'Tactic',
	'Demonstration',
	'Faith',
	'Shame',
	'Persecution',
	'Betrayal',
	'Expansion',
	'Fear',
	'Organization',
	'Increase',
	'Agreement',
	'Reduction',
	'Feelings',
	'Skill',
	'Decrease',
	'Privilege',
	'Honor',
	'Freedom',
	'Sorrow',
	'War',
	'Abuse',
	'Excellence',
	'Friendship',
	'Strictness',
	'Abandon',
	'Misfortune',
	'Reward',
	'Frustration',
	'Submission',
	'Innocence',
	'Investigation',
	'Coordination',
	'Gratitude',
	'Success',
	'Inquiry',
	'Burden',
	'Escape',
	'Grief',
	'Sympathy',
	'Mind',
	'Attachment',
	'Hesitation',
	'Growth',
	'Talent',
	'Spirit',
	'Intrigue',
	'Promotion',
	'Happiness',
	'Thoughtfulness',
	'Heart',
	'Openness',
	'Oversight',
	'Hate',
	'Thrill',
	'Waste',
	'Backtrack',
	'Time',
	'Heroism',
	'Truth',
	'Release',
	'Rumor',
	'Combat',
	'Honesty',
	'Wisdom',
	'Energy',
	'Ruin',
	'Identity',
	'Hope',
	'Worry',
	'Judge',
	'Wound',
	'Solution',
	'Humility',
	'Division',
	'Balance',
	'Extravagance',
	'Simulation'
];

// NPC Arrays
var NPCArray = [
	'Aaron',
	'Abrielle',
	'Acalia',
	'Adair',
	'Adam',
	'Adar',
	'Adara',
	'Adonis',
	'Adriel',
	'Aeneas',
	'Agate',
	'Aidan',
	'Ailen',
	'Aindreas',
	'Aiyana',
	'Alaire',
	'Alaric',
	'Alaron',
	'Alastair',
	'Albert',
	'Alfonso',
	'Alissa',
	'Alixandra',
	'Allard',
	'Allistair',
	'Altair',
	'Althea',
	'Altheus',
	'Alynd',
	'Alyvia',
	'Amara',
	'Anan',
	'Anatola',
	'Anthony',
	'Anton',
	'Anya',
	'Ao',
	'Arabeth',
	'Aramis',
	'Arcadia',
	'Archimedes',
	'Ardra',
	'Ariadne',
	'Arianwen',
	'Armand',
	'Arthur',
	'Asgoth',
	'Atherton',
	'Augustus',
	'Aurelia',
	'Aurelian',
	'Aurelius',
	'Auristela',
	'Avalon',
	'Azriel',
	'Balast',
	'Ballard',
	'Barnabas',
	'Barrett',
	'Bastian',
	'Bayard',
	'Beck',
	'Bedivere',
	'Beowulf',
	'Berd',
	'Berryn',
	'Bert',
	'Bevan',
	'Blaize',
	'Blasé',
	'Brady',
	'Bram',
	'Bran',
	'Brandon',
	'Branth',
	'Brawn',
	'Breena',
	'Brenna',
	'Brennainn',
	'Briallan',
	'Brielle',
	'Brimble',
	'Briseis',
	'Brody',
	'Cade',
	'Calder',
	'Callum',
	'Cambria',
	'Cara',
	'Caryne',
	'Carys',
	'Caspian',
	'Cassia',
	'Cassiel',
	'Cassiopeia',
	'Cassius',
	'Chalfont',
	'Chalmers',
	'Chaniel',
	'Charlemagne',
	'Chay',
	'Chilton',
	'Cleon',
	'Conan',
	'Conrad',
	'Cora',
	'Corbin',
	'Cormac',
	'Cornelius',
	'Cullen',
	'Cyprian',
	'Daegal',
	'Dagen',
	'Daibheid',
	'Daire',
	'Dallan',
	'Damek',
	'Dante',
	'Darius',
	'Darnell',
	'Dashiel',
	'Dasi',
	'David',
	'Derek',
	'Deron',
	'Derrib',
	'Derrick',
	'Derris',
	'Derwin',
	'Destin',
	'Devin',
	'Devlin',
	'Devlyn',
	'Dillon',
	'Dilwyn',
	'Douglas',
	'Draigh',
	'Drake',
	'Drystan',
	'Duncan',
	'Dylan',
	'Dynie',
	'Earthan',
	'Edmund',
	'Edric',
	'Edward',
	'Eindride',
	'Eira',
	'Eiran',
	'Eirian',
	'Eldridge',
	'Elfed',
	'Eliphas',
	'Eliron',
	'Elwin',
	'Elysia',
	'Emil',
	'Emlyn',
	'Eoin',
	'Epicurus',
	'Erik',
	'Errine',
	'Eryk',
	'Eryke',
	'Evadne',
	'Evanth',
	'Evo',
	'Ewart',
	'Farale',
	'Faramond',
	'Fausto',
	'Ferris',
	'Fineas',
	'Finian',
	'Finn',
	'Fontayne',
	'Forrest',
	'Freeman',
	'Frewin',
	'Fyodor',
	'Gabriel',
	'Gaerwn',
	'Gaian',
	'Galahad',
	'Galen',
	'Gareth',
	'Gavin',
	'Gavina',
	'Gavriel',
	'Gawain',
	'Gerard',
	'Ginerva',
	'Glynna',
	'Goran',
	'Gorth',
	'Griffin',
	'Guinevere',
	'Gwydion',
	'Hadriel',
	'Hafgan',
	'Hannelore',
	'Heath',
	'Hermione',
	'Hesperos',
	'Iagan',
	'Ianthe',
	'Ignacia',
	'Ignatius',
	'Innis',
	'Iseult',
	'Isolde',
	'Jarak',
	'Jasek',
	'Jasion',
	'Jessalyn',
	'Jorah',
	'Kadir',
	'Kaine',
	'Kara',
	'Karran',
	'Katriel',
	'Kayne',
	'Kazimir',
	'Keanu',
	'Keith',
	'Kelsey',
	'Kerensa',
	'Kierst',
	'Killian',
	'Kira',
	'Korbin',
	'Kurn',
	'Kyale',
	'Kyler',
	'Kyra',
	'Kyrielle',
	'Ladia',
	'Lan',
	'Laris',
	'Laurent',
	'Lazar',
	'Leala',
	'Leander',
	'Ledo',
	'Leif',
	'Leila',
	'Leira',
	'Leland',
	'Leodegrance',
	'Leon',
	'Lilith',
	'Lindsey',
	'Liora',
	'Liriene',
	'Liron',
	'Llewellyn',
	'Lor',
	'Lovejoy',
	'Loxias',
	'Lucian',
	'Lucien',
	'Lucius',
	'Luke',
	'Lyra',
	'Magnus',
	'Maia',
	'Marc',
	'Marcel',
	'Marden',
	'Marius',
	'Mark',
	'Mars',
	'Marsden',
	'Martin',
	'Mathieu',
	'Mavel',
	'Maylea',
	'Meira',
	'Meriadoc',
	'Merrill',
	'Michael',
	'Milandro',
	'Mireille',
	'Mireya',
	'Mistral',
	'Mora',
	'Morgan',
	'Moriana',
	'Mortimer',
	'Natania',
	'Neirin',
	'Nerys',
	'Niam',
	'Nicholas',
	'Nuriel',
	'Nyfain',
	'Nyssa',
	'Odin',
	'Oisin',
	'Oleisa',
	'Ophion',
	'Oralie',
	'Orinthea',
	'Orion',
	'Orpheus',
	'Osran',
	'Ozara',
	'Patrick',
	'Paxton',
	'Percival',
	'Peregrine',
	'Persephone',
	'Perseus',
	'Petronela',
	'Phelan',
	'Pryderi',
	'Pyralia',
	'Pyralis',
	'Qadira',
	'Quinevere',
	'Quintessa',
	'Quintus',
	'Quiss',
	'Raisa',
	'Raphael',
	'Redmund',
	'Regan',
	'Reliquary',
	'Remus',
	'Renfrew',
	'Reuben',
	'Rhyan',
	'Rhydderch',
	'Riona',
	'Robert',
	'Robin',
	'Rodney',
	'Roland',
	'Roman',
	'Romulus',
	'Ronan',
	'Sadi',
	'Saira',
	'Salina',
	'Samia',
	'Sandar',
	'Saoirse',
	'Sarai',
	'Sarielle',
	'Saul',
	'Sebastian',
	'Sephya',
	'Seraphim',
	'Seraphina',
	'Serian',
	'Seth',
	'Séverin',
	'Sharn',
	'Shaundra',
	'Shea',
	'Sirius',
	'Siveth',
	'Snowden',
	'Sol',
	'Sorcha',
	'Soren',
	'Spartacus',
	'Storm',
	'Summerton',
	'Sven',
	'Tade',
	'Tarran',
	'Tate',
	'Tavish',
	'Tearlach',
	'Terra',
	'Thalia',
	'Thana',
	'Thane',
	'Thaniel',
	'Thayer',
	'Theia',
	'Thor',
	'Tiordan',
	'Topaz',
	'Tor',
	'Torc',
	'Torian',
	'Torin',
	'Torin',
	'Travys',
	'Trebor',
	'Trent',
	'Tressa',
	'Tristan',
	'Tristana',
	'Troy',
	'Tylien',
	'Ulrich',
	'Ulyssia',
	'Uriela',
	'Urien',
	'Valentine',
	'Valiah',
	'Vanora',
	'Vasilis',
	'Vespera',
	'Vicart',
	'Vivian',
	'Ward',
	'Washington',
	'Wayde',
	'Wentworth',
	'Wolfe',
	'Wolfram',
	'Xanthias',
	'Xanthus',
	'Xara',
	'Xavier',
	'Xenos',
	'Xylia',
	'Yadira',
	'Yakira',
	'Yeira',
	'Yeriel',
	'Yestin',
	'Yseult',
	'Zaira',
	'Zander',
	'Zaniel',
	'Zarek',
	'Zelda',
	'Zen',
	'Zephaniah',
	'Zephyr',
	'Zircon',
	'Zohar',
	'Zora',
	'Zorion',
	'Zoroaster'
];

var NPCAdjArray = [
    'Tired',
	'Dirty',
	'Wizened',
	'Boisterous',
	'Aggressive',
	'Aloof',
	'Arrogant',
	'Belligerent',
	'Big-Headed',
	'Boastful',
	'Bone-Idle',
	'Boring',
	'Bossy',
	'Callous',
	'Cantankerous',
	'Careless',
	'Changeable',
	'Clinging',
	'Compulsive',
	'Conservative',
	'Cowardly',
	'Cruel',
	'Cunning',
	'Cynical',
	'Deceitful',
	'Detached',
	'Dishonest',
	'Dogmatic',
	'Domineering',
	'Finicky',
	'Flirtatious',
	'Foolish',
	'Foolhardy',
	'Fussy',
	'Greedy',
	'Grumpy',
	'Gullible',
	'Harsh',
	'Impatient',
	'Impolite',
	'Impulsive',
	'Inconsiderate',
	'Inconsistent',
	'Indecisive',
	'Indiscreet',
	'Inflexible',
	'Interfering',
	'Intolerant',
	'Irresponsible',
	'Jealous',
	'Lazy',
	'Machiavellian',
	'Materialistic',
	'Mean',
	'Miserly',
	'Moody',
	'Narrow-Minded',
	'Nasty',
	'Normal',
	'Nervous',
	'Obsessive',
	'Obstinate',
	'Overcritical',
	'Overemotional',
	'Parsimonious',
	'Patronizing',
	'Perverse',
	'Pessimistic',
	'Pompous',
	'Possessive',
	'Plump',
	'Quarrelsome',
	'Quick-Tempered',
	'Resentful',
	'Rude',
	'Ruthless',
	'Sarcastic',
	'Secretive',
	'Selfish',
	'Self-Centred',
	'Self-Indulgent',
	'Silly',
	'Sneaky',
	'Stingy',
	'Stubborn',
	'Stupid',
	'Superficial',
	'Tactless',
	'Timid',
	'Touchy',
	'Thoughtless',
	'Terrible',
	'Unkind',
	'Unpredictable',
	'Unreliable',
	'Untidy',
	'Untrustworthy',
	'Vague',
	'Vain',
	'Vengeful',
	'Vulgar',
	'Weak-Willed',
	'Adaptable',
	'Adventurous',
	'Affable',
	'Affectionate',
	'Agreeable',
	'Ambitious',
	'Amiable',
	'Amicable',
	'Amusing',
	'Brave',
	'Bright',
	'Broad-Minded',
	'Calm',
	'Careful',
	'Charming',
	'Communicative',
	'Compassionate ',
	'Conscientious',
	'Considerate',
	'Convivial',
	'Courageous',
	'Courteous',
	'Creative',
	'Decisive',
	'Determined',
	'Diligent',
	'Diplomatic',
	'Discreet',
	'Dynamic',
	'Easygoing',
	'Emotional',
	'Energetic',
	'Enthusiastic',
	'Exuberant',
	'Fair-Minded',
	'Faithful',
	'Fearless',
	'Forceful',
	'Frank',
	'Friendly',
	'Funny',
	'Generous',
	'Gentle',
	'Good',
	'Gregarious',
	'Hard-Working',
	'Helpful',
	'Honest',
	'Humorous',
	'Imaginative',
	'Impartial',
	'Independent',
	'Intellectual',
	'Intelligent',
	'Intuitive',
	'Inventive',
	'Kind',
	'Loving',
	'Loyal',
	'Modest',
	'Neat',
	'Nice',
	'Optimistic',
	'Passionate',
	'Patient',
	'Persistent ',
	'Pioneering',
	'Philosophical',
	'Placid',
	'Plucky',
	'Polite',
	'Powerful',
	'Practical',
	'Pro-Active',
	'Quick-Witted',
	'Quiet',
	'Rational',
	'Reliable',
	'Reserved',
	'Resourceful',
	'Romantic',
	'Self-Confident',
	'Self-Disciplined',
	'Sensible',
	'Sensitive',
	'Shy',
	'Sincere',
	'Sociable',
	'Straightforward',
	'Sympathetic',
	'Thoughtful',
	'Tidy',
	'Tough',
	'Unassuming',
	'Understanding',
	'Versatile',
	'Warmhearted',
	'Willing',
	'Witty',
	'Incompetent',
	'Competent',
	'Towering',
	'Tiny',
	'Short',
	'Tall',
	'Large-Girthed',
	'Overweight',
	'Skinny',
	'Rail-Thin',
	'Pious',
	'Fancy',
	'Well-Dressed',
	'Ridiculous',
	'Fun-Loving',
	'Carefree',
	'Open-Minded',
	'Closed-Minded',
	'Brusque',
	'Abrupt',
	'Brunette',
	'Blonde',
	'Brown-Eyed',
	'Blue-Eyed',
	'Albino',
	'Rosy',
	'Heavy',
	'Thin',
	'Fat',
	'Thick',
	'Muscular',
	'Cute',
	'Attractive',
	'Masculine',
	'Feminine',
	'Petite',
	'Large',
	'Small',
	'Pierced',
	'Tattooed',
	'Scarred',
	'Painted',
	'Polished',
	'Happy',
	'Sad',
	'Angry',
	'Sick',
	'Ill',
	'Dumb',
	'Stupified',
	'Shocked',
	'Angered',
	'Excited',
	'Aroused',
	'Displaced',
	'Clean',
	'Rusty',
	'Musty',
	'Musky',
	'Dangerous',
	'Hazardous',
	'Bad',
	'Evil',
	'Sharp',
	'Colorful',
	'Weird',
	'Angled',
	'Shaved',
	'Carved',
	'Unusual',
	'Unique',
	'Horrible',
	'Terrifying',
	'Scary',
	'Calming',
	'Peaceful',
	'Tranquil',
	'Organized',
	'Disorganized',
	'Messy',
	'Harrowing',
	'Creepy',
	'Fluffy',
	'Patterned',
	'Checkered',
	'Circled',
	'Encircled',
	'Soft',
	'Hard',
	'Alive',
	'Dead',
	'Adequate',
	'Important',
	'Innocent',
	'Vicious',
	'Violent',
	'Adorable',
	'Alert',
	'Beautiful',
	'Icy',
	'Slippery',
	'Glowing',
	'Gleaming',
	'Glamorous',
	'Fashionable',
	'Dowdy',
	'Tacky',
	'Steep',
	'Pale',
	'Stormy',
	'Sickly'
];

var NPCNounArray = [
    'Bar Maid',
	'Bartender',
	'Innkeeper',
	'Farmer',
	'City Guard',
	'Arbiter',
	'Constable',
	'Jailor',
	'Tanner',
	'Fisherman',
	'Blacksmith',
	'Metalsmith',
	'Tinkerer',
	'Toy Maker',
	'Potion Maker',
	'Wizard for Hire',
	'Academic Researcher',
	'Academic Teacher',
	'Magic Researcher',
	'Magician Trainer',
	'Weaponsmith',
	'Armorsmith',
	'Weapons Master',
	'Weapons Trainer',
	'Squire',
	'Minstrel',
	'Explorer',
	'Royal Policy Advisor',
	'Military Advisor',
	'Economic Advisor',
	'Hunter',
	'Assassin',
	'Baker',
	'Barber',
	'Bodyguard',
	'Book Maker',
	'Brewer',
	'Butcher',
	'Carpenter',
	'Carriage Driver',
	'Cook',
	'Barrel Maker',
	'Diplomat',
	'Tailor',
	'Farrier',
	'Priest',
	'Physician',
	'Shaman',
	'Fletcher',
	'Florist',
	'Gardener',
	'Footman',
	'Glass Blower',
	'Jester',
	'Jeweler',
	'Hand Maiden',
	'Locksmith',
	'Logger',
	'Cartographer',
	'Merchant',
	'Miner',
	'Midwife',
	'Musician',
	'Nurse',
	'Acolyte',
	'Painter',
	'Papermaker',
	'Sculptor',
	'Artist',
	'Pot Maker',
	'Prophet',
	'Shoemaker',
	'Soldier',
	'Spy',
	'Stable Hand',
	'Stonemason',
	'Surgeon',
	'Candy Maker',
	'Tax Collector',
	'Thief',
	'Beggar',
	'Thatcher',
	'Trap Maker',
	'Tutor',
	'Weaver',
	'Wheel Maker',
	'Prostitute',
	'Rope Maker',
	'Saddle Maker',
	'Sailor',
	'Kitchen Servant',
	'House Servant',
	'Ship Builder',
	'Trader',
	'Ship Captain',
	'Fortune Teller',
	'Circus Performer',
	'Knight',
	'Lord',
	'Lady',
	'Baron',
	'Baronness',
	'King',
	'Queen',
	'Prince',
	'Princess',
	'Nobleman',
	'Noblewoman'
];

// Direction Arrays
var cardinalArray = [
    'North',
    'South',
    'East',
    'West'
];

var cardinalPlusArray = [
    'North',
    'South',
    'East',
    'West',
    'Up',
    'Down'
];

var eightPTArray = [
    'Northeast',
    'Northwest',
    'Southeast',
    'Southwest',
    'North',
    'South',
    'East',
    'West'
];

var tfPTArray = [
    'Northeast',
    'Northwest',
    'Southeast',
    'Southwest',
    'North',
    'South',
    'East',
    'West',
    'Northeast and Up',
    'Northwest and Up',
    'Southeast and Up',
    'Southwest and Up',
    'North and Up',
    'South and Up',
    'East and Up',
    'West and Up',
    'Northeast and Down',
    'Northwest and Down',
    'Southeast and Down',
    'Southwest and Down',
    'North and Down',
    'South and Down',
    'East and Down',
    'West and Down'
];

// Loot or Loss Type Array
var lootArray = [
    'Physical',
    'Mental',
    'Emotional',
    'Spiritual',
    'Financial',
    'Ability',
    'Authority',
    'Material',
    'Influence',
    'Opportunity'
];

// Quest Seed Array
var questArray = [
	'Complications when seeking shelter from a storm.',
	'Bad guys just left.  Get them!',
	'Bad guy tries to blackmail PCs.',
	'Break in and recover object.',
	'Secure a place of strategic value.',
	'Clear out the bad guys from the place.',
	'Explore a place for treasure.',
	'Survive in the wild.',
	'Solve the crime.',
	'Escort the important person.',
	'Make a business work.',
	'Rescue someone.',
	'Find the hidden bad guy base.',
	'Get the thing before others do.',
	'Ambushed for unknown reasons.',
	'Survive a high society situation.',
	'Spy and report back.',
	'Find the missing person.',
	'Why are odd things happening?',
	'You\'ve lost your memories!',
	'Hold the gate from invaders.',
	'Teleported elsewhere. Find your way back.',
	'Stop a tragedy before the bad guy does it.',
	'Too much magical power has been released.',
	'Fetch the following items…',
	'Why did the whole town just die?',
	'Survive a tournament.',
	'Capture an elusive creature.',
	'Get through the trap-laden area.',
	'Escape from prison.',
	'Take back control of hijacked boat.',
	'Explore an unknown area.',
	'Find the Weapon of Awesome.',
	'Find the Wand of Awesome.',
	'Find the Armor of Awesome.',
	'Befriend important people.',
	'Lead the army attack.',
	'Infiltrate the headquarters.',
	'You live in a giant beast.  Get out!',
	'Why are the dead coming back?',
	'Your hometown has been attacked.',
	'This land needs a new king.',
	'Why are all the animals running away?',
	'The king has been assassinated.',
	'Teach the town bully a lesson.',
	'Win the respect of the masses.',
	'Disrupt the mob in town.',
	'Stop the evil revolution.',
	'Help the just revolution.',
	'Fulfill the prophecy.',
	'Find the traitor in your ranks.',
	'Restore order after a natural disaster.',
	'Train the new recruits.',
	'Stop the cult from taking over.',
	'An item you have is cursed.',
	'Manage the mining of rare ore.',
	'A huge hole just opened in the middle of town.',
	'Survive political shenanigans.',
	'Pass the impenetrable barrier.',
	'Lead the refugees to a new home.'
];

// Combat Arrays
var attackerArray = [
	'Minions',
	'Minions - Guards',
	'Minions - Patrolling',
	'Minions - Protectors',
	'Minions - Evil Ritual',
	'Minions - Wizards\' Circle',
	'Minions - Hostage Situation',
	'Minions - Slave Master',
	'Minions - Mini-Boss',
	'Minions - Mini-Boss',
    'Minions - Mini-Boss',
    'Big Bad Evil Guy',
	'Wanderer - Swarm',
	'Wanderer - Small',
	'Wanderer - Medium',
	'Wanderer - Large',
	'Wanderer - Huge',
	'Wanderer - Colossal',
	'Wanderer - Animal Pack',
	'Wanderer - Monstrous Villagers',
	'Wanderer - Magical Beast',
	'Wanderer - Fey',
	'Wanderer - Spirit',
	'Wanderer - Undead',
	'Wanderer - Demons/Devils',
	'Wanderer - Elementals',
	'Wanderer - Fliers',
	'Wanderer - Construct',
	'Wanderer - Thieves',
	'Wanderer - Assassins',
	'Wanderer - Living Environment'
];

var attackerDescriptionArray = [
	'These minions are the common foot soldiers wherever the PCs are.  Most often they are loyal servants of the big bad guy.  If in a goblin cave, they\'re goblins.  If in a castle, they\'re humans.  You get the idea.',
	'These minions are the common foot soldiers wherever the PCs are.  This group is here to guard something precious.  What could it be that they are protecting?',
	'These minions are the common foot soldiers wherever the PCs are.  This group is out on their regular patrol route.  Are they alert and read for action, or are they loafing on the job?',
	'These minions are the common foot soldiers wherever the PCs are.  This group is protecting and/or escorting someone of importance.  Is that someone the PCs should be interrogating for more information?',
	'These minions are the common foot soldiers wherever the PCs are.  This group is performing an evil ritual (such as making a sacrifice, performing an evil marriage, or just having a traditional evil ceremony celebrating evil) when the PCs rudely interrupt them.  What is this ritual meant to accomplish, and if it has evil intent (hence the title), can the PCs stop them in time?',
	'These minions are the common foot soldiers wherever the PCs are.  This is a group of spell casting seemingly working in concert.  Shamans, evil clerics, wizards, and warlocks all concentrate to finish their fiendish spell.  What will it do if it succeeds?',
	'These minions are the common foot soldiers wherever the PCs are.  This group has taken a hostage that they think the PCs will care about.  Can the PCs save the hostage in time without that hostage suffering injury?  Is there a peaceful solution?',
	'These minions are the common foot soldiers wherever the PCs are.  The slave master and a few workers treat the slaves here very poorly.  Will the slaves help the PCs, or out of fear will they be loyal to their evil overseers?  A slave riot could even be dangerous to the PCs.',
	'This is a trusted right hand of the big bad guy.  Huge, burly, and intelligent make for a deadly combination.',
	'This is a trusted right hand of the big bad guy along with some standard minions.  The combination of tactics and an unwillingness to risk himself makes this enemy both deadly and elusive.',
	'This is a trusted right hand of the big bad guy along with some standard minions.  This particular mini-boss is a master at the arcane arts and willing to harm his own minions in order to harm and stop the PCs.',
	'The big bad evil guy has finally shown up to personally deal with the PCs.  Of course, he\'s not alone.  He brought along his cannon fodder.  Can the PCs defeat the BBEG, or will he get away again?',
	'A wandering swarm of tiny creatures with vicious teeth is coming at the PCs.  Its mindless pursuit of sustenance makes it a dangerous foe indeed.',
	'A wandering band of small creatures (goblins, kobolds, etc.) were really just minding their own business when the PCs encountered them.  They don\'t like it when PCs get up in their business.',
	'A wandering band of medium creatuers (gnolls, orcs, etc.) were really just minding their own business when the PCs encountered them.  They don\'t like it when PCs get up in their business.',
	'A wandering band of large creatuers (ogres, trolls, etc.) were really just minding their own business when the PCs encountered them.  They likes a fight, likes it a lot.',
	'A wandering huge creature (dragon, titan, etc.) was really minding its own business, at least as much as an abnormally huge creature can, when the PCs encountered it.  It looks like it can make hulk-like smashes.',
	'The PCs can see this thing coming a mile away, literally.  It\'s that colossally big.  Maybe it\'s a tarrasque, or maybe even Godzilla, but whatever it is, it\'s ginormous, hungry, and definitely grumpy.',
	'A wandering pack of wild animals.  They appear to be hunting and think the PCS are their prey.  Maybe they\'ll get scared and run away, or maybe they are very territorial and will try to drive the PCs off their turf.',
	'Monsters have homes tooo, and they want to protect.  These monstrous mamas and papas have come out in droves to protect their children from the mean old PCs.',
	'This magical beast is rare and lethal.  Fighting based on instincts rather than pure tactics makes it even more dangerous due to the unpredictable nature of the beast.',
	'Fey are always up for some mischief, and stumbling upon the PCs may just make their day have a happy ending.',
	'Ghosts are always pesky.  You never know how long they\'ve been here, what they\'re doing, or if they have a purpose at all.  Plust they\'re incorporeal.  Yeah.  So that\'s a bummer.',
	'Ah, the cleric is smiling.  While everone else cowers, the cleric brandishes a holy symbol with glee.  Who doesn\'t like annihilating hordes of zombies, skeletons, or the occasional vampire?',
	'Can anyone really tell the difference between demons and devils?  I mean come on.  I guess you can save the philosophical discussion for after the fight because here they come!',
	'Oops!  Looks like an interplanar rift tore through the fabric of reality again letting out some random elemental creatures.  I hate it when that happens.  Le\' sigh.',
	'It\'s a bird!  It\'s a plane!  No, it\'s just a bunch of crazy flying creatures swooping down a reign of terror upon the PCs.  That\'s what you get for trying to steal their eggs.',
	'Who would have built this giant construct and then left it unattended?  Well, the genie\'s out of the bottle now.  Can\'t put it back in, so the PCs will just have to smash it apart.',
	'Everyone loves Robin Hood until it happens to them.  The PCs are accosted by a group of thieves!',
	'A small band of assassins attacks the PCs.  Who hired these thugs and why?  Was it something you said?',
	'Same old story.  Boy walks up to door.  Boy opens door.  Door eats boy.  It\'s always a pain when statues come to life, walls try to trap you, or doors gnash their teeth upon your body.'
];

var combatAmountArray = [
	'Solo',
	'Few',
	'Few',
	'Few',
	'Few',
	'Few',
	'Few',
	'Many',
	'Many',
	'Many'
];

var combatTypeArray = [
	'Melee',
	'Melee',
	'Melee',
	'Ranged',
	'Ranged',
	'Magic',
	'Mixed',
	'Mixed',
	'Mixed',
	'Mixed Magic'
];

var intentArray = [
	'Gather Intel',
	'Fight to Death',
	'Hit and Run',
	'Protect Our Own',
	'Survive at All Costs',
	'Intimidate',
	'Capture PCs',
	'Disable PCs',
	'Drive Off PCs'
];

var strategyArray = [
	'Target Closest',
	'Focus Fire',
	'Spread Attack'
];

var specialArray = [
	'As the PCs enter the room, a large red dragon spewing fire moves toward them.  It\'s only a wicker dragon on rollers used as a distraction so that the real bad guys can surprise the PCs in the first round.',
	'As the PCs enter the room, a large golden disc is the focal point, but it is only a distraction while the enemies attack from the sides.  It\'s a classic pincer attack!',
	'The enemies try to trap the PCs in a single area to prevent advantageous movement on their part.  Once the PCs are pinned down, they pepper the area with arrows from their archers who had been held in reserve for just the right moment.',
	'If the PCs cast magic spells to buff themselves for the battle, the enemies attempt to retreat and regroup for an attack later hoping that the magic buffs will stop working.  They may even just bar and the hold the door for an hour hoping to waste PC spells.  Then they\'ll fight.',
	'Some of the enemies are wreathed in prismatic light.  When the PCs attack them with a melee attack, the energetic second skin lashes out at the attacking PC for low damage.',
	'Some of the enemies carry darkness emitting globes so that the PCs only see an approaching darkness.  The enemies have darkvision so they can still see to attack.  They may also throw the darkness emitting globes at the PCs in order to stop ranged attacks coming from the PCs.',
	'Enemies in the back have net launchers while the front line troops have arm mounted bola launchers.  Their goal is to entangle the PCs and take them prisoner if at all possible.  They\'ll stick around until the job is done.',
	'The enemies are willing to walk past the tougher PCs and take attacks of opportunity in order to get to the squishy and weak PCs in the back.  They have a severe hatred of magic users and always target them first and exclusively.',
	'Enemies with long-range weapons have levitation cloaks.  They float straight up in the air, stay out of range of short-range weapons and continually launch volley after volley.  If a few enemy melee combatants get hit, they see it as a bonus.  They never liked the sword guys anyway.',
	'Some of these enemies are equipped with magical whips of entangling and/or tripping.  Once a PC is entangled in a whip, they drop it and pull out a melee weapon to finish the job.  Those with tripping whips team with a melee bad guy to help finish off prone PCs even faster.',
	'These enemies carry stones of silence which radiate in a 20 ft radius.  Carrying the stones allows them to sneak up on the PCs more easily and then stealthily throw the stones of silence towards PC magic casters to stop spells.  The PCs may not notice the stones, only the quiet.',
	'These enemies launch attacks that lower the willpower of the PCs then hit them with magic or effects that cause the PCs to make willpower tests.  This one-two combo is dangerous when both hit their mark.',
	'These enemies launch attacks that lower the fortitude or endurance of the PCs then hit them with magic or effects that cause the PCs to make fortitude or endurance tests.  This one-two combo is dangerous when both hit their mark.',
	'These enemies launch attacks that lower the reflexes of the PCs then hit them with magic or effects that cause the PCs to make reflex tests.  For example, leg stab followed by a cone of fire making it harder for the PCs to jump out of the way of the fire.',
	'These combatants utilize large phalanx style shields with large pikes.  It is almost impossible to get an attack on these enemies as they are considered to have total cover from the overly large shields.  Approach them at your own risk.',
	'Tactics are key for these bad guys.  They don\'t stand toe-to-toe with the PCs just trading hits back and forth.  Their front line attacks once and then moves back allowing the next line of troops to attack.  They continue rotating to spread out the damage they take from PCs more evenly throughout their ranks thereby keeping them alive longer and inflicting more damage on the PCs.',
	'One of the enemy combatants pretends to desert their side in the midst of the battle and join the PCs.  Little do the PCs know that this bad guy is really a double agent still working for the bad guys.  If the PCs allow him to stick around after the battle, he will eventually try to lead the PCs astray and get them killed or captured.',
	'Several of these enemies will fall and play dead after taking heavy damage.  In the middle of a chaotic battle, the PCs will likely think they are truly dead.  When the PCs turn their focus to another combatant, they jump up and resume their attack now with the advantage of surprise.',
	'These enemies can\'t quite turn invisible, but they definitely have cloaking camouflage of some kind.  If holding completely still, they are essentially invisible.  It\'s only when they move that subtle signs give away their location.  There is always a miss chance to hit these enemies.',
	'As the PCs begin slaying these evil creatures, wisps of smoke drift from the fallen to those still alive.  After inhaling the smoke, the living enemies become stronger (damage) and seem to regain some life energy (hit points).  Can the PCs bring them all down simultaneously?',
	'The first attack on the PCs is a blast of green light that does not harm them.  The bad guy then pulls out a small voodoo doll which is now in the likeness of the PC hit with the green light.  Attacking a little doll is so much easier and just as effective at harming the PCs.  The enemies try to run away while attacking the voodoo dolls which will continue to damage the PCs.',
	'Some of these enemies have crossbows that launch grappling hooks with a built in pulley mechanism that can then pull them up to where the grappling hook lands.  They zip all over the place trying to stay out of range of the PCs.',
	'When these enemies are struck with a melee attack, they teleport 10 ft toward the attacking PC which often puts them directly behind the PC poised for a surprise backstab.  In the case where the PC wields a 10 ft reach weapon, the PC and enemy will probably end up in a jumbled pile together.',
	'One of the main enemies in this combat has a helmet with a bright yellow gem at the front which provides magical resistance for the wearer of the helm.  This enemy combatant goes straight for a PC caster.',
	'Every time a PC strikes one of these enemies, an illusory copy spins off the original.  The PCs have a harder and harder time telling which is the real bad guy as another illusion is spawned every time they do correctly hit the original.  For example, if you hit the actual bad guy three times in a row, there would then be the original and three illusory copies giving the PCs only a one in four chance of finding the real bad guy.',
	'One enemy carries a mirror-like shield.  The first magically damaging spell launched toward this enemy each round is absorbed.  After the third spell is absorbed, all the damage and effects from the three spells are sent back toward the caster of the third spell.',
	'These enemies fire stink arrows at the PCs making it easier for bad guys to track the PCs by scent for the rest of the day.  Even washing off the rank smelling goop won\'t fully remove the stench especially when some bad guys have the scent ability.',
	'The leader of these enemies calls out a PC target at the beginning of its turn each round.  That PC now has an aura around him or her that makes it easer for enemies to hit and damage the PC.  Only one aura can be active at a time, and they can be magically dispelled.',
	'The undermined areas placed here by enemies are still strong enough to hold the weight of a humanoid, but the enemies may intentionally hit the weakened areas once a PC stands in the right spot causing the PC to sink to the waist in the ground.',
	'One of the enemies puts out an aura of fear which makes it harder for PCs to attack it or, in the worst case scenario, causing the PCs to flee or cower.  These enemies have no rules about fighting with honor and will happily strike down any cowering PCs.',
	'The enemies wear trapped armor and wield trapped weapons.  If they are defeated and the PCs plunder the items, spring-loaded pin pricks of poison launch from the weapon handles when picked up and from inside the armor when next worn.',
	'These enemies all have very low life.  They look to be on the verge of death.  However, all damage done to them is magically reduced to one damage only.  No matter how big of a fireball the PCs throw at them, it only deals one damage total.  This fight may take a while.',
	'These enemies are very good at grappling hand-to-hand with opponents.  They prefer to grab the PCs and prevent them using their weapons instead of attacking with weapons themselves.  They rely on their larger numbers and stall tactics to win the day.',
	'The PCs are met with a flurry of blows from unarmed enemies.  They quickly realize that just because the bad guys don\'t have swords the size of New Jersey doesn\'t mean they aren\'t actually dangerous.',
	'The bad guys wield weapons with paralyzing poison.  If hit, PCs must pass a fortitude test or either lose the use of their arms (preventing attacks) or their legs (preventing movement) for one round.  After five successful attacks, the poison wears off the bad guy weapons.',
	'The enemy leader wields a staff of telekinesis that allows him to lift small objects at will.  He can lift larger and larger objects with increasingly more difficult magic skill tests.  A favorite attack is to throw the PC knight on top of the PC wizard.',
	'As enemies die on the field of battle, their corpses are re-animated again and again.  The cycle doesn\'t end until the PCs can find the hidden enemy wizard who can do this all day.',
	'An enemy combatant wields a mace that changes its density as it swing causing more damage than normal.  It also is much better at damaging object than a normal weapon.  (Sunder?  Shudder at the thought.)',
	'An enemy casts a spell making one red portal and one blue portal.  Anything going in the blue portal comes out the red portal and vice versa.  This makes for quick moves.  They also can make the blue portal on the floor under a PC and the red on the ceiling causing falling damage for the PC.',
	'Everyone expects the giant worm to explode when it dies, but no one would think that these enemies would become exploding corpses.  Well they do.  These enemies explode in a 15 ft radius one round after death.  Many enemies will even fall on their own swords directly in front of the PCs because they know what will happen after they die.',
	'Healers work tirelessly within the enemy ranks, but will it be enough to counteract the PCs?  Probably not.  Even with half the force being made up of healers, the other half will have to keep the PCs from getting to the healers if they\'re going to be able to keep healing.',
	'These enemies know they are not long for the world.  As such they blast out all their mega-powers in the first round of combat.  They never save high level spells or abilities for the "right moment."  They know the moment is now or never.',
	'These enemies hang in there for one round with the PCs and then run screaming.  What the PCs don\'t know is that they\'re not really fleeing the battle.  In fact, they\'re running directly to the larger force of bad guys waiting to spring the ambush.',
	'The enemies are scattered about the room and attack from every direction.  There is no place for the squishy PCs to hid in this multi-pronged attack.',
	'The ranged enemies in this group don\'t just stand and fire.  They fire and then stealth move to the next spot of cover.  The PCs may know where they shot initially came from, but they don\'t know where the enemy shooter is now.  Tricksy, tricksy.',
	'The leader of this enemy group is wearing reverberating armor.  When melee attacked, a return pulse bounces back towards the enemy\'s attacker attempting to knock the PC prone.  The PC must pass a balance or reflexive test to remain standing after each melee attack.',
	'These enemies fire pinning arrows at the PCs trying to root them in place.  The arrows don\'t deal damage, but the PCs must pass a reflexive test or be stuck in place.  Once struck, the PCs must pass a strength check or deal a significant amount of damage to the arrow to get free.',
	'Many of these enemies have wall walking ability.  It\'s almost as if they can climb like a spider.  Archers firing while walking on the ceiling, melee attackers swinging at PC heads while standing on the wall, and crazy escape routes make this battle stand out.',
	'These enemies have regenerative capabilities, magical or natural.  Each round they are in combat, they regain life energy (hit points).  Furthermore, they can only truly be killed by a specific type of elemental damage.  Otherwise, they just keep regenerating.',
	'These enemies have damage reduction against both physical and magical attacks.  They can stand toe-to-toe with the PCs for much longer if need be.  They can definitely last long enough to asses the PCs capabilities and then report back to their boss.',
	'One enemy has a bow of retribution.  When this bow is fired straight up into the air it home in on the creature who last attacked the wielder of the bow within the last round.  This attack receives a significant bonus to hit that attacker.',
	'Some of the enemies in this group have yo-yo style teleporting.  As their movement, they can teleport anywhere within close range, perform an action (like attack), and then teleport back to their initial location.  This teleporting is controlled by a magical pair of boots.',
	'The lead enemy in this group has a sword of displacement.  When he strikes a PC, the PC must pass a test of willpower or be teleported to another space adjacent to the enemy.  This is mainly used to get the PCs into flanking position with other enemy combatants.',
	'The lead enemy in this group has a magical aura of weakening in a 15 ft radius.  For each round a PC is within the aura, they receive a minus to attack and damage which is cumulative until the PC leaves the aura.  Then the bad guy attacks with his great bow.',
	'The enemies in this group once per round can instantaneously turn ethereal so that an attack passes directly through them.  With total concentration (meaning no other actions), the bad guys can hold their ethereal form and move at half their normal speed.',
	'The enemies in this group have armor of elemental attunement so that the first time each round they are hit with an elemental type of damage, they become immune to that type of damage until the start of their next turn.  This works for multiple elements at a time.',
	'A magic user in this enemy group casts a barrier globe around himself that has life energy (hit points) of its own.  The caster can cast spells out of the globe, but nothing corporeal (including other magic) can get inside the globe until its life energy has been drained.',
	'Some enemy combatants are armed with multi-shuriken throwers mounted on their arms.  It takes a full round action to reload the shuriken throwers.  All shuriken must be fired at the same target because of the speed at which they leave the arm cannon.',
	'Some enemies wield crossbows that fire a blast of shrapnel in a 15 ft cone.  While indiscriminant in who they hit with this method, the bad guys enjoy utilizing the range and carnage of these attacks.',
	'The lead enemy in this group has a supernatural ability to force push others as an action.  The PCs must pass a test of reflexes or balance to remain in the same space.  Otherwise they are pushed up to 20 ft away from the enemy.'
];

// Trap Arrays
var trapArray = [
	'Mechanical Alarm',
    'Magical Alarm',
    'Flooding Room',
    'The Wave Room',
    'Mechanical Sleeping Gas',
    'Mechanical Nausea Gas',
    'Mechanical Laughing Gas',
    'Mechanical Confusing Gas',
    'Magical Sleeping Gas',
    'Magical Laughing Gas',
    'Magical Confusing Gas',
    'Evil Cloning Magic',
    'Magical Nausea Gas',
    'Dazzling Magic Field',
    'Magnetic Room',
    'Entangling Vines',
    'Two Chains',
    'Magical Darkness',
    'Strobe Lights',
    'Quicksand',
    'Pleasure and Peace',
    'Mix the Potions Carefully',
    'Anti-Magic Field',
    'Illusion Room',
    'Bloodlust Magic Field',
    'Soundproof Room',
    'Teleporter Room',
    'Reflective Damage Field',
    'Spinning Floor Rings',
    'Dimension Hop',
    'Illusory Bridge',
    'Zone of Fear',
    'Living Ink on the Page',
    'Living Paint on the Canvas',
    'Difficult Terrain',
    'Gale Force Winds',
    'Endless Hallway',
    'Riddle Door',
    'Riddle Door',
    'Riddle Door',
    'Anti-Jenga',
    'Riddle Door',
    'Almost Crushing Room',
    'Sneezing Powder',
    'Riddle Door',
    'Riddle Door',
    'Gender Polymorph',
    'Tipping Room',
    'Random Gravity Room',
    'Animal Polymorph',
    'Frictionless Room',
    'No Gravity Room',
    'Leg Traps',
    'Trip Wire and Ambush',
    'Repelling Force',
    'Take the High Road',
    'Obscuring Smoke',
    'Earthquake!',
    'Glitterdust Bomb',
    'My Sword is Sentient',
    'Netted Like Fish',
    'Glue Bombs',
    'Water Pit',
    'Radiation Room',
    'Guillotine Door',
    'Snakes on a Plane',
    'It\'s Obviously Trapped',
    'Spider Webbed Chasm',
    'Hollow Boulder',
    'Broken Traps',
    'Spider Webs',
    'Rolling Rubble',
    'Falling Stalactites',
    'Greasy Floor',
    'Ye Olde Trampoline',
    'Caltrop Room',
    'Flammable Pit',
    'Poison Smoke',
    'Rolling Spiked Log',
    'Murder Holes',
    'Boomerang Attacks',
    'Bouncing Balls of Force',
    'Combat Practice Room',
    'Stay on the Path!',
    'Swinging Log',
    'Poisoned Lock',
    'Scimitars in the Walls',
    'Illusory Wall',
    'Gelatinous Cube',
    'Pitfall to Spikes',
    'Falling Statues',
    'Acidic Fungus',
    'Mechanical Arrows',
    'Collapsing Ceiling',
    'Razor Wire',
    'Mechanical Explosion',
    'Magical Explosion',
    'Mechanical Poison Gas',
    'Magical Bolts of Force',
    'Crushing Walls',
    'Which Lever to Pull?',
    'Three Levers',
    'Life Draining Field',
    'Magical Poison Gas',
    'Floor of Needles',
    'Move the Platforms',
    'Swinging Blades',
    'Magical Ice Explosion',
    'Magical Acid Explosion',
    'Mechanical Acid Explosion',
    'Living Statues',
    'Greased Floor to Pitfall',
    'Timed Blasts of Fire',
    'Cheval de Frise',
    'Hungry Shadows',
    'Burning Oil',
    'Conveyor Belt',
    'Rolling Boulder',
    'Grasping Fists',
    'Shrapnel Explosion'
];

var trapDescriptionArray = [
    'A pressure plate on the floor just inside the door releases a blast of air through a horn that alerts the bad guys of the PC presence.  A group of minions come to investigate what triggered the alarm within 1d4 rounds.',
	'When the PCs open the door to enter the next room, a magical bell sounds warning the bad guys of the PC presence.  A group of minions come to investigate what triggered the alarm within 1d4 rounds.',
	'Once the PCs fully enter the room, the entry door closes and the room begins to flood with water which takes 2d4 rounds to fill.  All within the room must either unlock one of the doors or disable the device that allows the water inside.',
	'Every round a huge bucket of water is released from one wall of the room causing a wave to flow over the whole room.  Characters must make successful balance tests or else they fall prone and move 10 ft away from the wall.',
	'Sleeping gas leaks into the room from a spout which spreads in a 5 ft radius each round.  Characters must pass a fortitude test to not fall asleep every time they enter or re-enter the gas.',
	'Nausea gas leaks into the room from a spout which spreads in a 5 ft radius each round.  Characters must pass a fortitude test or else be sickened every round they are in the gas.',
	'Laugh gas leaks into the room from a spout which spreads in a 5 ft radius each round.  Characters must pass a fortitude test or else do nothing but laugh every round they are in the gas.',
	'Confusing gas leaks into the room from a spout which spreads in a 5 ft radius each round.  Characters must pass a fortitude test or else take a random action every round they are in the gas.',
	'A 10 ft cloud of sleep gas appears and spreads in a 5 ft radius each round.  Characters must pass a fortitude test each round or else fall asleep while they are in the gas.  The gas lasts 2d4 rounds.',
	'A 10 ft cloud of laughing gas appears and spreads in a 5 ft radius each round.  Characters must pass a fortitude test each round or else do nothing but laugh while they are in the gas.  The gas lasts 2d4 rounds.',
	'A 10 ft cloud of confusing gas appears and spreads in a 5 ft radius each round.  Characters must pass a fortitude test each round or else take a random action each round they are in the gas.  The gas lasts 2d4 rounds.',
	'As the PCs fully enter the room, a magical scan of their bodies take place.  In 1d4 rounds, clones of the PCs appear in the room and attempt to incapacitate the PCs.  The clones have the same abilities and attacks as the PCs.',
	'A 10 ft cloud of nausea gas appears and spreads in a 5 ft radius each round.  Characters must pass a fortitude test each round or else be sickened each round they are in the gas.  The gas lasts 2d4 rounds.',
	'A beautiful statue stands in the center of the room.  It requires a significant feat of willpower each round to avoid being dazzled (meaning the PC takes no actions).  Other characters besides the PCs seems unaffected.  Why would that be?',
	'Strong magnets pull metal to the wall or ceiling nearest each character who must pass a difficult feat of strength each round to avoid having their metal belongings stuck to the wall (and possibly themselves if they are wearing armor).',
	'Strong vines grow from multiple places around the floor and attempt to entangle any within their 5 ft reach.  Avoid them, cut them down, or escape their clutches!',
	'Large chains hang from two opposite walls and must be pulled together to the center of the room with a difficult test of strength to release the lock on the exit out of the room.  Once the chains are released the exit door slams shut again and locks.',
	'As soon as the door is opened to this room, the PCs see nothing but magical darkness within the room itself.  Somewhere inside the room is an obsidian crystal that shines with black light causing the darkness, but where is it?',
	'All movement is obscured in a magically darkened room as a strobe light goes off at the end of each turn.  Further complicating things are the oddly spaced mirrors.  Is that the real bad guy or only a mirror image?',
	'The area is filled with quicksand.  Characters must pass a strength or reflexive test to not get stuck each round they are in the quicksand.  While stuck, they sink 1 foot per round.',
	'A bath of hot springs calls out to each character when they enter the room.  A failed test of willpower causes the character to seek to sit in the water relaxed and happy for the rest of time (or at least until they die of thirst and starvation).  If removed from the water, they get a new check.',
	'Five potions sit on a table by a locked door with directions on how to mix them.  It takes 5 rounds of concentrated work to mix them.  Pouring the solution on the next door unlocks it.  Meanwhile, a group of minions attack.',
	'A statue of a wizard with a broken staff sits in the middle of the room emitting an anti-magic field.  Magic items must pass a magical strength test to function within the room and all spells cast must also pass a magical strength test.',
	'The visual image of each character in the room is placed on another character in the room.  That kobold may be your buddy, but you might not notice at first!',
	'A statue of a gladiator sits in the middle of the room emitting a magic field.  Each creature must pass a willpower test to act normally within the room each round or else they will move toward and attack the nearest creature.',
	'Magically, no sound is transmitted in this room.  You\'ll never hear those bad guys sneaking up behind you!',
	'As PCs attempt to open a door with a sigil of an exploding gate above it, they are teleported to a random previous room in the structure.',
	'While within this room, there is an 80% chance that all damage done to a single target will be reflected to a random target within 10 ft.  If no other target is within 10 ft, the damage hits the intended target.',
	'Concentric rings 5 ft wide radiate from the center of the room.  Each ring spins 5 ft in the opposite direction as adjacent rings at the beginning of each turn, not round.  (Thinking of them as concentric squares may be easier if you are using a square grid.)',
	'Any character trying to exit the room is teleported back to the entrance of the room.',
	'An old rope bridge sways over a vast pit where characters must pass a balance test to stay on the bridge or else fall.  If they fall, they only drop 5 ft down as the pit is an illusion.  Characters may pass an intuition test to see the illusion.',
	'Within this room each character must pass a difficult test of willpower each round or else they attempt to flee the room at maximum speed.',
	'An old tome lies open on a pedestal.  The first character to attempt to read the book is sucked into the pages if they fail a willpower test.  The only way out is to have a character read the passage in the book which takes 2d4 rounds.',
	'A painting hangs on the wall.  Anyone within 10 ft is sucked into the picture with a dragon if they fail a willpower test.  The only way out is to battle the painted dragon or have someone outside paint a door for the trapped person to come out.',
	'The terrain is... well... difficult.  Rocks and possibly scattered jetsam, flotsam, wreckage, or ruined furniture make it difficult to move normally through the area.',
	'Every round a gale force wind comes from a random direction knocking down all who fail a reflexive, acrobatic, or strength type test.',
	'An endless hallway stretches out before the PCs.  They must pass a willpower test to see the illusion and finally reach the end of the hall.',
	'A locked door will only open with the answer to the riddle: "Tall, I am young.  Short, I am old.  With life do I glow, and wind is my foe.  I provide guidance in the darkest hour, while flint and steel provide my power.  What am I?"  -Answer: CNLADE',
	'A locked door will only open with the answer to the riddle: "I love to fall but cannot climb.  I enact the sands of time.  First scattered high, then gathered low  Upon a bed, I do go.  What am I?"  -Answer: RVEIR',
	'A locked door will only open with the answer to the riddle: "I\'m rarely touched but often held.  If you have wit, you use me well.  I\'m sharper than the sharpest blade, yet can mend the heart of the fairest maid.  What am I?"  -Answer: TGNUOE',
	'A stack of long rectangular blocks lie on a pedestal.  They must be stacked like the pattern over the door for the door to unlock.  It takes 5 rounds to stack them correctly, but flying creatures in the room try hard to knock down the stack each round.',
	'A locked door will only open with the answer to the riddle: "I have roads without travelers, forests without trees, cities without homes, and waterless seas.  What am I?"  -Answer: PMA',
	'Walls move in from all sides as if to crush the occupants of the room, and a red button on one wall temporarily resets the walls but doesn\'t unlock the any of the doors which are all locked.  After a reset, the walls begin crushing again in just a few seconds.  To get out of the room, the walls must be allowed to move in as far as they can without being reset.  Despite appearances, the walls leave a small safe zone in the center of the room so the occupants don\'t actually get crushed.  They just think they will be.',
	'Sneezing powder floats in the room causing those who fail a fortitude test to sneeze when they exert themselves (attack, cast, move, etc.) which gives them a 20% miss chance.',
	'A locked door will only open with the answer to the riddle: "Without moving, rivers I cross.  Only time produces in me loss.  Under great stress, I may crack, but I carry the burdens of many men upon my back.  What am I?"  -Answer: BDIGRE',
	'A locked door will only open with the answer to the riddle: "I have a tail.  I have a head.  I have no body.  In fact, I\'m dead.  No life in me, but life needs me.  I spin and flip with golden greed.  What am I?" -Answer: GLOD CION',
	'A statue stands in the middle of the room with the left half male and the right half female.  An arcane inscription runs along the base.  Any character who reads the inscription is morphed into the opposite gender for 1d4 days.',
	'The floor tilts in a random direction each round causing all to slide 20 ft.  With a successful feat of balance, a character may only slide 10 ft.',
	'The direction of gravity randomly changes at the beginning of each round.  Falling with the gravity occurs at that time as well before each character takes their turn.',
	'A statue stands in the middle of the room with the left half a goat and the right half a man.  An arcane inscription runs along the base.  Any character who reads the inscription is morphed into a local animal for 1d4 minutes.',
	'The room has no friction.  The first direction a character moves forces them to continue moving in that direction until they hit an object to stop them (like a wall or another creature).',
	'The room has no gravity.  The first direction a character moves (including up or down) forces them to continue moving in that direction until they hit an object to stop them (like a wall or creature moving in the opposite direction).',
	'Several tiles on the floor flip over when stepped on.  This reveals a small hole and traps the character\'s leg with their own weight on the flipped tile.',
	'A trip wire waits for the first character to pass the middle of the room.  At that point, an ambush by minions begins.',
	'The exit is physically difficult to get to as PCs walk towards as a repelling force pushes back against them.  20 ft from the door is difficult to reach.  10 ft from the door is very difficult to reach.  Getting adjacent to the door is nearly impossible.  The repelling magic can be shut off from a different location in the room.',
	'The exit is 30 ft high on the opposite wall.  Climbing tests are needed to avoid false haldholds and maintain a grip on real handholds.  Of course, the minions don\'t attack until the PCs are half-way up the wall and climbing for the exit.',
	'An obscuring mist permeates the room providing a 20% miss chance for all attacks and partial concealment for all in the room.  The mist comes from four mechanisms spread about the room.',
	'The room is equipped with an earthquake maker just for this room.  It shakes the whole room at the start of every character\'s turn.  Every turn, each occupant must pass a balance test or fall prone.  This trap is even better when the minions attack!',
	'Upon entering the room, a glob of sticky glitter is launched at each character.  If hit, they are outlined in glowing glitter for all to see for the next 2d4 rounds.',
	'Upon entering the room, all weapons become sentient with arrogant and lazy attitudes.  They don\'t really want to be wielded, and it takes a full round action to convince them to attack one time.  Weapons lose sentience upon leaving the room.',
	'Upon entering a 10 ft by 10 ft square in the center of the room, a giant net pulls any who are in that square 30 ft up into the air.  You can cut them out, but it\'s a long fall!',
	'Balls of flue launch from holes in the wall toward the PCs which explode in a 5 ft radius.  Characters must pass a reflexive or acrobatic test or be stuck in the glue until a successful strength test is made to move through the glue.',
	'A 10 ft by 10 ft false floor drops any who walk on it to a deep pit of water below.  Those who fall in must make successful swim tests or begin to sink.',
	'Heavy radiation lingers in the room.  For every round of exposure, characters will take 1d4 rounds of damage, but the damage doesn\'t start until 1d4 rounds after first exposure.  The source of the radiation can be discovered and shielded.',
	'The first character to pass through a doorway has a giant guillotine blade dropped on them.  It resets itself each round.',
	'Two-dimensional fire elemental snakes can only attack when a creature is on the same 2D horizontal plane as they are, namely the floor.  Fly, swing across on a rope, or just keep jumping!',
	'The exit door is obviously trapped with a fiery explosion.  The real trap is a 20 ft radius explosion centered on the entrance, not the exit door where the PCs think.  PCs may believe they disarmed the trap, but still miss the real trap.  Anyone standing back by the entrance while the exit door is being disarmed may be hit with the explosion.',
	'Sticky spider webs string across a chasm requiring excellent climbing skills.  The webs in the middle of the chasm are greased and require a second check in the same round to avoid slipping off and falling 100 ft to the bottom.',
	'Upon entering the room, a small door on the wall opens to reveal a ramp and deep rumbling sound.  A giant boulder is coming with nowhere in the room to shelter!  Once it hits the characters in the room, it shatters to reveal a swarm of angry bees inside.',
	'The room is full of already triggered traps.  Once PCs leave the room, they all reset themselves and go off if the PCs come back this way.',
	'Faux spider webs string across the room hindering normal movement.  The strings are soaked in oil so that if lit, the room becomes a blazing inferno for 1d4 rounds.',
	'The room tilts back and forth each round sending rubble flying at all in the room.  Balance tests are needed to keep from falling over and acrobatic tests are needed to dodge the rubble which causes damage if it connects with a creature.',
	'Stalactites or other similar projectiles fall randomly throughout the room.',
	'A greasy floor requires feats of balance to prevent falling prone each round and reduces movement.  Attacking or casting spells takes a feat of balance as well.  Meanwhile, enemies lob 5 ft radius firebombs from balconies above.',
	'An old trampoline hangs suspended above a seemingly bottomless pit.  Characters can acrobatically jump to the opposite ledge using the trampoline, but heavy characters may rip it and fall through to the hidden spikes below.',
	'Caltrops cover the ground in this room.',
	'A 10 ft by 10 ft false floor drops any who step on it down to a pit of liquid 20 ft below.  In 1d4 rounds after a character falls in the pit, a small door opens on the side of the pit and a torch falls out which ignites the liquid within the pit.  Yeah, it\'s flammable.',
	'Ten small holes in the floor allow noxious smoke to travel up into the room from pots over fires in a hidden room below.  Any who inhale the smoke must make a fortitude test each round or become sickened with pain and take damage for that round.',
	'The room or hall is slanted and a giant log with spikes sticking out of it is revealed and released from the top while simultaneously the entry door shuts and locks.  There are a few small alcoves in which to hide from the trap if you can make it there in time.',
	'Murder holes line the walls.  Enemies stand behind the walls and attack with spears, halberds, or arrows.  How can the PCs attack the enemies behind the wall?  And how did those bad guys get behind the wall in the first place?',
	'Boomerangs shoot from the wall attacking every creature in a 20 ft line twice.',
	'Basketball sized balls of force float in this room.  They can be struck to have them move up to 40 ft.  For every 10 ft they move after being struck, they deal more damage to whatever they hit as they build up more force.  They will bounce off walls and objects after hitting if they still have more movement left.',
	'Flails are attached to rotating logs spread throughout the room.  Avoid them or take damage.',
	'A narrow, convoluted path shines with a pale yellow light showing the way through the room.  If characters move off the path, they receive a jolt of electricity.  Either shut down the electric grid or acrobatically stay on the path.',
	'A giant log on chains swings across the room knocking down and damaging anyone who fails a reflex save.  The log resets itself on either side of the room so that it swings every other round.',
	'A difficult lock on a door has a hidden poison-tipped pin that triggers when anyone tries to open or unlock the door.',
	'Huge spring-loaded scimitars strike out from the wall each round at varying heights.  A successful acrobatics test is needed to pass unharmed.',
	'An illusory wall impedes the PCs progress.  They must either deactivate the wall or pass a very difficult test of insight to recognize the illusion.  Otherwise, attempting to pass through the wall causes mental pain and actual damage.',
	'A decayed corpse, armor, and weapons lay invitingly in a 10 ft by 10 ft area in the room.  Characters who approach are absorbed into a gelatinous cube which the pursues the next closest character.  Characters inside the cube take continuous acid damage.',
	'A 10 ft by 10 ft square is really a false floor that plunges characters to a pit of spikes below when they step anywhere in the square.',
	'Partially destroyed large statues line the room and are pushed over by minions as PCs enter the room.',
	'Acidic fungus covers one wall while the opposite wall is spring-loaded and violently thrusts everyone and everything in the room toward the fungus each round.  Successful acrobatic tests are needed to avoid the fungus.',
	'Arrow slits line the wall and fire at the PCs as they cross the room.  The slits vary in height and in the distance between them.  It would take a feat of acrobatics to avoid them, but surely they will eventually run of arrows, right?',
	'The sky is falling!  When the PCs reach the middle of the room, gears in the wall pull out supports in the ceiling causing it to collapse under its own weight and crush any characters below.',
	'Ultra sharp razor wire is strung about the room.  It is gossamer thin, hard to notice, and deadly.',
	'A small decorative box sits over the door to the next room.  When the door opens, it sends an explosion of fire in a 30 ft cone.',
	'A hard to see symbol sits over the door to the next room.  Every time the door opens, it sends an explosion of fire in a 30 ft cone.',
	'Poison gas leaks into the room from a spout which spreads in a 5 ft radius each round.  Characters must pass a fortitude test or else take damage every round they are in the gas.',
	'A crystal atop a pillar sits in the room and each round fires an unerring bolt of force to a single random target within the room and within line of sight.  It cannot distinguish between friend and foe.',
	'Once the PCs close the door to this room, the doors lock and the walls slowly move in to crush all within the room.  It takes 1d4+4 rounds for the walls to finish crushing.  It takes another 2d4 rounds for the walls to reset itself.',
	'Three levers stand before a locked door.  An inscription reads, "Pull the right one to continue your quest.  You might blow up so guess your best."  Roll 1d6.  On a 5 or 6, the door unlocks.  Otherwise, a 10 ft radius explosion emanates from the levers.',
	'Three levers must be pulled in the right order to unlock the door.  An inscription reads, "Three times they fall, and you\'re out with a zoom.  In the wrong order, and you\'ll get a boom."  Roll 1d6.  On a 6, the door unlocks.  Otherwise, a 30 ft cone of fire emanates from the levers.',
	'A small obelisk sits in the center of the room with thick drops of blood running down its side.  Any living being within the room has a small amount of their life force drained away each round.',
	'A 10 ft cloud of poison gas appears and spreads in a 5 ft radius each round.  Characters must pass a fortitude test each round or else take damage while they are in the gas.  The gas lasts 2d4 rounds.',
	'Thin ledges go around the room which provide the only way to avoid a floor of razor-sharp needles and small spikes.',
	'The room appears to have no floor over a bottomless pit.  There are four floating platforms which can be moved in 3D using a set of controls near the entrance.  The controls do not move with the platform, so how will the last man cross?  While not really bottomless, the floor is far enough away that falling would cause significant damage.',
	'Huge scythe blades swing back and forth, impeding the progress of the PCs.  Avoid them or be sliced and diced!',
	'A small diamond sits in the middle of the floor.  If approached within 10 ft, a 20 ft radius explosion of ice is emitted from the diamond.  The diamond has only one charge and then dissolves.',
	'A small emerald sits in the middle of the floor.  If the emerald is moved quickly or violently (like bouncing in a bag of gems on the belt of a PC who jumps), a 20 ft radius explosion of acid is emitted from the emerald.  The emerald has only one charge and then dissolves.',
	'A small box sits above the exit from the room.  If the door is opened, a 15 ft cone of acid is emitted.  The box has three charges.',
	'Five statues line each side of the room.  Arcane writings are scrawled on the base and legs of each statue.  If approached or inspected, 2d4 statues come to life and attack any characters within the room.',
	'The gently sloping floor is greased and funnels any who fumble to a spiked pit in the center of the room.',
	'Dragon statues line the room and send out a 15 ft cone of fire every few seconds.  Can you avoid the fire with a feat of acrobatics?',
	'Large wooden stakes sticks out of the ground to deter quick movement or attacks.  Characters must attack around, over, or through the spikes.  They also provide partial cover.  Don\'t get shoved into the pointy end!',
	'Large sconces throw bright light onto large floating globes that slowly move back and forth across the room.  If a shadow from a globe hits someone, they must pass a reflex test or take damage as the shadows consume organic matter.',
	'Vats of burning oil are dumped on the PCs when they attempt to leave the room.  The oil runs down a ramp with a small wall of rock at the end causing the oil to splash out in a 15 ft cone from the door.  How many vats of burning oil are there?',
	'The floor pulls each thing in the room 30 ft towards a wall of spikes at the beginning of each round.  Characters can pass a reflex test to take only half damage from the spikes if they hit the spiked wall.',
	'A giant door slides up revealing a ramp and a deep rumbling sound.  A huge boulder is coming to crush all in its path!  Only narrow spots exist to avoid the boulder.  Will everyone fit into those small zones of safety?  Will they make it there on time?  Are there multiple boulders?',
	'Large arms and hands reach from the wall to grasp any character within 10 ft of the wall who must pass a strength test to break free or reflex test to avoid them in the first place.  Hands deal damage each round they enclose someone.',
	'Upon hitting a pressure plate randomly in the floor, an explosion of shrapnel shoots across the room at leg height.  Any character who fails a reflex test has shrapnel in their legs that deals damage and reduces their speed for 2d4 rounds.'
];

var insideSecretArray = [
	'Another Room',
	'Stairs',
	'Saferoom',
	'Another Room',
	'Random Event',
	'Random Event',
	'Loot',
	'Loot',
	'Trap',
	'Information',
	'Information',
	'A Short Cut'
];

var cardArray = [
    '2h',
    '3h',
    '4h',
    '5h',
    '6h',
    '7h',
    '8h',
    '9h',
    '10h',
    'Jh',
    'Qh',
    'Kh',
    'Ah',
    '2d',
    '3d',
    '4d',
    '5d',
    '6d',
    '7d',
    '8d',
    '9d',
    '10d',
    'Jd',
    'Qd',
    'Kd',
    'Ad',
    '2s',
    '3s',
    '4s',
    '5s',
    '6s',
    '7s',
    '8s',
    '9s',
    '10s',
    'Js',
    'Qs',
    'Ks',
    'As',
    '2c',
    '3c',
    '4c',
    '5c',
    '6c',
    '7c',
    '8c',
    '9c',
    '10c',
    'Jc',
    'Qc',
    'Kc',
    'Ac',
    'Joker 1',
    'Joker 2'
];

var cardArray2 = [];

cardArray2[0] = new Image();
cardArray2[0].src = "images/2h.png";

cardArray2[1] = new Image();
cardArray2[1].src = "images/3h.png";

cardArray2[2] = new Image();
cardArray2[2].src = "images/4h.png";

cardArray2[3] = new Image();
cardArray2[3].src = "images/5h.png";

cardArray2[4] = new Image();
cardArray2[4].src = "images/6h.png";

cardArray2[5] = new Image();
cardArray2[5].src = "images/7h.png";

cardArray2[6] = new Image();
cardArray2[6].src = "images/8h.png";

cardArray2[7] = new Image();
cardArray2[7].src = "images/9h.png";

cardArray2[8] = new Image();
cardArray2[8].src = "images/10h.png";

cardArray2[9] = new Image();
cardArray2[9].src = "images/Jh.png";

cardArray2[10] = new Image();
cardArray2[10].src = "images/Qh.png";

cardArray2[11] = new Image();
cardArray2[11].src = "images/Kh.png";

cardArray2[12] = new Image();
cardArray2[12].src = "images/Ah.png";

cardArray2[13] = new Image();
cardArray2[13].src = "images/2d.png";

cardArray2[14] = new Image();
cardArray2[14].src = "images/3d.png";

cardArray2[15] = new Image();
cardArray2[15].src = "images/4d.png";

cardArray2[16] = new Image();
cardArray2[16].src = "images/5d.png";

cardArray2[17] = new Image();
cardArray2[17].src = "images/6d.png";

cardArray2[18] = new Image();
cardArray2[18].src = "images/7d.png";

cardArray2[19] = new Image();
cardArray2[19].src = "images/8d.png";

cardArray2[20] = new Image();
cardArray2[20].src = "images/9d.png";

cardArray2[21] = new Image();
cardArray2[21].src = "images/10d.png";

cardArray2[22] = new Image();
cardArray2[22].src = "images/Jd.png";

cardArray2[23] = new Image();
cardArray2[23].src = "images/Qd.png";

cardArray2[24] = new Image();
cardArray2[24].src = "images/Kd.png";

cardArray2[25] = new Image();
cardArray2[25].src = "images/Ad.png";

cardArray2[26] = new Image();
cardArray2[26].src = "images/2s.png";

cardArray2[27] = new Image();
cardArray2[27].src = "images/3s.png";

cardArray2[28] = new Image();
cardArray2[28].src = "images/4s.png";

cardArray2[29] = new Image();
cardArray2[29].src = "images/5s.png";

cardArray2[30] = new Image();
cardArray2[30].src = "images/6s.png";

cardArray2[31] = new Image();
cardArray2[31].src = "images/7s.png";

cardArray2[32] = new Image();
cardArray2[32].src = "images/8s.png";

cardArray2[33] = new Image();
cardArray2[33].src = "images/9s.png";

cardArray2[34] = new Image();
cardArray2[34].src = "images/10s.png";

cardArray2[35] = new Image();
cardArray2[35].src = "images/Js.png";

cardArray2[36] = new Image();
cardArray2[36].src = "images/Qs.png";

cardArray2[37] = new Image();
cardArray2[37].src = "images/Ks.png";

cardArray2[38] = new Image();
cardArray2[38].src = "images/As.png";

cardArray2[39] = new Image();
cardArray2[39].src = "images/2c.png";

cardArray2[40] = new Image();
cardArray2[40].src = "images/3c.png";

cardArray2[41] = new Image();
cardArray2[41].src = "images/4c.png";

cardArray2[42] = new Image();
cardArray2[42].src = "images/5c.png";

cardArray2[43] = new Image();
cardArray2[43].src = "images/6c.png";

cardArray2[44] = new Image();
cardArray2[44].src = "images/7c.png";

cardArray2[45] = new Image();
cardArray2[45].src = "images/8c.png";

cardArray2[46] = new Image();
cardArray2[46].src = "images/9c.png";

cardArray2[47] = new Image();
cardArray2[47].src = "images/10c.png";

cardArray2[48] = new Image();
cardArray2[48].src = "images/Jc.png";

cardArray2[49] = new Image();
cardArray2[49].src = "images/Qc.png";

cardArray2[50] = new Image();
cardArray2[50].src = "images/Kc.png";

cardArray2[51] = new Image();
cardArray2[51].src = "images/Ac.png";

cardArray2[52] = new Image();
cardArray2[52].src = "images/JK1.png";

cardArray2[53] = new Image();
cardArray2[53].src = "images/JK2.png";

var cardCount = 0;

var advCat = [
    'The Fey Abductions - Those pesky fey are up to no good again. They are encroaching upon \"the real world\" with mischievous intent and perhaps even malice. Children in and around the small village of Kathlas are being kidnapped by fey creatures. However, not all fey are bad. Can you investigate and navigate the complexities of the fey court to ascertain the true motives for these incursions, put them to an end, and save the children?',
    'The Attacking Horde - While for years there have only been small border skirmishes, the goblin tribes (or orcs or barbarians or space bugs) are now mounting full-out assaults on the smaller villages. Their incursions grow in number and daring on nearly a daily basis and have now attracted the attention of the larger forms of government in the region. Maybe you\'re working for the government or maybe you\'re the lone wolf crew trying to stop the goblins in your own way because you think the government is not doing enough. What is the ultimate goal of the Horde, and how can they be stopped?',
    'Slay the Beast - A great and dangerous beast has been prowling the area. The locals believe that the creature has a lair somewhere nearby but have been unable to discover it thus far. Is this beast simply acting out of instinct, or is it intelligent? Is it being territorial, or does it have a wider agenda? For flavor purposes, this beast could be a dragon with a golden hoard, a sea serpent with a penchant for merchant ships, or a giant elemental escaped from another plane of existence.',
    'Grand Larceny - Yes, officially the item in question belongs to them, but for reasons of regional security, you must obtain that item. Maybe it\'s so that your region can control the item. Maybe it\'s to stop the other region from using it against you. Maybe it\'s because you know that a third party has its eye on the prize as well and you have to beat them to the punch. Whatever the purpose, you need to get in, grab the item, and safely bring it back with a minimum amount of damage and casualties. Stealth is far preferred to brute force.',
    'The Sky Collision - Long ago the world was sundered into great floating land masses perpetually moving through the gravity of the molten core and the whims of wind currents. There is less light the closer you get to the molten core, and the lands of light and dark are constantly at odds, both populated by polar opposite citizens who use powerful airships to travel to and fro the floating continents. One hundred years ago, the Wind Mappers predicted that four of the major islands would collide due to wind patterns and were scoffed at. Two years ago, the islands came in view of one another. In two weeks, the islands are scheduled to collide. As they crumble, all citizens will fall through the sky to darkness and the molten core below. Worse yet, the denizens of the dark want to see this deathblow dealt to the kingdoms of light. Can you stop the great sky collision?'
];

var advChoice = 0;

var complicationArraySky = [
	'A group of religious fanatics say this doom is deserved.  They are encouraging the citizenry to stay in their homes rather than flee the floating islands and accept their fate.',
	'Two of the floating islands have been in an intense trade war for the past 50 years.  They have extreme difficulty putting their prejudices aside to help one another survive.',
	'Airships are only float through non-magical means as great blimps and are navigated by sails and the wind alone.  Evacuation of the floating islands is slow and more dangerous the closer the islands get to one another.',
	'A group of idealists have been proclaiming that there is no way the governments of each island would allow the islands to collide.  This claim has been endorsed by each island\'s government to prevent panic in the citizens, but as a result, evacuations have not begun.',
	'A king on one of the floating islands has been assassinated throwing the whole island into turmoil.',
	'Usually predictable wind patterns are disrupted more and more the closer the islands get to one another.  This hinders any evacuation efforts and causes travel to be more dangerous.'
];

var encounterArraySky = [
	'Looters in one town say the end is nigh so they may as well go down eating all the pie.  Can you stop their criminal behavior?',
	'A group of vigilantes are hunting down suspected criminals and chaining them up in various locations around the islands.  They hope to leave them for dead when the islands collide.  Can you stop the actions of the vigilantes and free the potentially innocent people?',
	'One of the richest citizens owns a whole fleet of airships but is refusing to allow their use for evacuations.  Instead he is selling tickets off the islands at absurd prices.  Can you secure his help for the average citizenry?',
	'A group of denizens of the dark are attacking a major airship dock in hopes of destroying as many airships as possible.  Can you save the airships?',
	'While traveling from island to island in your peace-keeping capacity, a group of great sky beasts attacks your airship.  Can you survive the attack and still have a sky-worthy vessel?',
	'A group of sky pirates from one of the smaller islands not in danger has made the long journey here to prey upon the victims of this tragedy.  Can you stop them?',
	'A fight breaks out at an airship dock as panicked citizens not allowed on an evacuation airship because of lack of physical space begin fighting for a spot aboard.  Can you calm the situation and prevent further bloodshed?',
	'One of the smaller and poorer floating islands that is not in danger has banned refugees from the four major islands.  Can you convince them to help?',
	'A group of tug ship captains are gallantly trying to change the course of one of the islands when they are set upon by denizens of the dark.  Can you protect the tug ships and help them succeed?',
	'The engineers of one floating island are convinced that if they sever a large chunk of the island, the change in weight will be enough to save the remaining portion of the island.  Can you help them and deal with the consequences of their actions?',
	'One island kingdom has conscripted are able-bodied citizens to sew giant sails in an effort to change the course of one of the islands.  A complex network of monolithic towers are being built to hold the sails, but it will take a brave and talented crew to get the sails in place especially when the denizens of the dark attack.  Can you set the giant sails successfully while repelling the attack?',
	'The Academy of Wizards thinks they may be able to temporarily change the weight of one island to stop it from colliding, but the spell will take massive amounts of feathers from a rare wondrous and sentient creature.  Only one such creature is known to exist.  Can you find it and secure the feathers necessary for the spell?',
	'Denizens of the dark have been conducting air raids on one island where they drop giant boulders close to the edge of the island in hopes of making the collision even more destructive when it happens.  Can you stop them and reverse their damage?',
	'Denizens of the dark have been discovered tunneling into the bottom of one island trying make sure the island breaks apart when the collision happens.  Can you make your way through the trap-laden tunnels to stop the denizens from digging further?',
	'Denizens of the dark come riding giant sky beasts who they use as battering rams to push the islands closer to their destruction.  Can you stop them?',
	'Denizens of the dark have moved a colossal air fortress to a spot between two islands and attached humongous grapples and chains to them.  Gigantic gears are pulling the two islands closer together to ensure their doom.  Can you infiltrate the air fortress and put an end to this?'
];

var climaxArraySky = [
	'The four island kingdoms have agreed that their best chance of survival is to detonate a huge explosion in the air between all the islands which should push the islands just far enough that they will miss colliding (or only graze each other).  Can you fight through the forces of the denizens of the dark to make this happen and make it back safely?',
	'The four island kingdoms have agreed that their best chance of survival is to have the wizards of each island work in concert to create a whirling vortex in the air between the islands so that the islands will continue to orbit the vortex without colliding.  Can you stop the denizens of the dark who attack all the islands simultaneously to disrupt this spell?',
	'The four island kingdoms have agreed that tipping the axis of three islands will allow the islands to collide in a fashion where they may actually settle in a tetrahedron shape.  While only one island would be habitable, it would be well protected.  Can you set and correctly time the explosions necessary to achieve this while being harassed by the denizens of the dark and making sure citizens are safely transported to the one habitable island?',
	'A spell has been discovered that will transport you through time back to 100 years ago.  Can you convince the kingdoms of that time to act immediately to prevent the collisions before the spell wears off and sucks you back to the present?'
];

var complicationArrayFey = [
	'The fey are only kidnapping children who have committed crimes.',
	'The fey usually target infants who are returned two weeks later having aged ten years.',
	'A local religious sect of strong political influence worships and serves the fey.  While they have outwardly denounced the acts of kidnapping, they still are allies to the fey.',
	'The fey abduct teenagers only to return them two weeks later.  Upon their return, the teenagers are wise and knowledgeable beyond their years but very cold and dispassionate.',
	'Each abducted child is ransomed for a seemingly random and meaningless item.  Is there a connection between the items?',
	'One parent is always a willing accomplice in the fey abduction of his or her child but cannot or will not say why.'
];

var encounterArrayFey = [
	'Another kidnapping by the fey is happening right now.  Can you stop the kidnapping?',
	'The fey have decided to divert the waters of the local river into their realm.  The lack of water is an immediate danger to both health and commerce but probably a cover for further abductions.  Can you get the river flowing again?',
	'The locals speak of \"thin places\" where the boundary between our world and others blurs.  Can you discover a way into the fey lands?',
	'Meet the Queen of the Court of Untarnished Light, Alu\'thurea.  She proclaims to seek to stop the other fey courts from interfering with the world of mortals.  She asks your help in completing some tasks for her before she can help you in your quest.  Can you determine her role in these incursions and secure her help?',
	'Meet the Queen of the Court of Ataxia, Gi\'nawtha.  If you entertain her by passing her Tests of Worthiness, she may help.  If you fail, she’ll find her entertainment elsewhere.  She is just as happy with the resulting chaos either way.  Having her as an ally may or may not actually help the cause.  Can you determine her role in these incursions and secure her help?',
	'Meet the Queen of the Perpetual Eclipse, La\'mihya.  She is deep into a cold war with the Court of Untarnished Light and the most obvious culprit of the child-stealing.  She espouses innocence but would like to see you indebted to her.  Can you determine her role in these incursions and secure her help?',
	'Meet the King of Fey, Ka\'rul\'thei.  An outcast in all courts, he is nonetheless vital to all fey as the progenitor and sustainer of their being.  Might he be willing to help, or does his apathy drown out all else?',
	'You find a lead on the location of the prison where the children are being kept by the fey.  Can you break them out and escort them safely back to the land of mortals?  While this won’t stop the abductions, you will have saved some children and gained more information.',
	'An older child wanders back into town after being abducted.  How did he escape and what can he tell you?',
	'Some of the local villagers have been losing their minds.  It appears to be a physical ailment of some kind and giggling fey have been spotted making sport of the victims.  What can cure this?',
	'A small band of fey spoke about their sorrow over the fate of the children with a local farmer.  To show their remorse, they blessed the farmer\'s crops which are now growing into attacking plants.  Was this intentional?  Can the \"blessing\" be reversed?',
	'Legend tells of a great fey prison that keeps the most evil of all fey locked beneath a volcano.  Is there really a prison?  Is it occupied?  Could this evil being be behind the abductions?  Is this whole encounter just a red herring?',
	'There is a rare herb that fey are averse to being around.  If you could find enough of it, a local seamstress believes she can weave it into the clothing of the children most in danger.  Can you track down the herb?',
	'Anyone who fell asleep after midnight does not wake up the next morning.  Anyone who falls asleep during the day cannot be woken.  They remain in a state of perpetual sleep.  A band of fey dancing around the village seem to be the cause, but everyone who has approached too closely has fallen asleep.  Can you stop them before everyone is put to sleep and the fey have their way?',
	'An encounter is underway between two different fey factions.  Spells fly and weapons clash in and around the village.  Can you keep the village safe and perhaps learn more about the fey in the process?',
	'You need the help of an expert.  Jolaff the Hermit is said to be authority on fey, but no one knows how exactly to contact him.  They only know that he makes his home in a forest populated with dryads, nymphs, and other fantastical creatures.  Can you find Jolaff and will he help?',
	'The brave actions of parents have prevented several abductions over the past few weeks.  One day, all of the children who escaped being kidnapped all go slightly out of their right mind and run away to find their own way to the lands of fey.  Can you prevent these kids from making it to the fey lands?'
];

var climaxArrayFey = [
	'You receive information that firmly points toward the Court of Untarnished Light as the culprit of the abductions.  Confront the Queen and stop her from any future abductions.',
	'You receive information that firmly points towards the Court of Ataxia as the culprit of the abductions.  Confront the Queen and stop her from any future abductions.',
	'You receive information that firmly points towards the Court of the Perpetual Eclipse as the culprit of the abductions.  Confront the Queen and stop her from any future abductions.',
	'You receive information that firmly points towards the King of Fey as the culprit of the abductions.  Confront and stop him from any future abductions.',
	'You receive information that firmly points towards a small band of unaligned fey as the culprits of the abductions.  Confront and stop them from any future abductions.'
];

var complicationArrayGrand = [
	'The location of the item is somewhere inside a well-fortified military installation.',
	'Rumor has it that the item is cursed.  Any who have it in their possession fall under the curse.',
	'The item is a major religious symbol, and its theft will cause great unrest.',
	'There are several fake copies of the item all guarded in separate locations.  Even the guards don\'t know which one is real.',
	'Time is of the essence.  This mission must be completed within the week.',
	'The item is currently owned by a people who are extremely different culturally.  You\'ll stick out like a sore thumb if you\'re not careful.',
	'The item in question is large, cumbersome, and hard to move.',
	'Our region has already been implicated in several theft attempts on the item.  You\'ll be under suspicion wherever you go.'
];

var encounterArrayGrand = [
	'You get intel on the potential location of the item, but is the information legit?  Scout out the place.',
	'Someone has found out your plan to steal the item.  They want to be paid or your party will be sold out to the local authorities.  How will handle this blackmail?',
	'Another adventuring party has just been dispatched to get the item.  Can you stop them from getting there first?',
	'The item is being moved to a more secure location and is in transit.  Can you steal it en route or at least find the new location?',
	'You just found out that you have a man on the inside.  How can you use this to your advantage?',
	'You are being pursued by local authorities for unknown reasons.  How do you avoid capture?',
	'A major ceremony involving the item is taking place soon.  Will this be your chance to swipe the item?',
	'You meet another group interested in acquiring the item.  They are willing to work with you to accomplish the goal and are willing to sort out who gets the item afterwards.  Should you accept their help and risk betrayal, or should you scorn them and become rivals?',
	'While on a recon mission, guards spot you someplace you shouldn\'t be and pursue you.  What were they guarding, and how can get back there without being caught?',
	'A corrupt official within the authority structure of your region wants the item for himself.  Can you stop him without exposing your own plans?',
	'The local master of knowledge (spies, rumors, dirty dealing, etc.) is whispered to be sympathetic to your cause for the right price.  Can you gain his trust and secure his help?',
	'A masquerade ball of the political elite is happening tonight.  This might be the best place to gather intel and allies if you can navigate the political shenanigans.',
	'A key ally decides that this mission has taken one step too far into the direction of unlawfulness.  Despite acknowledging the good that will occur with the mission\'s success, they can no longer condone the operation.  Can the mission still succeed?  Will this ally betray you?',
	'Security protocols around the item have changed.  It now takes at least two sets of keys held by two separate people to get into the room with the item.  Can you get access to these keys?',
	'Some of the more bribable guards may be willing to give you the security arrangements for the item.  Can you get the info from them without them turning you in for a feather in their own cap?',
	'The local criminal underbelly has recognized you are from out of town and have nefarious designs.  They seek to scare you off their turf.  Can you survive the encounter?'
];

var climaxArrayGrand = [
	'As you finally get the item, another burglary happens in the same location for a different item.  Chaos ensues as you try to escape since it seems guards are coming out of the woodwork.  Can you escape safely?',
	'When you touch the item, it releases a malignant spirit whose only aim is destruction.  Can you stop the spirit and still escape?',
	'When you get the item, you immediately are set upon by a crack team of mercenaries who will pursue you all the way back to your region.  How can you avoid being stopped by this group?',
	'While you\'ve been busy sneaking in to get the item, a large army has surrounded the location causing the place to be put on lockdown.  How will you get out?',
	'Retrieving the item triggers some hidden traps that you could not find previously.  Can you avoid the giant rolling boulder by using the bag of sand?'
];

var complicationArraySlay = [
	'Normal weapons cannot harm the beast.  It will take a weapon of magical/holy quality or made from a special ore to slay it.',
	'The beast has acquired a large ragtag band of followers and servants.  (Think kobolds serving a dragon.)  These monstrous beings zealously serve and revere the beast.',
	'The beast is considered a sacred being by a powerful religious group who does not want to see the beast slain.',
	'A group of locals are strongly advocating relocating to leave the beast behind.  This could allow the beast\'s range of influence to increase.',
	'The beast is highly intelligent, which makes it more dangerous.',
	'The beast has the ability to change its shape either into another monstrous being or perhaps into a humanoid.  Its cunning application of this magic is unparalleled.'
];

var encounterArraySlay = [
	'A recent attack by the beast leads to the destruction of your home.  How do you handle the fallout?',
	'Other predatory creatures who typically lurk in the area are moving away from the beast and attack your base of operations.  Can you defend the base and keep those within safe?',
	'A famous academic wants to study the beast up close.  The local authorities have charged you with getting him close to the beast while keeping him safe.  Can you do it?',
	'The Lost Library of Literature is said to hold an ancient tome about this type of beast.  It may hold some valuable information on how to defeat the beast.  Can you find the Lost Library and its precious information?',
	'You must find where the beast makes its lair.  It may not be there at the time, but at least you\'ll know where it sleeps.  Can you brave the rough terrain to find the lair of the beast?',
	'The beast seems to be making its attacks in a new geographical location possibly following a pattern.  Can you track it to its next target before disaster strikes?',
	'The beast is attacking a small village or outpost.  Can you drive the beast away to save them?',
	'Numbers could be critical to defeating the beast.  Can you convince a fringe group (a tribe of ratmen or orcs, the cadre of crazed alchemists, etc.) to help you?',
	'You have stumbled into a trap set by the beast.  It is coming for you!  Can you escape it?',
	'Better equipment will be necessary to win the day.  Where can you find the proper gear you need?',
	'A boisterous individual parades into the area with great fanfare claiming to be a beast slayer of extraordinary talents.  Is he telling the truth or was it really just his great-grandmother who was the true beast slayer?',
	'A quiet and grizzled individual with a missing arm is rumored to have actually slain a beast once before.  He now works as a blacksmith (yup, even with one arm) and does not want to talk about his past.  What does he know and will it help?',
	'The beast attacks have been coming less frequently as of late.  You find out that this is because someone has been offering up other citizens as sacrifices to the beast.  Can you stop this from happening again?',
	'The beast has wrought great damage to the terrain causing problems for the locals.  Can you mitigate this damage?',
	'The beast has been directly threatening the citizenry for the past few days without actually attacking.  The people have gone without sleep due to fear, and all functions of the city are shut down.  Can you find out why the beast isn’t actually attacking and drive it off?',
	'A group of locals claimed that you were taking too long to defeat the beast and took off on their own.  They were poorly prepared and have been missing for the last two days.  Can you save them or is too late?'
];

var climaxArraySlay = [
	'You finally corner the beast in its lair for the ultimate confrontation, but the lair is really an elaborate labyrinth of traps and obstacles.  Can you avoid the traps and still defeat the beast?',
	'During the final battle, the beast morphs into another, more dangerous form.  Now you see its true form!  Can you survive this more deadly form?',
	'While the final confrontation rages between you and the beast, you notice that there are some young beasts that the great beast is protecting.  Could this be why the beast is attacking?  Is there another solution?',
	'It turns out there has not just been one beast all along.  There are two identical beasts facing you as you enter the final battle.  Can you stop them both or will one (or both) get away?',
	'Apparently the beast was just a pawn itself under the control of a greater foe who reveals himself now.  Can you stop this new enemy?'
];

var complicationArrayHorde = [
	'The tribes have powerful shaman who control unusual powers that have never been seen before.',
	'The tribes are decentralized and specialize in guerrilla warfare making them that much harder to stop.',
	'The tribes lived in total peace with their surrounding neighbors until these recent attacks.  Many people have friends and possibly loved ones within the tribes.',
	'The tribes appear to be provided with higher quality weapons than they should have access to.  Someone is bankrolling their work.',
	'Villagers that have fallen under control of the tribes begin working voluntarily with the tribes to expand their influence.',
	'All of the main camps of the horde are surrounded by a skinny pen with prisoners of war trapped inside.  The cramped fences force the prisoners to sleep on their feet and have them acting as a living wall protecting the horde from direct assaults.'
];

var encounterArrayHorde = [
	'A smaller arm of the horde is attacking a minor village.  Can you repel the attack?',
	'You come across a scouting party for the horde.  Can you prevent them from reporting back to their superiors?',
	'The horde is bringing in siege equipment.  Can you sneak over enemy lines and neutralize the threat before it is used on the populace?',
	'You know that a group of the horde will be making their way here soon.  You need to set up trenches or other such impediments to prepare the battlefield to your liking.  Then, can you stop the attack?',
	'The horde is going after the main agricultural area of the region to stop the food supply.  Can you stop the attack while keeping the crops safe?',
	'In the wee hours of the morning, a clanging bell awakens you signaling a night-time raid by the horde.  Can you organize the resistance quickly enough to repel their attack?',
	'The horde must have a command outpost nearby.  Can you find it and neutralize a key leader in their attacks?',
	'There is civil unrest as the hordes continue to attack.  Can you keep the people united in the face of a common foe?',
	'The key to victory is having better information, so you are sent out on a scouting mission.  Can you find pertinent information and make it back safely?',
	'On the way back from a successful mission, a band of the horde begin pursuing you.  Can you evade capture long enough to make it back to a place of safety?',
	'Taking the wrong turn on the way back has trapped you with the only way out being through the pursuing horde squadrons.  Can you outlast wave after wave of the horde to make it out safely?',
	'Someone is supplying the horde with information from the inside.  Who is it, why would they do it, and can you stop them?',
	'A member of the horde claims to want peace more than anything.  To bring that about, they believe the hordes must be defeated and are therefore turning traitor against their own kind.  Is the information this turncoat brings legit, or is it a trap?',
	'The horde has brought new mounted troops (wolf riders, horse and lances, centaurs, elephant riders, or anything else you can imagine) to the battle.  How will this affect your ability to survive the next attack wave?',
	'You have discovered a supply caravan route for the horde.  Can you disrupt the supply chain to bring the progress of the horde to a grinding halt?',
	'Reinforcements have arrived and are looking to you for leadership.  The ensuing battle will be massive in scale.  Can you maintain sound strategy and control of the battlefield?'
];

var climaxArrayHorde = [
	'A sentient artifact of ancient evil was discovered by the horde and now controls their leadership.  Can you destroy the artifact to stop the threat once and for all?',
	'The horde is led by a being of deep wisdom and power who seeks equality for his tribes with the surrounding nations.  Combat seemed his only way to show this power.  Can you stop the threat of this cunning and powerful leader?',
	'It seems a greater foe has been threatening the horde from the opposite side, pushing them into your region.  Can you stop the hostilities long enough to work with the horde to repel this new foe?',
	'You have just discovered that by the sacred laws of the tribes, combat by champions is still recognized as a legitimate means of conflict resolution.  Your government has named you champion, but can you defeat the champion of the horde?',
	'A new weapon (magical or otherwise) that could destroy much of the horde with a single use has come into your possession.  Can this be used to stop the horde?  Should it?'
];

// **********  ONLY FUNCTIONS BELOW HERE **********

// Cookie Functions
function createCookie() {
    "use strict";
    var expires, date = new Date(), x = document.getElementById('mainText').innerHTML, y;
    x = x.replace(/<h3>/g, 'OPENH3');
    x = x.replace(/<\/h3>/g, 'ENDH3');
    x = x.replace(/<p>/g, 'OPENPARA');
    x = x.replace(/<\/p>/g, 'CLOSEPARA');
    x = encodeURI(x);
    date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
    y = "story=" + x + expires + "; path=/";
    document.cookie = y;
}

function readCookie() {
    "use strict";
    var nameEQ = "story=", c, i, ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i = i + 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return decodeURI((c.substring(nameEQ.length, c.length)));
        }
    }
    return null;
}

function eraseCookie(name) {
    "use strict";
    createCookie(name, "", -1);
}

function loadStory() {
    "use strict";
    var x = readCookie();
    x = x.replace(/OPENH3/g, '<h3>');
    x = x.replace(/ENDH3/g, '<\/h3>');
    x = x.replace(/OPENPARA/g, '<p>');
    x = x.replace(/CLOSEPARA/g, '<\/p>');
    document.getElementById('mainText').innerHTML = x;
}

//Adding text to the YOUR STORY box
function addTextOriginal() {
    "use strict";
    var para = document.createElement("p");
    para.appendChild(document.createTextNode(document.getElementById("addText").value));

    document.getElementById("mainText").appendChild(para);
    
    document.getElementById("mainText").scrollTop = document.getElementById("mainText").scrollHeight;
    
    document.getElementById("addText").value = '';
}

function addText() {
    "use strict";
    var para, lines = '', i, boldPart = document.createElement("b");
    
    if (document.getElementById("addText").value !== '') {
        lines = document.getElementById("addText").value.replace(/\r\n/g, "\n").split("\n");
    }
    
    
    boldPart.appendChild(document.createTextNode('Your Story Continues...'));
    boldPart.className += ' boldText';
    
    if (lines !== '') {
        document.getElementById("mainText").appendChild(boldPart);
    }
        
    for (i = 0; i < lines.length; i = i + 1) {
        para = document.createElement("p");
        para.appendChild(document.createTextNode(lines[i]));

        document.getElementById("mainText").appendChild(para);
    
        document.getElementById("mainText").scrollTop = document.getElementById("mainText").scrollHeight;
    
        document.getElementById("addText").value = '';
    }
}

function removeText() {
    "use strict";
    var para = document.getElementById("mainText"), item = para.lastChild;
    
    para.removeChild(item);
}



// Get a Random Array Value and Output It to the Story Box
function postRandArrayVal(label, textStyle, arrayName) {
    "use strict";
    
    addText();
    
    var para = document.createElement("p"), arrVal = arrayName[Math.floor(Math.random() * arrayName.length)], fullstring = label + arrVal, boldPart = document.createElement("b");
    
    para.appendChild(document.createTextNode(arrVal));
    
    boldPart.appendChild(document.createTextNode(label));
    boldPart.className += ' boldText';
    boldPart.className += textStyle;
    
    document.getElementById("mainText").appendChild(boldPart);
    document.getElementById("mainText").appendChild(para);
    
    document.getElementById("mainText").scrollTop = document.getElementById("mainText").scrollHeight;
}

// Get a Random Array Value and Output It to the Story Box
function postText(label, textStyle, text) {
    "use strict";
    
    addText();
    
    var para = document.createElement("p"), boldPart = document.createElement("b");
    
    boldPart.appendChild(document.createTextNode(label));
    boldPart.className += ' boldText';
    boldPart.className += textStyle;
    
    para.appendChild(document.createTextNode(text));

    document.getElementById("mainText").appendChild(boldPart);
    document.getElementById("mainText").appendChild(para);
    
    document.getElementById("mainText").scrollTop = document.getElementById("mainText").scrollHeight;
}

function postImg(source) {
    "use strict";
    
    var para = document.createElement("img");
    para.src = source;
    
    document.getElementById("mainText").appendChild(para);
    
    document.getElementById("mainText").scrollTop = document.getElementById("mainText").scrollHeight;
}

//Collapse the a Section
function collapseSection(section, icon) {
    "use strict";
    if (document.getElementById(icon).className === 'glyphicon glyphicon-collapse-up') {
        document.getElementById(icon).className = 'glyphicon glyphicon-collapse-down';
    } else {
        document.getElementById(icon).className = 'glyphicon glyphicon-collapse-up';
    }
    
    var x = document.getElementById(section);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// Get a Random Array Value and Output It to a Textbox
function getRandArrayVal(arrayName, textbox) {
    "use strict";

    var generictextbox = document.getElementById(textbox);
    
    generictextbox.value = arrayName[Math.floor(Math.random() * arrayName.length)];
}



// ***** ADVENTURE CODE *****
var advArray = questArray.slice();

function setAdvArray(choice) {
    "use strict";
    var advChoice = choice.selectedIndex, x = document.getElementById('encounterButton'), y = document.getElementById('climaxButton'), z = document.getElementById('complicationButton');
    
    if (advChoice === 0) {
        advArray = questArray.slice();
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        advArray = advCat.slice();
        x.style.display = 'block';
        y.style.display = 'block';
        z.style.display = 'block';
    }
    
    
}

// Get a Random Adventure or Quest Seed and Output It to the Story Box
function postRandAdv() {
    "use strict";
    
    addText();
    
    var para = document.createElement("p"), arrVal = Math.floor(Math.random() * advArray.length), boldPart = document.createElement("b");
    
    if (document.getElementById("advOpt").selectedIndex === 1) {
        advChoice = arrVal + 1;
    }
    
    para.appendChild(document.createTextNode(advArray[arrVal]));
    
    boldPart.appendChild(document.createTextNode("Adventure:"));
    boldPart.className += ' boldText';
    boldPart.className += ' adventureText';
    
    document.getElementById("mainText").appendChild(boldPart);
    document.getElementById("mainText").appendChild(para);
    
    document.getElementById("mainText").scrollTop = document.getElementById("mainText").scrollHeight;
}

//Get a Complication for an Adventure
function getComplication() {
    "use strict";
    
    switch (advChoice) {
    case 0:
        postText('', '', 'Click the button Get Adventure first');
        break;
    case 1:
        postRandArrayVal('Complication:', ' adventureText', complicationArrayFey);
        break;
    case 2:
        postRandArrayVal('Complication:', ' adventureText', complicationArrayHorde);
        break;
    case 3:
        postRandArrayVal('Complication:', ' adventureText', complicationArraySlay);
        break;
    case 4:
        postRandArrayVal('Complication:', ' adventureText', complicationArrayGrand);
        break;
    case 5:
        postRandArrayVal('Complication:', ' adventureText', complicationArraySky);
        break;
    }
}

//Get an Encounter for an Adventure
function getEncounter() {
    "use strict";
    
    switch (advChoice) {
    case 0:
        postText('', '', 'Click the button Get Adventure first');
        break;
    case 1:
        postRandArrayVal('Next Encounter:', ' adventureText', encounterArrayFey);
        break;
    case 2:
        postRandArrayVal('Next Encounter:', ' adventureText', encounterArrayHorde);
        break;
    case 3:
        postRandArrayVal('Next Encounter:', ' adventureText', encounterArraySlay);
        break;
    case 4:
        postRandArrayVal('Next Encounter:', ' adventureText', encounterArrayGrand);
        break;
    case 5:
        postRandArrayVal('Next Encounter:', ' adventureText', encounterArraySky);
        break;
    }
}

//Get a Climax for an Adventure
function getClimax() {
    "use strict";
    
    switch (advChoice) {
    case 0:
        postText('', '', 'Click the button Get Adventure first');
        break;
    case 1:
        postRandArrayVal('Climax:', ' adventureText', climaxArrayFey);
        break;
    case 2:
        postRandArrayVal('Climax:', ' adventureText', climaxArrayHorde);
        break;
    case 3:
        postRandArrayVal('Climax:', ' adventureText', climaxArraySlay);
        break;
    case 4:
        postRandArrayVal('Climax:', ' adventureText', climaxArrayGrand);
        break;
    case 5:
        postRandArrayVal('Climax:', ' adventureText', climaxArraySky);
        break;
    }
}

// ***** TRAP CHOOSING CODE *****
function getTrap() {
    "use strict";
    var arrayIndex = Math.floor(Math.random() * trapArray.length);

    postText('Trap: ', ' trapText', trapArray[arrayIndex]);
    
    postText('Trap Description: ', ' trapText', trapDescriptionArray[arrayIndex]);
}



// ***** COMBAT CHOOSING CODE *****
function getCombatant() {
    "use strict";

    var arrayIndex = Math.floor(Math.random() * attackerArray.length);

    postText('Attacker: ', ' combatText', attackerArray[arrayIndex]);
    
    postText('Description: ', ' combatText', attackerDescriptionArray[arrayIndex]);
    
}



// ***** DECISION CHOOSING CODE *****
var yesArray = nwYes.slice();
var dirArray = cardinalArray.slice();

// Set the Array to Use for Directions
function setDirectionArray(choice) {
    "use strict";
    
    var dirChoice = choice.selectedIndex;
    
    switch (dirChoice) {
    case 0:
        dirArray = cardinalArray.slice();
        break;
    case 1:
        dirArray = eightPTArray.slice();
        break;
    case 2:
        dirArray = cardinalPlusArray.slice();
        break;
    case 3:
        dirArray = tfPTArray.slice();
        break;
    }
}

// Get a Random Direction
function getRandDirection(textbox) {
    "use strict";
    document.getElementById(textbox).value = dirArray[Math.floor(Math.random() * dirArray.length)];
}

//Shuffle an Array.  This is for the cards.
function shuffleArray(array) {
    "use strict";
    var j = 0, temp, i;
    for (i = array.length - 1; i > 0; i = i - 1) {
        j = Math.floor(Math.random() * array.length);
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function shuffleBothCardArrays() {
    "use strict";
    var j = 0, temp, tempImg, i;
    for (i = cardArray.length - 1; i > -1; i = i - 1) {
        j = Math.floor(Math.random() * cardArray.length);
        temp = cardArray[i];
        cardArray[i] = cardArray[j];
        cardArray[j] = temp;
        tempImg = cardArray2[i];
        cardArray2[i] = cardArray2[j];
        cardArray2[j] = tempImg;
    }
    cardCount = 0;
}

function getRandCards(number) {
    "use strict";

    var j = [], tempString, temp = 0, i = 0, k = 0, tempNumber = parseInt(document.getElementById(number).value, 10);

    if (cardCount > 54 - tempNumber) {
        alert("You must reshuffle the deck to draw that many cards.");
        shuffleBothCardArrays();
        cardCount = 0;
    }

    for (i = 0; i < tempNumber; i = i + 1) {
        j[i] = cardArray[i];
    }

    tempString = j.join();
    postText('Cards Drawn: ', ' decisionText', tempString);

    for (i = 0; i < tempNumber; i = i + 1) {
        temp = cardArray[0];
        for (k = 0; k < cardArray.length - 1; k = k + 1) {
            cardArray[k] = cardArray[k + 1];
        }
        cardArray[k] = temp;
    }
    
    for (i = 0; i < tempNumber; i = i + 1) {
        j[i] = cardArray2[i];
        postImg(j[i].src);
    }

    for (i = 0; i < tempNumber; i = i + 1) {
        temp = cardArray2[0];
        for (k = 0; k < cardArray2.length - 1; k = k + 1) {
            cardArray2[k] = cardArray2[k + 1];
        }
        cardArray2[k] = temp;
    }
    
    cardCount = cardCount + tempNumber;
}

// Get a Random NPC Name and Occupation
function getNPC() {
    "use strict";
    var temp = NPCArray[Math.floor(Math.random() * NPCArray.length)] + " the " + NPCAdjArray[Math.floor(Math.random() * NPCAdjArray.length)] + " " + NPCNounArray[Math.floor(Math.random() * NPCNounArray.length)];
    postText('NPC: ', ' decisionText', temp);
}

// Get a Random Number between 1 and Input then Output to Textbox
function getRandVal(label, number, sides, modifier) {
    "use strict";
    var temp, series = '', sum = 0, i, individualLabel = document.getElementById(number).value + ' rolls of ' + document.getElementById(sides).value + '-sided dice: ', totalLabel = 'Sum of ' + individualLabel, addAtEnd = parseInt(document.getElementById(modifier).value, 10), fullString;

    for (i = 0; i < parseInt(document.getElementById(number).value, 10); i = i + 1) {
        temp = Math.floor(Math.random() * parseInt(document.getElementById(sides).value, 10) + 1);
        series = series + temp + ', ';
        sum = sum + temp;
    }
    fullString = sum + ' + ' + addAtEnd + ' = ';
    sum = sum + addAtEnd;
    fullString = fullString + sum;
    postText(individualLabel, ' decisionText', series);
    postText(totalLabel, ' decisionText', fullString);
}

// Get Details with Adj and Noun
function getDetails(style) {
    "use strict";
    var temp = adjArray[Math.floor(Math.random() * adjArray.length)] + ' ' + nounArray[Math.floor(Math.random() * nounArray.length)];
    
    postText('More Details: ', style, temp);
}

// Get a Random Level of Difficulty
function getDifficulty(style) {
    "use strict";
    var genericnumber = Math.floor(Math.random() * 10 + 1);
    if (genericnumber < 2) {
        postText('Difficulty: ', style, 'Trivial');
    } else {
        if (genericnumber < 4) {
            postText('Difficulty: ', style, 'Easy');
        } else {
            if (genericnumber < 7) {
                postText('Difficulty: ', style, 'Moderate');
            } else {
                if (genericnumber < 10) {
                    postText('Difficulty: ', style, 'Hard');
                } else {
                    postText('Difficulty: ', style, 'Insane');
                }
            }
        }
    }
}

// Decide if a Random Event Occurs and Get What Type
function getRandRE(number) {
    "use strict";
    
    if (Math.floor(Math.random() * 100 + 1) > document.getElementById(number).value) {
        postText('Random Event?: ', ' decisionText', 'No random event');
    } else {
        var temp = 'Yes, ' + reTypeArray[Math.floor(Math.random() * reTypeArray.length)];
        postText('Random Event?: ', ' decisionText', temp);
    }
}

// Set the Array to Use for the Likelihood of Yes
function setYesArray(choice) {
    "use strict";
    
    var yesChoice = choice.selectedIndex;
    
    switch (yesChoice) {
    case 0:
        yesArray = nwYes.slice();
        break;
    case 1:
        yesArray = vuYes.slice();
        break;
    case 2:
        yesArray = unYes.slice();
        break;
    case 3:
        yesArray = suYes.slice();
        break;
    case 4:
        yesArray = evYes.slice();
        break;
    case 5:
        yesArray = slYes.slice();
        break;
    case 6:
        yesArray = liYes.slice();
        break;
    case 7:
        yesArray = vlYes.slice();
        break;
    case 8:
        yesArray = fsYes.slice();
        break;
    }
}



// ***** LOCATION CHOOSING CODE *****
var locArray = indoorArray.slice();
var exitArray = linearExits.slice();

// Set the Array to Use Based on Location Choice
function setLocArray(choice) {
    "use strict";
    
    var locChoice = choice.selectedIndex;
    
    switch (locChoice) {
    case 0:
        locArray = indoorArray.slice();
        break;
    case 1:
        locArray = cityArray.slice();
        break;
    case 2:
        locArray = caveArray.slice();
        break;
    case 3:
        locArray = outdoorArray.slice();
        break;
    }
}

// Set the Array to Use Based on What Type of Building It Is
function setExitArray(choice) {
    "use strict";
    
    var exitChoice = choice.selectedIndex;
    
    switch (exitChoice) {
    case 0:
        exitArray = linearExits.slice();
        break;
    case 1:
        exitArray = branchExits.slice();
        break;
    case 2:
        exitArray = sprawlExits.slice();
        break;
    }
}

// Decide if there are stairs
function areStairs(chances) {
    "use strict";

    if (Math.floor(Math.random() * 100 + 1) > document.getElementById(chances).value) {
        postText('Are there stairs in this room?: ', ' locationText', 'No');
    } else {
        //var x = Math.floor(Math.random() * 100);
        if (Math.floor(Math.random() * 100) < 50) {
            postText('Are there stairs in this room?: ', ' locationText', 'Yes, they go up.');
        } else {
            postText('Are there stairs in this room?: ', ' locationText', 'Yes, they go down.');
        }
    }
}

// Decide if there are locked doors
function isLocked(chances) {
    "use strict";

    if (Math.floor(Math.random() * 100 + 1) > document.getElementById(chances).value) {
        postText('Is a door locked?: ', ' locationText', 'No');
    } else {
        postText('Is a door locked?: ', ' locationText', 'Yes');
        postRandArrayVal('Difficulty to unlock the door: ', ' locationText', difficultyArray);
    }
}

// Decide if there are secret doors
function isSecret(chances) {
    "use strict";

    if (Math.floor(Math.random() * 100 + 1) > document.getElementById(chances).value) {
        postText('Is there a secret door?: ', ' locationText', 'No');
    } else {
        postText('Is there a secret door?: ', ' locationText', 'Yes');
        postRandArrayVal('Difficulty to find the secret door: ', ' locationText', difficultyArray);
        postRandArrayVal('Difficulty to unlock the secret door: ', ' locationText', difficultyArray);
        postRandArrayVal('Behind the secret door is: ', ' locationText', insideSecretArray);
    }
}

// Decide if there are secret doors
function isTrap(chances) {
    "use strict";

    if (Math.floor(Math.random() * 100 + 1) > document.getElementById(chances).value) {
        postText('Is there a trap?: ', ' locationText', 'No');
    } else {
        postText('Is there a trap?: ', ' locationText', 'Yes');
        postRandArrayVal('Difficulty to find the trap: ', ' trapText', difficultyArray);
        postRandArrayVal('Difficulty to disarm the trap: ', ' trapText', difficultyArray);
        postRandArrayVal('Difficulty to avoid the trap: ', ' trapText', difficultyArray);
        postRandArrayVal('Damage amount of the trap: ', ' trapText', difficultyArray);
    }
}

