# Mithril TS(Type script) JSX

Create a spa project using Mithril JS framework and design layout by JSX syntax and use Typescript and Vote for build system.

### Why MithrilJS with JSX?

If you already know MithrilJS, you have to write the tempalte and layout in HybridScript way and you cannot do that in such a way like ReactJS.
So in this example we are going to create a simple project with **Mithril** framework but with a JSX way.

## Features

- TypeScript (TS)
- Support **JSX** syntax
- Write **CSS** styles for each component in a seperate file, so it's easy to manage style conflicting
- Auto build system (**Vite** is really fast and perfect system)
- Use **MithrilJS** and what we love to use for what we are building

[![Mithril-JS/Type script with support of JSX syntax](preview.png)](https://basemax.github.io/MithrilTS-JSX/dist/)

**First component:** a counter which you can increase a number between 0 and infinity :)

**Second component:** you can add name of your friends and its work dynamically.

## Example component

```typescript
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
```
### Using

- `$ npm install`
- `$ npm run dev`
- `$ npm run build`
- `$ npm run preview`

### Credit

Thank you from **Arthur Clemens**, and **Kevin Fiol** for helping me to config a Build system correctly. Now I have really a good feel while it's possible to config JSX syntax inside MithrilJS library on front of TypeScript which is a good tool for big project.

© Copyright 2021, Max Base
