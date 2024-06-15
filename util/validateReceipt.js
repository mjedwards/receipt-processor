export const validateReceipt = (receipt) => {
	const isEmpty = Object.keys(receipt).length === 0;
    
	if (isEmpty) return false;

    const isMissingData = Object.values(receipt).some(value => {
        return value === undefined || value === null || value === '' || value.length === 0;
    });

    if (isMissingData) return false;

    return true;
};
