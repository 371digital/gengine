const BoxGeometry = ({ width, height, depth, refId }) => {
    return {
        name: "BoxGeometry",
        gengineItem: true,
        attributes: {
            height,
            width,
            depth,
            refId
        }
    };
};
export default BoxGeometry;