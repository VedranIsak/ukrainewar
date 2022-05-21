import logo from './logo.svg';
import './App.css';
import React from 'react';
import StartContainer from './StartContainer/StartContainer';
import SlideContainer from './SlideContainer/SlideContainer';
import TitleBanner from './TitleBanner/TitleBanner';
import IndividualsContainer from './IndividualsContainer/IndividualsContainer';
import VideoContainer from './VideoContainer/VideoContainer';

let oldHistHeaders = 
[
  'Kievan Rus', 'Golden Horde', 'Polish rule',
  'Russian Czars', 'Civil War', 'USSR'
];

let oldHistIds = 
[
  'kievan-rus',
  'mongols',
  'polish',
  'russian-emp',
  'civil-war',
  'ussr'
];

let oldHistTexts = 
[
  'The Kievan Rus was the first state formed by the Eastern Slavs, seeing its beginning in the 9th century and lasting until the 13th century. ' +
  'Although popular myth says that the state was founded by Nordic vikings, it is infact commonly viewed today that the Kievan Rus ' +
  'was founded by Slavs with a Nordic background, the so called Varangians. The Kievan Rus, as a state, was more of a federation than a unified empire  ' + 
  'and in its peak it covered most of modern day Ukraine, Belarus as well as a large part of the western edge of todays Russia. ' +
  'Such significance holds the Kievan Rus state in todays world that no less than three countries, Ukraine, Belarus and Russia, draw their origin from it. ' +
  'The latter two have even adopted their names from it. Besides serving as the first state of the eastern Slavs, the Kievan Rus also holds a significant role ' +
  'in the history of the region as a whole due to it spreading Orthodox Christiany (via the Byzantine empire) through its lands, via its Capital of Kiev. ' +
  'Orthodox Christianity is a religion that most eastern Slavs still adhere to to this day. ',
  'In the 13th century the Kievan Rus seized to exist as a state with the invasion of the Mongols. The Mongols first defetead several principalities of the ' +
  'Kievan Rus in the battle of the Kalka River in the year of 1223. Following this battle the Mongols retreated but they came back 14 years later and ' + 
  'launched a full scale invasion. This invasion resulted in virtually all of the Kievan Rus, apart from Novgorod and Pskov in the north, being conquered. ',
  'After the brief formation of a new kingdom following the Mongol invasion, called Ruthenia, most of Ukraine was annexed into Poland and Lithuania. ' + 
  'These two countries would in turn form a union together, called the Polish-Lithuanian Commonwealth, meaning that large parts of Ukraine became a part ' +
  'of this one single state. Meanwhile the southern parts of Ukraine, in particular Crimea, remained within Mongol and later Tatar, ' + 
  'a Turkish nomadic people, control. The western parts of Ukraine became highly assimilated into Poland, with many converting to Catholicism and joining ' + 
  'the Polish nobility. Meanwhile in the eastern parts of Ukraine, a large Cossack host, whom were nomadic and Slavic, was formed called the Zaporozhian Cossacks.',
  'In 1651, the Cossacks of the east were defeated by the Polish, which lead them to turn to the Russian tsar for help. While Ukraine had been tampered with by both ' +
  'Poles and Tatars, the Russians had largely escaped foreign interference and thus were able to form a powerful state. The Russian tsar accepted the Cossacks plea for ' + 
  'aid, under the condition that they became subject to him. In 1795, after several gruesome wars between the Poles and their western Ukrainian allies and the eastern ' + 
  'Ukranian Cossacks and their Russian allies, Ukraine was ultimately conquered by the Russians. The last part of western Ukraine, Galicia, was incorporated into the ' +
  'Austrian empire.',
  'Ukraine would be in the coming hundred years subject to an effort of Russification by the Russian state. Russian language was heavily promoted while ethnic Russian ' + 
  'settlers moved in. This would change after the first world war however, when Ukraine was given up by the now newly formed Soviet Russia to the Central Powers led by ' + 
  'Germany and Austria-Hungary. This would barely last for a year however, as the Central Powers were defeated in the first world war and subsequently lost the small influence they had ' +
  'in Ukraine. What followed next was the Russian civil war, where the two main belligerents were the communist Reds and the monarchist Whites. ' + 
  'While the Germans repelled the Reds from Ukraine at the start of the conflict, they quickly lost influence in Ukraine as both the Whites, Reds and the local anarchist Black Army ' + 
  'battled for influence. The Blacks managed to achieve surprising success and took control of large parts of southern Ukraine and Crimea. This would not however last as the Reds, after ' + 
  'rallying their core support in the heartland of Russia, managed to not only conquer Ukraine but also most of the former Russian Empire.',
  'While the Soviets had managed to reintegrate Ukraine into the USSR, they did not manage to reintegrate the western most parts of the country, which were under the control of Poland, ' + 
  'despite the Soviets waging a war of conquest against the Poles between 1919 and 1921. In the following years, as Stalin took a firm grip of the Union, what is now modern day Ukraine and ' + 
  'also other parts of the USSR (most notably Kazakhstan) were subject to the horrors of collectivisation of agriculture. In what many scholars label as ' + 
  'the Holodomor genocide, roughly 5 million people in Ukraine, mostly ethnic Ukranians, starved to death between 1932 to 1933. Following the Holodomor Ukraine ' + 
  'would experience being invaded by Nazi Germany in 1941 with millions more dying. In the western parts of Ukraine a nationalist anti communist grouping led by ' + 
  'Stepan Bandera fought both the Germans and the Soviets for independence. However they did from time to time collude with the occupying Germans, mainly in the killing and targeting of Polish ' + 
  ', Jewish and Russian civilians in western Ukraine. They would ultimately be defeated, but only in the 1950s, well after the Second World War had ended. What followed after the war was the reintegration ' + 
  'of its western territories and relative peace, albeit still under efforts by the Soviets to achieve russification.'
]

