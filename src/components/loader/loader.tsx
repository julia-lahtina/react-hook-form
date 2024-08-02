import s from './loader.module.css'

export const Loader = () => {
    return (
        <div className={s.position}>
            <span className={s.loader}></span>
        </div>
    )
}