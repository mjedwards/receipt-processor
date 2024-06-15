export const findReceipt = (id, db) => {
    return db.find(receipt => receipt.id === id);
};