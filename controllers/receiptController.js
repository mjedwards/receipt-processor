import { calculatePoints } from "../util/calculatePoints.js";
import { v4 as uuidv4 } from "uuid";
import { validateReceipt } from "../util/validateReceipt.js";
import { findReceipt } from "../util/findReceipt.js";

const storedReceipts = [];
const postReceipts = async (req, res) => {
	try {
		const receipt = req.body;
		const isValid = validateReceipt(receipt);

		if (!isValid)
			return res.status(400).json({ description: "The receipt is invalid" });

		storedReceipts.push(receipt);

		const id = uuidv4();
		receipt.id = id;

		res.status(200).json({ id });
	} catch (err) {
		res.status(500).json({ message: "Could not process the receipt" });
	}
};

const getReceiptPoints = async (req, res) => {
	try {
		const { id } = req.params;
        const selectedReceipt = findReceipt(id, storedReceipts);
        
        if (!selectedReceipt) return res.status(404).json({description: "No receipt found for that id"});

        const getPoints = calculatePoints(selectedReceipt);
        console.log(getPoints)
        res.status(200).json({points: getPoints})

	} catch (err) {
        res.status(500).json({ message: "Could not process the receipt" });
    }
};

export { postReceipts, getReceiptPoints };
