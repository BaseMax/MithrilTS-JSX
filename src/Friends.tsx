import m from "mithril"
import classes from "./Friends.module.css"

const Name = (elm) => {
    return {
        view: () => {
        return (
            <li>
                {elm.attrs.name}
            </li>
        )}
    }
}

export const Friends = () => {
    let names = []
    let field_name = ""
    const add_friend = () => {
        field_name = field_name.trim()
        if(field_name !== "")
            names.push(field_name)
        field_name = ""
    }
    const nameTyping = (e) => {
        console.log(e.keyCode, e.target.value);
        if(e.key === 'Enter' || e.keyCode === 13) {
            add_friend()
            e.target.value = ""
        }
        else {
            field_name = e.target.value
        }
    }
    return {
        view: () => {
        return (
            <section className={classes.section}>
                <h2 className={classes.sectionTitle}>Friends</h2>
                <input type="text" onkeyup={(e) => nameTyping(e)} value={field_name} />
                <button onclick={() => add_friend()}>Insert</button>
                <ul>
                    {names.map(name =>
                        <Name name={name} />
                    )}
                </ul>
            </section>
        )},
    }
}