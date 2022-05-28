import './SourcesContainer.css';
import styles from './SourcesContainer.module.css';

export default function SourcesContainer() {
    return (
        <div id="sources-main-container" className={styles.mainContainer}>
            <div>
                <h3>Sources</h3>
            </div>
            <ul id="sources-list">
                <li><h4>Britannica, T. Editors of Encyclopaedia (2016, February 22). "Kievan Rus". Encyclopedia Britannica. https://www.britannica.com/topic/Kyivan-Rus</h4></li>
                <li><h4>Goodyear, M. World History (2019, October 14). "Golden Horde". https://www.worldhistory.org/Golden_Horde/</h4></li>
                <li><h4>Yerofeyev, I. Alekseyevich , Makuch, . Andrij , Hajda, . Lubomyr A. , Zasenko, . Oleksa Eliseyovich , Stebelsky, 
                    . Ihor and Kryzhanivsky, . Stepan Andriyovich (2022, May 14). "Ukraine". Encyclopedia Britannica. https://www.britannica.com/place/Ukraine</h4></li>
                <li><h4>C N Trueman. The Russian Civil War (2022, May 25). "The Russian Civil War". The History Learning Site. https://www.historylearningsite.co.uk/modern-world-history-1918-to-1980/russia-1900-to-1939/the-russian-civil-war/</h4></li>
                <li><h4>Kravchenko. (2015-2016): 447–484. "Fighting Soviet Myths: The Ukrainian Experience". Harvard Ukrainian Studies, no. 1-4.</h4></li>
                <li><h4>Karatnycky, A. (2005). "Ukraine’s Orange Revolution". Foreign Affairs, 84(2), 35–52. https://doi.org/10.2307/20034274</h4></li>
                <li><h4>Diuk, N. (2014). EUROMAIDAN: "Ukraine’s Self-Organizing Revolution". World Affairs, 176(6), 9–16. http://www.jstor.org/stable/43555086</h4></li>
                <li><h4>Britannica, T. Editors of Encyclopaedia (2022). "The crisis in Crimea and eastern Ukraine". Encyclopedia Britannica. https://www.britannica.com/place/Ukraine/The-crisis-in-Crimea-and-eastern-Ukraine</h4></li>
             </ul>
        </div>
    )
}