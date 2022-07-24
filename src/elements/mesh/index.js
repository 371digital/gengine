const Mesh = ({ refId }) => {
    return {
        name: "Mesh",
        gengineItem: true,
        attributes: {
            refId
        }
    };
};
export default Mesh;