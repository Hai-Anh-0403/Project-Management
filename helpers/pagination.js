module.exports = (objectPagination, query, countProduct) => {
    if (query.page) {
        objectPagination.currenPage = parseInt(query.page);
    }
    objectPagination.skip = (objectPagination.currenPage - 1) * objectPagination.limitItem;

    const totalPage = Math.ceil(countProduct / objectPagination.limitItem);
    objectPagination.totalPage = totalPage;
    return objectPagination;
}