import { resizeThreshold } from '../constants/options.js';

export const withinThreshold = (layout, event) => {
    const { stack } = layout;
    const { right, bottom } = layout.getBoundingClientRect();
    const { offsetX, offsetY, clientX, clientY, target } = event;
    const { offsetWidth, offsetHeight } = target;
    const targetDistance = stack ? offsetHeight - offsetY : offsetWidth - offsetX;
    const parentDistance = stack ? bottom - clientY : right - clientX;
    return targetDistance < resizeThreshold && parentDistance > resizeThreshold;
};