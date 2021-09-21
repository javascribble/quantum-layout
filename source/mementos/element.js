const { getJson, setJson } = quantum;

export const serialize = element => {
    const { id, active } = element;
    const { width, height } = element.style;
    const children = element.template.slots.forEach(slot => slot.assignedElements()).flat().filter(child => child.id).map((child => child.id));
    setJson(id, { active, width, height, children });
};

export const deserialze = id => {
    const { active, width, height, children } = getJson(id);
    const element = document.querySelector(`#${id}`);
    element.active = active;
    element.style = { width, height };
    for (const child of children) {
        element.appendChild(document.querySelector(`#${child}`));
    }
};