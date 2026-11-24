#!/usr/bin/env node
import pool from "./pool.js";

async function runMigrations() {
  console.log("🚀 Running migrations...");

  try {
    console.log("\n📋 Migration 001: Adding audit fields to subscribers table");
    await pool.query(`
      ALTER TABLE subscribers
      ADD COLUMN IF NOT EXISTS business_name VARCHAR(255),
      ADD COLUMN IF NOT EXISTS business_location VARCHAR(255),
      ADD COLUMN IF NOT EXISTS service_type VARCHAR(100),
      ADD COLUMN IF NOT EXISTS research_status VARCHAR(50) DEFAULT 'pending',
      ADD COLUMN IF NOT EXISTS research_data JSONB,
      ADD COLUMN IF NOT EXISTS research_completed_at TIMESTAMP;
    `);
    console.log("✅ Migration 001 completed");

    // Verify migration
    const result = await pool.query(`
      SELECT column_name FROM information_schema.columns
      WHERE table_name = 'subscribers' AND column_name IN (
        'business_name', 'business_location', 'service_type',
        'research_status', 'research_data', 'research_completed_at'
      );
    `);

    if (result.rows.length === 6) {
      console.log("✅ All columns verified");
    } else {
      console.warn("⚠️  Only " + result.rows.length + " columns found (expected 6)");
    }

    console.log("\n📋 Migration 002: Adding intake_data column for lead qualifying fields");
    await pool.query(`
      ALTER TABLE subscribers
      ADD COLUMN IF NOT EXISTS intake_data JSONB;
    `);
    console.log("✅ Migration 002 completed");

    console.log("\n✨ All migrations completed successfully");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Migration failed:", error.message);
    process.exit(1);
  }
}

runMigrations();
