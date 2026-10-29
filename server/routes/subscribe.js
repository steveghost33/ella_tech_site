import { Router } from "express";
import { subscribe, getSubscribers, markContacted, processEmailSequence, clearSubscribers, deleteSubscriber } from "../controllers/subscribeController.js";
import { createRateLimiter } from "../lib/rateLimiter.js";

const router = Router();

const subscribeRateLimit = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 8 });
const adminRateLimit = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 30 });

router.post("/subscribe", subscribeRateLimit, subscribe);
router.get("/subscribers", adminRateLimit, getSubscribers);
router.put("/subscribers/:id/contacted", adminRateLimit, markContacted);
router.post("/process-emails", adminRateLimit, processEmailSequence);
router.get("/subscribers/clear", adminRateLimit, clearSubscribers);
router.delete("/subscribers/:id", adminRateLimit, deleteSubscriber);

export default router;
