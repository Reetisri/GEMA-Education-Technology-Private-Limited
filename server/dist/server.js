"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const enquiry_1 = __importDefault(require("./routes/enquiry"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
// Middleware
app.use((0, cors_1.default)({
    origin: CLIENT_URL,
    credentials: true
}));
app.use(express_1.default.json());
// Routes
app.use('/api', enquiry_1.default);
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        database: mongoose_1.default.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});
// Database Connection with graceful fallback
if (MONGODB_URI) {
    console.log('Attempting to connect to MongoDB...');
    mongoose_1.default.connect(MONGODB_URI)
        .then(() => {
        console.log('MongoDB connected successfully!');
    })
        .catch((err) => {
        console.error('MongoDB connection error. Starting server in console-fallback mode...');
        console.error(err.message);
    });
}
else {
    console.warn('MONGODB_URI is not defined in .env. Starting server in console-fallback mode...');
}
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
