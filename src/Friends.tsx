 
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
    let names = [];
    // let field_name = "";
    const submit = (e) => {
        e.preventDefault();
        const form = e.target;
        const nameField = form.elements.name;
        const isValid = nameField.checkValidity();
        if (isValid) {
            names.push(nameField.value);
        }
        form.reset();
    }

    return {
        view: () => {
        return (
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Friends</h2>
          <form onsubmit={submit} novalidate>
          <div>
            <label for="id_name">Name (required)</label>
          </div>
          <input
            id="id_name"
            name="name"
            type="text"
            required
            // value={field_name}
          />
          <button type="submit">Insert</button>
          </form>
          <ul>
            {names.map((name, index) => (
              <Name name={name} key={index} />
            ))}
          </ul>
        </section>
        )},
    }
}
