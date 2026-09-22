import express from "express";
import helmet from "helmet";
import cors from "cors";
import pinoHttp from "pino-http";
import { z } from "zod";

const app = express();
app.use(helmet());
app.use(cors());
app.use(pinoHttp());

const Health = z.object({ status: z.literal("ok") });

app.get("/health", (_req, res) => res.json(Health.parse({ status: "ok" })));

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`bench backend-node listening on ${port}`));
