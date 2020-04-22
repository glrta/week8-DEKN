function router() {
    let routes = {};

    function get(path, callback) {
        routes[path] = callback;
    }

    return {get};
}

export default router;
