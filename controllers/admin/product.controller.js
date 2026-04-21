//[GET] /adim/products
const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");


module.exports.index = async (req, res) => {
    const filterStatus = filterStatusHelper(req.query);

    let find = {
        deleted: false,

    };
    if (req.query.status) {
        find.status = req.query.status;
    }
    // tim kiem
    const objectSearch = searchHelper(req.query);
    if (objectSearch.regex) {
        find.title = objectSearch.regex;
    }
    // end tim kiem
    //pagination
    const countProduct = await Product.countDocuments(find);
    let objectPagination = paginationHelper({
        limitItem: 4,
        currenPage: 1,
    },
        req.query,
        countProduct);

    //end pagination


    const products = await Product.find(find)
        .sort({ position: "desc" })
        .limit(objectPagination.limitItem)
        .skip(objectPagination.skip);


    res.render("admin/pages/products/index",
        {
            PageTitle: "Trang danh sách sản phẩm",
            products: products,
            filterStatus: filterStatus,
            keyword: objectSearch.keyword,
            pagination: objectPagination
        })
};
//[PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {

    const status = req.params.status;
    const id = req.params.id;
    await Product.updateOne({ _id: id }, { status: status });
    req.flash('success', "Cập nhật trạng thái thành công");
    res.redirect(req.get('Referer') || '/');
};
//[PATCH] /admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
    const type = req.body.type;
    const ids = req.body.ids.split(", ");

    switch (type) {
        case "active":
            await Product.updateMany({ _id: { $in: ids } }, { status: "active" });
            req.flash('success', `Cập nhật trạng thái thành công ${ids.length} sản phẩm!`);

            break;
        case "inactive":
            await Product.updateMany({ _id: { $in: ids } }, { status: "inactive" });
            req.flash('success', `Cập nhật trạng thái thành công ${ids.length} sản phẩm!`);

            break;
        case "delete-all":
            await Product.updateMany({ _id: { $in: ids } }, {
                deleted: true,
                deleteAt: new Date(),
            }

            );
            req.flash('success', `Xoá thành công ${ids.length} sản phẩm!`);
            break;
        case "change-position":
            for (const item of ids) {
                let [id, position] = item.split("-");
                position = parseInt(position);
                await Product.updateOne({ _id: id }, { position: position });
            }
            req.flash('success', `Thay đ thành công ${ids.length} sản phẩm!`);

        default:
            break;
    }

    res.redirect(req.get('Referer') || '/');

};
//[DELETE] /admin/products/:id
module.exports.deleteItem = async (req, res) => {

    const id = req.params.id;
    await Product.deleteOne({ _id: id });
    res.redirect(req.get('Referer') || '/');
};
//[DELETE] xoa mem

// module.exports.deleteItem = async (req, res) => {

//     const id = req.params.id;
//     await Product.updateOne({ _id: id },{deleted:true,
// deleteAt:new Date()});
//     res.redirect(req.get('Referer') || '/');
// };
//[GET] /adim/products/create
module.exports.create = async (req, res) => {
    res.render("admin/pages/products/create", {
        PageTitle: "Thêm mới sản phẩm"
    });
}