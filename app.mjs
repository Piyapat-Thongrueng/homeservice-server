import experss from "express";
import cors from "cors";
import "dotenv/config";

const app = experss();
const PORT = process.env.PORT || 3000;
app.use(experss.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Frontend local (Vite)
      "http://localhost:3000", // Frontend local (React แบบอื่น)// Frontend ที่ Deploy แล้ว
      // ✅ ให้เปลี่ยน https://your-frontend.vercel.app เป็น URL จริงของ Frontend ที่ deploy แล้ว
    ],
  }),
);

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