let newHistHeaders = 
[
  'The Independence', 'The Orange Revolution', 'The Political Games', 
  'The Euromaidan', 'The Crimean Annexation', 'The War in the Donbass'
];

let newHistIds = 
[
  'independence', 'orange-rev', 'vik-yan',
  'euromaidan', 'crimea', 'donbass'
];

let newHistTexts = 
[
  'In the winter of 1991, as the Soviet Union was collapsing, the people of Ukraine voted 92% in favor of declaring independence. ' +
  'This wish for independence was granted just a couple of weeks later when the independence of Ukraine was ratified with the dissolvment of the Soviet Union. Even though Ukraine had a massive ' + 
  'population (roughly 52 million citizens) and a strong industrial infrastructure the economy of Ukraine did not develop in a good pace, ' + 
  'in comparison with other former Soviet Republics with far worse economic outsets. On top ' + 
  'of that many private individuals managed to acquire a disproportional large amount of wealth and influence, the so called Oligarchs. ', 
  'The one impressive feat of the new Ukranian state was its adherence to democracy, unlike its large eastern neighbour for instance. ' + 
  'In 2004 Viktor Yanukovych declared victory in the Ukranian presidential elections. This victory was however highly dubious and caused massive ' + 
  'protests in Ukraine. These peaceful protests were collectively dubbed "The Orange Revolution" and caused the Ukranian Supreme Court to overturn ' + 
  'the election and appoint the western leaning Victor Yuschenko as the new president. Yuschenko was also poisoned during these events, with himself ' + 
  'having a strong belief that the Russians were the culprits behind the poisoning.',
  'In 2006 Yanukovych managed to reclaim power by attaining the position of prime minister. However he lost his seat in elections that took place in 2007 ' + 
  'following a political crisis in the country. Julia Tymoschenko, Yuschenko ally, attained the seat but she lost it in turn in 2010 to Yanukovych yet again. ' + 
  'Yanukovych, who had a political desiree to attain closer relationships with Russia, began his presidency tilting the balance between Russia and the EU and NATO. ' + 
  'However in 2013 he took a firm stance on this issue by rejecting an association agreement with the EU in favor of one with Russia. ',
  'The decision of Yanukovuch sparked massive protests in the fall of 2013. These protests continued for months and were fueled by a desiree for closer ' + 
  'relationships with the EU (and importantly not NATO) while also wanting to distance the country from Russia. The demonstrators belonged in large part ' + 
  'to the younger side of the Ukranian population and the protests were more frequent in the west of the country as opposed to the east. Eventually the Yanukovych ' + 
  'government agreed to terms with the protesters in the beginning of 2014. However these agreements were never imposed as Yanukovych, somewhat my steriously, fled the ' + 
  'country to Russia and the opposition promptly seized power following that.',
  'Following the arrival of the new starkly pro western government, the Russian Federation responded by militarily annexing the Crimean peninsula. ' + 
  'Not a single shot was fired by the Ukranian defenders, as the Ukranian military was severaly depleted, corrupt and demoralised. '+
  'Following the arrival of the Russians at the end of February, ' + 
  'whom carried plain green uniforms and were officially labeled by the Russian govornment as being "local resistance fighters", a referendum for independence was held. ' + 
  'According to the results 96.7% of the Crimean population voted for independence and subsequently at the end of March Crimea was annexed into the Russian Federation.',
  'Following the Russian intervention in Crimea unrest began forming in the Donbass, the eastern most part of Ukraine compromising the regions of Donetsk and Luhansk. ' + 
  'This soon evolved into open fighting between pro-Russian (and also allegedly Russian agents) and the Ukranian government. The Russian separatists wanted effectively to ' + 
  'secede from Ukraine and thus declared their own states in the Donbass, named the Donetsk Peoples Republic and the Luhansk Peoples Republic respectively. The war was intense in ' + 
  'the early months of the conlict, but soon cooled down following several peace agreements between Ukraine and Russia. However sporadic shelling and shooting  continued on the now static front ' + 
  'lines until the full scale Russian invasion in 2022. '
]

