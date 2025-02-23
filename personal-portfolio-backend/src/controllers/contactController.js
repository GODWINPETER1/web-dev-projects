import { sendEmail } from "../services/emailServices.js";

export const sendContactMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("Request Body:", req.body); // Log the request body for debugging

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const response = await sendEmail(name, email, phone, message);

    if (response.success) {
      res.status(200).json({ success: true, message: "Message sent successfully" });
    } else {
      res.status(500).json({ success: false, message: response.message });
    }
  } catch (error) {
    console.error("Error in sendContactMessage:", error); // Log the error
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

