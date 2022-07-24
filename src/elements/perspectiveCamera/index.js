const PerspectiveCamera = ({
    fov,
    aspect,
    near,
    far,
    position,
    refId
}) => {
    return {
        name: "PerspectiveCamera",
        gengineItem: true,
        attributes: {
            fov,
            aspect,
            near,
            far,
            position,
            refId
        }
    };
};

export default PerspectiveCamera;