let firstIndTexts = 
[
  'Viktor Yanukovuch was the most prominent Russian oriented politician in Ukraine. He was ousted from the politcal scene in 2004 with ' + 
  'the peaceful Orange Revolution, before being ousted due to his brutal conduct in the Euromaidan in 2014.',
  'Leonid Kuchma was the second Ukranian, being more oriented to Ukraine going its own way in regards to its relationship with Russia. ',
  'Boris Yeltsin was the first president of the newly founded Russian Federation. He allowed Ukraine to become independent and even granted them ' + 
  'to continue keeping Crimea, even though that was much up to question at that time. ',
  'Vladimir Putin succeeded Yeltsin and has ruled Russia since 1999. He is the one utmost responsible for Russias policy in regards to Ukraine. ' + 
  'He has followed a policy that entails Russia extering strong influence in what the Russians define as the "near abroad", meaning former Soviet ' + 
  'Republics. This naturally entails that Putins regime seek to have Ukraine be strongly aligned with Russia.',
  'Volodymyr Zelensky is Ukraine"s current president. He was elected after defeating the incumbent Petro Poroshenko with 73% of the vote. ' + 
  'He, like Poroshenko, has followed a policy of strong Ukranian integration towards primarily the EU, while making clear that Ukraine does not ' +
  'seek membership in NATO.',
  'Yulia Tymoschenko succeeded Viktor Yuschenko as the front figure of Ukraines western oriented politcal landscape, until she lost her seat ' + 
  'as the countrys prime minister to Viktor Yanukovych in the 2010 election.'
];
let secondIndTexts = 
[
  'Igor Girkin is a Russian paramilitary leader who is one of the primary local leaders of Russian forces in the Donbass.',
  'Viktor Yushchenko was elected to the position of president following the Orange Revolution in 2004 and was a strong supporter of ' + 
  'Ukranian integration into the Western block, meaning the EU. His ally Yulia Tymoschenko would later continue his policies after he stepped ' + 
  'down from the position of president in 2010 in favor of Viktor Yanukovych. ',
  'Petro Poroshenko was elected president of Ukraine following the Euromaidan. He signed the trade agreement with the EU that sparked the Euromaidan ' +
  'and pursued overall a western oriented policy, with efforts being made to come to an agreement with separatists in the Donbass. He was defeated in ' + 
  'the 2019 presidential election by Volodymyr Zelensky.',
  'Barack Obama was the US president during the events of the Euromaidan, the annexation of Crimea and the conflict in the Donbass. He pursued a policy of ' + 
  'compromise with the Russians, imposing fairly light sanctions while supporting the Ukranian trade agreement with the EU. ',
  'Mikhail Gorbachev was the last Soviet leader. He was thus one of the key figures, albeit inadvertadly, in Ukraine gaining its independence. ' + 
  'He has in large parts endorsed Russias policy of interference in Ukraine.',
  'Leonid Kravchuk was the first president of Ukraine and served in the position from 1991 to 1994. He strongly supported Ukranian independence but lost ' + 
  'the faith of the people due to soaring inflation widespread corruption.'
];

let firstIndIds = ['yan', 'kuchma', 'yelt', 'putin', 'zel', 'tym'];
let secondIndIds = ['girkin', 'yus', 'poros', 'obama', 'gorbatjov', 'krav'];

let smallHeadersOld = ['I', 'II', 'III', 'IV', 'V', 'VI'];
let smallHeadersNew = ['VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

function App() {
  return (
    <React.Fragment>
      <StartContainer />
      <SlideContainer id="oldHistId" ids={oldHistIds} smallHeaders={smallHeadersOld} headers={oldHistHeaders} texts={oldHistTexts}/>
      <SlideContainer id="newHistId" ids={newHistIds} smallHeaders={smallHeadersNew} headers={newHistHeaders} texts={newHistTexts}/>
      <TitleBanner title="Meet the people at the heart of the conflict" />
      <IndividualsContainer texts={firstIndTexts} id="first-ind-cont" ids={firstIndIds} />
      <IndividualsContainer texts={secondIndTexts} id="second-ind-cont" ids={secondIndIds} />
      <VideoContainer id="vice" header="Footage" headers={['Euromaidan', 'Crimea', 'Donbass']} />
    </React.Fragment>
  );
}

export default App;
