import m from "mithril"
import classes from "./Counter.module.css"

export const Counter = () => {
    let number = 1
    const action_increase = () => {
        number++;
    }
    const action_decrease = () => {
        if(number === 0) return;
        number--;
    }
    return {
        view: () => {
        return (
            <section className={classes.section}>
                <h2 className={classes.sectionTitle}>Counter</h2>
                <span>
                    {number}
                </span>
                <button onclick={action_increase}>Increase</button>
                <button onclick={action_decrease}>Decrease</button>
            </section>
        )
        },
    }
}