import s from './TitleBanner.module.css';
import './TitleBanner.css';

export default function TitleBanner({title}) {
    return (
        <div id="title-banner" className={s.titleContainer}>
            <h3>{title}</h3>
        </div>
    )
}