const Renderer = ({ width, height, onAnimate, refId }) => {
    return {
        name: "Renderer",
        gengineItem: true,
        attributes: {
            onAnimate,
            height,
            width,
            refId
        }
    };
};
export default Renderer;