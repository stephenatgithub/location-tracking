interface IConfig {
  port: string;
  mongoConnString: string;
  secretKey: string;
  corsOptions: any;
}
const config: IConfig = {
  port: process.env.PORT || '5050',
  mongoConnString: process.env.MONGODB_CONNECTION_STRING || '',
  secretKey: process.env.SECRET_KEY,
  corsOptions: { 
    origin: ["https://admin.socket.io", "http://127.0.0.1:5173/", "http://localhost:5173"], 
    credentials: true
  },
};

export default config;
