const MeshBasicMaterial = ({ color, refId }) => {
    return {
        name: "MeshBasicMaterial",
        gengineItem: true,
        attributes: {
            color,
            refId
        }
    };
};
export default MeshBasicMaterial;