import { TinyColor } from "@ctrl/tinycolor"

const utils = () => {
    const getSvgFill = (bgContainer: string): string => {
        const color = new TinyColor(bgContainer);
        return color.isLight() ? '#000' : '#FFF';
    }

    return {
        getSvgFill,
    }
}

export default utils;